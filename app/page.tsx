import Link from "next/link";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import RotatingText from "@/components/RotatingText";
import { GAMES, SITE_NAME } from "@/lib/constants";
import { images } from "@/lib/images";
import { blogPosts } from "@/lib/blog";

const heroImages: Record<string, string> = {
  "clash-of-clans": images.games.coc.hero,
  "brawl-stars": images.games.brawlStars.hero,
  "clash-royale": images.games.clashRoyale.hero,
  "free-fire": images.games.freeFire.hero,
};

export default function HomePage() {
  const activeGames = GAMES.filter((g) => g.active);
  const comingSoonGames = GAMES.filter((g) => g.comingSoon);
  const latestPost = blogPosts[0];

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-screen flex items-center bg-[#0a0a0f] overflow-hidden">
        {/* Graphic shapes */}
        <div className="absolute inset-0">
          {/* Circles */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-white/10" />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-white/[0.07]" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full border-2 border-white/[0.08]" />
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] rounded-full border border-white/[0.05]" />
          {/* Glows */}
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
          <div className="absolute top-[50%] left-[50%] w-60 h-60 bg-white/[0.03] rounded-full blur-[80px]" />
          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Floating shapes */}
          <div className="absolute top-[15%] right-[8%] w-20 h-20 border border-white/10 rounded-2xl rotate-12" />
          <div className="absolute top-[60%] right-[5%] w-14 h-14 border border-primary/20 rounded-xl -rotate-12" />
          <div className="absolute top-[75%] left-[8%] w-16 h-16 border border-white/[0.08] rounded-full" />
          <div className="absolute top-[10%] left-[15%] w-10 h-10 border border-primary/15 rounded-lg rotate-45" />
          {/* Plus signs */}
          <div className="absolute top-[25%] left-[35%]">
            <div className="w-6 h-px bg-white/10" />
            <div className="w-px h-6 bg-white/10 -mt-[15px] ml-[11px]" />
          </div>
          <div className="absolute top-[65%] right-[25%]">
            <div className="w-5 h-px bg-primary/20" />
            <div className="w-px h-5 bg-primary/20 -mt-[12px] ml-[9px]" />
          </div>
        </div>

        {/* Floating game logos — scattered across hero */}
        <div className="absolute inset-0 hidden md:block">
          {[
            { src: images.games.coc.logo, pos: "top-[8%] left-[5%]", size: 56, rot: "-rotate-6", op: "opacity-35" },
            { src: images.games.brawlStars.logo, pos: "top-[10%] right-[6%]", size: 52, rot: "rotate-12", op: "opacity-35" },
            { src: images.games.clashRoyale.logo, pos: "top-[40%] left-[3%]", size: 50, rot: "rotate-6", op: "opacity-40" },
            { src: images.games.freeFire.logo, pos: "top-[38%] right-[3%]", size: 52, rot: "-rotate-12", op: "opacity-40" },
            { src: images.games.pubg.logo, pos: "bottom-[22%] left-[6%]", size: 50, rot: "rotate-3", op: "opacity-35" },
            { src: images.games.coc.logo, pos: "bottom-[18%] right-[6%]", size: 48, rot: "-rotate-6", op: "opacity-35" },
            { src: images.games.brawlStars.logo, pos: "top-[20%] left-[20%]", size: 40, rot: "-rotate-3", op: "opacity-25" },
            { src: images.games.clashRoyale.logo, pos: "bottom-[12%] right-[20%]", size: 40, rot: "rotate-6", op: "opacity-25" },
            { src: images.games.freeFire.logo, pos: "top-[16%] right-[18%]", size: 40, rot: "-rotate-12", op: "opacity-25" },
            { src: images.games.pubg.logo, pos: "bottom-[8%] left-[22%]", size: 40, rot: "rotate-12", op: "opacity-25" },
          ].map((logo, i) => (
            <div
              key={i}
              className={`absolute ${logo.pos} ${logo.rot} ${logo.op} hover:opacity-70 transition-opacity duration-500`}
            >
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
                Updated daily
              </span>
            </div>

            {/* Headline — Orbitron */}
            <h1
              className="text-3xl md:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-wider text-white mb-3"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              LEVEL UP YOUR
            </h1>
            <div
              className="text-3xl md:text-5xl lg:text-7xl font-normal leading-[1.1] tracking-wider text-primary h-[1.2em] overflow-hidden mb-6"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              <RotatingText
                words={[
                  "GAMING SKILLS",
                  "STRATEGIES",
                  "WIN RATE",
                  "RANK PUSH",
                  "BATTLE TACTICS",
                ]}
              />
            </div>

            {/* Subtext */}
            <p className="text-white/35 text-sm md:text-[15px] leading-relaxed max-w-lg mb-8">
              The #1 mobile gaming hub — pro strategies, tier lists &amp;
              step-by-step guides written by top-ranked players. Free forever.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="#games"
                className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
              >
                Explore Guides
                <svg
                  className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/blog"
                className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
              >
                Read Articles
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-6 md:gap-10 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-8 py-4">
              {[
                { value: "28+", label: "Pro Guides" },
                { value: "5+", label: "Games" },
                { value: "100%", label: "Free" },
                { value: "Daily", label: "Updates" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-6 md:gap-10"
                >
                  <div className="text-center">
                    <p
                      className="text-white text-lg md:text-xl font-normal"
                      style={{ fontFamily: "'Michroma', sans-serif" }}
                    >
                      {stat.value}
                    </p>
                    <p className="text-white/25 text-[9px] uppercase tracking-[0.15em] mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                  {i < 3 && (
                    <div className="w-px h-7 bg-white/[0.08]" />
                  )}
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

      {/* ========== GAMES ========== */}
      <section id="games" className="py-20" style={{ fontFamily: "'Manrope', sans-serif" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Our Games</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Explore Games
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md mx-auto">
              Choose your game and access pro-level guides, strategies, and tier lists
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {activeGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
            {comingSoonGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section className="bg-[#fafafa] py-20" style={{ fontFamily: "'Manrope', sans-serif" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Built for Gamers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Written by Pros",
                desc: "Every guide is created by top-ranked players with real competitive experience.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Always Updated",
                desc: "Strategies refreshed after every patch, meta shift, and new season drop.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "100% Free",
                desc: "No paywalls, no subscriptions. Every guide is free to read, forever.",
                icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-base mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FEATURED GUIDE ========== */}
      {latestPost && (
        <section className="py-20" style={{ fontFamily: "'Manrope', sans-serif" }}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Featured</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                Latest Guide
              </h2>
            </div>
            <Link
              href={`/blog/${latestPost.slug}`}
              className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-64 md:h-full min-h-[280px]">
                <Image
                  src={latestPost.image}
                  alt={latestPost.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                    {latestPost.gameName}
                  </span>
                  <span className="text-muted text-xs">
                    {latestPost.readTime}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold leading-tight mb-4 group-hover:text-primary transition-colors">
                  {latestPost.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                  {latestPost.description}
                </p>
                <span className="inline-flex items-center text-primary font-bold text-sm">
                  Read Full Guide
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ========== LATEST ARTICLES ========== */}
      {blogPosts.length > 0 && (
        <section className="bg-[#fafafa] py-20" style={{ fontFamily: "'Manrope', sans-serif" }}>
          <div className="container-custom">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Blog</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
                  Latest Articles
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
              >
                View All
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/5 transition-all duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[11px] font-bold rounded-full">
                        {post.gameName}
                      </span>
                      <span className="text-[11px] text-muted">
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="font-bold text-[15px] leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 sm:hidden">
              <Link
                href="/blog"
                className="text-sm font-bold text-primary"
              >
                View All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== ABOUT ========== */}
      <section className="relative py-24 bg-[#fafafa] overflow-hidden" style={{ fontFamily: "'Manrope', sans-serif" }}>
        {/* Red spiral shapes */}
        <div className="absolute -top-32 -right-32 w-72 h-72 animate-spiral opacity-[0.04]">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M100 10 C150 10, 190 50, 190 100 C190 150, 150 190, 100 190 C50 190, 20 160, 20 120 C20 80, 50 50, 80 50 C110 50, 140 70, 140 100 C140 130, 120 150, 100 150 C80 150, 60 130, 60 110 C60 90, 75 75, 90 75" stroke="#CC1517" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute -bottom-24 -left-24 w-60 h-60 animate-spiral-reverse opacity-[0.05]">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M100 10 C150 10, 190 50, 190 100 C190 150, 150 190, 100 190 C50 190, 20 160, 20 120 C20 80, 50 50, 80 50 C110 50, 140 70, 140 100 C140 130, 120 150, 100 150 C80 150, 60 130, 60 110 C60 90, 75 75, 90 75" stroke="#CC1517" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 animate-spiral opacity-[0.02]">
          <svg viewBox="0 0 200 200" fill="none">
            <path d="M100 5 C155 5, 195 45, 195 100 C195 155, 155 195, 100 195 C45 195, 15 165, 15 115 C15 75, 45 45, 75 45 C105 45, 135 65, 135 95 C135 125, 115 145, 95 145 C75 145, 55 125, 55 105 C55 85, 70 70, 85 70" stroke="#CC1517" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative container-custom">
          <div className="text-center mb-16">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">About Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Why Gamers Trust Us
            </h2>
          </div>

          {/* Stats strip */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-16">
            {[
              { value: "5+", label: "Games" },
              { value: "28+", label: "Guides" },
              { value: "Daily", label: "Updates" },
              { value: "Free", label: "Forever" },
            ].map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8 md:gap-16">
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-extrabold text-primary leading-none">{stat.value}</p>
                  <p className="text-muted text-xs uppercase tracking-[0.15em] font-medium mt-2">{stat.label}</p>
                </div>
                {i < 3 && <div className="hidden md:block w-px h-12 bg-gray-200" />}
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted text-[16px] leading-[1.9] mb-4">
              We are a team of passionate mobile gamers creating pro-level guides
              for players of all skill levels. Every strategy is tested and written
              by top-ranked competitive players who know the meta inside out.
            </p>
            <p className="text-muted text-[16px] leading-[1.9] mb-8">
              Clash of Clans, Brawl Stars, Clash Royale, Free Fire — whether you
              are a beginner or pushing top ranks, we have guides for you.
            </p>
            <Link
              href="/about"
              className="group btn-fill inline-flex items-center gap-2 px-8 py-3.5 font-bold text-sm rounded-full"
            >
              Learn More About Us
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
        <div className="relative container-custom py-20 text-center" style={{ fontFamily: "'Manrope', sans-serif" }}>
          <h2
            className="text-2xl md:text-4xl font-normal text-white mb-4 tracking-wider"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            READY TO DOMINATE?
          </h2>
          <p className="text-white/40 text-[15px] max-w-lg mx-auto mb-8">
            Pick your game and start winning today. New guides and strategies
            added every week.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="#games"
              className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
            >
              Browse Games
              <svg className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
