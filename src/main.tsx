import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '@/stores';
import { router } from '@/routes';
import ThemeProvider from '@/theme';
import ReactQueryProvider from '@/helpers/react-query';

// ----------------------------------------------------------------------

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <StoreProvider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </ReactQueryProvider>
);
