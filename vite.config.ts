/* eslint-disable perfectionist/sort-objects */

import path from 'path';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import { loadEnv, defineConfig } from 'vite';

import { FRED_API_URL, FRED_BASE_URL } from './src/configs/vite.config';

// ----------------------------------------------------------------------

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = {
    ...process.env,
    ...loadEnv(mode, process.cwd(), ''),
  };

  return {
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
          rewrite: path => path.replace(new RegExp(`^${FRED_BASE_URL}`), ''),
          configure: proxy => {
            proxy.on('error', err => {
              console.error(`${env.VITE_APP_NAME} Proxy error: ${err}`);
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
  };
});
