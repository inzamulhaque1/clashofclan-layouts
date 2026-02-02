import { ItemListJsonLd, BreadcrumbJsonLd, FAQJsonLd, ArticleJsonLd } from '@/components/JsonLd';
import { getTopCards } from '@/lib/clash-royale/cards';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'Clash Royale Tier List February 2026 | All Cards Ranked S to D',
  description: 'Complete Clash Royale card tier list for February 2026. All 100+ cards ranked from S to D tier based on win rates, use rates & Grand Challenge data. Archer Queen, Little Prince, Hog Rider top the meta. Updated for Season 56!',
  keywords: [
    'clash royale tier list',
    'clash royale tier list 2026',
    'best cards clash royale',
    'clash royale card rankings',
    'clash royale meta cards',
    's tier cards clash royale',
    'clash royale win rates',
    'clash royale use rates',
    'strongest cards clash royale',
    'clash royale season 56 meta',
    'archer queen tier',
    'hog rider tier',
    'clash royale competitive cards',
    'clash royale grand challenge meta',
    'top ladder cards clash royale'
  ],
  openGraph: {
    title: 'Clash Royale Tier List February 2026 | All Cards Ranked',
    description: 'Complete tier list with win rates. 100+ cards ranked S to D based on competitive data.',
    url: `${baseUrl}/clash-royale/tier-list`,
    siteName: 'Game365Hub',
    images: [{
      url: 'https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/clash-royale.jpg',
      width: 1200,
      height: 630,
      alt: 'Clash Royale Card Tier List 2026 - All Cards Ranked'
    }],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clash Royale Tier List 2026 | All Cards Ranked',
    description: 'Complete tier list with win rates. 100+ cards ranked S to D tier.',
    images: ['https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/clash-royale.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}/clash-royale/tier-list`
  }
};

const tierListFaqs = [
  {
    question: "What is S Tier in Clash Royale?",
    answer: "S Tier contains the most overpowered cards in the current meta with 53%+ win rates. These include Archer Queen, Little Prince, Hog Rider, The Log, and Goblin Barrel. These are must-include cards in competitive decks."
  },
  {
    question: "How often is the tier list updated?",
    answer: "Our tier list is updated with every balance change and major meta shift. We use data from RoyaleAPI including win rates and use rates from Grand Challenges and top ladder play (7000+ trophies)."
  },
  {
    question: "Should I only use S Tier cards?",
    answer: "No! Deck synergy matters more than individual card tiers. A well-built deck with A and B tier cards can beat random S tier cards. Focus on building a balanced deck with good win conditions and counters."
  },
  {
    question: "What determines a card's tier ranking?",
    answer: "We consider win rate (most important), use rate, versatility across different archetypes, and performance at top ladder. Cards that perform well in multiple decks rank higher than niche cards."
  },
  {
    question: "Are legendary cards always better?",
    answer: "No! Rarity doesn't equal power. Common cards like Skeletons and Knight, and rare cards like Musketeer and Hog Rider are top tier. Legendaries just have unique abilities, not necessarily better stats."
  },
  {
    question: "What are the worst cards in Clash Royale?",
    answer: "D Tier cards include Heal Spirit, Barbarian Hut, and Mirror. These cards have below 46% win rates and are generally outclassed by alternatives. They need buffs to become meta-viable."
  }
];

export default function TierListLayout({ children }) {
  const topCards = getTopCards(20);
  const itemListItems = topCards.map(card => ({
    name: card.name,
    description: `${card.tier} Tier - ${card.winRate}% win rate`,
    url: `${baseUrl}/clash-royale/cards/${card.id}`
  }));

  const publishDate = "2026-02-01";
  const updateDate = "2026-02-02";

  return (
    <>
      <ArticleJsonLd
        title="Clash Royale Card Tier List 2026 - Complete Rankings"
        description="Complete Clash Royale card tier list for 2026. All cards ranked S to D tier based on win rates and competitive data from Grand Challenges."
        image="https://static0.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/clash-royale.jpg"
        datePublished={publishDate}
        dateModified={updateDate}
        url={`${baseUrl}/clash-royale/tier-list`}
      />
      <ItemListJsonLd
        name="Clash Royale Tier List 2026"
        description="Complete ranking of all Clash Royale cards based on win rate and competitive viability"
        items={itemListItems}
        url={`${baseUrl}/clash-royale/tier-list`}
      />
      <FAQJsonLd faqs={tierListFaqs} />
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
