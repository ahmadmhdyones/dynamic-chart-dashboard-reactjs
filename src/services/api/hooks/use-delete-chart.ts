import { toast } from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { chartStorage } from '@/services/storage';
import { queryKeys } from '@/helpers/react-query/query-keys.enum';

// ----------------------------------------------------------------------

export const useDeleteChart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      return chartStorage.delete(id);
    },
    onError: (error, _id) => {
      console.error('Failed to delete chart:', error);
      toast.error('Failed to delete chart');
    },
    onSuccess: (_, id) => {
      // Remove the chart from the cache
      queryClient.removeQueries({ queryKey: [queryKeys.chart(id)] });

      // Invalidate the charts list query to refetch
      queryClient.invalidateQueries({ queryKey: [queryKeys.charts()] });
    },
  });
};
