// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://vitorhugocunha.xyz',

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  integrations: [icon()],

  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en", "jp"],
    routing: {
      prefixDefaultLocale: false // "pt" fica em "/", "en" em "/en", etc.
    }
  }
});
