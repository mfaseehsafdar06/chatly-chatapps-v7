"""Audio features for music beds / sfx. Usage: feat.py mode listfile out.json
mode=music|sfx. listfile: one path per line (tab-separated: last column is path)."""
import sys, json, subprocess, numpy as np
from scipy.signal import stft, find_peaks

SR = 22050

def load(path, maxdur=None):
    cmd = ["ffmpeg", "-v", "error", "-i", path]
    if maxdur: cmd += ["-t", str(maxdur)]
    cmd += ["-ac", "1", "-ar", str(SR), "-f", "f32le", "-"]
    raw = subprocess.run(cmd, capture_output=True).stdout
    return np.frombuffer(raw, dtype=np.float32)

def db(x):
    return 20 * np.log10(max(float(x), 1e-9))

def tempo(flux, hop_s):
    f = flux - flux.mean()
    ac = np.correlate(f, f, mode="full")[len(f) - 1:]
    ac /= ac[0] + 1e-9
    lags = np.arange(len(ac)) * hop_s
    best, bpm = -1, 0
    for lag in range(1, len(ac)):
        b = 60 / lags[lag] if lags[lag] else 0
        if 70 <= b <= 180 and ac[lag] > best:
            best, bpm = ac[lag], b
    return round(bpm, 1), round(float(best), 3)

def feats(y, mode):
    if len(y) < SR * 0.05:
        return None
    nper = 1024
    f, t, Z = stft(y, SR, nperseg=nper, noverlap=nper - 512)
    M = np.abs(Z)
    P = M ** 2
    tot = P.sum(0) + 1e-12
    cent = (f[:, None] * P).sum(0) / tot
    frame_rms = np.sqrt(P.mean(0))
    loud = frame_rms > frame_rms.max() * 0.05
    out = {
        "dur": round(len(y) / SR, 2),
        "peak_db": round(db(np.abs(y).max()), 1),
        "rms_db": round(db(np.sqrt((y ** 2).mean())), 1),
        "centroid": int(np.average(cent[loud], weights=tot[loud])) if loud.any() else 0,
        "low_frac": round(float(P[f < 150].sum() / P.sum()), 3),
        "high_frac": round(float(P[f > 4000].sum() / P.sum()), 3),
    }
    flux = np.maximum(np.diff(M, axis=1), 0).sum(0)
    hop_s = 512 / SR
    if mode == "music":
        # 1 s windows loudness spread
        w = SR
        seg = [db(np.sqrt((y[i:i + w] ** 2).mean())) for i in range(0, len(y) - w, w)]
        seg = np.array(seg)
        out["dyn_std"] = round(float(seg.std()), 1)
        out["bpm"], out["pulse"] = tempo(flux[: int(90 / hop_s)], hop_s)
        thr = np.median(flux) + 2 * flux.std()
        pk, _ = find_peaks(flux, height=thr, distance=int(0.1 / hop_s))
        out["onsets_per_s"] = round(len(pk) / (len(y) / SR), 2)
        # per-10s loudness profile
        w10 = SR * 5
        out["prof5s"] = [round(db(np.sqrt((y[i:i + w10] ** 2).mean())), 0) for i in range(0, len(y), w10)]
    else:
        env = frame_rms / (frame_rms.max() + 1e-9)
        ia = int(np.argmax(env))
        out["attack_s"] = round(ia * hop_s, 3)
        above = np.where(env > 0.1)[0]
        out["active_s"] = round((above[-1] - above[0] + 1) * hop_s, 2) if len(above) else 0
        pk, _ = find_peaks(env, height=0.3, distance=int(0.05 / hop_s))
        out["n_hits"] = int(len(pk))
        # pitchiness: spectral flatness (low = tonal)
        flat = np.exp(np.mean(np.log(M[:, loud] + 1e-9), 0)) / (np.mean(M[:, loud], 0) + 1e-9)
        out["flatness"] = round(float(np.median(flat)), 3)
        dom = f[np.argmax(M[:, loud].mean(1))] if loud.any() else 0
        out["dom_hz"] = int(dom)
        # centroid slope (rising = riser/whoosh up)
        cl = cent[loud]
        out["cent_slope"] = int(cl[-1] - cl[0]) if len(cl) > 2 else 0
    return out

if __name__ == "__main__":
    mode, lst, outp = sys.argv[1:4]
    paths = [l.rstrip("\n").split("\t")[-1] for l in open(lst) if l.strip()]
    res = {}
    for i, p in enumerate(paths):
        try:
            y = load(p, maxdur=180 if mode == "music" else 20)
            r = feats(y, mode)
            if r: res[p] = r
        except Exception as e:
            res[p] = {"err": str(e)}
        if i % 25 == 0:
            print(i, len(paths), flush=True)
    json.dump(res, open(outp, "w"), indent=0)
