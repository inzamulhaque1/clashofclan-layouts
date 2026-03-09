import Link from "next/link";
import Image from "next/image";
import type { BaseLayout } from "@/lib/bases";
import { formatViews, TH_LEVELS, BASE_TYPES } from "@/lib/bases";

export default function BaseCard({ base }: { base: BaseLayout }) {
  const thInfo = TH_LEVELS.find((t) => t.level === base.thLevel);
  const typeInfo = BASE_TYPES.find((t) => t.type === base.type);

  return (
    <Link
      href={`/clash-of-clans/bases/base/${base.slug}`}
      className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
        <Image
          src={base.image}
          alt={base.title}
          fill
          className="object-cover group-hover:scale-[1.02] transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* TH badge — top left */}
        <span
          className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold text-white rounded-md"
          style={{ backgroundColor: thInfo?.color || "#666" }}
        >
          {thInfo?.label}
        </span>

        {/* Type badge — top right */}
        <span className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/50 backdrop-blur-sm text-[10px] font-bold text-white rounded-md uppercase tracking-wider">
          {typeInfo?.label}
        </span>

        {/* New badge */}
        {base.tags.includes("new") && (
          <span className="absolute bottom-2.5 left-2.5 px-2 py-0.5 bg-green-500 text-[9px] font-bold text-white rounded-md uppercase tracking-wider">
            New
          </span>
        )}

        {/* Rating — bottom right */}
        <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded-md">
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-[10px] font-bold text-white">{base.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-sm text-[#1a1a2e] leading-snug group-hover:text-primary transition-colors line-clamp-2 mb-1.5">
          {base.title}
        </h3>
        <p className="text-[11px] text-muted line-clamp-2 mb-3">
          {base.description}
        </p>
        <div className="flex items-center justify-between text-[10px] text-gray-400">
          <div className="flex items-center gap-3">
            {/* Views */}
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {formatViews(base.views)}
            </span>
            <span>{base.date}</span>
          </div>
          <span className="text-primary font-semibold inline-flex items-center gap-0.5">
            View
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
