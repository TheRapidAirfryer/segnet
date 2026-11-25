import { resolve } from 'node:path';
import { defineConfig } from 'vite';

// Cada página del sitio se declara aquí para que entre en la versión final (npm run build)
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        inicio: resolve(import.meta.dirname, 'index.html'),
        nosotros: resolve(import.meta.dirname, 'nosotros.html'),
        servicios: resolve(import.meta.dirname, 'servicios.html'),
        contacto: resolve(import.meta.dirname, 'contacto.html'),
      },
    },
  },
});
