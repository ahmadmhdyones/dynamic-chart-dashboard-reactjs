const siteUrl = import.meta.env.VERCEL_URL ? `https://${import.meta.env.VERCEL_URL}` : import.meta.env.VITE_APP_URL;

export const SITE = {
  description: 'A dashboard to display dynamic charts using React.',
  name: 'Dynamic Chart Dashboard React',
  url: siteUrl,
};

export type ConfigSite = typeof SITE;
