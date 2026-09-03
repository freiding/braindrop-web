// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static promo site for the BrainDrop Android app.
// Set `site` to the real domain before deploying so canonical / OG / sitemap
// URLs resolve correctly.
export default defineConfig({
  site: 'https://braindrop.app',
  // Trailing-slash + directory output => dist/<page>/index.html, which resolves
  // on any static host (and a plain `python -m http.server`) without rewrite rules.
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  // `astro preview` runs on Vite's preview server, which rejects requests whose
  // Host header isn't in this list. "braindrop" is the service name it's reached
  // by inside the Docker/compose network.
  vite: {
    preview: {
      allowedHosts: ['braindrop'],
    },
  },
});
