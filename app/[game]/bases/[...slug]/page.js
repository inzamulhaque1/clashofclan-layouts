import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getContentById, queryContent } from '@/lib/data';
import { generatePageMeta, generateBaseStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';
import BaseDetailClient from '@/components/BaseDetailClient';

export async function generateMetadata({ params }) {
  const game = getGameBySlug(params.game);
  if (!game || game.slug !== 'clash-of-clans') return {};

  const [hallKey, baseType, baseNumber] = params.slug || [];

  if (!hallKey || !baseType || !baseNumber) {
    return {};
  }

  const hallMatch = hallKey.match(/^(th|bh)(\d+)$/i);
  if (!hallMatch) return {};

  const hallType = hallMatch[1].toUpperCase();
  const hallLevel = parseInt(hallMatch[2], 10);
  const base = getContentById('clash-of-clans', 'base', {
    hallType,
    hallLevel,
    baseType,
    baseNumber: parseInt(baseNumber, 10),
  });

  if (!base) return {};

  const hallName = hallType === 'TH' ? 'Town Hall' : 'Builder Hall';
  const typeCapitalized = baseType.charAt(0).toUpperCase() + baseType.slice(1);
  const year = new Date().getFullYear();

  // CTR-optimized titles - specific, actionable, with year
  const titleTemplates = {
    war: `${hallType}${hallLevel} War Base (Anti 3 Star) - Copy Link ${year}`,
    farm: `${hallType}${hallLevel} Farming Base - Protect Loot ${year}`,
    trophy: `${hallType}${hallLevel} Trophy Base - Legend League ${year}`,
    hybrid: `${hallType}${hallLevel} Hybrid Base - War + Farm ${year}`,
    cwl: `${hallType}${hallLevel} CWL Base (Anti 3 Star) ${year}`,
    defense: `${hallType}${hallLevel} Defense Base - Unbeatable ${year}`,
    progress: `${hallType}${hallLevel} Progress Base Layout ${year}`,
  };

  const title = titleTemplates[baseType] || `Best ${hallType}${hallLevel} ${typeCapitalized} Base ${year}`;

  // CTR-optimized descriptions - action words, benefits, urgency
  const descriptions = {
    war: `🏆 Top-rated ${hallType}${hallLevel} war base with copy link. Anti 3 star design used by pro players. One-click import to Clash of Clans. Updated ${year}!`,
    farm: `💰 Protect your Gold, Elixir & Dark Elixir! Best ${hallType}${hallLevel} farming base ${year}. Copy link included - import in seconds.`,
    trophy: `🚀 Push to Legend League with this ${hallType}${hallLevel} trophy base! Pro-level design with copy link. Updated for ${year} meta.`,
    hybrid: `⚔️ Best of both worlds! ${hallType}${hallLevel} hybrid base protects loot AND trophies. Copy link included. ${year} meta-proof design.`,
    cwl: `🏅 Dominate Clan War Leagues! Anti 3 star ${hallType}${hallLevel} CWL base with copy link. Used by top clans ${year}.`,
    defense: `🛡️ Unbeatable ${hallType}${hallLevel} defense base! Anti-everything design with copy link. Stop any attack. ${year} updated.`,
    progress: `📈 Perfect ${hallType}${hallLevel} progress base for upgrading. Strategic layout with copy link. ${year} design.`,
  };

  const description = descriptions[baseType] ||
    `Best ${hallType}${hallLevel} ${typeCapitalized} base layout ${year} with one-click copy link. Import directly to Clash of Clans!`;

  return generatePageMeta({
    title,
    description,
    path: `/${game.slug}/bases/${hallKey}/${baseType}/${baseNumber}`,
    image: base.originalImageUrl,
  });
}

export default function BaseDetailPage({ params }) {
  const game = getGameBySlug(params.game);

  // Only Clash of Clans has bases
  if (!game || game.slug !== 'clash-of-clans') {
    notFound();
  }

  const [hallKey, baseType, baseNumber] = params.slug || [];

  if (!hallKey || !baseType || !baseNumber) {
    notFound();
  }

  const hallMatch = hallKey.match(/^(th|bh)(\d+)$/i);
  if (!hallMatch) notFound();

  const hallType = hallMatch[1].toUpperCase();
  const hallLevel = parseInt(hallMatch[2], 10);
  const base = getContentById('clash-of-clans', 'base', {
    hallType,
    hallLevel,
    baseType,
    baseNumber: parseInt(baseNumber, 10),
  });

  if (!base) {
    notFound();
  }

  // More related bases of same level (6 instead of 3)
  const relatedBases = queryContent('clash-of-clans', 'base', {
    hallType,
    hallLevel,
  }).filter(b => b.baseNumber !== base.baseNumber).slice(0, 6);

  // Same type bases from adjacent levels (for internal linking)
  const adjacentLevels = [hallLevel - 1, hallLevel + 1].filter(l => l >= 3 && l <= (hallType === 'TH' ? 18 : 10));
  const sameTypeBases = adjacentLevels.flatMap(level =>
    queryContent('clash-of-clans', 'base', {
      hallType,
      hallLevel: level,
      baseType,
    }).slice(0, 2)
  );

  // TH level links for quick navigation
  const thLevels = hallType === 'TH' ? [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7] : [10, 9, 8, 7, 6, 5, 4, 3];

  const baseStructuredData = generateBaseStructuredData(base);
  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: game.name, path: `/${game.slug}` },
    { name: `${hallType} Bases`, path: `/${game.slug}/${hallType.toLowerCase()}` },
    { name: `${hallType}${hallLevel}`, path: `/${game.slug}/${hallType.toLowerCase()}/${hallLevel}` },
    { name: `${baseType} #${baseNumber}`, path: `/${game.slug}/bases/${hallKey}/${baseType}/${baseNumber}` },
  ]);

  const imageUrl = base.originalImageUrl || base.thumbnailUrl;
  const levelPath = `/${game.slug}/${hallType.toLowerCase()}/${hallLevel}`;

  const typeBadgeClass = {
    war: 'badge-war',
    farm: 'badge-farm',
    trophy: 'badge-trophy',
    hybrid: 'bg-purple-500/10 text-purple-400',
    cwl: 'bg-blue-500/10 text-blue-400',
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baseStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Breadcrumb */}
      <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
        <Link href="/" className="transition-colors hover:text-white">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${game.slug}`} className="transition-colors hover:text-white">{game.shortName}</Link>
        <span className="mx-2">/</span>
        <Link href={levelPath} className="transition-colors hover:text-white">{hallType}{hallLevel} Bases</Link>
        <span className="mx-2">/</span>
        <span style={{ color: 'var(--text-primary)' }}>{baseType.charAt(0).toUpperCase() + baseType.slice(1)} #{baseNumber}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Image */}
        <div className="lg:col-span-2">
          <div className="relative aspect-square rounded-2xl overflow-hidden" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={base.title || `${hallType}${hallLevel} ${baseType} base layout #${baseNumber}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24" style={{ color: 'var(--surface-300)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        {/* Info Panel */}
        <div className="lg:col-span-1">
          <div className="card p-6 sticky top-24">
            {/* Full Title */}
            <h1 className="text-xl font-bold mb-4 leading-tight">
              {base.title || `${hallType}${hallLevel} ${baseType.charAt(0).toUpperCase() + baseType.slice(1)} Base #${baseNumber}`}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="badge-primary">
                {hallType}{hallLevel}
              </span>
              <span className={`badge ${typeBadgeClass[baseType] || 'bg-zinc-500/10 text-zinc-400'}`}>
                {baseType.charAt(0).toUpperCase() + baseType.slice(1)}
              </span>
            </div>

            {/* Interactive Elements (Vote, Copy, Share) */}
            <BaseDetailClient
              base={base}
              baseUrl={`/${game.slug}/bases/${hallKey}/${baseType}/${baseNumber}`}
            />

            {/* How to Use */}
            <div className="mt-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <h3 className="font-semibold mb-4">How to Use</h3>
              <ol className="text-sm space-y-3" style={{ color: 'var(--text-muted)' }}>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>1</span>
                  <span>Click &quot;Copy Base Link&quot; above</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>2</span>
                  <span>Open Clash of Clans</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>3</span>
                  <span>Go to your village editor</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>4</span>
                  <span>Tap the layout icon and select &quot;New Layout&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>5</span>
                  <span>The base will be imported automatically</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Related Bases - Same Level */}
      {relatedBases.length > 0 && (
        <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              More {hallType}{hallLevel} Bases
            </h2>
            <Link href={levelPath} className="text-sm hover:underline" style={{ color: 'var(--game-primary)' }}>
              View all {hallType}{hallLevel} bases →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {relatedBases.map((relatedBase, index) => (
              <BaseCard key={index} base={relatedBase} gameSlug={game.slug} compact />
            ))}
          </div>
        </section>
      )}

      {/* Same Type Bases - Different Levels (Internal Linking) */}
      {sameTypeBases.length > 0 && (
        <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-xl font-semibold">
              {baseType.charAt(0).toUpperCase() + baseType.slice(1)} Bases - Other Levels
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {sameTypeBases.map((otherBase, index) => (
              <BaseCard key={index} base={otherBase} gameSlug={game.slug} compact />
            ))}
          </div>
        </section>
      )}

      {/* Quick Navigation - All TH Levels */}
      <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
        <h2 className="text-xl font-semibold mb-4">
          Browse All {hallType === 'TH' ? 'Town Hall' : 'Builder Hall'} Levels
        </h2>
        <div className="flex flex-wrap gap-2">
          {thLevels.map((level) => (
            <Link
              key={level}
              href={`/${game.slug}/${hallType.toLowerCase()}/${level}`}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105 ${
                level === hallLevel ? 'ring-2 ring-offset-2' : ''
              }`}
              style={{
                background: level === hallLevel ? 'var(--game-primary)' : 'var(--surface-100)',
                color: level === hallLevel ? '#000' : 'var(--text-primary)',
                border: '1px solid var(--border)',
                ringColor: 'var(--game-primary)',
              }}
            >
              {hallType}{level}
            </Link>
          ))}
        </div>
        {hallType === 'TH' && (
          <Link
            href={`/${game.slug}/bh`}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
            style={{ color: 'var(--game-primary)' }}
          >
            View Builder Hall Bases →
          </Link>
        )}
        {hallType === 'BH' && (
          <Link
            href={`/${game.slug}/th`}
            className="inline-flex items-center gap-1 mt-4 text-sm font-medium"
            style={{ color: 'var(--game-primary)' }}
          >
            View Town Hall Bases →
          </Link>
        )}
      </section>

      {/* Related Guide Link */}
      <section className="mt-12 pt-8 pb-8" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="p-6 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
          <h3 className="text-lg font-semibold mb-2">Need Help Using This Base?</h3>
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Learn how to copy base layouts and master base building strategies.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={`/${game.slug}/guides/how-to-copy-base`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: 'var(--game-primary)', color: '#000' }}
            >
              How to Copy Bases
            </Link>
            {baseType === 'war' && (
              <Link
                href={`/${game.slug}/guides/cwl-base-building-tips`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)' }}
              >
                CWL Base Building Tips
              </Link>
            )}
            <Link
              href={`/${game.slug}/guides`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium"
              style={{ background: 'var(--surface-200)', color: 'var(--text-primary)' }}
            >
              All Guides →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
