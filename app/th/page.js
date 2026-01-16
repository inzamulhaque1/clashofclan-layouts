import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';
import { getBaseStats } from '@/lib/bases';

export const metadata = generatePageMeta({
  title: 'Best Town Hall Base Layouts 2026 - TH3 to TH18 with Copy Links',
  description: 'Download 4000+ Clash of Clans Town Hall base layouts for TH3 to TH18. Best war bases, farming bases, trophy bases, CWL anti 3 star designs with one-click copy links. Updated daily!',
  path: '/th',
});

const TH_LEVELS = [
  { level: 18, description: 'Spirit Fox and Monolith' },
  { level: 17, description: 'Merged Defenses and Battle Drill' },
  { level: 16, description: 'Root Rider and Angry Jelly' },
  { level: 15, description: 'Pet House and Recall Spell' },
  { level: 14, description: 'Pet House and Siege Barracks' },
  { level: 13, description: 'Royal Champion and Scattershot' },
  { level: 12, description: 'Giga Tesla and Siege Machines' },
  { level: 11, description: 'Grand Warden and Eagle Artillery' },
  { level: 10, description: 'Inferno Towers' },
  { level: 9, description: 'Archer Queen and X-Bows' },
  { level: 8, description: 'Dark Elixir and Barbarian King' },
  { level: 7, description: 'Dragons and Hidden Teslas' },
  { level: 6, description: 'Healers and Air Defense' },
  { level: 5, description: 'Wizards and Spell Factory' },
  { level: 4, description: 'Air Troops Unlocked' },
  { level: 3, description: 'Clan Castle Available' },
];

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

export default function THIndexPage() {
  const stats = getBaseStats();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Town Hall <span className="text-primary">Bases</span>
        </h1>
        <p className="text-muted max-w-xl">
          Select your Town Hall level to browse layouts. Each base includes a one-click copy link.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TH_LEVELS.map(({ level, description }) => {
          const count = stats.byHallType?.[`TH${level}`] || 0;

          return (
            <Link
              key={level}
              href={`/th/${level}`}
              className="level-card p-5 group flex items-center gap-4"
            >
              <div className="flex-shrink-0">
                <img
                  src={TH_IMAGES[level]}
                  alt={`Town Hall ${level}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl font-bold group-hover:text-primary transition-colors">
                    TH{level}
                  </span>
                  {count > 0 && (
                    <span className="badge-primary">{count} bases</span>
                  )}
                </div>
                <p className="text-sm text-muted truncate">{description}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* SEO Content */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-4">Choosing the Right Base</h2>
        <div className="text-muted space-y-3 max-w-2xl">
          <p>
            Your Town Hall level determines which defenses and troops you have access to.
            A well-designed base can make the difference between a successful defense and a 3-star attack.
          </p>
          <p>
            Consider whether you need a war base for Clan Wars, a farming base to protect resources,
            or a trophy base for pushing leagues.
          </p>
        </div>
      </section>
    </div>
  );
}
