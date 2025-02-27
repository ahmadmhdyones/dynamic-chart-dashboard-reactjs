import { useMutation, useQueryClient } from '@tanstack/react-query';

import type { Chart } from '@/types/chart.types';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

interface UpdateChartParams {
  id: string;
  data: Partial<Chart>;
}

export const useUpdateChart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ data, id }: UpdateChartParams) => {
      return chartStorage.update(id, data);
    },
    onSuccess: updatedChart => {
      // Update the specific chart in the cache
      queryClient.setQueryData([queryKeys.chart(updatedChart.id)], updatedChart);

      // Invalidate the charts list query to refetch
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts()] });
    },
  });
};
