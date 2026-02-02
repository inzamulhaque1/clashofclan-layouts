'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CARDS, CARD_TYPES, TIERS, META_DECKS, getTopCards, getCardsByTier } from '@/lib/clash-royale/cards';
import { GUIDE_IMAGES } from '@/lib/clash-royale/images';

export default function ClashRoyaleHomePage() {
  const [selectedTier, setSelectedTier] = useState('S');
  const topCards = getTopCards(10);
  const tierCards = getCardsByTier(selectedTier);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 30%, #8A2BE2 70%, #9400D3 100%)',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(30, 144, 255, 0.4) 0%, transparent 40%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(138, 43, 226, 0.3) 0%, transparent 40%)'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center lg:text-left">
            {/* Live Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.2), rgba(138, 43, 226, 0.2))',
                color: '#1E90FF',
                border: '1px solid rgba(30, 144, 255, 0.4)',
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Meta Update - February 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Dominate</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 50%, #8A2BE2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Clash Royale
              </span>
            </h1>

            <p className="text-lg sm:text-xl mb-8 max-w-2xl" style={{ color: 'var(--text-muted)' }}>
              The ultimate resource for competitive players. Card tier lists, meta decks, and strategies to reach <strong style={{ color: 'var(--text-primary)' }}>Ultimate Champion</strong>.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              {[
                { value: CARDS.length + '+', label: 'Cards', color: '#1E90FF' },
                { value: META_DECKS.length, label: 'Meta Decks', color: '#8A2BE2' },
                { value: '5K+', label: 'Trophy Guide', color: '#FFD700' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl sm:text-4xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/clash-royale/tier-list"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 100%)',
                  boxShadow: '0 10px 40px -10px rgba(30, 144, 255, 0.5)',
                  color: '#ffffff'
                }}
              >
                <span>View Tier List</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/clash-royale/decks"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                style={{
                  background: 'var(--surface-100)',
                  border: '2px solid var(--border)',
                  color: 'var(--text-primary)'
                }}
              >
                Meta Decks
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Meta Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #1E90FF, #8A2BE2)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#1E90FF' }}>Meta Snapshot</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Top 10 Cards
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Highest win rates in Grand Challenges
            </p>
          </div>
          <Link
            href="/clash-royale/tier-list"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{ background: 'rgba(30, 144, 255, 0.1)', color: '#1E90FF' }}
          >
            Full Tier List
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {topCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Rank Badge */}
              <div
                className="absolute top-3 left-3 w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black z-10"
                style={{
                  background: index < 3 ? 'linear-gradient(135deg, #FFD700, #FFA500)' : 'var(--surface-200)',
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
              <div
                className="aspect-square p-6 flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${CARD_TYPES[card.type].color}10, transparent)` }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                  {card.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ background: `${CARD_TYPES[card.type].color}20`, color: CARD_TYPES[card.type].color }}>
                    {card.elixir} Elixir
                  </span>
                  <span className="text-sm font-bold" style={{ color: '#10B981' }}>
                    {card.winRate}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Tier Preview */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Card Tier List
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Click on any tier to explore cards in that category
            </p>
          </div>

          {/* Tier Tabs */}
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
                }}
              >
                {tier} Tier
                <span
                  className="ml-2 px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: selectedTier === tier ? 'rgba(255,255,255,0.2)' : 'var(--surface-200)',
                  }}
                >
                  {getCardsByTier(tier).length}
                </span>
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {tierCards.map((card) => (
              <div
                key={card.id}
                className="group p-3 rounded-xl text-center transition-all duration-300 hover:scale-110"
                style={{
                  background: 'var(--surface-100)',
                  border: '1px solid var(--border)',
                }}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-1 object-contain"
                />
                <div className="text-[10px] sm:text-xs font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
                  {card.name}
                </div>
                <div className="text-[10px] font-bold" style={{ color: '#10B981' }}>
                  {card.winRate}%
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/clash-royale/tier-list"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg text-white transition-all hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 100%)',
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

      {/* Meta Decks Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🃏</span>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8A2BE2' }}>Meta Decks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Best Decks 2026
            </h2>
            <p className="text-base max-w-lg" style={{ color: 'var(--text-muted)' }}>
              Top performing decks in the current meta
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {META_DECKS.slice(0, 6).map((deck) => (
            <div
              key={deck.id}
              className="group relative p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text-primary)' }}>{deck.name}</h3>
                <span className="text-sm font-bold" style={{ color: '#10B981' }}>{deck.winRate}%</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(30, 144, 255, 0.1)', color: '#1E90FF' }}>
                  {deck.avgElixir} Avg
                </span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(138, 43, 226, 0.1)', color: '#8A2BE2' }}>
                  {deck.archetype}
                </span>
                <span className="text-xs px-2 py-1 rounded-full" style={{ background: 'rgba(255, 165, 0, 0.1)', color: '#FFA500' }}>
                  {deck.difficulty}
                </span>
              </div>

              <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                {deck.description}
              </p>

              <div className="text-sm font-semibold" style={{ color: '#1E90FF' }}>
                View Deck →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #1E90FF, #8A2BE2)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#8A2BE2' }}>Pro Guides</span>
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #8A2BE2, #1E90FF)' }} />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Strategies & Tips
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Master Clash Royale with our in-depth guides
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Beginner's Guide */}
            <Link
              href="/clash-royale/guides/beginners-guide"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.beginnersGuide.hero.url}
                  alt={GUIDE_IMAGES.beginnersGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: '#10B981', color: '#fff' }}
                >
                  Available
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(30, 144, 255, 0.9)', color: '#fff' }}>
                    Beginner
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Beginner's Guide 2026
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Everything new players need to know. Elixir management, deck building, and climbing arenas.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>12 min read</span>
                  <span className="text-sm font-semibold group-hover:underline" style={{ color: '#1E90FF' }}>
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>

            {/* Elixir Management */}
            <Link
              href="/clash-royale/guides/elixir-management"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.elixirGuide.hero.url}
                  alt={GUIDE_IMAGES.elixirGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: '#8A2BE2', color: '#fff' }}
                >
                  Intermediate
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(138, 43, 226, 0.9)', color: '#fff' }}>
                    Strategy
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Elixir Management Mastery
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Master positive trades, elixir counting, and never leak elixir again.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>10 min read</span>
                  <span className="text-sm font-semibold group-hover:underline" style={{ color: '#1E90FF' }}>
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>

            {/* Deck Building */}
            <Link
              href="/clash-royale/guides/deck-building"
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={GUIDE_IMAGES.deckBuildingGuide.hero.url}
                  alt={GUIDE_IMAGES.deckBuildingGuide.hero.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div
                  className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold"
                  style={{ background: '#FFD700', color: '#000' }}
                >
                  Intermediate
                </div>
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 rounded text-xs font-semibold" style={{ background: 'rgba(255, 215, 0, 0.9)', color: '#000' }}>
                    Deck Guide
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-blue-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  Deck Building Guide
                </h3>
                <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
                  Build balanced decks that counter the meta. Win conditions, synergies, and archetypes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>15 min read</span>
                  <span className="text-sm font-semibold group-hover:underline" style={{ color: '#1E90FF' }}>
                    Read Guide →
                  </span>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-10">
            <Link
              href="/clash-royale/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:gap-3"
              style={{ background: 'rgba(138, 43, 226, 0.1)', color: '#8A2BE2' }}
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 50%, #8A2BE2 100%)',
          }}
        >
          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to Reach Ultimate Champion?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Use our tier lists and guides to dominate Clash Royale. Updated with every balance change.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/clash-royale/tier-list"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: '#fff', color: '#1E90FF' }}
              >
                View Tier List
              </Link>
              <Link
                href="/clash-royale/guides/beginners-guide"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
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
