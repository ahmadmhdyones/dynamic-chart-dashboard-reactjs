import { useQuery } from '@tanstack/react-query';

import type { SeriesConfig } from '@/types/series-config.types';
import type { Chart, ChartDataPoint } from '@/types/chart.types';

import fredService from '@/services/api/fred.service';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

interface UseChartDataProps {
  chart: Chart;
  enabled?: boolean;
}

export const useChartData = ({ chart, enabled = true }: UseChartDataProps) => {
  const { series, timeFrequency } = chart;

  return useQuery({
    enabled: enabled && series.length > 0,
    queryFn: async () => {
      if (series.length === 0) return [];

      // Create a map to store series data by date
      const dataByDate: Record<string, ChartDataPoint> = {};

      // Configure API parameters - using FRED's default limits
      const apiParams = {
        frequency: timeFrequency,
        sort_order: 'desc' as const,
        units: 'lin' as const, // Linear units (no transformation)
        // FRED API defaults to 100,000 observations which is more than enough
      };

      // Fetch data for each series
      const seriesDataPromises = series.map(async (s: SeriesConfig) => {
        const response = await fredService.getSeriesData({
          ...apiParams,
          series_id: s.id,
        });

        // Process the observations
        response.observations.forEach(obs => {
          const { date } = obs;

          if (!dataByDate[date]) {
            dataByDate[date] = { date };
          }

          // Add the value for this series
          // Convert string value to number, or use 0 if not a valid number
          const value = parseFloat(obs.value);
          dataByDate[date][s.id] = isNaN(value) ? 0 : value;
        });
      });

      // Wait for all series data to be fetched
      await Promise.all(seriesDataPromises);

      // Convert the map to an array and sort by date
      const chartDataArray = Object.values(dataByDate).sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      );

      return chartDataArray;
    },
    queryKey: [queryKeys.chartData(), series.length, series.map(s => s.id).join(','), timeFrequency],
  });
};
