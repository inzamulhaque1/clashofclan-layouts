import { BreadcrumbJsonLd, WebsiteJsonLd, FAQJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: {
    default: 'Clash Royale Guide 2026 | Best Meta Decks, Tier List & Pro Strategies',
    template: '%s | Clash Royale - Game365Hub'
  },
  description: 'Master Clash Royale in 2026 with our complete guide. Best meta decks with 53%+ win rates, card tier list updated for Season 56, pro strategies for Hog Cycle, Log Bait, Golem Beatdown & more. Climb to Ultimate Champion!',
  keywords: [
    'clash royale',
    'clash royale guide 2026',
    'clash royale tier list',
    'clash royale best decks',
    'clash royale meta decks 2026',
    'clash royale cards',
    'clash royale strategies',
    'hog cycle deck 2026',
    'log bait deck',
    'golem beatdown deck',
    'pekka bridge spam',
    'clash royale tips',
    'clash royale elixir management',
    'best cards clash royale',
    'clash royale win rates',
    'clash royale season 56',
    'clash royale beginner guide',
    'ultimate champion clash royale'
  ],
  openGraph: {
    title: 'Clash Royale Guide 2026 | Best Meta Decks & Tier List',
    description: 'Master Clash Royale with meta decks, tier lists, and pro strategies. Updated for Season 56 with 53%+ win rate decks.',
    url: `${baseUrl}/clash-royale`,
    siteName: 'Game365Hub',
    images: [{
      url: 'https://etgeekera.com/wp-content/uploads/2016/05/clash-royale-banner.jpg',
      width: 1200,
      height: 630,
      alt: 'Clash Royale 2026 - Best Decks, Tier Lists & Guides'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clash Royale Guide 2026 | Best Meta Decks & Tier List',
    description: 'Master Clash Royale with meta decks, tier lists, and pro strategies.',
    images: ['https://etgeekera.com/wp-content/uploads/2016/05/clash-royale-banner.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}/clash-royale`
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
};

const homepageFaqs = [
  {
    question: "What is the best deck in Clash Royale 2026?",
    answer: "The best decks in 2026 are 2.6 Hog Cycle (52.8% win rate), Classic Log Bait (53.2% win rate), and PEKKA Bridge Spam (52.1% win rate). The meta favors fast cycle and bait decks with low elixir costs."
  },
  {
    question: "Which cards are S Tier in Clash Royale?",
    answer: "Current S Tier cards include Archer Queen, Little Prince, Hog Rider, The Log, Goblin Barrel, and Fireball. These cards have the highest win rates above 53% in Grand Challenges."
  },
  {
    question: "How do I climb to Ultimate Champion?",
    answer: "Focus on mastering one meta deck, learn elixir counting, practice positive elixir trades, and study your matchups. Watch pro players and review your replays to improve."
  },
  {
    question: "Is Clash Royale pay to win?",
    answer: "Clash Royale is skill-based at tournament standard levels. While card levels matter in ladder, you can compete in challenges and tournaments with max-level cards regardless of spending."
  }
];

export default function ClashRoyaleLayout({ children }) {
  return (
    <>
      <WebsiteJsonLd
        name="Game365Hub - Clash Royale"
        url={`${baseUrl}/clash-royale`}
        description="Master Clash Royale with the best meta decks, card tier lists, and pro strategies for 2026."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Clash Royale", url: `${baseUrl}/clash-royale` }
        ]}
      />
      <FAQJsonLd faqs={homepageFaqs} />
      {children}
    </>
  );
}
