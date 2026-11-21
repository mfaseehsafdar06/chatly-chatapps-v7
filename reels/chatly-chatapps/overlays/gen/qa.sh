#!/bin/bash
# QA: 4 fps contact sheets of the preview (qa/sheet4fps_N.jpg) + alpha-coverage runs/jumps from the alpha master (qa/alpha.txt)
set -e
cd "$(dirname "$0")/.."
rm -f qa/sheet4fps_*.jpg
ffmpeg -v error -i out/preview-overlays-on-aroll.mp4 -vf "fps=4,scale=384:216,drawtext=text='%{pts\:hms}':x=4:y=4:fontsize=16:fontcolor=yellow:box=1:boxcolor=black@0.6,drawbox=x=0:y=180:w=384:h=36:color=red@0.5:t=1,tile=6x8" qa/sheet4fps_%d.jpg
ffmpeg -v error -i out/overlays-alpha.mov -vf "alphaextract,signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=qa/alpha_raw.txt" -f null -
python3 -I - <<'EOF'
import re
v=[float(m) for m in re.findall(r'YAVG=([\d.]+)', open('qa/alpha_raw.txt').read())]
base=min(v); v=[x-base for x in v]  # alphaextract floor is not 0 for 12-bit ProRes alpha
cuts=[202,341,358,692,771,841,1130,1173,1205,1470,1521,1528,1581,1711]
out=[f'frames {len(v)}']
# runs of visible overlay
runs=[];s=None
for i,a in enumerate(v+[0]):
    on=a>0.3
    if on and s is None: s=i
    if not on and s is not None: runs.append((s,i-1)); s=None
for a,b in runs: out.append(f'run {a/30:6.2f}-{(b+1)/30:6.2f}s  {b-a+1:4d} fr' + ('  <-- SHORT' if b-a+1<20 else ''))
# hard on/off at cuts must land exactly on the cut frame
for c in cuts:
    if c<len(v) and v[c-1]-v[c]>30: out.append(f'hard out at cut f{c} ({c/30:.2f}s) ok')
# big frame-to-frame coverage jumps not on a cut (possible pops)
for i in range(1,len(v)):
    d=v[i]-v[i-1]
    if abs(d)>40 and i not in cuts: out.append(f'jump at {i/30:6.2f}s (f{i}) {v[i-1]:.2f}->{v[i]:.2f}')
open('qa/alpha.txt','w').write('\n'.join(out)+'\n'); print('\n'.join(out))
EOF
rm -f qa/alpha_raw.txt
ls qa/sheet4fps_*.jpg
