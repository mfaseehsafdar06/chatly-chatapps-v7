import puppeteer from '/Users/faseeh/.npm/_npx/110f701c48e68d66/node_modules/puppeteer-core/lib/puppeteer/puppeteer-core.js';
const D = new URL('./', import.meta.url).pathname;
const br = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--allow-file-access-from-files'] });
const p = await br.newPage(); await p.setViewport({ width: 720, height: 720 });
await p.goto(`file://${D}tile.html`); await p.waitForFunction('window.READY === true');
await new Promise((r) => setTimeout(r, 300));
await p.screenshot({ path: `${D}assets/tile_chatly.png`, omitBackground: true }); await br.close();
