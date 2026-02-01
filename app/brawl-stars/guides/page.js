import Link from 'next/link';

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
    icon: "🎮",
    color: "#10B981",
    readTime: "15 min",
    difficulty: "Beginner",
    isAvailable: true
  },
  {
    slug: "ranked-guide",
    title: "How to Push Ranked",
    description: "Climb to Mythic rank with these pro strategies. Learn drafting, team compositions, and map-specific tactics.",
    icon: "🏆",
    color: "#F59E0B",
    readTime: "12 min",
    difficulty: "Advanced",
    isAvailable: false
  },
  {
    slug: "star-powers",
    title: "Best Star Powers & Gadgets",
    description: "Optimal builds for every brawler in the meta. Know which Star Powers and Gadgets to prioritize.",
    icon: "⭐",
    color: "#EAB308",
    readTime: "10 min",
    difficulty: "Intermediate",
    isAvailable: false
  },
  {
    slug: "gem-guide",
    title: "Gem Spending Guide",
    description: "Maximize value from your gems and Brawl Pass. Learn when to spend and when to save.",
    icon: "💎",
    color: "#06B6D4",
    readTime: "8 min",
    difficulty: "Beginner",
    isAvailable: false
  },
  {
    slug: "club-league",
    title: "Club League Strategy",
    description: "Dominate Club League with coordinated team play. Maximize your club's rewards every season.",
    icon: "🏅",
    color: "#8B5CF6",
    readTime: "10 min",
    difficulty: "Intermediate",
    isAvailable: false
  },
  {
    slug: "map-control",
    title: "Map Control Tips",
    description: "Master positioning and zone control in every mode. Learn advanced movement and spacing techniques.",
    icon: "🗺️",
    color: "#EC4899",
    readTime: "12 min",
    difficulty: "Advanced",
    isAvailable: false
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
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${guide.color}15` }}
                >
                  {guide.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {guide.description}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 rounded-full" style={{ background: `${guide.color}20`, color: guide.color }}>
                    {guide.difficulty}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>{guide.readTime} read</span>
                </div>
              </Link>
            ) : (
              <div
                key={guide.slug}
                className="relative p-6 rounded-2xl opacity-75"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                }}
              >
                {/* Coming Soon Badge */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#8B5CF6' }}
                >
                  Coming Soon
                </div>

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                  style={{ background: `${guide.color}15` }}
                >
                  {guide.icon}
                </div>
                <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h2>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {guide.description}
                </p>
                <div className="flex items-center gap-3 text-xs">
                  <span className="px-2 py-1 rounded-full" style={{ background: `${guide.color}20`, color: guide.color }}>
                    {guide.difficulty}
                  </span>
                  <span style={{ color: 'var(--text-muted)' }}>{guide.readTime} read</span>
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
