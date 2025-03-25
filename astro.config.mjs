// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  adapter: node({
    mode: 'standalone'
  }),
  
  vite: {
    server: {
      allowedHosts: ['https://dante20012002.github.io/Proyecto_Terpel/'], // permisos de dominio
    },
    
  },
});