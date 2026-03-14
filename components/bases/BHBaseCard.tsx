import Link from "next/link";
import Image from "next/image";
import type { BuilderBaseLayout } from "@/lib/bases";
import { formatViews, BH_LEVELS, BH_BASE_TYPES } from "@/lib/bases";

const typeColors: Record<string, { bg: string; text: string; border: string }> = {
  versus: { bg: "bg-emerald-500/10", text: "text-emerald-600", border: "border-emerald-500/20" },
  trophy: { bg: "bg-purple-500/10", text: "text-purple-600", border: "border-purple-500/20" },
  war: { bg: "bg-red-500/10", text: "text-red-600", border: "border-red-500/20" },
  farming: { bg: "bg-amber-500/10", text: "text-amber-600", border: "border-amber-500/20" },
  hybrid: { bg: "bg-teal-500/10", text: "text-teal-600", border: "border-teal-500/20" },
};

export default function BHBaseCard({ base }: { base: BuilderBaseLayout }) {
  const bhInfo = BH_LEVELS.find((b) => b.level === base.bhLevel);
  const typeInfo = BH_BASE_TYPES.find((t) => t.type === base.type);
  const colors = typeColors[base.type] || typeColors.versus;

  return (
    <Link
      href={`/clash-of-clans/bases/base/${base.slug}`}
      className="group relative bg-white border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-black/8 hover:-translate-y-1 transition-all duration-300"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: bhInfo?.color || "#666" }}
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={base.image}
          alt={base.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          unoptimized
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI1MCIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* BH badge — top left */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 sm:gap-1.5">
          <span
            className="px-2 py-0.5 sm:px-2.5 sm:py-1 text-[10px] sm:text-[11px] font-extrabold text-white rounded-md sm:rounded-lg shadow-lg"
            style={{ backgroundColor: bhInfo?.color || "#666" }}
          >
            {bhInfo?.label}
          </span>
          {base.tags.includes("new") && (
            <span className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-green-500 text-[9px] sm:text-[10px] font-bold text-white rounded-md sm:rounded-lg shadow-lg uppercase tracking-wider animate-pulse">
              New
            </span>
          )}
        </div>

        {/* Rating — top right */}
        <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg">
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[10px] sm:text-[11px] font-bold text-white">{base.rating}</span>
          <span className="hidden sm:inline text-[9px] text-white/50">({base.ratingCount})</span>
        </div>

        {/* Bottom info bar on image */}
        <div className="absolute bottom-0 left-0 right-0 px-2 pb-2 sm:px-3 sm:pb-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] text-white/80">
            <span className="flex items-center gap-1">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {formatViews(base.views)}
            </span>
            <span className="w-0.5 h-0.5 rounded-full bg-white/40" />
            <span>{base.date}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Type pill */}
        <div className="mb-2 sm:mb-2.5">
          <span className={`inline-flex items-center px-2 py-0.5 sm:px-2.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full border ${colors.bg} ${colors.text} ${colors.border}`}>
            {typeInfo?.label}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-[13px] sm:text-[15px] text-[#1a1a2e] leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-1.5 sm:mb-2">
          {base.title}
        </h3>

        {/* Description */}
        <p className="text-[11px] sm:text-[12px] text-muted leading-relaxed line-clamp-2 mb-2.5 sm:mb-3">
          {base.description}
        </p>

        {/* Strengths preview */}
        {base.strengths.length > 0 && (
          <div className="hidden xs:flex flex-wrap gap-1.5 mb-2.5 sm:mb-3">
            {base.strengths.slice(0, 2).map((s, i) => (
              <span key={i} className="inline-flex items-center gap-1 px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] font-medium text-green-700 bg-green-50 rounded-md border border-green-100 truncate max-w-[140px] sm:max-w-none">
                <svg className="w-2.5 h-2.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-gray-50">
          <span className="text-[10px] sm:text-[11px] text-muted truncate mr-2">by {base.author}</span>
          <span className="text-primary text-[10px] sm:text-[11px] font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-200 shrink-0">
            View
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
