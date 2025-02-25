export const FRED_BASE_URL = '/api/fred'; // FRED API base URL - Using our proxy to avoid CORS issues
export const FRED_API_URL = 'https://api.stlouisfed.org/fred'; // FRED API base URL - Using the official URL
export const FRED_API_KEY = import.meta.env.VITE_FRED_KEY;

export const configDashboard = {
  initialSidebarCollapsed: true,
} as const;
