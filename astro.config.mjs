import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://v8v88v8v88.com',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  experimental: {
    queuedRendering: {
      enabled: true,
    },
  },
});
