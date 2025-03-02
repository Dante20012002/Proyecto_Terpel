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
      allowedHosts: ['http://127.0.0.1:5500/'], // permisos de dominio
    },
    
  },
});