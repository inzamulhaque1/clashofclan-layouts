import Link from "next/link";
import Image from "next/image";
import { createMetadata, createJsonLd } from "@/lib/seo";
import { GAMES, GAME_DETAILS } from "@/lib/constants";
import { images } from "@/lib/images";
import BaseCard from "@/components/bases/BaseCard";
import { getFeaturedBases, getLatestBases, BASE_TYPES, TH_LEVELS, BH_LEVELS, baseLayouts, getBaseCountByTH } from "@/lib/bases";

const game = GAMES.find((g) => g.id === "clash-of-clans")!;
const detail = GAME_DETAILS["clash-of-clans"];
const featuredBases = getFeaturedBases();
const latestBases = getLatestBases(6);

export const metadata = createMetadata({
  title: `${game.name} - Base Layouts, Guides & Strategies | Game365Hub`,
  description: `Expert ${game.name} base layouts, attack strategies, tier lists & clan war tips. ${baseLayouts.length}+ bases with copy links. Updated for 2026.`,
  path: "/clash-of-clans",
  tags: ["Clash of Clans", "CoC base layouts", "attack strategies", "war bases", "copy link"],
});

export default function ClashOfClansPage() {
  const otherGames = GAMES.filter((g) => g.active && g.id !== "clash-of-clans");
  const sections = detail.sections;

  const cocJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${game.name} - Base Layouts, Guides & Strategies`,
    description: `Expert ${game.name} base layouts, attack strategies, tier lists & clan war tips. ${baseLayouts.length}+ bases with copy links.`,
    url: "https://game365hub.com/clash-of-clans",
    isPartOf: { "@type": "WebSite", name: "Game365Hub", url: "https://game365hub.com" },
    about: {
      "@type": "VideoGame",
      name: "Clash of Clans",
      gamePlatform: ["iOS", "Android"],
      applicationCategory: "Game",
      genre: "Strategy",
      author: { "@type": "Organization", name: "Supercell" },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
        { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(cocJsonLd)} />

      {/* ========== HERO ========== */}
      <section className="relative h-[75vh] min-h-[520px] max-h-[660px] flex items-center overflow-hidden">
        <Image src={images.games.coc.hero} alt="Clash of Clans" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />

        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative container-custom w-full">
          <div className="max-w-2xl">
            {/* Logo + badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-[72px] h-[72px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-white/20">
                <Image src={images.games.coc.logo} alt="CoC" width={72} height={72} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 backdrop-blur-sm">
                    Supercell
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/10 text-white/60 backdrop-blur-sm">
                    {baseLayouts.length}+ Bases
                  </span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-white/40">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {detail.rating}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>{detail.downloads} Downloads</span>
                  <span className="w-1 h-1 rounded-full bg-white/20" />
                  <span>Since {detail.releaseYear}</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] mb-4 font-heading">
              Clash of Clans Base Layouts &amp; Strategies
            </h1>
            <p className="text-white/50 text-sm md:text-[15px] leading-relaxed mb-8 max-w-xl">
              {detail.overview[0]}
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/clash-of-clans/bases"
                className="group px-7 py-3.5 bg-amber-500 text-black text-sm font-bold rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                Browse Bases
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link
                href="#content"
                className="px-7 py-3.5 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-colors border border-white/15 backdrop-blur-sm"
              >
                Explore Guides
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ========== BREADCRUMB ========== */}
      <nav className="bg-white border-b border-gray-100">
        <div className="container-custom py-3 flex items-center gap-2 text-xs text-gray-400">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-[#1a1a2e] font-medium">Clash of Clans</span>
        </div>
      </nav>

      {/* ========== QUICK STATS STRIP ========== */}
      <section className="relative -mt-8 z-10 mb-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { value: `${baseLayouts.length}+`, label: "Base Layouts", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", color: "#DC2626" },
              { value: "TH7-18", label: "All Town Halls", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "#F59E0B" },
              { value: "7", label: "Base Types", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", color: "#7C3AED" },
              { value: "Free", label: "Copy Links", icon: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3", color: "#059669" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${stat.color}10` }}>
                  <svg className="w-5 h-5" style={{ color: stat.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={stat.icon} />
                  </svg>
                </div>
                <div>
                  <p className="text-xl font-extrabold text-[#1a1a2e] leading-none">{stat.value}</p>
                  <p className="text-[11px] text-muted mt-0.5">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TH SELECTOR ========== */}
      <section id="bases" className="py-12">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Choose Your Level</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Browse by Town Hall</h2>
            <p className="text-muted text-sm mt-2 max-w-md mx-auto">Select your Town Hall level to find the perfect base layout</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-3">
            {TH_LEVELS.slice(0, 9).map((th) => {
              const count = getBaseCountByTH(th.level);
              const thImage = images.townHalls[th.level];
              return (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: th.color }}
                  />
                  <div className="relative w-14 h-14 mx-auto mb-2">
                    <Image
                      src={thImage}
                      alt={th.label}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: th.color }}
                    >
                      {th.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-xs text-[#1a1a2e]">{th.label}</h3>
                  <p className="text-center text-[9px] mt-0.5" style={{ color: count > 0 ? th.color : "#999" }}>
                    {count > 0 ? `${count} layouts` : "Coming soon"}
                  </p>
                </Link>
              );
            })}
            {/* See More card */}
            <Link
              href="/clash-of-clans/bases"
              className="group flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-4 hover:border-amber-400 hover:bg-amber-50/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-2 group-hover:bg-amber-200 transition-colors">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-center font-bold text-xs text-amber-600">See More</h3>
              <p className="text-center text-[9px] mt-0.5 text-gray-400">{TH_LEVELS.length - 9} more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BUILDER BASE ========== */}
      <section className="py-12 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-emerald-600 text-xs font-bold uppercase tracking-[0.2em]">Builder Village</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Builder Base Layouts</h2>
            <p className="text-muted text-sm mt-2 max-w-md mx-auto">Browse layouts for Builder Hall 2 – 10</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
            {BH_LEVELS.slice(0, 7).map((bh) => {
              const bhImage = images.builderHalls[bh.level];
              return (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: bh.color }}
                  />
                  <div className="relative w-12 h-12 mx-auto mb-2">
                    <Image
                      src={bhImage}
                      alt={bh.label}
                      width={48}
                      height={48}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: bh.color }}
                    >
                      {bh.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-xs text-[#1a1a2e]">{bh.label}</h3>
                  <p className="text-center text-[9px] mt-0.5 text-gray-400">Coming soon</p>
                </Link>
              );
            })}
            {/* See More card */}
            <Link
              href="/clash-of-clans/bases"
              className="group flex flex-col items-center justify-center bg-gray-50 rounded-2xl border border-dashed border-gray-200 p-4 hover:border-emerald-400 hover:bg-emerald-50/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2 group-hover:bg-emerald-200 transition-colors">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="text-center font-bold text-xs text-emerald-600">See More</h3>
              <p className="text-center text-[9px] mt-0.5 text-gray-400">{BH_LEVELS.length - 7} more</p>
            </Link>
          </div>
        </div>
      </section>

      {/* ========== FEATURED BASES ========== */}
      {featuredBases.length > 0 && (
        <section className="py-12">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Editor&apos;s Pick</span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Featured Bases</h2>
              </div>
              <Link
                href="/clash-of-clans/bases/th/16"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-amber-500 hover:text-amber-600 transition-colors"
              >
                View All
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredBases.map((base) => (
                <BaseCard key={base.id} base={base} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== BASE TYPES ========== */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Find Your Style</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Base Types Explained</h2>
            <p className="text-muted text-sm mt-2 max-w-lg mx-auto">
              Different situations call for different bases. Here&apos;s what each type does.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BASE_TYPES.slice(0, 6).map((bt, i) => {
              const colors = ["#DC2626", "#F59E0B", "#7C3AED", "#059669", "#2563EB", "#E11D48", "#CA8A04"];
              const color = colors[i % colors.length];
              const count = baseLayouts.filter((b) => b.type === bt.type).length;

              return (
                <div
                  key={bt.type}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold uppercase"
                      style={{ backgroundColor: color }}
                    >
                      {bt.label.charAt(0)}
                    </div>
                    {count > 0 && (
                      <span className="px-2.5 py-0.5 text-[10px] font-bold rounded-full" style={{ backgroundColor: `${color}10`, color }}>
                        {count} {count === 1 ? "base" : "bases"}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1.5">{bt.label} Base</h3>
                  <p className="text-xs text-muted leading-relaxed">{bt.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== LATEST BASES ========== */}
      <section className="py-12 bg-[#fafafa]">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Fresh Layouts</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Latest Bases</h2>
            </div>
            <Link
              href="/clash-of-clans/bases/th/17"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-amber-500 hover:text-amber-600 transition-colors"
            >
              Browse All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestBases.map((base) => (
              <BaseCard key={base.id} base={base} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTENT SECTIONS (Strategies, Wars, Tiers) ========== */}
      <section id="content" className="py-16">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Complete Hub</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Everything You Need</h2>
            <p className="text-muted text-sm mt-2 max-w-md mx-auto">
              From attack strategies to tier lists — your complete Clash of Clans resource
            </p>
          </div>

          <div className="space-y-16">
            {sections.slice(1).map((section) => {
              const sectionColors: Record<string, string> = {
                attacks: "#F59E0B",
                wars: "#7C3AED",
                tiers: "#059669",
              };
              const sectionIcons: Record<string, string> = {
                attacks: "M13 10V3L4 14h7v7l9-11h-7z",
                wars: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                tiers: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
              };
              const color = sectionColors[section.id] || "#DC2626";
              const icon = sectionIcons[section.id] || "M13 10V3L4 14h7v7l9-11h-7z";

              return (
                <div key={section.id} id={section.id}>
                  {/* Section header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${color}10` }}
                    >
                      <svg className="w-6 h-6" style={{ color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={icon} />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-[#1a1a2e]">{section.title}</h3>
                      <p className="text-muted text-sm mt-0.5">{section.description}</p>
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map((item) => (
                      <div
                        key={item.title}
                        className="bg-white rounded-xl p-5 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-center gap-2 mb-2.5">
                          {item.tag && (
                            <span
                              className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full"
                              style={{ backgroundColor: `${color}10`, color }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-sm text-[#1a1a2e] mb-1.5">{item.title}</h4>
                        <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== GAME OVERVIEW ========== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">About The Game</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-6 text-[#1a1a2e]">What is Clash of Clans?</h2>
              <div className="space-y-4">
                {detail.overview.map((p, i) => (
                  <p key={i} className="text-sm text-muted leading-relaxed">{p}</p>
                ))}
              </div>

              {/* Game meta */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Developer", value: detail.developer },
                  { label: "Genre", value: detail.genre },
                  { label: "Platforms", value: detail.platforms },
                  { label: "Released", value: String(detail.releaseYear) },
                ].map((meta) => (
                  <div key={meta.label}>
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium">{meta.label}</span>
                    <p className="text-sm font-semibold text-[#1a1a2e]">{meta.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {detail.features.map((feature) => (
                <div key={feature.title} className="bg-white rounded-xl p-5 border border-gray-100">
                  <h4 className="font-bold text-sm text-[#1a1a2e] mb-1">{feature.title}</h4>
                  <p className="text-[11px] text-muted leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER GAMES ========== */}
      <section className="py-14">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Explore More</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Other Games</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherGames.map((g) => {
              const gameImgs: Record<string, { hero: string; logo: string }> = {
                "brawl-stars": images.games.brawlStars,
                "clash-royale": images.games.clashRoyale,
                "free-fire": images.games.freeFire,
                pubg: images.games.pubg,
              };
              const gi = gameImgs[g.id];
              if (!gi) return null;
              return (
                <Link key={g.id} href={`/${g.id}`} className="group relative h-[180px] rounded-2xl overflow-hidden">
                  <Image src={gi.hero} alt={g.name} fill className="object-cover" sizes="25vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-6 h-6 rounded-md overflow-hidden ring-1 ring-white/20">
                        <Image src={gi.logo} alt="" width={24} height={24} className="object-cover w-full h-full" />
                      </div>
                      <p className="text-white font-bold text-sm">{g.name}</p>
                    </div>
                    <p className="text-white/50 text-[11px]">{g.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative overflow-hidden">
        {/* Dark bg with amber accent */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-72 h-72 bg-amber-500/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative container-custom py-20 text-center">
          <h2
            className="text-2xl md:text-4xl font-normal text-white mb-4 tracking-wider"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            READY TO DOMINATE?
          </h2>
          <p className="text-white/40 text-sm max-w-md mx-auto mb-8">
            Browse our collection of {baseLayouts.length}+ base layouts with free copy links. Updated weekly with new strategies.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="#bases"
              className="group px-8 py-3.5 bg-amber-500 text-black text-sm font-bold rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
            >
              Browse All Bases
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-colors border border-white/15"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
