# Chatly in WhatsApp & Discord: launch video (v7)

This repo holds the editable project behind the Chatly launch film: the original footage, the motion-graphics source, captions, the colour grade, the audio mix and the compositor. The finished video is on the [v7 release](https://github.com/mfaseehsafdar06/chatly-chatapps-v7/releases/tag/v7).

- **Final video:** [chatly-chatapps-final-v7-16x9.mp4](https://github.com/mfaseehsafdar06/chatly-chatapps-v7/releases/download/v7/chatly-chatapps-final-v7-16x9.mp4). It is 1920×1080, 30 fps, 69.4 s.
- **Build guide:** [CHATLY-CHATAPPS-BUILD.md](CHATLY-CHATAPPS-BUILD.md). It covers every edit decision and timing, and includes the full source. Read it first.

## Get the whole project

1. Clone this repo.
2. Download the two large rendered layers from the [`project-v7` release](https://github.com/mfaseehsafdar06/chatly-chatapps-v7/releases/tag/project-v7). They are too big for git.

   | File | Put it at | What it is |
   |---|---|---|
   | `overlays-alpha.mov` | `reels/chatly-chatapps/overlays/out/overlays-alpha.mov` | The floating icon and notification overlays: ProRes 4444 with alpha, 2032 frames. |
   | `mg-layer-frames-lossless.mkv` | Unpack it as shown below | The full-screen motion-graphics layer: 1725 frames, lossless. |

   Unpack the MG frames that `compose.py` reads:
   ```bash
   cd reels/chatly-chatapps
   mkdir -p mg/tmp/frames
   ffmpeg -i mg-layer-frames-lossless.mkv -start_number 0 mg/tmp/frames/f%05d.png
   ```
   You can also re-render both layers from source instead of downloading them (see "Edit and re-render").
3. Install the tools:
   - Python 3 with `numpy`, `opencv-python` and `pillow`
   - Node with `puppeteer-core`, plus Google Chrome
   - ffmpeg built with libass

## Layout

```
reels/chatly-chatapps/
  src/        aroll-1120.mov (the original A-roll, 67.8 s), aroll-1120.wav, words.json (word timings), captions.srt
  mg/gen/     film.html: the motion-graphics film (HTML/JS, window.render(t)); render.mjs renders its frames
  mg/assets/  outro, deck cover, sneaker ad images, profile photos (av/)
  overlays/gen/  overlays.html + render.mjs + encode.sh: the floating overlay layer
  comp/       compose.py (final compositor), grade.py (colour grade), captions.py, tile.html (Chatly tile sprite)
  cap/        lines.txt (hand-set caption lines), header.ass (caption style)
  mix/        audio_v5.py (music + SFX + voice mix), audio_v5.wav (final mix), captions_v4.ass, sfx/
  audio-ref/  picks/ (sound effects used by audio_v5.py), REF-AUDIO.md (music/SFX research)
  fonts/      Inter SemiBold, Lato
reference/chatly-ui-kit/   Chatly UI kit used by the MG film (CU.* calls)
reels/chatly-smb/brand/fonts/GoogleSansFlex.woff2   font used by the overlays
```

The folders mirror the original workspace, so the relative paths inside the HTML files work as cloned.

## Build the final video

```bash
cd reels/chatly-chatapps
python comp/captions.py                                     # -> mix/captions_v4.ass
VER=v7 AUDIO=mix/audio_v5.wav python comp/compose.py         # -> out/chatly-chatapps-final-v7-16x9.mp4
PREVIEW=20.9,46.3 python comp/compose.py                     # stills only, to out/_preview
```

## Edit and re-render

- **MG film:** edit `mg/gen/film.html`. Then run `END=57.5 node mg/gen/render.mjs frames`, which writes `mg/tmp/frames`. Run `node mg/gen/render.mjs peek 20.9 46.3` for quick stills.
- **Overlays:** edit `overlays/gen/overlays.html`. Then run `node overlays/gen/render.mjs frames && overlays/gen/encode.sh`.
- **Audio:** edit the cue list in `mix/audio_v5.py`, then run `python mix/audio_v5.py`.
- **Machine-specific paths:** `render.mjs` contains absolute paths for Chrome and puppeteer from the original Mac. Point them at your own install.

## Not included

- **The two music tracks** (`audio-ref/picks/music-*`, "Lost in the Right Direction" by messwave, and an alternative) are left out because they are licensed tracks. `mix/audio_v5.wav` already contains the finished mix. To remix, add your own copy of the track at the path `audio_v5.py` expects, or swap in another one.
- **Working files:** QA stills, old versions and reference screenshots from Instagram are left out.
