import type { Chart } from '@/types/chart.types';
import type { ChartType } from '@/types/chart-type.enum';
import type { FredFrequencyShort } from '@/types/fred-freq.enum';

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
  chart: (id: Chart['id']) => `chart-${id}`,
  chartData: (seriesLength: number, seriesIds: string, timeFrequency: FredFrequencyShort) =>
    `chart-data-${seriesLength}-${seriesIds}-${timeFrequency}`,
  charts: (chartType?: ChartType) => (chartType ? `charts-${chartType}` : 'charts'),
  deleteChart: (id: string) => `delete-chart-${id}`,
  fredSeries: (searchTerm: string, page: number, pageSize: number) => `fred-series-${searchTerm}-${page}-${pageSize}`,
  saveChart: () => 'save-chart',
  updateChart: (id: string) => `update-chart-${id}`,
} as const;
