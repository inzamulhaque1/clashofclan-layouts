import Link from 'next/link';
import { notFound } from 'next/navigation';
import { WEAPONS, WEAPON_TYPES, getWeaponById, getWeaponsByType } from '@/lib/free-fire/weapons';

export async function generateStaticParams() {
  return WEAPONS.map((weapon) => ({
    id: weapon.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const weapon = getWeaponById(id);

  if (!weapon) {
    return { title: 'Weapon Not Found' };
  }

  return {
    title: `${weapon.name} - Stats & Guide | Free Fire Weapon`,
    description: `Complete guide for ${weapon.name} in Free Fire. Damage: ${weapon.stats.damage}, Range: ${weapon.stats.range}. ${weapon.description}`,
    keywords: [weapon.name, 'free fire', 'free fire weapons', `${weapon.name} stats`, weapon.typeInfo.name],
    openGraph: {
      title: `${weapon.name} - Free Fire Weapon Guide`,
      description: weapon.description,
      images: [{ url: weapon.image.url, alt: weapon.image.alt }],
    },
  };
}

export default async function WeaponPage({ params }) {
  const { id } = await params;
  const weapon = getWeaponById(id);

  if (!weapon) {
    notFound();
  }

  const similarWeapons = getWeaponsByType(weapon.type)
    .filter(w => w.id !== weapon.id)
    .slice(0, 4);

  // Calculate stat bars (percentage of max)
  const maxStats = {
    damage: 100,
    range: 100,
    magazine: 100,
    rateOfFire: 100,
    accuracy: 100,
    reloadSpeed: 100,
    mobility: 100,
  };

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative py-12 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ background: `linear-gradient(135deg, ${weapon.typeInfo.color} 0%, ${weapon.typeInfo.color}50 100%)` }} />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:opacity-80">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire" className="hover:opacity-80">Free Fire</Link>
            <span className="mx-2">/</span>
            <Link href="/free-fire/weapons" className="hover:opacity-80">Weapons</Link>
            <span className="mx-2">/</span>
            <span style={{ color: 'var(--text-primary)' }}>{weapon.name}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Weapon Image */}
            <div className="flex justify-center">
              <div
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl p-8 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${weapon.typeInfo.color}20, ${weapon.typeInfo.color}10)`,
                  border: `2px solid ${weapon.typeInfo.color}40`,
                  boxShadow: `0 20px 60px -20px ${weapon.typeInfo.color}50`
                }}
              >
                <img
                  src={weapon.image.url}
                  alt={weapon.image.alt}
                  className="w-48 h-48 sm:w-64 sm:h-64 object-contain"
                />
                {weapon.recommended && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-bold"
                    style={{ background: 'linear-gradient(135deg, #FFD700, #FFA500)', color: '#000' }}
                  >
                    Meta Weapon
                  </div>
                )}
              </div>
            </div>

            {/* Weapon Info */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-sm font-bold flex items-center gap-2"
                  style={{ background: weapon.typeInfo.color, color: '#fff' }}
                >
                  {weapon.typeInfo.icon} {weapon.typeInfo.name}
                </span>
                {weapon.ammoType && weapon.ammoType !== 'None' && (
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}
                  >
                    {weapon.ammoType} Ammo
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: 'var(--text-primary)' }}>
                {weapon.name}
              </h1>

              <p className="text-lg mb-6" style={{ color: 'var(--text-muted)' }}>
                {weapon.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {weapon.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Attachments */}
              {weapon.attachments && weapon.attachments.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Available Attachments:</h3>
                  <div className="flex flex-wrap gap-2">
                    {weapon.attachments.map((att) => (
                      <span
                        key={att}
                        className="px-3 py-1 rounded-lg text-sm font-medium"
                        style={{ background: weapon.typeInfo.color + '20', color: weapon.typeInfo.color }}
                      >
                        {att}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            Weapon Stats
          </h2>

          <div
            className="rounded-2xl p-6 sm:p-8"
            style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
          >
            <div className="space-y-4">
              {/* Damage */}
              {weapon.stats.damage !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Damage</span>
                    <span className="font-bold" style={{ color: '#EF4444' }}>{weapon.stats.damage}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.damage / maxStats.damage) * 100}%`, background: '#EF4444' }}
                    />
                  </div>
                </div>
              )}

              {/* Range */}
              {weapon.stats.range !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Range</span>
                    <span className="font-bold" style={{ color: '#3B82F6' }}>{weapon.stats.range}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.range / maxStats.range) * 100}%`, background: '#3B82F6' }}
                    />
                  </div>
                </div>
              )}

              {/* Rate of Fire */}
              {weapon.stats.rateOfFire !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Rate of Fire</span>
                    <span className="font-bold" style={{ color: '#F59E0B' }}>{weapon.stats.rateOfFire}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.rateOfFire / maxStats.rateOfFire) * 100}%`, background: '#F59E0B' }}
                    />
                  </div>
                </div>
              )}

              {/* Accuracy */}
              {weapon.stats.accuracy !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Accuracy</span>
                    <span className="font-bold" style={{ color: '#10B981' }}>{weapon.stats.accuracy}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.accuracy / maxStats.accuracy) * 100}%`, background: '#10B981' }}
                    />
                  </div>
                </div>
              )}

              {/* Magazine */}
              {weapon.stats.magazine !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Magazine Size</span>
                    <span className="font-bold" style={{ color: '#8B5CF6' }}>{weapon.stats.magazine}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${Math.min((weapon.stats.magazine / maxStats.magazine) * 100, 100)}%`, background: '#8B5CF6' }}
                    />
                  </div>
                </div>
              )}

              {/* Reload Speed */}
              {weapon.stats.reloadSpeed !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Reload Speed</span>
                    <span className="font-bold" style={{ color: '#EC4899' }}>{weapon.stats.reloadSpeed}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.reloadSpeed / maxStats.reloadSpeed) * 100}%`, background: '#EC4899' }}
                    />
                  </div>
                </div>
              )}

              {/* Mobility */}
              {weapon.stats.mobility !== null && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Mobility</span>
                    <span className="font-bold" style={{ color: '#06B6D4' }}>{weapon.stats.mobility}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(weapon.stats.mobility / maxStats.mobility) * 100}%`, background: '#06B6D4' }}
                    />
                  </div>
                </div>
              )}

              {/* Armor Penetration */}
              {weapon.stats.armorPenetration > 0 && (
                <div>
                  <div className="flex justify-between mb-1">
                    <span style={{ color: 'var(--text-muted)' }}>Armor Penetration</span>
                    <span className="font-bold" style={{ color: '#DC2626' }}>{weapon.stats.armorPenetration}</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden" style={{ background: 'var(--surface-200)' }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${weapon.stats.armorPenetration}%`, background: '#DC2626' }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="py-12 px-4" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
            How to Use {weapon.name}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Best For */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
            >
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2" style={{ color: '#10B981' }}>
                <span className="text-2xl">✅</span> Best For
              </h3>
              <ul className="space-y-2" style={{ color: 'var(--text-muted)' }}>
                {weapon.type === 'ar' && (
                  <>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Mid-range engagements</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Versatile combat situations</li>
                  </>
                )}
                {weapon.type === 'smg' && (
                  <>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Close-range spray fights</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Aggressive pushing</li>
                  </>
                )}
                {weapon.type === 'shotgun' && (
                  <>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Indoor/building fights</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>One-tap kills up close</li>
                  </>
                )}
                {weapon.type === 'sniper' && (
                  <>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Long-range picks</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Holding angles</li>
                  </>
                )}
                {(weapon.type === 'lmg' || weapon.type === 'pistol' || weapon.type === 'melee' || weapon.type === 'launcher') && (
                  <>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Situational use</li>
                    <li className="flex items-start gap-2"><span className="text-green-500">•</span>Secondary option</li>
                  </>
                )}
                {weapon.stats.damage > 80 && (
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span>High damage output</li>
                )}
                {weapon.stats.rateOfFire > 70 && (
                  <li className="flex items-start gap-2"><span className="text-green-500">•</span>Fast time-to-kill</li>
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
                {weapon.stats.accuracy < 40 && (
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Use attachments to improve accuracy</li>
                )}
                {weapon.stats.reloadSpeed < 45 && (
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Reload behind cover - slow reload</li>
                )}
                {weapon.stats.range > 70 && (
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Take long-range fights to advantage</li>
                )}
                {weapon.stats.rateOfFire > 70 && (
                  <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Watch your ammo - high fire rate</li>
                )}
                <li className="flex items-start gap-2"><span className="text-blue-500">•</span>Pair with {weapon.type === 'ar' ? 'SMG or shotgun' : weapon.type === 'sniper' ? 'AR or SMG' : 'AR'} for versatility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Weapons */}
      {similarWeapons.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Other {weapon.typeInfo.name}s
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {similarWeapons.map((w) => (
                <Link
                  key={w.id}
                  href={`/free-fire/weapons/${w.id}`}
                  className="group rounded-xl overflow-hidden transition-all hover:scale-105"
                  style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}
                >
                  <div className="p-4">
                    <img
                      src={w.image.url}
                      alt={w.name}
                      className="w-full aspect-square object-contain"
                    />
                    <h3 className="font-bold text-center mt-2" style={{ color: 'var(--text-primary)' }}>
                      {w.name}
                    </h3>
                    <div className="flex justify-center gap-4 mt-2 text-xs">
                      <span style={{ color: '#EF4444' }}>DMG: {w.stats.damage}</span>
                      <span style={{ color: '#F59E0B' }}>ROF: {w.stats.rateOfFire}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/free-fire/weapons"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all hover:scale-105"
                style={{ background: weapon.typeInfo.color, color: '#fff' }}
              >
                View All Weapons
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
