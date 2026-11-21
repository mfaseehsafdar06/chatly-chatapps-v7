# Chatly UI kit v2

Plain HTML/CSS string builders that draw the current Chatly web app (`reference/chatly-web` @ 96b4db4, 2026-11-06, light theme; Home V2, sidebar, navbar search and suite icons updated to 0799197, 2026-11-13) for HyperFrames comps. Source of truth: `reference/ui-spec-2026-11/*.md` plus the product code. Contact sheet: `preview.png` (from `preview.html`).

## Files
- `chatly-ui.css`: all styles, every class `cu-*`. Tokens are `--cu-*` vars on `.cu`, and every builder root carries `.cu`.
- `chatly-ui.js`: ES module of builders. It also sets `window.CU`.
- `icons.js`: 201 real icons converted from `packages/icons/src`, including the Chatly mark (`LogoIcon`), `LogoWithText`, all 37 suite icons and the Gmail / Slack / Google Drive / Notion logos. The old artifact icons that upstream deleted on 11-12 (`DocIcon`, `SlidesColoredIcon`, `SuiteIcon`…) are still included, read from 96b4db4 with `git show`. Use `icon(name, {size, sw, color, fit})` and `suite(type, size)`.
- `tools/build-icons.mjs` regenerates `icons.js` (add a dir to its list for more icons). `tools/shoot.mjs` serves the repo and screenshots `preview.html` to `preview.png` (`--crops` also writes one PNG per section).

## Use
```html
<link href="https://fonts.googleapis.com/css2?family=Google+Sans+Flex:opsz,wght@6..144,1..1000&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../reference/chatly-ui-kit/chatly-ui.css">
<script type="module">
  import CU from '../../reference/chatly-ui-kit/chatly-ui.js';
  stage.innerHTML = CU.appDesktop({ navbar:{title:'Q3 board deck'}, chatHTML: CU.userBubble({text:'…'}) });
</script>
```
- **Font:** `--cu-font` is `'Google Sans Flex','GS','Google Sans',sans-serif`, so a comp's local `@font-face` named `GS` works too.
- **Modules:** they need http or Chrome's `--allow-file-access-from-files`. A plain `file://` page cannot import them.
- **Scale:** sizes are 1:1 CSS px of the 1920-wide desktop app or the 390-wide mobile app. Scale the whole stage (transform or zoom), not the kit.
- **Images:** every image slot (`thumb`, `avatar`, covers, previews) takes a URL or any CSS image (`linear-gradient(...)`). Left empty, the slot keeps the app's empty fill.

## Builders (config → what you get)
| # | Builder | Config | Size / notes |
|---|---|---|---|
| 1 | `sidebar()` | `expanded=true, recents[], active (index or title), activeNav ('new-chat'\|'artifacts'\|'prompt-library'\|…), hover, user{name,plan,avatar}, projects=[] (null hides), upgrade=false, height` | 256 wide (48 collapsed). Header: LogoWithText 88×22, Search, Collapse. Nav order: New Chat · Artifacts · Skills [New] · Sites · Integrations · Knowledge · **Prompt library [New]** (11-13) · Automations · Chat apps [WhatsApp+Discord]. Then Projects, Recents, and the user row (avatar 40, plan, Get app, Bell). |
| 2 | `navbar()` | `title, mobile, drawerOpen, ring=0.35 (null hides), home, download, upgrade` | h48. Context ring + title split button. Right: Search (ghost, 16 px icon at stroke 1.75 since 11-13) · New chat (pencil) · Open artifacts (hidden when `drawerOpen`). Mobile: ≡ + the three icons, no title. Also exported: `contextRing(v)`. |
| 3 | `home()` | `greeting, name, mobile, prompt{}, promptHTML, groups, height, showUsecases` | Greeting 48/56 (32/40 mobile) at `28dvh−48` (22 mobile). No mark above it. Prompt box, then use-case groups (`usecases({groups})`). |
| 3b | `homeV2()` · `homeV2Prompt()` · `outlineRunAt(ms)` | `vh=1080, vw=1920, prompt{} (promptBox config: text, files, state, caret, mode, placeholder…), promptHTML, t (ms since mount: drives beam, glow and the row stagger), beam (0–1 phase of the one-shot 1600 ms Ultra beam; null = not drawn), glow (0–1), logo=true, announcements[{title,description,image\|icon,tint}], announcementIndex=0, announcementProgress=0.4, usecases[{title,description,color,image\|art}], usecaseIndex=0, build{title,description,cta,image\|false}, create{…}\|false, integrations{title,description}, hover ('announcement'\|'usecase'\|'build'\|'create'\|'integrations'), disclaimer (guest strip text), gutter (Chrome's 8 px scrollbar gutter)` | Dashboard V2 desktop home (`dashboard-v2` flag). No greeting. Fills its container (use in `appDesktop({homeHTML})`); rows use real `cqh`/`clamp()` so any size works, `vh` must be the browser height. At 1920×1080: column 768 centred, header 64 (logo 154×38 + announcement 400×64), use-case card 272, actions 232 (Build 456 · Create/Integrations 300×110), prompt box 142 at y 805. Spec: `ui-spec-2026-11/home-v2.md`. |
| 4 | `promptBox()` + `footer({mobile})` | `text, placeholder='Ask anything...', files[{name,size}\|{thumb}], mode='Ultra', state ('empty'\|'typing'\|'generating', auto), mobile, skills[], caret, voice, plusOpen, modeOpen, maxWidth=768` | r24, #EDEDED border. Left: + · Knowledge · Integrations. Right: mode pill (no chevron on mobile), ghost mic, then blue voice or black ↑ send. File chip 228 (suite icons since 11-12). Footer: "Chatly can make mistakes. Check important info." Also `fileChip(f)`. |
| 5 | `userBubble()` | `text, files[], images[], mobile, actions, time` | Right aligned, max 512 (256 mobile), r20, #EDEDED, 16/26, padding 12×16. |
| 6 | `working()` | `label='Working...', steps[{label, icon, state:'done'\|'active'\|'pending', detail, open, sub}], state:'running'\|'done', expanded, files (count for "Created N files"), doneLabel, current` | Collapsed running: shimmer header + live row (gradient dot + current step). Expanded: 14 px icon rows with the 1×8 rail, detail guide and final ✓ Done. Step icon keys are in `STEP_ICONS` (search, files, slides, image, publish…). Also `thinkingRow(label)`. |
| 7 | `reply({md})` + `actions()` | `md` (#, ##, lists, **bold**, `code`, ---, >) or `html` | Markdown 16/26, H1/H2 20/24 600, gaps 16 / 12 / 48. No avatar. Actions: copy · regenerate · 👍 · 👎 · read aloud · fork (32 ghost). |
| 8 | `docCard()` | `type: docs\|slides\|resume\|contract\|trip\|graph, title, previewHTML, thumb` | r16, #E0E0E0, header with icon 20 + 14/500 title + ›, then a 16:9 `.cu-card-preview` slot (slides on #EDEDED). |
| 9 | `fileTiles()` | `items[{type:'file'\|'image'\|'video'\|'music'\|'resume'\|'contract', name, thumb, duration}], hover (true or index), cols` | Grid `minmax(152,1fr)`, gap 10 (4 columns at 768). Doc tile r18 with icon tile 48 + title + ext badge. Hover: scrim, ✎ Edit chip and glass download. Also `tile(it)`. |
| 10 | `siteCard()` | `name, state:'idle'\|'initializing', progress (0–100), thumb` | r24 card. "Site created" badge, "First version is ready." and a Continue editing pill. Initializing shows "Initializing sites…" + 4 px bar. |
| 11 | `drawer()` | `tabs[{type,title,active,hover}], allActive, controls, actionRow (type string or HTML), bodyHTML, mobile, w, h, maximized, grip` | White panel, 1 px #E0E0E0 left border, grip pill. 64 px top bar: folder · tab chips (130 max, suite 18, 12 px) · + · Pop out / Maximize / Close. Panel mx16, r12 bottom. Mobile: X only, no border. Also `tabChip()`, `drawerWidth({w,sidebarW,type})` (50 %, or 70 % for slides/docs). |
| 12 | `actionRow(type, opts)` | type: `slides docs sheets research resume contract trip graph diagram stocks reddit image video music all sites`. opts: `mobile, selected, tab, model, modelIcon, zoom (0–100), original, review ('run'\|'suggesting'\|'completed')` | Per type, as in the spec. Research and in-agent sites return `''`. Ghost 28 icons, Add to knowledge ⌄, blue Share pill (icon-only when `mobile`). Also `atsRing({score})`, the 68 px floating ring for Resume. |
| 13 | `sitesBuilder()` | `path='/', published, previewHTML, thumb, compact, device, mode, watermark, w, h` | Builder chrome: Preview/Code/Cloud/⋯ tabs, path field `/` with refresh + device, Interact/Edit, open, blue Publish/Update, "Made with Chatly" badge. In-agent Sites tab body: `sitesDrawerBody({thumb})`. |
| 14 | `allArtifacts()` · `launcher()` · `typeEmpty()` | `items[{type, title, thumb, previewHTML}], cols=2, selected[], selectMode, hover, generating` · `hasItems, expanded, hover` · `category, icon, title, description` | All-artifacts action row + grid (gap 16, square cards r18). Launcher: "No Artifacts Created" + the Apps rows. Also `artifactCard()`. |
| 15 | `mediaGrid()` · `genTile()` · `musicTile()` · `playerBar()` | `type, items[] (thumb strings or {thumb,type,ratio}), generating, cols=2, hover` · `ratio, size` · `thumb, title, time, progress, playing` · `title, model, thumb, elapsed, remaining, progress, playing` | Gap 16 (8 for music). Media hover: Post ⌄, download, ⋯, Edit / Animate / Variate (Upscale for video). `galleryBody(grid, player)` adds the 16 px body padding. |
| 16 | `appDesktop()` | `w=1920, h=1080, sidebar (config, HTML or false), navbar{}, chatHTML, homeHTML, drawerHTML (a drawer() or a raw body), drawerType, drawerW, prompt{}, promptHTML, footer` | Sidebar + navbar + chat column (transcript 768, list mt64 gap 8) + prompt dock + drawer. `turn(...parts)` stacks one assistant turn. |
| 17 | `appMobile()` | `w=390, h=844, navbar{}, chatHTML, homeHTML, prompt{}, footer` | No status bar. Navbar, thread (16/8 padding), prompt box and 11 px footer. |

## Animation hooks (no CSS animation runs; tween these with GSAP)
- **Typing:**
  - `.cu-typed` holds the typed text and `.cu-ph` the placeholder.
  - Add `cu-pb-filled` to `.cu-pb` to hide the placeholder.
  - Add `cu-on` to `.cu-caret` to show the caret.
- **Send button:**
  - `cu-pb-typing` on `.cu-pb` swaps voice → send (scale .8 → 1, opacity).
  - Or tween `.cu-pb-voice` and `.cu-pb-send` directly.
  - The app uses a spring (500/30) to bring the button in and exits over 100 ms.
- **Steps:**
  - Each row is `.cu-step.cu-step-<i>.cu-step-{done|active|pending}`, and pending rows are `display:none`.
  - The header label is `.cu-wk-lbl` and the live row label is `.cu-wk-cur`.
  - `cu-open` on `.cu-wk` expands the group. The chevron flips; the app animates it 300 ms `cubic-bezier(.25,.1,.25,1)`, and the body opens over 0.35 s.
- **Shimmer** (`.cu-shim`): tween `--cu-shim` from `200%` to `-200%` over 5 s linear, looping. The static default is `-50%`, which keeps the bright band off the text.
- **Thinking dot** (`.cu-dot`): tween `--cu-dot` from `0%` to `-200%` over 2.5 s linear, looping.
- **Generating tile** (`.cu-gen`):
  - Move `--cu-spot-x` / `--cu-spot-y` along a circle of radius 30 % around the centre, at 0.007 rad/frame (about 15 s per orbit at 60 fps).
  - `--cu-spot-r` is max(110 px, 35 % of the short side); `genTile({size})` sets it.
- **Progress:** `--cu-progress` (0–100 %) drives the site-init bar, music progress and the player seek.
- **Context ring:** `.cu-ring-v` uses `stroke-dashoffset`.
- **ATS ring:** `.cu-ats-arc` uses `stroke-dashoffset`.
- **Zoom slider:** set `--cu-zoom` on `.cu-zoom`.
- **States:**
  - `cu-hover` on a row, tile, card or button gives its hover look and hover overlay.
  - `cu-active` marks a nav item, recent, tab chip or gallery tab.
  - `cu-on` marks a pressed or open control.
- **Drawer open:** the app animates `marginRight −width → 0` and `opacity 0 → 1` over 0.2 s easeOut.
- **Home V2 Ultra beam** (`.cu-h2-beam`): rebuild with `homeV2({ beam })` per frame (0 → 1 over 1600 ms, once, counter-clockwise; opacity ramps in by 18 % and out after 72 %), or `homeV2({ t: ms })`. The glow (`.cu-h2-glow`) is plain `opacity`, 0 → 1 from 1300 to 2100 ms ease-out, so it can be tweened directly. Rows `.cu-h2-head`, `.cu-h2-uc`, `.cu-h2-acts`: opacity 0 / scale .98 → 1, 550 ms `cubic-bezier(.22,1,.36,1)`, staggered 60 ms from 60 ms. `homeV2Prompt()` gives just the prompt area for a close-up.

## Remote-config text (stand-ins, not from code)
- **Greeting:** "Good evening, {name}". `agentGreetings` is empty in the client.
- **Placeholder:** "Ask anything..." is the code fallback; the rotating strings are remote config.
- **Mode:** "Ultra". `superAgentModes` is empty in the client.
- **Home use-case groups and labels:** "Create" (Slides, Docs, Sheets, Images, Videos, Music) and "Research" (Deep research, Graphs, Podcast). `agentUsecases` is empty in the client.
  - The tile icons are the repo's `AI*OutlineIcon` set. A few of them have no viewBox, so the kit draws them with `fit:true`.
- **Gallery model pill:** "Auto" with a sparkle glyph. `image_gen_models` is remote config.
- **Home V2:** announcement banners (API), use cases (`agentHomeV2.usecases`) and the Build/Create images are stand-ins (see `home-v2.md` §7). The Build/Create/Integrations titles, descriptions and "Start building" are the code defaults. Integration logos are the repo icons, not the composio CDN art.
- **Recents, user name, plan ("Ultra Plan") and file names** are sample data.

## Do / don't
- **Do:**
  - Use the URL bar text `chatlyai.app` if a comp shows a browser. The sites builder path field shows `/`.
  - Keep cards under the reply.
  - Keep the drawer flat white and attached right.
  - Keep the light theme.
- **Don't draw:**
  - "Interface" anywhere.
  - A Mac menu bar, clock, wallpaper or dock.
  - A result card "[name, sub, Open]".
  - A Chatly mark above the greeting, or an agent mark above replies.
  - "Uniform grid" or "Download all" text title bars.
  - A "Slides ⌄" switcher.
  - "+ Add to Prompt" chips (it is "✎ Edit" now).
  - Model-name badges on media tiles.
  - Ring→check ticks on every step. Steps are collapsed by default and only the final row gets ✓ Done.

## Out of date vs 0799197 (2026-11-13), not yet built
- **Thread:** the new **Todo list card** (`AgentTodoListCard`) sits above the Super Agent trail in every assistant turn that has todos: r 16, 1 px #EDEDED, white, p 16, mb 12; header = 16 px status icon + title (`body-sm`, 500) + counter (`body-xs` tertiary) + 12 px chevron; rows with 16 px status icons; states Planning (skeleton) / Active / Waiting for input / Failed / Stopped / Completed; collapses itself when every todo is done. `working()` doesn't draw it.
- **User message / prompt box:** a "used prompt" pill (h 24, r 8, #EDEDED, 12 px #575757) above the text when a Prompt-library prompt was used; `@` menu now lists prompts with fill-in variables.
- **Sidebar:** guests now see every nav item (clicks ask to sign in); a Chat apps spotlight card / first-chat nudge can pop beside the Chat apps row.
- **Drawer galleries:** the zoom control is now ZoomIn icon + slider + "NN%" (drawn), and the app's default is 4 columns = 50 % (the kit's grids still default to 2 columns / 100 %).
- Command palette (suite icons) and the generic utm-variant landing (no sidebar, glowing prompt box, models marquee) aren't in the kit.

## Guessed or unconfirmed
- **Sidebar:**
  - The `GetStartedCard` (subscriber onboarding checklist) is left out. It is a checklist that finishes, and its visibility isn't confirmed.
  - The Upgrade card's blue blob is approximated.
  - The Projects section always renders in code. With no projects it shows "New Project".
- **Prompt box:**
  - The Knowledge button stroke is assumed to be 1.2 (it renders through a tooltip slot).
  - The mode trigger has no explicit `flex` class in code; the kit uses inline-flex.
- **Drawer:**
  - Width uses container = viewport − sidebar. The min/max clamps follow the spec, but the exact container the app measures isn't confirmed.
  - The chat navbar sits only above the chat column.
- **Docs toolbar:** the image-upload ▾ and the "Contents ⌄" chevron use `DropdownIcon` at 8–14 px.
- **Contract:** "Suggesting" uses `DocumentIcon`, standing in for the doc icon. "Updating" (spinner) isn't drawn.
- **Generating tile:** a CSS approximation of the canvas (dot grid, a masked "hot" layer and a glow). The smoothstep dot growth is approximated by the mask falloff.
- **Sites builder:** the preview area under the chrome is a plain white slot. The site-mode switch is drawn as collapsible tabs (Interact active).
- **Music:** the procedural cover fallback isn't reproduced; the slot stays a hook.
- **Not built:**
  - Home V2 panels (Build / Create / Integrations `DashboardPanel`) and the mobile V2 home.
  - Menus and popovers: "+", modes, connectors, share, right-click, settings.
  - Full view.
  - Pop-out chat window.
  - Present mode.
  - Body content for slides, docs, sheets, trips, research timeline, stocks and reddit. Fill `bodyHTML` / `previewHTML`.
