// SEO Configuration and Utilities

export const SITE_CONFIG = {
  name: 'Game365Hub',
  title: 'Game365Hub - Multi-Game Resource Hub | Bases, Guides, Tier Lists',
  description: 'Your ultimate gaming resource hub. Base layouts, tier lists, guides, and strategies for Clash of Clans, Brawl Stars, Clash Royale, and more mobile games.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.game365hub.com',
  // Default OG image - replace with custom og-image.png in public folder later
  ogImage: 'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2023/04/clash-royalee.jpg?w=1200&h=630&fit=crop',
  twitter: '@game365hub',
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
      icon: '/favicon.png',
      shortcut: '/favicon.png',
      apple: '/favicon.png',
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || '',
    },
    other: {
      'p:domain_verify': '74c21baffa489f83e091da0337169028',
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

/**
 * Generate FAQPage JSON-LD structured data
 * @param {Array} faqData - array of { question, answer }
 */
export function generateFAQStructuredData(faqData) {
  if (!faqData || faqData.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate HowTo JSON-LD structured data for copying a base
 * @param {string} hallType - 'TH' or 'BH'
 * @param {number} hallLevel - level number
 * @param {string} baseType - war/farm/trophy/etc.
 */
export function generateHowToStructuredData(hallType, hallLevel, baseType) {
  const typeLabel = baseType.charAt(0).toUpperCase() + baseType.slice(1);
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Copy This ${hallType}${hallLevel} ${typeLabel} Base Layout`,
    description: `Step-by-step guide to import this ${hallType}${hallLevel} ${baseType} base layout into Clash of Clans using the copy link feature.`,
    totalTime: 'PT1M',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Copy the base link',
        text: 'Click the "Copy Base Link" button on this page to copy the base layout link to your clipboard.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Open Clash of Clans',
        text: 'Open the Clash of Clans app on your mobile device.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Go to village editor',
        text: 'Navigate to your village and tap the layout editor icon.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Create new layout',
        text: 'Tap "New Layout" or select an empty layout slot.',
      },
      {
        '@type': 'HowToStep',
        position: 5,
        name: 'Import the base',
        text: 'The game will automatically detect the copied link and prompt you to import the base layout.',
      },
    ],
  };
}
