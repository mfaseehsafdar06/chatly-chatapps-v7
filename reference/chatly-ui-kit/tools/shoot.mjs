// Screenshot preview.html -> preview.png (full page). Serves the repo root over http so the ES modules and the local
// font load (file:// blocks module imports). Usage: node reference/chatly-ui-kit/tools/shoot.mjs [--crops]
//   --crops also writes tools/crops/NN.png, one per .sec, for close inspection.
import { createRequire } from 'module';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const require = createRequire('/Users/faseeh/.npm/_npx/110f701c48e68d66/node_modules/');
const pp = require('puppeteer-core');
const KIT = new URL('../', import.meta.url).pathname;
const ROOT = path.resolve(KIT, '../..');
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.png': 'image/png' };
const srv = http.createServer((q, r) => {
  const f = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { r.writeHead(404); return r.end(); }
  r.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(r);
}).listen(0);
const port = srv.address().port;
const b = await pp.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new' });
const p = await b.newPage();
p.on('pageerror', (e) => console.log('PAGE ERROR', e.message));
p.on('console', (m) => { if (m.type() === 'error') console.log('console:', m.text()); });
await p.setViewport({ width: 2000, height: 1200, deviceScaleFactor: 1 });
await p.goto(`http://127.0.0.1:${port}/reference/chatly-ui-kit/preview.html`, { waitUntil: 'networkidle0' });
await p.waitForFunction(() => document.body.dataset.ready === '1', { timeout: 10000 });
await p.evaluate(() => document.fonts.ready);
console.log('font check:', await p.evaluate(() => [document.fonts.check("16px 'Google Sans Flex'"), document.fonts.check('16px GS')]));
await p.screenshot({ path: KIT + 'preview.png', fullPage: true });
if (process.argv.includes('--crops')) {
  fs.mkdirSync(KIT + 'tools/crops', { recursive: true });
  const secs = await p.$$('.sec');
  for (let i = 0; i < secs.length; i++) await secs[i].screenshot({ path: `${KIT}tools/crops/${String(i + 1).padStart(2, '0')}.png` });
  console.log('crops:', secs.length);
}
const h = await p.evaluate(() => document.documentElement.scrollHeight);
console.log('preview.png', 2000, 'x', h);
await b.close(); srv.close();
