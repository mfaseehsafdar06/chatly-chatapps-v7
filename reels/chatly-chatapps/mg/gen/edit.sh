#!/bin/bash
# MG film: frames (0 -> 65.0 s) + official Chatly 24/7 outro (4.03 s, 0.3 s crossfade) + the founder's own voice from the A-roll.
set -e
D="$(cd "$(dirname "$0")/.." && pwd)"; SRC="$D/../src/aroll-1120.mov"; OUT="$D/../out/chatly-chatapps-mg-v1-16x9.mp4"
FR="$D/tmp/frames"; END=65.0
ffmpeg -v error -y -framerate 30 -i "$FR/f%05d.png" -i "$D/assets/outro.mp4" -i "$SRC" -filter_complex "
 [0:v]format=yuv420p,setsar=1[a];[1:v]fps=30,scale=1920:1080,format=yuv420p,setsar=1[o];
 [a][o]xfade=transition=fade:duration=0.3:offset=$(python3 -c "print($END-0.3)")[v];
 [2:a]atrim=0:$END,afade=t=out:st=$(python3 -c "print($END-0.25)"):d=0.25,asetpts=PTS-STARTPTS,loudnorm=I=-15:TP=-1.5:LRA=11,aresample=48000,apad[aud]" \
 -map "[v]" -map "[aud]" -c:v libx264 -preset slow -crf 16 -pix_fmt yuv420p -movflags +faststart -c:a aac -b:a 256k -shortest "$OUT"
echo "$OUT"
