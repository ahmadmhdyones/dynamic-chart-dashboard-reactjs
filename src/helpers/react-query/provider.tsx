import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { configQuery } from '@/configs/global.config';

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      networkMode: 'offlineFirst',
      retry: configQuery.retryCount,
      throwOnError: false,
    },
    queries: {
      networkMode: 'offlineFirst',
      refetchInterval: false,
      retry: configQuery.retryCount,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      staleTime: configQuery.staleTime,
      throwOnError: false,
    },
  },
});

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default Provider;
