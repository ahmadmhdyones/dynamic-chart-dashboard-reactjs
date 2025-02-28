import type { Navigation } from '@toolpad/core/AppProvider';

import HomeIcon from '@mui/icons-material/Home';
import BarChartIcon from '@mui/icons-material/BarChart';

import { paths } from '@/helpers/map-routes';

// ----------------------------------------------------------------------

export const NAVIGATION: Navigation = [
  { kind: 'header', title: 'Dashboard' },
  {
    icon: <HomeIcon />,
    kind: 'page',
    segment: paths.dashboard.root.to().slice(1),
    title: 'Overview',
  },
  {
    icon: <BarChartIcon />,
    kind: 'page',
    pattern: `${paths.dashboard.charts.root.to().slice(1)}{/:segment}*`,
    segment: paths.dashboard.charts.root.to().slice(1),
    title: 'Charts',
  },
];
