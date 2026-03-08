import Link from "next/link";
import Image from "next/image";
import type { GameInfo, GameDetail, GameId } from "@/lib/constants";
import { GAMES } from "@/lib/constants";
import { images } from "@/lib/images";
import { blogPosts } from "@/lib/blog";

const gameImageMap: Record<GameId, { hero: string; logo: string }> = {
  "clash-of-clans": images.games.coc,
  "brawl-stars": images.games.brawlStars,
  "clash-royale": images.games.clashRoyale,
  "free-fire": images.games.freeFire,
  pubg: images.games.pubg,
};

export default function GameDetailPage({
  game,
  detail,
}: {
  game: GameInfo;
  detail: GameDetail;
}) {
  const gameImages = gameImageMap[game.id];

  const relatedPosts = blogPosts.filter(
    (post) =>
      post.game === game.id ||
      post.gameName === game.name ||
      post.title.toLowerCase().includes(game.name.toLowerCase()) ||
      post.content?.toLowerCase().includes(game.name.toLowerCase())
  );

  const otherGames = GAMES.filter((g) => g.active && g.id !== game.id);

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[600px] flex items-center overflow-hidden">
        <Image
          src={gameImages.hero}
          alt={game.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        <div className="relative container-custom w-full">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-14 h-14 rounded-xl overflow-hidden shadow-lg ring-2 ring-white/20">
                <Image
                  src={gameImages.logo}
                  alt={`${game.name} logo`}
                  width={56}
                  height={56}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span
                  className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                  style={{ backgroundColor: `${game.color}30`, color: game.color }}
                >
                  {game.stats}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-[1.1] mb-3">
              {game.name}
            </h1>
            <p className="text-white/50 text-[15px] leading-relaxed mb-6 max-w-md">
              {detail.overview[0].slice(0, 150)}...
            </p>

            {/* Quick stats row */}
            <div className="flex items-center gap-5">
              {[
                { label: "Developer", value: detail.developer },
                { label: "Rating", value: detail.rating },
                { label: "Downloads", value: detail.downloads },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-5">
                  <div>
                    <p className="text-white text-sm font-bold">{stat.value}</p>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider">{stat.label}</p>
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-white/10" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES — full width cards ========== */}
      <section className="py-16 bg-[#fafafa]">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: game.color }}>
              What makes it great
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">
              Key Features
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {detail.features.map((feature, i) => (
              <div
                key={i}
                className="group relative bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${game.color}10` }}
                >
                  <span className="text-sm font-extrabold" style={{ color: game.color }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-[#1a1a2e] mb-1">{feature.title}</h3>
                <p className="text-xs text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OVERVIEW — about section ========== */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative h-[300px] md:h-[380px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={gameImages.hero}
                alt={game.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg overflow-hidden ring-2 ring-white/30">
                  <Image
                    src={gameImages.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{game.name}</p>
                  <p className="text-white/60 text-xs">{detail.developer} &middot; {detail.releaseYear}</p>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: game.color }}>
                About
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-5 text-[#1a1a2e]">
                About {game.name}
              </h2>
              {detail.overview.map((para, i) => (
                <p key={i} className="text-muted text-[15px] leading-[1.8] mb-4">
                  {para}
                </p>
              ))}

              {/* Info pills */}
              <div className="flex flex-wrap gap-2 mt-4">
                {[detail.genre, detail.platforms, `Since ${detail.releaseYear}`, detail.downloads + " Downloads"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-gray-200 text-muted"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CONTENT SECTIONS (Bases, Attacks, etc.) ========== */}
      {detail.sections && detail.sections.length > 0 && detail.sections.map((section, sIdx) => (
        <section
          key={section.id}
          id={section.id}
          className={`py-16 ${sIdx % 2 === 0 ? "bg-[#fafafa]" : ""}`}
        >
          <div className="container-custom">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span
                  className="text-xs font-bold uppercase tracking-[0.2em]"
                  style={{ color: game.color }}
                >
                  {section.title}
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">
                  {section.title}
                </h2>
                <p className="text-muted text-sm mt-2 max-w-2xl">
                  {section.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.items.map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${game.color}10` }}
                    >
                      <span className="text-xs font-extrabold" style={{ color: game.color }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    {item.tag && (
                      <span
                        className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full"
                        style={{ backgroundColor: `${game.color}12`, color: game.color }}
                      >
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-sm text-[#1a1a2e] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-muted leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* ========== GUIDES / ARTICLES ========== */}
      {relatedPosts.length > 0 && (
        <section id="guides" className="py-16 bg-[#fafafa]">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: game.color }}>
                  Guides & Articles
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">
                  {game.name} Guides
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                All Articles
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedPosts.slice(0, 6).map((post) => (
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
                    <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-white/90 backdrop-blur-sm text-[10px] font-bold text-primary rounded-full">
                      {post.gameName}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-[#1a1a2e] group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
                      {post.title}
                    </h3>
                    <div className="flex items-center justify-between text-[11px] text-gray-400">
                      <div className="flex items-center gap-2">
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-primary font-semibold">Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== OTHER GAMES ========== */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-10">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-2 text-[#1a1a2e]">
              Other Games
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {otherGames.map((g) => {
              const gImg = gameImageMap[g.id];
              return (
                <Link
                  key={g.id}
                  href={`/${g.id}`}
                  className="group relative h-[200px] rounded-2xl overflow-hidden"
                >
                  <Image
                    src={gImg.hero}
                    alt={g.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-lg overflow-hidden ring-2 ring-white/20 shrink-0">
                        <Image
                          src={gImg.logo}
                          alt=""
                          width={36}
                          height={36}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-bold text-sm leading-tight">{g.name}</p>
                        <p className="text-white/50 text-[11px] truncate">{g.stats}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section
        className="py-16"
        style={{ background: `linear-gradient(135deg, ${game.color}, ${game.color}dd)` }}
      >
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to dominate {game.name}?
          </h2>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
            Browse our expert guides, strategies, and tier lists. All free, all written by top-ranked players.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-7 py-3 bg-white text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
              style={{ color: game.color }}
            >
              Browse Guides
            </Link>
            <Link
              href="/#games"
              className="px-7 py-3 bg-white/15 text-white text-sm font-bold rounded-full hover:bg-white/25 transition-colors border border-white/20"
            >
              All Games
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
