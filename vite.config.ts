/* eslint-disable perfectionist/sort-objects */

import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

import { FRED_API_URL, FRED_BASE_URL } from '@/configs/global.config';

// ----------------------------------------------------------------------

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint --config ./eslint.config.js',
        useFlatConfig: true,
      },
      overlay: {
        initialIsOpen: false,
        position: 'bl',
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
    proxy: {
      [FRED_BASE_URL]: {
        target: FRED_API_URL,
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api\/fred/, ''),
        configure: proxy => {
          proxy.on('error', err => {
            console.error('Proxy error:', err);
          });
        },
      },
    },
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
