// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.itqan.live',
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
});
