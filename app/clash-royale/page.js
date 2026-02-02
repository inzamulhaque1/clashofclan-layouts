'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CARDS, CARD_TYPES, TIERS, META_DECKS, getTopCards, getCardsByTier } from '@/lib/clash-royale/cards';
import { GUIDE_IMAGES, GENERAL_IMAGES } from '@/lib/clash-royale/images';

export default function ClashRoyaleHomePage() {
  const [selectedTier, setSelectedTier] = useState('S');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const topCards = getTopCards(8);
  const tierCards = getCardsByTier(selectedTier);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: 'var(--bg-primary)' }}>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src={GENERAL_IMAGES.heroBanner.url}
            alt={GENERAL_IMAGES.heroBanner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-bold mb-8 bg-white/10 backdrop-blur-md border border-white/20">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-white tracking-wide">SEASON 56 • META UPDATE LIVE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight text-white">
              CLASH
              <span className="block text-blue-400">ROYALE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl mb-6 text-white/70 font-light max-w-2xl mx-auto">
              The Ultimate Competitive Resource
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              {[
                { value: '100+', label: 'CARDS' },
                { value: '52%', label: 'AVG WIN RATE' },
                { value: 'DAILY', label: 'UPDATES' },
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-black text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clash-royale/tier-list"
                className="group px-10 py-5 rounded-2xl font-bold text-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <span className="flex items-center justify-center gap-2">
                  View Tier List
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/clash-royale/guides"
                className="px-10 py-5 rounded-2xl font-bold text-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Pro Guides
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="relative -mt-12 z-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 rounded-3xl shadow-xl"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          {[
            { value: '100+', label: 'Cards', icon: '🃏', color: '#3B82F6' },
            { value: META_DECKS.length, label: 'Meta Decks', icon: '🏆', color: '#F59E0B' },
            { value: '3', label: 'Pro Guides', icon: '📚', color: '#10B981' },
            { value: 'Daily', label: 'Updates', icon: '🔄', color: '#8B5CF6' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-2xl transition-all duration-300 hover:scale-105" style={{ background: 'var(--surface-50)' }}>
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black" style={{ color: stat.color }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Cards Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(59, 130, 246, 0.1)' }}>
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-blue-500 font-bold text-sm tracking-wider uppercase">Meta Snapshot</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
                Top Performing Cards
              </h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--text-muted)' }}>Highest win rates in Grand Challenges</p>
            </div>
            <Link
              href="/clash-royale/tier-list"
              className="group flex items-center gap-3 text-blue-500 font-bold hover:text-blue-600 transition-colors"
            >
              <span>View Full Tier List</span>
              <div className="w-10 h-10 rounded-full border-2 border-blue-500 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {topCards.map((card, index) => (
              <div
                key={card.id}
                className="group relative"
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 hover:shadow-2xl"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg shadow-lg"
                      style={{
                        background: index < 3 ? '#FFD700' : 'var(--surface-200)',
                        color: index < 3 ? '#000' : 'var(--text-primary)'
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Tier Badge */}
                  <div
                    className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg font-bold text-xs tracking-wider text-white shadow-lg"
                    style={{ background: TIERS[card.tier].color }}
                  >
                    {card.tier}-TIER
                  </div>

                  {/* Card Image */}
                  <div className="pt-16 pb-6 px-6 flex items-center justify-center" style={{ background: 'var(--surface-50)' }}>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-all duration-500 group-hover:scale-110"
                      style={{
                        filter: hoveredCard === card.id ? `drop-shadow(0 0 20px ${TIERS[card.tier].color}80)` : 'none'
                      }}
                    />
                  </div>

                  {/* Card Info */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg mb-3 truncate" style={{ color: 'var(--text-primary)' }}>{card.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(139, 92, 246, 0.15)' }}>
                          <span className="text-purple-500 text-xs font-bold">{card.elixir}</span>
                        </div>
                        <span style={{ color: 'var(--text-muted)' }} className="text-sm">Elixir</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-500 font-black text-xl">{card.winRate}%</div>
                        <div className="text-xs" style={{ color: 'var(--text-muted)' }}>WIN RATE</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier List Interactive Section */}
      <section className="py-20 sm:py-24" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(139, 92, 246, 0.1)' }}>
              <div className="w-2 h-2 rounded-full bg-purple-500" />
              <span className="text-purple-500 font-bold text-sm tracking-wider uppercase">Interactive</span>
              <div className="w-2 h-2 rounded-full bg-purple-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Card Tier List
            </h2>
            <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Click on any tier to explore cards
            </p>
          </div>

          {/* Tier Selector */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            {Object.entries(TIERS).map(([tier, data]) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className="relative px-6 sm:px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300"
                style={{
                  background: selectedTier === tier ? data.color : 'var(--surface-100)',
                  color: selectedTier === tier ? '#fff' : 'var(--text-muted)',
                  border: `2px solid ${selectedTier === tier ? data.color : 'var(--border)'}`,
                  transform: selectedTier === tier ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: selectedTier === tier ? `0 10px 40px -10px ${data.color}` : 'none'
                }}
              >
                <span className="text-2xl sm:text-3xl">{tier}</span>
                <span className="ml-2 text-sm opacity-70">({getCardsByTier(tier).length})</span>
              </button>
            ))}
          </div>

          {/* Cards Display */}
          <div
            className="p-6 sm:p-8 rounded-3xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4">
              {tierCards.slice(0, 16).map((card) => (
                <div
                  key={card.id}
                  className="group rounded-xl p-3 text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                  style={{ background: 'var(--surface-50)', border: '1px solid var(--border)' }}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="text-[10px] sm:text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>{card.name}</div>
                  <div className="text-[10px] font-bold text-green-500">{card.winRate}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/clash-royale/tier-list"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-purple-500 text-white transition-all duration-300 hover:bg-purple-600 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <span>View Complete Tier List</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Meta Decks Section */}
      <section className="py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="text-amber-500 font-bold text-sm tracking-wider uppercase">Competitive</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black" style={{ color: 'var(--text-primary)' }}>
                Meta Decks
              </h2>
              <p className="mt-2 text-lg" style={{ color: 'var(--text-muted)' }}>Best performing decks in ranked play</p>
            </div>
          </div>

          {/* Decks Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {META_DECKS.slice(0, 6).map((deck) => (
              <div
                key={deck.id}
                className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                {/* Top Accent */}
                <div className="h-1 bg-amber-500" />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-xl pr-4" style={{ color: 'var(--text-primary)' }}>{deck.name}</h3>
                    <div className="flex-shrink-0 px-3 py-1 rounded-lg font-black text-sm" style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#10B981' }}>
                      {deck.winRate}%
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>
                      {deck.avgElixir} Elixir
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6' }}>
                      {deck.archetype}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#F59E0B' }}>
                      {deck.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-6 line-clamp-2" style={{ color: 'var(--text-muted)' }}>{deck.description}</p>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-blue-500 font-semibold text-sm group-hover:gap-4 transition-all">
                    <span>View Deck</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 sm:py-24" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'rgba(16, 185, 129, 0.1)' }}>
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-green-500 font-bold text-sm tracking-wider uppercase">Learn & Improve</span>
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Pro Guides
            </h2>
            <p className="text-lg max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Master the game with in-depth strategies
            </p>
          </div>

          {/* Guides Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                href: '/clash-royale/guides/beginners-guide',
                image: GUIDE_IMAGES.beginnersGuide.hero,
                title: "Beginner's Guide",
                subtitle: 'Start your journey',
                time: '12 min',
                color: '#3B82F6',
                tag: 'BEGINNER'
              },
              {
                href: '/clash-royale/guides/elixir-management',
                image: GUIDE_IMAGES.elixirGuide.hero,
                title: 'Elixir Mastery',
                subtitle: 'Win more trades',
                time: '10 min',
                color: '#8B5CF6',
                tag: 'STRATEGY'
              },
              {
                href: '/clash-royale/guides/deck-building',
                image: GUIDE_IMAGES.deckBuildingGuide.hero,
                title: 'Deck Building',
                subtitle: 'Create winning decks',
                time: '15 min',
                color: '#F59E0B',
                tag: 'ADVANCED'
              },
            ].map((guide, index) => (
              <Link
                key={index}
                href={guide.href}
                className="group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={guide.image.url}
                    alt={guide.image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-lg font-bold text-xs tracking-wider text-white"
                    style={{ background: guide.color }}
                  >
                    {guide.tag}
                  </div>

                  {/* Time */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg font-semibold text-xs text-white bg-black/40 backdrop-blur-sm">
                    {guide.time}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-black mb-1" style={{ color: 'var(--text-primary)' }}>{guide.title}</h3>
                  <p className="mb-4" style={{ color: 'var(--text-muted)' }}>{guide.subtitle}</p>

                  <div className="flex items-center gap-2 font-semibold text-sm" style={{ color: guide.color }}>
                    <span>Read Guide</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <Link
              href="/clash-royale/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-500 border-2 border-green-500/30 transition-all hover:bg-green-500 hover:text-white hover:border-green-500"
            >
              View All Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 sm:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-6">👑</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6" style={{ color: 'var(--text-primary)' }}>
            Ready to Dominate?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Use our tier lists, meta decks, and guides to climb to Ultimate Champion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/clash-royale/tier-list"
              className="px-10 py-5 rounded-2xl font-bold text-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20"
            >
              View Tier List
            </Link>
            <Link
              href="/clash-royale/guides/beginners-guide"
              className="px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
