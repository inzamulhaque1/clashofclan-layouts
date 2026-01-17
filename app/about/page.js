import { generatePageMeta } from '@/lib/seo';
import { getBaseStats } from '@/lib/bases';
import Link from 'next/link';

export const metadata = generatePageMeta({
  title: 'About CoC Bases - Best Clash of Clans Base Layouts',
  description: 'About CoC Bases - Your source for 4500+ Clash of Clans base layouts. Find war bases, farming bases, and trophy bases for TH3-TH18 and BH3-BH10 with one-click copy links.',
  path: '/about',
});

export default function AboutPage() {
  const stats = getBaseStats();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
        ← Back to Home
      </Link>

      <h1 className="text-3xl font-bold mb-4">About <span className="text-primary">CoC Bases</span></h1>
      <p className="text-xl text-muted mb-12">Your ultimate source for Clash of Clans base layouts</p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">{stats.total.toLocaleString()}+</div>
          <div className="text-sm text-muted">Base Layouts</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">16</div>
          <div className="text-sm text-muted">Town Hall Levels</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">8</div>
          <div className="text-sm text-muted">Builder Hall Levels</div>
        </div>
        <div className="card p-6 text-center">
          <div className="text-3xl font-bold text-primary mb-1">6</div>
          <div className="text-sm text-muted">Base Types</div>
        </div>
      </div>

      <div className="space-y-8" style={{ color: 'var(--text-secondary)' }}>
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">What We Offer</h2>
          <p>
            CoC Bases is a comprehensive collection of Clash of Clans base layouts for all Town Hall and Builder Hall levels.
            We provide carefully curated base designs that help you:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Protect your resources</strong> with optimized farming bases</li>
            <li><strong>Win more wars</strong> with anti-3 star war bases</li>
            <li><strong>Push trophies</strong> with defensive trophy bases</li>
            <li><strong>Dominate CWL</strong> with competitive war layouts</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">One-Click Copy</h2>
          <p>
            Every base on our site comes with a copy link that you can use directly in Clash of Clans.
            Simply click the &quot;Copy Base&quot; button, open your game, and paste the layout in the base editor.
            No manual rebuilding required!
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Base Types</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge-war mb-2">WAR</div>
              <p className="text-sm">Anti-3 star bases designed for Clan Wars and CWL</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge-farm mb-2">FARM</div>
              <p className="text-sm">Protect Gold, Elixir, and Dark Elixir from raiders</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge-trophy mb-2">TROPHY</div>
              <p className="text-sm">Climb the leaderboards and reach Legend League</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge bg-purple-500/10 text-purple-400 mb-2">HYBRID</div>
              <p className="text-sm">Balance between resource and trophy protection</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge bg-blue-500/10 text-blue-400 mb-2">CWL</div>
              <p className="text-sm">Specialized layouts for Clan War Leagues</p>
            </div>
            <div className="p-4 rounded-lg" style={{ background: 'var(--surface-100)' }}>
              <div className="badge bg-zinc-500/10 text-zinc-400 mb-2">DEFENSE</div>
              <p className="text-sm">Maximum defensive strength layouts</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Supported Levels</h2>
          <p>We support all current Town Hall and Builder Hall levels:</p>
          <div className="flex flex-wrap gap-2">
            {[18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3].map(level => (
              <Link key={level} href={`/th/${level}`} className="badge-primary hover:opacity-80">
                TH{level}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {[10, 9, 8, 7, 6, 5, 4, 3].map(level => (
              <Link key={level} href={`/bh/${level}`} className="badge bg-emerald-500/10 text-emerald-400 hover:opacity-80">
                BH{level}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
          <p className="text-sm text-muted">
            CoC Bases is a fan-made website and is not affiliated with, endorsed, sponsored, or specifically
            approved by Supercell. Clash of Clans and all related logos, characters, names, and distinctive
            likenesses are the exclusive property of Supercell.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you!
          </p>
          <p className="text-primary">contact@cocbases.com</p>
        </section>
      </div>
    </div>
  );
}
