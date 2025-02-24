/* eslint-disable perfectionist/sort-objects */

import { lazy, Suspense } from 'react';
import { Outlet, Navigate, createBrowserRouter } from 'react-router';

import App from '@/app';
import { paths } from '@/helpers/map-routes';
import { RouteParams } from '@/helpers/map-params';

// ----------------------------------------------------------------------

const PageDashboardOverview = lazy(() => import('@/pages/dashboard/(overview)/page'));
const PageCharts = lazy(() => import('@/pages/dashboard/charts/page'));
const PageChartsNew = lazy(() => import('@/pages/dashboard/charts/new/page'));
const PageChartsEdit = lazy(() => import('@/pages/dashboard/charts/[id]/edit/page'));
const PageSettings = lazy(() => import('@/pages/dashboard/settings/page'));

// ----------------------------------------------------------------------

const routesDashboard = [
  {
    path: 'dashboard',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { index: true, Component: PageDashboardOverview },
      {
        path: 'charts',
        Component: PageCharts,
        children: [
          { path: 'new', Component: PageChartsNew },
          { path: `:${RouteParams.ChartId}/edit`, Component: PageChartsEdit },
        ],
      },
      { path: 'settings', Component: PageSettings },
    ],
  },
];

const router = createBrowserRouter([
  {
    element: (
      <App>
        <Outlet />
      </App>
    ),
    children: [
      {
        path: '/',
        element: <Navigate replace to={paths.dashboard.root.to()} />,
      },

      ...routesDashboard,
    ],
  },
]);

export default router;
