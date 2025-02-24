import type { Navigation } from '@toolpad/core/AppProvider';

import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import BarChartIcon from '@mui/icons-material/BarChart';

import { paths } from '@/helpers/map-routes';

// ----------------------------------------------------------------------

export const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Dashboard' },
  {
    icon: <HomeIcon />,
    kind: 'page',
    segment: paths.dashboard.root.to().slice(1),
    title: 'Dashboard',
  },
  {
    icon: <BarChartIcon />,
    kind: 'page',
    pattern: `${paths.dashboard.charts.root.to().slice(1)}{/:segment}*`,
    segment: paths.dashboard.charts.root.to().slice(1),
    title: 'Charts',
  },
  {
    icon: <SettingsIcon />,
    kind: 'page',
    pattern: `${paths.dashboard.settings.to().slice(1)}{/:segment}*`,
    segment: paths.dashboard.settings.to().slice(1),
    title: 'Settings',
  },
];
