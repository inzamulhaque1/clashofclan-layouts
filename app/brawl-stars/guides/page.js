import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

export const metadata = {
  title: "Brawl Stars Guides 2026 | Pro Tips, Strategies & Tutorials",
  description: "Master Brawl Stars with our comprehensive guides. Beginner tutorials, ranked strategies, best builds, and pro tips to dominate every game mode.",
  keywords: [
    "brawl stars guides",
    "brawl stars tips",
    "brawl stars strategies",
    "brawl stars tutorial",
    "how to play brawl stars",
    "brawl stars beginner guide"
  ],
  openGraph: {
    title: "Brawl Stars Guides 2026 | Pro Tips & Strategies",
    description: "Master Brawl Stars with our comprehensive guides and tutorials.",
  },
  alternates: {
    canonical: "/brawl-stars/guides"
  }
};

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide 2026",
    description: "Everything new players need to know to start winning. Complete tutorial covering controls, game modes, brawlers, and progression.",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    color: "#10B981",
    readTime: "15 min",
    difficulty: "Beginner",
    isAvailable: true
  },
  {
    slug: "ranked-guide",
    title: "How to Push Ranked",
    description: "Climb to Mythic rank with these pro strategies. Learn drafting, team compositions, and map-specific tactics.",
    image: GUIDE_IMAGES.rankedGuide.hero,
    color: "#F59E0B",
    readTime: "12 min",
    difficulty: "Advanced",
    isAvailable: true
  },
  {
    slug: "star-powers-gadgets",
    title: "Best Star Powers & Gadgets",
    description: "Optimal builds for every brawler in the meta. Know which Star Powers and Gadgets to prioritize.",
    image: GUIDE_IMAGES.starPowersGuide.hero,
    color: "#EAB308",
    readTime: "10 min",
    difficulty: "Intermediate",
    isAvailable: true
  },
  {
    slug: "gem-spending",
    title: "Gem Spending Guide",
    description: "Maximize value from your gems and Brawl Pass. Learn when to spend and when to save.",
    image: GUIDE_IMAGES.gemSpendingGuide.hero,
    color: "#06B6D4",
    readTime: "8 min",
    difficulty: "Beginner",
    isAvailable: true
  },
  {
    slug: "club-league",
    title: "Club League Strategy",
    description: "Dominate Club League with coordinated team play. Maximize your club's rewards every season.",
    image: GUIDE_IMAGES.clubLeagueGuide.hero,
    color: "#8B5CF6",
    readTime: "10 min",
    difficulty: "Intermediate",
    isAvailable: true
  },
  {
    slug: "map-control",
    title: "Map Control Tips",
    description: "Master positioning and zone control in every mode. Learn advanced movement and spacing techniques.",
    image: GUIDE_IMAGES.mapControlGuide.hero,
    color: "#EC4899",
    readTime: "12 min",
    difficulty: "Advanced",
    isAvailable: true
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, #FF6B35 0%, #8B5CF6 100%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-orange-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/brawl-stars" className="hover:text-orange-500">Brawl Stars</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Guides</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Brawl Stars Guides
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Master Brawl Stars with our comprehensive guides. From beginner tutorials to advanced strategies, we've got you covered.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            guide.isAvailable ? (
              <Link
                key={guide.slug}
                href={`/brawl-stars/guides/${guide.slug}`}
                className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Guide Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={guide.image.url}
                    alt={guide.image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Difficulty Badge */}
                  <span
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold"
                    style={{ background: `${guide.color}`, color: 'white' }}
                  >
                    {guide.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {guide.title}
                  </h2>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--text-muted)' }}>{guide.readTime} read</span>
                    <span className="text-orange-500 font-semibold group-hover:underline">Read Guide →</span>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={guide.slug}
                className="relative rounded-2xl overflow-hidden opacity-75"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Guide Image */}
                <div className="relative w-full h-40 overflow-hidden">
                  <img
                    src={guide.image.url}
                    alt={guide.image.alt}
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {/* Coming Soon Badge */}
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(139, 92, 246, 0.9)', color: 'white' }}
                  >
                    Coming Soon
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {guide.title}
                  </h2>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--text-muted)' }}>{guide.readTime} read</span>
                    <span
                      className="px-2 py-1 rounded-full"
                      style={{ background: `${guide.color}20`, color: guide.color }}
                    >
                      {guide.difficulty}
                    </span>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div
          className="p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1), rgba(139, 92, 246, 0.1))',
            border: '1px solid rgba(255, 107, 53, 0.2)'
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Want More Content?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Check out our tier lists and brawler guides for the latest meta analysis.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/brawl-stars/tier-list"
              className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #FF6B35, #F43F5E)' }}
            >
              View Tier List
            </Link>
            <Link
              href="/brawl-stars/brawlers"
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              All Brawlers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
