'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Game data organized by category
const GAME_CATEGORIES = [
  {
    name: 'Supercell Games',
    description: 'Official Supercell mobile games with base layouts, decks & strategies',
    games: [
      {
        slug: 'clash-of-clans',
        name: 'Clash of Clans',
        shortName: 'CoC',
        description: 'Base layouts, attack strategies & clan war tips',
        image: '/games/clash-of-clans.jpg',
        logo: '/games/logo-coc.png',
        gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        color: '#F59E0B',
        stats: '4,500+ bases',
        active: true,
        featured: true,
      },
      {
        slug: 'brawl-stars',
        name: 'Brawl Stars',
        shortName: 'BS',
        description: 'Brawler tier lists, meta guides & game modes',
        image: '/games/brawl-stars.webp',
        logo: '/games/logo-bs.png',
        gradient: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)',
        color: '#FF6B35',
        stats: '50+ Brawlers',
        active: true,
      },
      {
        slug: 'clash-royale',
        name: 'Clash Royale',
        shortName: 'CR',
        description: 'Best decks, card tier lists & arena strategies',
        image: '/games/clash-royale.jpg',
        logo: '/games/logo-cr.png',
        gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
        color: '#2563EB',
        stats: '100+ Cards',
        active: true,
      },
    ]
  },
  {
    name: 'Battle Royale',
    description: 'Top battle royale games with loadouts, settings & pro tips',
    games: [
      {
        slug: 'free-fire',
        name: 'Free Fire',
        shortName: 'FF',
        description: 'Character combos, weapon guides & settings',
        image: '/games/free-fire.png',
        logo: '/games/logo-ff.png',
        gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
        color: '#EF4444',
        stats: '50+ Characters',
        active: true,
      },
      {
        slug: 'pubg',
        name: 'PUBG Mobile',
        shortName: 'PUBG',
        description: 'Weapon stats, sensitivity settings & tips',
        image: '/games/pubg.jpg',
        logo: '/games/logo-pubg.webp',
        gradient: 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
        color: '#F59E0B',
        stats: 'Coming Soon',
        active: false,
      },
    ]
  },
  {
    name: 'Strategy & Survival',
    description: 'City builders, survival games & simulation guides',
    games: [
      {
        slug: 'frozen-city',
        name: 'Frozen City',
        shortName: 'FC',
        description: 'Survival strategies, resource management & tips',
        image: '/games/frozen-city.jpg',
        logo: '/games/logo-fc.png',
        gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)',
        color: '#06B6D4',
        stats: 'Coming Soon',
        active: false,
      },
    ]
  }
];

// Hero slides
const HERO_SLIDES = [
  { image: '/games/hero-coc.jpg', name: 'Clash of Clans', logo: '/games/logo-coc.png', gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' },
  { image: '/games/hero-bs.jpg', name: 'Brawl Stars', logo: '/games/logo-bs.png', gradient: 'linear-gradient(135deg, #FF6B35 0%, #F43F5E 100%)' },
  { image: '/games/hero-cr.jpg', name: 'Clash Royale', logo: '/games/logo-cr.png', gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' },
  { image: '/games/hero-ff.jpg', name: 'Free Fire', logo: '/games/logo-ff.png', gradient: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)' },
];

// Blog posts data
const BLOG_POSTS = [
  {
    slug: 'how-to-copy-base',
    title: 'How to Copy Base Layouts in Clash of Clans',
    excerpt: 'Learn the step-by-step process to copy and import base layouts directly into your game.',
    image: '/games/hero-coc.jpg',
    category: 'Clash of Clans',
    categoryColor: '#F59E0B',
    date: '2025-01-28',
    readTime: '3 min read',
  },
  {
    slug: 'best-th18-attack-strategies',
    title: 'Best TH18 Attack Strategies for 3-Star Wins',
    excerpt: 'Master the most effective attack strategies for Town Hall 18 in clan wars and legends league.',
    image: '/games/clash-of-clans.jpg',
    category: 'Clash of Clans',
    categoryColor: '#F59E0B',
    date: '2025-01-25',
    readTime: '5 min read',
  },
  {
    slug: 'cwl-base-building-tips',
    title: 'CWL Base Building: Anti-3 Star Defense Guide',
    excerpt: 'Build unbeatable war bases with these expert tips for Clan War League success.',
    image: '/games/coc-featured.jpg',
    category: 'Clash of Clans',
    categoryColor: '#F59E0B',
    date: '2025-01-20',
    readTime: '4 min read',
  },
];

// Hero Slider Component - optimized for engagement
function HeroSlider({ compact = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000); // Slower rotation - gives users time to absorb
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div
      className={`relative w-full overflow-hidden shadow-xl ${
        compact ? 'h-[180px] rounded-xl' : 'h-[200px] sm:h-[280px] md:h-[350px] rounded-xl sm:rounded-2xl'
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-all duration-700"
          style={{
            opacity: index === currentIndex ? 1 : 0,
            transform: index === currentIndex ? 'scale(1)' : 'scale(1.05)',
          }}
        >
          {!imageErrors[index] ? (
            <img
              src={slide.image}
              alt={slide.name}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              onError={() => setImageErrors(prev => ({ ...prev, [index]: true }))}
            />
          ) : (
            <div className="absolute inset-0" style={{ background: slide.gradient }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          <div className={`absolute left-4 right-4 flex items-center gap-3 ${compact ? 'bottom-3' : 'bottom-4 sm:bottom-6'}`}>
            <img
              src={slide.logo}
              alt=""
              className={`rounded-lg shadow-lg object-contain bg-white/10 backdrop-blur-sm p-1 ${
                compact ? 'w-10 h-10' : 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16'
              }`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className={`text-white font-bold drop-shadow-lg ${compact ? 'text-base' : 'text-lg sm:text-xl md:text-2xl'}`}>
              {slide.name}
            </span>
          </div>
        </div>
      ))}
      <div className={`absolute flex gap-1.5 ${compact ? 'bottom-2 right-2' : 'bottom-3 right-3 sm:bottom-4 sm:right-4 gap-2'}`}>
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-full transition-all ${compact ? 'w-1.5 h-1.5' : 'w-2 h-2 sm:w-2.5 sm:h-2.5'}`}
            style={{
              background: index === currentIndex ? '#fff' : 'rgba(255,255,255,0.4)',
              transform: index === currentIndex ? 'scale(1.2)' : 'scale(1)'
            }}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// Game Card Component - optimized for mobile touch
function GameCard({ game, size = 'default' }) {
  const [imageError, setImageError] = useState(false);
  const isLarge = size === 'large';

  return (
    <Link
      href={`/${game.slug}`}
      className={`group block rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98] ${
        isLarge ? 'sm:col-span-2 sm:row-span-2' : ''
      }`}
      style={{ border: '1px solid var(--border)' }}
    >
      {/* Increased mobile height for better touch targets */}
      <div className={`relative overflow-hidden ${isLarge ? 'h-44 sm:h-full sm:min-h-[280px]' : 'h-36 sm:h-32'}`}>
        {!imageError ? (
          <img
            src={game.image}
            alt={game.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: game.gradient }}>
            <span className="text-3xl font-bold text-white/40">{game.shortName}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {game.featured && (
          <span className="absolute top-2 left-2 px-2 py-1 rounded text-[10px] font-bold text-black" style={{ background: game.color }}>
            POPULAR
          </span>
        )}
        {!game.active && !game.featured && (
          <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] font-medium bg-black/60 text-white">
            Soon
          </span>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
          <div className="flex items-center gap-2 mb-1">
            <img src={game.logo} alt="" className="w-6 h-6 sm:w-8 sm:h-8 rounded object-contain bg-white/20 p-0.5" onError={(e) => e.target.style.display = 'none'} />
            <h3 className={`font-bold text-white ${isLarge ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'}`}>{game.name}</h3>
          </div>
          <p className={`text-white/80 line-clamp-1 ${isLarge ? 'text-sm' : 'text-xs hidden sm:block'}`}>{game.description}</p>
          {game.active && (
            <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-medium" style={{ background: `${game.color}30`, color: game.color }}>
              {game.stats}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

// Blog Card Component
function BlogCard({ post }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/clash-of-clans/guides/${post.slug}`}
      className="group block rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
      style={{ border: '1px solid var(--border)' }}
    >
      <div className="relative h-40 sm:h-48 overflow-hidden">
        {!imageError ? (
          <img
            src={post.image}
            alt={post.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className="absolute top-3 left-3 px-2 py-1 rounded text-[10px] font-bold text-black"
          style={{ background: post.categoryColor }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4" style={{ background: 'var(--surface-100)' }}>
        <h3 className="font-bold text-sm sm:text-base mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {post.title}
        </h3>
        <p className="text-xs sm:text-sm mb-3 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--text-muted)' }}>
          <span>{post.readTime}</span>
          <span className="flex items-center gap-1 font-medium" style={{ color: '#8B5CF6' }}>
            Read more
            <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'var(--bg-primary)' }}>
        <div className="absolute inset-0 opacity-30" style={{
          background: 'radial-gradient(ellipse at top right, rgba(139, 92, 246, 0.2) 0%, transparent 50%)'
        }} />

        {/* Quick Game Links Bar - Mobile optimized with larger touch targets */}
        <div className="relative border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface-100)' }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="flex items-center py-2 sm:py-3 overflow-x-auto scrollbar-hide gap-2 sm:gap-3">
              <span className="text-xs font-semibold whitespace-nowrap uppercase tracking-wider hidden sm:block" style={{ color: 'var(--text-muted)' }}>Games</span>
              <div className="w-px h-4 hidden sm:block" style={{ background: 'var(--border)' }} />
              <div className="flex items-center gap-2">
                {[
                  { slug: 'clash-of-clans', name: 'CoC', fullName: 'Clash of Clans', color: '#F59E0B' },
                  { slug: 'brawl-stars', name: 'Brawl Stars', fullName: 'Brawl Stars', color: '#FF6B35' },
                  { slug: 'clash-royale', name: 'Royale', fullName: 'Clash Royale', color: '#2563EB' },
                  { slug: 'free-fire', name: 'Free Fire', fullName: 'Free Fire', color: '#EF4444' },
                  { slug: 'pubg', name: 'PUBG', fullName: 'PUBG Mobile', color: '#F59E0B' },
                  { slug: 'frozen-city', name: 'Frozen', fullName: 'Frozen City', color: '#06B6D4' },
                ].map((game) => (
                  <Link
                    key={game.slug}
                    href={`/${game.slug}`}
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all hover:opacity-80 active:scale-95"
                    style={{
                      background: game.color,
                      color: '#000'
                    }}
                  >
                    <span className="sm:hidden">{game.name}</span>
                    <span className="hidden sm:inline">{game.fullName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6"
                style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}
              >
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#8B5CF6' }} />
                Your Ultimate Gaming Resource Hub
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
                Level Up Your{' '}
                <span style={{
                  background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  Mobile Gaming
                </span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
                Access 4,500+ base layouts, expert guides, tier lists, and winning strategies for Clash of Clans, Brawl Stars, PUBG Mobile, and more. 100% free, forever.
              </p>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-6 sm:gap-10 mb-6 sm:mb-8">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>4,500+</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>Base Layouts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>6</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>Games</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>50K+</div>
                  <div className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>Players</div>
                </div>
              </div>

              {/* CTAs - Mobile optimized with larger touch targets */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  href="#games"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-xl font-semibold text-white transition-all hover:scale-105 active:scale-95 text-base"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' }}
                >
                  Browse All Games
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
                <Link
                  href="/clash-of-clans"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-xl font-semibold transition-all hover:scale-105 active:scale-95"
                  style={{ background: '#F59E0B', color: '#000' }}
                >
                  Clash of Clans
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Hero Slider */}
            <div className="order-1 lg:order-2">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Games Section - Organized by Category */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="games">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
            Choose Your Game
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            We cover the most popular mobile games with guides, strategies, and resources to help you dominate
          </p>
        </div>

        {GAME_CATEGORIES.map((category, catIndex) => (
          <div key={category.name} className={catIndex > 0 ? 'mt-10 sm:mt-14' : ''}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{category.name}</h3>
              <div className="flex-1 h-px" style={{ background: 'var(--border)' }} />
            </div>
            <p className="text-sm mb-4 sm:mb-6" style={{ color: 'var(--text-muted)' }}>{category.description}</p>

            <div className={`grid gap-4 ${
              category.games.length === 1 ? 'grid-cols-1 sm:grid-cols-2' :
              category.games.length === 2 ? 'grid-cols-2' :
              'grid-cols-2 sm:grid-cols-4'
            }`}>
              {category.games.map((game, index) => (
                <GameCard
                  key={game.slug}
                  game={game}
                  size={category.games.length === 3 && index === 0 ? 'large' : 'default'}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-16" style={{ background: 'var(--surface-50)' }} id="about">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* About Content */}
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
                About Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
                Your Trusted Gaming Resource Since 2024
              </h2>
              <div className="space-y-4 text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
                <p>
                  <strong style={{ color: 'var(--text-primary)' }}>Game365Hub</strong> is your ultimate destination for mobile gaming resources. We provide comprehensive guides, base layouts, tier lists, and strategies for the most popular mobile games.
                </p>
                <p>
                  Our mission is to help gamers of all skill levels improve their gameplay with free, high-quality content. Whether you're a beginner looking to learn the basics or a pro seeking advanced strategies, we've got you covered.
                </p>
                <p>
                  With over <strong style={{ color: 'var(--text-primary)' }}>4,500+ base layouts</strong> for Clash of Clans alone and growing content for other games, we're committed to being the best resource hub for mobile gamers worldwide.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-6 font-medium transition-colors"
                style={{ color: '#8B5CF6' }}
              >
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '⚡', title: 'One-Click Copy', desc: 'Import base layouts instantly' },
                { icon: '🔄', title: 'Daily Updates', desc: 'Fresh content every day' },
                { icon: '🏆', title: 'Pro Strategies', desc: 'Learn from top players' },
                { icon: '💯', title: '100% Free', desc: 'No subscriptions ever' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-xl"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <span className="text-2xl mb-2 block">{feature.icon}</span>
                  <h4 className="font-semibold text-sm sm:text-base mb-1" style={{ color: 'var(--text-primary)' }}>{feature.title}</h4>
                  <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog / Latest Guides Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="blog">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
              Blog
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
              Latest Guides & Articles
            </h2>
            <p className="text-sm sm:text-base mt-2" style={{ color: 'var(--text-muted)' }}>
              Expert tips, strategies, and tutorials to help you improve
            </p>
          </div>
          <Link
            href="/clash-of-clans/guides"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm transition-colors"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
          >
            View All Guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* Town Hall Quick Links - Mobile optimized */}
      <section className="py-10 sm:py-14" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3" style={{ background: 'rgba(245, 158, 11, 0.1)', color: '#F59E0B' }}>
              Quick Access
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Clash of Clans Base Layouts by Town Hall
            </h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Find war, farming, trophy & CWL bases for every level
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 sm:gap-3">
            {[18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7].map((level) => (
              <Link
                key={level}
                href={`/clash-of-clans/th/${level}`}
                className="px-2 sm:px-4 py-3 sm:py-3 rounded-lg sm:rounded-xl font-semibold text-sm text-center transition-all hover:scale-105 active:scale-95"
                style={{
                  background: level >= 15 ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' : 'var(--surface-100)',
                  color: level >= 15 ? '#000' : 'var(--text-primary)',
                  border: level >= 15 ? 'none' : '1px solid var(--border)'
                }}
              >
                TH{level}
              </Link>
            ))}
          </div>

          {/* Builder Hall link */}
          <div className="text-center mt-4">
            <Link
              href="/clash-of-clans/bh"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
              style={{ color: '#F59E0B' }}
            >
              View Builder Hall Bases
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section - SEO Optimized */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16" id="faq">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base" style={{ color: 'var(--text-muted)' }}>
            Everything you need to know about Game365Hub
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {[
            {
              q: 'What is Game365Hub?',
              a: 'Game365Hub is a free gaming resource website that provides base layouts, guides, tier lists, and strategies for popular mobile games including Clash of Clans, Brawl Stars, Clash Royale, Free Fire, and PUBG Mobile.'
            },
            {
              q: 'How do I copy a base layout in Clash of Clans?',
              a: 'Simply click the "Copy Base" button on any layout. Then open Clash of Clans, go to the base editor, and tap "Paste" to import the layout directly into your game.'
            },
            {
              q: 'Are all resources on Game365Hub free?',
              a: 'Yes! All 4,500+ base layouts, guides, and resources are completely free. We don\'t have any subscriptions or hidden fees.'
            },
            {
              q: 'How often is new content added?',
              a: 'We add new base layouts and guides daily. Our team constantly updates content based on the latest game updates and meta changes.'
            },
            {
              q: 'Which games do you cover?',
              a: 'We currently cover Clash of Clans (with 4,500+ bases), Brawl Stars, Clash Royale, Free Fire, PUBG Mobile, and Frozen City. More games are being added regularly.'
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              itemScope
              itemType="https://schema.org/Question"
            >
              <h3 className="font-semibold text-sm sm:text-base mb-2" style={{ color: 'var(--text-primary)' }} itemProp="name">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm" style={{ color: 'var(--text-muted)' }} itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <span itemProp="text">{faq.a}</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div
          className="text-center p-8 sm:p-12 md:p-16 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(99, 102, 241, 0.1) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.2)'
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready to Dominate Your Game?
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Join thousands of players using Game365Hub to improve their gameplay. Start exploring now!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/clash-of-clans"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' }}
            >
              Browse Clash of Clans
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)', color: 'var(--text-primary)' }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
