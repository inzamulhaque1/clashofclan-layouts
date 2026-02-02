'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BRAWLERS, BRAWLER_CLASSES, TIERS, GAME_MODES, getTopBrawlers, getBrawlersByTier } from '@/lib/brawl-stars/brawlers';
import { GUIDE_IMAGES } from '@/lib/brawl-stars/images';

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide 2026",
    description: "Everything new players need to know to start winning",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    color: "#10B981",
  },
  {
    slug: "ranked-guide",
    title: "How to Push Ranked",
    description: "Climb to Mythic rank with these pro strategies",
    image: GUIDE_IMAGES.rankedGuide.hero,
    color: "#F59E0B",
  },
  {
    slug: "star-powers-gadgets",
    title: "Best Star Powers & Gadgets",
    description: "Optimal builds for every brawler in the meta",
    image: GUIDE_IMAGES.starPowersGuide.hero,
    color: "#EAB308",
  },
  {
    slug: "gem-spending",
    title: "Gem Spending Guide",
    description: "Maximize value from your gems and Brawl Pass",
    image: GUIDE_IMAGES.gemSpendingGuide.hero,
    color: "#06B6D4",
  },
  {
    slug: "club-league",
    title: "Club League Strategy",
    description: "Dominate Club League with coordinated team play",
    image: GUIDE_IMAGES.clubLeagueGuide.hero,
    color: "#8B5CF6",
  },
  {
    slug: "map-control",
    title: "Map Control Tips",
    description: "Master positioning and zone control in every mode",
    image: GUIDE_IMAGES.mapControlGuide.hero,
    color: "#EC4899",
  },
];

export default function BrawlStarsHomePage() {
  const [selectedTier, setSelectedTier] = useState('S');
  const [btnHover, setBtnHover] = useState(false);
  const topBrawlers = getTopBrawlers(10);
  const tierBrawlers = getBrawlersByTier(selectedTier);

  // Get random featured brawlers for hero
  const featuredBrawlers = BRAWLERS.filter(b => b.tier === 'S').slice(0, 5);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section - Eye-catching */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 30%, #8B5CF6 70%, #06B6D4 100%)',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 107, 53, 0.4) 0%, transparent 40%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.3) 0%, transparent 40%)'
          }} />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left relative z-20">
              {/* Live Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(244, 63, 94, 0.2))',
                  color: '#FF6B35',
                  border: '1px solid rgba(255, 107, 53, 0.4)',
                  boxShadow: '0 0 20px rgba(255, 107, 53, 0.2)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Live Meta Update - February 2026
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <span style={{ color: 'var(--text-primary)' }}>Dominate</span>
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Brawl Stars
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#FF6B35"/>
                        <stop offset="100%" stopColor="#8B5CF6"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
                The ultimate resource for competitive players. Tier lists, pro strategies, and meta analysis for all <strong style={{ color: 'var(--text-primary)' }}>{BRAWLERS.length} brawlers</strong>.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {[
                  { value: BRAWLERS.length, label: 'Brawlers', color: '#FF6B35' },
                  { value: `${Math.max(...BRAWLERS.map(b => b.winRate))}%`, label: 'Top Win Rate', color: '#10B981' },
                  { value: GAME_MODES.length, label: 'Game Modes', color: '#8B5CF6' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
                <Link
                  href="/brawl-stars/tier-list"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)',
                    boxShadow: '0 10px 40px -10px rgba(255, 107, 53, 0.5)',
                    color: '#ffffff'
                  }}
                >
                  <span className="relative z-10">View Tier List</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
                </Link>
                <Link
                  href="/brawl-stars/brawlers"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: btnHover ? 'rgba(255, 107, 53, 0.1)' : 'var(--surface-100)',
                    border: btnHover ? '2px solid #FF6B35' : '2px solid var(--border)',
                    color: btnHover ? '#FF6B35' : 'var(--text-primary)'
                  }}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                >
                  All Brawlers
                </Link>
              </div>
            </div>

            {/* Right - Featured Brawlers Showcase */}
            <div className="hidden lg:block relative z-10">
              <div className="relative w-full h-[500px]">
                {/* Main featured brawler */}
                <Link
                  href={`/brawl-stars/brawlers/${featuredBrawlers[0]?.id}`}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-3xl p-4 flex items-center justify-center hover:scale-105 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.2), rgba(244, 63, 94, 0.2))',
                    border: '2px solid rgba(255, 107, 53, 0.4)',
                    boxShadow: '0 20px 60px -20px rgba(255, 107, 53, 0.5)'
                  }}
                  title={featuredBrawlers[0]?.name}
                >
                  <img src={featuredBrawlers[0]?.image} alt={featuredBrawlers[0]?.name} className="w-32 h-32 object-contain" />
                </Link>
                {/* Surrounding brawlers */}
                {featuredBrawlers.slice(1).map((brawler, i) => {
                  const positions = [
                    { top: '5%', left: '10%' },
                    { top: '10%', right: '5%' },
                    { bottom: '15%', left: '5%' },
                    { bottom: '5%', right: '10%' },
                  ];
                  return (
                    <Link
                      key={brawler.id}
                      href={`/brawl-stars/brawlers/${brawler.id}`}
                      className="absolute w-24 h-24 rounded-2xl p-2 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                      style={{
                        ...positions[i],
                        background: 'var(--surface-100)',
                        border: '1px solid var(--border)',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                      }}
                      title={brawler.name}
                    >
                      <img src={brawler.image} alt={brawler.name} className="w-16 h-16 object-contain" />
                    </Link>
                  );
                })}
                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-20 h-20 rounded-full pointer-events-none" style={{ background: 'rgba(255, 107, 53, 0.1)', filter: 'blur(30px)' }} />
                <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(139, 92, 246, 0.1)', filter: 'blur(40px)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--bg-primary)"/>
          </svg>
        </div>
      </section>

      {/* Top Meta Brawlers - Carousel Style */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #FF6B35, #F43F5E)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FF6B35' }}>Meta Snapshot</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Top 10 Brawlers
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Highest win rates in competitive play
            </p>
          </div>
          <Link
            href="/brawl-stars/tier-list"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}
          >
            Full Tier List
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {topBrawlers.map((brawler, index) => (
            <Link
              key={brawler.id}
              href={`/brawl-stars/brawlers/${brawler.id}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Rank Badge */}
              <div
                className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black z-10"
                style={{
                  background: index < 3 ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 'var(--surface-200)',
                  color: index < 3 ? '#000' : 'var(--text-primary)',
                  boxShadow: index < 3 ? '0 4px 15px -3px rgba(255, 215, 0, 0.5)' : 'none'
                }}
              >
                {index + 1}
              </div>

              {/* Tier Badge */}
              <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold z-10"
                style={{ background: TIERS[brawler.tier].color, color: '#fff' }}
              >
                {brawler.tier}
              </div>

              {/* Image Container */}
              <div
                className="aspect-square p-6 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${BRAWLER_CLASSES[brawler.class].color}10, ${BRAWLER_CLASSES[brawler.class].color}05)` }}
              >
                <img
                  src={brawler.image}
                  alt={brawler.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${BRAWLER_CLASSES[brawler.class].color}20 0%, transparent 70%)`
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                  {brawler.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${BRAWLER_CLASSES[brawler.class].color}20`, color: BRAWLER_CLASSES[brawler.class].color }}>
                    {BRAWLER_CLASSES[brawler.class].name}
                  </span>
                  <span className="text-sm font-bold" style={{ color: '#10B981' }}>
                    {brawler.winRate}%
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Interactive Tier List Preview */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #8B5CF6, #06B6D4)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8B5CF6' }}>Interactive</span>
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #06B6D4, #8B5CF6)' }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Brawler Tier List
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Click on any tier to explore brawlers in that category
            </p>
          </div>

          {/* Tier Tabs - More prominent */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(TIERS).map(([tier, data]) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className="relative px-6 py-3 rounded-2xl font-bold text-lg transition-all duration-300"
                style={{
                  background: selectedTier === tier ? data.color : 'var(--surface-100)',
                  color: selectedTier === tier ? '#fff' : 'var(--text-muted)',
                  border: `2px solid ${selectedTier === tier ? data.color : 'var(--border)'}`,
                  transform: selectedTier === tier ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: selectedTier === tier ? `0 10px 30px -10px ${data.color}80` : 'none'
                }}
              >
                {tier} Tier
                <span
                  className="ml-2 px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: selectedTier === tier ? 'rgba(255,255,255,0.2)' : 'var(--surface-200)',
                    color: selectedTier === tier ? '#fff' : 'var(--text-muted)'
                  }}
                >
                  {getBrawlersByTier(tier).length}
                </span>
              </button>
            ))}
          </div>

          {/* Tier Info Card */}
          <div
            className="max-w-2xl mx-auto mb-8 p-4 rounded-2xl text-center"
            style={{
              background: `linear-gradient(135deg, ${TIERS[selectedTier].color}15, ${TIERS[selectedTier].color}05)`,
              border: `1px solid ${TIERS[selectedTier].color}30`
            }}
          >
            <span className="font-bold text-lg" style={{ color: TIERS[selectedTier].color }}>{TIERS[selectedTier].name}</span>
            <span className="mx-2" style={{ color: 'var(--text-muted)' }}>-</span>
            <span style={{ color: 'var(--text-muted)' }}>{TIERS[selectedTier].description}</span>
          </div>

          {/* Brawlers Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-3">
            {tierBrawlers.map((brawler) => (
              <Link
                key={brawler.id}
                href={`/brawl-stars/brawlers/${brawler.id}`}
                className="group p-3 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                  boxShadow: '0 2px 10px -3px rgba(0,0,0,0.1)'
                }}
              >
                <img
                  src={brawler.image}
                  alt={brawler.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 object-contain transition-transform group-hover:scale-110"
                />
                <div className="text-[10px] sm:text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                  {brawler.name}
                </div>
                <div className="text-[10px] font-bold" style={{ color: '#10B981' }}>
                  {brawler.winRate}%
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/brawl-stars/tier-list"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)',
                boxShadow: '0 10px 40px -10px rgba(255, 107, 53, 0.5)'
              }}
            >
              View Complete Tier List
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Game Modes - Card Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">🎮</span>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FF6B35' }}>Game Modes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
            Best Brawlers by Mode
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            Find the perfect brawler for every game mode
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GAME_MODES.map((mode) => (
            <Link
              key={mode.id}
              href={`/brawl-stars/modes/${mode.id}`}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 overflow-hidden"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Hover gradient */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.05), rgba(139, 92, 246, 0.05))' }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">{mode.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{mode.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: 'rgba(255, 107, 53, 0.1)', color: '#FF6B35' }}
                    >
                      {mode.type}
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {mode.description}
                </p>
                <div className="flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3" style={{ color: '#FF6B35' }}>
                  View Best Brawlers
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brawler Classes - Visual Cards */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Brawler Classes
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Understand each role to build the perfect team composition
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(BRAWLER_CLASSES).map(([classId, classData]) => {
              const classCount = BRAWLERS.filter(b => b.class === classId).length;
              return (
                <Link
                  key={classId}
                  href={`/brawl-stars/brawlers?class=${classId}`}
                  className="group relative p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                  style={{
                    background: 'var(--surface-100)',
                    border: `2px solid ${classData.color}30`,
                  }}
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{ background: classData.color }}
                  />
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <span className="text-3xl">{classData.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: classData.color }}>{classData.name}</h3>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{classCount} brawlers</span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {classData.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">📚</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8B5CF6' }}>Pro Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Strategies & Tips
            </h2>
            <p className="text-base max-w-lg" style={{ color: 'var(--text-muted)' }}>
              Level up your game with expert strategies
            </p>
          </div>
          <Link
            href="/brawl-stars/guides"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}
          >
            All Guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/brawl-stars/guides/${guide.slug}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Guide Image */}
              <div className="relative w-full h-36 overflow-hidden">
                <img
                  src={guide.image.url}
                  alt={guide.image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Available Badge */}
                <div
                  className="absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-bold"
                  style={{ background: guide.color, color: 'white' }}
                >
                  Available
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {guide.description}
                </p>
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

      {/* CTA Section - Gradient Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 50%, #8B5CF6 100%)',
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to Climb the Ranks?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Use our tier lists and guides to dominate Brawl Stars. Updated daily with the latest meta changes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/brawl-stars/tier-list"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: '#fff', color: '#FF6B35' }}
              >
                View Tier List
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/brawl-stars/brawlers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                Browse All Brawlers
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
