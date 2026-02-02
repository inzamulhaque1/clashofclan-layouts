import { BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'All Free Fire Weapons 2026 | Stats, Damage & Best Attachments',
  description: 'Complete database of all 50+ Free Fire weapons with damage stats, rate of fire, accuracy and best attachments. Find the best AR, SMG, Sniper and Shotgun for ranked.',
  keywords: [
    'free fire weapons',
    'free fire guns',
    'best free fire weapons 2026',
    'free fire damage stats',
    'ak free fire damage',
    'mp40 stats',
    'm1887 free fire',
    'awm free fire',
    'groza free fire',
    'free fire weapon tier list',
    'best gun free fire ranked',
    'free fire loadout',
    'free fire attachments guide',
    'free fire sniper damage'
  ],
  openGraph: {
    title: 'All Free Fire Weapons 2026 | Complete Stats Guide',
    description: 'Complete weapon stats and attachment guide for Free Fire. Find the best guns with damage, range, and accuracy stats.',
    url: `${baseUrl}/free-fire/weapons`,
    siteName: 'Game365Hub',
    images: [
      {
        url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Free Fire Weapons Guide 2026'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Free Fire Weapons 2026',
    description: 'Complete guide with 50+ weapons, damage stats and best loadouts.',
    images: ['https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg'],
  },
  alternates: {
    canonical: `${baseUrl}/free-fire/weapons`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const weaponFaqs = [
  {
    question: "What is the highest damage weapon in Free Fire?",
    answer: "The AWM sniper rifle has the highest damage per shot in Free Fire, capable of one-shot kills with headshots even through level 3 helmets. For automatic weapons, the Groza and AK have the highest damage."
  },
  {
    question: "What's the best weapon for close range combat?",
    answer: "For close range, the M1887 shotgun is extremely powerful with high burst damage. The MP40 SMG is also excellent for its high fire rate and mobility."
  },
  {
    question: "What attachments should I use in Free Fire?",
    answer: "Generally, use suppressors for stealth, extended magazines for more ammo, foregrips to reduce recoil, and scopes based on your weapon type (2x for ARs, 4x or 8x for snipers)."
  }
];

export default function WeaponsLayout({ children }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Free Fire", url: `${baseUrl}/free-fire` },
          { name: "Weapons", url: `${baseUrl}/free-fire/weapons` }
        ]}
      />
      <FAQJsonLd faqs={weaponFaqs} />
      {children}
    </>
  );
}
