import Link from "next/link";
import Image from "next/image";
import { TH_LEVELS, getBaseCountByTH } from "@/lib/bases";
import { images } from "@/lib/images";
import type { THLevel } from "@/lib/bases";

export default function THSelector({
  compact = false,
  activeLevel,
}: {
  compact?: boolean;
  activeLevel?: THLevel;
}) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {TH_LEVELS.map((th) => {
          const isActive = activeLevel === th.level;
          const thImage = images.townHalls[th.level];

          return (
            <Link
              key={th.level}
              href={`/clash-of-clans/bases/th/${th.level}`}
              className={`group relative flex items-center gap-2 min-w-fit px-3 py-2 rounded-xl border transition-all duration-200 ${
                isActive
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
              }`}
            >
              <div className="w-8 h-8 shrink-0">
                <Image
                  src={thImage}
                  alt={th.label}
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span
                className={`text-[11px] font-bold whitespace-nowrap ${
                  isActive ? "text-primary" : "text-[#1a1a2e]"
                }`}
              >
                {th.label}
              </span>
            </Link>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-3">
      {TH_LEVELS.map((th) => {
        const count = getBaseCountByTH(th.level);
        const isActive = activeLevel === th.level;
        const thImage = images.townHalls[th.level];

        return (
          <Link
            key={th.level}
            href={`/clash-of-clans/bases/th/${th.level}`}
            className={`group relative flex flex-col items-center justify-center rounded-2xl border-2 transition-all duration-200 px-3 py-5 hover:-translate-y-1 ${
              isActive
                ? "border-primary bg-primary/5 shadow-md"
                : "border-transparent bg-white shadow-sm hover:shadow-lg hover:border-gray-200"
            }`}
          >
            {/* TH Image */}
            <div className="relative w-14 h-14 mb-2">
              <Image
                src={thImage}
                alt={th.label}
                width={56}
                height={56}
                className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-lg transition-all duration-200"
              />
              {/* Level badge */}
              <span
                className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white shadow-sm"
                style={{ backgroundColor: th.color }}
              >
                {th.level}
              </span>
            </div>

            <span
              className={`font-bold text-xs ${
                isActive ? "text-primary" : "text-[#1a1a2e]"
              }`}
            >
              {th.label}
            </span>

            {count > 0 && (
              <span className="text-[10px] text-gray-400 mt-0.5">
                {count} {count === 1 ? "base" : "bases"}
              </span>
            )}

            {/* Color accent line at bottom */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-0 group-hover:w-2/3 rounded-full transition-all duration-300"
              style={{ backgroundColor: th.color }}
            />
          </Link>
        );
      })}
    </div>
  );
}
