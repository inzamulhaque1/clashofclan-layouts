import LeaderboardsClient from './LeaderboardsClient';

// SEO Metadata
export const metadata = {
  title: 'Clash of Clans Leaderboards 2026 - Global Rankings, Top Clans & Players | CoC Bases',
  description: 'Live Clash of Clans leaderboards and rankings. See top clans, top players, Builder Base rankings, and Clan Capital leaderboards updated in real-time from the official CoC API.',
  keywords: [
    'clash of clans leaderboard',
    'coc top clans',
    'coc top players',
    'clash of clans rankings',
    'coc global leaderboard',
    'best clans clash of clans',
    'top coc players 2026',
    'clash of clans world ranking',
    'coc builder base rankings',
    'clan capital leaderboard',
    'coc trophy rankings',
    'legend league players'
  ],
  openGraph: {
    title: 'Clash of Clans Leaderboards - Live Global Rankings | CoC Bases',
    description: 'Real-time leaderboards for Clash of Clans. Track top clans, players, and Builder Base rankings worldwide.',
    type: 'website',
    url: 'https://cocbases.com/leaderboards',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoC Leaderboards - Live Rankings',
    description: 'Track top Clash of Clans clans and players in real-time'
  },
  alternates: {
    canonical: 'https://cocbases.com/leaderboards'
  }
};

// Structured Data for SEO
function generateStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Clash of Clans Leaderboards',
    description: 'Live rankings and leaderboards for Clash of Clans clans and players',
    mainEntity: {
      '@type': 'ItemList',
      name: 'Clash of Clans Global Rankings',
      description: 'Top clans and players ranked by trophies and points',
    }
  };
}

// All countries supported by CoC API (using ISO codes for flag images)
const ALL_COUNTRIES = [
  // Global
  { id: 'global', name: 'Global', iso: 'global', region: 'global' },

  // North America
  { id: '32000249', name: 'United States', iso: 'us', region: 'americas' },
  { id: '32000056', name: 'Canada', iso: 'ca', region: 'americas' },
  { id: '32000150', name: 'Mexico', iso: 'mx', region: 'americas' },

  // South America
  { id: '32000032', name: 'Brazil', iso: 'br', region: 'americas' },
  { id: '32000011', name: 'Argentina', iso: 'ar', region: 'americas' },
  { id: '32000057', name: 'Chile', iso: 'cl', region: 'americas' },
  { id: '32000059', name: 'Colombia', iso: 'co', region: 'americas' },
  { id: '32000166', name: 'Peru', iso: 'pe', region: 'americas' },
  { id: '32000250', name: 'Venezuela', iso: 've', region: 'americas' },
  { id: '32000074', name: 'Ecuador', iso: 'ec', region: 'americas' },

  // Europe
  { id: '32000247', name: 'United Kingdom', iso: 'gb', region: 'europe' },
  { id: '32000094', name: 'Germany', iso: 'de', region: 'europe' },
  { id: '32000092', name: 'France', iso: 'fr', region: 'europe' },
  { id: '32000193', name: 'Russia', iso: 'ru', region: 'europe' },
  { id: '32000239', name: 'Turkey', iso: 'tr', region: 'europe' },
  { id: '32000116', name: 'Italy', iso: 'it', region: 'europe' },
  { id: '32000215', name: 'Spain', iso: 'es', region: 'europe' },
  { id: '32000172', name: 'Poland', iso: 'pl', region: 'europe' },
  { id: '32000256', name: 'Ukraine', iso: 'ua', region: 'europe' },
  { id: '32000163', name: 'Netherlands', iso: 'nl', region: 'europe' },
  { id: '32000022', name: 'Belgium', iso: 'be', region: 'europe' },
  { id: '32000218', name: 'Sweden', iso: 'se', region: 'europe' },
  { id: '32000165', name: 'Norway', iso: 'no', region: 'europe' },
  { id: '32000067', name: 'Denmark', iso: 'dk', region: 'europe' },
  { id: '32000086', name: 'Finland', iso: 'fi', region: 'europe' },
  { id: '32000015', name: 'Austria', iso: 'at', region: 'europe' },
  { id: '32000219', name: 'Switzerland', iso: 'ch', region: 'europe' },
  { id: '32000178', name: 'Portugal', iso: 'pt', region: 'europe' },
  { id: '32000097', name: 'Greece', iso: 'gr', region: 'europe' },
  { id: '32000066', name: 'Czech Republic', iso: 'cz', region: 'europe' },
  { id: '32000185', name: 'Romania', iso: 'ro', region: 'europe' },
  { id: '32000108', name: 'Hungary', iso: 'hu', region: 'europe' },
  { id: '32000114', name: 'Ireland', iso: 'ie', region: 'europe' },
  { id: '32000203', name: 'Serbia', iso: 'rs', region: 'europe' },
  { id: '32000062', name: 'Croatia', iso: 'hr', region: 'europe' },
  { id: '32000206', name: 'Slovakia', iso: 'sk', region: 'europe' },
  { id: '32000034', name: 'Bulgaria', iso: 'bg', region: 'europe' },

  // Asia
  { id: '32000113', name: 'India', iso: 'in', region: 'asia' },
  { id: '32000122', name: 'Japan', iso: 'jp', region: 'asia' },
  { id: '32000211', name: 'South Korea', iso: 'kr', region: 'asia' },
  { id: '32000109', name: 'Indonesia', iso: 'id', region: 'asia' },
  { id: '32000168', name: 'Philippines', iso: 'ph', region: 'asia' },
  { id: '32000251', name: 'Vietnam', iso: 'vn', region: 'asia' },
  { id: '32000226', name: 'Thailand', iso: 'th', region: 'asia' },
  { id: '32000143', name: 'Malaysia', iso: 'my', region: 'asia' },
  { id: '32000205', name: 'Singapore', iso: 'sg', region: 'asia' },
  { id: '32000160', name: 'Myanmar', iso: 'mm', region: 'asia' },
  { id: '32000162', name: 'Nepal', iso: 'np', region: 'asia' },
  { id: '32000018', name: 'Bangladesh', iso: 'bd', region: 'asia' },
  { id: '32000216', name: 'Sri Lanka', iso: 'lk', region: 'asia' },
  { id: '32000159', name: 'Mongolia', iso: 'mn', region: 'asia' },
  { id: '32000055', name: 'Cambodia', iso: 'kh', region: 'asia' },
  { id: '32000171', name: 'Pakistan', iso: 'pk', region: 'asia' },
  { id: '32000058', name: 'China', iso: 'cn', region: 'asia' },
  { id: '32000222', name: 'Taiwan', iso: 'tw', region: 'asia' },
  { id: '32000106', name: 'Hong Kong', iso: 'hk', region: 'asia' },

  // Middle East
  { id: '32000198', name: 'Saudi Arabia', iso: 'sa', region: 'middle_east' },
  { id: '32000243', name: 'UAE', iso: 'ae', region: 'middle_east' },
  { id: '32000115', name: 'Iraq', iso: 'iq', region: 'middle_east' },
  { id: '32000112', name: 'Iran', iso: 'ir', region: 'middle_east' },
  { id: '32000117', name: 'Israel', iso: 'il', region: 'middle_east' },
  { id: '32000073', name: 'Egypt', iso: 'eg', region: 'middle_east' },
  { id: '32000125', name: 'Kuwait', iso: 'kw', region: 'middle_east' },
  { id: '32000180', name: 'Qatar', iso: 'qa', region: 'middle_east' },
  { id: '32000017', name: 'Bahrain', iso: 'bh', region: 'middle_east' },
  { id: '32000167', name: 'Oman', iso: 'om', region: 'middle_east' },
  { id: '32000123', name: 'Jordan', iso: 'jo', region: 'middle_east' },
  { id: '32000128', name: 'Lebanon', iso: 'lb', region: 'middle_east' },

  // Africa
  { id: '32000212', name: 'South Africa', iso: 'za', region: 'africa' },
  { id: '32000164', name: 'Nigeria', iso: 'ng', region: 'africa' },
  { id: '32000124', name: 'Kenya', iso: 'ke', region: 'africa' },
  { id: '32000095', name: 'Ghana', iso: 'gh', region: 'africa' },
  { id: '32000158', name: 'Morocco', iso: 'ma', region: 'africa' },
  { id: '32000006', name: 'Algeria', iso: 'dz', region: 'africa' },
  { id: '32000240', name: 'Tunisia', iso: 'tn', region: 'africa' },
  { id: '32000131', name: 'Libya', iso: 'ly', region: 'africa' },

  // Oceania
  { id: '32000014', name: 'Australia', iso: 'au', region: 'oceania' },
  { id: '32000168', name: 'New Zealand', iso: 'nz', region: 'oceania' },
];

export default function LeaderboardsPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-12 lg:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="leaderboard-bg-gradient"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: 'rgba(245, 158, 11, 0.15)', color: 'var(--primary)' }}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Live Rankings
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-gradient">Leaderboards</span>
              </h1>

              <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--text-muted)' }}>
                Real-time rankings from the official Clash of Clans API.
                Track top clans, players, and Builder Base competitors worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Leaderboards Content */}
        <LeaderboardsClient countries={ALL_COUNTRIES} />

        {/* SEO Content */}
        <section className="py-16 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              About Clash of Clans Rankings
            </h2>

            <div className="space-y-6" style={{ color: 'var(--text-muted)' }}>
              <p>
                Clash of Clans rankings are determined by various factors including trophies, clan points,
                and performance in different game modes. Our leaderboards pull data directly from Supercell's
                official API to provide accurate, real-time rankings.
              </p>

              <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
                Ranking Categories
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-primary">🏆 Clan Rankings</h4>
                  <p className="text-sm">
                    Based on total clan points from all members. Top clans have active, high-trophy members
                    and strong war performance.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-purple-400">👤 Player Rankings</h4>
                  <p className="text-sm">
                    Based on individual trophy count. Legend League players compete for the top spots
                    with daily trophy resets.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-emerald-400">🔨 Builder Base</h4>
                  <p className="text-sm">
                    Separate rankings for Builder Base (versus battles). Top players master
                    the unique Builder Base meta.
                  </p>
                </div>

                <div className="card p-5">
                  <h4 className="font-semibold mb-2 text-rose-400">🏛️ Clan Capital</h4>
                  <p className="text-sm">
                    Rankings based on Clan Capital performance during Raid Weekends.
                    Measures clan cooperation and raid efficiency.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4" style={{ color: 'var(--text-primary)' }}>
                How to Climb the Leaderboards
              </h3>

              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Push trophies consistently and maintain high counts</li>
                <li>Join an active clan with strong members for clan rankings</li>
                <li>Participate in Legend League for player prestige</li>
                <li>Master Builder Base strategies for BB rankings</li>
                <li>Contribute to Raid Weekends for Capital rankings</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
