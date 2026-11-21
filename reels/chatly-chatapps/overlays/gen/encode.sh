#!/bin/bash
# tmp/frames/f%05d.png (transparent) -> out/overlays-alpha.mov (ProRes 4444 + alpha) and out/preview-overlays-on-aroll.mp4
set -e
cd "$(dirname "$0")/.."
N=$(ls tmp/frames | wc -l | tr -d ' ')
[ "$N" = 2032 ] || { echo "expected 2032 frames, have $N"; exit 1; }
ffmpeg -v error -y -framerate 30 -i tmp/frames/f%05d.png -c:v prores_ks -profile:v 4 -pix_fmt yuva444p10le -alpha_bits 16 -vendor apl0 \
  -color_primaries bt709 -color_trc bt709 -colorspace bt709 out/overlays-alpha.mov
ffmpeg -v error -y -i ../src/aroll-1120.mov -framerate 30 -i tmp/frames/f%05d.png \
  -filter_complex "[0:v]format=yuv420p[a];[a][1:v]overlay=0:0:format=auto:eof_action=pass,format=yuv420p[v]" -map "[v]" -map 0:a \
  -c:v libx264 -preset medium -crf 18 -profile:v high -colorspace bt709 -color_primaries bt709 -color_trc bt709 -c:a copy -movflags +faststart \
  out/preview-overlays-on-aroll.mp4
ls -la out/
