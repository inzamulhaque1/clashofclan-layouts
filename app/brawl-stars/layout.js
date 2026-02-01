export const metadata = {
  title: {
    default: 'Brawl Stars Tier List & Guides 2026 | Best Brawlers Meta',
    template: '%s | Brawl Stars Hub'
  },
  description: 'Complete Brawl Stars tier list 2026 with win rates, best brawlers, meta guides, and strategies. Updated daily with competitive rankings.',
  keywords: ['brawl stars', 'brawl stars tier list', 'best brawlers', 'brawl stars meta', 'brawl stars 2026', 'brawl stars guides', 'brawl stars strategies'],
  openGraph: {
    title: 'Brawl Stars Tier List & Guides 2026',
    description: 'Complete Brawl Stars tier list with win rates, best brawlers, and meta guides. Updated daily.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Game365Hub',
    images: [
      {
        url: 'https://cdn.brawlify.com/brawler/Pierce.png',
        width: 256,
        height: 256,
        alt: 'Brawl Stars Tier List 2026'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brawl Stars Tier List & Guides 2026',
    description: 'Complete Brawl Stars tier list with win rates and meta guides.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/brawl-stars'
  }
};

export default function BrawlStarsLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}
