import Link from "next/link";
import Image from "next/image";
import GameCard from "@/components/GameCard";
import RotatingText from "@/components/RotatingText";
import LatestCodesSection from "@/components/LatestCodesSection";
import { GAMES } from "@/lib/constants";
import { gameLogos } from "@/lib/images";

const FLOATING_LOGO_POSITIONS = [
  { pos: "top-[8%] left-[5%]", size: 56, rot: "-rotate-6", op: "opacity-35" },
  { pos: "top-[10%] right-[6%]", size: 52, rot: "rotate-12", op: "opacity-35" },
  { pos: "top-[40%] left-[3%]", size: 50, rot: "rotate-6", op: "opacity-40" },
  { pos: "top-[38%] right-[3%]", size: 52, rot: "-rotate-12", op: "opacity-40" },
  { pos: "bottom-[22%] left-[6%]", size: 50, rot: "rotate-3", op: "opacity-35" },
  { pos: "bottom-[18%] right-[6%]", size: 48, rot: "-rotate-6", op: "opacity-35" },
  { pos: "top-[20%] left-[20%]", size: 40, rot: "-rotate-3", op: "opacity-25" },
  { pos: "bottom-[12%] right-[20%]", size: 40, rot: "rotate-6", op: "opacity-25" },
  { pos: "top-[16%] right-[18%]", size: 40, rot: "-rotate-12", op: "opacity-25" },
  { pos: "bottom-[8%] left-[22%]", size: 40, rot: "rotate-12", op: "opacity-25" },
];

export default function HomePage() {
  const floatingLogos = FLOATING_LOGO_POSITIONS.slice(0, GAMES.length).map(
    (placement, i) => ({ gameId: GAMES[i].id, ...placement })
  );

  return (
    <>
      {/* ========== HERO ========== */}
      <section className="relative min-h-[88vh] flex items-center bg-[#0a0a0f] overflow-hidden py-16">
        {/* Graphic shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full border-2 border-white/10" />
          <div className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full border border-white/[0.07]" />
          <div className="absolute -bottom-24 -left-24 w-[350px] h-[350px] rounded-full border-2 border-white/[0.08]" />
          <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] rounded-full border border-white/[0.05]" />
          <div className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[20%] left-[20%] w-72 h-72 bg-primary/8 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Floating game logos */}
        <div className="absolute inset-0 hidden md:block">
          {floatingLogos.map((logo, i) => (
            <div
              key={i}
              className={`absolute ${logo.pos} ${logo.rot} ${logo.op} hover:opacity-70 transition-opacity duration-500`}
            >
              <Image
                src={gameLogos[logo.gameId]}
                alt=""
                width={logo.size}
                height={logo.size}
                className="object-cover rounded-2xl bg-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                unoptimized
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
                Codes updated daily
              </span>
            </div>

            {/* Headline — Michroma */}
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-wider text-white mb-3"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              DAILY CODES FOR
            </h1>
            <div
              className="text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-wider text-primary h-[1.2em] overflow-hidden mb-6"
              style={{ fontFamily: "'Michroma', sans-serif" }}
            >
              <RotatingText
                words={[
                  "GENSHIN IMPACT",
                  "FREE FIRE",
                  "HONKAI STAR RAIL",
                  "MOBILE LEGENDS",
                  "BLOX FRUITS",
                  "WUTHERING WAVES",
                ]}
              />
            </div>

            {/* Subtext */}
            <p className="text-white/40 text-sm md:text-[15px] leading-relaxed max-w-xl mb-8">
              The latest redemption codes for {GAMES.length} live-service games.
              Sourced from official channels, refreshed every 2 hours. 100% free.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="/codes"
                className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
              >
                Browse All Codes
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
                href="#games"
                className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
              >
                Explore Games
              </Link>
            </div>

            {/* Stats bar */}
            <div className="flex items-center gap-6 md:gap-10 bg-white/[0.04] border border-white/[0.06] rounded-2xl px-8 py-4">
              {[
                { value: `${GAMES.length}`, label: "Games" },
                { value: "2 hr", label: "Refresh" },
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
                  {i < 3 && <div className="w-px h-7 bg-white/[0.08]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== LATEST CODES ========== */}
      <LatestCodesSection />

      {/* ========== GAMES GRID ========== */}
      <section
        id="games"
        className="py-20 bg-white"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              All Games
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Pick Your Game
            </h2>
            <p className="text-muted text-sm mt-3 max-w-md mx-auto">
              Active redemption codes for every game we cover. Refreshed every 2 hours.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {GAMES.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US ========== */}
      <section
        className="bg-[#fafafa] py-20"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              Why Game365Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Codes You Can Trust
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Cross-source verified",
                desc: "Codes seen in two or more independent sources get a verified badge. Every new code passes a manual review before it goes live.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Auto-refreshed",
                desc: "Our scraper checks every 2 hours. Codes silently auto-expire after 14 days of inactivity, so you only see codes that still have a chance to work.",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
              },
              {
                title: "100% Free",
                desc: "No paywalls, no signups, no ads on the codes themselves. Every code on every page, free forever.",
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={item.icon}
                    />
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

      {/* ========== CTA ========== */}
      <section className="relative overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-white/[0.06]" />
          <div className="absolute top-1/2 -left-20 w-60 h-60 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 -right-10 w-48 h-48 bg-white/[0.03] rounded-full blur-[80px]" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div
          className="relative container-custom py-20 text-center"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          <h2
            className="text-2xl md:text-4xl font-normal text-white mb-4 tracking-wider"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            NEVER MISS A CODE
          </h2>
          <p className="text-white/40 text-[15px] max-w-lg mx-auto mb-8">
            Bookmark Game365Hub and grab fresh codes for your favorite games
            the moment they drop.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/codes"
              className="group btn-fill-dark px-8 py-3.5 font-bold text-sm rounded-full flex items-center gap-2"
            >
              See All Codes
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
              href="/contact"
              className="btn-fill-dark px-8 py-3.5 font-semibold text-sm rounded-full"
            >
              Suggest a Game
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
