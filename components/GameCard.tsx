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
      <div className="card p-1 opacity-60">
        <div className="relative h-48 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={gameImages.hero}
            alt={game.name}
            fill
            className="object-cover grayscale"
          />
          <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
            <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-muted border border-gray-200">
              Coming Soon
            </span>
          </div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-muted">{game.name}</h3>
          <p className="text-sm text-muted mt-1">{game.description}</p>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/${game.id}`} className="card p-1 group">
      <div className="relative h-48 rounded-xl overflow-hidden">
        <Image
          src={gameImages.hero}
          alt={game.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <Image
            src={gameImages.logo}
            alt={`${game.name} logo`}
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span
            className="text-xs font-semibold px-2 py-1 rounded-md"
            style={{ backgroundColor: `${game.color}20`, color: game.color }}
          >
            {game.stats}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-light group-hover:text-primary transition-colors">
          {game.name}
        </h3>
        <p className="text-sm text-muted mt-1">{game.description}</p>
        <div className="mt-4 flex items-center text-sm font-medium text-primary">
          Explore Guides
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
        </div>
      </div>
    </Link>
  );
}
