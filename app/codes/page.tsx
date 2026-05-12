import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { GAMES } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { getCodesForGame, formatRelativeTime, getLastUpdated } from "@/lib/codes";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "All Redeem Codes — Daily Updated",
  description:
    "Active redeem codes for Genshin Impact, Honkai Star Rail, Free Fire, Mobile Legends, Roblox & more. Updated every day.",
  path: "/codes",
});

export const revalidate = 300;

export default function AllCodesPage() {
  const today = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const lastUpdated = getLastUpdated();

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Header */}
      <section className="bg-[#0a0a0f] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative container-custom text-center">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            All Games
          </span>
          <h1
            className="text-3xl md:text-4xl font-normal mt-2 tracking-wide"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            Redeem Codes Database
          </h1>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">
            All active codes for {GAMES.length} games — verified and updated daily. Last refreshed{" "}
            {formatRelativeTime(lastUpdated)}.
          </p>
        </div>
      </section>

      {/* Games list */}
      <section className="container-custom py-12">
        <div className="space-y-8">
          {GAMES.map((game) => {
            const codes = getCodesForGame(game.id);
            return (
              <div
                key={game.id}
                id={game.id}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
              >
                {/* Game header */}
                <div
                  className="p-5 flex items-center justify-between gap-4"
                  style={{ backgroundColor: `${game.color}10` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl overflow-hidden ring-2 ring-white bg-white shrink-0">
                      <Image
                        src={gameLogos[game.id]}
                        alt={game.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        unoptimized
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold text-light">
                        {game.name}
                      </h2>
                      <p className="text-xs text-muted">
                        {codes.active.length} active •{" "}
                        {formatRelativeTime(codes.lastUpdated)}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/${game.id}/codes`}
                    className="shrink-0 text-xs font-bold px-4 py-2 rounded-full text-white"
                    style={{ backgroundColor: game.color }}
                  >
                    Details →
                  </Link>
                </div>

                {/* Codes list */}
                <div className="p-5">
                  {codes.active.length === 0 ? (
                    <p className="text-sm text-muted text-center py-6">
                      No active codes right now — check back soon.
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {codes.active.slice(0, 6).map((c) => (
                        <div
                          key={c.code}
                          className="flex items-center justify-between gap-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                        >
                          <div className="min-w-0 flex-1">
                            <code
                              className="font-mono font-bold text-sm tracking-wide"
                              style={{ color: game.color }}
                            >
                              {c.code}
                            </code>
                            <p className="text-xs text-muted truncate">
                              {c.reward}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-5 text-center">
          <p className="text-xs text-muted">
            Codes are sourced from official channels (in-game livestreams,
            official Twitter/Discord, redemption pages) and verified before
            publishing. Codes expire fast — redeem ASAP.
          </p>
        </div>
      </section>
    </div>
  );
}
