import { BreadcrumbJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'All Free Fire Characters 2026 | Abilities, Roles & Best Builds',
  description: 'Complete database of all Free Fire characters with abilities, stats, roles and recommended builds. Find the best character for your playstyle.',
  keywords: ['free fire characters', 'free fire abilities', 'best free fire characters', 'dj alok', 'chrono', 'free fire character list'],
  openGraph: {
    title: 'All Free Fire Characters 2026 | Complete Guide',
    description: 'Database of all Free Fire characters with abilities and builds.',
    url: `${baseUrl}/free-fire/characters`,
  },
  alternates: {
    canonical: `${baseUrl}/free-fire/characters`,
  },
};

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
      {children}
    </>
  );
}
