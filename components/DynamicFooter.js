'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function DynamicFooter() {
  const pathname = usePathname();

  // Hide footer on admin pages
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  return (
    <footer className="border-t mt-20" style={{ borderColor: 'var(--border)', background: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <img
                src="/logo.png"
                alt="Game365Hub"
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Your ultimate gaming resource hub for mobile games.
            </p>
          </div>

          {/* Clash of Clans */}
          <div>
            <h4 className="text-sm font-medium mb-4">Clash of Clans</h4>
            <ul className="space-y-2.5">
              {[18, 17, 16, 15].map(level => (
                <li key={level}>
                  <Link href={`/clash-of-clans/th/${level}`} className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>
                    TH{level} Bases
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Games */}
          <div>
            <h4 className="text-sm font-medium mb-4">More Games</h4>
            <ul className="space-y-2.5">
              <li><Link href="/brawl-stars" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Brawl Stars</Link></li>
              <li><Link href="/clash-royale" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Clash Royale</Link></li>
              <li><Link href="/free-fire" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>Free Fire</Link></li>
              <li><Link href="/pubg" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>PUBG Mobile</Link></li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-sm font-medium mb-4">Guides</h4>
            <ul className="space-y-2.5">
              <li><Link href="/clash-of-clans/guides/how-to-copy-base" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>How to Copy Bases</Link></li>
              <li><Link href="/clash-of-clans/guides/best-th18-attack-strategies" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>TH18 Attack Strategies</Link></li>
              <li><Link href="/clash-of-clans/guides/cwl-base-building-tips" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>CWL Base Building</Link></li>
              <li><Link href="/clash-of-clans/guides" className="text-sm transition-colors hover:text-primary" style={{ color: 'var(--text-muted)' }}>All Guides</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap justify-center gap-4 text-xs" style={{ color: 'var(--text-muted)' }}>
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
              Not affiliated with Supercell, Garena, or Krafton.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
