import cv2, numpy as np, json
cap = cv2.VideoCapture('src/aroll-1120.mov')
fc = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
faces, diffs, prev = [], [], None; i = 0
while True:
    ok, f = cap.read()
    if not ok: break
    small = cv2.resize(f, (480, 270)); g = cv2.cvtColor(small, cv2.COLOR_BGR2GRAY)
    if prev is not None: diffs.append(float(np.mean(np.abs(g.astype(int) - prev.astype(int)))))
    else: diffs.append(0.0)
    prev = g
    if i % 3 == 0:
        d = fc.detectMultiScale(g, 1.1, 5, minSize=(18, 18))
        if len(d): x, y, w, h = max(d, key=lambda r: r[2] * r[3]); faces.append([i, (x + w / 2) * 4, (y + h / 2) * 4, w * 4])
    i += 1
json.dump({'n': i, 'faces': faces, 'diffs': diffs}, open('comp/track.json', 'w'))
d = np.array(diffs); med = np.median(d)
print('frames', i, 'faces', len(faces))
print('spikes', [(k, round(k / 30, 2), round(d[k], 1)) for k in range(1, len(d)) if d[k] > max(6, 3.5 * np.median(d[max(0, k - 15):k + 15]))])
