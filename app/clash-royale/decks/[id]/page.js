import Link from 'next/link';
import { notFound } from 'next/navigation';
import { META_DECKS, CARDS, getCardById } from '@/lib/clash-royale/cards';

// Generate static params for all decks
export async function generateStaticParams() {
  return META_DECKS.map((deck) => ({
    id: deck.id,
  }));
}

// Generate metadata
export async function generateMetadata({ params }) {
  const deck = META_DECKS.find(d => d.id === params.id);

  if (!deck) {
    return { title: 'Deck Not Found' };
  }

  return {
    title: `${deck.name} Deck Guide 2026 | Clash Royale Meta Deck`,
    description: `${deck.description} Learn how to play ${deck.name} with ${deck.winRate}% win rate. ${deck.avgElixir} average elixir ${deck.archetype} deck.`,
    keywords: [
      deck.name.toLowerCase(),
      'clash royale deck',
      `${deck.archetype.toLowerCase()} deck`,
      'meta deck 2026',
      'clash royale guide',
      ...deck.cards.map(c => c.replace(/-/g, ' '))
    ],
    openGraph: {
      title: `${deck.name} - Clash Royale Meta Deck`,
      description: deck.description,
    },
    alternates: {
      canonical: `/clash-royale/decks/${deck.id}`
    }
  };
}

// Card role descriptions
const CARD_ROLES = {
  'hog-rider': { role: 'Win Condition', description: 'Fast building-targeting troop. Your main source of tower damage.' },
  'musketeer': { role: 'Support', description: 'Long range DPS. Excellent on defense, then counter-push.' },
  'cannon': { role: 'Defense', description: 'Cheap building to pull tanks and Hog Riders.' },
  'fireball': { role: 'Spell', description: 'Medium damage spell for support troops and chip damage.' },
  'the-log': { role: 'Small Spell', description: 'Cheap spell to clear swarms and push back troops.' },
  'skeletons': { role: 'Cycle', description: '1 elixir cycle card. Great for distraction and DPS.' },
  'ice-spirit': { role: 'Cycle', description: 'Freezes enemies briefly. Excellent cycle and utility.' },
  'ice-golem': { role: 'Mini Tank', description: 'Cheap tank that slows on death. Kites troops effectively.' },
  'goblin-barrel': { role: 'Win Condition', description: 'Throws goblins to any location. Main damage source.' },
  'princess': { role: 'Bait Card', description: 'Long range splash. Baits out Log for Goblin Barrel.' },
  'goblin-gang': { role: 'Bait Card', description: 'Swarm card that baits spells. High DPS.' },
  'knight': { role: 'Mini Tank', description: 'Tanky troop with great stats for cost.' },
  'inferno-tower': { role: 'Defense', description: 'Melts tanks. Essential vs Golem and Giant.' },
  'rocket': { role: 'Heavy Spell', description: 'High damage spell. Win condition vs cycle decks.' },
  'golem': { role: 'Win Condition', description: 'Massive tank. Build pushes behind it in double elixir.' },
  'baby-dragon': { role: 'Support', description: 'Flying splash damage. Survives spells.' },
  'mega-minion': { role: 'Support', description: 'Flying single target DPS. Great defensive value.' },
  'night-witch': { role: 'Support', description: 'Spawns bats. Excellent behind Golem.' },
  'lightning': { role: 'Heavy Spell', description: 'Hits 3 targets. Destroys defensive buildings.' },
  'tornado': { role: 'Utility Spell', description: 'Pulls troops together. Activates King Tower.' },
  'barbarian-barrel': { role: 'Small Spell', description: 'Rolls and spawns Barbarian. Great value.' },
  'lumberjack': { role: 'Support', description: 'Drops Rage on death. Fast and high DPS.' },
  'pekka': { role: 'Tank Killer', description: 'Massive damage. Destroys any tank.' },
  'battle-ram': { role: 'Win Condition', description: 'Charges buildings. Spawns Barbarians.' },
  'bandit': { role: 'Bridge Spam', description: 'Dashes and becomes invincible. Punish card.' },
  'electro-wizard': { role: 'Support', description: 'Stuns on spawn and attack. Resets Inferno.' },
  'royal-ghost': { role: 'Bridge Spam', description: 'Invisible until attacking. Splash damage.' },
  'poison': { role: 'Spell', description: 'Area denial. Slows and damages over time.' },
  'zap': { role: 'Small Spell', description: 'Instant stun. Resets Inferno and Sparky.' },
  'minions': { role: 'Support', description: 'Flying swarm. Good DPS and spell bait.' },
  'lava-hound': { role: 'Win Condition', description: 'Flying tank. Splits into Lava Pups on death.' },
  'balloon': { role: 'Win Condition', description: 'Building-targeting bomber. Devastating damage.' },
  'skeleton-dragons': { role: 'Support', description: 'Flying splash pair. Great with Lava Hound.' },
  'tombstone': { role: 'Defense', description: 'Spawns Skeletons. Distracts building-targeting troops.' },
  'miner': { role: 'Mini Win Con', description: 'Goes anywhere. Tanks for Lava Pups.' },
  'xbow': { role: 'Win Condition', description: 'Siege building. Plant at bridge to hit tower.' },
  'tesla': { role: 'Defense', description: 'Hidden defensive building. Hits air and ground.' },
  'archers': { role: 'Support', description: 'Two ranged troops. Survives Log.' },
};

// Matchup tips by archetype
const ARCHETYPE_TIPS = {
  'Cycle': [
    'Keep track of opponent elixir at all times',
    'Never over-commit - always keep elixir for defense',
    'Cycle back to your win condition quickly',
    'Apply constant pressure but don\'t leak elixir',
    'In double elixir, you can out-cycle their counters',
  ],
  'Bait': [
    'Track opponent\'s small spell (Log, Zap, Arrows)',
    'Force them to use their spell on other bait cards',
    'Once spell is used, punish with Goblin Barrel',
    'Rocket cycle in overtime if needed',
    'Split lane pressure is very effective',
  ],
  'Beatdown': [
    'Be patient - wait for double elixir for big pushes',
    'It\'s okay to sacrifice tower HP early',
    'Build your push from the back',
    'Support your tank - don\'t let it die alone',
    'Use spells to clear defensive buildings',
  ],
  'Bridge Spam': [
    'Punish opponent when they play expensive cards',
    'Apply dual lane pressure',
    'Use PEKKA on defense, then counter-push',
    'Don\'t over-commit - chip damage adds up',
    'Bandit at the bridge forces reactions',
  ],
  'Siege': [
    'Defensive X-Bow is often the right play',
    'Know your matchups - some are nearly unwinnable',
    'Spell cycle for damage in bad matchups',
    'Protect X-Bow with Tesla and defensive cards',
    'Be patient and wait for the right moment to plant',
  ],
};

export default function DeckDetailPage({ params }) {
  const deck = META_DECKS.find(d => d.id === params.id);

  if (!deck) {
    notFound();
  }

  const tips = ARCHETYPE_TIPS[deck.archetype] || ARCHETYPE_TIPS['Cycle'];

  // Get card details with roles
  const deckCards = deck.cards.map(cardId => {
    const cardData = getCardById(cardId) || {};
    const roleData = CARD_ROLES[cardId] || { role: 'Utility', description: 'Versatile card for various situations.' };
    return {
      id: cardId,
      name: cardId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      image: `https://cdn.royaleapi.com/static/img/cards-150/${cardId}.png`,
      elixir: cardData.elixir || '?',
      ...roleData,
    };
  });

  // Calculate deck stats
  const winConditions = deckCards.filter(c => c.role === 'Win Condition' || c.role === 'Mini Win Con');
  const spells = deckCards.filter(c => c.role.includes('Spell'));
  const defenseCards = deckCards.filter(c => c.role === 'Defense' || c.role === 'Tank Killer');

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)' }}
        />
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-amber-500">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/clash-royale" className="hover:text-amber-500">Clash Royale</Link>
            <span className="mx-2">/</span>
            <Link href="/clash-royale" className="hover:text-amber-500">Meta Decks</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{deck.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Deck Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold text-white bg-amber-500">
                  META DECK
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6' }}>
                  {deck.archetype}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                {deck.name}
              </h1>

              <p className="text-xl mb-6" style={{ color: 'var(--text-muted)' }}>
                {deck.description}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-500">{deck.winRate}%</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Win Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-500">{deck.avgElixir}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Avg Elixir</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-amber-500">{deck.difficulty}</div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>Difficulty</div>
                </div>
              </div>
            </div>

            {/* Deck Cards Preview */}
            <div className="w-full lg:w-auto">
              <div
                className="p-4 rounded-2xl"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                <div className="grid grid-cols-4 gap-2">
                  {deckCards.map((card) => (
                    <div key={card.id} className="text-center">
                      <div className="relative">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="w-16 h-16 sm:w-20 sm:h-20 object-contain mx-auto"
                        />
                        <span
                          className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ background: '#8B5CF6' }}
                        >
                          {card.elixir}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3 pt-3" style={{ borderTop: '1px solid var(--border)' }}>
                  <span className="text-sm font-semibold" style={{ color: 'var(--text-muted)' }}>
                    Total: {deck.avgElixir * 8} Elixir • Avg: {deck.avgElixir}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards Breakdown Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
          Card Breakdown
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {deckCards.map((card) => (
            <div
              key={card.id}
              className="p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <div className="flex items-start gap-3">
                <img
                  src={card.image}
                  alt={card.name}
                  className="w-14 h-14 object-contain"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold truncate" style={{ color: 'var(--text-primary)' }}>{card.name}</h3>
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-semibold mt-1"
                    style={{
                      background: card.role === 'Win Condition' ? 'rgba(239, 68, 68, 0.15)' :
                                 card.role.includes('Spell') ? 'rgba(139, 92, 246, 0.15)' :
                                 card.role === 'Defense' ? 'rgba(59, 130, 246, 0.15)' :
                                 'rgba(107, 114, 128, 0.15)',
                      color: card.role === 'Win Condition' ? '#EF4444' :
                             card.role.includes('Spell') ? '#8B5CF6' :
                             card.role === 'Defense' ? '#3B82F6' :
                             'var(--text-muted)'
                    }}
                  >
                    {card.role}
                  </span>
                </div>
              </div>
              <p className="text-sm mt-3" style={{ color: 'var(--text-muted)' }}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Play Section */}
      <section className="py-12" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            How to Play {deck.name}
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tips */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span className="text-2xl">💡</span> Key Tips
              </h3>
              <ul className="space-y-3">
                {tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white bg-amber-500">
                      {index + 1}
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Game Plan */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <span className="text-2xl">🎯</span> Game Plan
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Early Game (1x Elixir)</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {deck.archetype === 'Beatdown'
                      ? 'Play defensively and build up elixir. It\'s okay to take some damage. Save your tank for double elixir.'
                      : deck.archetype === 'Cycle'
                      ? 'Start cycling cards to understand opponent\'s deck. Apply light pressure with your win condition.'
                      : deck.archetype === 'Bait'
                      ? 'Identify opponent\'s small spell. Start baiting it out with Princess or Goblin Gang.'
                      : deck.archetype === 'Siege'
                      ? 'Scout opponent\'s deck. Play defensive X-Bow if unsure. Don\'t over-commit.'
                      : 'Defend efficiently and look for counter-push opportunities. Apply bridge spam pressure when they over-commit.'
                    }
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Double Elixir</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {deck.archetype === 'Beatdown'
                      ? 'This is your time to shine! Build massive pushes from the back. Support your tank with splash and DPS.'
                      : deck.archetype === 'Cycle'
                      ? 'Out-cycle their counters. You can now play more aggressively and stack win conditions.'
                      : deck.archetype === 'Bait'
                      ? 'Rocket cycle for chip damage. Double barrel pushes become possible.'
                      : deck.archetype === 'Siege'
                      ? 'You can now support X-Bow better. Consider offensive placements if ahead.'
                      : 'Apply constant dual-lane pressure. Overwhelm their defense with quick troops.'
                    }
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Overtime</h4>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    Spell cycle if needed. Don't panic - play smart and count their cards. One mistake can lose the game.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counters Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
          Matchups & Counters
        </h2>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Good Against */}
          <div
            className="p-6 rounded-2xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-500">
              <span>✅</span> Strong Against
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {deck.archetype === 'Cycle' && (
                <>
                  <li>• Beatdown decks (out-cycle support)</li>
                  <li>• Slow heavy decks</li>
                  <li>• Elixir Golem</li>
                </>
              )}
              {deck.archetype === 'Bait' && (
                <>
                  <li>• Decks with only one small spell</li>
                  <li>• Beatdown without Arrows</li>
                  <li>• Graveyard decks</li>
                </>
              )}
              {deck.archetype === 'Beatdown' && (
                <>
                  <li>• Siege decks</li>
                  <li>• Cycle decks (if they can't break through)</li>
                  <li>• Control decks without big spell</li>
                </>
              )}
              {deck.archetype === 'Bridge Spam' && (
                <>
                  <li>• Beatdown decks</li>
                  <li>• Expensive decks</li>
                  <li>• Decks without splash</li>
                </>
              )}
              {deck.archetype === 'Siege' && (
                <>
                  <li>• Hog Cycle</li>
                  <li>• Log Bait</li>
                  <li>• Miner control</li>
                </>
              )}
            </ul>
          </div>

          {/* Even Matchups */}
          <div
            className="p-6 rounded-2xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-amber-500">
              <span>⚖️</span> Even Matchups
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              <li>• Mirror matchup (skill dependent)</li>
              <li>• Similar archetype decks</li>
              <li>• Depends on card levels</li>
            </ul>
          </div>

          {/* Weak Against */}
          <div
            className="p-6 rounded-2xl"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-500">
              <span>❌</span> Weak Against
            </h3>
            <ul className="space-y-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              {deck.archetype === 'Cycle' && (
                <>
                  <li>• Hard counters to win condition</li>
                  <li>• Multiple buildings</li>
                  <li>• Tornado + splash</li>
                </>
              )}
              {deck.archetype === 'Bait' && (
                <>
                  <li>• Triple spell decks</li>
                  <li>• Splash heavy decks</li>
                  <li>• Arrows + Log</li>
                </>
              )}
              {deck.archetype === 'Beatdown' && (
                <>
                  <li>• Inferno Tower + Inferno Dragon</li>
                  <li>• PEKKA Bridge Spam</li>
                  <li>• Fast punish decks</li>
                </>
              )}
              {deck.archetype === 'Bridge Spam' && (
                <>
                  <li>• Splash yard</li>
                  <li>• Multiple tanks</li>
                  <li>• Building + Tornado</li>
                </>
              )}
              {deck.archetype === 'Siege' && (
                <>
                  <li>• Golem Beatdown</li>
                  <li>• Royal Giant</li>
                  <li>• Heavy spell cycle</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Meta Decks */}
      <section className="py-12" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl font-black mb-8" style={{ color: 'var(--text-primary)' }}>
            Other Meta Decks
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {META_DECKS.filter(d => d.id !== deck.id).slice(0, 3).map((otherDeck) => (
              <Link
                key={otherDeck.id}
                href={`/clash-royale/decks/${otherDeck.id}`}
                className="group p-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
                style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{otherDeck.name}</h3>
                  <span className="text-green-500 font-bold text-sm">{otherDeck.winRate}%</span>
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {otherDeck.cards.map((cardId, idx) => (
                    <img
                      key={idx}
                      src={`https://cdn.royaleapi.com/static/img/cards-150/${cardId}.png`}
                      alt={cardId}
                      className="w-full aspect-square object-contain"
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/clash-royale"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-amber-500 border-2 border-amber-500/30 transition-all hover:bg-amber-500 hover:text-white hover:border-amber-500"
            >
              View All Meta Decks
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
