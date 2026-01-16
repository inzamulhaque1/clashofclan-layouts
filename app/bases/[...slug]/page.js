import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBaseById, getBasesByLevel } from '@/lib/bases';
import { generatePageMeta, generateBaseStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';
import BaseDetailClient from '@/components/BaseDetailClient';

export async function generateMetadata({ params }) {
  const [hallKey, baseType, baseNumber] = params.slug || [];

  if (!hallKey || !baseType || !baseNumber) {
    return {};
  }

  const hallMatch = hallKey.match(/^(th|bh)(\d+)$/i);
  if (!hallMatch) return {};

  const hallType = hallMatch[1].toUpperCase();
  const hallLevel = parseInt(hallMatch[2], 10);
  const base = getBaseById(hallType, hallLevel, baseType, parseInt(baseNumber, 10));

  if (!base) return {};

  const hallName = hallType === 'TH' ? 'Town Hall' : 'Builder Hall';
  const typeCapitalized = baseType.charAt(0).toUpperCase() + baseType.slice(1);
  const year = new Date().getFullYear();

  // Use scraped title or generate SEO-optimized title
  const title = base.title && base.title.length > 10
    ? base.title.replace(/\s*-\s*\(#\d+\)$/, '').trim()
    : `Best ${typeCapitalized} Base ${hallType}${hallLevel} with Link ${year} - ${hallName} Level ${hallLevel}`;

  // Generate keyword-rich description
  const descriptions = {
    war: `Download the best ${hallType}${hallLevel} war base layout ${year} with copy link. Anti 3 star, anti 2 star ${hallName} ${hallLevel} CWL base design. One-click copy to Clash of Clans!`,
    farm: `Best ${hallType}${hallLevel} farming base ${year} with link. Protect your Gold, Elixir & Dark Elixir with this ${hallName} ${hallLevel} base layout. Copy directly to CoC!`,
    trophy: `Top ${hallType}${hallLevel} trophy pushing base ${year} with copy link. Climb to Legend League with this ${hallName} ${hallLevel} base design. One-tap import to Clash of Clans!`,
    hybrid: `Best ${hallType}${hallLevel} hybrid base layout ${year}. Protect trophies and resources with this balanced ${hallName} ${hallLevel} base. Copy link included!`,
    cwl: `Anti 3 star ${hallType}${hallLevel} CWL base ${year} with copy link. Dominate Clan War Leagues with this ${hallName} ${hallLevel} war base layout!`,
    defense: `Strong defensive ${hallType}${hallLevel} base ${year} with link. Anti everything ${hallName} ${hallLevel} layout - copy directly to Clash of Clans!`,
  };

  const description = descriptions[baseType] ||
    `Best ${hallType}${hallLevel} ${typeCapitalized} base layout ${year} with one-click copy link. ${hallName} Level ${hallLevel} base design for Clash of Clans.`;

  return generatePageMeta({
    title,
    description,
    path: `/bases/${hallKey}/${baseType}/${baseNumber}`,
    image: base.originalImageUrl,
  });
}

export default function BaseDetailPage({ params }) {
  const [hallKey, baseType, baseNumber] = params.slug || [];

  if (!hallKey || !baseType || !baseNumber) {
    notFound();
  }

  const hallMatch = hallKey.match(/^(th|bh)(\d+)$/i);
  if (!hallMatch) notFound();

  const hallType = hallMatch[1].toUpperCase();
  const hallLevel = parseInt(hallMatch[2], 10);
  const base = getBaseById(hallType, hallLevel, baseType, parseInt(baseNumber, 10));

  if (!base) {
    notFound();
  }

  const relatedBases = getBasesByLevel(hallType, hallLevel)
    .filter(b => b.baseNumber !== base.baseNumber)
    .slice(0, 3);

  const baseStructuredData = generateBaseStructuredData(base);
  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: `${hallType} Bases`, path: hallType === 'TH' ? '/th' : '/bh' },
    { name: `${hallType}${hallLevel}`, path: hallType === 'TH' ? `/th/${hallLevel}` : `/bh/${hallLevel}` },
    { name: `${baseType} #${baseNumber}`, path: `/bases/${hallKey}/${baseType}/${baseNumber}` },
  ]);

  const imageUrl = base.originalImageUrl || base.thumbnailUrl;
  const levelPath = hallType === 'TH' ? `/th/${hallLevel}` : `/bh/${hallLevel}`;

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
      <nav className="text-sm text-muted mb-6">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <Link href={levelPath} className="hover:text-white transition-colors">{hallType}{hallLevel} Bases</Link>
        <span className="mx-2">/</span>
        <span className="text-white">{baseType.charAt(0).toUpperCase() + baseType.slice(1)} #{baseNumber}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Image */}
        <div className="lg:col-span-2">
          <div className="relative aspect-square bg-surface-100 rounded-2xl overflow-hidden border border-white/5">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={base.title || `${hallType}${hallLevel} ${baseType} base layout #${baseNumber}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-24 h-24 text-surface-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              baseUrl={`/bases/${hallKey}/${baseType}/${baseNumber}`}
            />

            {/* How to Use */}
            <div className="mt-8 pt-6 border-t border-white/5">
              <h3 className="font-semibold mb-4">How to Use</h3>
              <ol className="text-sm text-muted space-y-3">
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium flex-shrink-0">1</span>
                  <span>Click &quot;Copy Base Link&quot; above</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium flex-shrink-0">2</span>
                  <span>Open Clash of Clans</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium flex-shrink-0">3</span>
                  <span>Go to your village editor</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium flex-shrink-0">4</span>
                  <span>Tap the layout icon and select &quot;New Layout&quot;</span>
                </li>
                <li className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-surface-200 flex items-center justify-center text-xs font-medium flex-shrink-0">5</span>
                  <span>The base will be imported automatically</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Related Bases */}
      {relatedBases.length > 0 && (
        <section className="mt-16 pt-12 border-t border-white/5">
          <div className="flex items-end justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              More {hallType}{hallLevel} Bases
            </h2>
            <Link href={levelPath} className="text-sm text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedBases.map((relatedBase, index) => (
              <BaseCard key={index} base={relatedBase} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
