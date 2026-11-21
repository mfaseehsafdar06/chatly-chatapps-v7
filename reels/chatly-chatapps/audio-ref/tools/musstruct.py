import sys, json, subprocess, numpy as np, os
SR = 22050
def load(p, t=None):
    cmd = ["ffmpeg", "-v", "error", "-i", p] + (["-t", str(t)] if t else []) + ["-ac", "1", "-ar", str(SR), "-f", "f32le", "-"]
    return np.frombuffer(subprocess.run(cmd, capture_output=True).stdout, dtype=np.float32)
def prof(x, w=0.5):
    n = int(w * SR); k = len(x) // n
    return 10 * np.log10((x[: k * n].reshape(k, n) ** 2).mean(1) + 1e-12)
res = {}
for name in sys.argv[1:]:
    full = load(f"mus/{name}.wav")
    voc = load(f"mus/sep/htdemucs/{name}/vocals.wav")
    pf, pv = prof(full), prof(voc)
    vocal_s = float(((pv > pf - 10) & (pv > -45)).sum() * 0.5)
    p1 = prof(full, 1.0)
    # section rises: mean of next 2 s minus mean of previous 2 s
    drops = []
    for i in range(2, len(p1) - 2):
        d = p1[i:i + 2].mean() - p1[i - 2:i].mean()
        if d > 3.5: drops.append((i, round(float(d), 1)))
    # merge neighbours
    m = []
    for t, d in drops:
        if m and t - m[-1][0] <= 2:
            if d > m[-1][1]: m[-1] = (t, d)
        else: m.append((t, d))
    res[name] = {"dur": round(len(full) / SR, 1), "vocal_seconds": vocal_s,
                 "vocal_peak_rel": round(float(np.max(pv - pf)), 1),
                 "rises": m, "prof1s": [int(v) for v in p1]}
    print(name, res[name]["dur"], "vocal_s", vocal_s, "rises", m)
    print("   ", " ".join(str(int(v)) for v in p1))
json.dump(res, open("mus/struct.json", "w"))
