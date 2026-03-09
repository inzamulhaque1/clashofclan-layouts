import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import BaseCopyButton from "@/components/bases/BaseCopyButton";
import BaseCard from "@/components/bases/BaseCard";
import {
  getBaseBySlug,
  getAllBaseSlugs,
  getRelatedBases,
  formatViews,
  TH_LEVELS,
  BASE_TYPES,
} from "@/lib/bases";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllBaseSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const base = getBaseBySlug(params.slug);
  if (!base) {
    return createMetadata({
      title: "Base Not Found - Game365Hub",
      description: "This base layout could not be found.",
      path: `/clash-of-clans/bases/base/${params.slug}`,
    });
  }

  return createMetadata({
    title: `${base.title} with Copy Link (2026) | Game365Hub`,
    description: base.description,
    path: `/clash-of-clans/bases/base/${base.slug}`,
    tags: [
      `TH${base.thLevel} base`,
      base.type,
      "Clash of Clans",
      "copy link",
      ...base.tags,
    ],
  });
}

export default function BaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const base = getBaseBySlug(params.slug);
  if (!base) notFound();

  const thInfo = TH_LEVELS.find((t) => t.level === base.thLevel);
  const typeInfo = BASE_TYPES.find((t) => t.type === base.type);
  const relatedBases = getRelatedBases(base.slug, 4);

  return (
    <>
      {/* Breadcrumb */}
      <div className="border-b border-gray-100">
        <div className="container-custom py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href={`/clash-of-clans/bases/th/${base.thLevel}`} className="hover:text-primary transition-colors">
              {thInfo?.label} Bases
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1a1a2e] font-medium truncate max-w-[200px]">{base.title}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left — Base Image (2/3 width) */}
            <div className="lg:col-span-2">
              <div className="relative aspect-square max-h-[600px] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={base.image}
                  alt={base.title}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className="px-3 py-1 text-xs font-bold text-white rounded-lg"
                    style={{ backgroundColor: thInfo?.color }}
                  >
                    {thInfo?.label}
                  </span>
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs font-bold text-white rounded-lg uppercase">
                    {typeInfo?.label}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-white">{base.rating}</span>
                  <span className="text-[10px] text-white/60">({base.ratingCount})</span>
                </div>
              </div>
            </div>

            {/* Right — Details sidebar */}
            <div className="lg:col-span-1">
              <h1 className="text-xl md:text-2xl font-extrabold text-[#1a1a2e] leading-tight mb-4">
                {base.title}
              </h1>

              <div className="flex items-center gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="font-semibold">{formatViews(base.views)} views</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{base.date}</span>
                </div>
              </div>

              <div className="mb-6">
                <BaseCopyButton copyLink={base.copyLink} />
                <p className="text-[10px] text-gray-400 mt-2">
                  Opens in Clash of Clans app. Paste the link in your browser or copy to clipboard.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-bold text-[#1a1a2e] mb-2">Description</h3>
                <p className="text-sm text-muted leading-relaxed">{base.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {base.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500"
                  >
                    {tag.replace(/-/g, " ")}
                  </span>
                ))}
              </div>

              {base.strengths.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-[#1a1a2e] mb-2 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-1.5">
                    {base.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-green-500 mt-0.5">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {base.weaknesses.length > 0 && (
                <div className="mb-5">
                  <h3 className="text-sm font-bold text-[#1a1a2e] mb-2 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Weaknesses
                  </h3>
                  <ul className="space-y-1.5">
                    {base.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-muted">
                        <span className="text-red-500 mt-0.5">-</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-gray-400">Author</span>
                    <p className="font-semibold text-[#1a1a2e]">{base.author}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Town Hall</span>
                    <p className="font-semibold text-[#1a1a2e]">{thInfo?.label}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Type</span>
                    <p className="font-semibold text-[#1a1a2e]">{typeInfo?.label}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Added</span>
                    <p className="font-semibold text-[#1a1a2e]">{base.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Bases */}
      {relatedBases.length > 0 && (
        <section className="py-12 bg-[#fafafa]">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-8">
              <div>
                <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
                  Similar Layouts
                </span>
                <h2 className="text-xl md:text-2xl font-extrabold mt-2 text-[#1a1a2e]">
                  Related Bases
                </h2>
              </div>
              <Link
                href={`/clash-of-clans/bases/th/${base.thLevel}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 border border-gray-200 text-sm font-semibold text-[#1a1a2e] rounded-full hover:border-primary hover:text-primary transition-colors"
              >
                All {thInfo?.label} Bases
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedBases.map((rb) => (
                <BaseCard key={rb.id} base={rb} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-xl md:text-2xl font-extrabold text-white mb-3">
            Need more {thInfo?.label} bases?
          </h2>
          <p className="text-white/70 text-sm max-w-md mx-auto mb-6">
            Browse our full collection of {thInfo?.label} base layouts — war, farming, trophy, and CWL bases with copy links.
          </p>
          <Link
            href={`/clash-of-clans/bases/th/${base.thLevel}`}
            className="inline-flex items-center gap-2 px-7 py-3 bg-white text-primary text-sm font-bold rounded-full hover:bg-white/90 transition-colors"
          >
            Browse All {thInfo?.label} Bases
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
