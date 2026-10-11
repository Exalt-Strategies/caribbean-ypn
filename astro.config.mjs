import { defineConfig } from "astro/config";

// Set `site` to the real domain at deploy time (used for canonical/OG URLs).
export default defineConfig({
  site: "https://caribbeanypn.org",
  // Astro 7 defaults to "jsx" whitespace handling, which strips spaces between
  // adjacent inline elements. Keep the Astro 4 behaviour the layout was built on.
  compressHTML: true,
});
