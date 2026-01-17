import Link from 'next/link';
import { getAllBases, getBaseStats } from '@/lib/bases';
import WeeklyFeaturedBases from '@/components/WeeklyFeaturedBases';
import { TotalCopyStats } from '@/components/CopyStats';
import CoCEvents from '@/components/CoCEvents';

const TH_LEVELS = [18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];
const BH_LEVELS = [10, 9, 8, 7, 6, 5, 4, 3];

// TH image URLs from coc.guide (PNG with transparent background)
const TH_IMAGES = {
  3: 'https://coc.guide/static/imgs/other/town-hall-3.png',
  4: 'https://coc.guide/static/imgs/other/town-hall-4.png',
  5: 'https://coc.guide/static/imgs/other/town-hall-5.png',
  6: 'https://coc.guide/static/imgs/other/town-hall-6.png',
  7: 'https://coc.guide/static/imgs/other/town-hall-7.png',
  8: 'https://coc.guide/static/imgs/other/town-hall-8.png',
  9: 'https://coc.guide/static/imgs/other/town-hall-9.png',
  10: 'https://coc.guide/static/imgs/other/town-hall-10.png',
  11: 'https://coc.guide/static/imgs/other/town-hall-11.png',
  12: 'https://coc.guide/static/imgs/other/town-hall-12.png',
  13: 'https://coc.guide/static/imgs/other/town-hall-13.png',
  14: 'https://coc.guide/static/imgs/other/town-hall-14.png',
  15: 'https://coc.guide/static/imgs/other/town-hall-15.png',
  16: 'https://coc.guide/static/imgs/other/town-hall-16.png',
  17: 'https://coc.guide/static/imgs/other/town-hall-17.png',
  18: 'https://coc.guide/static/imgs/other/town-hall-17.png',
};

// BH image URLs from coc.guide (PNG with transparent background)
const BH_IMAGES = {
  3: 'https://coc.guide/static/imgs/other/town-hall2-3.png',
  4: 'https://coc.guide/static/imgs/other/town-hall2-4.png',
  5: 'https://coc.guide/static/imgs/other/town-hall2-5.png',
  6: 'https://coc.guide/static/imgs/other/town-hall2-6.png',
  7: 'https://coc.guide/static/imgs/other/town-hall2-7.png',
  8: 'https://coc.guide/static/imgs/other/town-hall2-8.png',
  9: 'https://coc.guide/static/imgs/other/town-hall2-9.png',
  10: 'https://coc.guide/static/imgs/other/town-hall2-10.png',
};

export default function HomePage() {
  const allBases = getAllBases();
  const stats = getBaseStats();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text Content */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background: 'rgba(245, 158, 11, 0.1)', color: 'var(--primary)' }}>
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              Updated Daily
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Pro-Level
              <span className="block text-primary">Base Layouts</span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2" style={{ color: 'var(--text-muted)' }}>for Clash of Clans</span>
            </h1>

            {/* Description */}
            <p className="text-lg max-w-lg" style={{ color: 'var(--text-muted)' }}>
              Dominate clan wars and protect your loot with battle-tested layouts. One-tap copy to instantly import any base.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/th/18" className="inline-flex items-center gap-2 px-6 py-3 text-black font-semibold rounded-xl bg-primary hover:bg-primary/90 transition-colors">
                <span>Browse TH18</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/search" className="inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-xl transition-colors" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search All</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.total || '1000+'}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Total Bases</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">{stats.byBaseType?.war || '500+'}</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>War Layouts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">TH7-18</div>
                <div className="text-sm" style={{ color: 'var(--text-muted)' }}>All Levels</div>
              </div>
            </div>
          </div>

          {/* Right - TH Grid */}
          <div>
            <div className="grid grid-cols-3 gap-3">
              {[18, 17, 16, 15, 14, 13].map((level, index) => (
                <Link
                  key={level}
                  href={`/th/${level}`}
                  className={`group relative p-4 rounded-2xl text-center transition-all duration-200 hover:scale-105 ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                  style={{
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border)'
                  }}
                >
                  <div className={`flex flex-col items-center justify-center ${index === 0 ? 'h-full py-4' : ''}`}>
                    <img
                      src={TH_IMAGES[level]}
                      alt={`Town Hall ${level}`}
                      className={`object-contain ${index === 0 ? 'w-28 h-28' : 'w-14 h-14'}`}
                      style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                    />
                    <div className={`font-bold mt-2 group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                      TH{level}
                    </div>
                    {stats.byHallType?.[`TH${level}`] && (
                      <div className={`text-xs mt-1 ${index === 0 ? '' : ''}`} style={{ color: 'var(--text-muted)' }}>
                        {stats.byHallType[`TH${level}`]} bases
                      </div>
                    )}
                    {index === 0 && (
                      <div className="mt-3 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Most Popular
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Link */}
            <Link
              href="/th"
              className="flex items-center justify-center gap-2 mt-4 py-3 rounded-xl text-sm font-medium transition-colors hover:text-primary"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              View All Town Hall Levels
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Town Hall Section */}
      <section className="py-16">
        <SectionHeader
          title="Town Hall Bases"
          subtitle="Select your Town Hall level"
          href="/th"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {TH_LEVELS.map(level => (
            <THLevelCard
              key={level}
              level={level}
              count={stats.byHallType?.[`TH${level}`]}
              imageUrl={TH_IMAGES[level]}
            />
          ))}
        </div>
      </section>

      {/* Weekly Featured Bases */}
      {allBases.length > 0 && (
        <section className="py-16">
          <SectionHeader
            title="Weekly Featured"
            subtitle="This week's top picks - refreshed every Monday"
          />

          <WeeklyFeaturedBases bases={allBases} />
        </section>
      )}

      {/* CoC Events Section */}
      <CoCEvents />

      {/* Builder Hall Section */}
      <section className="py-16">
        <SectionHeader
          title="Builder Hall Bases"
          subtitle="Versus battle layouts"
          href="/bh"
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {BH_LEVELS.map(level => (
            <BHLevelCard
              key={level}
              level={level}
              count={stats.byHallType?.[`BH${level}`]}
              imageUrl={BH_IMAGES[level]}
            />
          ))}
        </div>
      </section>

      {/* Base Types */}
      <section className="py-16">
        <SectionHeader
          title="Browse by Type"
          subtitle="Find the perfect base for your strategy"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <TypeCard type="war" label="War" description="Clan Wars & CWL" icon={<WarIcon />} />
          <TypeCard type="farm" label="Farming" description="Protect resources" icon={<FarmIcon />} />
          <TypeCard type="trophy" label="Trophy" description="Push trophies" icon={<TrophyIcon />} />
          <TypeCard type="hybrid" label="Hybrid" description="Balanced defense" icon={<HybridIcon />} />
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-16">
        <SectionHeader
          title="CoC Guides"
          subtitle="Learn strategies and tips"
          href="/guides"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link href="/guides/how-to-copy-base" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">📋</span>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">How to Copy Bases</h3>
            <p className="text-sm text-muted">Step-by-step guide to import layouts</p>
          </Link>
          <Link href="/guides/best-th18-attack-strategies" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">⚔️</span>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">TH18 Attack Strategies</h3>
            <p className="text-sm text-muted">Master the best attacks for TH18</p>
          </Link>
          <Link href="/guides/cwl-base-building-tips" className="card p-6 hover:border-primary/50 transition-all group">
            <span className="text-2xl mb-2 block">🏰</span>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">CWL Base Building</h3>
            <p className="text-sm text-muted">Build anti-3 star war bases</p>
          </Link>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-8">
        <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(245, 158, 11, 0.05) 100%)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-bold text-primary">{stats.total?.toLocaleString() || '4,500'}+</div>
              <div className="text-sm text-muted">Base Layouts</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary"><TotalCopyStats /></div>
              <div className="text-sm text-muted">Bases Copied</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">TH3-18</div>
              <div className="text-sm text-muted">All TH Levels</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">BH3-10</div>
              <div className="text-sm text-muted">Builder Base</div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold mb-4">About Our Base Layouts</h2>
          <div className="space-y-4" style={{ color: 'var(--text-muted)' }}>
            <p>
              Finding the right base layout in Clash of Clans can determine your success in wars and trophy pushing.
              Our collection features thousands of carefully selected bases for every Town Hall level.
            </p>
            <p>
              Each base comes with a direct copy link. Click the copy button, open Clash of Clans,
              and paste in the base editor to instantly import any layout.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionHeader({ title, subtitle, href }) {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        {subtitle && <p className="mt-1" style={{ color: 'var(--text-muted)' }}>{subtitle}</p>}
      </div>
      {href && (
        <Link href={href} className="text-sm text-primary hover:underline">
          View all
        </Link>
      )}
    </div>
  );
}

function THLevelCard({ level, count, imageUrl }) {
  return (
    <Link href={`/th/${level}`} className="level-card p-4 text-center group">
      <div className="mb-3">
        <img
          src={imageUrl}
          alt={`Town Hall ${level}`}
          className="level-card-image group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="font-bold text-lg group-hover:text-primary transition-colors">
        TH{level}
      </div>
      {count ? (
        <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{count} bases</div>
      ) : (
        <div className="text-xs mt-1" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>Coming soon</div>
      )}
    </Link>
  );
}

function BHLevelCard({ level, count, imageUrl }) {
  return (
    <Link href={`/bh/${level}`} className="level-card p-3 text-center group">
      <div className="mb-2">
        <img
          src={imageUrl}
          alt={`Builder Hall ${level}`}
          className="w-12 h-12 sm:w-14 sm:h-14 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
          style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
        />
      </div>
      <div className="font-semibold text-sm group-hover:text-primary transition-colors">
        BH{level}
      </div>
      {count ? (
        <div className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>{count}</div>
      ) : null}
    </Link>
  );
}

function TypeCard({ type, label, description, icon }) {
  return (
    <Link
      href={`/search?type=${type}`}
      className="card-interactive p-5 group"
    >
      <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors" style={{ background: 'rgba(245, 158, 11, 0.1)' }}>
        {icon}
      </div>
      <div className="font-medium group-hover:text-primary transition-colors">{label}</div>
      <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{description}</div>
    </Link>
  );
}

// Simple SVG Icons
function WarIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function FarmIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  );
}

function TrophyIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  );
}

function HybridIcon() {
  return (
    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    </svg>
  );
}
