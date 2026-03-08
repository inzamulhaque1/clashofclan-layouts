import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import type { GameInfo, GameId } from "@/lib/constants";

const gameImageMap: Record<GameId, { hero: string; logo: string }> = {
  "clash-of-clans": images.games.coc,
  "brawl-stars": images.games.brawlStars,
  "clash-royale": images.games.clashRoyale,
  "free-fire": images.games.freeFire,
  pubg: images.games.pubg,
};

export default function GameCard({ game }: { game: GameInfo }) {
  const gameImages = gameImageMap[game.id];

  if (game.comingSoon) {
    return (
      <div
        className="rounded-[24px] p-6 h-[260px] flex flex-col justify-between"
        style={{ backgroundColor: "#f3f4f6" }}
      >
        <div className="flex items-center justify-between">
          <div className="w-14 h-14 rounded-2xl overflow-hidden grayscale opacity-50">
            <Image
              src={gameImages.logo}
              alt={game.name}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 bg-gray-200 px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>
        <div>
          <h3 className="text-lg font-extrabold text-gray-400">{game.name}</h3>
          <p className="text-xs text-gray-400 mt-1">{game.description}</p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/${game.id}`}
      className="rounded-[24px] p-6 h-[260px] flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
      style={{ backgroundColor: `${game.color}0A` }}
    >
      {/* Top: logo + stats */}
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm ring-2 ring-white">
          <Image
            src={gameImages.logo}
            alt={`${game.name} logo`}
            width={56}
            height={56}
            className="object-cover w-full h-full"
          />
        </div>
        <span
          className="text-[11px] font-bold px-3 py-1.5 rounded-full"
          style={{ backgroundColor: `${game.color}15`, color: game.color }}
        >
          {game.stats}
        </span>
      </div>

      {/* Bottom: name + desc + line + arrow */}
      <div>
        <h3 className="text-[17px] font-extrabold text-[#1a1a2e] leading-tight">
          {game.name}
        </h3>
        <p className="text-xs text-[#6b7280] mt-1.5 leading-relaxed">
          {game.description}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 h-px" style={{ backgroundColor: `${game.color}20` }} />
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: game.color }}
          >
            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
