import ClanPageClient from './ClanPageClient';

// Dynamic metadata
export async function generateMetadata({ params }) {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  return {
    title: `Clan ${decodedTag} - Stats, Members, War Log | CoC Bases`,
    description: `View detailed statistics for Clash of Clans clan ${decodedTag}. See members, war history, CWL status, Capital Raids, and more live data from the official API.`,
    keywords: [
      'clash of clans clan',
      'coc clan stats',
      'clan members',
      'clan war log',
      'cwl status',
      'clan capital',
      decodedTag
    ],
    openGraph: {
      title: `Clan ${decodedTag} - Clash of Clans Stats`,
      description: `Live statistics and data for clan ${decodedTag}`,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    }
  };
}

export default async function ClanPage({ params }) {
  const { tag } = await params;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <ClanPageClient tag={tag} />
      </div>
    </div>
  );
}
