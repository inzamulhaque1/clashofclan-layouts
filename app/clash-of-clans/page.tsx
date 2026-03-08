import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { GAMES, GAME_DETAILS } from "@/lib/constants";
import { images } from "@/lib/images";

const game = GAMES.find((g) => g.id === "clash-of-clans")!;
const detail = GAME_DETAILS["clash-of-clans"];

export const metadata = createMetadata({
  title: `${game.name} - Base Layouts, Guides & Strategies | Game365Hub`,
  description: `Expert ${game.name} base layouts, attack strategies, tier lists & clan war tips. Updated for 2026.`,
  path: "/clash-of-clans",
  tags: ["Clash of Clans", "CoC base layouts", "attack strategies", "war bases"],
});

export default function ClashOfClansPage() {
  const otherGames = GAMES.filter((g) => g.active && g.id !== "clash-of-clans");

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[620px] flex items-center overflow-hidden">
        <Image src={images.games.coc.hero} alt="Clash of Clans" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

        <div className="relative container-custom w-full">
          <div className="max-w-2xl">
            {/* Logo + badges */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20">
                <Image src={images.games.coc.logo} alt="CoC" width={64} height={64} className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-amber-500/20 text-amber-400 w-fit">
                  Supercell
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-white/40">{detail.rating} Rating</span>
                  <span className="text-white/20">·</span>
                  <span className="text-[10px] text-white/40">{detail.downloads} Downloads</span>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] mb-4">
              Clash of Clans
            </h1>
            <p className="text-white/40 text-sm md:text-[15px] leading-relaxed mb-8 max-w-lg">
              {detail.overview[0].slice(0, 180)}...
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="#content"
                className="group px-7 py-3 bg-amber-500 text-black text-sm font-bold rounded-full hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                Explore
                <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
              <Link href="/blog" className="px-7 py-3 bg-white/10 text-white text-sm font-bold rounded-full hover:bg-white/20 transition-colors border border-white/15">
                Read Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTENT SECTIONS — Coming Soon ========== */}
      <section id="content" className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-xs font-bold uppercase tracking-[0.2em]">Clash of Clans Hub</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">What&apos;s Inside</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Base Layouts",
                desc: "War bases, farming bases, trophy bases & CWL layouts for TH7–TH17. Copy directly into your game.",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
                color: "#DC2626",
                status: "coming-soon",
              },
              {
                title: "Attack Strategies",
                desc: "LavaLoon, Hybrid, Root Rider, Yeti Smash — step-by-step breakdowns of every meta army composition.",
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                color: "#F59E0B",
                status: "coming-soon",
              },
              {
                title: "Clan Wars & CWL",
                desc: "War base scouting, CWL lineup strategies, Clan Capital raid guides, and war coordination tips.",
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                color: "#7C3AED",
                status: "coming-soon",
              },
              {
                title: "Tier Lists",
                desc: "Troop rankings, hero equipment tier list, spell rankings & siege machine comparisons — updated every patch.",
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                color: "#059669",
                status: "coming-soon",
              },
              {
                title: "Beginner Guides",
                desc: "New to CoC? Learn base building, troop upgrades, resource management & early TH progression.",
                icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
                color: "#2563EB",
                status: "coming-soon",
              },
              {
                title: "Pro Tips & Settings",
                desc: "Account progression, gem spending priorities, upgrade orders & pro player settings.",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                color: "#CA8A04",
                status: "coming-soon",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:border-gray-200 transition-all"
              >
                {/* Coming Soon badge */}
                <span className="absolute top-5 right-5 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-full bg-gray-100 text-gray-400">
                  Coming Soon
                </span>

                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${item.color}10` }}>
                  <svg className="w-5 h-5" style={{ color: item.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>

                <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OTHER GAMES ========== */}
      <section className="py-14 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-8">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Explore More</span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">Other Games</h2>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {otherGames.slice(0, 3).map((g) => {
              const heroImg =
                g.id === "brawl-stars" ? images.games.brawlStars.hero :
                g.id === "clash-royale" ? images.games.clashRoyale.hero :
                g.id === "free-fire" ? images.games.freeFire.hero :
                images.games.pubg.hero;
              return (
                <Link key={g.id} href={`/${g.id}`} className="group relative h-[160px] rounded-2xl overflow-hidden">
                  <Image src={heroImg} alt={g.name} fill className="object-cover" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-white font-bold text-sm">{g.name}</p>
                    <p className="text-white/50 text-[11px]">{g.stats}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="py-14 bg-gradient-to-r from-amber-500 to-orange-600">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Ready to dominate Clash of Clans?</h2>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
            Expert guides, base layouts, and strategies — all free. Stay tuned for new content.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog" className="px-7 py-3 bg-white text-amber-600 text-sm font-bold rounded-full hover:bg-white/90 transition-colors">
              Read Guides
            </Link>
            <Link href="/" className="px-7 py-3 bg-white/15 text-white text-sm font-bold rounded-full hover:bg-white/25 transition-colors border border-white/20">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
