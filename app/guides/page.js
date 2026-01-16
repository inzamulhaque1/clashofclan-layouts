import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';

export const metadata = generatePageMeta({
  title: 'Clash of Clans Guides 2026 - Attack Strategies, Base Building Tips',
  description: 'Learn Clash of Clans attack strategies, base building tips, and pro guides for TH3-TH18. Master war attacks, farming strategies, and trophy pushing techniques!',
  path: '/guides',
});

const GUIDES = [
  {
    slug: 'how-to-copy-base',
    title: 'How to Copy a Base in Clash of Clans',
    description: 'Step-by-step guide to copy and import base layouts using copy links in CoC.',
    category: 'Basics',
    icon: '📋',
  },
  {
    slug: 'best-th18-attack-strategies',
    title: 'Best TH18 Attack Strategies 2026',
    description: 'Top attack strategies for Town Hall 18 including Root Rider, Super Witch, and more.',
    category: 'Attack',
    icon: '⚔️',
  },
  {
    slug: 'cwl-base-building-tips',
    title: 'CWL Base Building Tips',
    description: 'How to build anti-3 star war bases for Clan War Leagues at any Town Hall level.',
    category: 'Defense',
    icon: '🏰',
  },
  {
    slug: 'farming-vs-war-base',
    title: 'Farming vs War Base: What\'s the Difference?',
    description: 'Understanding when to use farming bases vs war bases and how to switch between them.',
    category: 'Basics',
    icon: '🌾',
  },
  {
    slug: 'anti-3-star-base-design',
    title: 'Anti 3-Star Base Design Principles',
    description: 'Learn the core principles of designing bases that are hard to 3-star in wars.',
    category: 'Defense',
    icon: '🛡️',
  },
  {
    slug: 'legend-league-pushing',
    title: 'Legend League Pushing Guide',
    description: 'How to push to Legend League and maintain trophies with the best strategies.',
    category: 'Trophy',
    icon: '🏆',
  },
];

export default function GuidesPage() {
  const categories = [...new Set(GUIDES.map(g => g.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Clash of Clans <span className="text-primary">Guides</span>
        </h1>
        <p className="text-muted max-w-xl">
          Master Clash of Clans with our comprehensive guides on attack strategies, base building, and more.
        </p>
      </div>

      {/* Guides by Category */}
      {categories.map(category => (
        <section key={category} className="mb-12">
          <h2 className="text-xl font-semibold mb-6">{category} Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDES.filter(g => g.category === category).map(guide => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="card p-6 hover:border-primary/50 transition-all group"
              >
                <div className="text-3xl mb-3">{guide.icon}</div>
                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                  {guide.title}
                </h3>
                <p className="text-sm text-muted line-clamp-2">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* SEO Content */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-4">Learn Clash of Clans</h2>
        <div className="text-muted space-y-3 max-w-2xl">
          <p>
            Whether you&apos;re a new player or a seasoned veteran, our guides cover everything you need
            to dominate in Clash of Clans. From basic base copying to advanced war strategies.
          </p>
        </div>
      </section>
    </div>
  );
}
