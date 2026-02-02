import { BreadcrumbJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'Clash Royale Tier List & Guides 2026 | Best Cards & Meta Decks',
  description: 'Complete Clash Royale resource with card tier lists, meta deck guides, and strategies to reach Ultimate Champion. Updated for 2026 meta.',
  keywords: [
    'clash royale tier list',
    'best clash royale cards',
    'clash royale meta decks',
    'clash royale guide 2026',
    'clash royale strategies',
    'best decks clash royale'
  ],
  openGraph: {
    title: 'Clash Royale Tier List & Guides 2026',
    description: 'Complete tier lists, meta decks, and strategies to dominate Clash Royale.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clash Royale Tier List & Guides 2026',
    description: 'Best cards, meta decks, and pro strategies.',
  },
  alternates: {
    canonical: '/clash-royale'
  }
};

export default function ClashRoyaleLayout({ children }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` }
        ]}
      />
      {children}
    </>
  );
}
