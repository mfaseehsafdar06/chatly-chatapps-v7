# Audio reference: Wispr Flow + HeyClicky → Chatly chat-apps film

Researched 2026-11-20. Reels downloaded with `yt-dlp` (no cookies) to `reference/ig/<id>/`
(`<id>.mp4`, `audio.wav`, `words/audio.json` = whisper small.en word timings,
`stems/htdemucs/audio/{vocals,no_vocals}.wav` = demucs two-stem split).
HeyClicky's IG is **@_heyclicky** (founder Farza = @farza954); Wispr Flow is **@wisprflow**.

## How it was measured
- **Voice** = gated integrated LUFS of the demucs *vocals* stem over word spans.
- **Music under voice** = median momentary (400 ms) LUFS of the *no_vocals* stem during words
  (the median ignores SFX spikes). **Gap** = voice − music-under-voice.
- **Music in gaps** = same, ≥0.35 s away from any word. **Gap swell** = music-in-gaps − music-under-voice
  (positive = music comes UP between lines; negative = music stops).
- **BPM / centroid** from the no_vocals stem (spectral-flux autocorrelation, 68–185 BPM window).
- **SFX/min** = 20 ms transients ≥9 dB over a 1.5 s running median in the no_vocals stem, minus beat-grid hits
  and kick-level hits; spot-checked with 8 fps frame strips. Treat ±30 %. "SFX level" = transient peak vs the
  voice's 95th-percentile 20 ms peak.
- Tools: `tools/refaudio.py`, `tools/post.py` (re-runnable on our own mix), raw numbers in `ref-measurements.json`.

## Per-reel table

| Reel | Account / format | Dur | Voice LUFS | Music under voice | **Gap dB** | Gap swell | BPM | Centroid | SFX/min | SFX level vs voice | What the SFX are |
|---|---|---|---|---|---|---|---|---|---|---|---|
| DbrJKKvSwos | Wispr · Notetaker launch, founder demo 16:9 | 48 | −14.4 | −26.3 | **11.9** | music stops at end | 115 | 95 Hz (kick/bass bed) | ~4 | −22 | almost none, music carries it |
| Df4xBoZpc4K | Wispr · Notetaker iPhone, actor comedy spot 9:16 | 79 | −14.3 | −28.4 | **14.1** | +1 (flat) | 170/85 | 100 Hz | ~15* | −14 | soft UI chimes on app cards, comic hits |
| DfIGC4EJPA0 | Wispr · "100B words" milestone 4:3 | 43 | −14.6 | −25.7 | **11.1** | +5 | 89 | 585 Hz | ~18 | −8 | pops on numbers, music cuts out 36–40 s |
| DePUykXpNZS | Wispr · "evolution of the keyboard" 4:3 | 58 | −15.4 | −22.6 | **7.2** | +2 | 125 | 298 Hz | ~17 | −12 | typewriter/keyboard foley per era |
| DeKIzlcJnzt | Wispr · grandpa story 9:16 | 44 | −16.5 | −28.9 | **12.4** | **+16.5** | 100 | 381 Hz | ~11 | −6 | few; music swells to −11 in the wordless middle |
| DdUEnzrpCpn | Wispr · Notetaker Windows, founder at desk + full-screen UI MG (closest to our format) | 87 | −15.3 | −20.5 | **5.2** | −3 | 100 | 228 Hz | ~14 | −14 | soft tonal UI chimes on cards, near-silent clicks |
| Df0uAMwJwuW | HeyClicky · "I can drive your computer" screen demo 9:16 | 42 | −14.8 | −29.9 | **15.1** | **+15.9** | 141 | 555 Hz | ~25 | −8 … +2 | key presses, hard hits on cuts |
| DfqdQY6xnVc | HeyClicky · "$1M ARR" team talking head | 60 | −14.3 | −25.6 | **11.3** | −5 | 108 | 165 Hz | ~2 | −21 | none, just a bed |
| Dfbd1NuA7nT | HeyClicky · "I come in 4 colors" | 56 | −16.1 | −19.6 | **3.5** | +3 | 141 | 153 Hz | ~11 | ≈0 | loud pops/hits on colour reveals |
| DfTNd0vgVYY | HeyClicky · "I am shipping" founders' weekly update 16:9 | 59 | −15.7 | −30.8 | **15.1** | **+16.5** | 134 | 525 Hz | ~25 | −10 | pops on text/graphics, music loud in intro+outro only |
| DfAs5BoTKNP | HeyClicky · "I can help you learn biology" | 35 | −15.2 | −27.3 | **12.1** | 0 | 131 | 459 Hz | ~20 | −12 | small tonal pops on UI steps |
| DfGE9VhyUq- | Farza (HeyClicky founder) · real-time graphics demo | 147 | −14.6 | −26.2 | **11.6** | music stops at end | 141 | 119 Hz | ~5 | −2 (few, loud) | a handful of hits on reveals |
| De40O8tPq-6 | Farza · "HeyClicky on Windows", founder keyed over full-screen gags 9:16 | 55 | −14.9 | −23.0 | **8.1** | −2 | 100 | 96 Hz | ~23 | −8 | **meme/nostalgia sounds tied to the picture**: XP "welcome", Bliss wallpaper, BSOD, Clippy, error dings; chime on end card |
| DfCBYNQAnHC | HeyClicky · wordless 12 s | 13 | — | music only | — | — | 75 | — | — | — | (excluded) |
| **Our current mix** (`mix/audio_v3.wav`) | | 71.5 | −14.2 | **−46.3** | **32.1** | +13.7 | — | — | ~65 | | 77 cues, pop1 ×17, ticks ×19, ping ×7 |

\* Df4x is score-driven; many detected transients are music.
All refs are mastered to −14.1 … −14.5 LUFS integrated (IG normalisation).

**Takeaways**
- Music sits a median **11.6 dB under the voice** (range 3.5–15; Wispr median 11.5, HeyClicky 11.6). Our current mix
  has it **32 dB under**, so it reads as "no music". That explains the "slight music" request.
- They don't pump. Six of thirteen don't duck at all. The rest bring the music **up 15–16 dB in voice-free stretches**
  (intros, outros, a wordless beat), or **cut it to silence** for a joke or the end card.
- Beds are mid-tempo grooves: **89–125 BPM** for Wispr, **108–141** for HeyClicky. They're warm and
  bass/kick-led (centroid 95–585 Hz, never bright), loop-steady, with no vocals and no big builds. The only "drop"
  is on a launch reveal.
- SFX run at a median of **~15/min** (range 2–25). The levels: UI chimes and pops sit −10 to −14 dB under voice
  peaks, while hits on cuts in HeyClicky land at −2 to +2. The SFX with personality are **literal, on-screen
  objects**: keyboard foley, OS sounds, notification dings. Farza's Windows reel uses recognisable meme/nostalgia
  sounds as the jokes. Wispr uses almost no whooshes.

## Music brief
- **Feel:** warm indie-pop or lo-fi house groove, steady kick/bass bed, a bit of sunshine. Not cinematic,
  not trap, no vocals.
- **Tempo:** 90–125 BPM (HeyClicky goes to 140).
- **Level:** **−12 dB vs voice under speech**. The acceptable band is −9 to −15 (measured as above). Our voice
  is normalised to −16 LUFS in `audio.py`, so the bed should read about **−28 LUFS momentary** under speech.
- **Ducking:** light sidechain only, ≤3 dB (ratio ~2, high threshold). Don't use the current 5:1. Swell the bed
  **+4 to +6 dB** in voice-free moments of ≥0.8 s: the first 0.3 s, the 40.17 drop, and the walk-off before the
  outro. Hard-stop it for the two jokes (10.20 record scratch, 25.75 magnifier), then let the drop land on 40.17.
- **End:** fade it under the official outro (the outro carries its own sound) by ~66.5 s.

## Music picks (Part 2)
**A (recommended): messwave, "Lost in the Right Direction" (instrumental). Start offset 7.89 s.**
- File: `reels/music-lib/messwave-lost-in-the-right-direction-instrumental-version.mp3`
  (copy: `picks/music-A_messwave-lost-in-the-right-direction-instr_86bpm.mp3`).
- Why: it's an official clean instrumental (demucs vocal check: 0.5 s ≈ none). 86 BPM, centroid 307 Hz,
  low-end share 0.66 (warm, bass-led, same family as the Wispr beds), steady (1 s loudness s.d. 3–9 dB),
  and a clear pulse (0.67).
- Why that offset: the track's structure lines up with our edit.
  - Song 7.9–28 is the sparse intro (−16 dB). It sits under the hook.
  - Song 29–44 rises (−11 dB). That's timeline 21–36: montage, bot.
  - Song 45–47.7 is a breakdown dip. That's **timeline 37.1–39.8**, right under the whisper.
  - Song 47.76–47.80 has a built-in micro-silence. It lands at timeline 39.87, inside "…just do it."
  - The main section hit is at song **48.06**, which lands on **40.17**, the drop.
  - The next dip (song 74–76) falls under the outro.
- Level: this window measures −10.8 LUFS, so `volume ≈ −17 dB` with light sidechain gives about −12 dB vs voice.
- Caveat: 86 BPM is a touch under the ref range. If it feels slow, use B.
- Alternate offset in the same track: **81.74 s**. Song 104–121 is a quieter section (timeline 22–39), the silence
  at 121.61 is followed by a hit at 121.91 (→ 40.17), and the track runs to 165 s.

**B: Kicktracks, "Sunshine Dreamer" (vocal-removed). Start offset 19.16 s.**
- File: `/Volumes/Vyro-IT/Chatly-archive/reels/startup/v4/designer/audio/bed-instr.wav`
  (copy: `picks/music-B_kicktracks-sunshine-dreamer-instr_96bpm.wav`).
- Measured: 95.7 BPM, centroid 278 Hz, 121 s.
- Fit: song 42–58 is a quieter breakdown (−17 vs −10), which is timeline 22.8–38.8. The rise at song **59.33** lands
  on **40.17**.
- Level: −13.0 LUFS in this window, so `volume ≈ −15 dB`.
- Caveat: this is a demucs-stripped version of a vocal track (the original has 8 s of vocals). It shipped in
  Startup v4, but listen for vocal ghosts before committing.

Not picked:
- **Late Night Dreams:** used by another film.
- **Ziggy, "Walk the Walk" (current):** 143.6 BPM, at HeyClicky's top end. It's fine, but the real problem is its
  −32 dB level, not the track.
- **Ariel Dahan, "Obsidian Dreams":** 103 BPM, but dark and sub-heavy (centroid 111 Hz).
- **chatly-yt-\* generated beds:** already used in the YouTube films.

## SFX brief
- **~25–35 cues/min** for this film (MG-heavy, so above the 15/min ref median, but far under our current 65).
  No file more than 3–4 times, except tiny UI clicks.
- **Every sound is the object on screen:** phone buzz, a real notification ding, a paper card slapping down,
  a rubber stamp, typing, a record button, a toggle switch, a ka-ching for "Ad".
- **Whooshes only on camera moves (snap zooms, the lunge, MG entrances).** Use a different one each time, about 6
  in the whole film.
- **Levels:** UI pops/dings −10 to −14 dB under voice peaks. Hits on jokes or cuts can come up to −3 to 0.
- **Memes: max 3, only on the jokes.** Record scratch (10.20), crickets in the magnifier dead air (25.85), and a
  vine boom on the bot's wall of text (35.0, missing; see below).

## Cue sheet
Gains use the `audio.py` convention: dB applied to the file, with voice normalised to −16 LUFS. Every file is in
`picks/`. "+x s" = where the file's main transient sits, so start the file that much earlier.

| t (s) | file (`picks/…`) | gain | on screen |
|---|---|---|---|
| 0.00 | music A from 7.89 | −17 dB, 0.25 s fade-in | bed starts with his first word |
| 3.30 | phone-vibrate-on-table.mp3 | −12 | phone buzzes as he looks down |
| 3.40 | notif-ding-phone-bright.mp3 | −9 | "we need to talk." card pops |
| (3.75) | meme-crowd-gasp-ooh.mp3 (optional, trim 1.0 s) | −18 | sitcom "ooh" while he stretches "we…". Use only if you drop one of the 3 memes below |
| 6.50 | whoosh-zoom-mid.mp3 | −12 | zoom transition into the close-up (6.73) |
| 7.10 | pop-box.mp3 | −14 | app tile 1 |
| 7.45 | pop-bubbly-ui.mp3 | −14 | app tile 2 |
| 7.80 | pop-tiny-heart.mp3 | −12 | app tile 3 |
| 9.28 | card-slap-paper.mp3 (+0.2 s) | −11 | docs/sheets tiles slap down on "actual job" (9.48) |
| 10.20 | **meme-record-scratch-stop.mp3** | −6 | **MEME 1**: record stop + music hard-stops |
| 10.95 | whoosh-whip-fast.mp3 | −8 | he lunges out of frame |
| 11.55 | thud-soft-object.mp3 (optional) | −8 | the thrown phone lands off-screen |
| 11.93 | (music back in, no SFX) | | desk wide |
| 12.40 | whip-snap-zoom-a.mp3 | −12 | snap zoom "Think about it." |
| 14.70 / 15.36 / 15.82 / 16.46 | pop-glassy-select / pop-tiny-heart / pop-glassy-select / pop-tiny-heart | −19 / −20 / −18 / −17 | chat chips float in |
| 17.30 | swish-ui-soft.mp3 | −10 | full-screen WhatsApp MG enters |
| 17.6 / 18.2 / 18.8 | ui-click-crisp.mp3 | 0 / −1 / −2 (file peaks −14 dBFS) | unread badges pop |
| 20.48 | notif-ding-positive.mp3 | +6 (file peaks −25 dBFS) | "Boss: can you make me a slide? 🙏" jumps to the top |
| 20.90 | orch-hit-dramatic.mp3 (optional personality) | −14 | camera zooms onto the boss's message ("dun") |
| 22.20 | whoosh-heavy-rumble.mp3 | −9 | "we have to leave." phone slides out (keep the 22.34–25.75 music low-pass) |
| 22.85 | ticker-rapid-count.mp3, trim 1.0 s, fade 0.1 | −12 | tabs pile up 1→14 (one file instead of 13 ticks) |
| 23.95 | stamp-rubber-thunk.mp3 | −12 | final.pptx → final_final |
| 24.18 | stamp-rubber-thunk.mp3 | −9 | → final_FINAL |
| 24.42 | stamp-text-slam-heavy.mp3 | −6 | → final_FINAL_v3 (hardest) |
| 24.80 | paper-slide-desk.mp3 | −12 | file flies into WhatsApp |
| 25.26 | send-whoop.mp3 | −4 | sent |
| 25.75 | (music cut to dead air) | | magnifier gag |
| 25.85 | **meme-crickets-awkward.mp3**, 1.2 s, fade 0.4 | −16 | **MEME 2**: "It just never starts there." awkward silence |
| 26.93 | lens-thud-plastic-tap.mp3 (+0.15 s) | −4 | magnifier lands on the lens on "starts" (27.08) |
| 27.95 | (music back) | | desk 28.03 |
| 30.30 | whip-snap-zoom-b.mp3 | −12 | snap zoom on "replies" |
| 32.85 | swoosh-up-bright.mp3 | −14 | generic bot MG enters |
| 33.50 | typing-phone-fast.mp3, trim 0.7 s | −16 | user types the deck request |
| 34.30 | send-whoop.mp3 | −5 | sent |
| 34.78 | paper-rustle-newspaper.mp3, 1.6 s, fade 0.5 | −14 | the wall of text scrolls (a newspaper unfolding) |
| 35.00 | **VINE BOOM (missing, generate)** | −8 | **MEME 3**: you asked for a slide, you got a paragraph |
| 37.1–39.8 | (song A's breakdown dip lands here by itself) | | whisper "So we built Chatly…" |
| 38.54 | pop-glassy-select.mp3 | −10 | Chatly logo tile pops top-right |
| 38.69 | rev-cymbal-into-drop.mp3 (1.48 s, peaks at end) | −10 | logo flies to centre (39.10) and swells into the drop |
| 40.17 | ui-burst-sparkle.mp3 | −8 | **music drop** + "Now in" |
| 41.12 / 41.72 | punch-hit-whoosh.mp3 | −10 / −9 | WhatsApp tile, then Discord tile slam in |
| 42.35 | typing-keys-b.mp3, trim 0.55 s | −16 | "You text it" |
| 43.00 | send-whoop.mp3 | −5 | sent |
| 43.74 | chime-payment-two-tone.mp3 | −8 | finished deck arrives (reward chime) |
| 45.48 | glass-shimmer-flash.mp3 | −12 | result card → Slides |
| 46.32 | kaching-cash-register.mp3 | −12 | → Ad |
| 47.58 | ding-soft-low.mp3 | −6 | → "Your inbox, summarized" |
| 48.80 | whip-swish-tight.mp3 | −12 | voice-note MG enters |
| 49.20 / 50.20 | typing-keys-b.mp3 (0.6 s each) | −18 / −20 | typing, then deleting |
| 50.96 | rec-button-beep.mp3 | −6 | mic held, recording starts |
| 52.32 | pop-box.mp3 | −8 | voice note sent (different from the text "send") |
| 52.60 | whoosh-rising-bright.mp3 | −12 | Chatly web app MG |
| 54.08 / 54.26 / 54.44 / 54.62 | ui-click-crisp.mp3 | 0 / −1 / −1 / −2 | four synced chats slide into Recents |
| 55.36 | sparkle-glitter.mp3 | −14 | "so nothing gets lost" |
| 57.50 | swish-air-quick.mp3 | −10 | snap zoom "It's live now." |
| 58.55 | swish-ui-soft.mp3 | −12 | settings card slides in |
| 60.20 | toggle-switch-on.mp3, **use only 0–0.45 s** (the file has two clicks) | −6 | Connect clicked |
| 60.55 | done-chime.mp3 | −8 | connected |
| 63.90 / 64.05 / 64.20 | pop-bubbly-ui / pop-box / pop-glassy-select | −14 / −14 / −13 | "+ more coming soon" tiles |
| 65.4–66.5 | (music +4 dB swell, then fade under the outro) | | he walks off; official outro carries its own sound |

That's about 55 cues. A leaner pass drops the optional thud, orch hit, two of the chips, the badges and the
delete typing, for about 45.

Repeats: send ×3, pop-glassy ×4, stamp-rubber ×2, punch ×2, swish-ui ×2. Whooshes are 7 different files.

## Missing sounds (ask before generating)
1. **Vine boom** (meme), for 35.0. Needed. The library has no vine boom; `boom.mp3`/`sub-drop` are cinematic, not
   the meme.
2. **WhatsApp-style notification**: a short two-note pop for the "we need to talk" and boss messages. Nice to have;
   the generic dings stand in now.
3. **Discord-style blip** for the Discord tile at 41.72. Optional.
4. **Telegraph/morse clicks** under "180 years… chatting" (13.6–14.6). Optional wit, and the kind of on-screen
   nostalgia gag Farza's Windows reel uses.
5. Alternates for meme 3 if a vine boom is unwanted: **"bruh"** or **sad trombone**. The One Rule `trumpet.wav`
   and `offkey.wav` are code-synth sine tones (spectrogram-checked), so they're not usable.

## Files
- `picks/`: 2 music beds plus 44 SFX, copied from the archive drive and the local repo.
- `sfx-inventory.tsv`: all 498 unique (md5) SFX on the archive and local drives, with duration, peak, centroid,
  low/high energy share, flatness, hit count, and the generation prompt where one was found (215 files).
  `flatness <0.02` in One Rule episode folders = code-synth tone.
- `ref-measurements.json` and `tools/`: re-run `tools/refaudio.py` on a new mix to check the voice-vs-music gap.
