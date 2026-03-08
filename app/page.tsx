import Link from "next/link";
import Image from "next/image";
import RotatingText from "@/components/RotatingText";
import THSelector from "@/components/bases/THSelector";
import BaseCard from "@/components/bases/BaseCard";
import { GAMES } from "@/lib/constants";
import { images } from "@/lib/images";
import { blogPosts } from "@/lib/blog";
import { getFeaturedBases, getLatestBases, baseLayouts } from "@/lib/bases";

export default function HomePage() {
  const activeGames = GAMES.filter((g) => g.active);
  const featuredBases = getFeaturedBases();
  const latestBases = getLatestBases(6);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-screen min-h-[600px] max-h-[800px] flex items-center bg-[#0a0a0f] overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-white/10" />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-white/[0.07]" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full border-2 border-white/[0.08]" />
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Floating shapes */}
          <div className="absolute top-[15%] right-[8%] w-20 h-20 border border-white/10 rounded-2xl rotate-12" />
          <div className="absolute top-[60%] right-[5%] w-14 h-14 border border-primary/20 rounded-xl -rotate-12" />
          <div className="absolute top-[75%] left-[8%] w-16 h-16 border border-white/[0.08] rounded-full" />
          <div className="absolute top-[10%] left-[15%] w-10 h-10 border border-primary/15 rounded-lg rotate-45" />
        </div>

        {/* CoC themed floating icons */}
        <div className="absolute inset-0 hidden md:block">
          {[
            { src: images.games.coc.logo, pos: "top-[8%] left-[5%]", size: 56, rot: "-rotate-6", op: "opacity-30" },
            { src: images.games.coc.logo, pos: "top-[12%] right-[6%]", size: 48, rot: "rotate-12", op: "opacity-25" },
            { src: images.games.coc.logo, pos: "bottom-[20%] left-[8%]", size: 44, rot: "rotate-3", op: "opacity-20" },
            { src: images.games.coc.logo, pos: "bottom-[15%] right-[8%]", size: 40, rot: "-rotate-6", op: "opacity-20" },
          ].map((logo, i) => (
            <div key={i} className={`absolute ${logo.pos} ${logo.rot} ${logo.op}`}>
              <Image
                src={logo.src}
                alt=""
                width={logo.size}
                height={logo.size}
                className="object-contain rounded-2xl drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="relative container-custom w-full">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/60 text-[11px] font-medium tracking-wider uppercase">
                {baseLayouts.length}+ Base Layouts Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-heading font-normal leading-[1.1] tracking-wider text-white mb-3">
              FIND THE BEST
            </h1>
            <div className="text-3xl md:text-5xl lg:text-7xl font-heading font-normal leading-[1.1] tracking-wider text-primary h-[1.2em] overflow-hidden mb-6">
              <RotatingText
                words={[
                  "WAR BASES",
                  "FARMING BASES",
                  "TROPHY BASES",
                  "CWL BASES",
                  "HYBRID BASES",
                ]}
              />
            </div>

            {/* Subtext */}
            <p className="text-white/35 text-sm md:text-[15px] leading-relaxed max-w-lg mb-8">
              Browse tested Clash of Clans base layouts for every Town Hall level.
              Copy any base directly into your game with one click.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="#th-selector"
                className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
              >
                Browse Bases
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/bases/th-16"
                className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
              >
                TH16 Bases
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-6 md:gap-10 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-8 py-4">
              {[
                { value: `${baseLayouts.length}+`, label: "Bases" },
                { value: "TH7-17", label: "All Levels" },
                { value: "Copy", label: "Game Links" },
                { value: "Daily", label: "Updates" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6 md:gap-10">
                  <div className="text-center">
                    <p className="text-white text-lg md:text-xl font-heading font-normal">{stat.value}</p>
                    <p className="text-white/25 text-[9px] uppercase tracking-[0.15em] mt-0.5">{stat.label}</p>
                  </div>
                  {i < 3 && <div className="w-px h-7 bg-white/[0.08]" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <div className="w-5 h-8 rounded-full border border-white/15 flex items-start justify-center p-1.5">
            <div className="w-1 h-1.5 bg-white/30 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ========== TH LEVEL SELECTOR ========== */}
      <section id="th-selector" className="py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Choose Your Level
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Select Your Town Hall
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md mx-auto">
              Browse base layouts for every Town Hall level from TH7 to TH17
            </p>
          </div>

          <THSelector />
        </div>
      </section>

      {/* ========== FEATURED BASES ========== */}
      {featuredBases.length > 0 && (
        <section className="py-16 bg-[#fafafa]">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                  Editor&apos;s Pick
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                  Featured Bases
                </h2>
                <p className="text-muted text-sm mt-2 max-w-md">
                  Hand-picked top-performing base layouts tested against current meta attacks.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredBases.map((base) => (
                <BaseCard key={base.id} base={base} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== LATEST BASES ========== */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                Recently Added
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Latest Base Layouts
              </h2>
              <p className="text-muted text-sm mt-2 max-w-md">
                Fresh base layouts added every week. Stay ahead of the meta.
              </p>
            </div>
            <Link
              href="/bases/th-16"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-primary hover:text-primary transition-colors"
            >
              View All
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

          <div className="text-center mt-10 sm:hidden">
            <Link
              href="/bases/th-16"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1a1a2e] text-white text-sm font-bold rounded-full hover:bg-primary transition-colors duration-300"
            >
              View All Bases
            </Link>
          </div>
        </div>
      </section>

      {/* ========== BASE TYPES EXPLAINER ========== */}
      <section className="relative overflow-hidden">
        <div className="relative z-10 text-center pt-14 pb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Base Categories</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
            Find the Right Base for You
          </h2>
          <p className="text-muted text-sm mt-3 max-w-md mx-auto">
            Different base types for different goals — war defense, resource farming, or trophy pushing.
          </p>
        </div>

        <div className="relative pb-20" style={{ minHeight: 380 }}>
          {/* Waves */}
          <svg className="absolute left-0 right-0 -top-20 w-full" style={{ height: "calc(100% + 80px)" }} viewBox="0 0 1440 700" preserveAspectRatio="none">
            <defs>
              <linearGradient id="wg1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#E03032" stopOpacity="0.10" />
                <stop offset="50%" stopColor="#CC1517" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#E03032" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="wg2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#CC1517" stopOpacity="0.07" />
                <stop offset="50%" stopColor="#A81113" stopOpacity="0.11" />
                <stop offset="100%" stopColor="#CC1517" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient id="wg3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A81113" stopOpacity="0.04" />
                <stop offset="50%" stopColor="#E03032" stopOpacity="0.08" />
                <stop offset="100%" stopColor="#A81113" stopOpacity="0.04" />
              </linearGradient>
            </defs>
            <path fill="url(#wg1)" d="M0,100 C200,10 400,180 720,60 C1040,-40 1240,120 1440,40 L1440,700 L0,700Z" />
            <path fill="url(#wg2)" d="M0,220 C300,120 550,300 850,180 C1100,80 1300,220 1440,160 L1440,700 L0,700Z" />
            <path fill="url(#wg3)" d="M0,360 C350,290 700,400 1050,310 C1250,260 1400,320 1440,300 L1440,700 L0,700Z" />
          </svg>

          <div className="container-custom relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                {
                  title: "War Bases",
                  desc: "Anti 3-star designs tested against meta attacks. Protect your war stars.",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                  num: "01",
                  href: "/bases/th-16",
                },
                {
                  title: "Farming Bases",
                  desc: "Protect resources with centralized storages and outside Town Halls.",
                  icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                  num: "02",
                  href: "/bases/th-16",
                },
                {
                  title: "Trophy Bases",
                  desc: "Push to Legend League with centered TH and overlapping defenses.",
                  icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                  num: "03",
                  href: "/bases/th-16",
                },
                {
                  title: "CWL Bases",
                  desc: "Competitive bases for Clan War Leagues — force 2-star attacks.",
                  icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                  num: "04",
                  href: "/bases/th-16",
                },
              ].map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative bg-white rounded-[20px] p-6 h-[220px] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 8px 30px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, #CC1517, #E03032)" }}
                    >
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <span className="text-[28px] font-extrabold text-gray-100 leading-none select-none">{item.num}</span>
                  </div>
                  <div className="mt-auto">
                    <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1">{item.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== OTHER GAMES ========== */}
      <section id="games" className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">More Games</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Explore Other Games
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md mx-auto">
              Guides, tier lists, and strategies for more mobile games
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {activeGames.map((game) => (
              <Link
                key={game.id}
                href={`/${game.id}`}
                className="group relative h-[180px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={
                    game.id === "clash-of-clans" ? images.games.coc.hero :
                    game.id === "brawl-stars" ? images.games.brawlStars.hero :
                    game.id === "clash-royale" ? images.games.clashRoyale.hero :
                    game.id === "free-fire" ? images.games.freeFire.hero :
                    images.games.pubg.hero
                  }
                  alt={game.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all" />
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white font-bold text-sm">{game.name}</p>
                  <p className="text-white/50 text-[11px]">{game.stats}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== LATEST ARTICLES ========== */}
      {blogPosts.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Blog</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                View All
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary rounded-full">
                      {post.gameName}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-[#1a1a2e] leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <span>{post.date}</span>
                      <span className="text-primary font-semibold">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== CTA ========== */}
      <section className="relative overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.06]" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-10 w-48 h-48 bg-white/[0.03] rounded-full blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative container-custom py-20 text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-normal text-white mb-4 tracking-wider">
            READY TO DEFEND?
          </h2>
          <p className="text-white/40 text-[15px] max-w-lg mx-auto mb-8">
            Browse our collection of tested base layouts and copy them directly into Clash of Clans. New bases added every week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#th-selector"
              className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
            >
              Browse Bases
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
            >
              Read Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
