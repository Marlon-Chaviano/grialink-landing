// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://grialink.com',

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },

  // React was removed once the last island became static Astro — leaving the
  // integration in emitted a ~190 KB renderer chunk that no page referenced.
  integrations: [sitemap()],
});