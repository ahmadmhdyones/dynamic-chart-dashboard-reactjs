import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';

import '@/global.css';
import { router } from '@/routes';
import ReactQueryProvider from '@/helpers/react-query';

// ----------------------------------------------------------------------

createRoot(document.getElementById('root')!).render(
  <ReactQueryProvider>
    <RouterProvider router={router} />
  </ReactQueryProvider>
);
