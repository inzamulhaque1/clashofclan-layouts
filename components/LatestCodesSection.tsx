import Link from "next/link";
import Image from "next/image";
import { GAMES } from "@/lib/constants";
import { gameLogos } from "@/lib/images";
import { getActiveCodeCount, getLastUpdated, formatRelativeTime } from "@/lib/codes";

export default function LatestCodesSection() {
  // Show top 6 games sorted by active code count desc, then by GAMES order
  const sorted = [...GAMES].sort((a, b) => {
    const aCount = getActiveCodeCount(a.id);
    const bCount = getActiveCodeCount(b.id);
    return bCount - aCount;
  });
  const featured = sorted.slice(0, 6);
  const lastUpdated = getLastUpdated();

  return (
    <section
      className="py-16 bg-gradient-to-b from-white to-gray-50"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <div className="container-custom">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
              🔥 Live Codes
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              Latest Redeem Codes
            </h2>
            <p className="text-muted text-sm mt-2">
              Updated {formatRelativeTime(lastUpdated)} — auto-refreshed every 2 hours
            </p>
          </div>
          <Link
            href="/codes"
            className="text-sm font-bold text-primary hover:text-primary-dark inline-flex items-center gap-1.5"
          >
            View all codes
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {featured.map((game) => {
            const count = getActiveCodeCount(game.id);
            return (
              <Link
                key={game.id}
                href={`/${game.id}/codes`}
                className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-gray-300 hover:-translate-y-0.5 transition-all"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden mb-3 bg-white ring-1 ring-gray-100">
                  <Image
                    src={gameLogos[game.id]}
                    alt={game.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="text-[13px] font-bold text-light leading-tight line-clamp-2">
                  {game.shortName}
                </p>
                <p
                  className="text-[11px] font-semibold mt-1.5"
                  style={{ color: game.color }}
                >
                  {count > 0 ? `${count} active` : "Codes →"}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
