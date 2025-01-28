import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    build: {
        rollupOptions: {
          external: ['**/*.png', '**/*.jpg', '**/*.svg'] // Si tu as besoin de gérer certains fichiers externes
        }
      },
      server: {
        host: 'localhost',
        port: 5173,
        cors: true
      }
});
