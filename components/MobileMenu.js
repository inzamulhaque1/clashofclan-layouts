'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ALL_GAMES = [
  { slug: 'clash-of-clans', name: 'Clash of Clans', color: '#F59E0B' },
  { slug: 'brawl-stars', name: 'Brawl Stars', color: '#FF6B35' },
  { slug: 'clash-royale', name: 'Clash Royale', color: '#2563EB' },
  { slug: 'free-fire', name: 'Free Fire', color: '#EF4444' },
  { slug: 'pubg', name: 'PUBG Mobile', color: '#F59E0B' },
  { slug: 'frozen-city', name: 'Frozen City', color: '#06B6D4' },
];

export default function MobileMenu({ currentGame, gameNav }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const menuContent = (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 9998 }}
        onClick={closeMenu}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          zIndex: 9999,
          background: 'var(--bg-primary)',
          boxShadow: isOpen ? '-10px 0 40px rgba(0,0,0,0.4)' : 'none'
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between h-16 px-4 border-b"
          style={{ borderColor: 'var(--border)' }}
        >
          <span className="font-bold text-lg" style={{ color: currentGame?.color || 'var(--text-primary)' }}>
            {currentGame ? currentGame.name : 'Menu'}
          </span>
          <button
            onClick={closeMenu}
            className="flex items-center justify-center w-10 h-10 rounded-lg"
            style={{ background: 'var(--surface-100)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain">
          <div className="p-4">

            {/* Game-specific navigation (when on a game page) */}
            {currentGame && gameNav && (
              <div className="mb-6">
                <p className="text-xs font-medium mb-3 px-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  {currentGame.name}
                </p>
                <ul className="space-y-2">
                  {gameNav.map((item) => {
                    const isActive = pathname === item.href ||
                      (item.href !== `/${currentGame.slug}` && pathname.startsWith(item.href));

                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl"
                          style={{
                            background: isActive ? `${currentGame.color}20` : 'var(--surface-100)',
                            borderLeft: isActive ? `3px solid ${currentGame.color}` : '3px solid transparent'
                          }}
                          onClick={closeMenu}
                        >
                          <span style={{ color: isActive ? currentGame.color : 'var(--text-primary)', fontWeight: isActive ? 500 : 400 }}>
                            {item.label}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {/* Quick Links for CoC */}
            {currentGame?.slug === 'clash-of-clans' && (
              <div className="mb-6">
                <p className="text-xs font-medium mb-3 px-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  Quick Links
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {[18, 17, 16, 15, 14, 13, 12, 11].map((level) => (
                    <Link
                      key={level}
                      href={`/clash-of-clans/th/${level}`}
                      className="py-2.5 rounded-lg text-center text-sm font-semibold"
                      style={{
                        background: level >= 16 ? 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' : 'var(--surface-100)',
                        color: level >= 16 ? '#000' : 'var(--text-primary)'
                      }}
                      onClick={closeMenu}
                    >
                      TH{level}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* All Games */}
            <div className="mb-6">
              <p className="text-xs font-medium mb-3 px-1 uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                {currentGame ? 'Switch Game' : 'Games'}
              </p>
              <ul className="space-y-2">
                {ALL_GAMES.map((game) => {
                  const isCurrentGame = currentGame?.slug === game.slug;

                  return (
                    <li key={game.slug}>
                      <Link
                        href={`/${game.slug}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl"
                        style={{
                          background: isCurrentGame ? `${game.color}20` : 'var(--surface-100)'
                        }}
                        onClick={closeMenu}
                      >
                        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: game.color }} />
                        <span style={{ color: 'var(--text-primary)' }}>{game.name}</span>
                        {isCurrentGame && (
                          <svg className="w-4 h-4 ml-auto" style={{ color: game.color }} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Other Links */}
            <div className="pt-4 border-t" style={{ borderColor: 'var(--border)' }}>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: 'var(--surface-100)' }}
                    onClick={closeMenu}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#10B981' }} />
                    <span style={{ color: 'var(--text-primary)' }}>About</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: 'var(--surface-100)' }}
                    onClick={closeMenu}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#3B82F6' }} />
                    <span style={{ color: 'var(--text-primary)' }}>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="flex items-center gap-3 px-4 py-3 rounded-xl"
                    style={{ background: 'var(--surface-100)' }}
                    onClick={closeMenu}
                  >
                    <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: '#8B5CF6' }} />
                    <span style={{ color: 'var(--text-primary)' }}>Contact</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Footer Links */}
            <div className="mt-6 pt-6 border-t" style={{ borderColor: 'var(--border)' }}>
              <div className="flex flex-wrap gap-4 px-1">
                <Link href="/about" className="text-sm" style={{ color: 'var(--text-muted)' }} onClick={closeMenu}>
                  About
                </Link>
                <Link href="/privacy" className="text-sm" style={{ color: 'var(--text-muted)' }} onClick={closeMenu}>
                  Privacy
                </Link>
                <Link href="/terms" className="text-sm" style={{ color: 'var(--text-muted)' }} onClick={closeMenu}>
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg"
        style={{ background: 'var(--surface-100)' }}
        aria-label="Open menu"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {mounted && createPortal(
        <div className="md:hidden">{menuContent}</div>,
        document.body
      )}
    </>
  );
}
