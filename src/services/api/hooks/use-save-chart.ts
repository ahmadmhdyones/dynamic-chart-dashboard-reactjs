import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Chart } from '@/types/chart.types';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

export const useSaveChart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (chart: Omit<Chart, 'id'>) => {
      return chartStorage.create(chart);
    },
    mutationKey: [queryKeys.saveChart()],
    onSuccess: () => {
      // Invalidate the charts list query to refetch
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts()] });
    },
  });
};
