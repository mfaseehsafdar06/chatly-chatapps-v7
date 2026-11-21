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
