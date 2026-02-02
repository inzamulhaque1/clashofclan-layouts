import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CHARACTERS, ROLES, ABILITY_TYPES, getCharacterById, getCharactersByRole } from '@/lib/free-fire/characters';

export async function generateStaticParams() {
  return CHARACTERS.map((char) => ({
    id: char.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const char = getCharacterById(id);

  if (!char) {
    return { title: 'Character Not Found' };
  }

  return {
    title: `${char.name} - ${char.ability.name} | Free Fire Character Guide`,
    description: `Complete guide for ${char.name} in Free Fire. Learn about ${char.ability.name} ability, best combos, and strategies. ${char.ability.description}`,
    keywords: [char.name, 'free fire', char.ability.name, `${char.name} guide`, 'free fire characters'],
    openGraph: {
      title: `${char.name} - Free Fire Character Guide`,
      description: `${char.ability.name}: ${char.ability.description}`,
      images: [{ url: char.image.url, alt: char.image.alt }],
    },
  };
}

export default async function CharacterPage({ params }) {
  const { id } = await params;
  const char = getCharacterById(id);

  if (!char) {
    notFound();
  }

  const role = ROLES[char.role];
  const abilityType = ABILITY_TYPES[char.abilityType];
  const similarCharacters = getCharactersByRole(char.role)
    .filter(c => c.id !== char.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${role.color} 0%, ${role.color}50 100%)` }} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire/characters" className="hover:opacity-80">Characters</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{char.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Character Image */}
            <div className="flex justify-center">
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-8 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${role.color}20, ${role.color}10)`,
                  border: `2px solid ${role.color}40`,
                  boxShadow: `0 20px 60px -20px ${role.color}50`
                }}
              >
                <img
                  src={char.image.url}
                  alt={char.image.alt}
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
                {/* Badges */}
                {char.recommended && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000' }}
                  >
                    Meta Pick
                  </div>
                )}
              </div>
            </div>

            {/* Character Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2"
                  style={{ background: role.color, color: '#fff' }}
                >
                  {role.icon} {role.name}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold"
                  style={{ background: abilityType.color, color: '#fff' }}
                >
                  {abilityType.name} Ability
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black mb-2" style={{ color: 'var(--text-primary)' }}>
                {char.name}
              </h1>

              {char.collaboration && (
                <p className="text-lg mb-4" style={{ color: role.color }}>
                  Collaboration: {char.collaboration}
                </p>
              )}

              <div className="flex flex-wrap gap-4 text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
                <span>Gender: {char.gender}</span>
                <span>Released: {char.releaseYear}</span>
                <span>Obtain: {char.obtainMethod}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {char.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ability Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: abilityType.color + '20', color: abilityType.color }}
              >
                {char.abilityType === 'active' ? '⚡' : '🔄'}
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                  {char.ability.name}
                </h2>
                <span className="text-sm" style={{ color: abilityType.color }}>
                  {abilityType.name} Ability
                </span>
              </div>
            </div>

            <p className="text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
              {char.ability.description}
            </p>

            {/* Ability Stats */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {char.ability.cooldown && (
                <div className="rounded-xl p-4" style={{ background: 'var(--surface-200)' }}>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Cooldown</div>
                  <div className="text-2xl font-bold" style={{ color: '#F59E0B' }}>{char.ability.cooldown}s</div>
                </div>
              )}
              {char.ability.maxLevel && (
                <div className="rounded-xl p-4" style={{ background: 'var(--surface-200)' }}>
                  <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Max Level</div>
                  <div className="text-2xl font-bold" style={{ color: '#10B981' }}>{char.ability.maxLevel}</div>
                </div>
              )}
              {Object.entries(char.ability.stats || {}).map(([key, value]) => (
                <div key={key} className="rounded-xl p-4" style={{ background: 'var(--surface-200)' }}>
                  <div className="text-sm capitalize" style={{ color: 'var(--text-muted)' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How to Use {char.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#10B981' }}>
                <span className="text-2xl">✅</span> Strengths
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  {char.abilityType === 'active' ? 'Powerful ability that can change fights' : 'Always active without needing to activate'}
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500">•</span>
                  Great for {role.name.toLowerCase()} playstyle
                </li>
                {char.recommended && (
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Top-tier meta character for ranked
                  </li>
                )}
                {char.tags.includes('team') && (
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    Excellent for squad play
                  </li>
                )}
              </ul>
            </div>

            {/* Tips */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#3B82F6' }}>
                <span className="text-2xl">💡</span> Pro Tips
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                {char.abilityType === 'active' && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    Save ability for crucial moments, {char.ability.cooldown}s cooldown is long
                  </li>
                )}
                {char.role === 'rusher' && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    Push aggressively when ability is ready
                  </li>
                )}
                {char.role === 'support' && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    Stay close to teammates to maximize support value
                  </li>
                )}
                {char.role === 'scout' && (
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500">•</span>
                    Share enemy info with your team for coordinated plays
                  </li>
                )}
                <li className="flex items-start gap-2">
                  <span className="text-blue-500">•</span>
                  Combine with complementary characters for best results
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Best Combos */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Recommended Character Combos
          </h2>

          <div
            className="rounded-2xl p-6"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
              {char.name} works best with characters that complement {char.role === 'rusher' ? 'aggressive plays' : char.role === 'support' ? 'team survival' : char.role === 'scout' ? 'information gathering' : char.role === 'sniper' ? 'long-range combat' : 'the team composition'}.
            </p>

            <div className="space-y-3">
              {char.role === 'rusher' && (
                <>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">💚</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>DJ Alok / Dimitri</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Healing support while pushing</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">👁️</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Moco / Shirou</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Enemy info for better positioning</div>
                    </div>
                  </div>
                </>
              )}
              {char.role === 'support' && (
                <>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">⚔️</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Chrono / Hayato</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Aggressive frontliners to support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>A124 / Kenta</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Tank combo for maximum survival</div>
                    </div>
                  </div>
                </>
              )}
              {char.role === 'scout' && (
                <>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">⚔️</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Skyler / Chrono</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Aggressive plays with enemy info</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Laura / Maro</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Sniping with marked targets</div>
                    </div>
                  </div>
                </>
              )}
              {(char.role === 'sniper' || char.role === 'tank' || char.role === 'utility') && (
                <>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">💚</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>DJ Alok / K</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Healing and EP support</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'var(--surface-200)' }}>
                    <span className="text-2xl">👁️</span>
                    <div>
                      <div className="font-bold" style={{ color: 'var(--text-primary)' }}>Moco / Shirou</div>
                      <div className="text-sm" style={{ color: 'var(--text-muted)' }}>Intel for better decision making</div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Similar Characters */}
      {similarCharacters.length > 0 && (
        <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Other {role.name} Characters
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {similarCharacters.map((c) => (
                <Link
                  key={c.id}
                  href={`/free-fire/characters/${c.id}`}
                  className="group rounded-xl overflow-hidden transition-all hover:scale-105"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <div className="p-4">
                    <img
                      src={c.image.url}
                      alt={c.name}
                      className="w-full aspect-square object-contain"
                    />
                    <h3 className="font-bold text-center mt-2" style={{ color: 'var(--text-primary)' }}>
                      {c.name}
                    </h3>
                    <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                      {c.ability.name}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/free-fire/characters"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                style={{ background: role.color, color: '#fff' }}
              >
                View All Characters
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
