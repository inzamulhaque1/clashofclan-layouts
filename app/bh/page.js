import Link from 'next/link';
import { generatePageMeta } from '@/lib/seo';
import { getBaseStats } from '@/lib/bases';

export const metadata = generatePageMeta({
  title: 'Best Builder Hall Base Layouts 2026 - BH3 to BH10 with Copy Links',
  description: 'Download 300+ Clash of Clans Builder Hall base layouts for BH3 to BH10. Best versus battle bases, trophy pushing designs with one-click copy links. Win more Builder Base battles!',
  path: '/bh',
});

const BH_LEVELS = [
  { level: 10, description: 'Max level with all troops' },
  { level: 9, description: 'O.T.T.O Hut and Lava Launcher' },
  { level: 8, description: 'Mega Tesla and Super P.E.K.K.A' },
  { level: 7, description: 'Drop Ship and Giant Cannon' },
  { level: 6, description: 'Night Witch and Roaster' },
  { level: 5, description: 'Battle Machine unlocks' },
  { level: 4, description: 'Baby Dragon and Air Bombs' },
  { level: 3, description: 'Starting Builder Base' },
];

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

export default function BHIndexPage() {
  const stats = getBaseStats();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-sm text-muted hover:text-white transition-colors mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">
          Builder Hall <span className="text-primary">Bases</span>
        </h1>
        <p className="text-muted max-w-xl">
          Layouts for Builder Base versus battles. One-click copy to import directly into the game.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {BH_LEVELS.map(({ level, description }) => {
          const count = stats.byHallType?.[`BH${level}`] || 0;

          return (
            <Link
              key={level}
              href={`/bh/${level}`}
              className="level-card p-5 text-center group"
            >
              <div className="mb-3">
                <img
                  src={BH_IMAGES[level]}
                  alt={`Builder Hall ${level}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto group-hover:scale-110 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' }}
                />
              </div>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl font-bold group-hover:text-primary transition-colors">
                  BH{level}
                </span>
                {count > 0 && (
                  <span className="text-xs text-muted">{count}</span>
                )}
              </div>
              <p className="text-xs text-muted">{description}</p>
            </Link>
          );
        })}
      </div>

      {/* SEO Content */}
      <section className="mt-16 pt-12 border-t border-white/10">
        <h2 className="text-xl font-semibold mb-4">Builder Base Strategy</h2>
        <div className="text-muted space-y-3 max-w-2xl">
          <p>
            Builder Base features 1v1 versus battles where both players attack simultaneously.
            Your base needs to maximize defense while you plan your offensive strategy.
          </p>
        </div>
      </section>
    </div>
  );
}
