import { BreadcrumbJsonLd, WebsiteJsonLd, FAQJsonLd } from '@/components/JsonLd';
import { BLOG_IMAGES } from '@/lib/blog/images';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: {
    default: 'Gaming Blog 2026 | Guides, Tips & News | Game365Hub',
    template: '%s | Game365Hub Blog'
  },
  description: 'Read the latest mobile gaming guides, strategy tips, and news for Clash of Clans, PUBG Mobile, Free Fire, Brawl Stars, and more. Expert tutorials, game comparisons, and pro tips updated daily.',
  keywords: [
    'gaming blog',
    'mobile game guides',
    'clash of clans tips',
    'pubg mobile guide',
    'free fire tips',
    'brawl stars guide',
    'mobile gaming tips 2026',
    'best mobile games',
    'game reviews',
    'gaming strategies',
    'offline games',
    'battle royale tips',
    'fps optimization mobile',
    'gaming phone guide'
  ],
  openGraph: {
    title: 'Gaming Blog 2026 | Guides, Tips & News | Game365Hub',
    description: 'Expert gaming guides, strategy tips, and news for Clash of Clans, PUBG Mobile, Free Fire, and more mobile games.',
    url: `${baseUrl}/blog`,
    siteName: 'Game365Hub',
    images: [{
      url: BLOG_IMAGES.blogHero.url,
      width: 1200,
      height: 630,
      alt: BLOG_IMAGES.blogHero.alt
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gaming Blog 2026 | Guides & Tips | Game365Hub',
    description: 'Expert gaming guides and tips for mobile games.',
    images: [BLOG_IMAGES.blogHero.url],
  },
  alternates: {
    canonical: `${baseUrl}/blog`,
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

const blogFaqs = [
  {
    question: "What games do you cover in your blog?",
    answer: "We cover popular mobile games including Clash of Clans, Brawl Stars, Clash Royale, PUBG Mobile, Free Fire, Genshin Impact, and many more. Our guides range from beginner tutorials to advanced strategies."
  },
  {
    question: "How often do you publish new articles?",
    answer: "We publish new gaming guides and articles multiple times per week. We also update existing guides whenever games receive major updates or balance changes."
  },
  {
    question: "Are your guides suitable for beginners?",
    answer: "Yes! We have guides for all skill levels - from complete beginner tutorials to advanced pro strategies. Each article clearly indicates its difficulty level."
  },
  {
    question: "Can I request a guide for a specific game?",
    answer: "Absolutely! Contact us through our contact page with your game or topic suggestion. We prioritize requests based on community interest."
  }
];

export default function BlogLayout({ children }) {
  return (
    <>
      <WebsiteJsonLd
        name="Game365Hub Gaming Blog"
        url={`${baseUrl}/blog`}
        description="Expert gaming guides, tips, and news for mobile games. Updated daily with strategies for Clash of Clans, PUBG, Free Fire, and more."
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Blog", url: `${baseUrl}/blog` }
        ]}
      />
      <FAQJsonLd faqs={blogFaqs} />
      {children}
    </>
  );
}
