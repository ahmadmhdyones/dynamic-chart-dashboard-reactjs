/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_FRED_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
