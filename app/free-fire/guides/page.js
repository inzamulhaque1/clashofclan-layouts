'use client';

import Link from 'next/link';
import { GUIDE_IMAGES } from '@/lib/free-fire/images';

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Complete Guide 2026",
    description: "Everything new players need to know - from basic controls to winning your first match. Perfect starting point for Free Fire.",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    category: "Basics",
    readTime: "12 min",
    color: "#FF5722",
    topics: ["Controls", "Looting", "Combat Basics", "Survival Tips"]
  },
  {
    slug: "clash-squad",
    title: "Clash Squad Mastery Guide",
    description: "Dominate 4v4 Clash Squad mode with team strategies, economy management, and round-by-round tactics.",
    image: GUIDE_IMAGES.clashSquadGuide.hero,
    category: "Game Modes",
    readTime: "10 min",
    color: "#10B981",
    topics: ["Economy", "Team Comps", "Map Control", "Clutch Tips"]
  },
  {
    slug: "rank-push",
    title: "Rank Push to Grandmaster",
    description: "Climb the ranked ladder with proven strategies. From Bronze to Grandmaster - everything you need to rank up fast.",
    image: GUIDE_IMAGES.rankPushGuide.hero,
    category: "Ranked",
    readTime: "15 min",
    color: "#F59E0B",
    topics: ["Landing Spots", "Rotations", "End Game", "Point System"]
  },
  {
    slug: "sensitivity",
    title: "Best Sensitivity Settings 2026",
    description: "Optimize your aim with perfect sensitivity settings for different devices. Includes pro player settings.",
    image: GUIDE_IMAGES.sensitivityGuide.hero,
    category: "Settings",
    readTime: "8 min",
    color: "#8B5CF6",
    topics: ["General", "Red Dot", "Scope", "Free Look"]
  },
  {
    slug: "character-combos",
    title: "Best Character Combinations",
    description: "Learn the most powerful character skill combinations for Battle Royale and Clash Squad modes.",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    category: "Strategy",
    readTime: "10 min",
    color: "#EC4899",
    topics: ["Rush Combos", "Support Combos", "Solo vs Squad", "Meta Builds"]
  },
  {
    slug: "weapon-mastery",
    title: "Weapon Mastery Guide",
    description: "Master every weapon type in Free Fire. Learn recoil patterns, best attachments, and when to use each gun.",
    image: GUIDE_IMAGES.rankPushGuide.hero,
    category: "Weapons",
    readTime: "14 min",
    color: "#3B82F6",
    topics: ["AR Guide", "SMG Guide", "Sniper Guide", "Shotgun Guide"]
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FFC107 100%)' }} />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Guides</span>
          </nav>

          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">📚</span>
            <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Free Fire Guides
            </h1>
          </div>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Master every aspect of Free Fire with our comprehensive guides. From beginner basics to pro strategies.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/free-fire/guides/${guide.slug}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={guide.image.url}
                  alt={guide.image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: guide.color, color: '#fff' }}
                >
                  {guide.category}
                </div>

                {/* Read Time */}
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'rgba(0,0,0,0.6)', color: '#fff' }}
                >
                  {guide.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h2>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  {guide.description}
                </p>

                {/* Topics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.topics.map((topic, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 rounded text-xs"
                      style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: guide.color }}>
                  Read Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* More Guides Coming */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="rounded-2xl p-8 text-center"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          <span className="text-4xl mb-4 block">🎮</span>
          <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
            More Guides Coming Soon
          </h3>
          <p style={{ color: 'var(--text-muted)' }}>
            We're constantly adding new guides. Check back regularly for updates!
          </p>
        </div>
      </section>
    </div>
  );
}
