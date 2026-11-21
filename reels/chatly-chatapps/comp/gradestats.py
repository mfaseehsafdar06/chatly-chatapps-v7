import cv2, numpy as np, sys
def grab(path, ts):
    cap = cv2.VideoCapture(path); out = []
    for t in ts:
        cap.set(cv2.CAP_PROP_POS_MSEC, t * 1000); ok, f = cap.read()
        if ok: out.append(cv2.resize(f, (480, 270)))
    return out
def stats(frames, name):
    lab = np.concatenate([cv2.cvtColor(f, cv2.COLOR_BGR2LAB).reshape(-1, 3).astype(float) for f in frames])
    L, a, b = lab[:, 0] * 100 / 255, lab[:, 1] - 128, lab[:, 2] - 128
    hsv = np.concatenate([cv2.cvtColor(f, cv2.COLOR_BGR2HSV).reshape(-1, 3).astype(float) for f in frames])
    print(name, 'L pct 2/10/25/50/75/90/98:', [round(np.percentile(L, p), 1) for p in (2, 10, 25, 50, 75, 90, 98)], 'sat mean', round(hsv[:, 1].mean(), 1))
    for lo, hi, nm in ((0, 25, 'shadow'), (25, 60, 'mid'), (60, 101, 'high')):
        m = (L >= lo) & (L < hi); print(f'   {nm:6s} frac {m.mean():.2f} a {a[m].mean():+.1f} b {b[m].mean():+.1f}')
ref = grab('/Users/faseeh/Developer/Chatly/reference/ig/DdUEnzrpCpn/DdUEnzrpCpn.mp4', [10, 13, 20, 28, 34, 46, 55, 70])
stats(ref, 'REF')
ours = grab('src/aroll-1120.mov', [3, 8.5, 12.8, 16, 26.5, 31, 38.3, 60])
stats(ours, 'OURS')
