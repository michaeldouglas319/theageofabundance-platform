import { chromium } from 'playwright';

const apps = [
  { name: 'wiki', url: 'http://localhost:3001', pages: ['/', '/artificial-intelligence', '/search?q=quantum'] },
  { name: 'studio', url: 'http://localhost:3002', pages: ['/', '/create', '/1'] },
  { name: 'pulse', url: 'http://localhost:3003', pages: ['/', '/technology/ai-transforms-healthcare', '/category/science'] },
];

const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });

for (const app of apps) {
  for (const path of app.pages) {
    const page = await context.newPage();
    const fullUrl = app.url + path;
    console.log(`Navigating to ${fullUrl}...`);
    await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(500);
    const safeName = `${app.name}${path.replace(/[\/\?=]/g, '_')}`;
    await page.screenshot({ path: `/sessions/epic-nifty-galileo/mnt/outputs/${safeName}.png`, fullPage: true });
    console.log(`  -> Saved ${safeName}.png`);
    await page.close();
  }
}

await browser.close();
console.log('Done!');
