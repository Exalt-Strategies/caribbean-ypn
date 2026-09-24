// Renders each .slide in scripts/ig-carousel.html to a 1080x1350 PNG.
//   OUTDIR=... OG_URL=http://localhost:PORT/ig-carousel.html node scripts/gen-carousel.mjs
import { chromium } from "@playwright/test";
import { copyFileSync, rmSync, mkdirSync } from "node:fs";

const TEMPLATE = "scripts/ig-carousel.html";
const SERVED = "public/ig-carousel.html";
const URL = process.env.OG_URL || "http://localhost:8911/ig-carousel.html";
const OUTDIR = process.env.OUTDIR || "carousel";
mkdirSync(OUTDIR, { recursive: true });

copyFileSync(TEMPLATE, SERVED);
try {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.goto(URL, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(250);
  const slides = await page.$$(".slide");
  let i = 0;
  for (const s of slides) {
    i++;
    const out = `${OUTDIR}/slide-${i}.png`;
    await s.screenshot({ path: out });
    console.log(`wrote ${out}`);
  }
  await browser.close();
} finally {
  rmSync(SERVED, { force: true });
}
