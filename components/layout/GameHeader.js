'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * GameHeader - Game-specific navigation header
 * Displays game branding and navigation within a game section
 */
export default function GameHeader({ game }) {
  const pathname = usePathname();

  if (!game) return null;

  return (
    <div className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface-50)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-6 py-3 overflow-x-auto">
          {/* Game Title/Home Link */}
          <Link
            href={`/${game.slug}`}
            className="flex items-center gap-2 font-semibold whitespace-nowrap"
            style={{ color: 'var(--game-primary)' }}
          >
            <span>{game.shortName || game.name}</span>
          </Link>

          {/* Divider */}
          <div className="w-px h-5" style={{ background: 'var(--border)' }} />

          {/* Navigation Links */}
          <nav className="flex items-center gap-1">
            {game.navigation?.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 text-sm rounded-lg whitespace-nowrap transition-colors ${
                    isActive
                      ? 'font-medium'
                      : ''
                  }`}
                  style={{
                    color: isActive ? 'var(--game-primary)' : 'var(--text-muted)',
                    background: isActive ? 'rgba(var(--game-primary), 0.1)' : 'transparent',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
