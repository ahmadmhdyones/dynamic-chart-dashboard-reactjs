/**
 * This file contains configuration values that are used by Vite during build time.
 * It mirrors the values in global.config.ts but is designed to work in Node.js environment.
 *
 * IMPORTANT: This file is the single source of truth for API URLs.
 * - It's imported by the main vite.config.ts file for proxy configuration
 * - It's imported by global.config.ts which re-exports these values for use in the application
 *
 * This approach ensures that the proxy configuration and application code always use the same URLs.
 */

// API URLs
export const FRED_BASE_URL = '/api/fred';
export const FRED_API_URL = 'https://api.stlouisfed.org/fred';
