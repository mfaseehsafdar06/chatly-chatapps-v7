"""Captions for v4: white (soft shadow) over the A-roll, ink over MG, hidden where the MG types the same words."""
import os, json, re
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MG = [(16.87, 25.84), (33.0, 37.81), (38.96, 57.17)]
NOCAP = [(0, 6.45), (17.40, 21.0), (39.0, 52.7)]
W = json.load(open(f'{D}/src/words.json')); lines = [l.split() for l in open(f'{D}/cap/lines.txt').read().splitlines() if l.strip()]
norm = lambda x: re.sub(r"[^a-z0-9']", '', x.lower()); chunks = []; i = 0
for l in lines: chunks.append(W[i:i + len(l)]); i += len(l)
ins = lambda a, b, iv: sum(max(0, min(b, y) - max(a, x)) for x, y in iv) / max(1e-6, b - a)
t = lambda x: f"{int(x//3600)}:{int(x%3600//60):02}:{x%60:05.2f}"
INK = 'Style: Ink,Inter SemiBold,44,&H001E1815,&H001E1815,&H00000000,&H00000000,0,0,0,0,100,100,-0.6,0,1,0,0,2,80,80,170,1'
hdr = ''.join(l + (INK + '\n' if l.startswith('Style: Shd') else '') for l in open(f'{D}/cap/header.ass').read().splitlines(True))
out = []
for k, c in enumerate(chunks):
    s = c[0]['s']; e = c[-1]['e'] + .15
    if k + 1 < len(chunks): n = chunks[k + 1][0]['s']; e = n if n - e < .3 else min(e, n)
    x = ' '.join(w['w'] for w in c).rstrip('.,')
    if ins(s, e, NOCAP) > .5: continue
    if ins(s, e, MG) > .5:
        e = min([e] + [b for a, b in MG if s < b < e]); out.append(f"Dialogue: 1,{t(s)},{t(e)},Ink,,0,0,0,,{{\\pos(960,992)\\an2}}{x}")
    else:
        e = min([e] + [a for a, b in MG if s < a < e])
        out += [f"Dialogue: 0,{t(s)},{t(e)},Shd,,0,0,0,,{{\\blur5\\pos(961,994)\\an2}}{x}", f"Dialogue: 1,{t(s)},{t(e)},Cap,,0,0,0,,{{\\pos(960,992)\\an2}}{x}"]
open(f'{D}/mix/captions_v4.ass', 'w').write(hdr + '\n'.join(out) + '\n'); print(len(out), 'events')
