#!/usr/bin/env python3
"""v4 sound: his voice + a slight music bed + SFX with personality, per audio-ref/REF-AUDIO.md
(Wispr Flow / HeyClicky refs: music ~12 dB under the voice, barely ducked, hard stops for jokes; ~25-35 SFX/min, each = the object on screen).
Music: messwave "Lost in the Right Direction" (instrumental, 86 bpm) from 7.89 s -> its main hit lands on the 40.17 drop.
Meme moments: record scratch on "actual job", crickets on the magnifier gag. -> mix/audio_v4.wav (69.43 s)"""
import os, re, subprocess
D = os.path.dirname(os.path.abspath(__file__)); R = os.path.dirname(D); P = f'{R}/audio-ref/picks'
VO = f'{R}/src/aroll-1120.mov'; MUS = f'{P}/music-A_messwave-lost-in-the-right-direction-instr_86bpm.mp3'
OUT0 = 65.4; TOTAL = OUT0 + 121 / 30; MOFF = 7.89; MGAIN = -16

VOL = [(0, -60), (0.3, 0), (10.18, 0), (10.22, -60), (11.93, -60), (11.96, 0),      # record scratch: music stops, back on the desk cut
       (25.72, 0), (25.75, -60), (27.84, -60), (27.92, 0),                         # magnifier: dead air + crickets
       (OUT0, 0), (OUT0 + .3, 4), (TOTAL - 1.0, 4), (TOTAL, -60)]                   # swell under the outro, fade out
LP = [(34.78, 37.6)]                                                                # muffled under the bot's wall of text

# (time, file, level dB after peak-normalising the file to -1 dBFS, [trim seconds])
C = [(3.30, 'phone-vibrate-on-table', -12), (3.40, 'notif-ding-phone-bright', -10),
     (6.50, 'whoosh-zoom-mid', -16),
     (7.10, 'pop-box', -16), (7.45, 'pop-bubbly-ui', -16), (7.80, 'pop-tiny-heart', -15),
     (9.28, 'card-slap-paper', -12),
     (10.20, 'meme-record-scratch-stop', -6), (10.95, 'whoosh-whip-fast', -9), (11.55, 'thud-soft-object', -10),
     (12.40, 'whip-snap-zoom-a', -15),
     (14.70, 'pop-glassy-select', -18), (15.36, 'pop-tiny-heart', -18), (15.82, 'pop-glassy-select', -18), (16.46, 'pop-tiny-heart', -18),
     (16.70, 'swish-ui-soft', -11), (17.60, 'ui-click-crisp', -16), (18.20, 'ui-click-crisp', -17), (18.80, 'ui-click-crisp', -18),
     (20.48, 'notif-ding-positive', -9), (20.90, 'orch-hit-dramatic', -14),
     (22.20, 'whoosh-heavy-rumble', -10), (22.85, 'ticker-rapid-count', -14, 1.0),
     (23.95, 'stamp-rubber-thunk', -13), (24.18, 'stamp-rubber-thunk', -10), (24.42, 'stamp-text-slam-heavy', -6),
     (24.80, 'paper-slide-desk', -13), (25.26, 'send-whoop', -8),
     (25.70, 'swish-air-quick', -13), (25.85, 'meme-crickets-awkward', -16, 1.6), (26.93, 'lens-thud-plastic-tap', -6),
     (30.30, 'whip-snap-zoom-b', -14),
     (32.80, 'swoosh-up-bright', -14), (33.50, 'typing-phone-fast', -16), (34.30, 'send-whoop', -9), (34.78, 'paper-rustle-newspaper', -15, 2.6),
     (37.667, 'whip-swish-tight', -14),
     (38.54, 'pop-glassy-select', -10), (38.69, 'rev-cymbal-into-drop', -10), (40.17, 'ui-burst-sparkle', -9),
     (41.12, 'punch-hit-whoosh', -11), (41.72, 'punch-hit-whoosh', -10),
     (42.35, 'typing-keys-b', -17, .6), (43.00, 'send-whoop', -9), (43.74, 'chime-payment-two-tone', -11),
     (45.48, 'glass-shimmer-flash', -13), (46.32, 'kaching-cash-register', -12), (47.58, 'ding-soft-low', -10),
     (48.80, 'whip-swish-tight', -13), (49.20, 'typing-keys-b', -19, 1.1), (50.45, 'typing-keys-b', -21, .4),
     (50.96, 'rec-button-beep', -9), (52.32, 'pop-box', -10),
     (52.60, 'whoosh-rising-bright', -13), (54.08, 'ui-click-crisp', -16), (54.26, 'ui-click-crisp', -16), (54.44, 'ui-click-crisp', -17),
     (54.62, 'ui-click-crisp', -17), (55.36, 'sparkle-glitter', -14),
     (57.033, 'swish-air-quick', -13), (57.50, 'whoosh-zoom-mid', -15), (58.55, 'swish-ui-soft', -13), (58.62, 'pop-box', -15),
     (60.20, 'toggle-switch-on', -8, .45), (60.55, 'done-chime', -10),
     (63.90, 'pop-box', -15), (64.05, 'pop-bubbly-ui', -15), (64.20, 'pop-tiny-heart', -14),
     (OUT0 + .5, 'glass-shimmer-flash', -12)]

def fpath(n): return next(f'{P}/{f}' for f in os.listdir(P) if f.rsplit('.', 1)[0] == n)
PEAK = {}
for c in C:
    if c[1] in PEAK: continue
    o = subprocess.run(['ffmpeg', '-hide_banner', '-i', fpath(c[1]), '-af', 'volumedetect', '-f', 'null', '-'], capture_output=True, text=True).stderr
    PEAK[c[1]] = float(re.search(r'max_volume: (\S+) dB', o).group(1))

def expr(keys):
    return '+'.join(f"between(t,{t0},{t1})*pow(10,({v0}+({v1}-({v0}))*(t-{t0})/{t1 - t0})/20)" for (t0, v0), (t1, v1) in zip(keys, keys[1:]))
lp_on = '+'.join(f'between(t,{a},{b})' for a, b in LP)
inputs = ['-i', VO, '-i', MUS] + sum((['-i', fpath(c[1])] for c in C), [])
g = [f"[0:a]atrim=0:{OUT0 + .6},asetpts=PTS-STARTPTS,highpass=f=70,volume='1+0.78*between(t,37.6,39.1)':eval=frame,afade=t=out:st={OUT0:.2f}:d=0.6,loudnorm=I=-16:TP=-2:LRA=9,aresample=48000,apad=whole_dur={TOTAL:.3f},asplit=3[vo][sc1][sc2]",
     f"[1:a]atrim={MOFF}:{MOFF + TOTAL:.3f},asetpts=PTS-STARTPTS,aresample=48000,volume={MGAIN}dB,asplit=2[mf][ml]",
     f"[ml]lowpass=f=450,lowpass=f=450,volume='{lp_on}':eval=frame[mlp]", f"[mf]volume='1-({lp_on})':eval=frame[mfu]",
     f"[mfu][mlp]amix=inputs=2:normalize=0,volume='{expr(VOL)}':eval=frame[mus0]",
     "[mus0][sc1]sidechaincompress=threshold=0.05:ratio=2:attack=30:release=450[mus]"]
for i, c in enumerate(C):
    t, n, db = c[:3]; trim = c[3] if len(c) > 3 else None; ms = int(round(t * 1000)); gain = db + (-1 - PEAK[n])
    tr = f"atrim=0:{trim},afade=t=out:st={max(0, trim - .25):.2f}:d=0.25," if trim else ''
    g.append(f"[{i + 2}:a]{tr}aresample=48000,aformat=channel_layouts=stereo,volume={gain:.2f}dB,adelay={ms}|{ms}[s{i}]")
g.append(''.join(f'[s{i}]' for i in range(len(C))) + f"amix=inputs={len(C)}:normalize=0,apad=whole_dur={TOTAL:.3f}[sfx0]")
g.append("[sfx0][sc2]sidechaincompress=threshold=0.06:ratio=2:attack=10:release=250[sfx]")
g.append(f"[vo][mus][sfx]amix=inputs=3:normalize=0,atrim=0:{TOTAL:.3f},alimiter=limit=0.89,loudnorm=I=-14:TP=-1.5:LRA=11,aresample=48000[out]")
OUT = f'{D}/audio_v5.wav'
subprocess.run(['ffmpeg', '-v', 'error', '-y', *inputs, '-filter_complex', ';'.join(g), '-map', '[out]', '-ac', '2', OUT], check=True)
print(OUT, len(C), 'cues')
