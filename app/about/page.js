import { generatePageMeta } from '@/lib/seo';
import { getBaseStats } from '@/lib/bases';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'About Game365Hub - Your Ultimate Gaming Resource',
  description: 'About Game365Hub - Your source for gaming guides, base layouts, tier lists, and strategies for Clash of Clans, Brawl Stars, Clash Royale, and more.',
  path: '/about',
});

export default function AboutPage() {
  const stats = getBaseStats();

  const games = [
    { name: 'Clash of Clans', color: '#F59E0B', href: '/clash-of-clans' },
    { name: 'Brawl Stars', color: '#FF6B35', href: '/brawl-stars' },
    { name: 'Clash Royale', color: '#2563EB', href: '/clash-royale' },
    { name: 'Frozen City', color: '#06B6D4', href: '/frozen-city' },
    { name: 'Free Fire', color: '#EF4444', href: '/free-fire' },
    { name: 'PUBG Mobile', color: '#F59E0B', href: '/pubg' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/"
        className="text-sm transition-colors mb-4 inline-flex items-center gap-2"
        style={{ color: 'var(--text-muted)' }}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
        About <span style={{ color: 'var(--game-primary)' }}>Game365Hub</span>
      </h1>
      <p className="text-xl mb-12" style={{ color: 'var(--text-muted)' }}>
        Your ultimate resource for mobile gaming guides and strategies
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--game-primary)' }}>{stats.total.toLocaleString()}+</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Base Layouts</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--game-primary)' }}>6+</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Games Covered</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--game-primary)' }}>100+</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Guides & Tips</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold mb-1" style={{ color: 'var(--game-primary)' }}>Daily</div>
          <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Updates</div>
        </div>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>What We Offer</h2>
          <p>
            Game365Hub is your comprehensive resource for mobile gaming. We provide high-quality content
            to help you improve your gameplay:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Base Layouts</strong> - Copy-ready layouts for strategy games</li>
            <li><strong>Guides & Tutorials</strong> - In-depth guides for all skill levels</li>
            <li><strong>Tier Lists</strong> - Up-to-date rankings for characters, troops, and more</li>
            <li><strong>Strategies & Tips</strong> - Proven tactics from experienced players</li>
            <li><strong>Meta Updates</strong> - Stay current with the latest game changes</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Games We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {games.map((game) => (
              <Link
                key={game.name}
                href={game.href}
                className="p-4 rounded-lg transition-transform hover:scale-105"
                style={{ background: 'var(--surface-100)' }}
              >
                <div
                  className="font-semibold mb-1"
                  style={{ color: game.color }}
                >
                  {game.name}
                </div>
                <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                  Guides, tips & more
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Clash of Clans Content</h2>
          <p>
            Our most comprehensive section features {stats.total.toLocaleString()}+ base layouts for all Town Hall
            and Builder Hall levels with one-click copy links.
          </p>
          <div className="flex flex-wrap gap-2">
            {[18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3].map(level => (
              <Link key={level} href={`/clash-of-clans/th/${level}`} className="badge-primary hover:opacity-80">
                TH{level}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {[10, 9, 8, 7, 6, 5, 4, 3].map(level => (
              <Link key={level} href={`/clash-of-clans/bh/${level}`} className="badge bg-emerald-500/10 text-emerald-400 hover:opacity-80">
                BH{level}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
          <p>
            We believe every gamer deserves access to quality resources. Our mission is to provide
            free, comprehensive, and up-to-date gaming content to help you succeed in your favorite games.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Disclaimer</h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            Game365Hub is a fan-made website and is not affiliated with, endorsed, sponsored, or specifically
            approved by Supercell, Garena, PUBG Corporation, or any other game developer. All game names, logos,
            characters, and distinctive likenesses are the exclusive property of their respective owners.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you!
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:inzamulhaque1002@gmail.com" style={{ color: 'var(--game-primary)' }} className="hover:underline">
              inzamulhaque1002@gmail.com
            </a>
            <a href="https://wa.me/8801728005274" target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#25D366' }}>
              WhatsApp: +880 1728 005274
            </a>
          </div>
          <p>
            <Link href="/contact" style={{ color: 'var(--game-primary)' }} className="hover:underline">
              Visit our Contact Page
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
