// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  site: "https://github.com/Dante20012002/Proyecto_Terpel",
  // base: "Proyecto_Terpel",
  integrations: [
    tailwind({
      applyBaseStyles: false, // Mantenemos control sobre los estilos base
    })
  ],
});