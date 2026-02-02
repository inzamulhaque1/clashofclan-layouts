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
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#0a0a0f' }}>

      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Hero Image with Parallax Effect */}
        <div className="absolute inset-0">
          <img
            src={GENERAL_IMAGES.heroBanner.url}
            alt={GENERAL_IMAGES.heroBanner.alt}
            className="w-full h-full object-cover scale-110"
            style={{ filter: 'brightness(0.3)' }}
          />
          {/* Vignette Effect */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, #0a0a0f 70%)'
          }} />
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 right-0 h-64" style={{
            background: 'linear-gradient(to top, #0a0a0f, transparent)'
          }} />
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Animated Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-sm font-bold mb-8 border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-blue-400 tracking-wide">SEASON 56 • META UPDATE LIVE</span>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-6 tracking-tight">
              <span className="text-white">CLASH</span>
              <br />
              <span className="text-blue-500">ROYALE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl mb-4 text-white/60 font-light max-w-2xl mx-auto">
              The Ultimate Competitive Resource
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-center">
              {[
                { value: '100+', label: 'CARDS' },
                { value: '52%', label: 'AVG WIN RATE' },
                { value: 'DAILY', label: 'UPDATES' },
              ].map((stat, i) => (
                <div key={i} className="group">
                  <div className="text-3xl sm:text-4xl font-black text-white group-hover:text-blue-400 transition-colors">{stat.value}</div>
                  <div className="text-xs text-white/40 tracking-widest font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/clash-royale/tier-list"
                className="group relative px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-blue-500" />
                <div className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{
                  background: 'radial-gradient(circle at center, white 0%, transparent 70%)'
                }} />
                <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                  View Tier List
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/clash-royale/guides"
                className="group px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:scale-105"
              >
                Pro Guides
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-white/30 tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/40 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Top Cards Section */}
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-blue-500 rounded-full" />
                <span className="text-blue-500 font-bold text-sm tracking-widest uppercase">Meta Snapshot</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
                Top Performing Cards
              </h2>
              <p className="text-white/40 text-lg">Highest win rates in Grand Challenges</p>
            </div>
            <Link
              href="/clash-royale/tier-list"
              className="group flex items-center gap-3 text-blue-400 font-bold hover:text-blue-300 transition-colors"
            >
              <span>View Full Tier List</span>
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white transition-all">
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
                {/* Card Glow Effect */}
                <div
                  className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: TIERS[card.tier].color }}
                />

                {/* Card Content */}
                <div
                  className="relative rounded-2xl overflow-hidden transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-2"
                  style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.08)' }}
                >
                  {/* Rank */}
                  <div className="absolute top-4 left-4 z-10">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg"
                      style={{
                        background: index < 3 ? '#FFD700' : 'rgba(255,255,255,0.1)',
                        color: index < 3 ? '#000' : '#fff'
                      }}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* Tier Badge */}
                  <div
                    className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-lg font-bold text-xs tracking-wider"
                    style={{ background: TIERS[card.tier].color }}
                  >
                    {card.tier}-TIER
                  </div>

                  {/* Card Image Area */}
                  <div className="relative pt-16 pb-8 px-8 flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-all duration-500 group-hover:scale-110"
                      style={{ filter: hoveredCard === card.id ? 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' : 'none' }}
                    />
                  </div>

                  {/* Card Info */}
                  <div className="p-5 border-t border-white/5">
                    <h3 className="font-bold text-lg text-white mb-3 truncate">{card.name}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                          <span className="text-purple-400 text-xs font-bold">{card.elixir}</span>
                        </div>
                        <span className="text-white/40 text-sm">Elixir</span>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-black text-xl">{card.winRate}%</div>
                        <div className="text-white/30 text-xs">WIN RATE</div>
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
      <section className="relative py-24" style={{ background: '#0d0d14' }}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-purple-500 rounded-full" />
              <span className="text-purple-500 font-bold text-sm tracking-widest uppercase">Interactive</span>
              <div className="w-8 h-1 bg-purple-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Card Tier List
            </h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
              Click on any tier to explore cards
            </p>
          </div>

          {/* Tier Selector */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {Object.entries(TIERS).map(([tier, data]) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className="relative group"
              >
                {/* Button Glow */}
                {selectedTier === tier && (
                  <div
                    className="absolute -inset-1 rounded-2xl blur-lg opacity-50"
                    style={{ background: data.color }}
                  />
                )}
                <div
                  className="relative px-6 sm:px-8 py-4 rounded-2xl font-black text-lg transition-all duration-300"
                  style={{
                    background: selectedTier === tier ? data.color : 'rgba(255,255,255,0.05)',
                    color: selectedTier === tier ? '#fff' : 'rgba(255,255,255,0.5)',
                    border: `2px solid ${selectedTier === tier ? data.color : 'transparent'}`,
                    transform: selectedTier === tier ? 'scale(1.1)' : 'scale(1)',
                  }}
                >
                  <span className="text-2xl sm:text-3xl">{tier}</span>
                  <span className="ml-2 text-sm opacity-60">({getCardsByTier(tier).length})</span>
                </div>
              </button>
            ))}
          </div>

          {/* Cards Display */}
          <div
            className="p-6 sm:p-8 rounded-3xl border border-white/10"
            style={{ background: 'rgba(255,255,255,0.02)' }}
          >
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3 sm:gap-4">
              {tierCards.slice(0, 16).map((card, index) => (
                <div
                  key={card.id}
                  className="group relative rounded-xl p-3 text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-pointer"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    animationDelay: `${index * 30}ms`
                  }}
                >
                  <img
                    src={card.image}
                    alt={card.name}
                    className="w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-2 object-contain transition-transform group-hover:scale-110"
                  />
                  <div className="text-[10px] sm:text-xs font-semibold text-white/80 truncate">{card.name}</div>
                  <div className="text-[10px] font-bold text-green-400">{card.winRate}%</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/clash-royale/tier-list"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg bg-purple-500 text-white transition-all duration-300 hover:bg-purple-400 hover:scale-105"
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
      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-1 bg-amber-500 rounded-full" />
                <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Competitive</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-black text-white mb-2">
                Meta Decks
              </h2>
              <p className="text-white/40 text-lg">Best performing decks in ranked play</p>
            </div>
          </div>

          {/* Decks Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {META_DECKS.slice(0, 6).map((deck, index) => (
              <div
                key={deck.id}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                {/* Top Accent */}
                <div className="h-1 bg-amber-500" />

                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-xl text-white pr-4">{deck.name}</h3>
                    <div className="flex-shrink-0 px-3 py-1 rounded-lg bg-green-500/20 text-green-400 font-black text-sm">
                      {deck.winRate}%
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-white/60">
                      {deck.avgElixir} Elixir
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400">
                      {deck.archetype}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400">
                      {deck.difficulty}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-white/40 text-sm mb-6 line-clamp-2">{deck.description}</p>

                  {/* Action */}
                  <div className="flex items-center gap-2 text-blue-400 font-semibold text-sm group-hover:gap-4 transition-all">
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
      <section className="relative py-24" style={{ background: '#0d0d14' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-green-500 rounded-full" />
              <span className="text-green-500 font-bold text-sm tracking-widest uppercase">Learn & Improve</span>
              <div className="w-8 h-1 bg-green-500 rounded-full" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Pro Guides
            </h2>
            <p className="text-white/40 text-lg max-w-lg mx-auto">
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
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
                style={{ background: '#12121a' }}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={guide.image.url}
                    alt={guide.image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #12121a 0%, transparent 60%)' }} />

                  {/* Tag */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-lg font-bold text-xs tracking-wider text-white"
                    style={{ background: guide.color }}
                  >
                    {guide.tag}
                  </div>

                  {/* Time */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg font-semibold text-xs text-white bg-black/50 backdrop-blur-sm">
                    {guide.time}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 -mt-12 relative">
                  <h3 className="text-2xl font-black text-white mb-1">{guide.title}</h3>
                  <p className="text-white/40 mb-4">{guide.subtitle}</p>

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
          <div className="text-center mt-12">
            <Link
              href="/clash-royale/guides"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-green-400 border-2 border-green-500/30 transition-all hover:bg-green-500/10 hover:border-green-500/50"
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
      <section className="relative py-32 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="text-6xl mb-8">👑</div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Ready to Dominate?
          </h2>
          <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
            Use our tier lists, meta decks, and guides to climb to Ultimate Champion
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/clash-royale/tier-list"
              className="group px-10 py-5 rounded-2xl font-bold text-lg bg-blue-500 text-white transition-all duration-300 hover:bg-blue-400 hover:scale-105"
            >
              View Tier List
            </Link>
            <Link
              href="/clash-royale/guides/beginners-guide"
              className="px-10 py-5 rounded-2xl font-bold text-lg border-2 border-white/20 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:scale-105"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
