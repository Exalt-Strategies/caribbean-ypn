import { defineConfig } from "@playwright/test";

/**
 * E2E + visual regression. Builds and serves the production output on :4323.
 * reducedMotion is forced globally so reveal/ticker/smooth-scroll are
 * deterministic in screenshots.
 */
export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 60_000,
  fullyParallel: true,
  use: {
    baseURL: "http://localhost:4323",
    viewport: { width: 1440, height: 900 },
    contextOptions: { reducedMotion: "reduce" },
  },
  expect: {
    toHaveScreenshot: { maxDiffPixelRatio: 0.02 },
  },
  webServer: {
    // --ignore-lock keeps `astro preview` in the foreground: Astro 7 otherwise
    // auto-backgrounds it under coding agents and Playwright sees it exit early.
    command: "npm run build && npm run preview -- --port 4323 --ignore-lock",
    url: "http://localhost:4323",
    reuseExistingServer: true,
    timeout: 180_000,
  },
});
