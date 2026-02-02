import { BreadcrumbJsonLd, WebsiteJsonLd, FAQJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: {
    default: 'Free Fire Characters & Weapons Guide 2026 | Best Meta Combos',
    template: '%s | Free Fire Hub'
  },
  description: 'Complete Free Fire guide 2026 with all characters, abilities, weapons stats, and meta combos. Find the best characters like DJ Alok, Chrono, and Skyler with detailed ability breakdowns.',
  keywords: [
    'free fire',
    'free fire characters',
    'free fire weapons',
    'best characters free fire',
    'free fire guide 2026',
    'free fire abilities',
    'dj alok',
    'chrono free fire',
    'free fire meta',
    'free fire tips',
    'clash squad',
    'battle royale',
    'free fire best combo',
    'garena free fire'
  ],
  openGraph: {
    title: 'Free Fire Characters & Weapons Guide 2026',
    description: 'Complete Free Fire guide with all characters, abilities, weapons stats and best meta combos.',
    url: `${baseUrl}/free-fire`,
    siteName: 'Game365Hub',
    images: [
      {
        url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Free Fire Characters & Weapons Guide 2026'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fire Characters & Weapons Guide 2026',
    description: 'Complete guide with all characters, abilities and best weapons.',
    images: ['https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}/free-fire`,
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

const freeFireFaqs = [
  {
    question: "Who is the best character in Free Fire 2026?",
    answer: "DJ Alok remains one of the best characters with his 'Drop the Beat' ability providing healing and speed boost. Other top picks include Chrono, K, Moco, and Skyler depending on your playstyle."
  },
  {
    question: "What are the best weapons in Free Fire?",
    answer: "The best weapons include the Groza and AK for assault rifles, MP40 for SMG, M1887 for shotgun, and AWM for sniping. The meta constantly evolves with game updates."
  },
  {
    question: "What's the difference between active and passive abilities?",
    answer: "Active abilities must be manually activated and have cooldowns (like Chrono's shield). Passive abilities are always active without cooldowns (like Moco's enemy tagging)."
  },
  {
    question: "What is the best character combo for Clash Squad?",
    answer: "Popular combos include DJ Alok (healing) + Chrono (shield) + Moco (info) + K (EP boost). Mix aggressive and support characters for balanced team play."
  }
];

export default function FreeFireLayout({ children }) {
  return (
    <>
      <WebsiteJsonLd
        name="Free Fire Hub - Game365Hub"
        url={`${baseUrl}/free-fire`}
        description="Complete Free Fire guide with characters, weapons, and meta strategies. Updated for 2026."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Free Fire", url: `${baseUrl}/free-fire` }
        ]}
      />
      <FAQJsonLd faqs={freeFireFaqs} />
      {children}
    </>
  );
}
