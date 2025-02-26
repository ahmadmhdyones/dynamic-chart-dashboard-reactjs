import type { Chart } from '@/types/chart.types';
import type { ChartType } from '@/types/chart-type.enum';

import { PageType } from './pages.enum';

// ----------------------------------------------------------------------

const ROOTS = {
  AUTH: '/auth',
  DASHBOARD: '/dashboard',
};

// ----------------------------------------------------------------------

/**
 * Application Route Mapper
 *
 * Single source of truth for all application routes:
 * - Prevents hardcoded URLs across components
 * - Provides type-safe route generation with parameters
 * - Centralizes route management for easier maintenance
 *
 * Usage: paths.dashboard.charts.root.to()
 * Instead of: '/dashboard/charts'
 */

export const paths = {
  dashboard: {
    charts: {
      id: {
        edit: {
          id: PageType.ChartsEditPage,
          to: (chartId: Chart<ChartType>['id']) => `${ROOTS.DASHBOARD}/charts/${chartId}/edit`,
        },
      },
      new: { id: PageType.ChartsNewPage, to: () => `${ROOTS.DASHBOARD}/charts/new` },
      root: { id: PageType.ChartsPage, to: () => `${ROOTS.DASHBOARD}/charts` },
    },
    root: { id: PageType.OverviewPage, to: () => `${ROOTS.DASHBOARD}` },
  },
  page404: { id: PageType.Page404, to: () => `/not-found` },
  root: { id: PageType.HomePage, to: () => `/` },
} as const;
