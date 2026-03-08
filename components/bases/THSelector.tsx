import Link from "next/link";
import { TH_LEVELS, getBaseCountByTH } from "@/lib/bases";
import type { THLevel } from "@/lib/bases";

export default function THSelector({
  compact = false,
  activeLevel,
}: {
  compact?: boolean;
  activeLevel?: THLevel;
}) {
  return (
    <div
      className={
        compact
          ? "flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide"
          : "grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-11 gap-3"
      }
    >
      {TH_LEVELS.map((th) => {
        const count = getBaseCountByTH(th.level);
        const isActive = activeLevel === th.level;

        return (
          <Link
            key={th.level}
            href={`/bases/th-${th.level}`}
            className={`group relative flex flex-col items-center justify-center rounded-xl border transition-all duration-200 ${
              compact ? "min-w-[72px] px-3 py-2" : "px-4 py-4"
            } ${
              isActive
                ? "border-primary bg-primary/5 shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
            }`}
          >
            {/* TH Icon placeholder — number in colored circle */}
            <div
              className={`flex items-center justify-center rounded-lg font-extrabold text-white ${
                compact ? "w-8 h-8 text-[11px]" : "w-10 h-10 text-xs"
              }`}
              style={{ backgroundColor: th.color }}
            >
              {th.level}
            </div>
            <span
              className={`font-bold mt-1.5 ${
                compact ? "text-[10px]" : "text-xs"
              } ${isActive ? "text-primary" : "text-[#1a1a2e]"}`}
            >
              {th.label}
            </span>
            {!compact && count > 0 && (
              <span className="text-[10px] text-gray-400 mt-0.5">
                {count} {count === 1 ? "base" : "bases"}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
