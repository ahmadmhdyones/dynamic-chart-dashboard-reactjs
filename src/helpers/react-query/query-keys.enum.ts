import type { IChart } from '@/types/models/chart.types';

// ----------------------------------------------------------------------

/**
 * React Query Keys Map
 *
 * Centralized key generators for React Query operations:
 * - Ensures consistent cache keys across the application
 * - Provides type-safe key generation with proper parameters
 * - Groups related queries (e.g., all chart-related keys)
 */

export const queryKeys = {
  // Charts
  chart: (id: IChart['id']) => `chart-${id}`,
  charts: () => 'charts',
} as const;
