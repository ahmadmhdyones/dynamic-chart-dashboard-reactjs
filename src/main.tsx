import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { Provider as StoreProvider } from 'react-redux';

import './global.css';
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
        <Toaster position='top-right' reverseOrder={false} />
      </ThemeProvider>
    </StoreProvider>
  </ReactQueryProvider>
);
