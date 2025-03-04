import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Chart } from '@/types/chart.types';
import { ChartType } from '@/types/chart-type.enum';

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
    onError: (error, _chart) => {
      console.error('Failed to save chart:', error);
      toast.error('Failed to save chart');
    },
    onSuccess: () => {
      // Invalidate the charts list query to refetch
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts()] });
      Object.values(ChartType).forEach(type => {
        queryClient.invalidateQueries({ queryKey: [queryKeys.charts(type)] });
      });
    },
  });
};
