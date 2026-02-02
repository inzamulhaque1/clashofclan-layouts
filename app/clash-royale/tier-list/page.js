'use client';

import Link from 'next/link';
import { CARDS, TIERS, CARD_TYPES, RARITIES, getCardsByTier } from '@/lib/clash-royale/cards';

export default function TierListPage() {
  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{ background: 'linear-gradient(135deg, #1E90FF 0%, #4169E1 50%, #8A2BE2 100%)' }}
        />
        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/clash-royale" className="hover:opacity-80">Clash Royale</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>Tier List</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Clash Royale Card Tier List 2026
          </h1>
          <p className="text-xl max-w-3xl" style={{ color: 'var(--text-muted)' }}>
            Complete competitive card tier list with win rates and use rates. Updated with every balance change.
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap gap-6 mt-8 text-sm">
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Total Cards:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>{CARDS.length}</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Last Updated:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>Feb 2026</span>
            </div>
            <div className="rounded-lg px-4 py-2" style={{ background: 'var(--surface-100)' }}>
              <span style={{ color: 'var(--text-muted)' }}>Data Source:</span>
              <span className="font-bold ml-2" style={{ color: 'var(--text-primary)' }}>RoyaleAPI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tier List */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {Object.entries(TIERS).map(([tierKey, tierInfo]) => {
            const cards = getCardsByTier(tierKey);
            if (cards.length === 0) return null;

            return (
              <div key={tierKey} className="mb-8">
                {/* Tier Header */}
                <div
                  className="flex items-center gap-4 p-4 rounded-t-xl"
                  style={{ backgroundColor: tierInfo.color + '20', borderLeft: `4px solid ${tierInfo.color}` }}
                >
                  <div
                    className="text-4xl font-bold w-16 h-16 flex items-center justify-center rounded-lg text-white"
                    style={{ backgroundColor: tierInfo.color }}
                  >
                    {tierKey}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{tierInfo.name}</h2>
                    <p style={{ color: 'var(--text-muted)' }}>{tierInfo.description}</p>
                  </div>
                  <div className="ml-auto" style={{ color: 'var(--text-muted)' }}>
                    {cards.length} Card{cards.length !== 1 ? 's' : ''}
                  </div>
                </div>

                {/* Cards Grid */}
                <div className="rounded-b-xl p-4" style={{ background: 'var(--surface-100)' }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                    {cards.map((card) => (
                      <div
                        key={card.id}
                        className="group relative rounded-xl p-3 text-center transition-all hover:scale-105"
                        style={{ background: 'var(--surface-200)', border: '1px solid var(--border)' }}
                      >
                        {/* Elixir Badge */}
                        <div
                          className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: '#8A2BE2' }}
                        >
                          {card.elixir}
                        </div>

                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-16 h-16 mx-auto mb-2 object-contain"
                        />
                        <h3 className="text-xs font-semibold truncate mb-1" style={{ color: 'var(--text-primary)' }}>
                          {card.name}
                        </h3>
                        <div className="flex items-center justify-center gap-2 text-[10px]">
                          <span style={{ color: RARITIES[card.rarity].color }}>{RARITIES[card.rarity].name}</span>
                        </div>
                        <div className="mt-2 flex items-center justify-between text-[10px]">
                          <span style={{ color: 'var(--text-muted)' }}>{card.useRate}% use</span>
                          <span className="font-bold" style={{ color: '#10B981' }}>{card.winRate}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Guide CTA */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div
          className="p-8 rounded-2xl text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 144, 255, 0.1), rgba(138, 43, 226, 0.1))',
            border: '1px solid rgba(30, 144, 255, 0.2)'
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Need Help Using These Cards?
          </h2>
          <p className="mb-6" style={{ color: 'var(--text-muted)' }}>
            Check out our guides and meta decks to learn how to use these cards effectively.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/clash-royale/guides/beginners-guide"
              className="px-6 py-3 rounded-xl font-bold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1E90FF, #4169E1)' }}
            >
              Beginner's Guide
            </Link>
            <Link
              href="/clash-royale"
              className="px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              View Meta Decks
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
