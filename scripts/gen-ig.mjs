// Renders scripts/ig-story.html to a 1080x1920 Instagram Story PNG via headless
// Chromium. Requires a static server for public/ (pass OG_URL to the served copy).
//   OUT=... OG_URL=http://localhost:PORT/ig-story.html node scripts/gen-ig.mjs
import { chromium } from "@playwright/test";
import { copyFileSync, rmSync } from "node:fs";

const TEMPLATE = "scripts/ig-story.html";
const SERVED = "public/ig-story.html";
const URL = process.env.OG_URL || "http://localhost:8910/ig-story.html";
const OUT = process.env.OUT || "ig-story.png";

copyFileSync(TEMPLATE, SERVED);
try {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.screenshot({ path: OUT, type: "png", clip: { x: 0, y: 0, width: 1080, height: 1920 } });
  await browser.close();
  console.log(`wrote ${OUT}`);
} finally {
  rmSync(SERVED, { force: true });
}
