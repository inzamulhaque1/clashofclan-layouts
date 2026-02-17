import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getGameBySlug } from '@/config/games';
import { getContentById, queryContent } from '@/lib/data';
import { generatePageMeta, generateBaseStructuredData, generateBreadcrumbStructuredData, generateFAQStructuredData, generateHowToStructuredData } from '@/lib/seo';
import { isPremiumBase } from '@/lib/bases';
import { generateBaseContent } from '@/lib/base-content';
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

  // Check if this is a premium base
  const isPremium = isPremiumBase(base);

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

  // Generate rich content for this base
  const content = generateBaseContent(base);
  const faqStructuredData = content ? generateFAQStructuredData(content.faq) : null;
  const howToStructuredData = generateHowToStructuredData(hallType, hallLevel, baseType);

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
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
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
          <div className="relative aspect-square rounded-2xl overflow-hidden" style={{ background: 'var(--surface-100)', border: isPremium ? '2px solid #F97316' : '1px solid var(--border)' }}>
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
            {/* Premium ribbon */}
            {isPremium && (
              <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-white" style={{ background: 'linear-gradient(135deg, #F97316 0%, #EA580C 100%)', boxShadow: '0 2px 10px rgba(249,115,22,0.4)' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
                </svg>
                Premium Base
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
              {isPremium ? (
                <span className="badge-premium">
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z"/>
                  </svg>
                  PRO
                </span>
              ) : (
                <span className={`badge ${typeBadgeClass[baseType] || 'bg-zinc-500/10 text-zinc-400'}`}>
                  {baseType.charAt(0).toUpperCase() + baseType.slice(1)}
                </span>
              )}
            </div>

            {/* Interactive Elements (Vote, Copy, Share) */}
            <BaseDetailClient
              base={base}
              baseUrl={`/${game.slug}/bases/${hallKey}/${baseType}/${baseNumber}`}
              isPremium={isPremium}
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

      {/* === RICH CONTENT SECTIONS === */}
      {content && (
        <div className="mt-12 space-y-12">

          {/* 1. Base Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {hallType}{hallLevel} {baseType.charAt(0).toUpperCase() + baseType.slice(1)} Base Overview
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {content.overview}
            </p>
          </section>

          {/* 2. Key Defensive Features */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Key Defensive Features</h2>
            <div className="space-y-4">
              {content.keyFeatures.map((feature, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <h3 className="font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Attack Strategies */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Attack Strategies This Base Defends Against</h2>
            <p className="mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>{content.attackStrategies.intro}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {content.attackStrategies.strategies.map((strat, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">{strat.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      strat.effectiveness === 'High' ? 'bg-green-500/10 text-green-400' :
                      strat.effectiveness === 'Medium' ? 'bg-yellow-500/10 text-yellow-400' :
                      'bg-red-500/10 text-red-400'
                    }`}>
                      {strat.effectiveness} Defense
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{strat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 4. Troop Compositions */}
          {content.troopCompositions.length > 0 && (
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Popular {hallType}{hallLevel} Army Compositions
              </h2>
              <div className="space-y-4">
                {content.troopCompositions.map((comp, i) => (
                  <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                    <h3 className="font-semibold mb-2">{comp.name}</h3>
                    <div className="grid sm:grid-cols-2 gap-2 mb-2">
                      <div>
                        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Troops: </span>
                        <span className="text-sm">{comp.troops}</span>
                      </div>
                      <div>
                        <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>Spells: </span>
                        <span className="text-sm">{comp.spells}</span>
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{comp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* 5. Building Placement Strategy */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Building Placement Strategy</h2>
            <p className="mb-4 text-sm" style={{ color: 'var(--text-muted)' }}>{content.buildingPlacement.intro}</p>
            <ul className="space-y-3">
              {content.buildingPlacement.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium flex-shrink-0" style={{ background: 'var(--surface-200)' }}>
                    {i + 1}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 6. Pros & Cons */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Pros & Cons</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl" style={{ background: 'rgba(34, 197, 94, 0.05)', border: '1px solid rgba(34, 197, 94, 0.2)' }}>
                <h3 className="font-semibold mb-3 text-green-400">Strengths</h3>
                <ul className="space-y-2">
                  {content.prosAndCons.pros.map((pro, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-green-400 flex-shrink-0 mt-0.5">+</span>
                      <span style={{ color: 'var(--text-muted)' }}>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl" style={{ background: 'rgba(234, 179, 8, 0.05)', border: '1px solid rgba(234, 179, 8, 0.2)' }}>
                <h3 className="font-semibold mb-3 text-yellow-400">Weaknesses</h3>
                <ul className="space-y-2">
                  {content.prosAndCons.cons.map((con, i) => (
                    <li key={i} className="flex gap-2 text-sm">
                      <span className="text-yellow-400 flex-shrink-0 mt-0.5">-</span>
                      <span style={{ color: 'var(--text-muted)' }}>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* 7. FAQ */}
          <section>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {content.faq.map((item, i) => (
                <div key={i} className="p-4 rounded-xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      )}

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
