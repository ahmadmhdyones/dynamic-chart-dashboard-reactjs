import { SITE } from './site.config';

// ----------------------------------------------------------------------

export const APP_METADATA = {
  author: 'Ahmad Yones',
  description: SITE.description,
  keywords: 'React, MUI, TypeScript, Recharts, FRED API, Dynamic Charts',
  ogImage: '/assets/images/dynamic-chart-dashboard-reactjs.og.jpg',
  title: SITE.name,
} as const;
