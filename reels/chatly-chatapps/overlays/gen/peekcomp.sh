#!/bin/bash
# composite tmp/peek/<t>.png over the A-roll frame at t -> tmp/peekc/<t>.jpg, then a sheet qa/peek_sheet.jpg
cd "$(dirname "$0")/.."
mkdir -p tmp/peekc; rm -f tmp/peekc/*.jpg
for f in tmp/peek/*.png; do t=$(basename "$f" .png)
  ffmpeg -v error -ss "$t" -i ../src/aroll-1120.mov -i "$f" -filter_complex "[0:v][1:v]overlay=0:0,drawtext=text='$t':x=10:y=10:fontsize=36:fontcolor=yellow:box=1:boxcolor=black@0.6" -frames:v 1 -q:v 3 -y "tmp/peekc/$t.jpg"
done
n=$(ls tmp/peekc/*.jpg | wc -l)
ffmpeg -v error -pattern_type glob -i 'tmp/peekc/*.jpg' -vf "scale=640:-1,tile=3x$(( (n+2)/3 ))" -frames:v 1 -y qa/peek_sheet.jpg
