import { MetadataRoute } from 'next';
import config from '@/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${config.domainName}`;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/panel/',
        '/api/',
        '/_next/',
        '/static/',
        '/*.json$',
        '/*.xml$',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

