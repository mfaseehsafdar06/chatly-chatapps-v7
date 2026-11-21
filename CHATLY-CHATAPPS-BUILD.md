# Chatly in WhatsApp & Discord: launch video build spec (v7)

This file and `chatly-chatapps-final-v7-16x9.mp4` (same Drive folder) let another Claude rebuild this video exactly, or change it. The first part is the creative spec and edit decisions, every timing included. The appendices hold the complete source code of the pipeline as it was when v7 rendered.

**If you are a Claude reading this:** treat the video as the ground truth for the look and the timing. Every number below came from the scripts that made it. To change something, find its section here, then the matching constant in the appendix code.

---

## 1. What the video is

- **Output:** 16:9, 1920×1080, 30 fps, 69.43 s, H.264 CRF 16 with AAC 256 kb/s, loudness −14 LUFS.
- **Brand:** Chatly (chatlyai.app), an AI agent that does the work. This video announces that Chatly now works inside WhatsApp and Discord.
- **Main picture:** a founder talks to camera in a studio, recorded as one take. That A-roll is the main video, and **his voice runs the whole way through and is never replaced.**
- **Motion graphics (MG):** on the B-roll beats, a full-screen MG film covers the picture while his voice continues. Its screens are WhatsApp, the Chatly product, the web app and the settings.
- **Also layered on top:**
  - floating 3D-ish app-icon and notification overlays, in the style of IG reel DbrJKKvSwos
  - small captions
  - a red title-card intro
  - a light music bed
  - SFX with personality
  - a soft, warm grade
  - the official Chatly 24/7 outro

## 2. Script / transcript (what he actually says, word-timed)

| # | Shot in–out (s) | Setup | Line |
|---|---|---|---|
| 1 | 0.00–6.73 | Wide on a red bean bag, holding his phone | We plan trips in the chat, we fight in the chat and we even break up in the chat. |
| 2 | 6.73–11.93 | Close-up, reclined on the bean bag; at about 11.0 he lunges out of frame | Your entire life happens around the chat except your actual job. |
| 4 | 11.93–23.07 | Wide at the desk | Think about it. It took us 180 years to get really good at chatting. It's literally how we do everything and the minute it comes down to work, we have to leave. |
| 5 | 23.07–25.70 | Desk, picks up a magnifier | And the work, it always ends up in the chat. |
| 6 | 25.70–28.03 | Magnifier pushed into the lens (zoom gag) | It just never starts there. |
| 7 | 28.03–37.67 | Desk, hand gestures | And yes, AI in WhatsApp isn't new, but most of it, it's just replies. The minute you ask for a slide, you'll get an explanation how to make one yourself. |
| 8–9 | 37.67–40.17 | Stage whisper, then a behind-the-scenes shot of the studio | So we built Chatly to just do it. |
| 10 | 40.17–49.00 | Desk, typing on the phone | It's now on WhatsApp and Discord. You text it, the finished work comes back in the same chat. Slides, ads, basically your inbox summarized. |
| 11–13 | 49.00–52.70 | Leans back, whip to the bean bag, phone at his ear | And if you don't feel like typing, just send a voice note. |
| 14 | 52.70–57.03 | Close side angle at the desk | And it all syncs to the web app, so nothing gets lost. |
| 15 | 57.03–67.80 | Wide at the desk; walks off left at about 65.5 | It's live now. Go to settings, chat apps, and connect your number. WhatsApp and Discord now. And yeah, a lot more coming soon. |

- **Frame-exact A-roll shot boundaries** (frames at 30 fps): 0, 202, 358, 692, 771, 841, 1130, 1173, 1206, 1470, 1521, 1533, 1581, 1711, 2032.
- **Word timings:** the per-word timings are in Appendix K (`words.json`, 186 words, each `{w, s, e}`). Every MG cue is keyed to these words.
- **Weak audio:** the whispered "So we built Chatly" (38.2–39.0 s) is the weakest audio moment. The voice is lifted by +5 dB from 37.6 to 39.1 s, and the big on-screen "Chatly" covers it either way.

## 3. Timeline: what is on screen when

"A" means the graded A-roll and "MG" means the full-screen motion-graphics film. **A-roll is visible only at** 0–16.7, 25.7–33.0, 37.67–39.1 and 57.03–65.4. Everything else is MG with his voice underneath.

| Time (s) | Picture | Notes |
|---|---|---|
| 0–6.62 | **Red title card** over the A-roll | Footage sits in an inset (154,205)–(1766,875) on a pale paper background RGB(236,241,243) with specks. Giant lowercase Helvetica Neue Bold words (300 px, tracking −4 %) in the bean-bag red **#C81E30** reveal word by word, staggered over 3 lines: "we plan / trips in / the chat · we fight / in the / chat · and we / even / break up / in the chat". The words fade out from 6.12 to 6.36 and the inset opens to full frame from 6.22 to 6.60. |
| 3.40 | Overlay: girlfriend notification **"Babe ❤️ — we need to talk."** | The only overlay on shot 1. |
| 6.73 | Zoom-through cut to the close-up | The zoom is +10 % going in and 8 % coming out, with a light radial blur. Kept subtle; the user found the first version "too bouncy". |
| 7.14–10.7 | Overlays: WhatsApp and Discord tiles, plus a chip reading "Friends 🏝️ · 238 new messages" | At 9.48 a dimmed Docs tile and a dimmed Sheets tile appear on "actual job". |
| 9.48–10.2 | Face punch-in to 1.20 on "actual job" | It eases back out by 10.9. |
| 11.56–11.80 | **Soft dissolve** to the desk | The outgoing frame freezes at frame 347 so the lunge's light stand never shows. The desk frame 358 settles from 1.03 to 1.0. The user rejected a side push here as "forced". |
| 12.46–13.58 | Punch-in to 1.36 on "Think about it" | — |
| 14.70–16.7 | Overlays: message chips pop in | "Mom: did you eat?", "Jake: lol send it", "Trip group: who's booking the Airbnb", "Mia: omw 🏃". |
| 16.70–17.05 | **Push transition A→MG** | MG slides in from the right with horizontal motion blur. From here the MG covers "It's literally how we do everything". |
| 16.6–23.0 | MG **sList**: the WhatsApp chat list on an iPhone | The rows are Trip crew, Mom, Book club, Alex, Gym, Landlord and Boss. The **Boss row jumps to the top** with "can you make me a slide? 🙏". On "work" (20.85–21.5) the camera **zooms ×3 into the Boss message**. On "leave" the whole layer **slides out left** with blur and reveals "we have to leave.", with a marker scribble on "leave". |
| 22.8–25.98 | MG **sDetour**: the work detour | Browser tabs pile up (a "13 tabs" counter). The file name changes final.pptx → final_final.pptx → final_FINAL_v3.pptx, with rubber-stamp SFX. The file then flies into the Boss's WhatsApp chat and is sent on "chat". |
| 25.70–26.02 | Push MG→A | Lands on the magnifier gag. |
| 26.0–28.0 | A: the magnifier gag | — |
| 28.03 | Zoom-through cut | — |
| 29.24–33.3 | Overlays: a WhatsApp tile and two "AI bot" chips | The chips read "Sure! Happy to help 😊" and "Great question!". |
| 30.42 | Punch-in to 1.30 | — |
| 32.80–33.15 | Push A→MG | — |
| 33.0–37.98 | MG **sReplies**: a WhatsApp chat with a generic "AI Assistant" | The user types a slide request, and the bot answers with a wall-of-text "here's how to make one" while the camera pans down it. |
| 37.67–38.0 | Push MG→A | Lands on the whisper. |
| 38.45–39.45 | **Logo hand-off** | A Chatly tile pops at the A-roll's top-right (1640,330, 176 px) at 38.45, then flies from 38.86 to 39.45 into the MG centre (960, about 435, 210 px). The MG push A→MG runs 38.78–39.10, so the tile lands in **sApps**, where the same tile pulses on the drop at 40.17. |
| 38.8–42.35 | MG **sApps** | The Chatly tile, kinetic "to just… do it.", then "Now in WhatsApp and Discord." with both app icons. |
| 42.15–45.5 | MG **sTextIt**: the user texts Chatly in WhatsApp | The finished deck comes back in the same chat. |
| 45.3–49.0 | MG **sThree**: one morphing result card | **Slides → Ads → Inbox summary** morph into one another, at 46.32 (word 134) and 47.58 (word 137). Card heights are 540, 660 and 500, and the app tile and label crossfade. |
| 48.75–52.95 | MG **sVoice**: a voice note being recorded and sent in WhatsApp | A **webcam picture-in-picture** of the real footage sits bottom-left at (70,728), 480×270, rounded with a shadow, from 49.0 to 52.7. It shows him leaning back, then on the bean bag with the phone at his ear. |
| 52.7–57.4 | MG **sWeb**: the Chatly web app | Its Recents show the same chats, synced. |
| 57.03–57.38 | Push MG→A | From here to the end it is A-roll with overlays. |
| 57.56–58.54 | A punch-in to 1.32 on "It's live now" | — |
| 58.62–63.2 | The **real Chatly logo tile** at (290,280), 140 px | Drawn by the compositor. It replaced a generic settings gear. |
| 59.5–63.26 | Overlay: a "Chat apps" settings window card, top-right | The copy comes from the real product: "Message Chatly from WhatsApp or Discord. Replies come back in the same chat." WhatsApp flips to Connected. |
| 63.3–65.4 | A: a slow push from 1.04 to 1.14 as he gets up | — |
| 63.9–65.9 | Overlays: three "ghost" placeholder app tiles | For "a lot more coming soon". The overlay alpha fades out from 64.9 to 65.3. |
| 65.4–69.43 | **Outro** | The A-roll zooms to 1.3 and darkens over 0.42 s while he walks off. The Chatly 24/7 outro (4.03 s, no audio) rises in from 65.61 to 66.1. |

## 4. The MG film (Appendix A)

- **Implementation:** one deterministic HTML/JS page, `film.html`. `window.render(t)` draws the frame for time t, and `render.mjs` (Appendix B) screenshots it with headless Chrome via puppeteer at 30 fps into PNGs.
- **Scene schedule `SCN`:** each entry is `[start, end, fade-in, fade-out, sceneFn]`, listed in the table below. The background palette changes by time through `PSCH` (mint from 16.6, air from 38.8, ice from 52.7, white from 57.4).

  | Scene | Start | End | Fade in | Fade out |
  |---|---|---|---|---|
  | sLife | 6.6 | 12.25 | .25 | .3 |
  | sThink | 12.2 | 13.6 | .2 | .2 |
  | s180 | 13.45 | 16.6 | .2 | 0 |
  | sList | 16.6 | 23.0 | 0 | .2 |
  | sDetour | 22.8 | 25.98 | .15 | 0 |
  | sNever | 26.0 | 27.85 | .2 | .2 |
  | sReplies | 27.7 | 37.98 | .2 | 0 |
  | sApps | 38.8 | 42.35 | 0 | .25 |
  | sTextIt | 42.15 | 45.5 | .2 | .2 |
  | sThree | 45.3 | 49.0 | .15 | .3 |
  | sVoice | 48.75 | 52.95 | .3 | .25 |
  | sWeb | 52.7 | 57.4 | .25 | 0 |
  | sLive | 57.4 | 58.5 | .2 | .2 |
  | sSettings | 58.35 | 62.85 | .25 | .3 |
  | sSoon | 62.6 | 65.01 | .3 | 0 |

  The compositor only shows MG inside the A↔MG windows in §6 (16.7–25.7, 32.8–37.67 and 38.78–57.03), so **the scenes that actually appear in v7 are sList, sDetour, sReplies, sApps, sTextIt, sThree, sVoice and sWeb.** The other scenes are written but fall under A-roll time, so they are unused. They are ready if you want to cover more beats with MG.
- **WhatsApp UI:** iOS 26 light-mode WhatsApp, matched to a real screenshot.
  - Liquid-glass circular buttons (44 px) and a glass header with back, avatar, name, and a video/call capsule.
  - The beige doodle wallpaper, bubbles with radius 17, and a floating glass input bar (+, Message field with sticker, camera, mic).
  - In the chat list: filter chips (All / Unread / Favourites / Groups), the Meta AI ring, and a floating glass tab bar (Updates / Calls / Communities / Chats / You).
- **Phone:** an iPhone Pro frame with a titanium gradient body (radius 80), a black bezel, a screen inset of 14 px with radius 64, the Dynamic Island with its camera dot, side buttons and a home indicator.
- **Profile photos:** real-looking face crops at 256 px, at `mg/assets/av/*.jpg`. Any realistic headshots work.

  | Chat | Photo |
  |---|---|
  | Trip crew | Latino man |
  | Mom | white woman, 50s |
  | Book club | East Asian woman |
  | Alex | Black woman |
  | Gym | Black man |
  | Landlord | South Asian woman |
  | Boss | white man |
  | You | East Asian man |
- **Chatly UI:** built from Chatly's internal UI kit (`reference/chatly-ui-kit/chatly-ui.css` and `.js`, imported as `CU`). The calls used are `CU.appDesktop`, `CU.turn`, `CU.userBubble`, `CU.working`, `CU.fileTiles` and `CU.icon`. If you don't have the kit, recreate the Chatly web app from chatlyai.app: dark sidebar, chat turns, file tiles.
- **Other assets in `mg/assets/`:**
  - `volt.jpg` and `volt_white.jpg`: sneaker ad images for the "ads" result.
  - `q3_cover.png`: the deck cover.
  - `outro.mp4`: the Chatly 24/7 outro, 16:9, 4.03 s.
  - The Chatly logo tile.

## 5. Floating overlays (Appendix C)

- **Implementation:** `overlays.html`, the same render-loop idea, rendered as transparent PNGs and encoded to a ProRes 4444 alpha `.mov`.
- **Style:** after IG DbrJKKvSwos. Glossy app icons (WhatsApp, Discord, Chatly) and iOS notification cards pop in with spring scale and soft shadows, float gently, then pop out.
- **Cues:** all cues are in the file and are cut frame-exact at shot boundaries (the `C` table). The compositor draws overlays on the A-roll layer only, so cues that fall under MG time are hidden.
- **Shot 1:** only the "Babe ❤️ / we need to talk." notification, at 3.40 s.
- **Disabled cues:** the Chatly tile cue at 37.95 (replaced by the compositor's sprite hand-off) and the generic settings gear at 58.62 (replaced by the real Chatly tile).

## 6. Compositor (Appendix D, `compose.py`, Python + OpenCV)

It reads the A-roll, the overlay alpha and the outro through ffmpeg rawvideo pipes, and the MG PNG frames from disk. For each frame:

1. **Face-anchored zoom.** The zoom keys for each shot are in `ZK`, eased with smoothstep, and centred on the hand-picked face anchors in `ANCH`.
2. **Zoom-through cuts** at 6.733 and 28.033. The zoom is +10 % going in and 8 % coming out, with blur 0.55·k^1.5.
3. **Grade** (§7), applied to the A-roll only.
4. **A↔MG push transitions** from `XF`. The incoming layer slides in from the right with a horizontal motion blur of up to 90 px (sin-shaped), and each push lasts 0.32–0.35 s:

   | Time (s) | Direction |
   |---|---|
   | 16.70–17.05 | A→MG |
   | 25.70–26.02 | MG→A |
   | 32.80–33.15 | A→MG |
   | 37.667–38.0 | MG→A |
   | 38.78–39.10 | A→MG |
   | 57.033–57.38 | MG→A |
5. **The dissolve** at 11.56–11.80 (the `WHIP` constant).
6. **The Chatly tile sprite** (`comp/assets/tile_chatly.png`, 720×720 RGBA, rendered from `tile.html`, Appendix E): the hand-off in §3, then the settings tile pose from 58.62 to 63.2.
7. **The intro title card** before 6.62 s, drawn with PIL. Note that the red is BGR (48,30,200) in OpenCV terms.
8. **The webcam PiP** from 49.0 to 52.7. The crop centres follow the shot: (1010,380), then (1000,450), then (1100,420).
9. **The overlays,** after grade and zoom.
10. **The outro blend** from 65.4.

Frames are piped to ffmpeg with the ASS captions burned in (`ass=…:fontsdir=fonts`) and muxed with the audio WAV.

## 7. Colour grade (Appendix F, `grade.py`)

- **The look:** a soft, warm grade after the HeyClicky (@_heyclicky) reels: lifted blacks, creamy compressed highlights, golden mids and natural DSLR skin that is **never green or orange**. The black jacket must stay neutral.
- **The method:** in Lab space.
  - **L curve:** lift blacks to 2.6, pull the mids down 2, and compress highlights above L 72 by ×0.74.
  - **Colour shifts:** b (yellow) gets +2 in the shadows, +9.5 in the mids and +9 in the highlights. a (red) gets +1.5 in the shadows and +1.2 in the mids, and −2.0 in the highlights.
  - **Saturation:** +10 % in the mids only.
  - **Finish:** a highlight bloom (sigma 22, 10 % screen) and a 12 % vignette.
- **Measured:** skin hue is about 52.6°, against about 55° in the reference.
- **Rejected:** an earlier dark, low-key grade after Wispr Flow.

## 8. Captions (Appendices G, H, I)

- **Style:** **Inter SemiBold 44 px**, tracking −0.6, centred at (960, 992). They are white with a soft blurred shadow over the A-roll and switch to ink #15181E over the light MG.
- **Lines:** 37 hand-set phrase lines in `lines.txt`, mapped onto `words.json` in order.
- **Hidden where something else carries the words:** during the red title card (0–6.45), where the MG types the same words (17.40–21.0), and through the product section (39.0–52.7).
- **Clipping:** white captions are clipped at the start of each MG window so they never cross a transition.

## 9. Sound (Appendix J, `audio_v5.py`, one ffmpeg filter graph)

- **Voice:**
  - the A-roll audio with a 70 Hz high-pass
  - +5 dB from 37.6 to 39.1 for the whisper
  - fade-out at 65.4
  - loudnorm at −16
- **Music:**
  - **Track:** "Lost in the Right Direction" by messwave (instrumental, 86 bpm), started 7.89 s into the track so its main hit lands on the 40.17 drop.
  - **Level:** −16 dB, which puts it about 12 dB under the voice. That matches the HeyClicky and Wispr Flow reels, where 12 of the 13 measured have quiet music. A light sidechain duck under the voice runs at ratio 2.
  - **Automation:** hard stops for the jokes, with the music cut from 10.18 to 11.96 (record scratch) and from 25.72 to 27.92 (crickets), and a +4 dB swell under the outro.
  - **Low-pass:** muffled to 450 Hz from 34.78 to 37.6, under the bot's wall of text.
- **SFX:** 69 cues, each one the object on screen and never a generic whoosh. Each file is peak-normalised to −1 dBFS, then set to its level. The full list with times and levels is in the code. The highlights are:

  | Time (s) | Sound | What's on screen |
  |---|---|---|
  | 3.30 | Phone vibrate plus a bright ding | The girlfriend text |
  | 10.20 | **Record scratch** (meme) | "actual job" |
  | 20.48 | Ding | The Boss message |
  | 20.90 | Dramatic orchestra hit | The zoom on the Boss message |
  | 23.95–24.42 | Rubber stamps | The detour |
  | 25.26 | Send whoop | The file goes to the Boss |
  | 25.85 | **Crickets** (meme) | The magnifier gag |
  | 26.93 | Lens tap | The magnifier hits the lens |
  | 34.78 | Newspaper rustle | The wall of text |
  | 38.69 | Reverse cymbal | Into the drop |
  | 40.17 | UI sparkle burst | The drop |
  | 46.32 | **Ka-ching** | The ads result |
  | 50.96 | Record-button beep | The voice note |
  | 54.08–54.62 | Crisp UI clicks | The web app |
  | 58.62 | Pop | The Chatly tile appears |
  | 60.20 | Toggle switch | The connect toggle |
  | 60.55 | Done chime | Connected |
  | 65.9 | Glass shimmer | The outro |
- **Bus and master:** the SFX bus gets a light duck under the voice. The master runs through a limiter, then loudnorm at −14 LUFS, true peak −1.5.
- **Sources:** the SFX came from the team's internal sound archive and include short meme clips. The names in the code are descriptive, so any equivalent sound from any library works.

## 10. How to rebuild

Folder layout: `src/` (A-roll, `words.json`), `cap/`, `fonts/`, `mg/gen` + `mg/assets`, `overlays/gen`, `comp/`, `mix/`, `audio-ref/picks/`, `out/`.

1. **Words.** Transcribe the A-roll with word timings (whisper large-v3-turbo), correct it by hand, and save it as `src/words.json`. If you only have the final mp4, its audio already contains the voice mix.
2. **MG frames.** Run `END=57.5 node mg/gen/render.mjs frames`, which writes `mg/tmp/frames/f%05d.png`.
3. **Overlays.** Run `node overlays/gen/render.mjs frames`, then `overlays/gen/encode.sh`, which writes `overlays/out/overlays-alpha.mov`.
4. **Tile.** Run `node comp/tile.mjs`, which writes `comp/assets/tile_chatly.png`.
5. **Captions.** Run `python comp/captions.py`, which writes `mix/captions_v4.ass`.
6. **Audio.** Run `python mix/audio_v5.py`, which writes `mix/audio_v5.wav`.
7. **Compose.** Run `VER=v7 AUDIO=mix/audio_v5.wav python comp/compose.py`, which writes `out/chatly-chatapps-final-v7-16x9.mp4`. For still previews, add `PREVIEW=t0,t1` (for example `PREVIEW=20.9,46.3`); the JPGs go to `out/_preview`.

- **Requirements:** Python 3 with numpy, opencv-python and pillow; Node with puppeteer-core and Google Chrome; ffmpeg built with libass; the Inter, Lato and Helvetica Neue fonts.
- **Machine-specific paths:** some paths in the code are absolute paths from the original Mac (the Chrome path, the puppeteer path, the UI-kit relative path). Point them at your own.

## 11. Rules the editor (the user) set during review

Keep these if you change anything:
- Transitions should be present but **subtle**: never bouncy, side-to-side or cliché. Where a cut feels forced, use a natural dissolve.
- MG beats are voiceover-only. The A-roll must not peek through between MG scenes; cover every half-second gap.
- Captions stay small (Inter SemiBold), and hand-set phrases beat automatic chunking.
- The grade must keep natural DSLR skin. Show stills before rendering when the look changes.
- WhatsApp must look exactly like the real iOS 26 light-mode app on a real iPhone, with real photos and no cartoon avatars.
- Music stays light and well under the voice. SFX must be punchy and match what's on screen, with occasional, natural meme sounds; don't overdo them.
- Follow the brand: Chatly, said "CHAT-lee"; the site is chatlyai.app (never chatly.ai); never call Chatly a chatbot or an image generator.

## 12. Open ideas not done in v7

- A cuter, lighter, plucky music bed at the same quiet level.
- Closed-mouth smiling versions of the avatar photos.
- An optional vine-boom sting.

---

# Appendices: full source at v7


| Appendix | What | Original path |
|---|---|---|
| A | MG film | `mg/gen/film.html` |
| B | MG frame renderer | `mg/gen/render.mjs` |
| C | Floating overlays | `overlays/gen/overlays.html` |
| C2 | Overlay renderer | `overlays/gen/render.mjs` |
| C3 | Overlay encoder | `overlays/gen/encode.sh` |
| D | Compositor | `comp/compose.py` |
| E | Chatly tile sprite | `comp/tile.html` |
| E2 | Tile renderer | `comp/tile.mjs` |
| F | Colour grade | `comp/grade.py` |
| G | Caption builder | `comp/captions.py` |
| H | Caption ASS header | `cap/header.ass` |
| I | Caption lines | `cap/lines.txt` |
| J | Audio mix | `mix/audio_v5.py` |
| K | Word timings | `src/words.json` |
| L | MG word-timing shim | `mg/gen/words.js` |
| M | MG timing config | `mg/gen/timing.json` |

## Appendix A: MG film (`mg/gen/film.html`)

```html
<!doctype html>
<html><head><meta charset="utf-8">
<!-- Chatly in WhatsApp & Discord: MG layer timed to the founder's own voice (src/aroll-1120.mov, words in words.js).
     House style of the Chatly YouTube films (Want It / One Ask / Your Inbox): pale drifting fields, Google Sans Flex kinetic type,
     one hero element at a time, real Chatly UI (reference/chatly-ui-kit) and real copy from chatly-web (settings/chat-apps).
     WhatsApp + Discord are drawn as faithful light/dark recreations. window.render(t) is deterministic. -->
<link rel="stylesheet" href="../../../../reference/chatly-ui-kit/chatly-ui.css">
<style>
@font-face{font-family:'Google Sans Flex';src:url('../../../chatly-smb/brand/fonts/GoogleSansFlex.woff2') format('woff2');font-weight:1 1000}
@font-face{font-family:'GS';src:url('../../../chatly-smb/brand/fonts/GoogleSansFlex.woff2') format('woff2');font-weight:1 1000}
html,body{margin:0;width:1920px;height:1080px;overflow:hidden;background:#F3F6FB}
#stage{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden;font-family:'Google Sans Flex','GS',sans-serif;color:#15181E;-webkit-font-smoothing:antialiased}
.L{position:absolute;left:0;top:0;width:1920px;height:1080px;overflow:hidden}
.e{position:absolute;left:0;top:0;transform-origin:0 0}
.kin{font-weight:500;letter-spacing:-.035em;line-height:1.08;white-space:nowrap;color:#15181E}
.mk{position:relative;display:inline-block}
.mk>i{position:absolute;left:-.08em;right:-.08em;top:.12em;bottom:.02em;border-radius:.12em;background:#98C2FF;transform-origin:0 50%;z-index:-1}
/* iOS / WhatsApp */
.ios{font-family:-apple-system,'SF Pro Text','Helvetica Neue',Helvetica,sans-serif;-webkit-font-smoothing:antialiased}
/* real iPhone (Pro, titanium) */
.phone{position:absolute;border-radius:80px;background:linear-gradient(135deg,#6b6e75 0%,#33353a 14%,#1c1d21 48%,#2e3035 84%,#70737a 100%);box-shadow:0 70px 130px -40px rgba(20,30,70,.5),0 0 0 1px rgba(0,0,0,.55)}
.phone .bz{position:absolute;left:4px;top:4px;right:4px;bottom:4px;border-radius:76px;background:#040405;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.07)}
.phone .scr{position:absolute;left:14px;top:14px;right:14px;bottom:14px;border-radius:64px;overflow:hidden;background:#fff}
.phone .isl{position:absolute;left:50%;top:25px;width:124px;height:36px;margin-left:-62px;border-radius:20px;background:#000;z-index:20}
.phone .isl i{position:absolute;right:14px;top:11px;width:13px;height:13px;border-radius:50%;background:radial-gradient(circle at 40% 40%,#2b3550,#0a0c14 60%)}
.phone .btn{position:absolute;width:5px;border-radius:3px;background:linear-gradient(90deg,#26282c,#7a7d84 50%,#26282c)}
.phone .hi{position:absolute;left:50%;bottom:22px;width:140px;height:5px;margin-left:-70px;border-radius:3px;background:#111;z-index:20}
.sb{position:absolute;left:0;right:0;top:0;height:58px;display:flex;align-items:center;justify-content:space-between;padding:0 30px 0 52px;font-size:17px;font-weight:600;color:#000;z-index:8;letter-spacing:-.01em}
.glass{background:rgba(255,255,255,.82);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:0 6px 22px -6px rgba(0,0,0,.18),inset 0 0 0 .5px rgba(0,0,0,.06),inset 0 1px 0 rgba(255,255,255,.9)}
.gc{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex:none}
.wa-hd{position:absolute;left:0;right:0;top:0;height:120px;background:linear-gradient(rgba(255,255,255,.92),rgba(255,255,255,.75) 70%,rgba(255,255,255,0));z-index:5}
.wa-hd .row{position:absolute;left:0;right:0;top:58px;height:48px;display:flex;align-items:center;gap:10px;padding:0 14px}
.wa-hd .av{width:40px;height:40px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;overflow:hidden;background:#ddd center/cover}
.wa-hd .nm{font-size:17px;font-weight:600;color:#111;line-height:21px}
.wa-hd .st{font-size:13px;color:#6E6E73;line-height:16px}
.wa-body{position:absolute;left:0;right:0;top:106px;bottom:96px;display:flex;flex-direction:column;justify-content:flex-end;padding:0 12px 10px;overflow:hidden}
.wa-wall{position:absolute;inset:0;background-color:#EFE7DE;background-image:radial-gradient(rgba(150,128,100,.11) 1.3px,transparent 1.4px),radial-gradient(rgba(150,128,100,.07) 1px,transparent 1.1px);background-size:24px 24px,17px 17px;background-position:0 0,8px 11px}
.wa-in{position:absolute;left:0;right:0;bottom:30px;height:50px;display:flex;align-items:center;gap:8px;padding:0 12px;box-sizing:border-box;z-index:5}
.wa-in .fld{flex:1;height:44px;border-radius:22px;display:flex;align-items:center;padding:0 12px 0 16px;font-size:17px;color:#111;box-sizing:border-box;white-space:nowrap;overflow:hidden;gap:6px}
.wa-in .mic{width:44px;height:44px;border-radius:50%;background:#1DAA61;flex:none;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px -6px rgba(29,170,97,.6)}
.msg{display:grid;min-height:0}
.msg>div{min-height:0;overflow:hidden}
.bub{position:relative;max-width:300px;padding:7px 10px 7px 11px;border-radius:17px;font-size:16.5px;line-height:21px;color:#111;box-shadow:0 1px .5px rgba(11,20,26,.10);margin-top:6px;word-wrap:break-word}
.bub.me{background:#DCF8C6;background:#D9FDD3;margin-left:auto;border-bottom-right-radius:6px}
.bub.them{background:#fff;margin-right:auto;border-bottom-left-radius:6px}
.bub .tm{float:right;margin:7px 0 -4px 10px;font-size:11px;line-height:14px;color:#667781;display:flex;align-items:center;gap:3px}
.wa-day{align-self:center;margin:6px 0 4px;padding:4px 11px;border-radius:10px;background:rgba(255,255,255,.92);font-size:12.5px;font-weight:500;color:#54656F;box-shadow:0 1px .5px rgba(11,20,26,.10)}
/* WhatsApp chat list (iOS 26) */
.wl-row{position:relative;display:flex;align-items:center;gap:14px;height:84px;padding:0 16px;background:#fff}
.wl-row .av{width:58px;height:58px;border-radius:50%;flex:none;background:#ddd center/cover}
.wl-row .tx{flex:1;min-width:0;align-self:stretch;display:flex;flex-direction:column;justify-content:center;border-bottom:1px solid #E7E7EA}
.wl-row .nm{font-size:17px;font-weight:600;color:#111;display:flex;justify-content:space-between;align-items:baseline;line-height:22px}
.wl-row .nm span{font-size:15px;font-weight:400;color:#8A8A8E}
.wl-row .pv{font-size:15.5px;color:#6E6E73;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;justify-content:space-between;align-items:center;gap:8px;margin-top:3px;line-height:20px}
.wl-row .bd{flex:none;min-width:22px;height:22px;border-radius:11px;background:#1DAA61;color:#fff;font-size:13px;font-weight:600;display:flex;align-items:center;justify-content:center;padding:0 6px;box-sizing:border-box}
.chip{height:34px;border-radius:17px;border:1px solid #DADADD;display:flex;align-items:center;padding:0 14px;font-size:15.5px;color:#3A3A3C;flex:none;box-sizing:border-box;white-space:nowrap}
.chip.on{background:#D9FDD3;border-color:#BDE9B4;color:#0B5D2C;font-weight:500}
.tabbar{position:absolute;left:14px;right:14px;bottom:26px;height:66px;border-radius:33px;display:flex;align-items:center;justify-content:space-around;padding:0 6px;z-index:6}
.tabbar .ti{display:flex;flex-direction:column;align-items:center;gap:2px;font-size:11px;font-weight:500;color:#111;width:74px;height:56px;justify-content:center;border-radius:28px;position:relative}
.tabbar .ti.on{background:rgba(0,0,0,.07)}
/* notification banners */
.nb{position:absolute;width:780px;border-radius:34px;background:rgba(255,255,255,.82);backdrop-filter:blur(30px);box-shadow:0 30px 70px -26px rgba(28,52,120,.30),0 0 0 1px rgba(255,255,255,.9) inset;display:flex;gap:22px;padding:26px 30px;box-sizing:border-box}
.nb .ic{width:74px;height:74px;border-radius:18px;flex:none}
.nb .tl{font-size:29px;font-weight:600;color:#111;display:flex;justify-content:space-between;line-height:36px}
.nb .tl span{font-size:24px;font-weight:400;color:#8A8F99}
.nb .bd{font-size:29px;color:#2A2D33;line-height:38px;margin-top:2px}
/* discord */
.dc{position:absolute;background:#313338;border-radius:16px;overflow:hidden;font-family:'gg sans','Noto Sans','Helvetica Neue',Helvetica,Arial,sans-serif;color:#DBDEE1;box-shadow:0 60px 120px -40px rgba(20,30,70,.5)}
.dc .rail{position:absolute;left:0;top:0;bottom:0;width:72px;background:#1E1F22}
.dc .rail i{display:block;width:48px;height:48px;border-radius:24px;margin:12px auto 0;background:#313338}
.dc .side{position:absolute;left:72px;top:0;bottom:0;width:240px;background:#2B2D31}
.dc .side .it{height:42px;margin:2px 8px;border-radius:6px;display:flex;align-items:center;gap:12px;padding:0 8px;font-size:16px;color:#949BA4}
.dc .side .it.on{background:#404249;color:#F2F3F5}
.dc .side .it b{width:32px;height:32px;border-radius:50%;flex:none}
.dc .main{position:absolute;left:312px;top:0;right:0;bottom:0}
.dc .hd{height:48px;border-bottom:1px solid #1F2023;display:flex;align-items:center;gap:10px;padding:0 16px;font-size:16px;font-weight:600;color:#F2F3F5}
.dc .tag{display:inline-flex;align-items:center;gap:3px;height:16px;padding:0 5px;border-radius:4px;background:#5865F2;color:#fff;font-size:10.5px;font-weight:600;letter-spacing:.02em;vertical-align:2px}
.dc .m{display:flex;gap:16px;padding:8px 16px 6px}
.dc .m .av{width:40px;height:40px;border-radius:50%;flex:none;display:flex;align-items:center;justify-content:center;overflow:hidden}
.dc .m .nm{font-size:16px;font-weight:600;color:#F2F3F5;line-height:22px}
.dc .m .nm span{font-size:12px;font-weight:400;color:#949BA4;margin-left:6px}
.dc .m .tx{font-size:16px;line-height:22px;color:#DBDEE1}
.dc .cmd{color:#C9CDFB;background:rgba(88,101,242,.3);border-radius:3px;padding:0 2px}
.dc .in{position:absolute;left:16px;right:16px;bottom:22px;height:44px;border-radius:8px;background:#383A40;display:flex;align-items:center;padding:0 16px;font-size:16px;color:#6D6F78}
/* settings */
.st-shell{position:absolute;background:#fff;border-radius:26px;overflow:hidden;box-shadow:0 50px 120px -30px rgba(28,52,120,.28)}
.st-nav{position:absolute;left:0;top:0;bottom:0;width:260px;background:#F7F7F7;border-right:1px solid #ECECEC;padding:28px 14px;box-sizing:border-box}
.st-nav .g{font-size:12.5px;font-weight:500;color:#8A8A8A;margin:18px 10px 6px}
.st-nav .i{height:36px;border-radius:10px;display:flex;align-items:center;padding:0 10px;font-size:14.5px;color:#3A3A3A}
.st-nav .i.on{background:#EBEBEB;color:#0F0F0F;font-weight:500}
.st-main{position:absolute;left:260px;top:0;right:0;bottom:0;padding:54px 80px;box-sizing:border-box}
.st-card{border:1px solid #E6E6E6;border-radius:16px;overflow:hidden}
.st-row{display:flex;align-items:center;gap:14px;padding:16px 18px;position:relative}
.st-row+.st-row{border-top:1px solid #E6E6E6}
.st-btn{height:36px;border-radius:10px;background:#F1F1F1;display:flex;align-items:center;padding:0 14px;font-size:14px;font-weight:500;color:#0F0F0F;flex:none}
.cu-sb-hist{display:flex;align-items:center;justify-content:space-between;gap:8px}
.cu-sb-hist p{flex:1;min-width:0}
.cu-sb-hist .src{display:flex;color:#8F8F8F;flex:none}
</style></head>
<body><div id="stage"><div id="bgA" class="L"></div><div id="bgB" class="L"></div><div id="sc" class="L"></div><div id="top" class="L"></div></div>
<script src="words.js"></script>
<script type="module">
import CU from '../../../../reference/chatly-ui-kit/chatly-ui.js';
const $ = (id) => document.getElementById(id);
const WD = window.WORDS, Wt = (i) => WD[i].t, We = (i) => WD[i].e;
/* ---------- time + easing ---------- */
const cl = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x)), seg = (t, a, b) => cl((t - a) / (b - a)), lerp = (a, b, k) => a + (b - a) * k;
const eo = (k) => 1 - Math.pow(1 - cl(k), 3), eo5 = (k) => 1 - Math.pow(1 - cl(k), 5), eio = (k) => { k = cl(k); return k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2; };
const sio = (k) => { k = cl(k); return k * k * (3 - 2 * k); };
const spring = (k) => { k = cl(k); return 1 - Math.exp(-6 * k) * Math.cos(7.5 * k); };   // overshoot pop
const typed = (txt, t, t0, t1) => txt.slice(0, Math.round(txt.length * seg(t, t0, t1)));
const blink = (t) => Math.floor(t * 2.2) % 2 === 0;
/* ---------- placement ---------- */
function E(html, { x = 0, y = 0, w, h, s = 1, ox = .5, oy = .5, op = 1, b = 0, z = 1, r = 0, extra = '' } = {}) {
  if (op <= .002) return '';
  const tx = x + ox * w * (1 - s), ty = y + oy * (h || 0) * (1 - s);
  return `<div class="e" style="width:${w}px;${h ? `height:${h}px;` : ''}transform:translate(${tx.toFixed(2)}px,${ty.toFixed(2)}px) scale(${s.toFixed(5)})${r ? ` rotate(${r.toFixed(2)}deg)` : ''};opacity:${cl(op).toFixed(3)};z-index:${z};${b > .3 ? `filter:blur(${b.toFixed(2)}px);` : ''}${extra}">${html}</div>`;
}
const layer = (inner, { op = 1, b = 0, s = 1 } = {}) => op <= .002 ? '' : `<div class="L" style="opacity:${cl(op).toFixed(3)};${b > .3 ? `filter:blur(${b.toFixed(2)}px);` : ''}${s !== 1 ? `transform:scale(${s.toFixed(5)});transform-origin:960px 540px;` : ''}">${inner}</div>`;
// camera: render a 1920x1080 world at scale S looking at world point (cx,cy)
const cam = (html, S, cx, cy) => `<div class="e" style="width:1920px;height:1080px;transform:translate(${(960 - cx * S).toFixed(2)}px,${(540 - cy * S).toFixed(2)}px) scale(${S.toFixed(5)})">${html}</div>`;

/* ---------- gradient fields ---------- */
const PAL = {
  white: ['#F6F8FC', [['#DCE7FA', 22, 18, 70, 60, .85], ['#F4EDE6', 82, 88, 55, 45, .7], ['#EAF0FB', 70, 10, 50, 40, .6]]],
  sky: ['#EAF0FC', [['#BFD4FF', 16, 24, 58, 58, 1], ['#FFDCCB', 86, 82, 52, 46, .85], ['#D6E4FF', 76, 8, 48, 42, .9], ['#F6F1EB', 42, 96, 62, 36, .8]]],
  air: ['#F2F5FB', [['#CFDFFF', 86, 16, 56, 52, .9], ['#FBE6DA', 8, 92, 52, 42, .75], ['#E4ECFA', 26, 8, 52, 42, .8]]],
  mint: ['#EEF6F1', [['#C9EBD6', 80, 20, 58, 52, .95], ['#DCE7FA', 14, 86, 56, 50, .85], ['#F6F1EB', 40, 6, 40, 34, .7]]],
  mist: ['#E9EEF7', [['#C4D6F7', 30, 30, 60, 56, .95], ['#F5E4DA', 80, 80, 52, 46, .8]]],
  peach: ['#FAEEE6', [['#FFCDB4', 24, 72, 62, 52, 1], ['#FBE3D4', 80, 18, 56, 50, .9], ['#D8E3FA', 88, 92, 46, 40, .75]]],
  ice: ['#E3ECFB', [['#A6C4FA', 28, 34, 62, 56, 1], ['#D9E8FF', 82, 72, 56, 50, .9], ['#F3F7FF', 62, 8, 42, 36, .8]]],
  bloom: ['#A9C3F6', [['#4F7FEB', 49, 42, 46, 58, 1], ['#7EA4F3', 18, 84, 52, 50, .8], ['#C9DAFA', 86, 12, 48, 46, .85], ['#F3D9CF', 92, 92, 40, 34, .5]]],
  dusk: ['#E2E6F6', [['#B4C0F0', 34, 30, 62, 56, 1], ['#F8D4C6', 76, 82, 56, 46, .9], ['#C7D7FA', 86, 14, 46, 40, .8]]],
  stone: ['#F7F6F2', [['#ECE9E2', 30, 20, 60, 50, .8], ['#E6ECF8', 80, 86, 56, 46, .7]]],
};
const PSCH = [[0, 'sky', 0], [6.62, 'white', .4], [12.3, 'stone', .3], [13.5, 'peach', .35], [16.6, 'mint', 0], [22.75, 'stone', .3], [25.7, 'white', .3],
  [27.75, 'mist', .35], [38.8, 'air', 0], [42.2, 'mint', .4], [45.3, 'sky', .35], [48.75, 'peach', .35], [52.7, 'ice', .3],
  [57.4, 'white', .3], [58.35, 'air', .35], [62.75, 'dusk', .4]];
const hexA = (h, a) => `rgba(${parseInt(h.slice(1, 3), 16)},${parseInt(h.slice(3, 5), 16)},${parseInt(h.slice(5, 7), 16)},${a})`;
function field(key, t) {
  const [base, blobs] = PAL[key];
  const g = blobs.map(([c, x, y, rx, ry, a], i) => { const dx = 4 * Math.sin(t * .21 + i * 1.7), dy = 3 * Math.cos(t * .17 + i * 2.3);
    return `radial-gradient(${rx}% ${ry}% at ${(x + dx).toFixed(2)}% ${(y + dy).toFixed(2)}%, ${hexA(c, a)} 0%, ${hexA(c, a * .55)} 42%, ${hexA(c, 0)} 100%)`; });
  return `background:${g.join(',')},${base};`;
}
function bg(t) {
  let i = 0; for (let j = 0; j < PSCH.length; j++) if (t >= PSCH[j][0]) i = j;
  const [s0, k0, d0] = PSCH[i], prev = i ? PSCH[i - 1][1] : k0, k = d0 ? sio(seg(t, s0, s0 + d0)) : 1;
  $('bgA').style.cssText = field(prev, t); $('bgB').style.cssText = field(k0, t) + `opacity:${k.toFixed(3)}`;
}

/* ---------- brand + app icons ---------- */
const MARK = (s, c = '#fff') => CU.icon('LogoIcon', { size: s, color: c });
const LOCK = (w, h, c) => CU.icon('LogoWithText', { size: [w, h], color: c });
const WA_PATH = 'M1.24652 14.9572L1.95746 11.6564C1.0437 10.2152 0.687237 8.49004 0.954956 6.80466C1.22268 5.11928 2.09618 3.58951 3.41157 2.50236C4.72697 1.4152 6.39386 0.845382 8.0995 0.899808C9.80514 0.954234 11.4323 1.62916 12.6757 2.79797C13.9191 3.96677 14.6933 5.54913 14.853 7.24814C15.0128 8.94716 14.547 10.6461 13.5433 12.0261C12.5395 13.4062 11.0666 14.3726 9.40098 14.7439C7.73537 15.1153 5.99149 14.8661 4.49652 14.0432L1.24652 14.9572Z';
const WA_PH = 'M10.6396 8.86238C10.4872 8.76082 10.3349 8.71004 10.1825 8.91316L9.57315 9.72566C9.4208 9.82723 9.31924 9.87801 9.11611 9.77645C8.3544 9.3702 7.28799 8.91316 6.37393 7.38973C6.32315 7.1866 6.42471 7.08504 6.52627 6.98348L6.9833 6.27254C7.08486 6.17098 7.03408 6.06941 6.9833 5.96785L6.37393 4.4952C6.22158 4.08895 6.06924 4.13973 5.9169 4.13973H5.51065C5.40908 4.13973 5.20596 4.19051 5.00283 4.39363C3.88565 5.51082 4.34268 7.08504 5.15518 8.10066C5.30752 8.30379 6.32315 10.1319 8.50674 11.0968C10.1317 11.8077 10.4872 11.7061 10.9442 11.6046C11.5028 11.5538 12.0614 11.0968 12.3153 10.6397C12.3661 10.4874 12.62 9.82723 12.4169 9.72566Z';
const WA_MONO = (s, c = 'currentColor') => `<svg width="${s}" height="${s}" viewBox="0 0 16 16" fill="none" style="display:block"><path fill-rule="evenodd" d="${WA_PATH} ${WA_PH}" fill="${c}"/><path d="${WA_PATH}" stroke="${c}" stroke-width="1.32"/></svg>`;
const WA_GLYPH = (s) => `<svg width="${s}" height="${s}" viewBox="0 0 16 16" fill="none" style="display:block"><path d="${WA_PATH}" fill="none" stroke="#fff" stroke-width="1.25"/><path d="${WA_PH}" fill="#fff"/></svg>`;
const DC_PATH = 'M15.238 3.277a14.846 14.846 0 0 0-3.664-1.136.056.056 0 0 0-.059.027 10.34 10.34 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.486 9.486 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.286.221-2.516.609-3.664 1.136a.052.052 0 0 0-.024.02C.4 6.785-.24 10.186.074 13.544c.002.016.011.032.024.042a14.928 14.928 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.832 9.832 0 0 1-1.404-.669.058.058 0 0 1-.006-.096c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .06.007c.09.075.184.149.279.22a.058.058 0 0 1-.005.095 9.228 9.228 0 0 1-1.405.669.057.057 0 0 0-.03.08c.27.523.578 1.022.918 1.495.014.02.04.028.063.021a14.877 14.877 0 0 0 4.502-2.272.058.058 0 0 0 .023-.041c.376-3.883-.628-7.256-2.66-10.246a.046.046 0 0 0-.024-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814S5.114 7.87 6.015 7.87c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z';
const DC_MONO = (s, c = 'currentColor') => `<svg width="${s}" height="${s}" viewBox="0 0 18 18" style="display:block"><path d="${DC_PATH}" fill="${c}"/></svg>`;
// glossy app tiles
const TILE = (kind, s) => {
  const r = s * .235, inner = `box-shadow:inset 0 ${(s * .03).toFixed(1)}px ${(s * .05).toFixed(1)}px rgba(255,255,255,.35),inset 0 -${(s * .04).toFixed(1)}px ${(s * .08).toFixed(1)}px rgba(0,0,0,.12),0 ${(s * .12).toFixed(1)}px ${(s * .28).toFixed(1)}px -${(s * .08).toFixed(1)}px rgba(20,30,70,.35)`;
  const base = `width:${s}px;height:${s}px;border-radius:${r}px;display:flex;align-items:center;justify-content:center;${inner};`;
  if (kind === 'wa') return `<div style="${base}background:linear-gradient(160deg,#5EF07F,#1EBE57 55%,#16A34A)">${WA_GLYPH(s * .62)}</div>`;
  if (kind === 'dc') return `<div style="${base}background:linear-gradient(160deg,#7B86FF,#5865F2 55%,#4752D6)">${DC_MONO(s * .58, '#fff')}</div>`;
  if (kind === 'chatly') return `<div style="${base}background:radial-gradient(120% 120% at 30% 20%,#2A3550,#0B1020 70%)">${MARK(s * .5)}</div>`;
  if (kind === 'plus') return `<div style="width:${s}px;height:${s}px;border-radius:${r}px;border:3px dashed rgba(21,24,30,.22);box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:${s * .42}px;color:rgba(21,24,30,.35);font-weight:400">+</div>`;
  return '';
};
const CHATLY_AV = (s) => `<div style="width:${s}px;height:${s}px;border-radius:50%;background:radial-gradient(120% 120% at 30% 20%,#2A3550,#0B1020 70%);display:flex;align-items:center;justify-content:center">${MARK(s * .52)}</div>`;
const CURSOR = (s) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" style="display:block;overflow:visible"><path d="M5 2.5v17.2l4.3-4.1 2.7 6.1 2.9-1.3-2.7-6h6z" fill="#111" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/></svg>`;
const TICKS = `<svg width="17" height="11" viewBox="0 0 17 11" style="display:block"><path d="M1 5.8l3 3L11 1.6M6.5 8.8l.9.9L14.6 1.6" stroke="#53BDEB" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const A = (f) => `../assets/${f}`;

/* ---------- kinetic type: words blur in on their spoken times ---------- */
// parts: [{w, t, mk (marker on), mt (marker time)}]; returns a centred line
function kline(parts, t, { fs = 120, x = 0, y = 470, w = 1920, align = 'center', color = '#15181E', gone = 99, wrap = false } = {}) {
  const html = parts.map((p, i) => { const k = eo5(seg(t, p.t - .06, p.t + .26));
    if (t < p.t - .06) return `<span style="display:inline-block;opacity:0;margin-right:${i < parts.length - 1 ? '.24em' : 0}">${p.w}</span>`;
    const mk = p.mk ? `<i style="transform:scaleX(${eio(seg(t, p.mt ?? p.t, (p.mt ?? p.t) + .3)).toFixed(3)})"></i>` : '';
    return `<span class="${p.mk ? 'mk' : ''}" style="display:inline-block;margin-right:${i < parts.length - 1 ? '.24em' : 0};opacity:${cl(k * 2).toFixed(3)};transform:translateY(${((1 - k) * .25).toFixed(3)}em);${k < 1 ? `filter:blur(${((1 - k) * 9).toFixed(1)}px);` : ''}">${mk}${p.w}</span>`; }).join('');
  const kg = seg(t, gone, gone + .25);
  return E(`<div class="kin" style="font-size:${fs}px;text-align:${align};color:${color};isolation:isolate;${wrap ? 'white-space:normal;' : ''}">${html}</div>`, { x, y: y - kg * 20, w, h: fs * 1.15, op: 1 - kg, b: kg * 8 });
}
const P = (w, i, extra = {}) => ({ w, t: Wt(i), ...extra });

/* ---------- WhatsApp phone ---------- */
const PW = 430, PH = 932;   // screen; phone body adds 14 px of titanium + bezel
const AV = (n) => `url(${A('av/' + n + '.jpg')})`;
const SB = () => `<div class="sb"><span>9:41</span><span style="display:flex;gap:6px;align-items:center">
  <svg width="19" height="12" viewBox="0 0 19 12"><rect x="0" y="8" width="3.2" height="4" rx="1" fill="#000"/><rect x="5.2" y="5.5" width="3.2" height="6.5" rx="1" fill="#000"/><rect x="10.4" y="3" width="3.2" height="9" rx="1" fill="#000"/><rect x="15.6" y="0" width="3.2" height="12" rx="1" fill="#000"/></svg>
  <svg width="17" height="12" viewBox="0 0 17 12"><path d="M8.5 2.6c2.3 0 4.4.9 6 2.4l1.2-1.2A10.2 10.2 0 008.5.9 10.2 10.2 0 001.3 3.8L2.5 5a8.5 8.5 0 016-2.4zm0 3.3c1.4 0 2.6.5 3.6 1.4l1.2-1.2a6.8 6.8 0 00-9.6 0L4.9 7.3a5.1 5.1 0 013.6-1.4zm0 3.3c.5 0 1 .2 1.3.5L8.5 11 7.2 9.7c.3-.3.8-.5 1.3-.5z" fill="#000"/></svg>
  <svg width="28" height="13" viewBox="0 0 28 13"><rect x=".5" y=".5" width="24" height="12" rx="3.8" stroke="#000" fill="none" opacity=".35"/><rect x="2" y="2" width="19" height="9" rx="2.3" fill="#000"/><path d="M26 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2z" fill="#000" opacity=".4"/></svg></span></div>`;
const ICO = {
  back: '<svg width="13" height="22" viewBox="0 0 13 22"><path d="M11 2L2 11l9 9" stroke="#111" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  video: '<svg width="25" height="17" viewBox="0 0 25 17"><rect x="1" y="1.5" width="15.5" height="14" rx="3.5" stroke="#111" stroke-width="1.9" fill="none"/><path d="M17.5 6.5l5.5-3.5v11l-5.5-3.5z" stroke="#111" stroke-width="1.9" fill="none" stroke-linejoin="round"/></svg>',
  call: '<svg width="21" height="21" viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" stroke="#111" stroke-width="1.8" fill="none"/></svg>',
  plus: (c = '#111', s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 22 22"><path d="M11 3v16M3 11h16" stroke="${c}" stroke-width="2.3" stroke-linecap="round"/></svg>`,
  cam: '<svg width="24" height="20" viewBox="0 0 24 20"><path d="M3 5.5h3.6l1.8-2.6h7.2l1.8 2.6H21a1.5 1.5 0 011.5 1.5v10A1.5 1.5 0 0121 18.5H3A1.5 1.5 0 011.5 17V7A1.5 1.5 0 013 5.5z" stroke="#111" stroke-width="1.9" fill="none" stroke-linejoin="round"/><circle cx="12" cy="11.8" r="3.9" stroke="#111" stroke-width="1.9" fill="none"/></svg>',
  sticker: '<svg width="21" height="21" viewBox="0 0 22 22"><path d="M20 12.5A8.5 8.5 0 1111.5 2h6A2.5 2.5 0 0120 4.5z" stroke="#555" stroke-width="1.7" fill="none"/><path d="M13 20.4c.2-3.9 3.4-7.2 7.3-7.4" stroke="#555" stroke-width="1.7" fill="none"/></svg>',
  dots: '<svg width="22" height="6" viewBox="0 0 22 6"><circle cx="3" cy="3" r="2.4" fill="#111"/><circle cx="11" cy="3" r="2.4" fill="#111"/><circle cx="19" cy="3" r="2.4" fill="#111"/></svg>',
  search: '<svg width="18" height="18" viewBox="0 0 18 18"><circle cx="7.6" cy="7.6" r="6" stroke="#8A8A8E" stroke-width="2" fill="none"/><path d="M12 12l4.6 4.6" stroke="#8A8A8E" stroke-width="2" stroke-linecap="round"/></svg>',
  archive: '<svg width="24" height="22" viewBox="0 0 24 22"><rect x="2" y="2" width="20" height="5" rx="1.4" stroke="#555" stroke-width="1.8" fill="none"/><path d="M4 7v11.5A1.5 1.5 0 005.5 20h13a1.5 1.5 0 001.5-1.5V7M9.5 11.5h5" stroke="#555" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg>',
  mic: (c = '#111', s = 22) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24"><rect x="8.5" y="2" width="7" height="13" rx="3.5" stroke="${c}" stroke-width="2" fill="none"/><path d="M5 11.5a7 7 0 0014 0M12 18.5V22" stroke="${c}" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
};
// msgs: [{me, html, t, time}] — appear (height grows via grid fr) at t
function waMsgs(msgs, t) {
  return msgs.map((m) => { const k = m.t === undefined ? 1 : eo(seg(t, m.t, m.t + .28)); if (k <= 0) return '';
    if (m.day) return `<div class="wa-day">${m.day}</div>`;
    const pop = spring(seg(t, m.t ?? -9, (m.t ?? -9) + .45));
    return `<div class="msg" style="grid-template-rows:${k.toFixed(4)}fr"><div><div class="bub ${m.me ? 'me' : 'them'}" style="${m.style || ''};transform-origin:${m.me ? '100%' : '0%'} 100%;transform:scale(${lerp(.86, 1, pop).toFixed(4)});opacity:${cl(k * 1.6).toFixed(3)}">${m.html}<span class="tm">${m.time || '9:41'}${m.me ? TICKS : ''}</span></div></div></div>`; }).join('');
}
// iOS 26 WhatsApp chat (light): wallpaper, glass back button + call capsule, floating glass input
function waChat({ name, status = 'online', av, msgs, t, input = '', caret = false, rec = null, typing = null, scroll = 0 }) {
  const ty = typing && t >= typing[0] && t < typing[1] ? `<div class="msg"><div><div class="bub them" style="width:58px;height:21px;display:flex;align-items:center;gap:5px;padding:9px 12px">${[0, 1, 2].map((i) => `<i style="width:8px;height:8px;border-radius:50%;background:#9AA3A9;opacity:${(.35 + .65 * Math.max(0, Math.sin(t * 9 - i * .9))).toFixed(2)}"></i>`).join('')}</div></div></div>` : '';
  let inp;
  if (rec) {   // recording a voice note
    const sec = Math.floor(rec.el);
    inp = `<div class="gc glass">${ICO.plus()}</div><div class="fld glass" style="gap:10px"><i style="width:11px;height:11px;border-radius:50%;background:#F0374A;flex:none;opacity:${blink(t * 1.3) ? 1 : .35}"></i><span style="font-variant-numeric:tabular-nums">0:0${sec}</span>
      <div style="flex:1;display:flex;align-items:center;gap:3px;height:30px;overflow:hidden;justify-content:flex-end">${Array.from({ length: 30 }, (_, i) => { const on = i / 30 < rec.el / 3.2; const h = 4 + 20 * Math.abs(Math.sin(i * 1.7 + 2) * Math.sin(i * .43 + t * 3)); return `<i style="width:3px;flex:none;height:${on ? h.toFixed(1) : 3}px;border-radius:2px;background:${on ? '#1DAA61' : '#C9CDD0'}"></i>`; }).join('')}</div></div>
      <div class="mic" style="transform:scale(1.18)">${ICO.mic('#fff', 22)}</div>`;
  } else {
    inp = `<div class="gc glass">${ICO.plus()}</div>
      <div class="fld glass"><span style="flex:1;overflow:hidden;white-space:nowrap">${input ? input : '<span style="color:#8A8A8E">Message</span>'}${caret ? `<i style="display:inline-block;width:2px;height:21px;background:#1DAA61;margin-left:1px;vertical-align:-4px;opacity:${blink(t) ? 1 : 0}"></i>` : ''}</span>${input ? '' : ICO.sticker}</div>
      ${input ? `<div class="mic"><svg width="20" height="20" viewBox="0 0 24 24"><path d="M12 19V5M5.5 11.5L12 5l6.5 6.5" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></div>` : `<div style="display:flex;gap:14px;align-items:center;padding:0 4px">${ICO.cam}${ICO.mic()}</div>`}`;
  }
  return `<div class="ios" style="position:absolute;inset:0"><div class="wa-wall"></div>
    <div class="wa-body" style="transform:translateY(${scroll}px)">${waMsgs(msgs, t)}${ty}</div>
    <div class="wa-hd">${SB()}<div class="row"><div class="gc glass">${ICO.back}</div>
      <div class="av" ${/^url/.test(av) ? `style="background-image:${av}"` : ''}>${/^url/.test(av) ? '' : av}</div><div style="flex:1;min-width:0"><div class="nm">${name}</div><div class="st">${status}</div></div>
      <div class="glass" style="height:44px;border-radius:22px;display:flex;align-items:center;gap:20px;padding:0 18px">${ICO.video}${ICO.call}</div></div></div>
    <div class="wa-in">${inp}</div></div>`;
}
const phone = (inner, x, y, { s = 1, op = 1, b = 0, r = 0, z = 1 } = {}) => E(`<div class="phone" style="left:0;top:0;width:${PW + 28}px;height:${PH + 28}px">
    <div class="btn" style="left:-4px;top:190px;height:34px"></div><div class="btn" style="left:-4px;top:262px;height:66px"></div><div class="btn" style="left:-4px;top:344px;height:66px"></div><div class="btn" style="right:-4px;top:290px;height:104px"></div>
    <div class="bz"></div><div class="isl"><i></i></div><div class="scr">${inner}</div><div class="hi"></div></div>`, { x, y, w: PW + 28, h: PH + 28, s, op, b, r, z });

/* ---------- shared content ---------- */
const DECK_MSG = (big = 1) => `<div style="margin:-2px -4px 0;border-radius:7px;overflow:hidden;background:#F7F8F9">
   <div style="position:relative;height:${(150 * big).toFixed(0)}px;background:url(${A('q3_cover.png')}) center/cover"><div style="position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.96) 0%,rgba(255,255,255,.88) 42%,rgba(255,255,255,0) 70%)"></div>
     <div style="position:absolute;left:16px;top:18px;font-family:'Google Sans Flex';color:#111"><div style="font-size:11px;letter-spacing:.08em;color:#777;font-weight:500">BOARD REVIEW · Q3</div><div style="font-size:30px;line-height:31px;font-weight:500;letter-spacing:-.02em;margin-top:8px">Q3 in<br>review</div></div></div>
   <div style="display:flex;align-items:center;gap:10px;padding:10px 10px 8px"><div style="width:34px;height:40px;border-radius:4px;background:#E8693A;color:#fff;font-size:10px;font-weight:700;display:flex;align-items:flex-end;justify-content:center;padding-bottom:5px;box-sizing:border-box">PPTX</div>
   <div style="flex:1"><div style="font-size:15px;font-weight:600;color:#111">Q3 review.pptx</div><div style="font-size:12.5px;color:#667781">5 slides · 2.4 MB</div></div></div></div>`;
const AD_IMG = (w, h, fs = 1) => `<div style="position:relative;width:${w}px;height:${h}px;border-radius:10px;overflow:hidden;background:url(${A('volt.jpg')}) center 46%/cover">
   <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.55))"></div>
   <div style="position:absolute;left:${22 * fs}px;top:${18 * fs}px;font-family:'Google Sans Flex';color:#fff;font-size:${16 * fs}px;font-weight:600;letter-spacing:.18em">VOLT</div>
   <div style="position:absolute;left:${22 * fs}px;bottom:${24 * fs}px;right:${22 * fs}px;font-family:'Google Sans Flex';color:#fff"><div style="font-size:${40 * fs}px;line-height:${42 * fs}px;font-weight:500;letter-spacing:-.03em">Silence,<br>on demand.</div>
   <div style="display:inline-flex;margin-top:${14 * fs}px;height:${38 * fs}px;align-items:center;padding:0 ${18 * fs}px;border-radius:${19 * fs}px;background:#fff;color:#111;font-size:${15 * fs}px;font-weight:600">Shop the drop</div></div></div>`;
const INBOX_MSG = `<div style="font-weight:600;margin-bottom:4px">📥 Inbox summary · 23 new</div>
  <div>• <b>3</b> need a reply today</div><div>• Dana approved the Q3 deck</div><div>• Invoice #2041 is due Friday</div><div>• 14 newsletters archived</div>`;
const DECK_ASK = 'Make a 5-slide deck for our Q3 review';

/* ================= SCENES ================= */
// S1 hook: WhatsApp notifications stack in on "trips", "fight", "break up"
function sHook(t) {
  const N = [[Wt(2), 'Trip crew 🏔️', 'Jake: I booked the cabin. Who’s driving?'], [Wt(7), 'Mom', 'Who left the dishes in the sink??'], [Wt(14), 'Alex', 'we need to talk.']];
  let h = '';
  N.forEach(([t0, tl, bd], i) => {
    const k = spring(seg(t, t0 - .05, t0 + .5)); if (t < t0 - .05) return;
    const depth = N.filter((n, j) => j > i && t >= n[0]).length, kd = N.slice(i + 1).reduce((a, n) => a + eo(seg(t, n[0], n[0] + .35)), 0);
    const y = 300 + i * 0 - kd * 34 + (1 - k) * -70, s = (1 - kd * .06) * lerp(.9, 1, k);
    const last = i === 2;
    h += E(`<div class="nb ios" style="left:0;top:0"><div class="ic">${TILE('wa', 74)}</div><div style="flex:1"><div class="tl">${tl}<span>now</span></div><div class="bd" style="${last ? 'font-weight:600' : ''}">${bd}</div></div></div>`,
      { x: 570, y: y + 120, w: 780, h: 130, s: s * 1.45, op: cl(k * 2) * (1 - kd * .28), b: kd * 2.2, z: 10 + i });
  });
  // a subtle shake on "we need to talk."
  const sh = t > Wt(14) && t < Wt(14) + .5 ? Math.sin((t - Wt(14)) * 60) * 6 * (1 - seg(t, Wt(14), Wt(14) + .5)) : 0;
  return `<div class="L" style="transform:translateX(${sh.toFixed(1)}px)">${h}</div>`;
}
// S2 your entire life ... except your actual job
function sLife(t) {
  return kline([P('Your', 19), P('entire', 20), P('life', 21), P('happens', 22), P('in', 23), P('the', 24), P('chat.', 25)], t, { fs: 100, y: 380 }) +
    kline([P('Except', 26), P('your', 27), P('actual', 28, { mk: 1, mt: Wt(28) + .1 }), P('job.', 29, { mk: 1, mt: Wt(28) + .1 })], t, { fs: 100, y: 540 });
}
const sThink = (t) => kline([P('Think', 30), P('about', 31), P('it.', 32)], t, { fs: 130, y: 460 });
// S4 180 years
function s180(t) {
  const kn = eo(seg(t, Wt(36) - .05, Wt(36) + .7)), n = Math.round(180 * kn);
  const kk = eo5(seg(t, Wt(36) - .08, Wt(36) + .25));
  const num = E(`<div class="kin" style="font-size:300px;letter-spacing:-.04em;text-align:right">${n}</div>`, { x: 160, y: 250, w: 760, h: 330, op: kk, b: (1 - kk) * 12 });
  const yrs = kline([P('years', 37)], t, { fs: 150, x: 960, y: 360, w: 700, align: 'left' });
  const sub = kline([P('to', 38), P('get', 39), P('really', 40), P('good', 41), P('at', 42), P('chatting.', 43, { mk: 1, mt: Wt(43) })], t, { fs: 72, y: 690 });
  return num + yrs + sub;
}
// WhatsApp chat list (S5), iOS 26 light: everything happens here; then "Boss" jumps to the top on "work"
function waList(t) {
  const work = t >= Wt(54) - .05;
  const rows0 = [['Trip crew 🏔️', 'Jake: I booked the cabin 🙌', '9:38', 'm1-latino-mid20s', 3, Wt(45)], ['Mom', 'Call me when you land ❤️', '9:31', 'f4-white-40s', 1, Wt(46) + .05],
    ['Book club', 'Priya: chapter 9 was WILD', '9:12', 'f2-eastasian-mid30s', 5, Wt(48) - .02], ['Alex', 'ok.', '8:57', 'f1-black-late20s', 0, -1], ['Gym', 'Leg day 6 am, no excuses', 'Yesterday', 'm2-black-mid30s', 0, -1],
    ['Landlord', 'Rent reminder for the 1st', 'Yesterday', 'f3-southasian-early30s', 0, -1]];
  const boss = ['Boss', 'can you make me a slide? 🙏', '9:41', 'm3-white-40s', 1, Wt(54)];
  const kj = eo(seg(t, Wt(54) - .05, Wt(54) + .4));
  const row = (r, extra = '') => { const [nm, pv, tm, av, n, tb] = r, on = tb >= 0 && t >= tb; const kb = spring(seg(t, tb, tb + .4));
    return `<div class="wl-row" style="${extra}"><div class="av" style="background-image:${AV(av)}"></div><div class="tx"><div class="nm">${nm}<span style="${on && n ? 'color:#1DAA61;font-weight:500' : ''}">${tm}</span></div><div class="pv"><span style="overflow:hidden;text-overflow:ellipsis">${pv}</span>${on && n ? `<span class="bd" style="transform:scale(${kb.toFixed(3)})">${n}</span>` : ''}</div></div></div>`; };
  const H = 84;
  const list = `<div style="position:relative;height:${H * 7}px">${work ? `<div style="position:absolute;left:0;right:0;top:${((1 - kj) * -H).toFixed(1)}px;opacity:${kj.toFixed(3)};z-index:2">${row(boss)}</div>` : ''}
    ${rows0.map((r, i) => `<div style="position:absolute;left:0;right:0;top:${(i * H + (work ? kj * H : 0)).toFixed(1)}px">${row(r)}</div>`).join('')}</div>`;
  const tab = (ic, lb, on, badge) => `<div class="ti ${on ? 'on' : ''}">${ic}<span>${lb}</span>${badge ? `<b style="position:absolute;left:44px;top:4px;min-width:18px;height:18px;border-radius:9px;background:#1DAA61;color:#fff;font-size:11px;display:flex;align-items:center;justify-content:center">${badge}</b>` : ''}</div>`;
  const unread = (t >= Wt(45) ? 1 : 0) + (t >= Wt(46) + .05 ? 1 : 0) + (t >= Wt(48) - .02 ? 1 : 0) + (work ? 1 : 0);
  return `<div class="ios" style="position:absolute;inset:0;background:#fff">${SB()}
    <div style="position:absolute;left:16px;right:16px;top:60px;height:46px;display:flex;align-items:center;gap:12px"><div class="gc glass">${ICO.dots}</div><div style="flex:1"></div><div class="gc glass">${ICO.cam}</div><div class="gc" style="background:#1DAA61;box-shadow:0 6px 16px -6px rgba(29,170,97,.7)">${ICO.plus('#fff', 22)}</div></div>
    <div style="position:absolute;left:20px;top:114px;font-size:35px;font-weight:700;color:#000;letter-spacing:-.02em">Chats</div>
    <div style="position:absolute;left:16px;right:16px;top:164px;height:40px;border-radius:12px;background:#F0F0F2;display:flex;align-items:center;gap:8px;padding:0 12px;color:#8A8A8E;font-size:17px">${ICO.search}Ask Meta AI or Search</div>
    <div style="position:absolute;left:16px;right:0;top:216px;display:flex;gap:8px;overflow:hidden"><div class="chip on">All</div><div class="chip">Unread${unread ? ` <span style="color:#8A8A8E;margin-left:4px">${unread}</span>` : ''}</div><div class="chip">Favorites <span style="color:#8A8A8E;margin-left:4px">1</span></div><div class="chip">Groups</div><div class="chip">Communities</div></div>
    <div style="position:absolute;left:0;right:0;top:262px;height:44px;display:flex;align-items:center;gap:30px;padding-left:30px;font-size:17px;color:#3A3A3C">${ICO.archive}Archived</div>
    <div style="position:absolute;left:0;right:0;top:308px">${list}</div>
    <div class="glass" style="position:absolute;right:20px;bottom:112px;width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center"><i style="width:30px;height:30px;border-radius:50%;background:conic-gradient(from 200deg,#2F7CF6,#7B5CF5,#E14F9C,#F5A524,#25C2A0,#2F7CF6);-webkit-mask:radial-gradient(circle,transparent 9px,#000 10px);mask:radial-gradient(circle,transparent 9px,#000 10px)"></i></div>
    <div class="tabbar glass">${tab('<svg width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" stroke="#111" stroke-width="1.8" fill="none" stroke-dasharray="3.5 2.2"/><circle cx="12" cy="12" r="4.5" fill="#111"/></svg>', 'Updates')}${tab('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1z" stroke="#111" stroke-width="1.8" fill="none"/></svg>', 'Calls')}${tab('<svg width="28" height="24" viewBox="0 0 28 24"><circle cx="14" cy="7" r="3.6" stroke="#111" stroke-width="1.7" fill="none"/><circle cx="6" cy="9" r="2.8" stroke="#111" stroke-width="1.7" fill="none"/><circle cx="22" cy="9" r="2.8" stroke="#111" stroke-width="1.7" fill="none"/><path d="M7.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M1.5 19.5c0-2.6 2-4.6 4.5-4.6M26.5 19.5c0-2.6-2-4.6-4.5-4.6" stroke="#111" stroke-width="1.7" fill="none" stroke-linecap="round"/></svg>', 'Communities')}${tab('<svg width="26" height="24" viewBox="0 0 26 24"><path d="M4 18.5l1.2-3.6A8.5 8.5 0 1110 19.6z" fill="#111"/><path d="M15 20.5a7.5 7.5 0 008.2-1.8l1.8 1.3-1-3" stroke="#111" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>', 'Chats', true, unread || '')}${tab(`<span style="width:26px;height:26px;border-radius:50%;background:${AV('m4-eastasian-early30s')} center/cover;display:block"></span>`, 'You')}</div></div>`;
}
function sList(t) {
  const k = eo(seg(t, 16.75, 17.2));
  const out = eio(seg(t, Wt(61) - .05, Wt(61) + .4));   // on "leave" everything slides out of frame
  const ph = phone(waList(t), 960 - (PW + 28) / 2, 74 + (1 - k) * 80, { op: k });
  const left = kline([P('It’s', 44), P('literally', 45), P('how', 46), P('we', 47), P('do', 48), P('everything.', 49)], t, { fs: 72, x: 80, y: 400, w: 480, align: 'left', gone: Wt(51), wrap: true });
  const right = kline([P('And', 50), P('the', 51), P('minute', 52), P('it', 53), P('comes', 54), P('down', 55), P('to', 56)], t, { fs: 72, x: 1380, y: 360, w: 480, align: 'left', gone: 20.8, wrap: true });
  const kz = eio(seg(t, 17.5, 18.4)), kb = eio(seg(t, 20.85, 21.5));   // on "work": push onto the Boss's message
  const S = lerp(lerp(1, 1.18, kz), 3.0, kb), cy = lerp(lerp(540, 470, kz), 438, kb), cx = lerp(960, 962, kb);
  const slide = `<div class="L" style="transform:translateX(${(-out * 2300).toFixed(1)}px) rotate(${(-out * 4).toFixed(2)}deg);${out > .02 ? `filter:blur(${(out * 14).toFixed(1)}px);` : ''}">${(t < 21.0 ? left + right : '') + cam(ph, S, cx, cy)}</div>`;
  const kl = eo5(seg(t, Wt(61) - .02, Wt(61) + .3));
  const leave = kl > 0 ? E(`<div class="kin" style="font-size:130px;text-align:center;isolation:isolate">we have to <span class="mk"><i style="transform:scaleX(${eio(seg(t, Wt(61) + .15, Wt(61) + .45)).toFixed(3)})"></i>leave.</span></div>`, { x: 0, y: 460 + (1 - kl) * 30, w: 1920, h: 150, op: kl, b: (1 - kl) * 10 }) : '';
  return leave + slide;
}
// S6 the detour: tabs pile up -> file renames -> dragged back into WhatsApp and sent on "chat"
function sDetour(t) {
  let h = '';
  // tabs (22.85 - 23.95)
  const kt = seg(t, 22.85, 23.85);
  if (t < 24.0) {
    const n = 1 + Math.floor(kt * 13), op = 1 - seg(t, 23.8, 24.0);
    const tabs = Array.from({ length: n }, (_, i) => `<div style="flex:1;min-width:0;max-width:220px;height:40px;border-radius:10px 10px 0 0;background:${i === n - 1 ? '#fff' : '#E4E7EC'};display:flex;align-items:center;gap:8px;padding:0 12px;font-size:15px;color:#3A3F47;overflow:hidden;white-space:nowrap"><i style="width:14px;height:14px;border-radius:4px;flex:none;background:${['#4285F4', '#F4B400', '#0F9D58', '#DB4437', '#7E57C2'][i % 5]}"></i>${['Untitled presentation', 'slide templates free', 'how to make slides look good', 'Canva', 'Q3 numbers.xlsx', 'Downloads', 'pitch deck examples', 'Google Slides', 'fonts', 'stock photos office', 'final.pptx', 'Gmail', 'icons', 'convert pdf to pptx'][i % 14]}</div>`).join('');
    h += E(`<div style="width:1700px;height:700px;border-radius:22px;background:#fff;box-shadow:0 50px 120px -30px rgba(28,52,120,.3);overflow:hidden">
      <div style="height:52px;background:#DDE1E7;display:flex;align-items:flex-end;gap:2px;padding:0 14px">${tabs}</div>
      <div style="height:48px;display:flex;align-items:center;padding:0 22px;border-bottom:1px solid #EEE"><div style="flex:1;height:32px;border-radius:16px;background:#F1F3F4;display:flex;align-items:center;padding:0 16px;font-size:15px;color:#555">how to make a slide look professional</div></div>
      <div style="padding:40px 60px">${[0, 1, 2, 3].map((i) => `<div style="height:22px;width:${[70, 54, 62, 40][i]}%;border-radius:6px;background:#EEF0F3;margin-bottom:18px"></div>`).join('')}</div></div>`, { x: 110, y: 230, w: 1700, h: 700, s: lerp(1, 1.04, kt), op });
    h += E(`<div class="kin" style="font-size:44px;color:#5A606C;text-align:center">${n} tab${n > 1 ? 's' : ''}</div>`, { x: 0, y: 150, w: 1920, h: 60, op });
  }
  // file renames (23.95 - 24.75)
  if (t >= 23.85 && t < 24.85) {
    const names = ['final.pptx', 'final_final.pptx', 'final_FINAL_v3.pptx'], idx = Math.min(2, Math.floor(seg(t, 23.95, 24.65) * 3));
    const k = eo(seg(t, 23.85, 24.1)), op = k * (1 - seg(t, 24.7, 24.85));
    h += E(`<div style="display:flex;align-items:center;gap:30px"><div style="width:150px;height:184px;border-radius:16px;background:#fff;box-shadow:0 30px 70px -26px rgba(28,52,120,.35);position:relative;flex:none"><div style="position:absolute;left:0;right:0;bottom:0;height:56px;border-radius:0 0 16px 16px;background:#E8693A;color:#fff;font-weight:700;font-size:22px;display:flex;align-items:center;justify-content:center;letter-spacing:.06em">PPTX</div></div>
      <div class="kin" style="font-size:92px;letter-spacing:-.03em">${names[idx].replace(/(FINAL|final_final|v3)/g, '<span style="color:#E8693A">$1</span>')}</div></div>`, { x: 330, y: 440, w: 1400, h: 190, op, s: lerp(.95, 1, k) });
  }
  // back into WhatsApp (24.75 - 25.7): file flies into the chat, sent on "chat"
  if (t >= 24.7) {
    const k = eo(seg(t, 24.7, 25.05));
    const msgs = [{ day: 'Today' }, { me: false, html: 'can you make me a slide? 🙏', time: '9:41' }, { me: true, html: DECK_MSG(.9).replace('Q3 review.pptx', 'final_FINAL_v3.pptx').replace('5 slides · 2.4 MB', '1 slide · 18.6 MB'), t: Wt(71) - .05, time: '11:58', style: 'width:290px;padding:4px' }];
    h += cam(phone(waChat({ name: 'Boss', status: 'online', av: AV('m3-white-40s'), msgs, t }), 960 - (PW + 28) / 2, 74 + (1 - k) * 90, { op: k }), 1.6, 960, 700);
    const kf = seg(t, 24.85, Wt(71) - .05);
    if (kf < 1) h += E(`<div style="width:110px;height:134px;border-radius:12px;background:#fff;box-shadow:0 30px 60px -20px rgba(28,52,120,.4);position:relative"><div style="position:absolute;left:0;right:0;bottom:0;height:40px;border-radius:0 0 12px 12px;background:#E8693A;color:#fff;font-weight:700;font-size:16px;display:flex;align-items:center;justify-content:center">PPTX</div></div>`,
      { x: lerp(330, 1000, eio(kf)), y: lerp(440, 760, eio(kf)) - Math.sin(kf * Math.PI) * 120, w: 110, h: 134, s: lerp(1.3, .7, kf), op: k * (1 - seg(kf, .85, 1)), z: 9 });
  }
  return h;
}
const sNever = (t) => kline([P('It', 72), P('just', 73), P('never', 74), P('starts', 75, { mk: 1, mt: Wt(75) }), P('there.', 76)], t, { fs: 120, y: 460 });
// S8 AI in WhatsApp isn't new -> it just replies -> ask for a slide, get a paragraph
const WALL = `Great question! 😊 Creating a slide deck is a great way to communicate your ideas. Here are some steps to help you get started:<br><br><b>1. Define your objective.</b> Before you begin, think about what you want your audience to take away from the presentation.<br><br><b>2. Know your audience.</b> Consider their level of familiarity with the topic and what they expect.<br><br><b>3. Keep it simple.</b> Use concise bullet points, a clear hierarchy and plenty of white space.<br><br><b>4. Choose the right visuals.</b> Charts, images and icons help convey complex information quickly.<br><br><b>5. Be consistent.</b> Use one font, one colour palette and the same layout across your deck.<br><br>Would you like me to explain any of these points in more detail?`;
function sReplies(t) {
  let h = '';
  if (t < 30.45) h += kline([P('AI', 79), P('in', 80), P('WhatsApp', 81), P('isn’t', 82), P('new.', 83)], t, { fs: 116, y: 460, gone: 30.2 });
  if (t >= 30.2) {
    const k = eo(seg(t, 30.2, 30.6));
    const ask = typed(DECK_ASK, t, 33.5, 34.2), sent = t >= 34.3;
    const msgs = [{ day: 'Today' }, { me: true, html: 'hi', t: -1, time: '9:40' }, { me: false, html: 'Hello! 👋 How can I help you today?', t: -1, time: '9:40' },
      { me: true, html: 'can you plan my week?', t: 30.5, time: '9:40' }, { me: false, html: 'Sure! Here are some tips for planning your week: start by listing your priorities…', t: Wt(90) - .1, time: '9:40' }];
    if (sent) msgs.push({ me: true, html: DECK_ASK, t: 34.3, time: '9:41' });
    if (t >= Wt(98)) msgs.push({ me: false, html: WALL, t: Wt(98), time: '9:41', style: 'max-width:320px' });
    const scroll = t >= Wt(98) ? -0 + eio(seg(t, Wt(98) + .2, 37.4)) * 0 : 0;
    const AV = '<div style="width:38px;height:38px;border-radius:50%;background:#B9C0C7;color:#fff;font-weight:600;font-size:14px;display:flex;align-items:center;justify-content:center">AI</div>';
    const inner = waChat({ name: 'AI Assistant', status: 'online', av: AV, msgs, t, input: sent ? '' : ask, caret: !sent && t > 33.3, typing: [34.4, Wt(98)], scroll });
    // camera: phone centred; as the wall of text lands, push in and pan down it
    const kz = eio(seg(t, Wt(98) + .1, 37.3));
    const S = lerp(1.6, 1.55, eio(seg(t, Wt(98) - .1, Wt(98) + .6))), cy = lerp(lerp(560, 760, eio(seg(t, 30.2, 30.9))), 650, eio(seg(t, Wt(98) - .1, Wt(98) + .4))) - lerp(0, 170, eio(seg(t, Wt(98) + .6, 37.3)));
    h += cam(phone(inner, 960 - (PW + 28) / 2, 60 + (1 - k) * 90, { op: k }), S, 960, cy);
    if (t >= Wt(90) - .15 && t < 33.2) h += kline([P('It', 88), P('just', 89), P('replies.', 90, { mk: 1, mt: Wt(90) })], t, { fs: 80, x: 1370, y: 470, w: 520, align: 'left', gone: 32.95, wrap: true });
  }
  return h;
}
// S9 brand: "So we built Chatly ... to just do it."
function sBrand(t) {
  const H = 150, LW = H * 4.05, x0 = 960 - LW / 2;
  const km = eo5(seg(t, Wt(109) - .05, Wt(109) + .35)), kl = eio(seg(t, Wt(110) - .05, Wt(110) + .3));
  const lockMarkCx = x0 + LW * 45.6 / 405, cx = lerp(960, lockMarkCx, kl), sc = lerp(1.5, 1, km);
  const up = eio(seg(t, Wt(112) - .2, Wt(112) + .2)) * 90;
  let h = E(MARK(H), { x: cx - H / 2, y: 470 - H / 2 - up, w: H, h: H, s: sc, op: km, b: (1 - km) * 14 });
  if (kl > 0) h += E(`<div style="clip-path:inset(0 ${(74 * (1 - kl)).toFixed(2)}% 0 25%)">${LOCK(LW, H, '#fff')}</div>`, { x: x0, y: 470 - H / 2 - up, w: LW, h: H, op: cl(kl * 1.5) });
  h += kline([P('to', 111), P('just…', 112), P('do', 113, { mk: 1, mt: Wt(113) }), P('it.', 114, { mk: 1, mt: Wt(113) })], t, { fs: 96, y: 560, color: '#fff' });
  return h;
}
// S10 now in WhatsApp and Discord
function sApps(t) {
  const S = 210, gap = 90, y = 330;
  const kw = spring(seg(t, Wt(118) - .05, Wt(118) + .5)), kd = spring(seg(t, Wt(120) - .05, Wt(120) + .5));
  const fl = (i) => 8 * Math.sin(t * 1.6 + i * 2);
  // the Chatly tile is flown in by comp/compose.py (from the A-roll's top-right) and handed over here at 39.45, same pose
  const pulse = 1 + .09 * Math.sin(Math.PI * seg(t, 40.17, 40.5));
  let h = t >= 39.45 ? E(TILE('chatly', S), { x: 960 - S / 2, y: y + fl(0), w: S, h: S, s: pulse }) : '';
  h += kline([P('to', 111), P('just…', 112), P('do', 113, { mk: 1, mt: Wt(113) }), P('it.', 114, { mk: 1, mt: Wt(113) })], t, { fs: 84, y: 640, gone: 40.22 });
  if (t >= Wt(118) - .05) h += E(TILE('wa', S), { x: 960 - S / 2 - S - gap + (1 - kw) * 120, y: y + fl(1), w: S, h: S, s: lerp(.6, 1, kw), op: cl(kw * 2) });
  if (t >= Wt(120) - .05) h += E(TILE('dc', S), { x: 960 + S / 2 + gap - (1 - kd) * 120, y: y + fl(2), w: S, h: S, s: lerp(.6, 1, kd), op: cl(kd * 2) });
  // connecting dots
  const kl1 = seg(t, Wt(118) + .1, Wt(118) + .4), kl2 = seg(t, Wt(120) + .1, Wt(120) + .4);
  const dots = (x0, k) => Array.from({ length: 5 }, (_, i) => `<i style="position:absolute;left:${x0 + i * 16}px;top:${y + S / 2 - 4}px;width:8px;height:8px;border-radius:50%;background:#15181E;opacity:${(cl(k * 5 - i) * .25).toFixed(3)}"></i>`).join('');
  h += `<div class="L">${dots(960 - S / 2 - gap + 8, kl1)}${dots(960 + S / 2 + 10, kl2)}</div>`;
  if (t >= 40.3) h += kline([P('Now', 116), P('in', 117), P('WhatsApp', 118), P('and', 119), P('Discord.', 120)], t, { fs: 84, y: 640 });
  return h;
}
// S11 you text it, the finished work comes back in the same chat
function sTextIt(t) {
  const k = eo(seg(t, 42.2, 42.6));
  const ask = typed(DECK_ASK, t, 42.35, 42.9), sent = t >= 43.0;
  const msgs = [{ day: 'Today' }, { me: true, html: DECK_ASK, t: 43.0, time: '9:41' }, { me: false, html: DECK_MSG(1.15) + '<div style="padding:6px 2px 0">Done. 5 slides, your numbers, speaker notes in.</div>', t: Wt(126) - .05, time: '9:42', style: 'width:300px;padding:4px' }];
  const inner = waChat({ name: 'Chatly', status: 'online', av: CHATLY_AV(38), msgs, t, input: sent ? '' : ask, caret: !sent, typing: [43.15, Wt(126) - .05] });
  const S = lerp(1.25, 1.5, eio(seg(t, Wt(126) + .1, 45.2)));
  let h = cam(phone(inner, 960 - (PW + 28) / 2, 60 + (1 - k) * 90, { op: k }), S, 960, lerp(600, 700, eio(seg(t, Wt(126) + .1, 45.2))));
  h += kline([P('You', 121), P('text', 122), P('it.', 123)], t, { fs: 80, x: 80, y: 440, w: 520, align: 'left', gone: Wt(124) - .1 });
  h += kline([P('Finished', 125), P('work', 126), P('comes', 127), P('back', 128)], t, { fs: 72, x: 1380, y: 320, w: 500, align: 'left', gone: 45.25, wrap: true });
  h += kline([P('in', 129), P('the', 130), P('same', 131, { mk: 1, mt: Wt(131) }), P('chat.', 132, { mk: 1, mt: Wt(131) })], t, { fs: 72, x: 1380, y: 560, w: 500, align: 'left', gone: 45.25, wrap: true });
  return h;
}
// S12 slides, ads, your inbox summarized — three results, three chats
function sThree(t) {   // one card that morphs: Slides (WhatsApp) -> Ad (Discord) -> Inbox summary (WhatsApp)
  const k = spring(seg(t, 45.38, 45.95)); if (t < 45.38) return '';
  const m1 = eio(seg(t, Wt(134) - .14, Wt(134) + .26)), m2 = eio(seg(t, Wt(137) - .14, Wt(137) + .26));
  const w = [1 - m1, m1 * (1 - m2), m2];
  const W = 620, H = 540 * w[0] + 660 * w[1] + 500 * w[2], X = 960 - W / 2, Y = 490 - H / 2;
  const waBg = 'background-color:#EFEAE2;background-image:radial-gradient(rgba(150,130,100,.10) 1.2px,transparent 1.3px);background-size:22px 22px';
  const layer = (wt, html) => wt < .01 ? '' : `<div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:${cl(wt * 1.3).toFixed(3)};transform:scale(${lerp(.93, 1, wt).toFixed(4)});${wt < .98 ? `filter:blur(${((1 - wt) * 10).toFixed(1)}px);` : ''}">${html}</div>`;
  const inner = `<div style="position:absolute;inset:0;${waBg};opacity:${(w[0] + w[2]).toFixed(3)}"></div><div style="position:absolute;inset:0;background:#313338;opacity:${w[1].toFixed(3)}"></div>
    ${layer(w[0], `<div class="ios"><div class="bub them" style="max-width:none;width:390px;padding:5px;zoom:1.2">${DECK_MSG(1.6)}<span class="tm">9:42</span></div></div>`)}
    ${layer(w[1], `<div style="display:flex;gap:14px;width:560px;font-family:'gg sans','Noto Sans',Helvetica,Arial,sans-serif"><div style="flex:none">${CHATLY_AV(46)}</div><div style="flex:1"><div style="font-size:19px;font-weight:600;color:#F2F3F5">Chatly <span style="display:inline-flex;align-items:center;height:17px;padding:0 5px;border-radius:4px;background:#5865F2;color:#fff;font-size:11px;font-weight:600;vertical-align:2px">APP</span> <span style="font-size:13px;font-weight:400;color:#949BA4;margin-left:4px">Today at 9:42 AM</span></div>
      <div style="font-size:18px;color:#DBDEE1;margin:4px 0 12px">Here’s your launch ad.</div>${AD_IMG(470, 540, 1.2)}</div></div>`)}
    ${layer(w[2], `<div class="ios"><div class="bub them" style="max-width:none;width:470px;font-size:24px;line-height:35px;padding:18px 20px 12px">${INBOX_MSG}<span class="tm">9:43</span></div></div>`)}`;
  const tiles = ['wa', 'dc', 'wa'].map((kind, i) => w[i] < .01 ? '' : `<div style="position:absolute;left:${W / 2 - 55}px;top:-66px;opacity:${cl(w[i] * 1.5).toFixed(3)};transform:scale(${lerp(.6, 1, w[i]).toFixed(3)}) rotate(${((1 - w[i]) * (i === 1 ? 12 : -12)).toFixed(1)}deg)">${TILE(kind, 110)}</div>`).join('');
  const labels = ['Slides', 'Ads', 'Your inbox, summarized'].map((l, i) => w[i] < .01 ? '' : `<div class="kin" style="position:absolute;left:-200px;top:${H + 34}px;width:${W + 400}px;text-align:center;font-size:56px;opacity:${cl(w[i] * 1.4).toFixed(3)};transform:translateY(${((1 - w[i]) * 18).toFixed(1)}px);${w[i] < .98 ? `filter:blur(${((1 - w[i]) * 8).toFixed(1)}px);` : ''}">${l}</div>`).join('');
  return E(`<div style="position:absolute;left:0;top:0;width:${W}px;height:${H.toFixed(1)}px;border-radius:34px;overflow:hidden;box-shadow:0 60px 120px -40px rgba(28,52,120,.4)">${inner}</div>${tiles}${labels}`,
    { x: X, y: Y + (1 - k) * 70, w: W, h: H, s: 1.2 * lerp(.9, 1, k) * lerp(1, 1.03, seg(t, 45.9, 49)), op: cl(k * 2), b: (1 - cl(k * 1.4)) * 8 });
}
// S13 don't feel like typing? send a voice note
function sVoice(t) {
  const k = eo(seg(t, 48.75, 49.15));
  const draft = 'Write the launch brief for VOLT, inclu';
  const tIn = typed(draft, t, 49.2, 50.3), del = seg(t, 50.45, 50.85), shown = tIn.slice(0, Math.round(tIn.length * (1 - del)));
  const recOn = t >= Wt(146) && t < Wt(150) + .2, el = cl(t - Wt(146), 0, 3.2);
  const msgs = [{ day: 'Today' }, { me: true, html: DECK_ASK, time: '9:41' }, { me: false, html: 'Done. 5 slides, your numbers, speaker notes in.', time: '9:42' }];
  const vn = `<div style="display:flex;align-items:center;gap:10px;width:250px"><div style="width:34px;height:34px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;flex:none"><svg width="14" height="16" viewBox="0 0 14 16"><path d="M2 1.5v13l11-6.5z" fill="#54656F"/></svg></div><div style="flex:1;display:flex;align-items:center;gap:2.5px;height:26px">${Array.from({ length: 30 }, (_, i) => `<i style="width:3px;border-radius:2px;height:${(4 + 18 * Math.abs(Math.sin(i * 1.7 + 2) * Math.sin(i * .43 + 1))).toFixed(1)}px;background:${i < 2 ? '#1DAA61' : '#8EA39A'}"></i>`).join('')}</div><span style="font-size:12px;color:#667781">0:03</span></div>`;
  if (t >= Wt(150) + .2) msgs.push({ me: true, html: vn, t: Wt(150) + .2, time: '9:44' });
  if (t >= 52.85) msgs.push({ me: false, html: 'On it. Launch brief coming up 🎧', t: 52.85, time: '9:44' });
  const inner = waChat({ name: 'Chatly', status: 'online', av: CHATLY_AV(38), msgs, t, input: recOn ? '' : shown, caret: !recOn && t < Wt(146), rec: recOn ? { el } : null });
  // camera on the input bar
  const S = lerp(1.0, 1.6, eio(seg(t, 48.85, 49.5))) * lerp(1, 1.25 / 1.6, eio(seg(t, Wt(150) + .1, 52.7)));
  const cy = lerp(540, 860, eio(seg(t, 48.85, 49.5))) + lerp(0, -120, eio(seg(t, Wt(150) + .1, 52.7)));
  let h = cam(phone(inner, 960 - (PW + 28) / 2, 60 + (1 - k) * 90, { op: k }), S, 760, cy);
  if (t < Wt(146) - .05) h += kline([P('Don’t', 142), P('feel', 143), P('like', 144), P('typing?', 145)], t, { fs: 84, x: 90, y: 380, w: 560, align: 'left', gone: Wt(146) - .3, wrap: true });
  else h += kline([P('Send', 147), P('a', 148), P('voice', 149, { mk: 1, mt: Wt(149) }), P('note.', 150, { mk: 1, mt: Wt(149) })], t, { fs: 84, x: 90, y: 380, w: 560, align: 'left', gone: 52.55, wrap: true });
  return h;
}
// S14 it all syncs to the web app — real Chatly app, Recents tagged with their chat app
function sWeb(t) {
  const k = eo(seg(t, 52.7, 53.1));
  const RC = [['Launch brief for VOLT', 'wa', Wt(154)], ['Inbox summary', 'wa', Wt(154) + .18], ['VOLT launch ad', 'dc', Wt(154) + .36], ['Q3 review deck', 'wa', Wt(154) + .54]];
  const recents = [...RC.map((r) => r[0]), 'Competitor pricing research', 'Weekly team update', 'Podcast intro music'];
  const chat = CU.userBubble({ text: DECK_ASK }) + CU.turn(CU.working({ steps: [{ label: 'Pulling Q3 numbers', icon: 'search', state: 'done' }, { label: 'Building 5 slides', icon: 'slides', state: 'done' }], state: 'done', files: 1, doneLabel: 'Created 1 file' }),
    CU.fileTiles({ items: [{ type: 'file', name: 'Q3 review.pptx' }], cols: 4 }));
  let app = CU.appDesktop({ w: 1920, h: 1080, sidebar: { recents, active: 3, activeNav: '' }, navbar: { title: 'Q3 review deck' }, chatHTML: chat });
  // tag the four synced chats with their app's mono icon (as chatly-web does: 16 px, tertiary) and slide them in
  RC.forEach(([nm, src, t0], i) => { const kr = eo(seg(t, t0, t0 + .35));
    app = app.replace(`<p>${nm}</p>`, `<p>${nm}</p><span class="src">${src === 'wa' ? WA_MONO(16) : DC_MONO(16)}</span>`).replace(`cu-sb-hist-${i}`, `cu-sb-hist-${i}" style="opacity:${kr.toFixed(3)};transform:translateX(${((1 - kr) * -30).toFixed(1)}px);background:${t > t0 + .35 && t < t0 + 1.2 ? 'rgba(152,194,255,.35)' : ''}`); });
  const win = `<div style="position:absolute;left:0;top:0;width:1920px;height:1080px;border-radius:26px;overflow:hidden;box-shadow:0 60px 140px -40px rgba(28,52,120,.35);background:#fff">${app}</div>`;
  // camera: whole app -> push onto the Recents list on "nothing gets lost"
  const kz = eio(seg(t, Wt(160) - .3, Wt(160) + .5));
  const S = lerp(.82, 2.3, kz), cx = lerp(960, 330, kz), cy = lerp(560, 540, kz);
  let h = cam(E(win, { x: 0, y: (1 - k) * 60, w: 1920, h: 1080, op: k }), S, cx, cy);
  if (kz < .5) h += '';
  return h;
}
const sLive = (t) => kline([P('It’s', 163), P('live', 164, { mk: 1, mt: Wt(164) }), P('now.', 165)], t, { fs: 140, y: 450 });
// S16 Settings -> Chat apps -> Connect -> WhatsApp is connected
function settingsPage(t, { hlChat = 0, press = false } = {}) {
  const row = (logo, name, desc, btn) => `<div class="st-row">${logo}<div style="flex:1;min-width:0"><div style="font-size:15px;font-weight:500;color:#0F0F0F">${name}</div><div style="font-size:14.5px;color:#6B6B6B;margin-top:2px">${desc}</div></div>${btn}</div>`;
  const waLogo = `<div style="width:36px;height:36px;flex:none">${CU.icon('WhatsappCircleIcon', { size: 36 })}</div>`;
  const dcLogo = `<div style="width:36px;height:36px;border-radius:10px;border:1px solid #E6E6E6;display:flex;align-items:center;justify-content:center;flex:none;box-sizing:border-box">${CU.icon('DiscordIcon', { size: 22 })}</div>`;
  const nav = `<div class="st-nav"><div style="font-size:20px;font-weight:600;color:#0F0F0F;margin:0 10px 6px">Settings</div>
    <div class="g">Account</div><div class="i">Your account</div><div class="i">Preferences</div>
    <div class="g">Apps</div><div class="i on" style="${hlChat ? `box-shadow:0 0 0 ${(2 * hlChat).toFixed(1)}px #98C2FF` : ''}">Chat apps</div>
    <div class="g">Workspace</div><div class="i">Overview</div><div class="i">Members</div><div class="i">Analytics</div></div>`;
  const main = `<div class="st-main"><div style="font-size:26px;font-weight:600;color:#0F0F0F">Chat apps</div>
    <div style="font-size:15px;color:#6B6B6B;margin-top:6px">Message Chatly from WhatsApp or Discord. Replies come back in the same chat.</div>
    <div style="margin-top:40px;font-size:16px;font-weight:500;color:#0F0F0F">Your apps</div><div style="font-size:14px;color:#8A8A8A;margin:4px 0 14px">Each connection is yours. Other people can’t see your chats.</div>
    <div class="st-card">${row(waLogo, 'WhatsApp', 'Text or send a voice note from your phone. Photos and files work too.', `<div class="st-btn" id="waConnect" style="${press ? 'transform:scale(.94);background:#E4E4E4' : ''}">Connect</div>`)}
      ${row(dcLogo, 'Discord', 'DM the Chatly bot with /chatly. Long tasks run in the background and land here when done.', '<div class="st-btn">Connect</div>')}</div></div>`;
  return `<div class="st-shell" style="left:0;top:0;width:1500px;height:820px">${nav}${main}</div>`;
}
function connectDialog(t, t0) {
  const phoneTxt = typed('+1 415 555 0132', t, t0 + .1, t0 + .55), done = t >= Wt(175) - .05;
  const kd = eo(seg(t, Wt(175) - .05, Wt(175) + .3));
  const body = !done ? `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding-top:30px">${CU.icon('WhatsappCircleIcon', { size: 56 })}<div style="font-size:20px;font-weight:600">Connect WhatsApp</div></div>
      <div style="font-size:14px;font-weight:500;color:#3A3A3A;margin:30px 0 8px">Phone number</div>
      <div style="height:44px;border-radius:12px;border:1.5px solid #0F0F0F;display:flex;align-items:center;padding:0 14px;font-size:16px;gap:10px"><span>🇺🇸</span><span>${phoneTxt}</span></div>
      <div style="display:flex;justify-content:flex-end;margin-top:26px"><div style="height:38px;border-radius:10px;background:#0F0F0F;color:#fff;display:flex;align-items:center;padding:0 16px;font-size:14px;font-weight:500">Send code</div></div>`
    : `<div style="display:flex;flex-direction:column;align-items:center;gap:12px;padding-top:24px;opacity:${kd.toFixed(3)};transform:scale(${lerp(.94, 1, kd).toFixed(3)})"><div style="position:relative">${CU.icon('WhatsappCircleIcon', { size: 56 })}<span style="position:absolute;right:-4px;bottom:-4px;width:22px;height:22px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center"><span style="width:18px;height:18px;border-radius:50%;background:#16A34A;display:flex;align-items:center;justify-content:center"><svg width="11" height="11" viewBox="0 0 12 12"><path d="M2.5 6.2l2.3 2.3 4.7-5" stroke="#fff" stroke-width="1.8" fill="none" stroke-linecap="round"/></svg></span></span></div>
      <div style="font-size:20px;font-weight:600">WhatsApp is connected</div><div style="font-size:14px;color:#6B6B6B">•••• 0132 can now message Chatly.</div></div>
      <div style="margin-top:22px;border-radius:16px;background:#F7F7F7;padding:16px;opacity:${kd.toFixed(3)}"><div style="font-size:13px;font-weight:500;color:#8A8A8A;margin-bottom:10px">Try sending</div>
      <div style="display:flex;flex-wrap:wrap;gap:8px">${['What’s on my calendar today?', 'Summarize this PDF', 'Draft a reply to Sara’s email', 'Plan my week'].map((p) => `<span style="border:1px solid #DADADA;background:#fff;border-radius:999px;padding:6px 12px;font-size:14px">${p}</span>`).join('')}</div></div>
      <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:20px;opacity:${kd.toFixed(3)}"><div style="height:36px;border-radius:10px;background:#F1F1F1;display:flex;align-items:center;padding:0 14px;font-size:14px;font-weight:500">Open WhatsApp</div><div style="height:36px;border-radius:10px;background:#0F0F0F;color:#fff;display:flex;align-items:center;padding:0 16px;font-size:14px;font-weight:500">Done</div></div>`;
  return `<div style="width:520px;border-radius:24px;background:#fff;padding:24px 28px 28px;box-sizing:border-box;box-shadow:0 40px 100px -20px rgba(0,0,0,.35);font-family:'Google Sans Flex','GS',sans-serif;color:#0F0F0F">${body}</div>`;
}
let CONNECT = { x: 1300, y: 520 };
function sSettings(t) {
  const k = eo(seg(t, 58.4, 58.85));
  const click = Wt(172), press = t > click && t < click + .14;
  let world = E(settingsPage(t, { hlChat: eo(seg(t, Wt(169), Wt(169) + .3)) * (1 - seg(t, click, click + .3)), press }), { x: 210, y: 130 + (1 - k) * 60, w: 1500, h: 820, op: k });
  // dialog over a dim
  const kd = eo(seg(t, click + .1, click + .4));
  if (kd > 0) world += `<div class="L" style="background:rgba(10,12,20,${(.32 * kd).toFixed(3)});border-radius:26px"></div>` + E(connectDialog(t, click + .1), { x: 700, y: 210 + (1 - kd) * 30, w: 520, h: 600, op: kd, s: lerp(.96, 1, kd) });
  // camera: push onto the Chat apps page, then centre the dialog
  const kz = eio(seg(t, 58.6, 59.6)), kz2 = eio(seg(t, click, click + .5));
  const S = lerp(1.05, 1.6, kz) * lerp(1, 1.55 / 1.6, kz2), cx = lerp(960, 1100, kz), cy = lerp(540, 420, kz);
  let h = cam(world, S, lerp(cx, 960, kz2), lerp(cy, 500, kz2));
  // pointer to Connect (measured)
  if (t > 59.7 && t < click + .3) {
    const kc = eio(seg(t, 59.75, click - .05));
    h += E(CURSOR(54), { x: lerp(CONNECT.x + 240, CONNECT.x, kc) - 11, y: lerp(CONNECT.y + 200, CONNECT.y, kc) - 6, w: 54, h: 54, s: press ? .88 : 1, ox: .2, oy: .1, op: seg(t, 59.7, 59.85) * (1 - seg(t, click + .15, click + .3)), z: 9 });
  }
  if (t >= Wt(177) - .1) h += '';
  return { html: h, after: () => { const el = document.querySelector('#waConnect'); if (el) { const r = el.getBoundingClientRect(); if (r.width > 4) CONNECT = { x: r.left + r.width / 2, y: r.top + r.height / 2 }; } } };
}
// S17 WhatsApp + Discord now. A lot more coming soon.
function sSoon(t) {
  const S = 150, gap = 40, n = 5, W = n * S + (n - 1) * gap, x0 = 960 - W / 2, y = 330;
  let h = '';
  ['wa', 'dc', 'plus', 'plus', 'plus'].forEach((kind, i) => { const t0 = i < 2 ? 62.7 + i * .12 : Wt(183) + (i - 2) * .14, k = spring(seg(t, t0, t0 + .5)); if (t < t0) return;
    h += E(TILE(kind, S), { x: x0 + i * (S + gap), y: y + 6 * Math.sin(t * 1.5 + i * 1.3), w: S, h: S, s: lerp(.6, 1, k), op: cl(k * 2) * (i > 1 ? .9 : 1) }); });
  h += kline([P('A', 181), P('lot', 182), P('more', 183), P('coming', 184), P('soon.', 185, { mk: 1, mt: Wt(185) })], t, { fs: 96, y: 590 });
  return h;
}

/* ---------- schedule: [in, out, fadeIn, fadeOut, fn] ---------- */
const SCN = [[0, 6.75, 0, .3, sHook], [6.6, 12.25, .25, .3, sLife], [12.2, 13.6, .2, .2, sThink], [13.45, 16.6, .2, 0, s180],
  [16.6, 23.0, 0, .2, sList], [22.8, 25.98, .15, 0, sDetour], [26.0, 27.85, .2, .2, sNever], [27.7, 37.98, .2, 0, sReplies],
  [38.8, 42.35, 0, .25, sApps], [42.15, 45.5, .2, .2, sTextIt], [45.3, 49.0, .15, .3, sThree],
  [48.75, 52.95, .3, .25, sVoice], [52.7, 57.4, .25, 0, sWeb], [57.4, 58.5, .2, .2, sLive], [58.35, 62.85, .25, .3, sSettings],
  [62.6, 65.01, .3, 0, sSoon]];
window.T_END = 65.0;
window.render = (t) => {
  bg(t);
  let html = '', after = [];
  for (const [a, b, fi, fo, fn] of SCN) {
    if (t < a || t >= b) continue;
    const kin = fi ? sio(seg(t, a, a + fi)) : 1, kout = fo ? sio(seg(t, b - fo, b)) : 0;
    let r = fn(t); if (typeof r === 'object') { after.push(r.after); r = r.html; }
    html += layer(r, { op: kin * (1 - kout), b: (1 - kin) * 6 + kout * 6, s: lerp(1.015, 1, kin) * lerp(1, .99, kout) });
  }
  // corner bug (Chatly lockup top-left), hidden on the brand + apps beats
  const hide = sio(seg(t, 37.4, 37.7)) * (1 - sio(seg(t, 42.1, 42.4)));
  const kb = (1 - hide) * (1 - seg(t, 62.4, 62.7));
  $('top').innerHTML = kb > 0 ? `<div style="position:absolute;left:46px;top:38px;opacity:${(kb * .62).toFixed(3)};color:#15181E">${LOCK(117, 29, 'currentColor')}</div>` : '';
  $('sc').innerHTML = html;
  after.forEach((f) => f && f());
};
document.fonts.load('500 40px "Google Sans Flex"').then(() => { window.READY = true; });
</script></body></html>
```

## Appendix B: MG frame renderer (`mg/gen/render.mjs`)

```js
// Render gen/film.html frames with headless Chrome (copied from chatly-38tabs/gen/render.mjs; NOBLUR only: no multi-sample ghosting).
//   node gen/render.mjs peek 0.5 2.3 7.8 ...      -> tmp/peek/<t>.png (quick stills)
//   node gen/render.mjs frames [from] [to]        -> tmp/frames/f%05d.png, 30 fps (NW workers, default 2 because the machine is shared)
import puppeteer from '/Users/faseeh/.npm/_npx/110f701c48e68d66/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'node:fs';
const D = new URL('../', import.meta.url).pathname;
const [VW, VH] = [1920, 1080], FPS = 30, mode = process.argv[2] || 'peek';
const END = +(process.env.END || JSON.parse(readFileSync(`${D}gen/timing.json`, 'utf8')).end);
const launch = () => puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', protocolTimeout: 180000,
  args: ['--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1', '--disable-background-timer-throttling', '--disable-renderer-backgrounding'] });
async function openPage(br) {
  const p = await br.newPage(); await p.setViewport({ width: VW, height: VH });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message)); p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warn') console.log('CONSOLE', m.text()); });
  await p.goto(`file://${D}gen/${process.env.FILM || 'film.html'}`, { waitUntil: 'load' });
  await p.waitForFunction('window.READY === true', { timeout: 60000 });
  return p;
}
async function shot(p, t, path) {
  await p.evaluate(async (t) => { window.render(t); window.render(t);   // twice: positions measured in pass 1 feed pass 2
    await Promise.race([Promise.all([...document.images].map((i) => i.decode().catch(() => {}))), new Promise((r) => setTimeout(r, 3000))]); }, t);
  await p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const b = Buffer.from(await p.screenshot({ type: 'png', optimizeForSpeed: true })); writeFileSync(path, b); return b;
}
if (mode === 'peek') {
  const out = `${D}tmp/peek${process.env.TAG || ''}`; mkdirSync(out, { recursive: true });
  const br = await launch(); const p = await openPage(br);
  for (const t of process.argv.slice(3).map(Number)) { await shot(p, t, `${out}/${t.toFixed(2)}.png`); }
  console.log('peek done', process.argv.length - 3);
  await br.close();
} else {
  const out = `${D}tmp/frames${process.env.TAG || ''}`; mkdirSync(out, { recursive: true });
  const n = Math.round(END * FPS), from = +(process.argv[3] || 0), to = +(process.argv[4] || n), NW = Math.min(2, +(process.env.NW || 2));
  let next = from, done = 0;
  await Promise.all(Array.from({ length: NW }, async () => {
    let br = await launch(), p = await openPage(br);
    while (next < to) {
      const i = next++, f = `${out}/f${String(i).padStart(5, '0')}.png`;
      if (existsSync(f)) { done++; continue; }
      try { await shot(p, i / FPS, f); }
      catch (e) { console.log('retry', i, e.message); try { await br.close(); } catch {} br = await launch(); p = await openPage(br); await shot(p, i / FPS, f); }   // a hung Chrome is replaced, not waited on
      if (++done % 100 === 0) console.log(done, 'frames');
    }
    await br.close();
  }));
  console.log('done', done);
}
```

## Appendix C: Floating overlays (`overlays/gen/overlays.html`)

```html
<!doctype html>
<html><head><meta charset="utf-8">
<title>Chatly chat-apps overlays</title>
<style>
@font-face { font-family: 'GS'; src: url('../../../chatly-smb/brand/fonts/GoogleSansFlex.woff2') format('woff2'); font-weight: 1 1000; }
html, body { margin: 0; width: 1920px; height: 1080px; overflow: hidden; background: transparent; }
body.preview { background: #c9ccd1; }
#stage { position: absolute; inset: 0; font-family: 'GS', 'Google Sans', sans-serif; color: #15181E; -webkit-font-smoothing: antialiased; }
.it { position: absolute; left: 0; top: 0; display: none; will-change: transform, opacity, filter; transform-origin: 50% 50%; }

/* ---------- glossy 3D-ish app tile ---------- */
.tile { position: relative; border-radius: 27%; overflow: visible; }
.tile .face { position: absolute; inset: 0; border-radius: 27%; overflow: hidden;
  box-shadow: inset 0 2px 1px rgba(255,255,255,.65), inset 0 -6px 12px rgba(0,0,0,.14), inset 0 0 0 1px rgba(255,255,255,.18); }
.tile .gloss { position: absolute; left: 6%; right: 6%; top: 3%; height: 46%; border-radius: 40% 40% 50% 50% / 60% 60% 40% 40%;
  background: linear-gradient(180deg, rgba(255,255,255,.55), rgba(255,255,255,.06)); pointer-events: none; }
.tile .glyph { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; filter: drop-shadow(0 2px 2px rgba(0,0,0,.18)); }
.tile .glyph svg { display: block; }
.tile .badge { position: absolute; right: -8%; top: -8%; min-width: 30%; height: 30%; border-radius: 999px; background: #fff; color: #128C3E;
  font-weight: 700; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,.22); opacity: 0; }

/* ---------- ref-style chat chip (dark translucent) ---------- */
.chip { background: rgba(21,24,30,.84); border: 1px solid rgba(255,255,255,.12); border-radius: 16px; padding: 10px 16px 11px; color: #fff;
  box-shadow: 0 10px 28px rgba(0,0,0,.20); white-space: nowrap; }
.chip .nm { font-size: 13px; font-weight: 600; letter-spacing: .01em; color: rgba(255,255,255,.55); margin-bottom: 3px; }
.chip .tx { font-size: 19px; font-weight: 500; letter-spacing: -.01em; line-height: 1.25; }
.chip.out { background: rgba(255,255,255,.95); color: #15181E; border-color: rgba(0,0,0,.06); }
.chip.out .nm { color: rgba(21,24,30,.5); }
.sys { background: rgba(21,24,30,.80); color: #fff; border-radius: 999px; padding: 12px 24px; font-size: 22px; font-weight: 550; white-space: nowrap;
  box-shadow: 0 10px 28px rgba(0,0,0,.20); }

/* ---------- notification banner ---------- */
.notif { width: 440px; box-sizing: border-box; display: flex; gap: 14px; align-items: center; padding: 14px 18px 14px 14px; border-radius: 24px;
  background: rgba(255,255,255,.93); box-shadow: 0 14px 34px rgba(0,0,0,.16), 0 2px 6px rgba(0,0,0,.08); }
.notif .ic { width: 48px; height: 48px; flex: none; }
.notif .bd { flex: 1; min-width: 0; }
.notif .hd { display: flex; justify-content: space-between; font-size: 16px; font-weight: 650; }
.notif .hd span:last-child { font-weight: 450; color: rgba(21,24,30,.45); font-size: 14px; }
.notif .ms { font-size: 17px; color: rgba(21,24,30,.82); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* ---------- small cards ---------- */
.card { border-radius: 20px; background: rgba(21,24,30,.86); color: #fff; box-shadow: 0 18px 44px rgba(0,0,0,.24); border: 1px solid rgba(255,255,255,.10); box-sizing: border-box; }
.wall { width: 370px; height: 360px; padding: 16px 18px; overflow: hidden; position: relative; }
.wall .nm { font-size: 13px; font-weight: 600; color: rgba(255,255,255,.55); margin-bottom: 8px; }
.wall .scroll { position: absolute; left: 18px; right: 18px; top: 44px; bottom: 0; overflow: hidden;
  -webkit-mask-image: linear-gradient(180deg, #000 70%, transparent 100%); }
.wall .txt { font-size: 17px; line-height: 1.45; color: rgba(255,255,255,.92); }
.reply { width: 370px; padding: 14px 16px 16px; }
.reply .top { display: flex; align-items: center; gap: 10px; font-size: 14px; font-weight: 600; color: rgba(255,255,255,.65); }
.reply .av { width: 30px; height: 30px; border-radius: 50%; background: #2a2f3a; display: flex; align-items: center; justify-content: center; }
.reply .tx { font-size: 19px; font-weight: 500; margin: 10px 0 12px; }
.reply .thumb { height: 170px; border-radius: 12px; background: linear-gradient(135deg, #f4efe6, #e7dccb); position: relative; overflow: hidden; color: #15181E; }
.reply .thumb .k { position: absolute; left: 18px; top: 16px; font-size: 11px; font-weight: 700; letter-spacing: .12em; color: rgba(21,24,30,.5); }
.reply .thumb .h { position: absolute; left: 18px; top: 38px; font-size: 30px; font-weight: 650; letter-spacing: -.03em; line-height: 1.02; }
.reply .thumb .bar { position: absolute; left: 18px; bottom: 18px; height: 8px; border-radius: 4px; background: rgba(21,24,30,.16); }
.reply .thumb .blk { position: absolute; right: 16px; top: 16px; bottom: 16px; width: 110px; border-radius: 8px; background: linear-gradient(160deg, #1d2129, #3a3f4a); }
.reply .file { display: flex; align-items: center; gap: 10px; margin-top: 12px; font-size: 16px; font-weight: 550; }
.reply .file small { font-weight: 450; color: rgba(255,255,255,.55); font-size: 14px; margin-left: auto; }
.filechip { display: flex; align-items: center; gap: 12px; padding: 12px 16px; }
.filechip .n { font-size: 18px; font-weight: 550; }
.filechip .s { font-size: 13px; color: rgba(255,255,255,.55); }

/* voice note pill (ref's dark pill with glowing green edge) */
.voice { display: flex; align-items: center; gap: 14px; height: 84px; padding: 0 26px 0 14px; border-radius: 999px; background: rgba(21,24,30,.88);
  box-shadow: 0 0 0 2px rgba(37,211,102,.85), 0 0 22px rgba(37,211,102,.45), 0 14px 34px rgba(0,0,0,.22); color: #fff; }
.voice .mic { width: 56px; height: 56px; border-radius: 50%; background: #25D366; display: flex; align-items: center; justify-content: center; }
.voice .wave { display: flex; align-items: center; gap: 5px; height: 50px; }
.voice .wave i { display: block; width: 5px; border-radius: 3px; background: #fff; }
.voice .tm { font-size: 20px; font-weight: 550; font-variant-numeric: tabular-nums; margin-left: 6px; }

/* light window card (ref's macOS doc card, small) */
.win { background: #fff; border-radius: 18px; box-shadow: 0 22px 50px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.08); overflow: hidden; color: #15181E; }
.win .bar { height: 40px; display: flex; align-items: center; gap: 8px; padding: 0 14px; border-bottom: 1px solid #EDEDED; }
.win .bar i { width: 11px; height: 11px; border-radius: 50%; background: #d9d9de; display: block; }
.win .bar .url { margin-left: 14px; flex: 1; height: 24px; border-radius: 8px; background: #F4F4F5; font-size: 13px; color: rgba(21,24,30,.6); display: flex; align-items: center; padding-left: 10px; }
.web .body { display: flex; height: calc(100% - 41px); }
.web .side { width: 120px; border-right: 1px solid #EDEDED; padding: 14px 12px; box-sizing: border-box; }
.web .side .sl { height: 10px; border-radius: 5px; background: #EDEDED; margin: 14px 0 0; }
.web .main { flex: 1; padding: 16px 18px; }
.web .ttl { font-size: 13px; font-weight: 600; color: rgba(21,24,30,.5); letter-spacing: .02em; margin-bottom: 10px; }
.web .row { display: flex; align-items: center; gap: 10px; height: 54px; border-radius: 12px; padding: 0 10px; margin-bottom: 6px; background: #F7F7F8; }
.web .row .t { font-size: 16px; font-weight: 550; }
.web .row .src { display: flex; align-items: center; gap: 5px; font-size: 12px; color: rgba(21,24,30,.5); margin-top: 1px; }
.web .row .ok { margin-left: auto; width: 24px; height: 24px; border-radius: 50%; background: #15181E; display: flex; align-items: center; justify-content: center; }
.set { padding: 18px 18px 14px; }
.set .h { font-size: 22px; font-weight: 650; letter-spacing: -.02em; }
.set .d { font-size: 14px; color: rgba(21,24,30,.55); margin: 4px 0 14px; line-height: 1.35; }
.set .rw { display: flex; align-items: center; gap: 12px; padding: 12px; border-radius: 14px; border: 1px solid #EDEDED; margin-bottom: 8px; position: relative; }
.set .rw .nm { font-size: 16px; font-weight: 600; display: flex; align-items: center; gap: 8px; }
.set .rw .sb { font-size: 13px; color: rgba(21,24,30,.55); margin-top: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 230px; }
.set .btn { margin-left: auto; height: 36px; padding: 0 14px; border-radius: 12px; background: #F1F1F2; font-size: 14px; font-weight: 600; display: flex; align-items: center; flex: none; }
.set .conn { font-size: 11px; font-weight: 650; padding: 3px 8px; border-radius: 999px; background: #15181E; color: #fff; opacity: 0; }
</style></head>
<body>
<div id="stage"></div>
<script type="module">
import { ICON_SVG, icon, suite } from '../../../../reference/chatly-ui-kit/icons.js';
if (location.hash === '#preview') document.body.classList.add('preview');

// ---------- glyphs (all from the real product icons) ----------
const WA_GLYPH = (s) => { // WhatsappCircleIcon without its green disc: white bubble outline + white handset
  const raw = ICON_SVG.WhatsappCircleIcon;
  const paths = raw.match(/<path[^>]*\/>/g);
  const p1 = paths[0].replace('fill="#25D366"', 'fill="none"');
  return `<svg viewBox="8.5 8.5 25 25" width="${s}" height="${s}">${p1}${paths[1]}</svg>`;
};
const DC_GLYPH = (s) => { const p = ICON_SVG.DiscordIcon.match(/<path[^>]*\/>/g)[1]; return `<svg viewBox="110 110 292 292" width="${s}" height="${s}">${p}</svg>`; };
const LOGO = (s, c = '#fff') => icon('LogoIcon', { size: [s * 375 / 411, s], color: c });
const GEAR = (s, c = '#2b2f37') => `<svg viewBox="2 2 12 12" width="${s}" height="${s}" fill="none" stroke="${c}" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round"><path d="m6.803 2.59-.384 1.025-1.323.776-1.055-.166a.87.87 0 0 0-.513.085.9.9 0 0 0-.38.367l-.358.646a.95.95 0 0 0 .072 1.043l.67.859v1.55l-.652.859a.94.94 0 0 0-.072 1.043l.358.646a.9.9 0 0 0 .38.367c.159.08.338.11.513.085l1.055-.166 1.305.776.384 1.024a.9.9 0 0 0 .327.428.87.87 0 0 0 .504.163h.75c.18 0 .356-.057.505-.163a.9.9 0 0 0 .327-.428l.384-1.024 1.305-.776 1.054.166a.87.87 0 0 0 .514-.085.9.9 0 0 0 .38-.367l.357-.646a.95.95 0 0 0-.071-1.043l-.67-.859v-1.55l.652-.859a.947.947 0 0 0 .071-1.043l-.357-.646a.9.9 0 0 0-.38-.367.87.87 0 0 0-.514-.085l-1.054.166-1.305-.776-.384-1.024a.9.9 0 0 0-.327-.428A.87.87 0 0 0 8.367 2h-.733a.87.87 0 0 0-.504.163.9.9 0 0 0-.327.428"/><path d="M6.514 9.026a1.89 1.89 0 0 1 .223-2.331c.335-.347.79-.541 1.263-.541.354 0 .7.108.993.311s.523.491.659.829c.135.337.17.708.101 1.066s-.239.687-.489.945a1.77 1.77 0 0 1-.915.506 1.74 1.74 0 0 1-1.033-.105 1.8 1.8 0 0 1-.802-.68"/></svg>`;
const CHECK = (s, c = '#fff') => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="${c}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>`;
const PLUS = (s, c) => `<svg viewBox="0 0 24 24" width="${s}" height="${s}" fill="none" stroke="${c}" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`;

// tile looks: [face gradient, extrusion edge colour, glyph builder]
const TILE = {
  whatsapp: ['linear-gradient(170deg,#62F07F 0%,#2BD455 45%,#1DB847 100%)', '#14963a', (s) => WA_GLYPH(s * .62)],
  discord:  ['linear-gradient(170deg,#8C95FF 0%,#5865F2 50%,#4752d8 100%)', '#3a43b8', (s) => DC_GLYPH(s * .64)],
  chatly:   ['linear-gradient(170deg,#3a3f4b 0%,#1d2129 55%,#121419 100%)', '#07080a', (s) => LOGO(s * .50)],
  settings: ['linear-gradient(170deg,#f4f5f7 0%,#d9dce2 60%,#c4c8d0 100%)', '#9fa4ad', (s) => GEAR(s * .62)],
  ghost:    ['linear-gradient(170deg,rgba(255,255,255,.80),rgba(255,255,255,.55))', 'rgba(0,0,0,.08)', (s) => PLUS(s * .36, 'rgba(21,24,30,.55)')],
  // white glossy tiles holding the real colour suite / brand icons
  slides: 'suite', docs: 'suite', sheets: 'suite', image: 'suite',
  gmail: ['linear-gradient(170deg,#ffffff 0%,#f1f2f5 60%,#e3e5ea 100%)', '#c3c7cf', (s) => icon('GmailColoredIcon', { size: s * .6 })],
};
function tileHTML(kind, s, badge) {
  let [bg, edge, g] = TILE[kind] === 'suite'
    ? ['linear-gradient(170deg,#ffffff 0%,#f1f2f5 60%,#e3e5ea 100%)', '#c3c7cf', (z) => suite(kind, z * .66)]
    : TILE[kind];
  const ghost = kind === 'ghost';
  const sh = `0 ${s * .055}px 0 ${edge}, 0 ${s * .16}px ${s * .28}px rgba(0,0,0,.22), 0 ${s * .05}px ${s * .08}px rgba(0,0,0,.12)`;
  return `<div class="tile" style="width:${s}px;height:${s}px;box-shadow:${ghost ? '0 10px 24px rgba(0,0,0,.10)' : sh}">
    <div class="face" style="background:${bg};${ghost ? 'border:2px dashed rgba(21,24,30,.28);box-sizing:border-box;' : ''}"></div>
    ${ghost ? '' : '<div class="gloss"></div>'}<div class="glyph">${g(s)}</div>
    ${badge ? `<div class="badge" style="font-size:${s * .19}px">1</div>` : ''}</div>`;
}
const waMini = (s) => `<div style="width:${s}px;height:${s}px">${tileHTML('whatsapp', s)}</div>`;

// ---------- cue list (seconds; cuts from scene detection, words from src/words.json) ----------
// enter: pop (tiles, spring) | rise (chips, ref-style fade+rise+deblur) | fly (cards, ref-style fly-in from lower right)
// out: hard out at the cut (ref grammar) ; exit: soft exit start (0.25 s) when there is no cut
// first frame of the next shot / 30 (exact, so the overlay never leaks one frame into the new shot)
const C = { s1: 202 / 30, s2: 341 / 30, s4: 692 / 30, s5: 771 / 30, s7: 1130 / 30, s8: 1173 / 30, s10: 1470 / 30, s13: 1581 / 30, s14: 1711 / 30 };
const items = [];
const add = (o) => (items.push(o), o);
const T = (kind, x, y, s, t0, end, extra = {}) => add({ type: 'tile', kind, x, y, s, t0, ...end, enter: 'pop', anchor: 'c', html: tileHTML(kind, s, extra.badge), ...extra });
const chip = (x, y, nm, tx, t0, end, extra = {}) => add({ type: 'chip', x, y, t0, ...end, enter: 'rise', anchor: 'tl',
  html: `<div class="chip ${extra.mine ? 'out' : ''}">${nm ? `<div class="nm">${nm}</div>` : ''}<div class="tx">${tx}</div></div>`, ...extra });
const notif = (x, y, title, msg, t0, end) => add({ type: 'notif', x, y, t0, ...end, enter: 'rise', anchor: 'tl',
  html: `<div class="notif"><div class="ic">${tileHTML('whatsapp', 48)}</div><div class="bd"><div class="hd"><span>${title}</span><span>now</span></div><div class="ms">${msg}</div></div></div>` });

// Shot 1 · bean bag wide (0–6.73): "We plan trips / we fight / we even break up in the chat"
notif(1330, 300, 'Babe ❤️', 'we need to talk.', 3.40, { out: C.s1 });

// Shot 2 · close-up (6.73–11.37): "Your entire life happens around the chat except your actual job."
T('whatsapp', 215, 200, 130, 7.14, { exit: 10.62 });
T('discord', 405, 300, 116, 7.44, { exit: 10.66 });
chip(95, 395, 'Friends 🏝️', '238 new messages', 7.82, { exit: 10.70 });
T('docs', 1590, 200, 116, 9.48, { exit: 10.55 }, { dim: true });
T('sheets', 1755, 320, 104, 9.70, { exit: 10.58 }, { dim: true });

// Shot 4 · desk wide (11.93–23.07): "180 years … chatting … how we do everything … work, we have to leave."
chip(95, 140, 'Mom', 'did you eat?', 14.70, { exit: 21.44 });
chip(215, 238, 'Jake', 'lol send it', 15.36, { exit: 21.50 });
chip(90, 336, 'Trip group', 'who’s booking the Airbnb', 15.82, { exit: 21.56 });
chip(230, 434, 'Mia', 'omw 🏃', 16.46, { exit: 21.62 });
chip(1505, 170, 'Landlord', 'rent’s due Friday', 17.92, { exit: 19.90 });
chip(1560, 268, 'Gym', 'leg day?', 18.36, { exit: 19.96 });
T('docs', 1610, 250, 120, 20.20, { out: C.s4 });
T('slides', 1760, 405, 120, 20.48, { out: C.s4 });
T('sheets', 1605, 555, 120, 20.84, { out: C.s4 });
add({ type: 'sys', x: 330, y: 330, t0: 21.90, out: C.s4, enter: 'rise', anchor: 'c', html: '<div class="sys">You left</div>' });

// Shot 5 · desk wide, magnifier (23.07–25.70): "And the work, it always ends up in the chat."
const waS5 = T('whatsapp', 1690, 255, 140, 23.40, { out: C.s5 }, { badge: true, badgeAt: [25.05], bumpAt: 25.02 });
add({ type: 'file', x: 1490, y: 430, t0: 23.88, out: C.s5, enter: 'rise', anchor: 'tl', flyTo: [1690, 255], flyAt: 24.66,
  html: `<div class="card filechip">${suite('slides', 34)}<div><div class="n">final_FINAL_v3.pptx</div><div class="s">PowerPoint · 4.2 MB</div></div></div>` });

// Shot 7 · desk wide (28.03–37.67): "AI in WhatsApp isn't new … just replies … ask for a slide … explanation"
T('whatsapp', 290, 255, 140, 29.24, { exit: 33.30 });
chip(95, 375, 'AI bot', 'Sure! Happy to help 😊', 31.10, { exit: 33.36 });
chip(150, 473, 'AI bot', 'Great question!', 31.76, { exit: 33.42 });
chip(1480, 160, '', 'can you make me a slide? 🙏', 33.86, { out: C.s7 }, { mine: true });
add({ type: 'wall', x: 1480, y: 250, t0: 34.78, out: C.s7, enter: 'fly', anchor: 'tl', scrollFrom: 35.3,
  html: `<div class="card wall"><div class="nm">AI bot</div><div class="scroll"><div class="txt">Sure! Here’s how you can make a slide yourself:<br><br>1. Open PowerPoint or Google Slides<br>2. Click “New slide”<br>3. Choose a layout that fits your content<br>4. Add a clear, short title<br>5. Keep bullet points to one line each<br>6. Pick a readable font, at least 24 pt<br>7. Add an image or chart if it helps<br>8. Check alignment and spacing<br>9. Save and share the file<br>10. Export it as a PDF<br>11. Rehearse before you present<br><br>Let me know if you’d like tips on design!</div></div></div>` });

// Shot 8 · whisper (37.67–39.10): "So we built Chatly…"
// Chatly tile is drawn by comp/compose.py (it flies into the MG centre tile)

// Shot 10 · desk, typing on phone (40.17–49.00): "now on WhatsApp and Discord … text it … finished work comes back … Slides, ads, inbox summarized"
T('whatsapp', 300, 245, 140, 41.12, { out: C.s10 });
T('discord', 470, 405, 126, 41.72, { out: C.s10 });
chip(1480, 140, '', 'turn my notes into a pitch deck', 42.76, { exit: 45.24 }, { mine: true });
add({ type: 'reply', x: 1480, y: 222, t0: 43.46, exit: 45.30, enter: 'fly', anchor: 'tl',
  html: `<div class="card reply"><div class="top"><div class="av">${LOGO(16)}</div>Chatly</div><div class="tx">Done. Here’s your deck.</div>
  <div class="thumb"><div class="k">SEED ROUND · 2026</div><div class="h">Pitch<br>deck</div><div class="bar" style="width:120px"></div><div class="blk"></div></div>
  <div class="file">${suite('slides', 26)}Pitch deck.pptx<small>12 slides</small></div></div>` });
T('slides', 1585, 235, 130, 45.56, { out: C.s10 });
T('image', 1745, 395, 130, 46.32, { out: C.s10 });
T('gmail', 1590, 560, 130, 47.58, { out: C.s10 });

// Shot 13 · bean bag, phone at ear (50.93–52.70): "just send a voice note."
add({ type: 'voice', x: 130, y: 230, t0: 51.25, out: C.s13, enter: 'rise', anchor: 'tl',
  html: `<div class="voice"><div class="mic">${icon('MicrophoneIcon', { size: 30, color: '#fff', sw: 1.8 })}</div><div class="wave">${'<i></i>'.repeat(26)}</div><div class="tm">0:01</div></div>` });

// Shot 14 · side angle (52.70–57.03): "And it all syncs to the web app, so nothing gets lost."
const row = (k, t, src, srcName) => `<div class="row"><div>${suite(k, 26)}</div><div><div class="t">${t}</div><div class="src">${src}<span>from ${srcName}</span></div></div><div class="ok">${CHECK(14)}</div></div>`;
const waIco = icon('WhatsappCircleIcon', { size: 13 }), dcIco = icon('DiscordIcon', { size: 13 });
add({ type: 'web', x: 1375, y: 120, t0: 53.90, out: C.s14, enter: 'fly', anchor: 'tl',
  html: `<div class="win web" style="width:480px;height:330px"><div class="bar"><i></i><i></i><i></i><div class="url">chatlyai.app</div></div>
  <div class="body"><div class="side">${icon('LogoWithText', { size: [72, 18], color: '#15181E' })}<div class="sl" style="width:80%"></div><div class="sl" style="width:60%"></div><div class="sl" style="width:70%"></div><div class="sl" style="width:50%"></div></div>
  <div class="main"><div class="ttl">Recents</div>${row('slides', 'Pitch deck', waIco, 'WhatsApp')}${row('image', 'Sneaker ad', dcIco, 'Discord')}${row('docs', 'Inbox summary', waIco, 'WhatsApp')}</div></div></div>` });

// Shot 15 · desk wide (57.03–67.80): "Go to settings, chat apps, and connect your number. WhatsApp and Discord now. … a lot more coming soon."
// settings gear replaced by the real Chatly tile, drawn by comp/compose.py (290,280, 140 px, 58.62-63.20)
add({ type: 'set', x: 1405, y: 150, t0: 59.50, exit: 63.26, enter: 'fly', anchor: 'tl',
  html: `<div class="win set" style="width:450px;box-sizing:border-box"><div class="h">Chat apps</div><div class="d">Message Chatly from WhatsApp or Discord. Replies come back in the same chat.</div>
  <div class="rw r0">${icon('WhatsappCircleIcon', { size: 36 })}<div><div class="nm">WhatsApp <span class="conn">Connected</span></div><div class="sb s0">Text or send a voice note from your phone.</div></div><div class="btn b0">Connect</div></div>
  <div class="rw r1">${icon('DiscordIcon', { size: 36 })}<div><div class="nm">Discord</div><div class="sb">DM the Chatly bot with /chatly.</div></div><div class="btn">Connect</div></div></div>` });
T('ghost', 1585, 270, 112, 63.90, { exit: 65.80 });
T('ghost', 1740, 395, 112, 64.08, { exit: 65.86 });
T('ghost', 1595, 520, 112, 64.26, { exit: 65.92 });

// ---------- build DOM ----------
const stage = document.getElementById('stage');
items.forEach((it, i) => {
  const el = document.createElement('div'); el.className = 'it'; el.innerHTML = it.html; stage.appendChild(el); it.el = el;
  it.ph = (i * 1.7) % (Math.PI * 2);
  it.badgeEl = el.querySelector('.badge');
  it.bars = [...el.querySelectorAll('.wave i')]; it.tm = el.querySelector('.tm');
  it.scroll = el.querySelector('.txt');
});
window.__items = items.map((it) => ({ type: it.type, kind: it.kind, t0: it.t0, out: it.out, exit: it.exit }));

// ---------- easing ----------
const cl = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const eOutCubic = (p) => 1 - Math.pow(1 - p, 3), eOutQuint = (p) => 1 - Math.pow(1 - p, 5), eInCubic = (p) => p * p * p;
const eInOut = (p) => p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2;
const EXIT = 0.25;

function state(it, t) {
  const end = it.out ?? (it.exit + EXIT);
  if (t < it.t0 || t >= end) return null;
  const dt = t - it.t0;
  let x = 0, y = 0, sc = 1, op = 1, bl = 0, rot = 0;
  if (it.enter === 'pop') {
    sc = 1 - 0.6 * Math.exp(-7 * dt) * Math.cos(12 * dt);
    op = cl(dt / 0.12); bl = 6 * (1 - cl(dt / 0.18)); y += 26 * Math.exp(-8 * dt);
    rot = -6 * Math.exp(-6 * dt);
    // idle: gentle bob + sway
    y += 5 * Math.sin(2 * Math.PI * 0.42 * dt + it.ph); rot += 1.6 * Math.sin(2 * Math.PI * 0.31 * dt + it.ph);
  } else if (it.enter === 'rise') {
    const p = eOutCubic(cl(dt / 0.42)); op = cl(dt / 0.25); y += 18 * (1 - p); bl = 6 * (1 - p); sc = 0.96 + 0.04 * p;
    x += 5 * Math.sin(2 * Math.PI * 0.12 * dt + it.ph); y += 3 * Math.sin(2 * Math.PI * 0.17 * dt + it.ph);
  } else if (it.enter === 'fly') {
    const p = eOutQuint(cl(dt / 0.65)); op = cl(dt / 0.15); x += 240 * (1 - p); y += 200 * (1 - p); sc = 0.55 + 0.45 * p; bl = 14 * (1 - p);
    y += 2.5 * Math.sin(2 * Math.PI * 0.2 * dt + it.ph);
  }
  if (it.exit != null && t >= it.exit) {
    const q = eInCubic(cl((t - it.exit) / EXIT)); op *= 1 - q; sc *= 1 - 0.25 * q; bl += 6 * q; y -= 12 * q;
  }
  if (it.flyAt != null && t >= it.flyAt) { // file chip flies into the WhatsApp tile
    const q = eInOut(cl((t - it.flyAt) / 0.40));
    const w = it.el.firstElementChild.offsetWidth, h = it.el.firstElementChild.offsetHeight;
    x += (it.flyTo[0] - (it.x + w / 2)) * q; y += (it.flyTo[1] - (it.y + h / 2)) * q; sc *= 1 - 0.8 * q; op *= 1 - cl((q - 0.7) / 0.3);
    if (q >= 1) return null;
  }
  if (it.bumpAt != null && t >= it.bumpAt) { const b = t - it.bumpAt; sc *= 1 + 0.12 * Math.exp(-7 * b) * Math.sin(16 * b + 0.3); }
  if (it.dim) op *= 1; // reserved
  return { x, y, sc, op, bl, rot };
}

window.render = (t) => {
  for (const it of items) {
    const s = state(it, t);
    if (!s || s.op <= 0.001) { it.el.style.display = 'none'; continue; }
    const el = it.el; el.style.display = 'block';
    const c = it.anchor === 'c' ? 'translate(-50%,-50%) ' : '';
    el.style.transform = `translate(${it.x + s.x}px,${it.y + s.y}px) ${c}rotate(${s.rot}deg) scale(${s.sc})`;
    el.style.opacity = s.op.toFixed(3);
    el.style.filter = s.bl > 0.05 ? `blur(${s.bl.toFixed(2)}px)` : 'none';
    // per-item extras
    if (it.badgeEl) {
      const n = (it.badgeAt || []).filter((b) => t >= b).length;
      it.badgeEl.textContent = String(n || 1);
      const last = Math.max(...(it.badgeAt || [0]).filter((b) => t >= b), -9);
      const bd = t - last;
      it.badgeEl.style.opacity = n ? 1 : 0;
      it.badgeEl.style.transform = n ? `scale(${1 + 0.35 * Math.exp(-9 * bd) * Math.cos(14 * bd)})` : 'scale(.5)';
    }
    if (it.bars.length) {
      const dt = t - it.t0;
      it.bars.forEach((b, i) => {
        const h = 8 + 34 * Math.abs(Math.sin(i * 1.3 + dt * 7.5) * Math.sin(i * 0.47 + dt * 3.1 + 1));
        b.style.height = `${h.toFixed(1)}px`; b.style.opacity = 0.55 + 0.45 * (h / 42);
      });
      it.tm.textContent = `0:0${Math.min(9, 1 + Math.floor(dt * 2))}`;
    }
    if (it.scroll) { const d = Math.max(0, t - it.scrollFrom); it.scroll.style.transform = `translateY(${-Math.min(140, d * 80).toFixed(1)}px)`; }
    if (it.type === 'web') {
      const rows = el.querySelectorAll('.row');
      rows.forEach((r, i) => { const p = eOutCubic(cl((t - (54.30 + i * 0.30)) / 0.35)); r.style.opacity = p; r.style.transform = `translateY(${(1 - p) * 10}px)`;
        const ok = r.querySelector('.ok'); const q = t - (55.40 + i * 0.18); ok.style.transform = `scale(${q < 0 ? 0 : 1 - Math.exp(-9 * q) * Math.cos(13 * q)})`; });
    }
    if (it.type === 'set') {
      const press = t - 60.30, b0 = el.querySelector('.b0'), cn = el.querySelector('.conn'), s0 = el.querySelector('.s0');
      b0.style.transform = `scale(${press > 0 && press < 0.22 ? 0.92 : 1})`;
      const done = t >= 60.55;
      b0.textContent = done ? 'Open' : 'Connect';
      cn.style.opacity = done ? 1 : 0;
      s0.textContent = done ? '+1 ••• ••• 0142 · Connected just now' : 'Text or send a voice note from your phone.';
      const hl = (k, at) => { const d = t - at; return d > 0 && d < 1.0 ? Math.sin(Math.PI * d / 1.0) : 0; };
      el.querySelector('.r0').style.background = `rgba(37,211,102,${(0.14 * hl(0, 61.10)).toFixed(3)})`;
      el.querySelector('.r1').style.background = `rgba(88,101,242,${(0.14 * hl(1, 61.85)).toFixed(3)})`;
    }
  }
};
document.fonts.ready.then(() => { window.render(0); window.READY = true; });
</script>
</body></html>
```

## Appendix C2: Overlay renderer (`overlays/gen/render.mjs`)

```js
// Render gen/overlays.html to transparent PNG frames with headless Chrome (adapted from chatly-yt-wantit/gen/render.mjs).
//   node gen/render.mjs peek 0.5 2.3 7.8 ...   -> tmp/peek/<t>.png (transparent stills)
//   node gen/render.mjs frames [from] [to]     -> tmp/frames/f%05d.png, 30 fps, 2 workers (shared machine)
import puppeteer from '/Users/faseeh/.npm/_npx/110f701c48e68d66/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
import { mkdirSync, existsSync, writeFileSync } from 'node:fs';
const D = new URL('../', import.meta.url).pathname;
const [VW, VH] = [1920, 1080], FPS = 30, NFRAMES = 2032, mode = process.argv[2] || 'peek';   // A-roll is 2032 frames @ 30 fps
const launch = () => puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', protocolTimeout: 180000,
  args: ['--allow-file-access-from-files', '--hide-scrollbars', '--force-device-scale-factor=1', '--disable-background-timer-throttling', '--disable-renderer-backgrounding'] });
async function openPage(br) {
  const p = await br.newPage(); await p.setViewport({ width: VW, height: VH });
  p.on('pageerror', (e) => console.log('PAGEERR', e.message)); p.on('console', (m) => { if (m.type() === 'error' || m.type() === 'warn') console.log('CONSOLE', m.text()); });
  await p.goto(`file://${D}gen/overlays.html`, { waitUntil: 'load' });
  await p.waitForFunction('window.READY === true', { timeout: 60000 });
  return p;
}
async function shot(p, t, path) {
  await p.evaluate((t) => { window.render(t); window.render(t); }, t);
  await p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  const b = Buffer.from(await p.screenshot({ type: 'png', omitBackground: true, optimizeForSpeed: true })); writeFileSync(path, b); return b;
}
if (mode === 'peek') {
  const out = `${D}tmp/peek`; mkdirSync(out, { recursive: true });
  const br = await launch(); const p = await openPage(br);
  for (const t of process.argv.slice(3).map(Number)) await shot(p, t, `${out}/${t.toFixed(2)}.png`);
  console.log('peek done', process.argv.length - 3);
  await br.close();
} else {
  const out = `${D}tmp/frames`; mkdirSync(out, { recursive: true });
  const from = +(process.argv[3] || 0), to = +(process.argv[4] || NFRAMES), NW = Math.min(2, +(process.env.NW || 2));
  let next = from, done = 0;
  await Promise.all(Array.from({ length: NW }, async () => {
    let br = await launch(), p = await openPage(br);
    while (next < to) {
      const i = next++, f = `${out}/f${String(i).padStart(5, '0')}.png`;
      if (existsSync(f)) { done++; continue; }
      try { await shot(p, i / FPS, f); }
      catch (e) { console.log('retry', i, e.message); try { await br.close(); } catch {} br = await launch(); p = await openPage(br); await shot(p, i / FPS, f); }
      if (++done % 200 === 0) console.log(done, 'frames');
    }
    await br.close();
  }));
  console.log('done', done);
}
```

## Appendix C3: Overlay encoder (`overlays/gen/encode.sh`)

```bash
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
```

## Appendix D: Compositor (`comp/compose.py`)

```python
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
```

## Appendix E: Chatly tile sprite (`comp/tile.html`)

```html
<!doctype html><html><head><meta charset="utf-8"><link rel="stylesheet" href="../../../reference/chatly-ui-kit/chatly-ui.css">
<style>html,body{margin:0;background:transparent}#t{position:absolute;left:150px;top:110px}</style></head><body><div id="t"></div>
<script type="module">
import CU from '../../../reference/chatly-ui-kit/chatly-ui.js';
const s = 420, r = s * .235;
const inner = `box-shadow:inset 0 ${(s * .03).toFixed(1)}px ${(s * .05).toFixed(1)}px rgba(255,255,255,.35),inset 0 -${(s * .04).toFixed(1)}px ${(s * .08).toFixed(1)}px rgba(0,0,0,.12),0 ${(s * .12).toFixed(1)}px ${(s * .28).toFixed(1)}px -${(s * .08).toFixed(1)}px rgba(20,30,70,.35)`;
document.getElementById('t').innerHTML = `<div style="width:${s}px;height:${s}px;border-radius:${r}px;display:flex;align-items:center;justify-content:center;${inner};background:radial-gradient(120% 120% at 30% 20%,#2A3550,#0B1020 70%)">${CU.icon('LogoIcon', { size: s * .5, color: '#fff' })}</div>`;
window.READY = true;
</script></body></html>
```

## Appendix E2: Tile renderer (`comp/tile.mjs`)

```js
import puppeteer from '/Users/faseeh/.npm/_npx/110f701c48e68d66/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const D = new URL('./', import.meta.url).pathname;
const br = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--allow-file-access-from-files'] });
const p = await br.newPage(); await p.setViewport({ width: 720, height: 720 });
await p.goto(`file://${D}tile.html`); await p.waitForFunction('window.READY === true');
await new Promise((r) => setTimeout(r, 300));
await p.screenshot({ path: `${D}assets/tile_chatly.png`, omitBackground: true }); await br.close();
```

## Appendix F: Colour grade (`comp/grade.py`)

```python
"""Soft warm grade after the HeyClicky reels (reference/ig/DfqdQY6xnVc, DfTNd0vgVYY): lifted blacks, creamy compressed highlights,
golden mids, cream whites, warm-brown shadows, golden-natural skin (hue ~55 deg, never green), gentle lens bloom, light vignette.
Worked in Lab so colour moves are tone-weighted: the cream/green-ish highlight shift only lives above skin brightness.
grade(bgr uint8) -> bgr uint8.  Measured: ref skin a+13.9 b+20.3 (ours a+13.7 b+11.9); ref mids b+14, highs b+9.5, shadows a+12 b+9."""
import numpy as np, cv2
Lx = np.arange(256, dtype=np.float32) / 255 * 100                      # Lab L in 0..100
def lcurve(L):
    y = 2.6 + L * (100 - 2.6) / 100                                        # lift blacks
    y = y - 2.0 * np.sin(np.pi * np.clip(y / 100, 0, 1))                   # mids a touch lower (softer, less glare)
    k = 72.0; y = np.where(y > k, k + (y - k) * .74, y)                    # creamy highlight compression
    return np.clip(y, 0, 100)
bell = lambda c, w: np.exp(-((Lx - c) / w) ** 2)
wS, wM, wH = bell(14, 16), bell(48, 18), np.clip((Lx - 62) / 18, 0, 1)
DA = 1.5 * wS + 1.2 * wM - 2.0 * wH                                       # a shift (+red / -green)
DB = 2.0 * wS + 9.5 * wM + 9.0 * wH                                       # b shift (+yellow)
SAT = 1.0 + .10 * wM                                                      # a little more colour in the mids only
L_LUT = (lcurve(Lx) * 255 / 100).astype(np.uint8)
H, W = 1080, 1920
yy, xx = np.mgrid[0:H, 0:W]; r = np.sqrt(((xx - W / 2) / (W * .62)) ** 2 + ((yy - H * .46) / (H * .72)) ** 2)
VIG = (1 - .12 * np.clip((r - .5) / .55, 0, 1) ** 1.8).astype(np.float32)[..., None]
def grade(img):
    lab = cv2.cvtColor(img, cv2.COLOR_BGR2LAB)
    Lc = lab[..., 0]; a = lab[..., 1].astype(np.float32) - 128; b = lab[..., 2].astype(np.float32) - 128
    sat = SAT[Lc]; a = a * sat + DA[Lc]; b = b * sat + DB[Lc]
    out = cv2.cvtColor(np.dstack([L_LUT[Lc], np.clip(a + 128, 0, 255).astype(np.uint8), np.clip(b + 128, 0, 255).astype(np.uint8)]), cv2.COLOR_LAB2BGR).astype(np.float32)
    hi = np.clip((out.max(2, keepdims=True) - 180) / 75, 0, 1) * out          # lens bloom from the highlights
    glow = cv2.GaussianBlur(hi, (0, 0), 22)
    out = 255 - (255 - out) * (1 - .10 * glow / 255)                          # screen-blend 10 %
    return np.clip(out * VIG, 0, 255).astype(np.uint8)
```

## Appendix G: Caption builder (`comp/captions.py`)

```python
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
```

## Appendix H: Caption ASS header (`cap/header.ass`)

```ini
[Script Info]
ScriptType: v4.00+
PlayResX: 1920
PlayResY: 1080
WrapStyle: 2
ScaledBorderAndShadow: yes

[V4+ Styles]
Format: Name, Fontname, Fontsize, PrimaryColour, SecondaryColour, OutlineColour, BackColour, Bold, Italic, Underline, StrikeOut, ScaleX, ScaleY, Spacing, Angle, BorderStyle, Outline, Shadow, Alignment, MarginL, MarginR, MarginV, Encoding
Style: Cap,Inter SemiBold,44,&H00FFFFFF,&H00FFFFFF,&H00000000,&H00000000,0,0,0,0,100,100,-0.6,0,1,0,0,2,80,80,170,1
Style: Shd,Inter SemiBold,44,&H80000000,&H80000000,&H80000000,&H80000000,0,0,0,0,100,100,-0.6,0,1,0,0,2,80,80,170,1

[Events]
Format: Layer, Start, End, Style, Name, MarginL, MarginR, MarginV, Effect, Text
```

## Appendix I: Caption lines (`cap/lines.txt`)

```text
We plan trips in the chat
we fight in the chat
and we even break up in the chat
Your entire life happens around the chat
except your actual job
Think about it
It took us 180 years
to get really good at chatting
It's literally how we do everything
and the minute it comes down to work
we have to leave
And the work
it always ends up in the chat
It just never starts there
And yes
AI in WhatsApp isn't new
but most of it, it's just replies
The minute you ask for a slide
you'll get an explanation
how to make one yourself
So we built Chatly
to just do it
It's now on WhatsApp and Discord
You text it
the finished work comes back
in the same chat
Slides, ads
basically your inbox summarized
And if you don't feel like typing
just send a voice note
And it all syncs to the web app
so nothing gets lost
It's live now
Go to settings, chat apps
and connect your number
WhatsApp and Discord now
And yeah, a lot more coming soon
```

## Appendix J: Audio mix (`mix/audio_v5.py`)

```python
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
```

## Appendix K: Word timings (`src/words.json`)

```json
[
{
"w": "We",
"s": 0.0,
"e": 0.42
},
{
"w": "plan",
"s": 0.42,
"e": 0.66
},
{
"w": "trips",
"s": 0.66,
"e": 0.96
},
{
"w": "in",
"s": 0.96,
"e": 1.12
},
{
"w": "the",
"s": 1.12,
"e": 1.14
},
{
"w": "chat,",
"s": 1.14,
"e": 1.36
},
{
"w": "we",
"s": 1.58,
"e": 1.9
},
{
"w": "fight",
"s": 1.9,
"e": 2.24
},
{
"w": "in",
"s": 2.24,
"e": 2.38
},
{
"w": "the",
"s": 2.38,
"e": 2.44
},
{
"w": "chat",
"s": 2.44,
"e": 2.72
},
{
"w": "and",
"s": 2.72,
"e": 3.12
},
{
"w": "we",
"s": 3.12,
"e": 5.06
},
{
"w": "even",
"s": 5.06,
"e": 5.26
},
{
"w": "break",
"s": 5.26,
"e": 5.52
},
{
"w": "up",
"s": 5.52,
"e": 5.74
},
{
"w": "in",
"s": 5.74,
"e": 5.88
},
{
"w": "the",
"s": 5.88,
"e": 5.94
},
{
"w": "chat.",
"s": 5.94,
"e": 6.18
},
{
"w": "Your",
"s": 7.04,
"e": 7.14
},
{
"w": "entire",
"s": 7.14,
"e": 7.44
},
{
"w": "life",
"s": 7.44,
"e": 7.82
},
{
"w": "happens",
"s": 7.82,
"e": 8.04
},
{
"w": "around",
"s": 8.04,
"e": 8.26
},
{
"w": "the",
"s": 8.26,
"e": 8.4
},
{
"w": "chat",
"s": 8.4,
"e": 8.6
},
{
"w": "except",
"s": 8.6,
"e": 9.24
},
{
"w": "your",
"s": 9.24,
"e": 9.48
},
{
"w": "actual",
"s": 9.48,
"e": 9.78
},
{
"w": "job.",
"s": 9.78,
"e": 10.18
},
{
"w": "Think",
"s": 12.46,
"e": 12.94
},
{
"w": "about",
"s": 12.94,
"e": 13.1
},
{
"w": "it.",
"s": 13.1,
"e": 13.34
},
{
"w": "It",
"s": 13.58,
"e": 13.9
},
{
"w": "took",
"s": 13.9,
"e": 14.06
},
{
"w": "us",
"s": 14.06,
"e": 14.22
},
{
"w": "180",
"s": 14.22,
"e": 14.7
},
{
"w": "years",
"s": 14.7,
"e": 15.04
},
{
"w": "to",
"s": 15.04,
"e": 15.36
},
{
"w": "get",
"s": 15.36,
"e": 15.82
},
{
"w": "really",
"s": 15.82,
"e": 16.14
},
{
"w": "good",
"s": 16.14,
"e": 16.3
},
{
"w": "at",
"s": 16.3,
"e": 16.46
},
{
"w": "chatting.",
"s": 16.46,
"e": 16.68
},
{
"w": "It's",
"s": 17.44,
"e": 17.92
},
{
"w": "literally",
"s": 17.92,
"e": 18.36
},
{
"w": "how",
"s": 18.36,
"e": 18.58
},
{
"w": "we",
"s": 18.58,
"e": 18.72
},
{
"w": "do",
"s": 18.72,
"e": 18.8
},
{
"w": "everything",
"s": 18.8,
"e": 19.14
},
{
"w": "and",
"s": 19.14,
"e": 20.06
},
{
"w": "the",
"s": 20.06,
"e": 20.2
},
{
"w": "minute",
"s": 20.2,
"e": 20.34
},
{
"w": "it",
"s": 20.34,
"e": 20.48
},
{
"w": "comes",
"s": 20.48,
"e": 20.64
},
{
"w": "down",
"s": 20.64,
"e": 20.84
},
{
"w": "to",
"s": 20.84,
"e": 20.96
},
{
"w": "work,",
"s": 20.96,
"e": 21.26
},
{
"w": "we",
"s": 21.44,
"e": 22.0
},
{
"w": "have",
"s": 22.0,
"e": 22.26
},
{
"w": "to",
"s": 22.26,
"e": 22.34
},
{
"w": "leave.",
"s": 22.34,
"e": 22.54
},
{
"w": "And",
"s": 22.98,
"e": 23.4
},
{
"w": "the",
"s": 23.4,
"e": 23.48
},
{
"w": "work,",
"s": 23.48,
"e": 23.78
},
{
"w": "it",
"s": 23.88,
"e": 24.24
},
{
"w": "always",
"s": 24.24,
"e": 24.66
},
{
"w": "ends",
"s": 24.66,
"e": 24.94
},
{
"w": "up",
"s": 24.94,
"e": 25.1
},
{
"w": "in",
"s": 25.1,
"e": 25.2
},
{
"w": "the",
"s": 25.2,
"e": 25.26
},
{
"w": "chat.",
"s": 25.26,
"e": 25.52
},
{
"w": "It",
"s": 25.88,
"e": 26.36
},
{
"w": "just",
"s": 26.36,
"e": 26.74
},
{
"w": "never",
"s": 26.74,
"e": 27.08
},
{
"w": "starts",
"s": 27.08,
"e": 27.44
},
{
"w": "there.",
"s": 27.44,
"e": 27.62
},
{
"w": "And",
"s": 27.86,
"e": 28.24
},
{
"w": "yes,",
"s": 28.24,
"e": 28.44
},
{
"w": "AI",
"s": 28.94,
"e": 29.1
},
{
"w": "in",
"s": 29.1,
"e": 29.24
},
{
"w": "WhatsApp",
"s": 29.24,
"e": 29.48
},
{
"w": "isn't",
"s": 29.48,
"e": 29.74
},
{
"w": "new,",
"s": 29.74,
"e": 29.88
},
{
"w": "but",
"s": 30.42,
"e": 30.74
},
{
"w": "most",
"s": 30.74,
"e": 30.96
},
{
"w": "of",
"s": 30.96,
"e": 31.1
},
{
"w": "it,",
"s": 31.1,
"e": 31.26
},
{
"w": "it's",
"s": 31.36,
"e": 31.76
},
{
"w": "just",
"s": 31.76,
"e": 31.9
},
{
"w": "replies.",
"s": 31.9,
"e": 32.28
},
{
"w": "The",
"s": 33.02,
"e": 33.5
},
{
"w": "minute",
"s": 33.5,
"e": 33.68
},
{
"w": "you",
"s": 33.68,
"e": 33.86
},
{
"w": "ask",
"s": 33.86,
"e": 34.06
},
{
"w": "for",
"s": 34.06,
"e": 34.18
},
{
"w": "a",
"s": 34.18,
"e": 34.28
},
{
"w": "slide,",
"s": 34.28,
"e": 34.52
},
{
"w": "you'll",
"s": 34.78,
"e": 35.3
},
{
"w": "get",
"s": 35.3,
"e": 35.64
},
{
"w": "an",
"s": 35.64,
"e": 35.84
},
{
"w": "explanation",
"s": 35.84,
"e": 36.22
},
{
"w": "how",
"s": 36.22,
"e": 36.46
},
{
"w": "to",
"s": 36.46,
"e": 36.6
},
{
"w": "make",
"s": 36.6,
"e": 36.78
},
{
"w": "one",
"s": 36.78,
"e": 36.92
},
{
"w": "yourself.",
"s": 36.92,
"e": 37.22
},
{
"w": "So",
"s": 37.74,
"e": 38.22
},
{
"w": "we",
"s": 38.22,
"e": 38.36
},
{
"w": "built",
"s": 38.36,
"e": 38.54
},
{
"w": "Chatly",
"s": 38.54,
"e": 38.98
},
{
"w": "to",
"s": 38.98,
"e": 39.48
},
{
"w": "just",
"s": 39.48,
"e": 39.66
},
{
"w": "do",
"s": 39.66,
"e": 39.88
},
{
"w": "it.",
"s": 39.88,
"e": 40.06
},
{
"w": "It's",
"s": 40.36,
"e": 40.84
},
{
"w": "now",
"s": 40.84,
"e": 40.98
},
{
"w": "on",
"s": 40.98,
"e": 41.12
},
{
"w": "WhatsApp",
"s": 41.12,
"e": 41.4
},
{
"w": "and",
"s": 41.4,
"e": 41.72
},
{
"w": "Discord.",
"s": 41.72,
"e": 42.04
},
{
"w": "You",
"s": 42.36,
"e": 42.76
},
{
"w": "text",
"s": 42.76,
"e": 43.06
},
{
"w": "it,",
"s": 43.06,
"e": 43.22
},
{
"w": "the",
"s": 43.36,
"e": 43.46
},
{
"w": "finished",
"s": 43.46,
"e": 43.76
},
{
"w": "work",
"s": 43.76,
"e": 44.06
},
{
"w": "comes",
"s": 44.06,
"e": 44.4
},
{
"w": "back",
"s": 44.4,
"e": 44.62
},
{
"w": "in",
"s": 44.62,
"e": 44.76
},
{
"w": "the",
"s": 44.76,
"e": 44.84
},
{
"w": "same",
"s": 44.84,
"e": 44.98
},
{
"w": "chat.",
"s": 44.98,
"e": 45.26
},
{
"w": "Slides,",
"s": 45.56,
"e": 46.04
},
{
"w": "ads,",
"s": 46.32,
"e": 46.74
},
{
"w": "basically",
"s": 46.94,
"e": 47.42
},
{
"w": "your",
"s": 47.42,
"e": 47.58
},
{
"w": "inbox",
"s": 47.58,
"e": 47.94
},
{
"w": "summarized.",
"s": 47.94,
"e": 48.72
},
{
"w": "And",
"s": 48.9,
"e": 49.26
},
{
"w": "if",
"s": 49.26,
"e": 49.64
},
{
"w": "you",
"s": 49.64,
"e": 49.74
},
{
"w": "don't",
"s": 49.74,
"e": 49.96
},
{
"w": "feel",
"s": 49.96,
"e": 50.1
},
{
"w": "like",
"s": 50.1,
"e": 50.28
},
{
"w": "typing,",
"s": 50.28,
"e": 50.6
},
{
"w": "just",
"s": 50.96,
"e": 51.68
},
{
"w": "send",
"s": 51.68,
"e": 51.86
},
{
"w": "a",
"s": 51.86,
"e": 51.94
},
{
"w": "voice",
"s": 51.94,
"e": 52.12
},
{
"w": "note.",
"s": 52.12,
"e": 52.32
},
{
"w": "And",
"s": 53.0,
"e": 53.08
},
{
"w": "it",
"s": 53.08,
"e": 53.78
},
{
"w": "all",
"s": 53.78,
"e": 54.08
},
{
"w": "syncs",
"s": 54.08,
"e": 54.36
},
{
"w": "to",
"s": 54.36,
"e": 54.48
},
{
"w": "the",
"s": 54.48,
"e": 54.56
},
{
"w": "web",
"s": 54.56,
"e": 54.72
},
{
"w": "app,",
"s": 54.72,
"e": 54.88
},
{
"w": "so",
"s": 55.06,
"e": 55.36
},
{
"w": "nothing",
"s": 55.36,
"e": 55.82
},
{
"w": "gets",
"s": 55.82,
"e": 56.18
},
{
"w": "lost.",
"s": 56.18,
"e": 56.54
},
{
"w": "It's",
"s": 57.08,
"e": 57.56
},
{
"w": "live",
"s": 57.56,
"e": 57.82
},
{
"w": "now.",
"s": 57.82,
"e": 58.24
},
{
"w": "Go",
"s": 58.54,
"e": 58.78
},
{
"w": "to",
"s": 58.78,
"e": 58.9
},
{
"w": "settings,",
"s": 58.9,
"e": 59.34
},
{
"w": "chat",
"s": 59.54,
"e": 59.78
},
{
"w": "apps,",
"s": 59.78,
"e": 60.02
},
{
"w": "and",
"s": 60.26,
"e": 60.28
},
{
"w": "connect",
"s": 60.28,
"e": 60.52
},
{
"w": "your",
"s": 60.52,
"e": 60.68
},
{
"w": "number.",
"s": 60.68,
"e": 60.92
},
{
"w": "WhatsApp",
"s": 61.16,
"e": 61.58
},
{
"w": "and",
"s": 61.58,
"e": 61.9
},
{
"w": "Discord",
"s": 61.9,
"e": 62.24
},
{
"w": "now.",
"s": 62.24,
"e": 62.52
},
{
"w": "And",
"s": 63.34,
"e": 63.82
},
{
"w": "yeah,",
"s": 63.82,
"e": 63.98
},
{
"w": "a",
"s": 64.12,
"e": 64.14
},
{
"w": "lot",
"s": 64.14,
"e": 64.26
},
{
"w": "more",
"s": 64.26,
"e": 64.4
},
{
"w": "coming",
"s": 64.4,
"e": 64.58
},
{
"w": "soon.",
"s": 64.58,
"e": 64.82
}
]
```

## Appendix L: MG word-timing shim (`mg/gen/words.js`)

```js
window.WORDS=[{"i": 0, "w": "We", "t": 0.0, "e": 0.42}, {"i": 1, "w": "plan", "t": 0.42, "e": 0.66}, {"i": 2, "w": "trips", "t": 0.66, "e": 0.96}, {"i": 3, "w": "in", "t": 0.96, "e": 1.12}, {"i": 4, "w": "the", "t": 1.12, "e": 1.14}, {"i": 5, "w": "chat,", "t": 1.14, "e": 1.36}, {"i": 6, "w": "we", "t": 1.58, "e": 1.9}, {"i": 7, "w": "fight", "t": 1.9, "e": 2.24}, {"i": 8, "w": "in", "t": 2.24, "e": 2.38}, {"i": 9, "w": "the", "t": 2.38, "e": 2.44}, {"i": 10, "w": "chat", "t": 2.44, "e": 2.72}, {"i": 11, "w": "and", "t": 2.72, "e": 3.12}, {"i": 12, "w": "we", "t": 3.12, "e": 5.06}, {"i": 13, "w": "even", "t": 5.06, "e": 5.26}, {"i": 14, "w": "break", "t": 5.26, "e": 5.52}, {"i": 15, "w": "up", "t": 5.52, "e": 5.74}, {"i": 16, "w": "in", "t": 5.74, "e": 5.88}, {"i": 17, "w": "the", "t": 5.88, "e": 5.94}, {"i": 18, "w": "chat.", "t": 5.94, "e": 6.18}, {"i": 19, "w": "Your", "t": 7.04, "e": 7.14}, {"i": 20, "w": "entire", "t": 7.14, "e": 7.44}, {"i": 21, "w": "life", "t": 7.44, "e": 7.82}, {"i": 22, "w": "happens", "t": 7.82, "e": 8.04}, {"i": 23, "w": "around", "t": 8.04, "e": 8.26}, {"i": 24, "w": "the", "t": 8.26, "e": 8.4}, {"i": 25, "w": "chat", "t": 8.4, "e": 8.6}, {"i": 26, "w": "except", "t": 8.6, "e": 9.24}, {"i": 27, "w": "your", "t": 9.24, "e": 9.48}, {"i": 28, "w": "actual", "t": 9.48, "e": 9.78}, {"i": 29, "w": "job.", "t": 9.78, "e": 10.18}, {"i": 30, "w": "Think", "t": 12.46, "e": 12.94}, {"i": 31, "w": "about", "t": 12.94, "e": 13.1}, {"i": 32, "w": "it.", "t": 13.1, "e": 13.34}, {"i": 33, "w": "It", "t": 13.58, "e": 13.9}, {"i": 34, "w": "took", "t": 13.9, "e": 14.06}, {"i": 35, "w": "us", "t": 14.06, "e": 14.22}, {"i": 36, "w": "180", "t": 14.22, "e": 14.7}, {"i": 37, "w": "years", "t": 14.7, "e": 15.04}, {"i": 38, "w": "to", "t": 15.04, "e": 15.36}, {"i": 39, "w": "get", "t": 15.36, "e": 15.82}, {"i": 40, "w": "really", "t": 15.82, "e": 16.14}, {"i": 41, "w": "good", "t": 16.14, "e": 16.3}, {"i": 42, "w": "at", "t": 16.3, "e": 16.46}, {"i": 43, "w": "chatting.", "t": 16.46, "e": 16.68}, {"i": 44, "w": "It's", "t": 17.44, "e": 17.92}, {"i": 45, "w": "literally", "t": 17.92, "e": 18.36}, {"i": 46, "w": "how", "t": 18.36, "e": 18.58}, {"i": 47, "w": "we", "t": 18.58, "e": 18.72}, {"i": 48, "w": "do", "t": 18.72, "e": 18.8}, {"i": 49, "w": "everything", "t": 18.8, "e": 19.14}, {"i": 50, "w": "and", "t": 19.14, "e": 20.06}, {"i": 51, "w": "the", "t": 20.06, "e": 20.2}, {"i": 52, "w": "minute", "t": 20.2, "e": 20.34}, {"i": 53, "w": "it", "t": 20.34, "e": 20.48}, {"i": 54, "w": "comes", "t": 20.48, "e": 20.64}, {"i": 55, "w": "down", "t": 20.64, "e": 20.84}, {"i": 56, "w": "to", "t": 20.84, "e": 20.96}, {"i": 57, "w": "work,", "t": 20.96, "e": 21.26}, {"i": 58, "w": "we", "t": 21.44, "e": 22.0}, {"i": 59, "w": "have", "t": 22.0, "e": 22.26}, {"i": 60, "w": "to", "t": 22.26, "e": 22.34}, {"i": 61, "w": "leave.", "t": 22.34, "e": 22.54}, {"i": 62, "w": "And", "t": 22.98, "e": 23.4}, {"i": 63, "w": "the", "t": 23.4, "e": 23.48}, {"i": 64, "w": "work,", "t": 23.48, "e": 23.78}, {"i": 65, "w": "it", "t": 23.88, "e": 24.24}, {"i": 66, "w": "always", "t": 24.24, "e": 24.66}, {"i": 67, "w": "ends", "t": 24.66, "e": 24.94}, {"i": 68, "w": "up", "t": 24.94, "e": 25.1}, {"i": 69, "w": "in", "t": 25.1, "e": 25.2}, {"i": 70, "w": "the", "t": 25.2, "e": 25.26}, {"i": 71, "w": "chat.", "t": 25.26, "e": 25.52}, {"i": 72, "w": "It", "t": 25.88, "e": 26.36}, {"i": 73, "w": "just", "t": 26.36, "e": 26.74}, {"i": 74, "w": "never", "t": 26.74, "e": 27.08}, {"i": 75, "w": "starts", "t": 27.08, "e": 27.44}, {"i": 76, "w": "there.", "t": 27.44, "e": 27.62}, {"i": 77, "w": "And", "t": 27.86, "e": 28.24}, {"i": 78, "w": "yes,", "t": 28.24, "e": 28.44}, {"i": 79, "w": "AI", "t": 28.94, "e": 29.1}, {"i": 80, "w": "in", "t": 29.1, "e": 29.24}, {"i": 81, "w": "WhatsApp", "t": 29.24, "e": 29.48}, {"i": 82, "w": "isn't", "t": 29.48, "e": 29.74}, {"i": 83, "w": "new,", "t": 29.74, "e": 29.88}, {"i": 84, "w": "but", "t": 30.42, "e": 30.74}, {"i": 85, "w": "most", "t": 30.74, "e": 30.96}, {"i": 86, "w": "of", "t": 30.96, "e": 31.1}, {"i": 87, "w": "it,", "t": 31.1, "e": 31.26}, {"i": 88, "w": "it's", "t": 31.36, "e": 31.76}, {"i": 89, "w": "just", "t": 31.76, "e": 31.9}, {"i": 90, "w": "replies.", "t": 31.9, "e": 32.28}, {"i": 91, "w": "The", "t": 33.02, "e": 33.5}, {"i": 92, "w": "minute", "t": 33.5, "e": 33.68}, {"i": 93, "w": "you", "t": 33.68, "e": 33.86}, {"i": 94, "w": "ask", "t": 33.86, "e": 34.06}, {"i": 95, "w": "for", "t": 34.06, "e": 34.18}, {"i": 96, "w": "a", "t": 34.18, "e": 34.28}, {"i": 97, "w": "slide,", "t": 34.28, "e": 34.52}, {"i": 98, "w": "you'll", "t": 34.78, "e": 35.3}, {"i": 99, "w": "get", "t": 35.3, "e": 35.64}, {"i": 100, "w": "an", "t": 35.64, "e": 35.84}, {"i": 101, "w": "explanation", "t": 35.84, "e": 36.22}, {"i": 102, "w": "how", "t": 36.22, "e": 36.46}, {"i": 103, "w": "to", "t": 36.46, "e": 36.6}, {"i": 104, "w": "make", "t": 36.6, "e": 36.78}, {"i": 105, "w": "one", "t": 36.78, "e": 36.92}, {"i": 106, "w": "yourself.", "t": 36.92, "e": 37.22}, {"i": 107, "w": "So", "t": 37.74, "e": 38.22}, {"i": 108, "w": "we", "t": 38.22, "e": 38.36}, {"i": 109, "w": "built", "t": 38.36, "e": 38.54}, {"i": 110, "w": "Chatly", "t": 38.54, "e": 38.98}, {"i": 111, "w": "to", "t": 38.98, "e": 39.48}, {"i": 112, "w": "just", "t": 39.48, "e": 39.66}, {"i": 113, "w": "do", "t": 39.66, "e": 39.88}, {"i": 114, "w": "it.", "t": 39.88, "e": 40.06}, {"i": 115, "w": "It's", "t": 40.36, "e": 40.84}, {"i": 116, "w": "now", "t": 40.84, "e": 40.98}, {"i": 117, "w": "on", "t": 40.98, "e": 41.12}, {"i": 118, "w": "WhatsApp", "t": 41.12, "e": 41.4}, {"i": 119, "w": "and", "t": 41.4, "e": 41.72}, {"i": 120, "w": "Discord.", "t": 41.72, "e": 42.04}, {"i": 121, "w": "You", "t": 42.36, "e": 42.76}, {"i": 122, "w": "text", "t": 42.76, "e": 43.06}, {"i": 123, "w": "it,", "t": 43.06, "e": 43.22}, {"i": 124, "w": "the", "t": 43.36, "e": 43.46}, {"i": 125, "w": "finished", "t": 43.46, "e": 43.76}, {"i": 126, "w": "work", "t": 43.76, "e": 44.06}, {"i": 127, "w": "comes", "t": 44.06, "e": 44.4}, {"i": 128, "w": "back", "t": 44.4, "e": 44.62}, {"i": 129, "w": "in", "t": 44.62, "e": 44.76}, {"i": 130, "w": "the", "t": 44.76, "e": 44.84}, {"i": 131, "w": "same", "t": 44.84, "e": 44.98}, {"i": 132, "w": "chat.", "t": 44.98, "e": 45.26}, {"i": 133, "w": "Slides,", "t": 45.56, "e": 46.04}, {"i": 134, "w": "ads,", "t": 46.32, "e": 46.74}, {"i": 135, "w": "basically", "t": 46.94, "e": 47.42}, {"i": 136, "w": "your", "t": 47.42, "e": 47.58}, {"i": 137, "w": "inbox", "t": 47.58, "e": 47.94}, {"i": 138, "w": "summarized.", "t": 47.94, "e": 48.72}, {"i": 139, "w": "And", "t": 48.9, "e": 49.26}, {"i": 140, "w": "if", "t": 49.26, "e": 49.64}, {"i": 141, "w": "you", "t": 49.64, "e": 49.74}, {"i": 142, "w": "don't", "t": 49.74, "e": 49.96}, {"i": 143, "w": "feel", "t": 49.96, "e": 50.1}, {"i": 144, "w": "like", "t": 50.1, "e": 50.28}, {"i": 145, "w": "typing,", "t": 50.28, "e": 50.6}, {"i": 146, "w": "just", "t": 50.96, "e": 51.68}, {"i": 147, "w": "send", "t": 51.68, "e": 51.86}, {"i": 148, "w": "a", "t": 51.86, "e": 51.94}, {"i": 149, "w": "voice", "t": 51.94, "e": 52.12}, {"i": 150, "w": "note.", "t": 52.12, "e": 52.32}, {"i": 151, "w": "And", "t": 53.0, "e": 53.08}, {"i": 152, "w": "it", "t": 53.08, "e": 53.78}, {"i": 153, "w": "all", "t": 53.78, "e": 54.08}, {"i": 154, "w": "syncs", "t": 54.08, "e": 54.36}, {"i": 155, "w": "to", "t": 54.36, "e": 54.48}, {"i": 156, "w": "the", "t": 54.48, "e": 54.56}, {"i": 157, "w": "web", "t": 54.56, "e": 54.72}, {"i": 158, "w": "app,", "t": 54.72, "e": 54.88}, {"i": 159, "w": "so", "t": 55.06, "e": 55.36}, {"i": 160, "w": "nothing", "t": 55.36, "e": 55.82}, {"i": 161, "w": "gets", "t": 55.82, "e": 56.18}, {"i": 162, "w": "lost.", "t": 56.18, "e": 56.54}, {"i": 163, "w": "It's", "t": 57.08, "e": 57.56}, {"i": 164, "w": "live", "t": 57.56, "e": 57.82}, {"i": 165, "w": "now.", "t": 57.82, "e": 58.24}, {"i": 166, "w": "Go", "t": 58.54, "e": 58.78}, {"i": 167, "w": "to", "t": 58.78, "e": 58.9}, {"i": 168, "w": "settings,", "t": 58.9, "e": 59.34}, {"i": 169, "w": "chat", "t": 59.54, "e": 59.78}, {"i": 170, "w": "apps,", "t": 59.78, "e": 60.02}, {"i": 171, "w": "and", "t": 60.26, "e": 60.28}, {"i": 172, "w": "connect", "t": 60.28, "e": 60.52}, {"i": 173, "w": "your", "t": 60.52, "e": 60.68}, {"i": 174, "w": "number.", "t": 60.68, "e": 60.92}, {"i": 175, "w": "WhatsApp", "t": 61.16, "e": 61.58}, {"i": 176, "w": "and", "t": 61.58, "e": 61.9}, {"i": 177, "w": "Discord", "t": 61.9, "e": 62.24}, {"i": 178, "w": "now.", "t": 62.24, "e": 62.52}, {"i": 179, "w": "And", "t": 63.34, "e": 63.82}, {"i": 180, "w": "yeah,", "t": 63.82, "e": 63.98}, {"i": 181, "w": "a", "t": 64.12, "e": 64.14}, {"i": 182, "w": "lot", "t": 64.14, "e": 64.26}, {"i": 183, "w": "more", "t": 64.26, "e": 64.4}, {"i": 184, "w": "coming", "t": 64.4, "e": 64.58}, {"i": 185, "w": "soon.", "t": 64.58, "e": 64.82}];
```

## Appendix M: MG timing config (`mg/gen/timing.json`)

```json
{"end": 65.0}
```
