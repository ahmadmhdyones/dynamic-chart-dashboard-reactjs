import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// ----------------------------------------------------------------------

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: { lintCommand: 'eslint .' },
      overlay: {
        initialIsOpen: false,
        position: 'tl',
        // badgeStyle: 'display: none;', // Use this to hide the badge
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    emptyOutDir: true,
  },
});
