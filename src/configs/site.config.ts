const siteUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : import.meta.env.VITE_APP_URL || 'http://localhost:3000';

export const SITE = {
  description: import.meta.env.VITE_APP_DESCRIPTION || 'A dashboard to display dynamic charts using React.',
  name: import.meta.env.VITE_APP_NAME || 'Dynamic Chart Dashboard React',
  url: siteUrl,
};

export type ConfigSite = typeof SITE;
