import { useQuery } from '@tanstack/react-query';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

export const useCharts = () => {
  return useQuery({
    queryFn: async () => {
      return chartStorage.getAll();
    },
    queryKey: [queryKeys.charts()],
  });
};
