import { ItemListJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { getTopBrawlers } from '@/lib/brawl-stars/brawlers';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'Brawl Stars Tier List February 2026 | Best Brawlers Ranked',
  description: 'Complete Brawl Stars tier list for February 2026. See which brawlers are S-tier, win rates, pick rates, and meta analysis. Updated daily with competitive data.',
  keywords: ['brawl stars tier list', 'best brawlers 2026', 'brawl stars meta', 'brawl stars rankings', 's tier brawlers', 'brawl stars competitive'],
  openGraph: {
    title: 'Brawl Stars Tier List February 2026 | Best Brawlers Ranked',
    description: 'Complete Brawl Stars tier list with win rates and competitive rankings. Updated daily.',
    type: 'article',
    images: [
      {
        url: 'https://cdn.brawlify.com/brawler/Pierce.png',
        width: 256,
        height: 256,
        alt: 'Brawl Stars Tier List 2026'
      }
    ]
  },
  alternates: {
    canonical: '/brawl-stars/tier-list'
  }
};

export default function TierListLayout({ children }) {
  // Get top brawlers for ItemList schema
  const topBrawlers = getTopBrawlers(20);
  const itemListItems = topBrawlers.map(brawler => ({
    name: brawler.name,
    description: `${brawler.tier} Tier - ${brawler.winRate}% win rate`,
    url: `${baseUrl}/brawl-stars/brawlers/${brawler.id}`
  }));

  return (
    <>
      {/* JSON-LD Structured Data */}
      <ItemListJsonLd
        name="Brawl Stars Tier List 2026"
        description="Complete ranking of all Brawl Stars brawlers based on win rate and competitive viability"
        items={itemListItems}
        url={`${baseUrl}/brawl-stars/tier-list`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Brawl Stars", url: `${baseUrl}/brawl-stars` },
          { name: "Tier List", url: `${baseUrl}/brawl-stars/tier-list` }
        ]}
      />
      {children}
    </>
  );
}
