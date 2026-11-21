# Overlay reference: IG DbrJKKvSwos (Wispr Flow "Notetaker" launch)

Source: `reference/ig/DbrJKKvSwos/DbrJKKvSwos.mp4` (1916×1078, 24 fps, 48.25 s, fetched with yt-dlp 2026-11-20). Frame grabs are in `ref/`. Times are in the reference's seconds.

## What the post actually contains
**There are no glossy 3D app icons in this post.** Checked at 2 fps over the whole video and at 8 fps around every overlay moment. Its "small artifacts" are a different set of things:

1. **Brand lockup with floating chat chips** (0.6–6.2 s, `ref/full_2.6.jpg`, `ref/seg_0.5.jpg`).
   - The logo wipes in from the right edge. It slides left behind a mask over about 1 s, ease-out with no overshoot, and settles right of the head at about 30 % of frame width.
   - About 8 tiny dark chat chips sit around it: dark translucent rounded rects with a 1 px light edge. Each has a ~10 px grey sender name above it ("Tanay", "Sahaj") and ~13 px white text ("Just got off with Menlo Ventures.").
   - The chips fade in one after another, a few frames apart. They have a slight rise and blur-in, and drift slowly.
   - A small dark pill with a waveform and a stop square has a glowing green outline.
   - They are all on the empty side of the frame, never on the face or the hands.
2. **One large light window card** (25.5–31.0 s, `ref/full_27.3.jpg`, `ref/seg_24.5.jpg`). It is a macOS-style doc with traffic lights, a serif title and Share, and fills the right ~45 % of the frame.
   - Entry: it flies in from the bottom-right corner, starting at about 55 % scale and blurred, and decelerates into place over about 0.6–0.75 s (ease-out quint, no bounce).
   - Hold: about 5 s. The content inside it keeps building (summary lines appear).
3. **Full-screen MG cutaways** on a dark green or cream ground: card grids, a meeting-tile grid and the "What did I miss?" pill. These are B-roll that replaces the A-roll. They are not overlays.

## Grammar that carries over
- **Enter** about 0.2–0.5 s after a cut, never on the cut frame. Chips fade in, rise slightly and lose their blur. The logo wipes in. Cards fly in from a corner and deblur.
- **Exit: hard, on the next cut.** The overlay leaves with the shot (`ref/seg_5.jpg` at 6.2 s and `ref/seg_29.3.jpg` at 31.0 s). There is no exit animation when a cut follows.
- **Density:** one cluster per shot, and only on the empty side of the frame. Either up to about 8 tiny chips plus one hero element, or one big card. Most shots are clean A-roll.
- **Idle:** chips drift a few px. Cards sit still apart from the content building inside them.
- **Look:**
  - Dark translucent chips on a bright busy background.
  - A light card with a big soft shadow.
  - Text is small; the chips are texture, not reading copy.
- **Captions:** small, bottom centre, in a dark box. Overlays never enter the caption band.

## How it was applied to the Chatly A-roll
- **Tiles.** The brief asked for glossy 3D app tiles, which this post doesn't have, so they were added as the hero elements:
  - rounded squares with a gradient face, top gloss and a darker extruded bottom edge, plus a soft drop shadow;
  - they enter with a spring pop (scale 0.4 → ~1.1 → 1, with a blur-in) and bob gently (5 px, 0.4 Hz).
- **Chips, cards and the voice pill** follow the reference's own grammar.
- **Our background differs.** The wall is light grey, not a park, so the dark chips read even better than in the reference. Text runs larger (13 px names, 19 px messages) so it can be read.
- **Exits.** Hard out on the cut wherever a cut follows. A soft 0.25 s exit is used only when the person is about to move into the overlay, or when the beat changes mid-shot.
