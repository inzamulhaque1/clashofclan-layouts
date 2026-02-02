import { BreadcrumbJsonLd } from '@/components/JsonLd';

const baseUrl = "https://www.game365hub.com";

export const metadata = {
  title: 'All Free Fire Weapons 2026 | Stats, Damage & Best Attachments',
  description: 'Complete database of all Free Fire weapons with damage stats, rate of fire, accuracy and best attachments. Find the best guns for your playstyle.',
  keywords: ['free fire weapons', 'free fire guns', 'best free fire weapons', 'free fire damage stats', 'ak free fire', 'mp40', 'm1887'],
  openGraph: {
    title: 'All Free Fire Weapons 2026 | Stats Guide',
    description: 'Complete weapon stats and attachment guide for Free Fire.',
    url: `${baseUrl}/free-fire/weapons`,
  },
  alternates: {
    canonical: `${baseUrl}/free-fire/weapons`,
  },
};

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
      {children}
    </>
  );
}
