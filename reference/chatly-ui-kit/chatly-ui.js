// Chatly UI kit v2 — string builders for the current Chatly web app (reference/chatly-web @ 96b4db4, 2026-11-06).
// ES module; also sets window.CU. Pure + deterministic: no timers, no randomness, no DOM access.
// Every builder returns an HTML string whose root carries .cu (tokens) and a stable cu-* hook class.
// Pair with chatly-ui.css. See README.md for configs, sizes and animation hooks.
import { icon, suite, ICON_SVG, SUITE } from './icons.js';

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const I = (n, size, sw, extra = {}) => icon(n, { size, sw, ...extra });
const cls = (...a) => a.filter(Boolean).join(' ');
// image hooks: a URL, or any CSS image ('linear-gradient(...)', 'url(...)'); '' leaves the slot's own fill
const bg = (u) => (!u ? '' : /^(url|linear-gradient|radial-gradient|conic-gradient|image-set)\(/.test(u) ? `background-image:${u};` : `background-image:url('${u}');`);
const extOf = (n = '') => (n.includes('.') ? n.split('.').pop().toLowerCase() : '');
const stripExt = (n = '') => (n.includes('.') ? n.slice(0, n.lastIndexOf('.')) : n);
const hov = (h) => (h ? ' cu-hover' : '');

/* button: k = xs|sm|md|ixs|ism|imd ; v = ghost|outline|sec|primary|brand|tonal|onimg|onimgv|link */
function btn({ k = 'ism', v = 'ghost', inner = '', pill = false, c = '', st = '', title = '' } = {}) {
  return `<div class="${cls('cu-b', 'cu-b-' + k, 'cu-v-' + v, pill && 'cu-pill', c)}"${st ? ` style="${st}"` : ''}${title ? ` data-tip="${esc(title)}"` : ''}>${inner}</div>`;
}
// icon-only buttons with the app's [&>svg] size/stroke per size (icon-xs 16/1, icon-sm 18/1.2, icon-md 20/1.5)
const ib = (name, { k = 'ism', v = 'ghost', pill = false, c = '', sw, size, color, title } = {}) => {
  const d = { ixs: [16, 1], ism: [18, 1.2], imd: [20, 1.5] }[k] || [18, 1.2];
  return btn({ k, v, pill, c, title, inner: I(name, size ?? d[0], sw ?? d[1], color ? { color } : {}) });
};

/* ---------------- file type helpers (apps/web core/utils/file getFileIcon) ---------------- */
const FILE_ICON = { pdf: 'PDFIcon', doc: 'DocIcon', docx: 'DocIcon', md: 'MarkdownColoredIcon', markdown: 'MarkdownColoredIcon',
  ppt: 'SlidesColoredIcon', pptx: 'SlidesColoredIcon', csv: 'SheetsIcon', xls: 'SheetsIcon', xlsx: 'SheetsIcon', txt: 'TextIcon',
  png: 'ImageArtifactsIcon', jpg: 'ImageArtifactsIcon', jpeg: 'ImageArtifactsIcon', webp: 'ImageArtifactsIcon',
  mp4: 'VideoArtifactsIcon', mov: 'VideoArtifactsIcon', mp3: 'MusicArtifactsIcon', wav: 'MusicArtifactsIcon',
  js: 'CodeColoredIcon', ts: 'CodeColoredIcon', py: 'CodeColoredIcon', html: 'CodeColoredIcon', css: 'CodeColoredIcon', json: 'CodeColoredIcon' };
// grid tiles: same map, but unknown -> SuiteIcon, PPTX -> PptxIcon (DocumentArtifactCardFrame)
const TILE_ICON = { ...FILE_ICON, ppt: 'PptxIcon', pptx: 'PptxIcon' };
const fileIcon = (name, map = FILE_ICON, dflt = 'DefaultFileIcon') => map[extOf(name)] || dflt;
// getFileSuiteIcon (core/utils/file): every file surface uses suite icons since 2026-11-12
const SUITE_EXT = { png: 'image', jpg: 'image', jpeg: 'image', webp: 'image', gif: 'image', heic: 'image', pdf: 'pdf', ppt: 'slides', pptx: 'slides', key: 'slides',
  csv: 'sheets', xls: 'sheets', xlsx: 'sheets', doc: 'docs', docx: 'docs', md: 'docs', markdown: 'docs', txt: 'docs', rtf: 'docs',
  js: 'code', ts: 'code', jsx: 'code', tsx: 'code', py: 'code', html: 'code', css: 'code', json: 'code', mp4: 'video', mov: 'video', webm: 'video',
  mp3: 'audio', wav: 'audio', m4a: 'audio' };
const fileSuite = (name) => SUITE[SUITE_EXT[extOf(name)] || 'folder'];

/* ================= 1. sidebar ================= */
const NAV = [
  { id: 'artifacts', label: 'Artifacts', ic: 'FolderOpenIcon' },
  { id: 'skills', label: 'Skills', ic: 'SquareSparkleIcon', badge: 'New' },
  { id: 'sites', label: 'Sites', ic: 'WebsiteContentIcon' },
  { id: 'integrations', label: 'Integrations', ic: 'ConnectorsIcon' },
  { id: 'knowledge', label: 'Knowledge', ic: 'KnowledgeIcon', sw: 0.9 },
  { id: 'prompt-library', label: 'Prompt library', ic: 'PromptLibraryIcon', badge: 'New' },
  { id: 'automations', label: 'Automations', ic: 'ClockPendingIcon' },
  { id: 'chat-apps', label: 'Chat apps', ic: 'CoreChatIcon', apps: true },
];
export const DEFAULT_RECENTS = ['Q3 board deck', 'Launch plan for the spring drop', 'Competitor pricing research',
  'Weekly sales sheet', 'Landing page for Mossa', 'Resume rewrite', 'Lisbon trip, 4 days'];

export function sidebar({ expanded = true, recents = DEFAULT_RECENTS, active = -1, activeNav = '', hover = '',
  user = { name: 'Maya', plan: 'Ultra Plan', avatar: '' }, projects = [], upgrade = false, width = 256, height = '100%' } = {}) {
  const row = (it, i) => {
    const on = activeNav === it.id;
    let end = '';
    if (it.badge) end = `<span class="cu-badge cu-badge-md cu-badge-n">${it.badge}</span>`;
    if (it.apps) end = `<span class="cu-sb-apps"><span>${I('WhatsappCircleIcon')}</span><span>${I('DiscordIcon')}</span></span>`;
    return `<div class="${cls('cu-sb-row', 'cu-sb-nav-' + it.id, on && 'cu-active', hover === it.id && 'cu-hover')}"><div class="cu-sb-rowl">${I(it.ic, 16, it.sw ?? 1.2, { color: 'var(--cu-text)' })}<p class="cu-sb-lbl">${it.label}</p></div>${end}</div>`;
  };
  const newChat = `<div class="${cls('cu-sb-row', 'cu-sb-nav-new-chat', activeNav === 'new-chat' && 'cu-active', hover === 'new-chat' && 'cu-hover')}" ${expanded ? 'style="padding-right:36px"' : ''}><div class="cu-sb-rowl">${I('StartNewIcon', 16, 1.2)}<p class="cu-sb-lbl">New Chat</p></div>${expanded ? `<div class="cu-sb-side">${ib('PictureInPictureIcon', { k: 'ixs' })}</div>` : ''}</div>`;
  const nav = expanded ? NAV : [{ id: 'search', label: 'Search', ic: 'SearchIcon' }, ...NAV];
  const sec = (title, body, add = '') => `<div class="cu-sb-sec cu-sb-sec-${title.toLowerCase()}"><div class="cu-sb-sech"><p>${title}</p>${add}</div><div class="cu-sb-secb">${body}</div></div>`;
  const proj = projects === null ? '' : sec('Projects', projects.length
    ? projects.map((p) => `<div class="cu-sb-hist"><p>${esc(p)}</p></div>`).join('')
    : btn({ k: 'sm', v: 'ghost', c: 'cu-sb-newproj', inner: I('NewFolderIcon', 16, 1.2) + 'New Project' }),
  `<div class="cu-sb-secadd">${I('PlusIcon', 16, 1.5)}</div>`);
  const rec = sec('Recents', recents.map((r, i) => `<div class="${cls('cu-sb-hist', 'cu-sb-hist-' + i, (i === active || r === active) && 'cu-active')}"><p>${esc(r)}</p></div>`).join(''));
  const prof = `<div class="cu-sb-prof${hover === 'user' ? ' cu-hover' : ''}"><div class="cu-sb-profi"><div class="cu-av" style="${bg(user.avatar)}${expanded ? '' : 'width:32px;height:32px'}">${user.avatar ? '' : esc((user.name || '?')[0].toUpperCase())}</div>${expanded ? `<div style="min-width:0"><p class="cu-sb-name">${esc(user.name)}</p><p class="cu-sb-plan">${esc(user.plan)}</p></div>` : ''}</div></div>`;
  const up = upgrade ? (expanded
    ? `<div class="cu-sb-up"><div><p class="cu-w6" style="font-size:14px;line-height:20px">Chatly Plus</p><p class="cu-lsm cu-c3">Supercharge your productivity with Chatly</p></div>${btn({ k: 'sm', v: 'tonal', inner: 'Upgrade', st: 'width:100%' })}</div>`
    : ib('CrownIcon', { v: 'tonal' })) : '';
  const foot = `<div class="cu-sb-foot">${up}<div class="cu-sb-user">${prof}${expanded ? ib('MonitorSmartphoneIcon', { title: 'Get the app' }) + ib('BellIcon', { title: 'Notifications' }) : ''}</div></div>`;
  return `<aside class="${cls('cu', 'cu-sb', !expanded && 'cu-sb-c')}" style="${expanded ? `width:${width}px;` : ''}height:${typeof height === 'number' ? height + 'px' : height}">
<div class="cu-sb-head"><div class="cu-sb-logo"><div class="cu-sb-logo-clip">${I('LogoWithText', [88, 22])}</div></div>${expanded ? `<div class="cu-sb-headr">${ib('SearchIcon', { title: 'Search' })}${btn({ k: 'ism', c: 'cu-sb-trig', inner: I('CollapseIcon', 18, 1.2) })}</div>` : ''}</div>
<div class="cu-sb-fixed">${newChat}</div>
<div class="cu-sb-scroll">${nav.map(row).join('')}${expanded ? proj + rec : ''}</div>
${foot}</aside>`;
}

/* ================= 2. navbar ================= */
export function contextRing(value = 0.35, size = 14) {
  const r = (size - 2) / 2, c = 2 * Math.PI * r;
  return `<svg class="cu-ring" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#E0E0E0" stroke-width="2"/><circle class="cu-ring-v" cx="${size / 2}" cy="${size / 2}" r="${r}" fill="none" stroke="#0062C6" stroke-width="2" stroke-linecap="round" stroke-dasharray="${c.toFixed(3)}" stroke-dashoffset="${(c * (1 - value)).toFixed(3)}" transform="rotate(-90 ${size / 2} ${size / 2})"/></svg>`;
}
export function navbar({ title = '', mobile = false, drawerOpen = false, ring = 0.35, home = false, download = false, upgrade = false, menu = mobile } = {}) {
  const start = [];
  if (menu) start.push(btn({ k: 'sm', v: 'ghost', c: 'cu-nav-menu', inner: I('MenuIcon', 20, null, { color: 'var(--cu-text-2)' }) }));
  if (!home && ring != null) start.push(contextRing(ring));
  if (!home && !mobile && title) start.push(`<div class="cu-nav-title">${btn({ k: 'sm', v: 'ghost', inner: `<span>${esc(title)}</span>` })}${btn({ k: 'ism', v: 'ghost', inner: I('ChevronDownIcon', 16, 1.2) })}</div>`);
  const end = [];
  if (home) {
    if (download && !mobile) end.push(btn({ k: 'sm', v: 'outline', inner: I('MonitorSmartphoneIcon', 16, 1.2) + 'Download for desktop' }));
    if (upgrade) end.push(btn({ k: 'sm', v: 'tonal', inner: I('AiSparkles2Icon', 16, 1.2) + 'Upgrade' }));
  } else {
    if (upgrade) end.push(ib('CrownIcon', { v: 'tonal', sw: 1.6, size: 16, title: 'Upgrade' }));
    end.push(ib('SearchIcon', { v: 'ghost', size: 16, sw: 1.75, c: 'cu-nav-search', title: 'Search' }));
    end.push(ib('EditIcon', { c: 'cu-nav-new', title: 'New chat' }));
    if (!drawerOpen) end.push(ib('SidebarRightIcon', { c: 'cu-nav-open', title: 'Open artifacts' }));
  }
  return `<div class="${cls('cu', 'cu-nav', mobile && 'cu-nav-m')}"><div class="cu-nav-s">${start.join('')}</div><div class="cu-nav-e">${end.join('')}</div></div>`;
}

/* ================= 4. prompt box ================= */
function fileChip(f, { hover = false } = {}) {
  const ext = f.ext || extOf(f.name);
  return `<div class="cu-fchip${hov(hover)}"><div class="cu-fchip-ic">${I(f.icon || fileSuite(f.name), 24)}</div><div class="cu-fchip-t"><h3 class="cu-fchip-n cu-w4">${esc(stripExt(f.name))}</h3><div class="cu-fchip-m"><p class="cu-c2 cu-upper">${esc(f.type || ext)}</p>${f.size ? `<i></i><span class="cu-c3">${esc(f.size)}</span>` : ''}</div></div>${f.removable === false ? '' : `<div class="cu-b cu-pill cu-fchip-x">${I('XIcon', 14, 1.5)}</div>`}</div>`;
}
export { fileChip };

export function promptBox({ text = '', placeholder = 'Ask anything...', files = [], mode = 'Ultra', state, mobile = false,
  skills = [], caret = false, voice = true, plusOpen = false, modeOpen = false, maxWidth = 768 } = {}) {
  const st = state || (text || files.length ? 'typing' : 'empty');
  const imgs = files.filter((f) => f.image || f.thumb);
  const docs = files.filter((f) => !(f.image || f.thumb));
  const row = files.length ? `<div class="cu-pb-files${files.length > 1 && imgs.length ? ' cu-many' : ''}">${docs.map((f) => fileChip(f)).join('')}${imgs.map((f) => `<div class="cu-fimg" style="${bg(f.thumb)}"></div>`).join('')}</div>` : '';
  const sk = skills.map((s) => `<span class="cu-skill">${I('SquareSparkleIcon', null, 1.2)}${esc(s)}</span>`).join('');
  const left = [
    btn({ k: 'ism', v: 'sec', pill: true, c: cls('cu-pb-plus', plusOpen && 'cu-on'), inner: I('PlusIcon', 18, 1.2) }),
    btn({ k: 'ism', v: 'ghost', pill: true, c: 'cu-pb-out cu-pb-src', inner: I('KnowledgeIcon', 18, 1.2) }),
    btn({ k: 'ism', v: 'ghost', pill: true, c: 'cu-pb-out cu-pb-conn', inner: I('ConnectorsIcon', 18, 1.125) }),
  ].join('');
  const modeEl = mode ? `<div class="${cls('cu-pb-mode', modeOpen && 'cu-on')}"><span>${esc(mode)}</span>${mobile ? '' : I('DropdownIcon', 16, 0.8, { color: 'var(--cu-text-2)' })}</div>` : '';
  const mic = ib('MicrophoneIcon', { pill: true, sw: 1.5, c: 'cu-pb-mic' });
  let act;
  if (st === 'generating') act = `<div class="cu-pb-act">${ib('StopIcon', { v: 'primary', pill: true, c: 'cu-pb-stop' })}</div>`;
  else act = `<div class="cu-pb-act">${mic}<div class="cu-pb-trail">${voice ? btn({ k: 'ism', pill: true, c: 'cu-pb-voice', inner: I('AudioWaveIcon', 18, 1.2) }) : ''}${btn({ k: 'ism', pill: true, c: 'cu-pb-send', inner: I('ArrowUpIcon', 18) })}</div></div>`;
  return `<div class="${cls('cu', 'cu-pb', mobile && 'cu-pb-m', files.length && 'cu-pb-hasfiles', st === 'typing' && 'cu-pb-typing', (text || sk) && 'cu-pb-filled', st === 'generating' && 'cu-pb-gen')}" style="max-width:${maxWidth}px">${row}<div class="cu-pb-ed"><div class="cu-pb-txt"><span class="cu-ph">${esc(placeholder)}</span>${sk}<span class="cu-typed">${esc(text)}</span><span class="${cls('cu-caret', caret && 'cu-on')}"></span></div></div><div class="cu-pb-dock"><div class="cu-pb-l">${left}</div><div class="cu-pb-r">${modeEl}${act}</div></div></div>`;
}
export const footer = ({ mobile = false } = {}) => `<div class="${cls('cu', 'cu-foot', mobile && 'cu-foot-m')}">Chatly can make mistakes. Check important info.</div>`;

/* ================= 3. home ================= */
export const DEFAULT_USECASES = [ // remote config agentUsecases (client default []): plausible stand-ins
  { label: 'Create', tiles: [['Slides', 'AISlidesOutlineIcon'], ['Docs', 'AIDocsOutlineIcon'], ['Sheets', 'AISheetsOutlineIcon'], ['Images', 'AIImageOutlineIcon'], ['Videos', 'AIVideosOutlineIcon'], ['Music', 'AIMusicOutlineIcon']] },
  { label: 'Research', tiles: [['Deep research', 'AIDeepResearchOutlineIcon'], ['Graphs', 'AIGraphsOutlineIcon'], ['Podcast', 'AIPodcastOutlineIcon']] },
];
export function usecases({ groups = DEFAULT_USECASES, hover = '' } = {}) {
  return `<div class="cu cu-uc-wrap"><div class="cu-uc">${groups.map((g, gi) => (gi ? '<div class="cu-uc-div"></div>' : '') + `<div class="cu-uc-g"><span class="cu-uc-gl">${esc(g.label)}</span><div class="cu-uc-row">${g.tiles.map(([l, ic]) => `<div class="cu-uc-t${hov(hover === l)}"><span class="cu-uc-ib">${I(ic, 24, 1, { fit: true })}</span><span class="cu-uc-l">${esc(l)}</span></div>`).join('')}</div></div>`).join('')}</div></div>`;
}
export function home({ greeting, name = 'Maya', mobile = false, prompt = {}, promptHTML, groups, height = mobile ? 796 : 1032, showUsecases = true } = {}) {
  const g = greeting ?? `Good evening, ${name}`; // remote config agentGreetings (client default '')
  const pt = Math.round((mobile ? 0.22 : 0.28) * (height + 48) - 48); // calc(28dvh - 48px), dvh = full viewport incl. navbar
  return `<div class="${cls('cu', 'cu-home', mobile && 'cu-home-m')}" style="padding-top:${pt}px"><div style="position:relative"><h1 class="cu-greet">${esc(g)}</h1></div><div class="cu-home-col">${promptHTML ?? promptBox({ mobile, ...prompt })}${showUsecases ? usecases({ groups }) : ''}</div></div>`;
}

/* ================= 3b. home v2 (dashboard-v2, desktop) ================= */
// W/modules/agent-exp-dashboard/components/home-view/components/desktop-home-view @ 0799197 (2026-11-13). Spec:
// reference/ui-spec-2026-11/home-v2.md. Remote-config text below is a stand-in (client defaults are empty) unless noted.
const H2A = (f) => (typeof import.meta !== 'undefined' ? new URL(`./assets/home-v2/${f}`, import.meta.url).href : `assets/home-v2/${f}`);
export const HOME_V2_ANNOUNCEMENTS = [ // first item = real live content (user screenshot 2026-11-13, assets/home-v2); the rest are stand-ins
  { title: 'Find anything with ⌘/Ctrl K', description: 'Search chats, files and tools without leaving the page', image: H2A('ann.png') },
  { title: 'Prompt library is here', description: 'Save your best prompts and reuse them in any chat', icon: 'PromptLibraryIcon', tint: '#DCECFF' },
  { title: 'Chat with Chatly on WhatsApp', description: 'Connect a chat app and send tasks from your phone', icon: 'CoreChatIcon', tint: '#DEFBE6' },
  { title: 'Skills', description: 'Teach Chatly a workflow once and run it anywhere', icon: 'SquareSparkleIcon', tint: '#FCF4D6' },
];
export const HOME_V2_USECASES = [ // first item = real live content (user screenshot 2026-11-13); the rest are stand-ins
  { title: 'Launch a landing page', description: 'Headline, offer and booking, live in minutes', color: '#6B8E5A', image: H2A('usecase.png') },
  { title: 'Turn a report into a board deck', description: 'Drop in a PDF and get a presentation-ready deck with charts and speaker notes.', color: '#0088FF', art: 'slides' },
  { title: 'Launch a website from one sentence', description: 'Describe the business and Chatly builds, writes and publishes the site.', color: '#8B5CF6', art: 'web' },
  { title: 'Research a market before lunch', description: 'Sourced reports with citations, tables and a summary you can share.', color: '#F97316', art: 'research' },
  { title: 'Make the launch video', description: 'Script, shots, music and captions, cut to the length you need.', color: '#EC4899', art: 'video' },
];
const INTEGRATION_TILES = [ // home-actions/constants INTEGRATION_TILES (exact); logos: composio in the app, repo icons here
  ['GmailColoredIcon', -18, 5, 6], ['SlackIcon', 22, 5, -5], ['GoogleDriveIcon', 2, 32, -4], ['NotionIcon', 46, 31, 5]];
const EASE_OUT_QUINT = [0.22, 1, 0.36, 1];
function bezier([x1, y1, x2, y2]) { // CSS cubic-bezier, solved by bisection (deterministic)
  const f = (a, b, t) => 3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  return (x) => { if (x <= 0) return 0; if (x >= 1) return 1; let lo = 0, hi = 1; for (let i = 0; i < 40; i++) { const m = (lo + hi) / 2; (f(x1, x2, m) < x ? (lo = m) : (hi = m)); } return f(y1, y2, (lo + hi) / 2); };
}
const easeOut = bezier([0, 0, 0.58, 1]);
const easeQuint = bezier(EASE_OUT_QUINT);
const clamp01 = (v) => Math.max(0, Math.min(1, v));
/** The V2 home prompt outline at `ms` after the home mounts (globals.css .ultra-mode-flare-beam + .prompt-outline-glow):
 *  beam: one 1600 ms linear run (null once finished); glow: 0 until 1300 ms, then ease-out to 1 over 800 ms, then stays. */
export function outlineRunAt(ms = 0) {
  return { beam: ms >= 0 && ms < 1600 ? ms / 1600 : null, glow: easeOut(clamp01((ms - 1300) / 800)) };
}
// beam phase p (0..1) -> conic start angle + opacity, from @keyframes ultra-mode-flare-beam (linear between stops)
function beamState(p) {
  const angle = 360 * (1 - p);
  const op = p < 0.18 ? p / 0.18 : p <= 0.72 ? 1 : (1 - p) / 0.28;
  return { angle, op: clamp01(op) };
}
let H2_N = 0;
function outlineRun({ beam = null, glow = 1, radius = 24 } = {}) {
  const id = 'cuh2g' + (++H2_N);
  const layers = [[48, 130, 0.09], [26, 56, 0.11], [12, 16, 0.12]]; // PROMPT_BOX_GLOW_LAYERS (blur, width, opacity) @ 78a1b1d60f
  const svg = glow > 0 ? `<svg class="cu-h2-glow" aria-hidden="true" style="opacity:${+glow.toFixed(4)}"><defs>${layers.map(([b]) => `<filter id="${id}-${b}" x="-60%" y="-200%" width="220%" height="500%"><feGaussianBlur stdDeviation="${b}"/></filter>`).join('')}</defs>${layers.map(([b, w, o]) => `<rect width="100%" height="100%" rx="${radius}" fill="none" stroke="#0088FF" stroke-width="${w}" stroke-opacity="${o}" filter="url(#${id}-${b})"/>`).join('')}</svg>` : '';
  let flare = '';
  if (beam != null) {
    const { angle, op } = beamState(clamp01(beam));
    flare = `<div class="cu-h2-flare" aria-hidden="true" style="border-radius:${radius}px"><div class="cu-h2-beam" style="opacity:${+op.toFixed(4)};background:conic-gradient(from ${angle.toFixed(3)}deg,transparent 0deg,rgba(0,136,255,.25) 20deg,rgba(152,194,255,.65) 36deg,rgba(0,136,255,.25) 52deg,transparent 72deg)"></div></div>`;
  }
  return svg + flare;
}
// stand-in artwork for remote-config images (a real image URL / CSS image in `image` replaces it)
function ucArt(kind = 'slides', color = '#0088FF') {
  const bar = (w, c = '#E0E0E0', h = 6) => `<i style="display:block;height:${h}px;width:${w}%;border-radius:3px;background:${c}"></i>`;
  const body = {
    slides: `<div class="cu-h2-art-side">${[1, 2, 3].map((i) => `<i style="${i === 1 ? `outline:1.5px solid ${color};` : ''}"></i>`).join('')}</div><div class="cu-h2-art-main"><div class="cu-h2-art-slide" style="background:linear-gradient(135deg,${color}22,${color}08)"><b style="background:${color}"></b>${bar(70, '#0F0F0F', 9)}${bar(45, '#BDBDBD')}<div class="cu-h2-art-bars">${[40, 65, 52, 85, 70].map((v) => `<i style="height:${v}%;background:${color}"></i>`).join('')}</div></div></div>`,
    web: `<div class="cu-h2-art-main" style="padding:0"><div class="cu-h2-art-hero" style="background:linear-gradient(135deg,${color}30,${color}0d)">${bar(55, '#0F0F0F', 10)}${bar(38, '#9E9E9E')}<span style="background:${color}"></span></div><div class="cu-h2-art-grid">${[0, 1, 2].map(() => '<i></i>').join('')}</div></div>`,
    research: `<div class="cu-h2-art-main">${bar(60, '#0F0F0F', 9)}${bar(92)}${bar(86)}${bar(90)}<div class="cu-h2-art-cite">${[1, 2, 3].map((n) => `<span style="color:${color};background:${color}1a">${n}</span>`).join('')}</div>${bar(88)}${bar(70)}</div>`,
    video: `<div class="cu-h2-art-main" style="padding:0;display:flex;flex-direction:column"><div style="flex:1;background:linear-gradient(160deg,${color}55,#330867);position:relative"><span class="cu-h2-art-play"></span></div><div class="cu-h2-art-tl">${[22, 30, 18, 26].map((w, i) => `<i style="flex:${w};background:${i % 2 ? color + '55' : color}"></i>`).join('')}</div></div>`,
  }[kind] || '';
  return `<div class="cu-h2-art"><div class="cu-h2-art-top"><i></i><i></i><i></i></div><div class="cu-h2-art-b">${body}</div></div>`;
}
const buildArt = () => `<div class="cu-h2-bart"><div class="cu-h2-art-top"><i></i><i></i><i></i><span></span></div><div class="cu-h2-bart-hero">${'<b></b><i style="width:62%"></i><i style="width:40%"></i><u></u>'}</div><div class="cu-h2-bart-row"><i></i><i></i><i></i></div></div>`;
const createArt = () => `<div class="cu-h2-cart">${['slides', 'docs', 'image'].map((t, i) => `<span class="cu-h2-cart-${i}">${suite(t, 22)}</span>`).join('')}</div>`;

/** The V2 home prompt area alone (prompt box + outline glow + Ultra beam), e.g. for a per-frame renderer.
 *  Same config as homeV2's prompt/promptHTML/t/beam/glow. Width 100% up to 768. */
export function homeV2Prompt({ prompt = {}, promptHTML, t, beam, glow } = {}) {
  const run = t != null ? outlineRunAt(t) : { beam: null, glow: 1 };
  const pb = promptHTML ?? promptBox({ placeholder: 'Ask anything...', ...prompt, maxWidth: 768 });
  return `<div class="cu cu-h2p"><div class="cu-h2-pw">${outlineRun({ beam: beam !== undefined ? beam : run.beam, glow: glow !== undefined ? glow : run.glow })}${pb}</div></div>`;
}

export function homeV2({ vh = 1080, vw = 1920, prompt = {}, promptHTML, t, beam, glow, logo = true,
  announcements = HOME_V2_ANNOUNCEMENTS, announcementIndex = 0, announcementProgress = 0.4,
  usecases: ucs = HOME_V2_USECASES, usecaseIndex = 0,
  build = {}, create = {}, integrations = {}, hover = '', disclaimer = '', gutter = 0 } = {}) {
  const run = t != null ? outlineRunAt(t) : { beam: null, glow: 1 };
  const bm = beam !== undefined ? beam : run.beam;
  const gl = glow !== undefined ? glow : run.glow;
  // entry: rows stagger 60 ms (delayChildren 60 ms), each opacity 0 / scale .98 -> 1 over 550 ms easeOutQuint
  const enter = (i) => {
    if (t == null) return '';
    const k = easeQuint(clamp01((t - 60 - 60 * i) / 550));
    return k >= 1 ? '' : ` style="opacity:${k.toFixed(4)};transform:scale(${(0.98 + 0.02 * k).toFixed(5)})"`;
  };
  // media-query buckets the app uses on these cards (viewport height)
  const vhCls = cls(vh <= 1000 && 'cu-h2-h1000', vh <= 900 && 'cu-h2-h900', vh <= 900 && vh > 780 && 'cu-h2-h800', vh <= 780 && 'cu-h2-h780');

  // header row: EventLogoWithText (LogoWithText, h 38, #0F0F0F) + AnnouncementCarousel (PILL slides)
  const ai = Math.min(announcementIndex, Math.max(announcements.length - 1, 0));
  const ann = announcements.length ? (() => {
    const a = announcements[ai];
    const img = a.image ? `<span class="cu-h2-ann-img" style="${bg(a.image)}"></span>` : `<span class="cu-h2-ann-img" style="background:${a.tint || '#EDEDED'}">${I(a.icon || 'SparkleIcon', 22, 1.2)}</span>`;
    const dots = announcements.length > 1 ? `<div class="cu-h2-ind">${announcements.map((_, i) => `<span class="${cls('cu-h2-ind-i', i === ai && 'cu-active')}">${i === ai ? `<i style="transform:scaleY(${clamp01(announcementProgress)})"></i>` : ''}</span>`).join('')}</div>` : '';
    return `<div class="cu-h2-ann"><div class="${cls('cu-h2-ann-box', hover === 'announcement' && 'cu-hover')}"><div class="cu-h2-ann-slide">${img}<div class="cu-h2-ann-t"><p class="cu-h2-ann-ti">${esc(a.title)}</p><p class="cu-h2-ann-d">${esc(a.description)}</p></div></div></div>${dots}</div>`;
  })() : '';
  const head = `<div class="cu-h2-row cu-h2-head"${enter(0)}>${logo ? `<span class="cu-h2-logo">${I('LogoWithText', [154, 38])}</span>` : '<span></span>'}${ann}</div>`;

  // use-case carousel (Fade): only the selected slide is visible
  const ui = Math.min(usecaseIndex, Math.max(ucs.length - 1, 0));
  const uc = ucs.length ? (() => {
    const u = ucs[ui];
    const art = u.image ? `<div class="cu-h2-uc-img" style="${bg(u.image)}"></div>` : ucArt(u.art, u.color);
    const n = ucs.length;
    let dots = '';
    if (n > 1) {
      const list = n <= 5 ? ucs.map((_, i) => ({ sel: i === ui, edge: false }))
        : (() => { const last = n - 1, mid = ui > 1 && ui < last - 1; return [0, 1, mid ? ui : 2, last - 1, last].map((ti, p) => ({ sel: p === 2 ? mid : ti === ui, edge: p === 0 || p === 4 })); })();
      dots = `<div class="cu-h2-dots">${list.map((d) => `<span class="${cls('cu-h2-dot', d.sel && 'cu-active', d.edge && !d.sel && 'cu-edge')}"></span>`).join('')}</div>`;
    }
    return `<div class="${cls('cu-h2-uc-box', hover === 'usecase' && 'cu-hover')}"><div class="cu-h2-uc-card" style="--cu-uc:${esc(u.color || '#0088FF')}"><span class="cu-h2-uc-glow"></span><div class="cu-h2-uc-t"><h2>${esc(u.title)}</h2><p>${esc(u.description)}</p></div><div class="cu-h2-uc-art">${art}</div></div></div>${dots}`;
  })() : '';
  const ucRow = `<div class="cu-h2-row cu-h2-uc"${enter(1)}>${uc}</div>`;

  // home actions: Build | (Create, Integrations)   — titles/descriptions/CTA are the client defaults from code
  const b = { title: 'Build', description: 'Websites and automations, from one sentence', cta: 'Start building', image: H2A('build.png'), ...build };
  const buildCard = `<div class="${cls('cu-h2-card', 'cu-h2-build', hover === 'build' && 'cu-hover')}"><span class="cu-h2-glowr" style="--cu-g:rgba(100,116,139,.16)"></span><span class="cu-h2-build-t"><span class="cu-h2-build-ti">${esc(b.title)}</span><span class="cu-h2-build-d">${esc(b.description)}</span><span class="cu-b cu-b-sm cu-v-primary cu-h2-build-cta">${esc(b.cta)}</span></span>${b.image === false ? '' : `<span class="cu-h2-build-img">${b.image ? `<i style="${bg(b.image)}"></i>` : buildArt()}</span>`}</div>`;
  const side = (key, title, desc, glowC, extra) => `<div class="${cls('cu-h2-card', 'cu-h2-side', 'cu-h2-' + key, hover === key && 'cu-hover')}"><span class="cu-h2-glowr" style="--cu-g:${glowC}"></span><span class="cu-h2-side-t"><span class="cu-h2-side-ti">${esc(title)}${I('ChevronRightIcon', 16, null, { color: 'var(--cu-text-3)' })}</span><span class="cu-h2-side-d">${esc(desc)}</span></span>${extra}</div>`;
  const c = create === false ? null : { title: 'Create', description: 'Docs, images & slides', image: H2A('create.png'), ...create };
  const ig = { title: 'Integrations', description: 'Gmail, Slack, Drive and more', ...integrations };
  const createCard = c ? side('create', c.title, c.description, 'rgba(249,115,22,.14)', c.image === false ? '' : `<span class="cu-h2-create-img">${c.image ? `<i style="${bg(c.image)}"></i>` : createArt()}</span>`) : '';
  const tiles = `<span class="cu-h2-tiles">${INTEGRATION_TILES.map(([ic, x, y, r]) => `<span style="left:${x}px;top:${y}px;transform:rotate(${r}deg)">${I(ic, 20)}</span>`).join('')}</span>`;
  const intCard = side('integrations', ig.title, ig.description, 'rgba(59,130,246,.12)', tiles);
  const acts = `<div class="cu-h2-row cu-h2-acts"${enter(2)}>${buildCard}<div class="cu-h2-col">${createCard}${intCard}</div></div>`;

  const disc = disclaimer ? `<div class="cu-h2-disc"><span>${esc(disclaimer)}</span></div>` : '';
  return `<div class="${cls('cu', 'cu-h2', vw < 1280 && 'cu-h2-narrow', disclaimer && 'cu-h2-reserve', vhCls)}" style="--cu-vh:${(vh / 100).toFixed(3)}px${gutter ? `;margin-right:${gutter}px;width:calc(100% - ${gutter}px)` : ''}"><div class="cu-h2-stack"><div class="cu-h2-content">${head}${ucRow}${acts}</div>${homeV2Prompt({ prompt, promptHTML, beam: bm, glow: gl }).replace('class="cu cu-h2p"', 'class="cu-h2p cu-h2-pa"')}</div>${disc}</div>`;
}

/* ================= 5. user bubble ================= */
export function userBubble({ text = '', files = [], images = [], mobile = false, actions = false, time = '' } = {}) {
  const docs = files.length ? `<div style="display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px">${files.map((f) => fileChip({ ...f, removable: false })).join('')}</div>` : '';
  const im = images.length ? `<div class="cu-um-imgs">${images.map((u) => `<div class="cu-um-img" style="${bg(u)}"></div>`).join('')}</div>` : '';
  const act = actions ? `<div class="cu-um-a">${time ? `<span class="cu-lsm cu-c3">${esc(time)}</span>` : ''}${ib('PencilIcon', { sw: 1.5 })}${ib('CopyIcon')}${ib('ForkChatIcon')}</div>` : '';
  return `<div class="${cls('cu', 'cu-um', mobile && 'cu-um-m')}"><div class="cu-um-c">${im}${docs}<div class="cu-um-b"><span class="cu-typed">${esc(text)}</span></div>${act}</div></div>`;
}

/* ================= 6. working group ================= */
export const STEP_ICONS = { thinking: 'BrainIcon', files: 'PageIcon', file: 'PageIcon', terminal: 'TerminalIcon', code: 'TerminalIcon',
  search: 'GlobeSearchIcon', web: 'GlobeSearchIcon', research: 'GlobeSearchIcon', vision: 'LineGraphIcon', doc: 'DocumentIcon',
  docs: 'DocumentIcon', slides: 'SlidesSuiteIcon', publish: 'UploadIcon', todo: 'CheckListIcon', plan: 'CheckListIcon',
  kanban: 'KanbanIcon', browser: 'GlobeIcon', sites: 'GlobeIcon', computer: 'SystemPCIcon', cron: 'ClockIcon', skills: 'SkillsIcon',
  connectors: 'ConnectorsIcon', image: 'ImageIcon', video: 'VideoIcon', audio: 'AudioWaveIcon', music: 'MusicIcon', tts: 'VolumeIcon',
  podcast: 'MicrophoneIcon', viewed: 'EyeIcon', other: 'PaintIcon' };
export function working({ label, steps = [], state = 'running', expanded = false, doneLabel, current, files } = {}) {
  const done = state === 'done';
  const n = files ?? 0;
  const head = done ? (doneLabel ?? (n ? `Created ${n} file${n > 1 ? 's' : ''}` : 'Done')) : (label ?? 'Working...');
  const rows = steps.map((s, i) => {
    const sst = s.state || (done ? 'done' : 'done');
    const mk = `<span class="${cls('cu-step-mk', i > 0 && 'cu-rail')}">${I(STEP_ICONS[s.icon] || s.icon || 'PaintIcon', 14, 1.5)}</span>`;
    const lab = `<span class="${cls('cu-step-l', sst === 'active' && 'cu-shim', s.sub && 'cu-c3')}">${s.html ?? esc(s.label)}</span>`;
    const chev = s.detail ? I('ChevronDownIcon', 12, 1.5, { cls: 'cu-step-chev' }) : '';
    const det = s.detail && s.open ? `<div class="cu-step-d"><i></i><div>${esc(s.detail)}</div></div>` : '';
    return `<div class="${cls('cu-step-w', 'cu-step-w-' + i)}"><div class="${cls('cu-step', 'cu-step-' + i, 'cu-step-' + sst)}">${mk}${lab}${chev}</div>${det}</div>`;
  }).join('');
  const activeStep = steps.find((s) => s.state === 'active');
  const liveLabel = current ?? (activeStep ? activeStep.label : 'Putting things together');
  const foot = done
    ? `<div class="cu-wk-foot cu-wk-done"><span class="cu-step-mk cu-rail">${I('CheckCircleIcon', 14, 1.5, { color: 'var(--cu-text-2)' })}</span><span>Done</span></div>`
    : `<div class="cu-wk-foot cu-wk-live"><span class="cu-step-mk cu-rail"><span class="cu-dot"></span></span><span class="cu-shim cu-wk-cur">${esc(liveLabel)}</span></div>`;
  return `<div class="${cls('cu', 'cu-wk', expanded && 'cu-open', done ? 'cu-wk-isdone' : 'cu-wk-running')}"><div class="cu-wk-h"><span class="${cls('cu-wk-lbl', !done && 'cu-shim')}">${esc(head)}</span>${I('ChevronDownIcon', 12, 1.5, { cls: 'cu-wk-chev' })}</div><div class="cu-wk-body">${rows}${done ? foot : ''}</div>${done ? '' : foot}</div>`;
}
/* the standalone "Thinking" beat before any step (ThinkingStatusRow) */
export const thinkingRow = (label = 'Cooking something up') => `<div class="cu cu-wk-foot cu-thinking" style="margin-bottom:12px"><span class="cu-step-mk"><span class="cu-dot"></span></span><span class="cu-shim">${esc(label)}</span></div>`;

/* ================= 7. reply ================= */
const inl = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*(.+?)\*/g, '<em>$1</em>');
export function md(src = '') {
  const out = []; let list = null;
  const flush = () => { if (list) { out.push(`<${list.t}>${list.items.map((x) => `<li>${inl(x)}</li>`).join('')}</${list.t}>`); list = null; } };
  for (const raw of src.split('\n')) {
    const l = raw.trim();
    if (!l) { flush(); continue; }
    let m;
    if ((m = l.match(/^(#{1,6})\s+(.*)/))) { flush(); out.push(`<p class="cu-md-h${m[1].length}">${inl(m[2])}</p>`); continue; }
    if (/^(-{3,}|\*{3,})$/.test(l)) { flush(); out.push('<hr class="cu-md-hr">'); continue; }
    if ((m = l.match(/^[-*]\s+(.*)/))) { if (!list || list.t !== 'ul') { flush(); list = { t: 'ul', items: [] }; } list.items.push(m[1]); continue; }
    if ((m = l.match(/^\d+[.)]\s+(.*)/))) { if (!list || list.t !== 'ol') { flush(); list = { t: 'ol', items: [] }; } list.items.push(m[1]); continue; }
    if ((m = l.match(/^>\s?(.*)/))) { flush(); out.push(`<blockquote><p>${inl(m[1])}</p></blockquote>`); continue; }
    flush(); out.push(`<p>${inl(l)}</p>`);
  }
  flush();
  return out.join('');
}
export const reply = ({ md: src = '', html } = {}) => `<div class="cu cu-md cu-reply">${html ?? md(src)}</div>`;
export function actions({ fork = true, regenerate = true } = {}) {
  return `<div class="cu cu-act">${ib('CopyIcon', { c: 'cu-act-copy', title: 'Copy' })}${regenerate ? ib('RefreshIcon', { c: 'cu-act-regen', title: 'Regenerate' }) : ''}${ib('ThumbsUpIcon', { c: 'cu-act-up' })}${ib('ThumbsDownIcon', { c: 'cu-act-down' })}${ib('VolumeIcon', { size: 16, c: 'cu-act-read', title: 'Read aloud' })}${fork ? ib('ForkChatIcon', { c: 'cu-act-fork', title: 'Fork from here' }) : ''}</div>`;
}

/* ================= 8. doc card ================= */
const CARD = { docs: ['DocSuiteIcon', 'Document'], doc: ['DocSuiteIcon', 'Document'], slides: ['SlidesSuiteIcon', 'Slides'], resume: ['AvatarsSuiteIcon', 'AI Resume'],
  contract: ['FormsSuiteIcon', 'AI Contract'], trip: ['TripsSuiteIcon', 'Trip map'], graph: ['GraphsSuiteIcon', 'Graph'], graphs: ['GraphsSuiteIcon', 'Graph'] };
export function docCard({ type = 'docs', title, previewHTML = '', thumb = '', hover = false } = {}) {
  const [ic, dflt] = CARD[type] || CARD.docs;
  const t = type === 'doc' ? 'docs' : type;
  const fallback = !previewHTML && !thumb && (t === 'resume' || t === 'contract') ? `<div class="cu-dc-fallback">${esc(title || dflt)}</div>` : '';
  const go = t === 'slides' ? `<div class="cu-dc-go" style="width:16px">${I('ChevronRightIcon', 16)}</div>` : `<div class="cu-dc-go">${I('ChevronRightIcon', 16)}</div>`;
  return `<div class="${cls('cu', 'cu-dc', 'cu-dc-' + t)}"${hover && t === 'slides' ? ' style="border-color:rgba(103,168,255,.3)"' : ''}><div class="cu-dc-h"><div class="cu-dc-hl">${I(ic, 20)}<span>${esc(title || dflt)}</span></div>${go}</div><div class="cu-card-preview" style="${bg(thumb)}">${previewHTML}${fallback}</div></div>`;
}

/* ================= 9. file / media tiles (thread grid) ================= */
const glass = (inner, k = 'xs') => btn({ k, v: 'onimg', inner });
const editChip = () => glass(I('PencilIcon', 14, 1.5) + 'Edit');
const dlBtn = () => btn({ k: 'ixs', v: 'onimg', inner: I('DownloadTrayIcon', 16, 1.5) });
export function tile(it = {}, { hover = false } = {}) {
  const type = it.type || (it.thumb ? 'image' : 'file');
  if (type === 'image' || type === 'video') {
    return `<div class="${cls('cu-tile', 'cu-tile-media', 'cu-tile-' + type, hover && 'cu-hover')}" style="${bg(it.thumb)}">${type === 'video' ? `<div class="cu-tile-play">${I('PlayFilledIcon', 16)}</div>` : ''}<div class="cu-hov"><div class="cu-hov-dl">${dlBtn()}</div><div class="cu-hov-chips">${editChip()}</div></div></div>`;
  }
  if (type === 'music' && it.thumb) {
    return `<div class="${cls('cu-tile', 'cu-tile-media', 'cu-tile-music', hover && 'cu-hover')}" style="${bg(it.thumb)}"><span class="cu-badge cu-badge-md cu-badge-img cu-tile-dur">${esc(it.duration || '2:30')}</span>${btn({ k: 'ism', v: 'onimg', pill: true, c: 'cu-tile-mplay', inner: I('PlayFilledIcon', 18) })}<div class="cu-hov"><div class="cu-hov-dl">${dlBtn()}</div><div class="cu-hov-chips">${editChip()}</div></div></div>`;
  }
  const ext = (it.ext || extOf(it.name) || 'file').toUpperCase();
  const chip = it.type === 'resume' || it.type === 'contract' ? glass('Open') : editChip();
  return `<div class="${cls('cu-tile', 'cu-tile-doc', hover && 'cu-hover')}"><div class="cu-tile-mid"><div class="cu-tile-ic">${I(it.icon || fileSuite(it.name), 24)}</div></div><div class="cu-tile-bot"><p class="cu-tile-t">${esc(stripExt(it.name || 'Untitled'))}</p><span class="cu-badge cu-badge-sm cu-badge-n cu-upper">${esc(ext)}</span></div><div class="cu-hov"><div class="cu-hov-scrim"></div><div class="cu-hov-dl">${dlBtn()}</div><div class="cu-hov-chips">${chip}</div></div></div>`;
}
export function fileTiles({ items = [], hover = false, cols } = {}) {
  const st = cols ? ` style="grid-template-columns:repeat(${cols},minmax(0,1fr))"` : '';
  return `<div class="cu cu-tiles"${st}>${items.map((it, i) => tile(it, { hover: hover === true || hover === i })).join('')}</div>`;
}

/* ================= 10. site card ================= */
export function siteCard({ name = 'Mossa', state = 'idle', progress = 0, thumb = '', badge = 'Site created', description = 'First version is ready.' } = {}) {
  const init = state === 'initializing';
  const sub = init ? `<div class="cu-site-prog"><p class="cu-bsm cu-c2">Initializing sites…</p><div class="cu-bar"><i style="--cu-progress:${progress}%"></i></div></div>` : `<p class="cu-bsm cu-c2">${esc(description)}</p>`;
  return `<div class="cu cu-site"><div class="cu-site-l"><div class="cu-site-th" style="${bg(thumb)}"></div><div class="cu-site-tx"><div class="cu-site-n"><p>${esc(name)}</p><span class="cu-badge cu-badge-sm cu-badge-ok">${esc(badge)}</span></div>${sub}</div></div><div class="cu-site-r"><div class="cu-site-sep"></div>${btn({ k: 'md', v: 'outline', pill: true, c: 'cu-site-btn', inner: 'Continue editing' })}</div></div>`;
}

/* ================= 12. action rows ================= */
const knowledgeBtnFull = () => btn({ k: 'xs', v: 'ghost', c: 'cu-ar-know', inner: I('BookPlusIcon', 14, 1) + 'Add to knowledge' + I('ChevronDownIcon', 14) });
let MOBILE = false;
const knowledgeBtn = () => (MOBILE ? ib('BookPlusIcon', { k: 'ixs', sw: 1, c: 'cu-ar-know', title: 'Add to knowledge' }) : knowledgeBtnFull());
const share = (disabled = false, label = !MOBILE) => (label ? btn({ k: 'sm', v: 'brand', pill: true, c: cls('cu-share', disabled && 'cu-disabled'), inner: 'Share' }) : ib('ShareIcon', { v: 'brand', pill: true, c: cls('cu-share', disabled && 'cu-disabled') }));
const abi = (n, title, c = '') => ib(n, { k: 'ixs', title, c, sw: 1.5 });
const tdiv = '<div class="cu-tb-div"></div>';
const docToolbarMd = () => `<div class="cu-tb" style="height:28px;flex:1">${abi('UndoIcon', 'Undo')}${abi('RedoIcon', 'Redo')}${tdiv}${abi('BoldIcon', 'Bold')}${abi('ItalicIcon', 'Italic')}${abi('UnderlineIcon', 'Underline')}${abi('TextColorUnderlineIcon', 'Text color')}${tdiv}${abi('LinkIcon2', 'Link')}${btn({ k: 'xs', v: 'ghost', inner: I('ImageUploadRoundIcon', 16, 1) + I('DropdownIcon', 8, 0.8), st: 'padding:0 6px;gap:2px' })}${tdiv}${abi('LeftAlignIcon', 'Align left')}${abi('CenterAlignIcon', 'Align center')}${abi('RightAlignIcon', 'Align right')}${abi('JustifyAlignIcon', 'Align justify')}${tdiv}${abi('BulletListOutlineIcon', 'Bullet List')}${abi('NumberListIcon', 'Ordered List')}${abi('CheckListOutlineIcon', 'Task List')}</div>${ib('DropdownIcon', { k: 'ixs', size: 16, sw: 0.8, title: 'Expand toolbar' })}`;
const artifactDocToolbar = (extra = '') => `<div class="cu-tb">${abi('UndoIcon', 'Undo')}${abi('RedoIcon', 'Redo')}${tdiv}<div class="cu-font-sel"><span class="cu-trunc">Times New Roman</span>${I('DropdownIcon', 8, 0.8)}</div>${tdiv}${abi('BoldIcon', 'Bold')}${abi('ItalicIcon', 'Italic')}${abi('UnderlineIcon', 'Underline')}${abi('TextColorIcon', 'Text color')}${tdiv}${abi('LinkIcon', 'Link')}${tdiv}${btn({ k: 'xs', v: 'ghost', c: 'cu-align-sel', inner: I('LeftAlignIcon', 16) + I('DropdownIcon', 8, 0.8) })}${abi('BulletListOutlineIcon', 'Bullet list')}${abi('CheckListOutlineIcon', 'Checklist')}${extra}</div>`;
const zoom = (pos = 100) => `<div class="cu-zoomw">${I('ZoomInIcon', 16, null, { color: 'var(--cu-text-2)' })}<div class="cu-zoom" style="--cu-zoom:${pos}%"><div class="cu-zoom-t"></div><div class="cu-zoom-r"></div><div class="cu-zoom-th"></div></div><span class="cu-zoom-pct">${Math.round(200 / (8 - (2 + Math.round(pos / 25))))}%</span></div>`;
const gtabs = (active = 'Generations') => `<div class="cu-gtabs">${['Generations', 'Templates'].map((t) => `<div class="${cls('cu-gtab', t === active && 'cu-active')}">${t}</div>`).join('')}</div>`;
const select = (n = 0) => (n ? `<span class="cu-lsm cu-c2 cu-w5">${n} selected</span>${ib('XIcon', { k: 'ixs' })}` : btn({ k: 'xs', v: 'link', inner: 'Select', c: 'cu-select' }));

export function actionRow(type = 'slides', o = {}) {
  MOBILE = !!o.mobile;
  try { return actionRowInner(type, o); } finally { MOBILE = false; }
}
function actionRowInner(type, o) {
  const row = (start, end, { spacing = 'gallery', top = false } = {}) =>
    `<div class="${cls('cu', 'cu-ar', 'cu-ar-' + type, spacing === 'document' && 'cu-ar-doc', top && 'cu-ar-top')}"><div class="cu-ar-s">${start}</div><div class="cu-ar-e">${end}</div></div>`;
  const hist = (t) => abi('HistoryIcon', t, 'cu-ar-hist');
  const dl = (t = 'Download') => abi('DownloadTrayIcon', t, 'cu-ar-dl');
  switch (type) {
    case 'slides': return row('', knowledgeBtn() + hist('Revisions') + abi('PlayRoundedIcon', 'Present', 'cu-ar-play') + dl('Export') + share(), { spacing: 'document' });
    case 'docs': case 'doc': return row(docToolbarMd(), abi('CopyIcon', 'Copy markdown') + btn({ k: 'xs', v: 'ghost', inner: 'Contents' + I('DropdownIcon', 14, 0.8) }) + knowledgeBtn() + hist('Open revisions') + abi('SearchIcon', 'Find and replace') + dl() + share(false, !MOBILE && o.shareLabel !== false), { top: true });
    case 'sheets': case 'sheet': return row('', knowledgeBtn() + hist('Revisions') + dl() + share());
    case 'research': return '';
    case 'resume': return row(artifactDocToolbar(abi('ImageUploadIcon', 'Replace image') + btn({ k: 'xs', v: 'ghost', c: 'cu-prefs', inner: 'Preferences' + I('ChevronDownIcon', 14) })) + btn({ k: 'sm', v: 'outline', inner: 'Styles' }),
      abi('SearchIcon', 'Find in resume') + knowledgeBtn() + hist('Versions') + dl() + share(), { spacing: 'document' });
    case 'contract': {
      const rv = { run: btn({ k: 'xs', v: 'primary', c: 'cu-review', inner: 'Run Review' }),
        suggesting: btn({ k: 'xs', c: 'cu-review', st: 'background:var(--cu-warning-bg);color:var(--cu-warning)', inner: I('FileTextIcon' in ICON_SVG ? 'FileTextIcon' : 'DocumentIcon', 14) + 'Suggesting' }),
        completed: btn({ k: 'xs', c: 'cu-review', st: 'background:var(--cu-success-bg);color:var(--cu-success)', inner: I('CheckCircleIcon', 14, 1.5) + 'Completed' }) }[o.review || 'run'];
      return row(artifactDocToolbar(abi('NumberListIcon', 'Numbered list') + abi('SignatureIcon', 'Signature')) + rv,
        abi('CopyIcon', 'Copy as text') + abi('SearchIcon', 'Find in contract') + knowledgeBtn() + hist('Versions') + dl('Download (.pdf)') + share(), { spacing: 'document' });
    }
    case 'trip': return row('', share());
    case 'graph': case 'graphs': return row('', knowledgeBtn() + hist('Revisions') + dl('Export') + share(), { spacing: 'document' });
    case 'diagram': return row('', btn({ k: 'xs', v: 'ghost', inner: I('DownloadTrayIcon', 14) + I('DropdownIcon', 8, 0.8) }) + share());
    case 'stocks': return row('', dl('Download all') + share());
    case 'reddit': return row('', share());
    case 'image': case 'video': case 'music': {
      const model = `<div class="cu-b cu-model"><span class="cu-model-ic" style="${bg(o.modelIcon)}">${o.modelIcon ? '' : I('SparkleIcon', 14, 1)}</span>${esc(o.model || 'Auto')}${I('ChevronDownIcon', 14)}</div>`;
      const set = ib('SettingsFiltersIcon', { v: 'sec', pill: true, c: 'cu-gset', title: `${type[0].toUpperCase() + type.slice(1)} settings` });
      const dens = type === 'music' ? '' : abi(o.original ? 'RectangleHeightDecreaseIcon' : 'RectangleHeightIncreaseIcon', '', 'cu-ar-density');
      return row(gtabs(o.tab) + model + set, zoom(o.zoom ?? 100) + dens + abi('DownloadTrayIcon', 'Download all') + select(o.selected) + share(!o.selected));
    }
    case 'all': return row('', zoom(o.zoom ?? 100) + select(o.selected) + share(!o.selected));
    case 'sites': return '';
    default: return row('', share());
  }
}
export function atsRing({ score = 86, rating } = {}) {
  const r = rating || (score >= 85 ? 'excellent' : score >= 70 ? 'good' : score >= 50 ? 'fair' : 'needs');
  const col = { excellent: '#24A148', good: '#0062C6', fair: '#B28600', needs: '#FA4D56' }[r];
  const R = 27.5, C = 2 * Math.PI * R;
  return `<div class="cu cu-ats"><div class="cu-ats-ring" style="color:${col}"><svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="${R}" stroke="currentColor" stroke-width="5" opacity=".2"/><circle class="cu-ats-arc" cx="30" cy="30" r="${R}" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="${C.toFixed(3)}" stroke-dashoffset="${(C - (score / 100) * C).toFixed(3)}" transform="rotate(-90 30 30)"/></svg><div class="cu-ats-v"><span class="cu-ats-score">${score}</span><small>ATS</small></div></div></div>`;
}

/* ================= 11. drawer ================= */
export function tabChip({ type = 'docs', title = '', active = false, hover = false } = {}) {
  const ic = type === 'new' ? I('LogoIcon', 18, null, { color: 'var(--cu-text-3)' }) : suite(type, 18);
  return `<div class="${cls('cu-tab', 'cu-tab-' + type, active && 'cu-active', hover && 'cu-hover')}"><div class="cu-tab-in">${ic}<span>${esc(title || (type === 'new' ? 'New Tab' : type))}</span></div>${active ? `<div class="cu-tab-x">${I('CrossIcon', 10, 3)}</div>` : ''}</div>`;
}
export function drawer({ tabs = [], allActive = false, controls = true, actionRow: ar = '', bodyHTML = '', mobile = false, w = 832, h = 1080, maximized = false, grip = true } = {}) {
  const arHTML = ar && !ar.includes('<') ? actionRow(ar, { mobile }) : ar;
  const win = !controls ? '' : mobile
    ? `<div class="cu-dr-win">${ib('XIcon', { title: 'Close artifacts' })}</div>`
    : `<div class="cu-dr-win">${ib('PictureInPictureIcon', { title: 'Pop out chat', c: 'cu-dr-pip' })}${ib(maximized ? 'ContractIcon' : 'ExpandDiagonalIcon', { title: maximized ? 'Restore split view' : 'Maximize', c: 'cu-dr-max' })}${ib('SidebarRightIcon', { title: 'Close artifacts', c: 'cu-dr-close' })}</div>`;
  const anyActive = tabs.some((t) => t.active);
  const folder = btn({ k: 'ism', c: cls('cu-dr-folder', (allActive || !anyActive) && 'cu-active'), inner: I('ArtifactsFolderIcon', 14, 1.2) });
  const top = `<div class="cu-dr-top"><div class="cu-dr-topi"><div class="cu-dr-tabs">${folder}<div class="cu-dr-strip">${tabs.map((t) => tabChip(allActive ? { ...t, active: false } : t)).join('')}</div>${ib('PlusIcon', { title: 'New tab', c: 'cu-dr-plus' })}</div>${win}</div></div>`;
  return `<div class="${cls('cu', 'cu-dr', mobile && 'cu-dr-m', maximized && 'cu-dr-max')}" style="width:${w}px;height:${h}px${maximized ? ';border-left:0' : ''}">${grip && !mobile && !maximized ? '<div class="cu-dr-grip"></div>' : ''}<div class="cu-dr-col">${top}<div class="cu-dr-panel">${arHTML}<div class="cu-dr-body">${bodyHTML}</div></div></div></div>`;
}

/* ================= 13. sites builder ================= */
export function sitesBuilder({ path = '/', published = false, previewHTML = '', thumb = '', compact = false, device = 'desktop', mode = 'interact', watermark = true, w = 1100, h = 1000 } = {}) {
  const ctab = (ic, l, on) => `<div class="${cls('cu-ctab', on && 'cu-active')}">${I(ic)}<span>${l}</span></div>`;
  const tabs = `<div class="cu-ctabs">${ctab('GlobeIcon', 'Preview', true)}${ctab('CodeIcon', 'Code')}${ctab('CloudIcon', 'Cloud')}${ctab('MoreHorizontalIcon', 'More')}</div>`;
  const devIc = { desktop: 'DesktopIcon', tablet: 'TabletIcon', mobile: 'SmartPhoneIcon' }[device];
  const addr = `<div class="cu-addr" style="${compact ? 'width:160px' : ''}"><div class="cu-addr-b">${I('RefreshIcon', 14, 1.5)}</div><span class="cu-addr-p">${esc(path)}</span><div class="cu-addr-b">${I(devIc, 14)}</div></div>`;
  const modes = `<div class="cu-ctabs">${ctab('CursorIcon', 'Interact', mode === 'interact')}${ctab('EditIcon', 'Edit', mode === 'edit')}</div>`;
  const open = ib('ExternalLinkIcon', { title: 'Open in new tab' });
  const pub = btn({ k: 'sm', v: 'brand', pill: true, c: 'cu-publish', inner: published ? 'Update' : 'Publish' });
  const wm = watermark ? `<div class="cu-wm">${I('LogoIcon', 16, null, { color: '#fff' })}<span>Made with Chatly</span>${I('XIcon', 10, 1.5, { color: '#fff' })}</div>` : '';
  return `<div class="cu cu-sbld" style="width:${w}px;height:${h}px"><div class="cu-chrome">${tabs}<div class="cu-chrome-c">${addr}${modes}${open}</div>${pub}</div><div class="cu-sbld-view" style="${bg(thumb)}background-size:cover;background-position:top center">${previewHTML}${wm}</div></div>`;
}
/* the in-agent "Sites" drawer body: no chrome, the live site in a rounded card */
export const sitesDrawerBody = ({ previewHTML = '', thumb = '' } = {}) => `<div class="cu cu-site-frame" style="${bg(thumb)}background-size:cover;background-position:top center">${previewHTML}</div>`;

/* ================= 14. all artifacts + launcher ================= */
const ACARD = { slides: ['SlidesSuiteIcon', 'PPTX'], resume: ['AvatarsSuiteIcon', 'PDF'], contract: ['FormsSuiteIcon', 'PDF'], trip: ['TripsSuiteIcon', 'JSON'],
  stocks: ['StocksSuiteIcon', 'JSON'], reddit: ['RedditSuiteIcon', 'JSON'], graph: ['GraphsSuiteIcon', 'HTML'], diagram: ['DiagramsSuiteIcon', 'EXCALIDRAW'],
  docs: ['DocSuiteIcon', 'DOCX'], sheets: ['SheetsSuiteIcon', 'XLSX'], code: ['CodeSuiteIcon', 'HTML'] }; // ARTIFACT_SUITE_ICONS
export function artifactCard(it = {}, { hover = false, selectMode = false, selected = false } = {}) {
  const chk = selectMode ? `<div class="${cls('cu-chk', selected && 'cu-on')}">${selected ? I('CheckIcon', 16, 2) : ''}</div>` : '';
  if (it.type === 'image' || it.type === 'video') {
    return `<div class="${cls('cu-mcard', 'cu-mcard-' + it.type, selected && 'cu-sel-ring', hover && 'cu-hover')}" style="${bg(it.thumb)}">${chk}${it.type === 'video' ? `<div class="cu-tile-play">${I('PlayFilledIcon', 16)}</div>` : ''}${mediaHover(it.type)}</div>`;
  }
  if (it.type === 'generating') return genTile();
  const [ic, badge] = ACARD[it.type] || [fileSuite(it.name), (extOf(it.name) || 'file').toUpperCase()];
  const top = it.thumb || it.previewHTML ? `<div class="cu-acard-th" style="${bg(it.thumb)}">${it.previewHTML || ''}</div>` : `<div class="cu-acard-ic">${I(it.icon || ic, 32)}</div>`;
  return `<div class="${cls('cu-acard', 'cu-acard-' + (it.type || 'file'), selected && 'cu-sel-ring', hover && 'cu-hover')}">${chk}<div class="cu-acard-top">${top}</div><div class="cu-acard-b"><p class="cu-acard-t">${esc(it.title || stripExt(it.name || 'Untitled'))}</p><span class="cu-acard-badge">${esc(it.badge || badge)}</span></div><div class="cu-hov"><div class="cu-hov-scrim"></div><div class="cu-hov-dl">${dlBtn()}</div></div></div>`;
}
export function allArtifacts({ items = [], cols = 2, selected = [], selectMode = false, hover = -1, generating = 0 } = {}) {
  const gen = Array.from({ length: generating }, () => genTile()).join('');
  const grid = `<div class="cu cu-grid cu-all-grid" style="grid-template-columns:repeat(${cols},minmax(0,1fr))">${gen}${items.map((it, i) => artifactCard(it, { hover: hover === i, selectMode: selectMode || selected.length > 0, selected: selected.includes(i) })).join('')}</div>`;
  return actionRow('all', { selected: selected.length }) + grid;
}
const LAUNCH = [['image', 'AI Image'], ['video', 'AI Video'], ['doc', 'AI Document'], ['slides', 'AI Presentation'], ['sheets', 'AI Sheet'], ['music', 'AI Music'], ['resume', 'AI Resume'], ['contract', 'AI Contract']];
const LAUNCH_MORE = [['explainer', 'Explainer Videos'], ['code', 'Code'], ['folder-open', 'Files'], ['research', 'Research'], ['podcast', 'Podcast'], ['motion-design', 'Motion design'], ['video-editor', 'Video Editor'], ['graphs', 'Graphs'], ['reddit', 'Reddit'], ['stocks', 'Stocks'], ['trips', 'Trips'], ['diagrams', 'Diagrams'], ['animations', 'Animations'], ['web', 'Sites']];
export function launcher({ hasItems = false, expanded = false, hover = '' } = {}) {
  const r = ([t, l]) => `<div class="${cls('cu-lrow', 'cu-lrow-' + t, hover === l && 'cu-hover')}">${suite(t, 24)}<span>${l}</span></div>`;
  const more = `<div class="cu-lrow cu-lrow-more"><span class="cu-lrow-chev">${I('ChevronDownIcon', 16, 1.2, { style: expanded ? 'transform:rotate(180deg)' : '' })}</span><span>${expanded ? 'Show less' : 'Show all'}</span></div>`;
  return `<div class="cu cu-launch"><div class="cu-launch-h"><h2>${hasItems ? 'Create new artifact' : 'No Artifacts Created'}</h2><p>Chatly offers tools for all your workflows.</p></div><div class="cu-launch-l"><p>Apps</p><div class="cu-launch-rows">${LAUNCH.map(r).join('')}${expanded ? LAUNCH_MORE.map(r).join('') : ''}${more}</div></div></div>`;
}
// ARTIFACT_CONTENT_TYPE_CONFIG icons (drawer constants), drawn size-6 text-brand
const TYPE_ICON = { images: 'ImageSuiteIcon', image: 'ImageSuiteIcon', videos: 'VideoSuiteIcon', video: 'VideoSuiteIcon',
  music: 'MusicSuiteIcon', code: 'CodeSuiteIcon', files: 'FolderOpenSuiteIcon', graphs: 'GraphsSuiteIcon', slides: 'SlidesSuiteIcon',
  reddit: 'RedditSuiteIcon', stocks: 'StocksSuiteIcon', trips: 'TripsSuiteIcon', diagrams: 'DiagramsSuiteIcon', docs: 'DocSuiteIcon', sheets: 'SheetsSuiteIcon',
  resumes: 'AvatarsSuiteIcon', resume: 'AvatarsSuiteIcon', contracts: 'FormsSuiteIcon', contract: 'FormsSuiteIcon', sites: 'WebSuiteIcon' }; // ARTIFACT_SUITE_ICONS
export const typeEmpty = ({ category = 'slides', icon: ic, title, description } = {}) => `<div class="cu cu-empty"><div class="cu-empty-tile">${I(ic || TYPE_ICON[category] || 'SuiteIcon', 24, 1.5)}</div><div><p class="cu-lxl cu-w6" style="line-height:28px">${esc(title ?? `No ${category} created`)}</p><p class="cu-bsm cu-c2" style="max-width:312px">${esc(description ?? `Your ${category} will be shown here`)}</p></div></div>`;

/* ================= 15. media grid ================= */
// size = tile's short side in px (sets the spotlight radius max(110, 35%) the way the canvas does; default 140)
export const genTile = ({ ratio, size } = {}) => `<div class="cu-gen" style="${ratio ? `aspect-ratio:${ratio};` : ''}${size ? `--cu-spot-r:${Math.max(110, Math.round(size * 0.35))}px` : ''}"><div class="cu-gen-dots"></div><div class="cu-gen-glow"></div><div class="cu-gen-hot"></div></div>`;
function mediaHover(type) {
  const chips = type === 'video' ? [glass(I('EditIcon', 14) + 'Edit'), glass(I('UpscaleFrameIcon', 14) + 'Upscale')]
    : [glass(I('EditIcon', 14) + 'Edit'), glass(I('AnimateImageIcon', 14) + 'Animate'), glass(I('RefreshIcon', 14, 1.5) + 'Variate')];
  const post = glass(`<span class="cu-post-av"><span>${I('InstagramColoredIcon')}</span><span>${I('FacebookWithBgIcon')}</span></span><span class="cu-c2">Post</span>${I('ChevronDownIcon', 14)}`);
  return `<div class="cu-hov"><div class="cu-mhov-tl">${post}</div><div class="cu-mhov-tr">${dlBtn()}${btn({ k: 'ixs', v: 'onimgv', inner: I('MoreHorizontalIcon', 16) })}</div><div class="cu-hov-chips">${chips.join('')}</div></div>`;
}
export function musicTile({ thumb = '', title = 'Untitled', time = '2:30', progress = 0, playing = false, hover = false } = {}) {
  return `<div class="${cls('cu-music', hover && 'cu-hover')}"><div class="cu-music-bg" style="${bg(thumb)}"></div><div class="cu-music-in"><div class="cu-music-art"><div style="${bg(thumb)}"><div class="cu-music-pp">${I(playing ? 'PauseIcon' : 'PlayFilledIcon', 20)}</div></div></div><div class="cu-music-row"><b>${esc(title)}</b><span>${esc(time)}</span></div><div class="cu-music-pr"><div><i style="--cu-progress:${progress}%"></i></div></div></div><div class="cu-hov"><div class="cu-mhov-tr">${btn({ k: 'ixs', v: 'onimg', inner: I('PencilIcon', 16, 1.5) })}${dlBtn()}</div></div></div>`;
}
export function mediaGrid({ type = 'image', items = [], generating = 0, cols = 2, hover = -1, gap } = {}) {
  const cards = items.map((it, i) => (type === 'music' || it.type === 'music' ? musicTile({ ...it, hover: hover === i })
    : `<div class="${cls('cu-mcard', 'cu-mcard-' + (it.type || type), hover === i && 'cu-hover')}" style="${bg(it.thumb || it)}${it.ratio ? `aspect-ratio:${it.ratio}` : ''}">${(it.type || type) === 'video' && hover !== i ? `<div class="cu-tile-play">${I('PlayFilledIcon', 16)}</div>` : ''}${mediaHover(it.type || type)}</div>`)).join('');
  const gen = Array.from({ length: generating }, () => genTile()).join('');
  return `<div class="cu cu-grid cu-media-grid" style="grid-template-columns:repeat(${cols},minmax(0,1fr));gap:${gap ?? (type === 'music' ? 8 : 16)}px">${cards}${gen}</div>`;
}
export function playerBar({ title = 'Untitled', model = '', thumb = '', elapsed = '0:12', remaining = '-0:42', progress = 22, playing = false } = {}) {
  return `<div class="cu cu-player"><div class="cu-player-l"><div class="cu-player-cv" style="${bg(thumb)}"></div><p class="cu-player-t">${esc(title)}</p>${model ? `<span class="cu-player-chip">${esc(model)}</span>` : ''}</div><div class="cu-player-m">${ib(playing ? 'PauseIcon' : 'PlayFilledIcon', { pill: true, size: 16 })}<span>${esc(elapsed)}</span><div class="cu-seek" style="--cu-progress:${progress}%"><i></i><b></b></div><span>${esc(remaining)}</span></div>${ib('VolumeIcon', { pill: true, size: 16 })}</div>`;
}
/* body for an image/video/music drawer tab: 16px side padding scroll body around the grid */
export const galleryBody = (gridHTML, playerHTML = '') => `<div class="cu" style="position:absolute;inset:0;display:flex;flex-direction:column"><div style="flex:1;min-height:0;overflow:hidden;padding:0 16px">${gridHTML}</div>${playerHTML ? `<div style="padding:8px 0 16px">${playerHTML}</div>` : ''}</div>`;

/* ================= 16/17. compositions ================= */
export function drawerWidth({ w = 1920, sidebarW = 256, type = '' } = {}) {
  const container = w - sidebarW;
  const ratio = type === 'slides' || type === 'docs' || type === 'doc' ? 0.7 : 0.5;
  const max = container - (375 + 16);
  return Math.max(Math.min(700, max), Math.min(Math.floor(container * ratio), max));
}
export function appDesktop({ w = 1920, h = 1080, sidebar: sb = {}, navbar: nb = {}, chatHTML = '', homeHTML, drawerHTML = '', drawerType = '', drawerW,
  prompt = {}, promptHTML, footer: showFooter = true } = {}) {
  const sbHTML = sb === false ? '' : typeof sb === 'string' ? sb : sidebar({ activeNav: homeHTML ? 'new-chat' : '', ...sb });
  const sbW = sb === false ? 0 : (typeof sb === 'object' && sb.expanded === false) ? 48 : (sb.width || 256);
  const dw = drawerHTML ? (drawerW ?? drawerWidth({ w, sidebarW: sbW, type: drawerType })) : 0;
  const drawerEl = drawerHTML && !drawerHTML.includes('cu-dr"') && !drawerHTML.includes('cu-dr ') ? drawer({ bodyHTML: drawerHTML, w: dw, h }) : drawerHTML;
  const nav = navbar({ home: !!homeHTML, drawerOpen: !!drawerHTML, ...nb });
  const main = homeHTML
    ? `<div class="cu-main">${nav}<div style="flex:1;min-height:0;overflow:hidden">${homeHTML}</div></div>`
    : `<div class="cu-main">${nav}<div class="cu-thread"><div class="cu-thread-in">${chatHTML}</div></div><div class="cu-dock">${promptHTML ?? promptBox(prompt)}${showFooter ? footer() : ''}</div></div>`;
  return `<div class="cu cu-app cu-app-d" style="width:${w}px;height:${h}px">${sbHTML}${main}${drawerEl}</div>`;
}
export function appMobile({ w = 390, h = 844, navbar: nb = {}, chatHTML = '', homeHTML, prompt = {}, promptHTML, footer: showFooter = true } = {}) {
  const nav = navbar({ mobile: true, home: !!homeHTML, ...nb });
  const body = homeHTML ? `<div style="flex:1;min-height:0;overflow:hidden">${homeHTML}</div>`
    : `<div class="cu-thread"><div class="cu-thread-in">${chatHTML}</div></div><div class="cu-dock">${promptHTML ?? promptBox({ mobile: true, ...prompt })}${showFooter ? footer({ mobile: true }) : ''}</div>`;
  return `<div class="cu cu-app cu-app-m" style="width:${w}px;height:${h}px">${nav}${body}</div>`;
}
/* one assistant turn = optional working group + reply + cards + actions, stacked like the app (cards mt-12) */
export const turn = (...parts) => `<div class="cu cu-turn">${parts.filter(Boolean).join('')}</div>`;

export { icon, suite, ICON_SVG, SUITE, btn, ib, esc };
const CU = { icon, suite, ICON_SVG, SUITE, btn, ib, esc, sidebar, navbar, contextRing, home, homeV2, outlineRunAt, usecases, promptBox, fileChip, footer,
  userBubble, working, thinkingRow, STEP_ICONS, reply, md, actions, docCard, tile, fileTiles, siteCard, drawer, tabChip, actionRow,
  atsRing, sitesBuilder, sitesDrawerBody, allArtifacts, artifactCard, launcher, typeEmpty, mediaGrid, genTile, musicTile, playerBar,
  galleryBody, appDesktop, appMobile, drawerWidth, turn, homeV2Prompt, DEFAULT_RECENTS, DEFAULT_USECASES, HOME_V2_ANNOUNCEMENTS, HOME_V2_USECASES };
if (typeof window !== 'undefined') window.CU = CU;
export default CU;
