import { SITE_CONFIG } from '@/lib/seo';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin'],
      },
    ],
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
}
