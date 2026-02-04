import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getAllBases, isPremiumBase } from '@/lib/bases';
import { generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);

  if (!game || game.slug !== 'clash-of-clans') return {};

  const year = new Date().getFullYear();

  return {
    title: `Premium Base Layouts ${year} - Best Anti 3 Star & Pro War Bases | Clash of Clans`,
    description: `Unlock exclusive premium Clash of Clans base layouts ${year}. Best Anti 3 Star, TH18 War, and Legend League bases with copy links. Hand-picked pro-level designs.`,
    keywords: ['premium bases', 'anti 3 star', 'TH18 war base', 'legend league base', 'pro base', 'clash of clans'],
  };
}

export default function PremiumPage({ params }) {
  const game = getGameBySlug(params.game);

  // Only Clash of Clans has premium bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const allBases = getAllBases();
  const premiumBases = allBases.filter(isPremiumBase);

  // Group by hall type and level
  const groupedBases = premiumBases.reduce((acc, base) => {
    const key = `${base.hallType}${base.hallLevel}`;
    if (!acc[key]) acc[key] = [];
    acc[key].push(base);
    return acc;
  }, {});

  // Sort groups: TH18, TH17, TH16... then BH10, BH9...
  const sortedGroups = Object.entries(groupedBases).sort((a, b) => {
    const [keyA] = a;
    const [keyB] = b;
    const typeA = keyA.substring(0, 2);
    const typeB = keyB.substring(0, 2);
    const levelA = parseInt(keyA.substring(2));
    const levelB = parseInt(keyB.substring(2));

    if (typeA !== typeB) return typeA === 'TH' ? -1 : 1;
    return levelB - levelA;
  });

  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: game.name, path: `/${game.slug}` },
    { name: 'Premium Bases', path: `/${game.slug}/premium` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Premium Header */}
      <div className="premium-section-header mb-8">
        <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
             style={{
               background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
               boxShadow: '0 4px 20px rgba(255, 215, 0, 0.4)'
             }}>
          <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
          </svg>
        </div>
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold"
              style={{
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
            Premium Base Layouts
          </h1>
          <p style={{ color: 'var(--text-muted)' }} className="mt-1">
            {premiumBases.length} exclusive hand-picked bases for competitive players
          </p>
        </div>
      </div>

      {/* What makes these premium */}
      <div className="rounded-2xl p-6 mb-10"
           style={{
             background: 'linear-gradient(135deg, rgba(255,215,0,0.08) 0%, rgba(255,165,0,0.05) 50%, rgba(255,215,0,0.08) 100%)',
             border: '1px solid rgba(255,215,0,0.2)'
           }}>
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Why Premium?
        </h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Anti 3 Star</h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Designed to defend against top attacks</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Meta Optimized</h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Updated for {new Date().getFullYear()} attack strategies</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium text-sm">Pro Verified</h3>
              <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Used by top war clans</p>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Bases by Level */}
      {sortedGroups.map(([groupKey, bases]) => (
        <section key={groupKey} className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="badge-premium py-1">
                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
                </svg>
                {groupKey}
              </span>
              <span style={{ color: 'var(--text-muted)' }} className="text-sm font-normal">
                {bases.length} premium {bases.length === 1 ? 'base' : 'bases'}
              </span>
            </h2>
            <Link
              href={`/${game.slug}/${groupKey.substring(0,2).toLowerCase()}/${groupKey.substring(2)}`}
              className="text-sm font-medium hover:underline"
              style={{ color: 'var(--game-primary)' }}
            >
              View all {groupKey} bases →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bases.map((base, index) => (
              <BaseCard
                key={`${base.baseType}-${base.baseNumber}-${index}`}
                base={base}
                gameSlug={game.slug}
              />
            ))}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="mt-16 text-center p-8 rounded-2xl"
               style={{
                 background: 'linear-gradient(135deg, rgba(255,215,0,0.1) 0%, rgba(255,165,0,0.05) 50%, rgba(255,215,0,0.1) 100%)',
                 border: '1px solid rgba(255,215,0,0.2)'
               }}>
        <h2 className="text-2xl font-bold mb-2">Want More Free Bases?</h2>
        <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
          Browse our collection of 4,500+ free base layouts for all Town Hall and Builder Hall levels.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href={`/${game.slug}/th`}
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
            style={{ background: 'var(--game-primary)', color: '#000' }}
          >
            Town Hall Bases
          </Link>
          <Link
            href={`/${game.slug}/bh`}
            className="px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            Builder Hall Bases
          </Link>
        </div>
      </section>
    </div>
  );
}
