/* eslint-disable perfectionist/sort-objects */

import { lazy, Suspense } from 'react';
import { Outlet, Navigate, createBrowserRouter } from 'react-router';

import App from '@/app';
import { paths } from '@/helpers/map-routes';
import { RouteParams } from '@/helpers/map-params';
import AppLoader from '@/components/ui/app-loader';

// ----------------------------------------------------------------------

const LayoutDashboard = lazy(() => import('@/pages/dashboard/layout'));
const PageDashboardOverview = lazy(() => import('@/pages/dashboard/(overview)/page'));
const PageCharts = lazy(() => import('@/pages/dashboard/charts/page'));
const PageChartsNew = lazy(() => import('@/pages/dashboard/charts/new/page'));
const PageChartsEdit = lazy(() => import('@/pages/dashboard/charts/[id]/edit/page'));
const PageSettings = lazy(() => import('@/pages/dashboard/settings/page'));
const Page404 = lazy(() => import('@/pages/not-found'));

// ----------------------------------------------------------------------

const routesDashboard = [
  {
    path: 'dashboard',
    element: (
      <Suspense fallback={<AppLoader />}>
        <LayoutDashboard>
          <Outlet />
        </LayoutDashboard>
      </Suspense>
    ),
    children: [
      { index: true, Component: PageDashboardOverview },
      { path: 'settings', Component: PageSettings },
      {
        path: 'charts',
        Component: PageCharts,
        children: [
          { path: 'new', Component: PageChartsNew },
          { path: `:${RouteParams.ChartId}/edit`, Component: PageChartsEdit },
        ],
      },
    ],
  },
];

const routesMain = [
  {
    element: (
      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      { path: 'not-found', Component: Page404 },
      { path: '500', Component: Page404 },
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
      { path: '/', element: <Navigate replace to={paths.dashboard.root.to()} /> },

      ...routesDashboard,
      ...routesMain,

      // No match 404
      { path: '*', element: <Navigate replace to={paths.page404.to()} /> },
    ],
  },
]);

export default router;
