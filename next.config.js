/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Cloudflare Pages
  output: 'standalone',

  images: {
    // Use unoptimized for Cloudflare (or use Cloudflare Images)
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'clashofclans-layouts.com',
      },
      {
        protocol: 'https',
        hostname: 'cocbases.com',
      },
      {
        protocol: 'https',
        hostname: 'coc.guide',
      },
    ],
  },

  // SEO redirects: old URLs -> new game-prefixed URLs
  async redirects() {
    return [
      // Town Hall redirects
      {
        source: '/th',
        destination: '/clash-of-clans/th',
        permanent: true,
      },
      {
        source: '/th/:level',
        destination: '/clash-of-clans/th/:level',
        permanent: true,
      },

      // Builder Hall redirects
      {
        source: '/bh',
        destination: '/clash-of-clans/bh',
        permanent: true,
      },
      {
        source: '/bh/:level',
        destination: '/clash-of-clans/bh/:level',
        permanent: true,
      },

      // Base detail redirects
      {
        source: '/bases/:path*',
        destination: '/clash-of-clans/bases/:path*',
        permanent: true,
      },

      // Guides redirects
      {
        source: '/guides',
        destination: '/clash-of-clans/guides',
        permanent: true,
      },
      {
        source: '/guides/:slug',
        destination: '/clash-of-clans/guides/:slug',
        permanent: true,
      },

      // Search redirect
      {
        source: '/search',
        destination: '/clash-of-clans/search',
        permanent: true,
      },

      // Type filter redirect
      {
        source: '/type/:type',
        destination: '/clash-of-clans/search?type=:type',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
