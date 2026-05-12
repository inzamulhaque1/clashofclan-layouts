import Link from "next/link";
import Image from "next/image";
import { gameLogos } from "@/lib/images";
import { getActiveCodeCount } from "@/lib/codes";
import type { GameInfo } from "@/lib/constants";

export default function GameCard({ game }: { game: GameInfo }) {
  const activeCount = getActiveCodeCount(game.id);

  return (
    <Link
      href={`/${game.id}`}
      className="rounded-[24px] p-6 h-[240px] flex flex-col justify-between group transition-all duration-200 hover:-translate-y-1"
      style={{ backgroundColor: `${game.color}0A` }}
    >
      {/* Top: logo + active code badge */}
      <div className="flex items-center justify-between">
        <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-sm ring-2 ring-white bg-white">
          <Image
            src={gameLogos[game.id]}
            alt={`${game.name} logo`}
            width={56}
            height={56}
            className="object-cover w-full h-full"
            unoptimized
          />
        </div>
        <span
          className="text-[11px] font-bold px-3 py-1.5 rounded-full"
          style={{
            backgroundColor: `${game.color}15`,
            color: game.color,
          }}
        >
          {activeCount > 0
            ? `${activeCount} active code${activeCount > 1 ? "s" : ""}`
            : game.category}
        </span>
      </div>

      {/* Bottom: name + desc + arrow */}
      <div>
        <h3 className="text-[16px] font-extrabold text-[#1a1a2e] leading-tight">
          {game.name}
        </h3>
        <p className="text-xs text-[#6b7280] mt-1.5 leading-relaxed line-clamp-2">
          {game.description}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: `${game.color}20` }}
          />
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: game.color }}
          >
            <svg
              className="w-3.5 h-3.5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}
