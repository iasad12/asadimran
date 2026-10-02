import { MetadataRoute } from 'next';

export const dynamic = 'force-static'; // This fixes the previous "page data" error

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://asadimran.pages.dev/sitemap.xml',
  };
}