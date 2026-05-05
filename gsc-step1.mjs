import { chromium } from 'playwright';

const ctx = await chromium.launchPersistentContext('/home/marco/.config/google-chrome', {
  channel: 'chrome',
  headless: false,
  args: ['--profile-directory=Default', '--no-first-run', '--no-default-browser-check'],
  viewport: { width: 1280, height: 900 },
});

const page = await ctx.newPage();
await page.goto('https://search.google.com/search-console/welcome', { waitUntil: 'domcontentloaded', timeout: 30000 });
await page.waitForTimeout(3000);

const info = await page.evaluate(() => ({
  url: location.href,
  title: document.title,
  loggedInEmail: document.body.innerText.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i)?.[0] || null,
  bodySnippet: document.body.innerText.slice(0, 300),
}));
console.log(JSON.stringify(info, null, 2));

// Take a screenshot for context
await page.screenshot({ path: '/tmp/gsc-step1.png', fullPage: false });

// Keep open briefly so we can inspect via screenshot
await page.waitForTimeout(1000);
await ctx.close();
