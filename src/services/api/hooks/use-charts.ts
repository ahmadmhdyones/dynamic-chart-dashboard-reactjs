import { useSearchParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import type { ChartType } from '@/types/chart-type.enum';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';
import { QueryParams } from '@/helpers/map-params/query-params.enum';

// ----------------------------------------------------------------------

export const useCharts = () => {
  const [searchParams] = useSearchParams();
  const chartType = searchParams.get(QueryParams.ChartType) as ChartType | null;

  return useQuery({
    queryFn: async () => {
      const charts = await chartStorage.getAll();

      // Filter charts by type if chartType is provided
      if (chartType) {
        return charts.filter(chart => chart.type === chartType);
      }

      return charts;
    },
    queryKey: [queryKeys.charts(chartType ?? undefined)],
  });
};
