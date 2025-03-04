import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { configQuery } from '@/configs/global.config';

// ----------------------------------------------------------------------

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      networkMode: 'offlineFirst',
      retry: configQuery.retryCount,
      throwOnError: configQuery.throwOnError,
    },
    queries: {
      networkMode: 'offlineFirst',
      refetchInterval: false,
      refetchOnWindowFocus: configQuery.refetchOnWindowFocus,
      retry: configQuery.retryCount,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
      staleTime: configQuery.staleTime,
      throwOnError: configQuery.throwOnError,
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
