'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { CARDS, CARD_TYPES, TIERS, META_DECKS, getTopCards, getCardsByTier } from '@/lib/clash-royale/cards';
import { GUIDE_IMAGES, GENERAL_IMAGES } from '@/lib/clash-royale/images';

export default function ClashRoyaleHomePage() {
  const [selectedTier, setSelectedTier] = useState('S');
  const [isVisible, setIsVisible] = useState(false);
  const topCards = getTopCards(8);
  const tierCards = getCardsByTier(selectedTier);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Image */}
        <div className="absolute inset-0">
          <img
            src={GENERAL_IMAGES.heroBanner.url}
            alt={GENERAL_IMAGES.heroBanner.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.6)' }} />
        </div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-white">Season 56 Meta Updated</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Clash Royale
              <span className="block text-blue-400">Hub 2026</span>
            </h1>

            <p className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-white/80">
              Tier lists, meta decks, and pro strategies to dominate the arena and reach Ultimate Champion.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clash-royale/tier-list"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <span>View Tier List</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/clash-royale/guides"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative -mt-16 z-10 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: '100+', label: 'Cards', icon: '🃏' },
            { value: META_DECKS.length, label: 'Meta Decks', icon: '🏆' },
            { value: '3', label: 'Pro Guides', icon: '📚' },
            { value: 'Daily', label: 'Updates', icon: '🔄' },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-black" style={{ color: 'var(--text-primary)' }}>{stat.value}</div>
              <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Meta Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-blue-500/10 text-blue-500">
              Meta Snapshot
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Top 8 Cards
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Highest win rates in competitive play
            </p>
          </div>
          <Link
            href="/clash-royale/tier-list"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            Full Tier List
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {topCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Rank Badge */}
              <div
                className="absolute top-3 left-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black z-10"
                style={{
                  background: index < 3 ? '#FFD700' : 'var(--surface-200)',
                  color: index < 3 ? '#000' : 'var(--text-primary)',
                }}
              >
                {index + 1}
              </div>

              {/* Tier Badge */}
              <div
                className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-bold z-10"
                style={{ background: TIERS[card.tier].color, color: '#fff' }}
              >
                {card.tier}
              </div>

              {/* Card Image */}
              <div className="aspect-square p-6 flex items-center justify-center" style={{ background: 'var(--surface-50)' }}>
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-500 group-hover:scale-125 group-hover:rotate-3"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                  {card.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>
                    {card.elixir} Elixir
                  </span>
                  <span className="text-sm font-bold text-green-500">
                    {card.winRate}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tier List Preview */}
      <section className="py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-purple-500/10 text-purple-500">
              Card Rankings
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Tier List Preview
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Select a tier to explore cards
            </p>
          </div>

          {/* Tier Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {Object.entries(TIERS).map(([tier, data]) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className="relative px-6 py-3 rounded-xl font-bold text-base transition-all duration-300"
                style={{
                  background: selectedTier === tier ? data.color : 'var(--surface-100)',
                  color: selectedTier === tier ? '#fff' : 'var(--text-muted)',
                  border: `2px solid ${selectedTier === tier ? data.color : 'var(--border)'}`,
                  transform: selectedTier === tier ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: selectedTier === tier ? `0 10px 30px -10px ${data.color}80` : 'none'
                }}
              >
                {tier} Tier
                <span
                  className="ml-2 px-2 py-0.5 rounded-full text-xs font-bold"
                  style={{
                    background: selectedTier === tier ? 'rgba(255,255,255,0.25)' : 'var(--surface-200)',
                  }}
                >
                  {getCardsByTier(tier).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {tierCards.slice(0, 16).map((card, index) => (
              <div
                key={card.id}
                className="group p-3 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                  animationDelay: `${index * 50}ms`
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                <div className="text-[10px] sm:text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                  {card.name}
                </div>
                <div className="text-[10px] font-bold text-green-500">
                  {card.winRate}%
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/clash-royale/tier-list"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-base text-white bg-blue-500 transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View Complete Tier List
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Meta Decks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-amber-500/10 text-amber-500">
              Top Performing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Meta Decks
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Best decks in the current meta
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {META_DECKS.slice(0, 6).map((deck, index) => (
            <div
              key={deck.id}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Win Rate Badge */}
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-bold bg-green-500/10 text-green-500">
                {deck.winRate}% WR
              </div>

              <h3 className="font-bold text-lg mb-3 pr-20" style={{ color: 'var(--text-primary)' }}>{deck.name}</h3>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>
                  {deck.avgElixir} Avg
                </span>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-blue-500/10 text-blue-500">
                  {deck.archetype}
                </span>
                <span className="text-xs px-3 py-1 rounded-full font-medium bg-amber-500/10 text-amber-500">
                  {deck.difficulty}
                </span>
              </div>

              <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                {deck.description}
              </p>

              <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-3 transition-all">
                View Deck
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 bg-green-500/10 text-green-500">
              Learn & Improve
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Pro Guides
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Master the game with our in-depth guides
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Beginner's Guide */}
            <Link
              href="/clash-royale/guides/beginners-guide"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.beginnersGuide.hero.url}
                  alt={GUIDE_IMAGES.beginnersGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white">
                  Beginner
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Beginner's Guide 2026</h3>
                  <p className="text-sm text-white/80">12 min read</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Everything new players need to know. Elixir management, deck building, and climbing arenas.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-3 transition-all">
                  Read Guide
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Elixir Management */}
            <Link
              href="/clash-royale/guides/elixir-management"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.elixirGuide.hero.url}
                  alt={GUIDE_IMAGES.elixirGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-purple-500 text-white">
                  Intermediate
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Elixir Management</h3>
                  <p className="text-sm text-white/80">10 min read</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Master positive trades, elixir counting, and never leak elixir again.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-3 transition-all">
                  Read Guide
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Deck Building */}
            <Link
              href="/clash-royale/guides/deck-building"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-2xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.deckBuildingGuide.hero.url}
                  alt={GUIDE_IMAGES.deckBuildingGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white">
                  Intermediate
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">Deck Building Guide</h3>
                  <p className="text-sm text-white/80">15 min read</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Build balanced decks that counter the meta. Win conditions, synergies, and archetypes.
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-500 group-hover:gap-3 transition-all">
                  Read Guide
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/clash-royale/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all bg-green-500/10 text-green-600 hover:bg-green-500 hover:text-white"
            >
              View All Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 text-center"
          style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/5 rounded-full translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10">
            <div className="text-5xl mb-6">🏆</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
              Ready to Climb?
            </h2>
            <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
              Use our tier lists and guides to dominate Clash Royale and reach Ultimate Champion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/clash-royale/tier-list"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-600 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Tier List
              </Link>
              <Link
                href="/clash-royale/guides/beginners-guide"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{ background: 'var(--surface-200)', color: 'var(--text-primary)' }}
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
