import { BreadcrumbJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'Free Fire Guides 2026 | Tips, Strategies & Pro Tactics',
  description: 'Master Free Fire with our comprehensive guides. Learn beginner tips, Clash Squad strategies, rank push tactics, sensitivity settings, and pro gameplay techniques.',
  keywords: [
    'free fire guide',
    'free fire tips',
    'free fire strategy',
    'free fire beginner guide',
    'clash squad tips',
    'free fire rank push',
    'free fire sensitivity settings',
    'free fire pro tips',
    'how to play free fire',
    'free fire tutorial 2026'
  ],
  openGraph: {
    title: 'Free Fire Guides 2026 | Pro Tips & Strategies',
    description: 'Comprehensive Free Fire guides with tips, strategies and pro tactics to dominate every match.',
    url: `${baseUrl}/free-fire/guides`,
    siteName: 'Game365Hub',
    images: [
      {
        url: 'https://i.ytimg.com/vi/pjYfy_Gyu7M/maxresdefault.jpg',
        width: 1280,
        height: 720,
        alt: 'Free Fire Guides 2026'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Fire Guides 2026',
    description: 'Master Free Fire with pro tips and strategies.',
  },
  alternates: {
    canonical: `${baseUrl}/free-fire/guides`,
  },
};

export default function GuidesLayout({ children }) {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: baseUrl },
          { name: "Free Fire", url: `${baseUrl}/free-fire` },
          { name: "Guides", url: `${baseUrl}/free-fire/guides` }
        ]}
      />
      {children}
    </>
  );
}
