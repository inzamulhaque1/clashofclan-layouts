import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getBasesByLevel } from '@/lib/bases';
import { generatePageMeta, generateBreadcrumbStructuredData } from '@/lib/seo';
import BaseCard from '@/components/BaseCard';

export async function generateStaticParams() {
  return [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(level => ({
    level: String(level),
  }));
}

export async function generateMetadata({ params }) {
  const level = parseInt(params.level, 10);
  if (isNaN(level) || level < 3 || level > 18) return {};

  const bases = getBasesByLevel('TH', level);
  const year = new Date().getFullYear();
  const count = bases.length > 0 ? `${bases.length}+` : 'Best';

  return generatePageMeta({
    title: `Best TH${level} Base Layouts ${year} with Copy Link - Town Hall ${level} War, Farm, Trophy Bases`,
    description: `Download ${count} TH${level} base layouts ${year} with one-click copy links. Best Town Hall ${level} war bases, farming bases, trophy bases, CWL anti 3 star designs. Copy directly to Clash of Clans!`,
    path: `/th/${level}`,
  });
}

const FILTER_TYPES = [
  { key: 'all', label: 'All' },
  { key: 'war', label: 'War' },
  { key: 'farm', label: 'Farm' },
  { key: 'trophy', label: 'Trophy' },
  { key: 'hybrid', label: 'Hybrid' },
];

export default function THLevelPage({ params, searchParams }) {
  const level = parseInt(params.level, 10);
  if (isNaN(level) || level < 3 || level > 18) notFound();

  const allBases = getBasesByLevel('TH', level);
  const typeFilter = searchParams?.type;

  const filteredBases = typeFilter
    ? allBases.filter(b => b.baseType === typeFilter)
    : allBases;

  const typeCounts = {
    all: allBases.length,
    war: allBases.filter(b => b.baseType === 'war').length,
    farm: allBases.filter(b => b.baseType === 'farm').length,
    trophy: allBases.filter(b => b.baseType === 'trophy').length,
    hybrid: allBases.filter(b => b.baseType === 'hybrid').length,
  };

  const breadcrumbs = generateBreadcrumbStructuredData([
    { name: 'Home', path: '/' },
    { name: 'Town Hall', path: '/th' },
    { name: `TH${level}`, path: `/th/${level}` },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Header */}
      <div className="mb-8">
        <Link href="/th" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
          ← All Town Halls
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          TH{level} <span className="text-primary">Base Layouts</span>
        </h1>
        <p className="text-muted">
          {allBases.length} layouts available. Click to copy directly to Clash of Clans.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {FILTER_TYPES.map(({ key, label }) => {
          const count = typeCounts[key] || 0;
          const isActive = (key === 'all' && !typeFilter) || typeFilter === key;
          const href = key === 'all' ? `/th/${level}` : `/th/${level}?type=${key}`;

          if (key !== 'all' && count === 0) return null;

          return (
            <Link
              key={key}
              href={href}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                isActive
                  ? 'bg-primary text-black'
                  : 'bg-surface-100 text-muted hover:text-white hover:bg-surface-200'
              }`}
            >
              {label}
              <span className={`ml-1.5 ${isActive ? 'text-black/60' : 'text-muted'}`}>
                {count}
              </span>
            </Link>
          );
        })}
      </div>

      {/* Grid */}
      {filteredBases.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBases.map((base, index) => (
            <BaseCard key={`${base.baseType}-${base.baseNumber}-${index}`} base={base} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-surface-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">No bases found</h2>
          <p className="text-muted">
            {typeFilter
              ? `No ${typeFilter} bases for TH${level} yet.`
              : `No bases for TH${level} yet.`}
          </p>
          {typeFilter && (
            <Link href={`/th/${level}`} className="text-primary hover:underline mt-2 inline-block">
              View all bases
            </Link>
          )}
        </div>
      )}

      {/* SEO */}
      <section className="mt-16 pt-12 border-t border-white/5">
        <h2 className="text-xl font-semibold mb-4">About TH{level} Bases</h2>
        <div className="text-muted space-y-3 max-w-2xl">
          <p>
            Town Hall {level} introduces {level >= 15 ? 'powerful late-game content' : 'important new features'}.
            The right base design is crucial for both Clan Wars and protecting your resources.
          </p>
        </div>
      </section>
    </div>
  );
}
