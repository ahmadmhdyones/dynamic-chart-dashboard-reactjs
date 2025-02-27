/**
 * Global configuration values used throughout the application.
 *
 * NOTE: The API URL constants (FRED_BASE_URL, FRED_API_URL) are imported from vite.config.ts
 * to ensure that the proxy configuration in Vite and the application code use the same URLs.
 */

export { FRED_API_URL, FRED_BASE_URL } from './vite.config'; // Re-export the constants from vite.config.ts
export const FRED_API_KEY = import.meta.env.VITE_FRED_KEY;

export const API_MOCK_DELAY = 1000; // 1 second

// ----------------------------------------------------------------------

export const configDashboard = {
  initialSidebarCollapsed: true,
} as const;

export const configQuery = {
  retryCount: 0,
  staleTime: 1000 * 60, // 1 minute
} as const;

export const configToast = {
  duration: 5000, // 5 seconds
} as const;
