// Rebuilds ../icons.js from the real icon components in reference/chatly-web/packages/icons/src.
// node reference/chatly-ui-kit/tools/build-icons.mjs        (no deps; reads the .tsx, converts the JSX <svg> to an SVG string)
//
// Conversion rules (so the strings render exactly like the React components):
//  - camelCase SVG props -> kebab attributes; {1.5} / {'x'} -> "1.5" / "x"; className / {...props} dropped
//  - strokeWidth="currentStroke" is dropped. It is an invalid value in the app too, so the browser ignores it and the
//    path inherits the stroke-width that the surrounding Tailwind class puts on the <svg> (e.g. stroke-[1.2px]).
//    The kit reproduces that by setting stroke-width on the <svg> (icon(name, {sw})).
//  - every id (useId gradients and static ids like clipPath "a") becomes "__ID__-<n>"; icon() swaps __ID__ for a
//    per-call counter so two icons on one page never share a gradient/clip id.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const KIT = new URL('../', import.meta.url).pathname;
const SRC = new URL('../../chatly-web/packages/icons/src/', import.meta.url).pathname;
const APP = new URL('../../chatly-web/apps/web/src/', import.meta.url).pathname;
const REPO = new URL('../../chatly-web/', import.meta.url).pathname;
const LEGACY_REF = '96b4db429b';
const legacy = [];

// dir (under packages/icons/src) -> component name. Curated: every icon a kit builder draws, plus the suite set.
const DIRS = `
logo logo-with-text search edit sidebar-right-icon menu start-new-icon square-sparkle-icon folder-open-icon
website-content-icon connectors-icon knowledge-icon clock-pending-icon core-chat-icon picture-in-picture-icon
collapse-icon collapse-wide-icon plus microphone audio-waves-icon arrow-up crown monitor-smartphone-icon dropdown-icon
chevron-down chevron-right chevron-left check-circle-icon cross-circle brain-icon globe-search-icon upload-icon
page-icon image-icon terminal-icon document-icon slides-colored-icon check-list-icon kanban-icon globe-icon
system-pc-icon clock skills-icon video-icon music volume paint-icon line-graph-icon eye-icon copy refresh
thumbs-up thumbs-down fork-chat-icon pencil artifacts-folder-icon expand-diagonal-icon contract-icon cross x
history download-tray-icon play-rounded-icon book-plus-icon settings-filters-icon rectangle-height-increase-icon
rectangle-height-decrease-icon more-horizontal select-icon send-icon animate-image-icon upscale-frame-icon
play-filled-icon pause instagram-colored facebook-with-bg linkedin-icon doc-icon slide-icon resume-icon
contract-file-icon trip-icon graphs-icon sheets-icon file-type-icons/pdf-icon file-type-icons/markdown-colored-icon
file-type-icons/pptx-icon file-type-icons/text-icon code-colored-icon default-file-icon suite-icon
image-artifacts-icon video-artifacts-icon music-artifacts-icon whatsapp-circle-icon discord stop
undo-icon redo-icon bold-icon italic-icon underline-icon text-color-icon link-icon left-align-icon
center-align-icon right-align-icon justify-align-icon bullet-list-outline-icon number-list-icon
check-list-outline-icon decrease-indent-icon increase-indent-icon image-upload-icon signature-icon
calendar-icon trip-car-icon stays-icon google sparkle-icon single-sparkle-icon tick-icon check
external-link-icon lock-icon share-icon minus diagram-colored-icon stocks-icon reddit-icon
personalize-icon hand-icon layout-grid-icon message-bubble-icon ai-sparkles2-icon
desktop-icon smart-phone-icon cursor-icon cloud-icon cursor-auto-select-icon code code-icon bell-icon
new-folder-icon text-color-underline-icon link-icon-2 image-upload-round-icon ai-slides-outline-icon ai-docs-outline-icon ai-image-outline-icon ai-videos-outline-icon ai-music-outline-icon ai-deep-research-outline-icon ai-sheets-icon ai-podcast-outline-icon ai-graphs-outline-icon ai-explainer-outline-icon ai-chat-outline-icon
APP:modules/make/icons/tablet-icon
gmail-colored google-drive-icon notion-icon slack-icon prompt-library-icon zoom-in-icon
`.trim().split(/\s+/);

const SUITE = `all animations audio avatars chat code design diagrams doc explainer folder-open folder forms graphs home
image meeting-notes motion-design music pdf podcast reddit research sheets slides stocks trips tutor ugc video-editor
video visual-designer web extension games meetings new-chat`.trim().split(/\s+/).map((s) => `suite-icons/${s}-suite-icon`);

const KEEP = new Set(['viewBox', 'gradientUnits', 'gradientTransform', 'patternUnits', 'patternContentUnits',
  'clipPathUnits', 'maskUnits', 'maskContentUnits', 'preserveAspectRatio', 'stdDeviation', 'filterUnits',
  'primitiveUnits', 'spreadMethod', 'textLength', 'lengthAdjust', 'baseFrequency', 'numOctaves', 'tableValues',
  'kernelMatrix', 'edgeMode', 'specularExponent', 'surfaceScale', 'diffuseConstant', 'pathLength', 'refX', 'refY',
  'markerWidth', 'markerHeight', 'markerUnits', 'xChannelSelector', 'yChannelSelector']);
const kebab = (a) => (KEEP.has(a) ? a : a === 'xlinkHref' ? 'href' : a === 'xmlnsXlink' ? 'xmlns:xlink'
  : a.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase()));

function convert(dir) {
  const file = dir.startsWith('APP:') ? `${APP}${dir.slice(4)}/index.tsx` : `${SRC}${dir}/index.tsx`;
  let src;
  if (existsSync(file)) src = readFileSync(file, 'utf8');
  else {
    // Upstream deleted some old artifact icons (66bcdd3b60, 2026-11-12) in favour of suite icons. Read them from the
    // last commit that had them (git show, read-only) so older kit builders keep drawing.
    try {
      const rel = (dir.startsWith('APP:') ? `apps/web/src/${dir.slice(4)}` : `packages/icons/src/${dir}`) + '/index.tsx';
      src = execFileSync('git', ['-C', REPO, 'show', `${LEGACY_REF}:${rel}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
      legacy.push(dir);
    } catch { return { err: 'missing' }; }
  }
  const name = (src.match(/export const (\w+)/) || [])[1];
  const a = src.indexOf('<svg');
  const b = src.lastIndexOf('</svg>');
  if (a < 0 || b < 0) return { name, err: 'no <svg>' };
  let s = src.slice(a, b + 6);
  s = s.replace(/\{\/\*[\s\S]*?\*\/\}/g, '');
  s = s.replace(/\s+className=\{[^}]*\}/g, '').replace(/\s+className="[^"]*"/g, '');
  s = s.replace(/\s*\{\s*\.\.\.\w+\s*\}/g, '');
  s = s.replace(/\s+(aria-hidden|role|focusable)=(\{[^}]*\}|"[^"]*")/g, '');
  s = s.replace(/\s+strokeWidth="currentStroke"/g, '');
  // template literals with the useId variable: `url(#${id}-0)` / `${id}-0`
  s = s.replace(/=\{`([^`]*)`\}/g, (_, t) => '="' + t.replace(/\$\{\w+\}/g, '__ID__') + '"');
  // id={gradientId} / fill={`url(#${...})`} handled; bare variable ids
  s = s.replace(/(\s(?:id|fill|stroke|clipPath|mask|filter))=\{(\w+)\}/g, (_, k, v) => `${k}="__ID__"`);
  s = s.replace(/=\{\s*\w+\s*\?\?\s*'([^']*)'\s*\}/g, '="$1"'); // prop ?? 'default' -> default
  s = s.replace(/=\{\s*([\d.\-]+)\s*\}/g, '="$1"').replace(/=\{\s*['"]([^'"]*)['"]\s*\}/g, '="$1"');
  // static ids -> namespaced
  const ids = [...s.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]).filter((i) => !i.startsWith('__ID__'));
  for (const id of ids) {
    const esc = id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    s = s.replace(new RegExp(`id="${esc}"`, 'g'), `id="__ID__-${id}"`)
      .replace(new RegExp(`url\\(#${esc}\\)`, 'g'), `url(#__ID__-${id})`)
      .replace(new RegExp(`href="#${esc}"`, 'g'), `href="#__ID__-${id}"`);
  }
  s = s.replace(/(\s)([a-zA-Z]+)=/g, (m, sp, attr) => sp + kebab(attr) + '=');
  s = s.replace(/\s*\n\s*/g, ' ').replace(/\s+\/>/g, '/>').replace(/\s+>/g, '>').replace(/>\s+</g, '><');
  const left = s.match(/\{[^}]*\}/g);
  return { name, svg: s, err: left ? 'unconverted: ' + left.join(' ') : null };
}

const out = {};
const report = [];
for (const dir of [...DIRS, ...SUITE]) {
  const r = convert(dir);
  if (r.err) report.push(`${dir}: ${r.err}`);
  if (r.svg && !(r.err && r.err !== null && r.err.startsWith('unconverted'))) out[r.name] = { dir, svg: r.svg };
}
if (report.length) console.log('SKIPPED / CHECK:\n  ' + report.join('\n  '));
if (legacy.length) console.log(`legacy (removed upstream, read from ${LEGACY_REF}): ${legacy.join(' ')}`);

const lines = Object.entries(out).map(([n, { dir, svg }]) => `  ${n}: ${JSON.stringify(svg)}, // ${dir}`);
const js = `// GENERATED by tools/build-icons.mjs from reference/chatly-web/packages/icons/src @ 0799197 (2026-11-13). Do not hand-edit.
// Raw SVG strings of the real icon components. Use icon(name, opts) from this file (or CU.icon) to place one.
export const ICON_SVG = {
${lines.join('\n')}
};

let __n = 0;
/** icon('SearchIcon', {size:18, sw:1.2, color:'#0F0F0F', cls:'x'}) -> <svg> string.
 *  fit: true adds a viewBox to the few icons that lack one, so they scale to size.
 *  size: px box (number or [w,h]); sw: stroke-width set on the <svg> (paths without their own stroke-width inherit it,
 *  exactly like the app's Tailwind stroke-[..] class); color: CSS color for currentColor. */
export function icon(name, o = {}) {
  const raw = ICON_SVG[name];
  if (!raw) throw new Error('chatly-ui-kit: unknown icon ' + name);
  const id = 'cu' + (++__n);
  const st = [];
  if (o.size != null) { const [w, h] = Array.isArray(o.size) ? o.size : [o.size, o.size]; st.push(\`width:\${w}px;height:\${h}px\`); }
  if (o.sw != null) st.push(\`stroke-width:\${o.sw}\`);
  if (o.color) st.push(\`color:\${o.color}\`);
  if (o.style) st.push(o.style);
  const attrs = \` class="cu-i\${o.cls ? ' ' + o.cls : ''}"\${st.length ? \` style="\${st.join(';')}"\` : ''}\`;
  let svg = raw;
  // fit: a few app icons have no viewBox (they only draw right at their native size); fit adds one so they scale
  if (o.fit && !/viewBox=/.test(svg)) { const m = svg.match(/width="([\\d.]+)" height="([\\d.]+)"/); if (m) svg = svg.replace('<svg', '<svg viewBox="0 0 ' + m[1] + ' ' + m[2] + '"'); }
  return svg.replace(/__ID__/g, id).replace('<svg', '<svg' + attrs);
}

/** Suite icon by content type (drawer tabs, launcher). Keys follow ARTIFACT_SUITE_ICONS in the app. */
export const SUITE = {
  all: 'AllSuiteIcon', folder: 'FolderSuiteIcon', 'folder-open': 'FolderOpenSuiteIcon', file: 'FolderOpenSuiteIcon',
  other: 'FolderSuiteIcon', slides: 'SlidesSuiteIcon', pptx: 'SlidesSuiteIcon', docs: 'DocSuiteIcon', doc: 'DocSuiteIcon',
  docx: 'DocSuiteIcon', md: 'DocSuiteIcon', txt: 'DocSuiteIcon', sheets: 'SheetsSuiteIcon', sheet: 'SheetsSuiteIcon',
  csv: 'SheetsSuiteIcon', xlsx: 'SheetsSuiteIcon', research: 'ResearchSuiteIcon', pdf: 'PDFSuiteIcon',
  resume: 'AvatarsSuiteIcon', contract: 'FormsSuiteIcon', trip: 'TripsSuiteIcon', trips: 'TripsSuiteIcon',
  graph: 'GraphsSuiteIcon', graphs: 'GraphsSuiteIcon', diagram: 'DiagramsSuiteIcon', diagrams: 'DiagramsSuiteIcon',
  image: 'ImageSuiteIcon', images: 'ImageSuiteIcon', video: 'VideoSuiteIcon', videos: 'VideoSuiteIcon',
  music: 'MusicSuiteIcon', code: 'CodeSuiteIcon', web: 'WebSuiteIcon', sites: 'WebSuiteIcon', site: 'WebSuiteIcon',
  stocks: 'StocksSuiteIcon', reddit: 'RedditSuiteIcon', 'video-editor': 'VideoEditorSuiteIcon',
  podcast: 'PodcastSuiteIcon', lottie: 'AnimationsSuiteIcon', animations: 'AnimationsSuiteIcon',
  'motion-design': 'MotionDesignSuiteIcon', explainer: 'ExplainerSuiteIcon', ugc: 'UGCSuiteIcon', ad: 'UGCSuiteIcon',
  audio: 'AudioSuiteIcon', chat: 'ChatSuiteIcon', extension: 'ExtensionSuiteIcon', games: 'GamesSuiteIcon',
  meetings: 'MeetingsSuiteIcon', 'new-chat': 'NewChatSuiteIcon',
};
export const suite = (type, size = 18, cls = '') => icon(SUITE[type] || type, { size, cls });
`;
writeFileSync(KIT + 'icons.js', js);
console.log('icons.js:', Object.keys(out).length, 'icons,', (js.length / 1024).toFixed(1), 'KB');
