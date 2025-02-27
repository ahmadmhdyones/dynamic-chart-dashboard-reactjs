import { useQuery } from '@tanstack/react-query';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

interface UseChartProps {
  id: string;
  enabled?: boolean;
}

export const useChart = ({ enabled = true, id }: UseChartProps) => {
  return useQuery({
    enabled,
    queryFn: async () => {
      const chart = await chartStorage.getById(id);
      if (!chart) {
        throw new Error(`Chart with ID ${id} not found`);
      }
      return chart;
    },
    queryKey: [queryKeys.chart(id)],
  });
};
