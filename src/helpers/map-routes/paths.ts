import type { IChart } from '@/types/models/chart.model';

import { PageType } from './pages.enum';

// ----------------------------------------------------------------------

const ROOTS = {
  DASHBOARD: '/dashboard',
  HOME: '/',
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
          to: (chartId: IChart['id']) => `${ROOTS.DASHBOARD}/charts/${chartId}/edit`,
        },
      },
      new: { id: PageType.ChartsNewPage, to: () => `${ROOTS.DASHBOARD}/charts/new` },
      root: { id: PageType.ChartsPage, to: () => `${ROOTS.DASHBOARD}/charts` },
    },
    root: { id: PageType.DashboardOverviewPage, to: () => `${ROOTS.DASHBOARD}` },
    settings: {
      id: PageType.SettingsPage,
      to: () => `${ROOTS.DASHBOARD}/settings`,
    },
  },
  root: { id: PageType.HomePage, to: () => `${ROOTS.HOME}` },
} as const;
