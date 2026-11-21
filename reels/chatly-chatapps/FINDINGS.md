# Chatly in WhatsApp & Discord: findings from the recorded A-roll

Source: `src/aroll-1120.mov` (from ~/Downloads/1120(1).mov, 2026-11-20)
Reference: `src/animatic-laptop.mp4` (the Claude artifact animatic)

## Specs
- 1920×1080 16:9, 30 fps, HEVC, BT.709 SDR, 67.8 s (2032 frames)
- Audio: AAC, lav mic, very hot at **−10.5 LUFS integrated**. Bring it down to about −14 for the mix. Room tone runs under everything, with no true silence.
- Speech runs 0.00–64.82 s; the walk-off fills 64.8–67.8 s.
- `src/aroll-1120.wav` (78 s) is the separate recorder file. It has an extra hook take at the start and is not synced yet.

## Shot list (cuts found by scene detection plus a frame check)
| # | In–out (s) | Setup | Line |
|---|---|---|---|
| 1 | 0.00–6.73 | Wide on the red bean bag, holding the phone; looks at it on "break up" | We plan trips… break up in the chat. |
| 2 | 6.73–~11.0 | Close-up, reclined on the bean bag | Your entire life… except your actual job. |
| 3 | ~11.0–11.93 | Lunges out of frame in a motion blur (the "throws phone" beat) | (no line) |
| 4 | 11.93–23.07 | Wide at the desk | Think about it… we have to leave. |
| 5 | 23.07–25.70 | Wide at the desk, picks up a magnifier | And the work, it always ends up in the chat. |
| 6 | 25.70–28.03 | Magnifier pushed into the lens (zoom gag), chair empty behind | It just never starts there. |
| 7 | 28.03–37.67 | Wide at the desk, hand gestures | And yes, AI in WhatsApp isn't new… yourself. |
| 8 | 37.67–39.10 | Wide at the desk, hand cupped to mouth (stage whisper) | So we built Chatly to… |
| 9 | 39.10–40.17 | **Behind-the-scenes shot:** dark studio, softbox and lamp in frame, same whisper pose (the "[transition]" beat) | …just do it. |
| 10 | 40.17–49.00 | Wide at the desk, typing on the phone | It's now on WhatsApp… inbox summarized. |
| 11 | 49.00–50.70 | Leaning back in the chair, medium shot | And if you don't feel like typing, |
| 12 | 50.70–~51.10 | Whip pan or motion blur to the bean bag | (no line) |
| 13 | ~51.10–52.70 | Bean bag, phone at his ear, voice-note pose | just send a voice note. |
| 14 | 52.70–57.03 | Close at the desk, side angle, looking at the phone | And it all syncs to the web app… |
| 15 | 57.03–67.80 | Wide at the desk; gets up and walks off frame left at ~65.5 | It's live now… coming soon. (walks off) |

## Transcript (whisper large-v3-turbo, word-timed, hand-corrected)
Word timings: `src/words.json`. Captions: `src/captions.srt` (74 chunks of up to 3 words, split on punctuation and pauses).

> We plan trips in the chat, we fight in the chat and we even break up in the chat. Your entire life happens around the chat except your actual job. Think about it. It took us 180 years to get really good at chatting. It's literally how we do everything and the minute it comes down to work, we have to leave. And the work, it always ends up in the chat. It just never starts there. And yes, AI in WhatsApp isn't new, but most of it, it's just replies. The minute you ask for a slide, you'll get an explanation how to make one yourself. So we built Chatly to just do it. It's now on WhatsApp and Discord. You text it, the finished work comes back in the same chat. Slides, ads, basically your inbox summarized. And if you don't feel like typing, just send a voice note. And it all syncs to the web app, so nothing gets lost. It's live now. Go to settings, chat apps, and connect your number. WhatsApp and Discord now. And yeah, a lot more coming soon.

Corrections made by hand. These are mishearings or soft words; check them by ear:
- 29.5 s: "isn't new". Whisper heard "is in you".
- 38.2–39.0 s: "**built Chatly**". Whisper heard "will chat link", and the WAV pass dropped the words entirely. This is the weakest moment in the audio. Cover it with the big on-screen "Chatly" so it reads regardless.
- 58.9 s: "settings, chat apps". Turbo added a stray "links"; the medium model heard it clean.
- The words differ from the script in three places: "It took us 180 years" (script: "We've had"), "around the chat" and "now" (script: "today"). The captions follow what he says.

## Natural pauses (gaps over 0.4 s, useful for cuts or MG hits)
- 3.1–5.1 s: "and we… even break up". He stretches "we" while looking at the phone. This is the comedy beat.
- 10.2–12.5 s: after "actual job", during the lunge and the cut to the desk. The longest gap.
- 19.1–20.1, 22.5–23.0, 32.3–33.0, 37.2–37.7 (before "So we built"), 48.7–48.9, 52.3–53.0, 56.5–57.1, 62.5–63.3 s.

## How the voice maps to the artifact (first pass, for the MG plan)
Everything uses the speaker's own audio. "A" means keep the A-roll. "MG" means the artifact or motion graphics take over the frame (full screen, or as a large card with the A-roll behind it).

| Time (s) | Voice | Picture |
|---|---|---|
| 0.0–3.1 | plan trips / fight in the chat | A shot 1, with notification pop-ups (trip group, family group) |
| 3.1–6.2 | break up in the chat | A: the phone look. A "we need to talk." DM pings in. |
| 6.7–10.2 | your entire life… actual job | A close-up |
| 12.5–16.7 | Think about it. 180 years… | A, with a "180 years" kinetic MG hit |
| 17.4–22.5 | how we do everything… we have to leave | MG: WhatsApp "can you make me a slide? 🙏", then "leave" |
| 23.0–25.5 | the work always ends up in the chat | **MG problem montage:** tabs, download, final_FINAL_v3.pptx, drag into WhatsApp, send |
| 25.9–27.6 | it just never starts there | A shot 6, the magnifier gag (keep it) |
| 28.2–37.2 | AI in WhatsApp isn't new… make one yourself | MG: wall-of-text bot reply scrolling (from about 33 s, "ask for a slide") |
| 37.7–40.1 | So we built Chatly to just do it | A shots 8 and 9, the whisper and the behind-the-scenes cut, with a big "Chatly" title |
| 40.4–48.7 | now on WhatsApp and Discord… inbox summarized | **MG product:** deck arrives, then the sneaker ad on Discord, then the inbox summary |
| 48.9–52.3 | don't feel like typing, send a voice note | A shots 11–13, then MG voice-note send |
| 53.0–56.5 | syncs to the web app | MG: web app Recents |
| 57.1–62.5 | It's live now. Settings → Chat apps → connect | A, with the step pills as an MG overlay |
| 63.3–67.8 | a lot more coming soon (walks off) | A walk-off, then the Chatly outro |

The animatic only has two text lines the take doesn't ("Why is the one thing we can't do in a chat… our actual work?" and "…and then we come right back to the chat. To send it."). Drop them; the voice is what we have.
