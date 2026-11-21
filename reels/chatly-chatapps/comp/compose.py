#!/usr/bin/env python3
"""Final compositor (v4): A-roll + face-anchored punch-ins + zoom-through cuts + floating overlays + full-screen MG beats
(zoom-blur crossfades) + the Chatly tile hand-off (A-roll top-right -> MG centre) + early outro blend + captions + audio.
Run with the project venv:  .venv/bin/python comp/compose.py  [VER=v4] [AUDIO=mix/audio_v4.wav] [PREVIEW=t0,t1]"""
import os, json, subprocess, math
import numpy as np, cv2, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from grade import grade as GRADE
from PIL import Image, ImageDraw, ImageFont
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H, FPS = 1920, 1080, 30
AROLL = f'{D}/src/aroll-1120.mov'; OV = f'{D}/overlays/out/overlays-alpha.mov'; MGF = f'{D}/mg/tmp/frames/f%05d.png'
OUTRO = f'{D}/mg/assets/outro.mp4'; TILE = f'{D}/comp/assets/tile_chatly.png'
OUT0 = float(os.environ.get('OUT0', 65.4)); OUTD = 0.7; OUTRO_LEN = 121 / 30
END = OUT0 + OUTRO_LEN
VER = os.environ.get('VER', 'v4'); AUDIO = os.environ.get('AUDIO', f'{D}/mix/audio_v4.wav')
OUTF = f'{D}/out/chatly-chatapps-final-{VER}-16x9.mp4'

cl = lambda x, a=0., b=1.: max(a, min(b, x)); seg = lambda t, a, b: cl((t - a) / (b - a))
ss = lambda k: (k := cl(k)) * k * (3 - 2 * k); eio = lambda k: (4 * cl(k) ** 3 if cl(k) < .5 else 1 - (-2 * cl(k) + 2) ** 3 / 2); eo = lambda k: 1 - (1 - cl(k)) ** 3; ei = lambda k: cl(k) ** 3
lerp = lambda a, b, k: a + (b - a) * k

# ---- A-roll shots (frame-exact) and face anchors ----
SHOTS = [(0, 202), (202, 358), (358, 692), (692, 771), (771, 841), (841, 1130), (1130, 1173), (1173, 1206), (1206, 1470),
         (1470, 1521), (1521, 1533), (1533, 1581), (1581, 1711), (1711, 2032)]
# face anchors per shot (full-res px), read off gridded frames (comp/anch/sheet.jpg)
ANCH = {s: (960., 400.) for s in SHOTS}
ANCH.update({(0, 202): (864, 300), (202, 358): (930, 430), (358, 692): (935, 325), (771, 841): (1255, 560),
             (841, 1130): (907, 324), (1130, 1173): (899, 346), (1711, 2032): (950, 324)})
def shot_of(i): return next(s for s in SHOTS if s[0] <= i < s[1])

# ---- face zoom keyframes per shot (time, zoom); smoothstep between keys ----
ZK = {0: [(0, 1.0), (6.4, 1.07)],
      202: [(6.733, 1.0), (9.40, 1.05), (9.48, 1.05), (9.62, 1.20), (10.2, 1.21), (10.9, 1.04), (11.93, 1.05)],
      358: [(11.933, 1.0), (12.40, 1.0), (12.55, 1.36), (13.50, 1.39), (13.58, 1.39), (13.66, 1.0), (17.4, 1.06)],
      771: [(25.70, 1.0), (27.7, 1.06)],
      841: [(28.033, 1.0), (30.35, 1.05), (30.42, 1.05), (30.56, 1.30), (33.2, 1.34)],
      1130: [(37.667, 1.0), (39.1, 1.2)],
      1711: [(57.033, 1.0), (57.50, 1.0), (57.64, 1.32), (58.45, 1.34), (58.54, 1.34), (58.62, 1.0), (63.3, 1.04), (OUT0, 1.14), (OUT0 + 1, 1.3)]}
def zkey(keys, t):
    if t <= keys[0][0]: return keys[0][1]
    for (t0, z0), (t1, z1) in zip(keys, keys[1:]):
        if t <= t1: return lerp(z0, z1, ss(seg(t, t0, t1)))
    return keys[-1][1]
# zoom-through cuts between A-roll shots: (cut time, pre seconds, post seconds)
ZCUT = [(6.733, .24, .32), (28.033, .22, .30)]
def cutzoom(t):
    m, b = 1.0, 0.0
    for c, pre, post in ZCUT:
        if pre and c - pre <= t < c: k = ei(seg(t, c - pre, c)); m *= 1 + .10 * k; b = max(b, .55 * k ** 1.5)
        if c <= t < c + post: k = 1 - eo(seg(t, c, c + post)); m *= 1 + .08 * k; b = max(b, .55 * k ** 1.5)
    return m, b

# ---- MG windows: (t0, t1, 'A2M'|'M2A'); MG fully on between an A2M and the next M2A ----
XF = [(16.70, 17.05, 'A2M'), (25.70, 26.02, 'M2A'), (32.80, 33.15, 'A2M'), (37.667, 38.0, 'M2A'), (38.78, 39.10, 'A2M'), (57.033, 57.38, 'M2A')]
def mg_state(t):
    on = False
    for a, b, d in XF:
        if t < a: return (1.0 if on else 0.0), None
        if t < b: k = ss(seg(t, a, b)); return (k if d == 'A2M' else 1 - k), (d, k)
        on = d == 'A2M'
    return (1.0 if on else 0.0), None

# ---- Chatly tile sprite: pops top-right on "Chatly", flies to the MG centre tile pose at 39.45 ----
TL = cv2.imread(TILE, cv2.IMREAD_UNCHANGED); TCX, TCY, TS = 360, 320, 420
P0 = (1640, 330, 176); FLY0, FLY1, POP = 38.86, 39.45, 38.45
def p1(t): return (960, 330 + 105 + 8 * math.sin(FLY1 * 1.6), 210)
def sprite_pose(t):
    if t < POP or t >= FLY1: return None
    k = seg(t, POP, POP + .5); pop = 1 - math.exp(-6 * k) * math.cos(7.5 * k)
    if t < FLY0: return P0[0], P0[1], P0[2] * lerp(.4, 1, pop), cl(k * 3)
    f = ss(seg(t, FLY0, FLY1)); x1, y1, s1 = p1(t)
    return lerp(P0[0], x1, f), lerp(P0[1], y1, f) - 60 * math.sin(math.pi * f), lerp(P0[2], s1, f), 1.0

WHIP = (11.56, 11.80)        # close-up/lunge -> desk: short soft dissolve on the cut
def tile2_pose(t):            # the real Chatly tile at the settings beat (replaces the gear)
    if not (58.62 <= t < 63.2): return None
    k = seg(t, 58.62, 59.07); pop = 1 - math.exp(-6 * k) * math.cos(7.5 * k)
    return 290, 280, 140 * lerp(.4, 1, pop), cl(k * 3) * (1 - seg(t, 63.0, 63.2))
# intro: the first line as giant bold stacked words (Helvetica Neue Bold, lowercase, tight), word by word
WJ = json.load(open(f'{D}/src/words.json'))
INTRO = [(0.0, list(range(0, 6))), (WJ[6]['s'], list(range(6, 11))), (WJ[11]['s'], list(range(11, 19)))]
INTRO_END = 6.62; FS = 300; ADV = int(FS * .78)
LINES = [[[0, 1], [2, 3], [4, 5]], [[6, 7], [8, 9], [10]], [[11, 12], [13], [14, 15], [16, 17, 18]]]
RED = (48, 30, 200)   # BGR: the lit red of the bean bag after the grade (#C81E30)
FNT = ImageFont.truetype('/System/Library/Fonts/HelveticaNeue.ttc', FS, index=1); _icache = {}
TRK = -0.04 * FS
def _wlen(txt): return sum(FNT.getlength(ch) + TRK for ch in txt)
_rng = np.random.default_rng(7); PAPER = np.full((H, W, 3), (236, 241, 243), np.uint8)
for _ in range(260):
    x_, y_ = int(_rng.integers(0, W)), int(_rng.integers(0, H)); r_ = int(_rng.integers(1, 3))
    cv2.circle(PAPER, (x_, y_), r_, tuple(int(v) for v in _rng.integers(40, 120, 3)), -1, cv2.LINE_AA)
INSET = (154, 205, 1766, 875)            # footage window on the paper (reference DdUEnzrpCpn-style title card)
def intro_text(t):
    pi = max(k for k, (t0, _) in enumerate(INTRO) if t >= t0); ws = INTRO[pi][1]
    vis = sum(1 for w in ws if t >= WJ[w]['s'] - .02); key = (pi, vis)
    if key in _icache: return _icache[key]
    im = Image.new('RGBA', (W, H), (0, 0, 0, 0)); d = ImageDraw.Draw(im)
    lines = LINES[pi]; y = (H - len(lines) * ADV) // 2 - 70
    for li, ln in enumerate(lines):
        words = [__import__('re').sub(r"[^a-z']", '', WJ[w]['w'].lower()) for w in ln]
        width = sum(_wlen(w) for w in words) + FNT.getlength(' ') * .8 * (len(words) - 1)
        x = (1840 - width) if li == len(lines) - 1 and width < 1500 else (110, 60, 140, 90)[li]
        for w, wi in zip(words, ln):
            if t >= WJ[wi]['s'] - .02:
                for ch in w: d.text((x, y), ch, font=FNT, fill=(RED[2], RED[1], RED[0], 255)); x += FNT.getlength(ch) + TRK
            else: x += _wlen(w)
            x += FNT.getlength(' ') * .8
        y += ADV
    arr = cv2.cvtColor(np.array(im), cv2.COLOR_RGBA2BGRA); _icache[key] = arr; return arr
def intro_frame(foot, t):   # footage in a window on paper + giant red words; the window opens to full frame at the end
    k = ss(seg(t, 6.22, 6.6)); x0, y0, x1, y1 = [lerp(v, f, k) for v, f in zip(INSET, (0, 0, W, H))]
    rw, rh = int(round(x1 - x0)), int(round(y1 - y0)); sh = min(H, W * rh / max(rw, 1)); sy = lerp(100, 0, k); sy = cl(sy, 0, H - sh)
    win = cv2.resize(foot[int(sy):int(sy + sh), :], (rw, rh), interpolation=cv2.INTER_AREA)
    out = PAPER.copy() if k < 1 else foot.copy()
    out[int(round(y0)):int(round(y0)) + rh, int(round(x0)):int(round(x0)) + rw] = win
    ta = 1 - ss(seg(t, 6.12, 6.36))
    if ta > 0:
        tx = intro_text(t)
        if ta < 1: tx = tx.copy(); tx[..., 3] = (tx[..., 3] * ta).astype(np.uint8)
        over_rgba(out, tx, 0, 0)
    return out
# webcam picture-in-picture over the voice-note MG
PIP = (49.0, 52.7); PW_, PH_ = 480, 270; PX, PY = 70, 728
PIPC = {(1470, 1521): (1010, 380), (1521, 1533): (1000, 450), (1533, 1581): (1100, 420)}
_m = np.zeros((PH_, PW_), np.uint8); cv2.rectangle(_m, (24, 0), (PW_ - 25, PH_ - 1), 255, -1); cv2.rectangle(_m, (0, 24), (PW_ - 1, PH_ - 25), 255, -1)
for cx_, cy_ in ((24, 24), (PW_ - 25, 24), (24, PH_ - 25), (PW_ - 25, PH_ - 25)): cv2.circle(_m, (cx_, cy_), 24, 255, -1, cv2.LINE_AA)
PMASK = cv2.GaussianBlur(_m, (3, 3), 0)
_sh = np.zeros((PH_ + 120, PW_ + 120), np.uint8); _sh[60 + 18:60 + PH_ + 18, 60:60 + PW_] = 140; SHADOW = cv2.GaussianBlur(_sh, (0, 0), 22)
def pip_rgba(A, i):
    s = next((k for k in PIPC if k[0] <= i < k[1]), None); cx_, cy_ = PIPC[s] if s else (1000, 420); cw, ch = 1100, 619
    x0 = int(cl(cx_ - cw / 2, 0, W - cw)); y0 = int(cl(cy_ - ch / 2, 0, H - ch))
    img = cv2.resize(GRADE(A)[y0:y0 + ch, x0:x0 + cw], (PW_, PH_), interpolation=cv2.INTER_AREA)
    return np.dstack([img, PMASK])

# ---- image helpers ----
def warp(img, z, ax, ay, interp=cv2.INTER_LINEAR):
    if abs(z - 1) < 1e-4: return img
    M = np.float32([[z, 0, ax * (1 - z)], [0, z, ay * (1 - z)]])
    return cv2.warpAffine(img, M, (W, H), flags=interp, borderMode=cv2.BORDER_REFLECT)
def zoomblur(img, z, ax, ay, b):
    if b < .04: return warp(img, z, ax, ay)
    acc = np.zeros((H, W, 3), np.float32); n = 4
    for j in range(n): acc += warp(img, z * (1 + .045 * b * j), ax, ay).astype(np.float32)
    return (acc / n).astype(np.uint8)
def gblur(img, s):
    return img if s < .4 else cv2.GaussianBlur(img, (0, 0), s)
def over_rgba(base, rgba, x, y):          # alpha-composite rgba (BGRA uint8) with top-left x,y (clipped)
    h, w = rgba.shape[:2]; x0, y0 = max(0, x), max(0, y); x1, y1 = min(W, x + w), min(H, y + h)
    if x1 <= x0 or y1 <= y0: return
    src = rgba[y0 - y:y1 - y, x0 - x:x1 - x].astype(np.float32); a = src[..., 3:4] / 255.
    roi = base[y0:y1, x0:x1].astype(np.float32); base[y0:y1, x0:x1] = (src[..., :3] * a + roi * (1 - a)).astype(np.uint8)

def reader(path, pix, extra=()):
    p = subprocess.Popen(['ffmpeg', '-v', 'error', *extra, '-i', path, '-f', 'rawvideo', '-pix_fmt', pix, '-'], stdout=subprocess.PIPE)
    ch = 4 if pix in ('bgra', 'rgba') else 3
    def nxt():
        b = p.stdout.read(W * H * ch)
        return None if len(b) < W * H * ch else np.frombuffer(b, np.uint8).reshape(H, W, ch).copy()
    return nxt

def main():
    pv = os.environ.get('PREVIEW')
    f0, f1 = (0, int(round(END * FPS))) if not pv else tuple(int(round(float(v) * FPS)) for v in pv.split(','))
    rA, rO, rX = reader(AROLL, 'bgr24'), reader(OV, 'bgra'), reader(OUTRO, 'bgr24')
    A = O = None; X = None; ai = oi = 0; xi = -1
    ow = f'{D}/out/_preview' if pv else None
    if pv: os.makedirs(ow, exist_ok=True)
    else:
        enc = subprocess.Popen(['ffmpeg', '-v', 'error', '-y', '-f', 'rawvideo', '-pix_fmt', 'bgr24', '-s', f'{W}x{H}', '-r', str(FPS), '-i', '-',
                                '-i', AUDIO, '-vf', f"ass={D}/mix/captions_v4.ass:fontsdir={D}/fonts,format=yuv420p",
                                '-map', '0:v', '-map', '1:a', '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p',
                                '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '256k', '-shortest', OUTF], stdin=subprocess.PIPE)
    last_mg = None; F357 = None
    F358 = np.frombuffer(subprocess.run(['ffmpeg', '-v', 'error', '-i', AROLL, '-vf', 'select=eq(n\\,358)', '-frames:v', '1', '-f', 'rawvideo', '-pix_fmt', 'bgr24', '-'],
                                        capture_output=True).stdout, np.uint8).reshape(H, W, 3).copy()
    for i in range(0, f1):
        t = i / FPS
        if i < 2032: A = rA(); O = rO()
        if i < f0: continue
        wmg, xf = mg_state(t)
        # --- A-roll layer ---
        if wmg < 1 and i < 2032 + 1:
            s = shot_of(min(i, 2031)); ax, ay = ANCH[s]
            z = zkey(ZK.get(s[0], [(0, 1.0)]), t)
            base = GRADE(warp(A, z, ax, ay))
            if O is not None and t > 64.9: O = O.copy(); O[..., 3] = (O[..., 3] * (1 - seg(t, 64.9, 65.3))).astype(np.uint8)
            if O is not None and O[::8, ::8, 3].any(): base = base.copy(); over_rgba(base, O, 0, 0)
            m, b = cutzoom(t)
            if t >= OUT0: k = seg(t, OUT0, OUT0 + OUTD); m *= 1 + .30 * ei(k); b = max(b, k)
            aimg = zoomblur(base, m, ax, ay, b)
            if i == 347: F357 = GRADE(warp(A, zkey(ZK[202], t), *ANCH[(202, 358)]))
            if WHIP[0] <= t < 11.934:   # dissolve, then hold the desk shot's first frame until its footage starts (he is still)
                outg = aimg if i <= 347 else F357
                inc = aimg if i >= 358 else GRADE(warp(F358, zkey(ZK[358], t), *ANCH[(358, 692)]))
                k = ss(seg(t, *WHIP))   # a soft natural dissolve on the cut, the desk shot settling in (no sideways move)
                inc = warp(inc, 1 + .03 * (1 - k), *ANCH[(358, 692)])
                aimg = cv2.addWeighted(outg, 1 - k, inc, k, 0)
        else: aimg = None
        # --- MG layer ---
        if wmg > 0:
            mi = min(i, 1724); mg = cv2.imread(MGF % mi) if os.path.exists(MGF % mi) else last_mg
            last_mg = mg
            if xf and aimg is not None:   # push: the incoming layer slides in from the right and pushes the other out, with motion blur
                e = eio(xf[1]); sft = int(round(W * e)); first, second = (aimg, mg) if xf[0] == 'A2M' else (mg, aimg)
                frame = np.empty_like(mg); frame[:, :W - sft] = first[:, sft:]; frame[:, W - sft:] = second[:, :sft]
                L = int(90 * math.sin(math.pi * cl(xf[1])))
                if L > 2: frame = cv2.blur(frame, (L, 1))
            else: frame = mg
        else: frame = aimg
        # --- outro ---
        if t >= OUT0:
            xi_need = min(int((t - OUT0) * FPS), 120)
            while xi < xi_need: X = rX() if xi < 120 else X; xi += 1
            kd = ss(seg(t, OUT0, OUT0 + OUTD * .6)); k = ss(seg(t, OUT0 + OUTD * .3, OUT0 + OUTD))
            if kd < 1: frame = cv2.convertScaleAbs(frame, alpha=1 - .85 * kd)
            frame = X.copy() if k >= 1 else cv2.addWeighted(frame if kd < 1 else np.zeros_like(X), 1 - k, warp(X, 1 + .06 * (1 - k), 960, 540), k, 0)
        frame = frame.copy()
        if t < INTRO_END: frame = intro_frame(frame, t)
        if PIP[0] <= t < PIP[1] and A is not None:
            k = eo(seg(t, PIP[0], PIP[0] + .35)) * (1 - ss(seg(t, PIP[1] - .28, PIP[1])))
            if k > .01:
                pr = pip_rgba(A, i).copy(); pr[..., 3] = (pr[..., 3] * k).astype(np.uint8); dy = int((1 - k) * 40)
                sh = np.zeros((SHADOW.shape[0], SHADOW.shape[1], 4), np.uint8); sh[..., 3] = (SHADOW * k).astype(np.uint8)
                over_rgba(frame, sh, PX - 60, PY - 60 + dy); over_rgba(frame, pr, PX, PY + dy)
        # --- Chatly tile sprites ---
        for ps in (sprite_pose(t), tile2_pose(t)):
          if ps:
            x, y, sz, op = ps; sc = sz / TS; spr = cv2.resize(TL, None, fx=sc, fy=sc, interpolation=cv2.INTER_AREA)
            if op < 1: spr = spr.copy(); spr[..., 3] = (spr[..., 3] * op).astype(np.uint8)
            over_rgba(frame, spr, int(round(x - TCX * sc)), int(round(y - TCY * sc)))
        if pv: cv2.imwrite(f'{ow}/{t:06.2f}.jpg', frame, [cv2.IMWRITE_JPEG_QUALITY, 85])
        else: enc.stdin.write(frame.tobytes())
        if i % 300 == 0: print('frame', i, flush=True)
    if not pv: enc.stdin.close(); enc.wait(); print(OUTF)

if __name__ == '__main__': main()
