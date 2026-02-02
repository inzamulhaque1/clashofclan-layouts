import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'All Free Fire Characters 2026 | Abilities, Roles & Best Builds',
  description: 'Complete database of all 40+ Free Fire characters with abilities, stats, roles and recommended builds. Find DJ Alok, Chrono, Moco, K, Skyler and more with detailed guides.',
  keywords: [
    'free fire characters',
    'free fire abilities',
    'best free fire characters 2026',
    'dj alok ability',
    'chrono free fire',
    'moco hacker eye',
    'free fire character list',
    'free fire tier list characters',
    'free fire meta characters',
    'active abilities free fire',
    'passive abilities free fire',
    'k free fire',
    'skyler free fire',
    'free fire character combo'
  ],
  openGraph: {
    title: 'All Free Fire Characters 2026 | Complete Abilities Guide',
    description: 'Database of 40+ Free Fire characters with abilities, roles and best builds. Find the perfect character for your playstyle.',
    url: `${baseUrl}/free-fire/characters`,
    siteName: 'Game365Hub',
    images: [
      {
        url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Free Fire Characters Guide 2026'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Free Fire Characters 2026',
    description: 'Complete guide with 40+ characters, abilities and best combos.',
    images: ['https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}/free-fire/characters`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const characterFaqs = [
  {
    question: "How many characters are in Free Fire 2026?",
    answer: "Free Fire has over 40 playable characters in 2026, each with unique abilities. New characters are added regularly through updates and events."
  },
  {
    question: "What's the difference between Active and Passive abilities?",
    answer: "Active abilities must be manually activated and have cooldowns (like Chrono's Time Turner shield). Passive abilities are always active without needing activation (like Moco's Hacker's Eye enemy tagging)."
  },
  {
    question: "Which character roles are best for beginners?",
    answer: "Support characters like Kapella and Olivia are great for beginners as they help the team. Utility characters like Kelly and Maxim are also beginner-friendly with simple, always-active abilities."
  }
];

export default function CharactersLayout({ children }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Free Fire", url: `${baseUrl}/free-fire` },
          { name: "Characters", url: `${baseUrl}/free-fire/characters` }
        ]}
      />
      <FAQJsonLd faqs={characterFaqs} />
      {children}
    </>
  );
}
