// SEO Configuration and Utilities

export const SITE_CONFIG = {
  name: 'CoC Base Layouts',
  title: 'Best Clash of Clans Base Layouts 2026 - TH3 to TH18 Copy Links',
  description: 'Download the best Clash of Clans base layouts for TH3-TH18 and BH3-BH10. War bases, farming bases, trophy bases, CWL bases with one-click copy links. Anti 3 star designs updated daily!',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://clashofclan-layouts.vercel.app',
  ogImage: '/icon.jpg',
  twitter: '@cocbases',
  locale: 'en_US',
};

/**
 * Generate metadata for a page
 */
export function generatePageMeta({ title, description, path = '', image }) {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const fullUrl = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || SITE_CONFIG.ogImage;

  return {
    title: fullTitle,
    description: description || SITE_CONFIG.description,
    keywords: [
      'Clash of Clans base',
      'CoC base layout',
      'war base',
      'farming base',
      'trophy base',
      'CWL base',
      'anti 3 star base',
      'TH18 base',
      'TH17 base',
      'TH16 base',
      'TH15 base',
      'TH14 base',
      'TH13 base',
      'TH12 base',
      'TH11 base',
      'TH10 base',
      'TH9 base',
      'Builder Hall base',
      'BH10 base',
      'copy base link',
      'best CoC bases 2026',
      'Clash of Clans layout',
      'base design',
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      type: 'website',
      locale: SITE_CONFIG.locale,
      url: fullUrl,
      title: fullTitle,
      description: description || SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: description || SITE_CONFIG.description,
      images: [ogImage],
      creator: SITE_CONFIG.twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/icon.jpg',
      shortcut: '/icon.jpg',
      apple: '/icon.jpg',
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
  };
}

/**
 * Generate JSON-LD structured data for a base
 */
export function generateBaseStructuredData(base) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: `${base.hallType}${base.hallLevel} ${base.baseType} Base #${base.baseNumber}`,
    description: `Best ${base.baseType} base layout for Town Hall ${base.hallLevel} in Clash of Clans. Copy this base with one click!`,
    image: base.originalImageUrl || base.thumbnailUrl,
    datePublished: base.scrapedAt,
    author: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
    },
  };
}

/**
 * Generate JSON-LD for the website
 */
export function generateWebsiteStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.url}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_CONFIG.url}${item.path}`,
    })),
  };
}
