import { ItemListJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { getTopCards } from '@/lib/clash-royale/cards';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'Clash Royale Tier List February 2026 | Best Cards Ranked',
  description: 'Complete Clash Royale card tier list for February 2026. See which cards are S-tier, win rates, use rates, and meta analysis. Updated with every balance change.',
  keywords: ['clash royale tier list', 'best cards 2026', 'clash royale meta', 'clash royale rankings', 's tier cards', 'clash royale competitive'],
  openGraph: {
    title: 'Clash Royale Tier List February 2026 | Best Cards Ranked',
    description: 'Complete Clash Royale tier list with win rates and competitive rankings.',
    type: 'article',
  },
  alternates: {
    canonical: '/clash-royale/tier-list'
  }
};

export default function TierListLayout({ children }) {
  const topCards = getTopCards(20);
  const itemListItems = topCards.map(card => ({
    name: card.name,
    description: `${card.tier} Tier - ${card.winRate}% win rate`,
    url: `${baseUrl}/clash-royale/cards/${card.id}`
  }));

  return (
    <>
      <ItemListJsonLd
        name="Clash Royale Tier List 2026"
        description="Complete ranking of all Clash Royale cards based on win rate and competitive viability"
        items={itemListItems}
        url={`${baseUrl}/clash-royale/tier-list`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` },
          { name: "Tier List", url: `${baseUrl}/clash-royale/tier-list` }
        ]}
      />
      {children}
    </>
  );
}
