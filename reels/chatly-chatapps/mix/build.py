#!/usr/bin/env python3
"""Final mix: A-roll (his voice throughout) cut with the MG film on the script's B-ROLL beats, a punch-in on
"we have to leave", optional floating-icon overlays (on A-roll only), small Inter SemiBold captions (white on A-roll,
ink on MG; hidden where the MG already types the same words), then the official 24/7 outro.
Run: python3 mix/build.py  -> out/chatly-chatapps-final-v1-16x9.mp4"""
import json, os, subprocess
D = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A = f'{D}/src/aroll-1120.mov'; M = f'{D}/out/chatly-chatapps-mg-v1-16x9.mp4'; O = f'{D}/mg/assets/outro.mp4'
OV = f'{D}/overlays/out/overlays-alpha.mov'
VER = os.environ.get('VER', 'v1'); OUT = f'{D}/out/chatly-chatapps-final-{VER}-16x9.mp4'
AEND = 67.8   # A-roll ends after the walk-off; outro crossfades in over the last 0.3 s

# MG (B-ROLL) intervals on the shared timeline, from the script:
# (hook notification pings are the floating overlays on the A-roll; every boundary sits on an A-roll shot cut or inside a shot,
#  so no A-roll sliver shorter than ~1 s is left between MG beats)
MG = [(19.90, 21.44),  # overhead WhatsApp: "can you make me a slide? 🙏"
      (22.98, 25.75),  # silent-B-roll problem montage: tabs -> final_FINAL_v3 -> dragged into WhatsApp
      (32.95, 37.67),  # wall-of-text bot reply
      (40.17, 49.00),  # product B-roll: WhatsApp + Discord, deck back in chat, slides/ads/inbox (shot cuts 40.17, 49.0)
      (52.70, 57.03)]  # web app Recents (shot 14 = 52.70-57.03)
NOCAP = [(19.90, 21.44), (40.17, 49.00)]   # MG already types these words
ZOOM = (21.44, 22.98, 1.6, 1060, 420)      # "…we have to leave." punch-in (scale, centre)

def inside(a, b, iv): return sum(max(0, min(b, y) - max(a, x)) for x, y in iv) / max(1e-6, b - a)

# ---- captions: reuse the hand-set lines from cap/ ----
ns = {}; exec(open(f'{D}/cap/build_ass.py').read().split("hdr=open")[0].replace("open('src/", f"open('{D}/src/").replace("open('cap/", f"open('{D}/cap/"), ns)
ev = []
for k, c in enumerate(ns['chunks']):
    s = c[0]['s']; e = c[-1]['e'] + .15
    if k + 1 < len(ns['chunks']):
        n = ns['chunks'][k + 1][0]['s']; e = n if n - e < .3 else min(e, n)
    ev.append((s, e, ' '.join(x['w'] for x in c).rstrip('.,')))
t = lambda x: f"{int(x//3600)}:{int(x%3600//60):02}:{x%60:05.2f}"
INK = 'Style: Ink,Inter SemiBold,44,&H001E1815,&H001E1815,&H00000000,&H00000000,0,0,0,0,100,100,-0.6,0,1,0,0,2,80,80,170,1'
hdr = ''.join(l + (INK + '\n' if l.startswith('Style: Shd') else '') for l in open(f'{D}/cap/header.ass').read().splitlines(True))
if not hdr.endswith('\n'): hdr += '\n'
lines = []
for s, e, x in ev:
    if inside(s, e, NOCAP) > .5: continue
    if inside(s, e, MG) > .5:
        lines.append(f"Dialogue: 1,{t(s)},{t(e)},Ink,,0,0,0,,{{\\pos(960,992)\\an2}}{x}")
    else:
        e = min([e] + [x for x, _ in MG if s < x < e])   # white captions stop at the cut into MG
        lines.append(f"Dialogue: 0,{t(s)},{t(e)},Shd,,0,0,0,,{{\\blur5\\pos(961,994)\\an2}}{x}")
        lines.append(f"Dialogue: 1,{t(s)},{t(e)},Cap,,0,0,0,,{{\\pos(960,992)\\an2}}{x}")
os.makedirs(f'{D}/mix', exist_ok=True)
open(f'{D}/mix/captions_mix.ass', 'w').write(hdr + '\n'.join(lines) + '\n')

# ---- video graph ----
z0, z1, zs, zx, zy = ZOOM; cw, ch = round(1920 / zs / 2) * 2, round(1080 / zs / 2) * 2
have_ov = os.path.exists(OV)
inp = ['-i', A, '-i', M, '-i', O] + (['-i', OV] if have_ov else [])
mg_en = '+'.join(f'between(t,{a},{b})' for a, b in MG)
g = [f"[0:v]fps=30,format=yuv420p,setsar=1,split[a0][a1]",
     f"[a1]crop={cw}:{ch}:{zx - cw // 2}:{zy - ch // 2},scale=1920:1080:flags=lanczos[az]",
     f"[a0][az]overlay=enable='between(t,{z0},{z1})'[b0]"]
last = 'b0'
if have_ov:
    g.append(f"[3:v]fps=30,format=yuva444p10le[ov]")
    g.append(f"[{last}][ov]overlay=format=auto:enable='not(between(t,{z0},{z1}))'[b1]"); last = 'b1'
g += [f"[1:v]fps=30,trim=0:{AEND},setpts=PTS-STARTPTS,format=yuv420p,setsar=1[mg]",
      f"[{last}][mg]overlay=enable='{mg_en}'[b2]",
      f"[b2]trim=0:{AEND},setpts=PTS-STARTPTS,ass={D}/mix/captions_mix.ass:fontsdir={D}/fonts,format=yuv420p[main]",
      f"[2:v]fps=30,scale=1920:1080,format=yuv420p,setsar=1[o]",
      f"[main][o]xfade=transition=fade:duration=0.3:offset={AEND - 0.3:.2f}[v]",
      f"[0:a]atrim=0:{AEND},asetpts=PTS-STARTPTS,afade=t=out:st={AEND - .6:.2f}:d=0.6,loudnorm=I=-15:TP=-1.5:LRA=11,aresample=48000,apad[aud]"]
AUD = os.environ.get('AUDIO')   # a finished sound-design mix (mix/audio.py) replaces the voice-only track
if AUD:
    inp += ['-i', AUD]; g[-1] = f"[{len(inp) // 2 - 1}:a]anull[aud]"
cmd = ['ffmpeg', '-v', 'error', '-y', *inp, '-filter_complex', ';'.join(g), '-map', '[v]', '-map', '[aud]',
       '-c:v', 'libx264', '-preset', 'slow', '-crf', '16', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', '-c:a', 'aac', '-b:a', '256k', '-shortest', OUT]
print('overlays:', 'yes' if have_ov else 'no (not rendered yet)')
subprocess.run(cmd, check=True)
print(OUT)
