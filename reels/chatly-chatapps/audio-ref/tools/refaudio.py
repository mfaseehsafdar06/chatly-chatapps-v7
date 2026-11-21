"""Measure voice vs music vs SFX in reference reels (demucs two-stem split + whisper words).
usage: refaudio.py <ig_dir> id1 id2 ... -> prints JSON per reel"""
import sys, json, subprocess, numpy as np
from scipy.signal import lfilter, stft, find_peaks

SR = 48000

def load(p):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", p, "-ac", "2", "-ar", str(SR), "-f", "f32le", "-"],
                         capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.float32).reshape(-1, 2)

# BS.1770 K-weighting at 48 kHz
B1, A1 = [1.53512485958697, -2.69169618940638, 1.19839281085285], [1.0, -1.69065929318241, 0.73248077421585]
B2, A2 = [1.0, -2.0, 1.0], [1.0, -1.99004745483398, 0.99007225036621]

def kw(x):
    return lfilter(B2, A2, lfilter(B1, A1, x, axis=0), axis=0)

def blocks(xk, win=0.4, hop=0.1):
    """momentary loudness (LUFS) per block, block centre times"""
    w, h = int(win * SR), int(hop * SR)
    p = (xk ** 2).sum(1)
    c = np.concatenate([[0], np.cumsum(p)])
    starts = np.arange(0, len(p) - w, h)
    ms = (c[starts + w] - c[starts]) / w
    lufs = -0.691 + 10 * np.log10(ms + 1e-12)
    return (starts + w / 2) / SR, lufs

def integ(l):
    """gated integrated loudness of a set of momentary blocks"""
    l = l[l > -70]
    if not len(l): return -99
    e = lambda v: -0.691 + 10 * np.log10(np.mean(10 ** ((v + 0.691) / 10)))
    g = e(l) - 10
    l = l[l > g]
    return round(float(e(l)), 1) if len(l) else -99

def speech_mask(words, t, pad=0.12):
    m = np.zeros(len(t), bool)
    for w in words:
        m |= (t >= w["start"] - pad) & (t <= w["end"] + pad)
    return m

def tempo(x):
    f, tt, Z = stft(x, SR, nperseg=2048, noverlap=2048 - 512)
    M = np.log1p(np.abs(Z) * 100)
    flux = np.maximum(np.diff(M, axis=1), 0).sum(0)
    hop = 512 / SR
    fl = flux - flux.mean()
    ac = np.correlate(fl, fl, "full")[len(fl) - 1:]
    ac /= ac[0] + 1e-9
    best, bpm = -1, 0
    for lag in range(int(60 / 185 / hop), int(60 / 68 / hop)):
        if ac[lag] > best: best, bpm = ac[lag], 60 / (lag * hop)
    P = np.abs(Z) ** 2
    cent = (f[:, None] * P).sum(0) / (P.sum(0) + 1e-12)
    loud = P.sum(0) > P.sum(0).max() * 0.01
    return round(bpm, 1), round(float(best), 2), int(np.median(cent[loud])) if loud.any() else 0

def transients(x, t0=0):
    """SFX-ish onsets in the no-vocals stem: 20 ms energy jumps well above a 1.5 s running median"""
    mono = x.mean(1)
    w = int(0.02 * SR)
    n = len(mono) // w
    e = 10 * np.log10((mono[: n * w].reshape(n, w) ** 2).mean(1) + 1e-12)
    med = np.array([np.median(e[max(0, i - 75): i + 1]) for i in range(n)])
    rise = e - med
    pk, props = find_peaks(rise, height=9, distance=12)
    out = []
    for p in pk:
        seg = mono[max(0, p * w - int(0.02 * SR)): p * w + int(0.5 * SR)]
        if len(seg) < 2048: continue
        f, tt, Z = stft(seg, SR, nperseg=1024, noverlap=768)
        P = np.abs(Z) ** 2
        tot = P.sum(0)
        c = float((f[:, None] * P).sum() / (P.sum() + 1e-12))
        env = tot / (tot.max() + 1e-12)
        dur = float((env > 0.05).sum() * 256 / SR)
        flat = float(np.median(np.exp(np.mean(np.log(np.abs(Z) + 1e-9), 0)) / (np.mean(np.abs(Z), 0) + 1e-9)))
        lo = float(P[f < 150].sum() / (P.sum() + 1e-12))
        if lo > 0.6: kind = "boom/thud"
        elif dur < 0.12 and c > 2500: kind = "click/tick"
        elif flat < 0.08 and dur > 0.25: kind = "tonal ding/chime"
        elif flat < 0.15: kind = "pop/blip"
        elif dur > 0.3: kind = "whoosh/noise"
        else: kind = "snap/hit"
        out.append({"t": round(p * w / SR, 2), "rise_db": round(float(rise[p]), 1), "lvl_db": round(float(e[p]), 1),
                    "cent": int(c), "dur": round(dur, 2), "flat": round(flat, 2), "kind": kind})
    return out

def run(ig, rid):
    d = f"{ig}/{rid}"
    voc = load(f"{d}/stems/htdemucs/audio/vocals.wav")
    acc = load(f"{d}/stems/htdemucs/audio/no_vocals.wav")
    mix = load(f"{d}/audio.wav")
    words = [w for s in json.load(open(f"{d}/words/audio.json"))["segments"] for w in s.get("words", [])]
    dur = len(mix) / SR
    t, lv = blocks(kw(voc)); _, la = blocks(kw(acc)); _, lm = blocks(kw(mix))
    sp = speech_mask(words, t)
    gap = ~speech_mask(words, t, pad=0.35)
    voice = integ(lv[sp])
    acc_under = float(np.median(la[sp])) if sp.any() else -99
    acc_gap = float(np.median(la[gap])) if gap.sum() > 5 else None
    acc_floor = float(np.percentile(la, 20))
    bpm, pulse, cent = tempo(acc.mean(1)[: int(60 * SR)])
    tr = transients(acc)
    # drop transients that coincide with speech plosives leaking (rise only during speech & tonal low) – keep all, flag
    speech_s = sum(w["end"] - w["start"] for w in words)
    res = {
        "id": rid, "dur": round(dur, 1), "words": len(words), "speech_frac": round(speech_s / dur, 2),
        "mix_lufs": integ(lm), "voice_lufs": voice,
        "acc_under_voice_med": round(acc_under, 1), "acc_in_gaps_med": None if acc_gap is None else round(acc_gap, 1),
        "acc_p20": round(acc_floor, 1),
        "gap_db_voice_minus_music": round(voice - acc_under, 1),
        "duck_db": None if acc_gap is None else round(acc_gap - acc_under, 1),
        "acc_bpm": bpm, "pulse": pulse, "acc_centroid": cent,
        "n_transients": len(tr), "transients_per_min": round(len(tr) / dur * 60, 1),
        "transients": tr,
    }
    # loudness profile of accompaniment per 2 s (shows music starts/stops/drops)
    res["acc_prof2s"] = [round(float(np.median(la[(t >= a) & (t < a + 2)])), 0) for a in np.arange(0, dur - 0.5, 2)]
    res["voice_prof2s"] = [round(float(np.max(lv[(t >= a) & (t < a + 2)])), 0) for a in np.arange(0, dur - 0.5, 2)]
    return res

if __name__ == "__main__":
    ig = sys.argv[1]
    out = [run(ig, r) for r in sys.argv[2:]]
    json.dump(out, sys.stdout, indent=1)
