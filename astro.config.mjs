// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Pas dit domein aan zodra het definitief is. Het wordt gebruikt voor
// canonical-links, de sitemap en Open Graph URLs.
export default defineConfig({
  site: 'https://dorchainwebsolutions.nl',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
