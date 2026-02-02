import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

const allGuides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide 2026",
    description: "Everything new players need to know to start winning",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    color: "#10B981",
    readTime: "15 min",
  },
  {
    slug: "ranked-guide",
    title: "How to Push Ranked",
    description: "Climb to Mythic rank with these pro strategies",
    image: GUIDE_IMAGES.rankedGuide.hero,
    color: "#F59E0B",
    readTime: "12 min",
  },
  {
    slug: "star-powers-gadgets",
    title: "Best Star Powers & Gadgets",
    description: "Optimal builds for every brawler in the meta",
    image: GUIDE_IMAGES.starPowersGuide.hero,
    color: "#EAB308",
    readTime: "10 min",
  },
  {
    slug: "gem-spending",
    title: "Gem Spending Guide",
    description: "Maximize value from your gems and Brawl Pass",
    image: GUIDE_IMAGES.gemSpendingGuide.hero,
    color: "#06B6D4",
    readTime: "8 min",
  },
  {
    slug: "club-league",
    title: "Club League Strategy",
    description: "Dominate Club League with coordinated team play",
    image: GUIDE_IMAGES.clubLeagueGuide.hero,
    color: "#8B5CF6",
    readTime: "10 min",
  },
  {
    slug: "map-control",
    title: "Map Control Tips",
    description: "Master positioning and zone control in every mode",
    image: GUIDE_IMAGES.mapControlGuide.hero,
    color: "#EC4899",
    readTime: "12 min",
  },
];

export default function RelatedGuides({ currentSlug, maxGuides = 3 }) {
  // Filter out current guide and get related ones
  const relatedGuides = allGuides
    .filter(guide => guide.slug !== currentSlug)
    .slice(0, maxGuides);

  return (
    <section className="mt-12 pt-8" style={{ borderTop: '1px solid var(--border)' }}>
      <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
        Related Guides
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedGuides.map((guide) => (
          <Link
            key={guide.slug}
            href={`/brawl-stars/guides/${guide.slug}`}
            className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
            style={{
              background: 'var(--surface-100)',
              border: '1px solid var(--border)',
            }}
          >
            {/* Image */}
            <div className="relative w-full h-28 overflow-hidden">
              <img
                src={guide.image.url}
                alt={guide.image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-sm mb-1 group-hover:text-orange-500 transition-colors line-clamp-1" style={{ color: 'var(--text-primary)' }}>
                {guide.title}
              </h3>
              <p className="text-xs mb-2 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                {guide.description}
              </p>
              <div className="flex items-center justify-between text-xs">
                <span style={{ color: 'var(--text-muted)' }}>{guide.readTime}</span>
                <span style={{ color: guide.color }} className="font-semibold">Read →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
