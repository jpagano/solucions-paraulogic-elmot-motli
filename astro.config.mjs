import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  site: isDev ? 'http://localhost:4321' : 'https://jpagano.github.io/solucions-paraulogic-elmot-motli',
  base: isDev ? '/' : '/solucions-paraulogic-elmot-motli/',
  integrations: [react(), tailwind({
    applyBaseStyles: false
  })]
});
