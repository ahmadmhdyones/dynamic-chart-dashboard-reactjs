import { FRED_API_URL, FRED_BASE_URL } from './vite.config';

// ----------------------------------------------------------------------

/**
 * Global configuration values used throughout the application.
 *
 * NOTE: The API URL constants (FRED_BASE_URL, FRED_API_URL) are imported from vite.config.ts
 * to ensure that the proxy configuration in Vite and the application code use the same URLs.
 */

// Re-export the constants from vite.config.ts
export { FRED_API_URL, FRED_BASE_URL };
export const FRED_API_KEY = import.meta.env.VITE_FRED_KEY;

export const configDashboard = {
  initialSidebarCollapsed: true,
} as const;
