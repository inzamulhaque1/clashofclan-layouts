'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import MobileMenu from '@/components/MobileMenu';

// All games for dropdown
const GAMES = [
  { slug: 'clash-of-clans', name: 'Clash of Clans', shortName: 'CoC', color: '#F59E0B' },
  { slug: 'brawl-stars', name: 'Brawl Stars', shortName: 'BS', color: '#FF6B35' },
  { slug: 'clash-royale', name: 'Clash Royale', shortName: 'CR', color: '#2563EB' },
  { slug: 'free-fire', name: 'Free Fire', shortName: 'FF', color: '#EF4444' },
  { slug: 'pubg', name: 'PUBG Mobile', shortName: 'PUBG', color: '#F59E0B' },
  { slug: 'frozen-city', name: 'Frozen City', shortName: 'FC', color: '#06B6D4' },
];

// Game-specific navigation
const GAME_NAV = {
  'clash-of-clans': [
    { href: '/clash-of-clans', label: 'Home' },
    { href: '/clash-of-clans/th', label: 'Town Hall' },
    { href: '/clash-of-clans/bh', label: 'Builder Hall' },
    { href: '/clash-of-clans/guides', label: 'Guides' },
    { href: '/clash-of-clans/search', label: 'Search' },
  ],
  'brawl-stars': [
    { href: '/brawl-stars', label: 'Home' },
    { href: '/brawl-stars/tier-list', label: 'Tier List' },
    { href: '/brawl-stars/brawlers', label: 'Brawlers' },
    { href: '/brawl-stars/modes', label: 'Game Modes' },
    { href: '/brawl-stars/guides', label: 'Guides' },
  ],
  'clash-royale': [
    { href: '/clash-royale', label: 'Home' },
    { href: '/clash-royale/tier-list', label: 'Tier List' },
    { href: '/clash-royale/guides', label: 'Guides' },
  ],
};

export default function DynamicHeader() {
  const pathname = usePathname();
  const [gamesOpen, setGamesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Detect current game from URL
  const currentGameSlug = GAMES.find(g => pathname.startsWith(`/${g.slug}`))?.slug;
  const currentGame = GAMES.find(g => g.slug === currentGameSlug);
  const gameNav = currentGameSlug ? GAME_NAV[currentGameSlug] : null;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setGamesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setGamesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="Game365Hub"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {/* Games Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setGamesOpen(!gamesOpen)}
                className="flex items-center gap-1.5 px-4 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--surface-100)]"
                style={{ color: currentGame ? currentGame.color : 'var(--text-muted)' }}
              >
                {currentGame ? (
                  <>
                    <span className="w-2 h-2 rounded-full" style={{ background: currentGame.color }} />
                    <span className="font-medium">{currentGame.name}</span>
                  </>
                ) : (
                  <span>Games</span>
                )}
                <svg
                  className={`w-4 h-4 transition-transform ${gamesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {gamesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-56 rounded-xl shadow-xl overflow-hidden"
                  style={{ background: 'var(--bg-primary)', border: '1px solid var(--border)' }}
                >
                  {GAMES.map((game) => (
                    <Link
                      key={game.slug}
                      href={`/${game.slug}`}
                      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-[var(--surface-100)]"
                      style={{
                        background: currentGameSlug === game.slug ? 'var(--surface-100)' : 'transparent'
                      }}
                    >
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: game.color }} />
                      <span style={{ color: 'var(--text-primary)' }}>{game.name}</span>
                      {currentGameSlug === game.slug && (
                        <svg className="w-4 h-4 ml-auto" style={{ color: game.color }} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Game-specific navigation */}
            {gameNav && (
              <>
                <div className="w-px h-5 mx-2" style={{ background: 'var(--border)' }} />
                {gameNav.map((item) => {
                  const isActive = pathname === item.href ||
                    (item.href !== `/${currentGameSlug}` && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-3 py-2 text-sm rounded-lg transition-colors"
                      style={{
                        color: isActive ? currentGame?.color : 'var(--text-muted)',
                        background: isActive ? `${currentGame?.color}15` : 'transparent',
                        fontWeight: isActive ? 500 : 400
                      }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            )}

            {/* Main nav links - always visible */}
            <div className="w-px h-5 mx-2" style={{ background: 'var(--border)' }} />
            <Link
              href="/about"
              className={`px-3 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--surface-100)]`}
              style={{ color: pathname === '/about' ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: pathname === '/about' ? 500 : 400 }}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`px-3 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--surface-100)]`}
              style={{ color: pathname === '/blog' || pathname.startsWith('/blog/') ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: pathname === '/blog' || pathname.startsWith('/blog/') ? 500 : 400 }}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className={`px-3 py-2 text-sm rounded-lg transition-colors hover:bg-[var(--surface-100)]`}
              style={{ color: pathname === '/contact' ? 'var(--text-primary)' : 'var(--text-muted)', fontWeight: pathname === '/contact' ? 500 : 400 }}
            >
              Contact
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <MobileMenu currentGame={currentGame} gameNav={gameNav} />
          </div>
        </div>
      </nav>
    </header>
  );
}
