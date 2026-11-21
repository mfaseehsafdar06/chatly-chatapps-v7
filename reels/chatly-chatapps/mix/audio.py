#!/usr/bin/env python3
"""Sound design for the final mix: his voice + one continuous music line (Ziggy - Walk the Walk, clean instrumental, 143.5 bpm)
+ an SFX bus. Music runs track 70.23 s -> so its breakdown (105.4 s) sits under the useless-bot / whisper beat and the drop (110.41 s)
lands on the 40.17 cut into the product reveal. Comedy stops: record-stop on "actual job", hard cut + boom on the magnifier.
Music is sidechain-ducked under the voice; SFX bus lightly ducked. -> mix/audio_v3.wav (71.53 s)"""
import os, subprocess
D = os.path.dirname(os.path.abspath(__file__)); R = os.path.dirname(D)
VO = f'{R}/src/aroll-1120.mov'; MUS = f'{D}/music.mp3'; S = lambda n: f'{D}/sfx/{n}'
TOTAL = 71.53; AEND = 67.8; MOFF = 70.23

# music volume automation (dB, piecewise linear between keyframes) and low-pass windows
VOL = [(0, -60), (0.25, 0), (10.15, 0), (10.2, -60), (11.93, -60), (11.95, 0),   # record stop on "actual job", back on the desk cut
       (25.72, 0), (25.75, -60), (27.84, -60), (27.9, 0),                       # magnifier gag: dead air, boom on "starts"
       (34.6, 0), (37.6, -4), (40.15, -2), (40.17, 2), (41.5, 0),               # breakdown under the whisper, drop on 40.17
       (66.2, 0), (TOTAL - 1.2, -3), (TOTAL, -60)]
LP = [(21.44, 25.72), (32.95, 34.6)]                                             # muffled: "we have to leave" + montage, bot reply

# SFX cues: (time, file, gain dB)
C = [
 # hook: notification pings (overlay cards 0.62 / 1.95 / 3.62), "we need to talk" gets the buzz
 (0.60, 'ping.mp3', -10), (1.93, 'ping.mp3', -10), (3.58, 'buzz.wav', -6), (3.62, 'ping.mp3', -8),
 # close-up: tiles pop, docs/sheets on "actual job", record stop
 (7.14, 'pop1.mp3', -14), (7.45, 'pop1.mp3', -16), (9.48, 'pop1.mp3', -13), (10.16, 'recstop.mp3', -5),
 # the lunge / phone throw
 (10.95, 'whooshbig.mp3', -6), (11.62, 'thud.mp3', -2), (11.93, 'impact.mp3', -16),
 # desk: chips float in
 (14.22, 'whoosh.mp3', -18), (14.70, 'pop1.mp3', -18), (15.36, 'pop1.mp3', -18), (15.82, 'pop1.mp3', -18), (16.46, 'pop1.mp3', -18),
 (17.92, 'pop1.mp3', -18), (18.36, 'pop1.mp3', -18),
 # cut to the WhatsApp list, Sam's ask jumps to the top
 (19.86, 'swipe.mp3', -12), (20.48, 'ping.mp3', -9),
 # "we have to leave": punch-in drop
 (21.42, 'subdrop.mp3', -6), (21.44, 'whooshcut.mp3', -10),
 # montage: tabs tick in, three renames stamp, file flies, sent on "chat"
 *[(22.85 + i * 0.077, 'tick.mp3', -16) for i in range(13)],
 (23.95, 'stamp.mp3', -9), (24.18, 'stamp.mp3', -8), (24.42, 'stamp.mp3', -6),
 (24.80, 'whoosh.mp3', -10), (25.26, 'send.mp3', -2),
 # magnifier gag
 (25.70, 'recstop.mp3', -9), (27.06, 'boom.mp3', -6),
 # bot replies
 (29.24, 'pop1.mp3', -15), (32.93, 'whoosh.mp3', -12),
 (33.50, 'keys.mp3', -12), (34.30, 'send.mp3', -4), (34.76, 'glitch.mp3', -12), (34.80, 'ping.mp3', -12),
 # whisper -> behind-the-scenes -> DROP
 (39.0, 'riser.mp3', -7, 1.03), (39.08, 'whooshcut.mp3', -12), (40.17, 'brandhit.mp3', -3), (40.17, 'subdrop.mp3', -5),
 # product: tiles, text it, deck arrives, three results
 (41.10, 'pop1.mp3', -10), (41.70, 'pop1.mp3', -10),
 (42.35, 'keys.mp3', -14), (43.00, 'send.mp3', -3), (43.74, 'ping.mp3', -6),
 (45.30, 'whoosh.mp3', -12), (45.48, 'pop1.mp3', -9), (46.24, 'pop1.mp3', -9), (47.50, 'pop1.mp3', -9), (47.56, 'ping.mp3', -14),
 # voice note
 (48.98, 'whooshcut.mp3', -12), (49.30, 'keys.mp3', -16), (50.62, 'whip.mp3', -6), (51.20, 'click.mp3', -8), (52.32, 'send.mp3', -4),
 # web app sync
 (52.68, 'whoosh.mp3', -10), (54.08, 'tick.mp3', -12), (54.26, 'tick.mp3', -12), (54.44, 'tick.mp3', -12), (54.62, 'tick.mp3', -12),
 (55.36, 'shimmer.mp3', -8),
 # CTA: settings card, Connect press, connected
 (57.03, 'impact.mp3', -18), (58.62, 'pop1.mp3', -14), (59.48, 'whoosh.mp3', -16), (60.30, 'click.mp3', -4), (60.55, 'done.mp3', -8),
 (61.10, 'tick.mp3', -14), (61.85, 'tick.mp3', -14),
 # coming soon tiles, walk-off, outro
 (63.90, 'pop1.mp3', -14), (64.05, 'pop1.mp3', -14), (64.20, 'pop1.mp3', -14),
 (65.40, 'whoosh.mp3', -14), (65.60, 'revriser.mp3', -8), (67.55, 'brandhit.mp3', -6),
]

def expr(keys):   # piecewise-linear dB -> linear gain expression for ffmpeg volume (t in seconds)
    parts = []
    for (t0, v0), (t1, v1) in zip(keys, keys[1:]):
        g = f"pow(10,({v0}+({v1}-({v0}))*(t-{t0})/{t1 - t0})/20)"
        parts.append(f"between(t,{t0},{t1})*{g}")
    return '+'.join(parts)

lp_on = '+'.join(f'between(t,{a},{b})' for a, b in LP)
inputs = ['-i', VO, '-i', MUS] + sum((['-i', S(c[1])] for c in C), [])
g = [f"[0:a]atrim=0:{AEND},asetpts=PTS-STARTPTS,highpass=f=70,afade=t=out:st={AEND - 0.6:.2f}:d=0.6,loudnorm=I=-16:TP=-2:LRA=9,aresample=48000,apad=whole_dur={TOTAL},asplit=3[vo][sc1][sc2]",
     f"[1:a]atrim={MOFF}:{MOFF + TOTAL},asetpts=PTS-STARTPTS,aresample=48000,volume=-17dB,asplit=2[mf][ml]",
     f"[ml]lowpass=f=500,lowpass=f=500,volume='{lp_on}':eval=frame[mlp]",
     f"[mf]volume='1-({lp_on})':eval=frame[mfu]",
     f"[mfu][mlp]amix=inputs=2:normalize=0,volume='{expr(VOL)}':eval=frame[mus0]",
     f"[mus0][sc1]sidechaincompress=threshold=0.025:ratio=5:attack=20:release=380:makeup=1[mus]"]
for i, c in enumerate(C):
    t, f, db = c[:3]; ss = c[3] if len(c) > 3 else 0; ms = int(round(t * 1000))
    g.append(f"[{i + 2}:a]atrim=start={ss},asetpts=PTS-STARTPTS,aresample=48000,aformat=channel_layouts=stereo,volume={db}dB,adelay={ms}|{ms}[s{i}]")
g.append(''.join(f'[s{i}]' for i in range(len(C))) + f"amix=inputs={len(C)}:normalize=0,apad=whole_dur={TOTAL}[sfx0]")
g.append("[sfx0][sc2]sidechaincompress=threshold=0.05:ratio=2.5:attack=10:release=250[sfx]")
g.append(f"[vo][mus][sfx]amix=inputs=3:normalize=0,atrim=0:{TOTAL},alimiter=limit=0.89,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[out]")
OUT = f'{D}/audio_v3.wav'
subprocess.run(['ffmpeg', '-v', 'error', '-y', *inputs, '-filter_complex', ';'.join(g), '-map', '[out]', '-ac', '2', OUT], check=True)
print(OUT)
