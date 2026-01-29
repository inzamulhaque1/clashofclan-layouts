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

  const title = base.title && base.title.length > 10
    ? base.title.replace(/\s*-\s*\(#\d+\)$/, '').trim()
    : `Best ${typeCapitalized} Base ${hallType}${hallLevel} with Link ${year}`;

  const descriptions = {
    war: `Download the best ${hallType}${hallLevel} war base layout ${year} with copy link. Anti 3 star, anti 2 star ${hallName} ${hallLevel} CWL base design.`,
    farm: `Best ${hallType}${hallLevel} farming base ${year} with link. Protect your Gold, Elixir & Dark Elixir with this ${hallName} ${hallLevel} base layout.`,
    trophy: `Top ${hallType}${hallLevel} trophy pushing base ${year} with copy link. Climb to Legend League with this ${hallName} ${hallLevel} base design.`,
    hybrid: `Best ${hallType}${hallLevel} hybrid base layout ${year}. Protect trophies and resources with this balanced ${hallName} ${hallLevel} base.`,
  };

  const description = descriptions[baseType] ||
    `Best ${hallType}${hallLevel} ${typeCapitalized} base layout ${year} with one-click copy link.`;

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

  const relatedBases = queryContent('clash-of-clans', 'base', {
    hallType,
    hallLevel,
  }).filter(b => b.baseNumber !== base.baseNumber).slice(0, 3);

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

      {/* Related Bases */}
      {relatedBases.length > 0 && (
        <section className="mt-16 pt-12" style={{ borderTop: '1px solid var(--border)' }}>
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              More {hallType}{hallLevel} Bases
            </h2>
            <Link href={levelPath} className="text-sm hover:underline" style={{ color: 'var(--game-primary)' }}>
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedBases.map((relatedBase, index) => (
              <BaseCard key={index} base={relatedBase} gameSlug={game.slug} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
