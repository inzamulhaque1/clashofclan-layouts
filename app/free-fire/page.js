'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CHARACTERS, ROLES, ABILITY_TYPES, getAllCharacters, getRecommendedCharacters, getCharactersByRole } from '@/lib/free-fire/characters';
import { WEAPONS, WEAPON_TYPES, getAllWeapons, getRecommendedWeapons } from '@/lib/free-fire/weapons';
import { GENERAL_IMAGES, GUIDE_IMAGES } from '@/lib/free-fire/images';

const guides = [
  {
    slug: "beginners-guide",
    title: "Beginner's Guide 2026",
    description: "Everything new players need to start winning matches",
    image: GUIDE_IMAGES.beginnersGuide.hero,
    color: "#FF5722",
  },
  {
    slug: "clash-squad",
    title: "Clash Squad Tips",
    description: "Dominate 4v4 with team strategies and loadouts",
    image: GUIDE_IMAGES.clashSquadGuide.hero,
    color: "#10B981",
  },
  {
    slug: "rank-push",
    title: "Rank Push Guide",
    description: "Climb to Grandmaster with pro tactics",
    image: GUIDE_IMAGES.rankPushGuide.hero,
    color: "#F59E0B",
  },
  {
    slug: "sensitivity",
    title: "Best Sensitivity Settings",
    description: "Optimize your aim with perfect sensitivity",
    image: GUIDE_IMAGES.sensitivityGuide.hero,
    color: "#8B5CF6",
  },
];

export default function FreeFireHomePage() {
  const [selectedRole, setSelectedRole] = useState('all');
  const [btnHover, setBtnHover] = useState(false);

  const recommendedCharacters = getRecommendedCharacters();
  const recommendedWeapons = getRecommendedWeapons();
  const allCharacters = getAllCharacters();

  const displayCharacters = selectedRole === 'all'
    ? recommendedCharacters.slice(0, 10)
    : getCharactersByRole(selectedRole).slice(0, 10);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 30%, #FFC107 70%, #FFEB3B 100%)',
              opacity: 0.15
            }}
          />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(255, 87, 34, 0.4) 0%, transparent 40%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 80% 20%, rgba(255, 152, 0, 0.3) 0%, transparent 40%)'
          }} />
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left relative z-20">
              {/* Live Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-pulse"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.2), rgba(255, 152, 0, 0.2))',
                  color: '#FF5722',
                  border: '1px solid rgba(255, 87, 34, 0.4)',
                  boxShadow: '0 0 20px rgba(255, 87, 34, 0.2)'
                }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Updated February 2026
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 leading-tight">
                <span style={{ color: 'var(--text-primary)' }}>Master</span>
                <br />
                <span
                  className="relative inline-block"
                  style={{
                    background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FFC107 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Free Fire
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M0 4C50 4 50 7 100 7C150 7 150 1 200 1" stroke="url(#ffgradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="ffgradient" x1="0" y1="0" x2="200" y2="0">
                        <stop offset="0%" stopColor="#FF5722"/>
                        <stop offset="100%" stopColor="#FFC107"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: 'var(--text-muted)' }}>
                Complete guide for <strong style={{ color: 'var(--text-primary)' }}>{allCharacters.length} characters</strong> and <strong style={{ color: 'var(--text-primary)' }}>{WEAPONS.length} weapons</strong>. Find the best combos, abilities, and strategies.
              </p>

              {/* Stats Row */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
                {[
                  { value: allCharacters.length, label: 'Characters', color: '#FF5722' },
                  { value: WEAPONS.length, label: 'Weapons', color: '#FF9800' },
                  { value: Object.keys(ROLES).length, label: 'Roles', color: '#FFC107' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl sm:text-4xl font-black" style={{ color: stat.color }}>{stat.value}</div>
                    <div className="text-xs uppercase tracking-wider font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start relative z-30">
                <Link
                  href="/free-fire/characters"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:brightness-110"
                  style={{
                    background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 100%)',
                    boxShadow: '0 10px 40px -10px rgba(255, 87, 34, 0.5)',
                    color: '#ffffff'
                  }}
                >
                  <span className="relative z-10">All Characters</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 pointer-events-none" />
                </Link>
                <Link
                  href="/free-fire/weapons"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                  style={{
                    background: btnHover ? 'rgba(255, 87, 34, 0.1)' : 'var(--surface-100)',
                    border: btnHover ? '2px solid #FF5722' : '2px solid var(--border)',
                    color: btnHover ? '#FF5722' : 'var(--text-primary)'
                  }}
                  onMouseEnter={() => setBtnHover(true)}
                  onMouseLeave={() => setBtnHover(false)}
                >
                  All Weapons
                </Link>
              </div>
            </div>

            {/* Right - Featured Characters Showcase */}
            <div className="hidden lg:block relative z-10">
              <div className="relative w-full h-[500px]">
                {/* Main featured character */}
                {recommendedCharacters[0] && (
                  <Link
                    href={`/free-fire/characters/${recommendedCharacters[0].id}`}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-3xl p-4 flex items-center justify-center hover:scale-105 transition-transform"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 87, 34, 0.2), rgba(255, 152, 0, 0.2))',
                      border: '2px solid rgba(255, 87, 34, 0.4)',
                      boxShadow: '0 20px 60px -20px rgba(255, 87, 34, 0.5)'
                    }}
                    title={recommendedCharacters[0].name}
                  >
                    <img src={recommendedCharacters[0].image.url} alt={recommendedCharacters[0].name} className="w-32 h-32 object-contain" />
                  </Link>
                )}
                {/* Surrounding characters */}
                {recommendedCharacters.slice(1, 5).map((char, i) => {
                  const positions = [
                    { top: '5%', left: '10%' },
                    { top: '10%', right: '5%' },
                    { bottom: '15%', left: '5%' },
                    { bottom: '5%', right: '10%' },
                  ];
                  return (
                    <Link
                      key={char.id}
                      href={`/free-fire/characters/${char.id}`}
                      className="absolute w-24 h-24 rounded-2xl p-2 flex items-center justify-center opacity-80 hover:opacity-100 hover:scale-110 transition-all"
                      style={{
                        ...positions[i],
                        background: 'var(--surface-100)',
                        border: '1px solid var(--border)',
                        boxShadow: '0 10px 30px -10px rgba(0,0,0,0.3)'
                      }}
                      title={char.name}
                    >
                      <img src={char.image.url} alt={char.name} className="w-16 h-16 object-contain" />
                    </Link>
                  );
                })}
                {/* Decorative elements */}
                <div className="absolute top-20 right-20 w-20 h-20 rounded-full pointer-events-none" style={{ background: 'rgba(255, 87, 34, 0.1)', filter: 'blur(30px)' }} />
                <div className="absolute bottom-32 left-16 w-32 h-32 rounded-full pointer-events-none" style={{ background: 'rgba(255, 152, 0, 0.1)', filter: 'blur(40px)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="var(--bg-primary)"/>
          </svg>
        </div>
      </section>

      {/* Top Characters by Role */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #FF5722, #FF9800)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FF5722' }}>Meta Characters</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Best Characters
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Top picks for competitive play
            </p>
          </div>
          <Link
            href="/free-fire/characters"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{ background: 'rgba(255, 87, 34, 0.1)', color: '#FF5722' }}
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Role Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setSelectedRole('all')}
            className="px-4 py-2 rounded-xl font-semibold text-sm transition-all"
            style={{
              background: selectedRole === 'all' ? '#FF5722' : 'var(--surface-100)',
              color: selectedRole === 'all' ? '#fff' : 'var(--text-muted)',
              border: `1px solid ${selectedRole === 'all' ? '#FF5722' : 'var(--border)'}`
            }}
          >
            Recommended
          </button>
          {Object.entries(ROLES).map(([roleId, role]) => (
            <button
              key={roleId}
              onClick={() => setSelectedRole(roleId)}
              className="px-4 py-2 rounded-xl font-semibold text-sm transition-all flex items-center gap-2"
              style={{
                background: selectedRole === roleId ? role.color : 'var(--surface-100)',
                color: selectedRole === roleId ? '#fff' : 'var(--text-muted)',
                border: `1px solid ${selectedRole === roleId ? role.color : 'var(--border)'}`
              }}
            >
              <span>{role.icon}</span>
              {role.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {displayCharacters.map((char, index) => (
            <Link
              key={char.id}
              href={`/free-fire/characters/${char.id}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Role Badge */}
              <div
                className="absolute top-3 left-3 px-2 py-1 rounded-lg text-xs font-bold z-10 flex items-center gap-1"
                style={{ background: ROLES[char.role].color, color: '#fff' }}
              >
                <span>{ROLES[char.role].icon}</span>
              </div>

              {/* Ability Type Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold z-10"
                style={{ background: ABILITY_TYPES[char.abilityType].color, color: '#fff' }}
              >
                {ABILITY_TYPES[char.abilityType].name}
              </div>

              {/* Image Container */}
              <div
                className="aspect-square p-6 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${ROLES[char.role].color}10, ${ROLES[char.role].color}05)` }}
              >
                <img
                  src={char.image.url}
                  alt={char.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                />
                {/* Glow effect on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at center, ${ROLES[char.role].color}20 0%, transparent 70%)`
                  }}
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                  {char.name}
                </h3>
                <p className="text-xs mt-1 truncate" style={{ color: 'var(--text-muted)' }}>
                  {char.ability.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Character Roles Section */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Character Roles
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Understand each role to build the perfect team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(ROLES).map(([roleId, role]) => {
              const roleCount = CHARACTERS.filter(c => c.role === roleId).length;
              return (
                <Link
                  key={roleId}
                  href={`/free-fire/characters?role=${roleId}`}
                  className="group relative p-5 rounded-2xl transition-all duration-300 hover:scale-[1.02] overflow-hidden"
                  style={{
                    background: 'var(--surface-100)',
                    border: `2px solid ${role.color}30`,
                  }}
                >
                  {/* Accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{ background: role.color }}
                  />
                  <div className="flex items-center gap-3 mb-3 mt-2">
                    <span className="text-3xl">{role.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: role.color }}>{role.name}</h3>
                      <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{roleCount} characters</span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {role.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Top Weapons Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 rounded-full" style={{ background: 'linear-gradient(90deg, #FF9800, #FFC107)' }} />
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FF9800' }}>Best Weapons</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: 'var(--text-primary)' }}>
              Top Weapons
            </h2>
            <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>
              Meta weapons for every situation
            </p>
          </div>
          <Link
            href="/free-fire/weapons"
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-semibold text-sm transition-all hover:gap-3"
            style={{ background: 'rgba(255, 152, 0, 0.1)', color: '#FF9800' }}
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {recommendedWeapons.slice(0, 10).map((weapon) => (
            <Link
              key={weapon.id}
              href={`/free-fire/weapons/${weapon.id}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Type Badge */}
              <div
                className="absolute top-3 right-3 px-2 py-1 rounded-lg text-xs font-bold z-10"
                style={{ background: weapon.typeInfo.color, color: '#fff' }}
              >
                {weapon.typeInfo.shortName}
              </div>

              {/* Image Container */}
              <div
                className="aspect-square p-6 flex items-center justify-center relative overflow-hidden"
                style={{ background: `linear-gradient(135deg, ${weapon.typeInfo.color}10, ${weapon.typeInfo.color}05)` }}
              >
                <img
                  src={weapon.image.url}
                  alt={weapon.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-base truncate" style={{ color: 'var(--text-primary)' }}>
                  {weapon.name}
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Damage</span>
                  <span className="text-sm font-bold" style={{ color: '#EF4444' }}>{weapon.stats.damage}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Weapon Types */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
              Weapon Categories
            </h2>
            <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
              Find the perfect weapon for your playstyle
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(WEAPON_TYPES).map(([typeId, type]) => {
              const typeCount = WEAPONS.filter(w => w.type === typeId).length;
              return (
                <Link
                  key={typeId}
                  href={`/free-fire/weapons?type=${typeId}`}
                  className="p-4 rounded-xl transition-all hover:scale-105"
                  style={{
                    backgroundColor: type.color + '15',
                    border: `2px solid ${type.color}30`
                  }}
                >
                  <div className="text-3xl mb-2">{type.icon}</div>
                  <h3 className="font-bold" style={{ color: 'var(--text-primary)' }}>{type.name}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{typeCount} weapons</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-2xl">📚</span>
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#FF5722' }}>Pro Guides</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3" style={{ color: 'var(--text-primary)' }}>
            Free Fire Guides
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'var(--text-muted)' }}>
            Level up your game with expert strategies
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/free-fire/guides/${guide.slug}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              style={{
                background: 'var(--surface-100)',
                border: '1px solid var(--border)',
                boxShadow: '0 4px 20px -5px rgba(0,0,0,0.1)'
              }}
            >
              {/* Guide Image */}
              <div className="relative w-full h-36 overflow-hidden">
                <img
                  src={guide.image.url}
                  alt={guide.image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
                  {guide.description}
                </p>
                <div className="flex items-center gap-2 text-sm font-semibold transition-all group-hover:gap-3" style={{ color: guide.color }}>
                  Read Guide
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div
          className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16"
          style={{
            background: 'linear-gradient(135deg, #FF5722 0%, #FF9800 50%, #FFC107 100%)',
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px'
          }} />

          <div className="relative z-10 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
              Ready to Booyah?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
              Use our character and weapon guides to dominate Free Fire. Updated with every patch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/free-fire/characters"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: '#fff', color: '#FF5722' }}
              >
                View Characters
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/free-fire/weapons"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-lg transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '2px solid rgba(255,255,255,0.3)' }}
              >
                Browse Weapons
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
