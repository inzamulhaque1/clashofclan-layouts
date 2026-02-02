import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';

export const metadata = {
  title: "Clash Royale Guides 2026 | Pro Tips, Strategies & Tutorials",
  description: "Master Clash Royale with our comprehensive guides. Beginner tutorials, deck building strategies, elixir management, and pro tips to reach Ultimate Champion.",
  keywords: [
    "clash royale guides",
    "clash royale tips",
    "clash royale strategies",
    "clash royale tutorial",
    "how to play clash royale",
    "clash royale beginner guide"
  ],
  openGraph: {
    title: "Clash Royale Guides 2026 | Pro Tips & Strategies",
    description: "Master Clash Royale with our comprehensive guides and tutorials.",
  },
  alternates: {
    canonical: "/clash-royale/guides"
  }
};

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide 2026",
    description: "Everything new players need to know. Elixir management, deck building, and climbing arenas.",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    color: "#1E90FF",
    readTime: "12 min",
    difficulty: "Beginner",
    isAvailable: true
  },
  {
    slug: "elixir-management",
    title: "Elixir Management Mastery",
    description: "Master positive trades, elixir counting, and never leak elixir again.",
    image: GUIDE_IMAGES.elixirGuide.hero,
    color: "#8A2BE2",
    readTime: "10 min",
    difficulty: "Intermediate",
    isAvailable: true
  },
  {
    slug: "deck-building",
    title: "Deck Building Guide",
    description: "Build balanced decks that counter the meta. Win conditions, synergies, and archetypes.",
    image: GUIDE_IMAGES.deckBuildingGuide.hero,
    color: "#FFD700",
    readTime: "15 min",
    difficulty: "Intermediate",
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
          style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #8A2BE2 100%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-blue-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/clash-royale" className="hover:text-blue-500">Clash Royale</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Guides</span>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
            Clash Royale Guides
          </h1>
          <p className="text-xl max-w-2xl" style={{ color: 'var(--text-muted)' }}>
            Master Clash Royale with our comprehensive guides. From beginner tutorials to advanced strategies.
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
                href={`/clash-royale/guides/${guide.slug}`}
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
                  <span
                    className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold"
                    style={{ background: guide.color, color: 'white' }}
                  >
                    {guide.difficulty}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {guide.title}
                  </h2>
                  <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                    {guide.description}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <span style={{ color: 'var(--text-muted)' }}>{guide.readTime} read</span>
                    <span className="text-blue-500 font-semibold group-hover:underline">Read Guide →</span>
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
                  <div
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(138, 43, 226, 0.9)', color: 'white' }}
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
            background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.1), rgba(138, 43, 226, 0.1))',
            border: '1px solid rgba(30, 144, 255, 0.2)'
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Looking for Meta Decks?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Check out our tier list and top meta decks to find the perfect deck for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/clash-royale/tier-list"
              className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              View Tier List
            </Link>
            <Link
              href="/clash-royale"
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Meta Decks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
