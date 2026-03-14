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
  getAdjacentBases,
  formatViews,
  TH_LEVELS,
  BASE_TYPES,
  getBaseCountByTH,
  getBuilderBaseBySlug,
  getAllBuilderBaseSlugs,
  getRelatedBuilderBases,
  getAdjacentBuilderBases,
  BH_LEVELS,
  BH_BASE_TYPES,
  getBuilderBaseCountByBH,
} from "@/lib/bases";
import type { BuilderBaseLayout } from "@/lib/bases";
import { images } from "@/lib/images";
import { createMetadata, createJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  const thSlugs = getAllBaseSlugs().map((slug) => ({ slug }));
  const bhSlugs = getAllBuilderBaseSlugs().map((slug) => ({ slug }));
  return [...thSlugs, ...bhSlugs];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  // Check both TH and BH bases
  const base = getBaseBySlug(params.slug);
  const bhBase = !base ? getBuilderBaseBySlug(params.slug) : null;
  const anyBase = base || bhBase;

  if (!anyBase) {
    return createMetadata({
      title: "Base Not Found - Game365Hub",
      description: "This base layout could not be found.",
      path: `/clash-of-clans/bases/base/${params.slug}`,
    });
  }

  if (bhBase) {
    const bhInfo = BH_LEVELS.find((b) => b.level === bhBase.bhLevel);
    const typeInfo = BH_BASE_TYPES.find((t) => t.type === bhBase.type);
    return createMetadata({
      title: `${bhBase.title} with Copy Link (2026) | Game365Hub`,
      description: `${bhBase.description.slice(0, 150)}... Free copy link for this ${bhInfo?.label} ${typeInfo?.label} Builder Base layout. ${formatViews(bhBase.views)} views, ${bhBase.rating}/5 rating.`,
      path: `/clash-of-clans/bases/base/${bhBase.slug}`,
      image: bhBase.image,
      type: "article",
      publishedTime: bhBase.date,
      tags: [
        `${bhInfo?.label} base layout`,
        `${bhInfo?.label} ${typeInfo?.label?.toLowerCase()} base`,
        `best ${bhInfo?.label} builder base 2026`,
        `builder hall ${bhBase.bhLevel} base copy link`,
        `clash of clans builder base`,
        ...bhBase.tags.map((t) => t.replace(/-/g, " ")),
        "builder base layout",
        "coc builder base 2026",
      ],
    });
  }

  const thInfo = TH_LEVELS.find((t) => t.level === base!.thLevel);
  const typeInfo = BASE_TYPES.find((t) => t.type === base!.type);

  return createMetadata({
    title: `${base!.title} with Copy Link (2026) | Game365Hub`,
    description: `${base!.description.slice(0, 150)}... Free copy link for this ${thInfo?.label} ${typeInfo?.label} base layout. ${formatViews(base!.views)} views, ${base!.rating}/5 rating.`,
    path: `/clash-of-clans/bases/base/${base!.slug}`,
    image: base!.image,
    type: "article",
    publishedTime: base!.date,
    tags: [
      `${thInfo?.label} base layout`,
      `${thInfo?.label} ${typeInfo?.label?.toLowerCase()} base`,
      `best ${thInfo?.label} base 2026`,
      `${thInfo?.label} base copy link`,
      `clash of clans ${thInfo?.label}`,
      `coc ${typeInfo?.label?.toLowerCase()} base`,
      `${thInfo?.label} base with link`,
      ...base!.tags.map((t) => t.replace(/-/g, " ")),
      "clash of clans base layout",
      "coc base 2026",
    ],
  });
}

// ========== Builder Base Detail Page ==========
function BHBaseDetailPage({ base }: { base: BuilderBaseLayout }) {
  const bhInfo = BH_LEVELS.find((b) => b.level === base.bhLevel);
  const typeInfo = BH_BASE_TYPES.find((t) => t.type === base.type);
  const relatedBases = getRelatedBuilderBases(base.slug, 4);
  const bhImage = images.builderHalls[base.bhLevel];
  const totalBases = getBuilderBaseCountByBH(base.bhLevel);
  const { prev, next } = getAdjacentBuilderBases(base.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${base.title} with Copy Link`,
    description: base.description,
    image: base.image,
    datePublished: base.date,
    dateModified: base.date,
    author: { "@type": "Organization", name: "Game365Hub", url: "https://game365hub.com" },
    publisher: { "@type": "Organization", name: "Game365Hub", url: "https://game365hub.com" },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://game365hub.com/clash-of-clans/bases/base/${base.slug}` },
    keywords: base.tags.join(", "),
    aggregateRating: { "@type": "AggregateRating", ratingValue: base.rating, ratingCount: base.ratingCount, bestRating: 5, worstRating: 1 },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
      { "@type": "ListItem", position: 3, name: "Base Layouts", item: "https://game365hub.com/clash-of-clans/bases" },
      { "@type": "ListItem", position: 4, name: `${bhInfo?.label} Bases`, item: `https://game365hub.com/clash-of-clans/bases/bh/${base.bhLevel}` },
      { "@type": "ListItem", position: 5, name: base.title, item: `https://game365hub.com/clash-of-clans/bases/base/${base.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(articleJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(breadcrumbJsonLd)} />

      {/* Hero */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px]" style={{ backgroundColor: `${bhInfo?.color || "#666"}15` }} />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-emerald-500/5 rounded-full blur-[100px]" />
        </div>
        <div className="relative container-custom pt-5 pb-6 sm:pt-6 sm:pb-8 md:pt-8 md:pb-10">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-[10px] sm:text-[11px] text-white/25 mb-4 sm:mb-6 flex-wrap">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans" className="hover:text-white/50 transition-colors">Clash of Clans</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans/bases" className="hover:text-white/50 transition-colors">Bases</Link>
            <span className="text-white/15">/</span>
            <Link href={`/clash-of-clans/bases/bh/${base.bhLevel}`} className="hover:text-white/50 transition-colors">{bhInfo?.label}</Link>
            <span className="text-white/15">/</span>
            <span className="text-white/50 truncate max-w-[150px] sm:max-w-none">{base.title}</span>
          </nav>

          <div className="flex items-start gap-3 sm:gap-4">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 shrink-0">
              <Image src={bhImage} alt={bhInfo?.label || ""} width={64} height={64} className="object-contain w-full h-full drop-shadow-xl" priority quality={75} />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[9px] sm:text-[10px] font-extrabold text-white shadow-lg ring-2 ring-[#0a0a0f]" style={{ backgroundColor: bhInfo?.color || "#666" }}>
                {base.bhLevel}
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-extrabold text-white rounded-lg shadow-lg" style={{ backgroundColor: bhInfo?.color || "#666" }}>
                  {bhInfo?.label}
                </span>
                <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-400 bg-emerald-500/15 rounded-lg border border-emerald-500/10">
                  {typeInfo?.label}
                </span>
              </div>
              <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {base.title}
              </h1>
              <div className="flex items-center gap-3 mt-2 text-[10px] sm:text-[11px] text-white/40">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {base.rating}/5 ({base.ratingCount})
                </span>
                <span>{formatViews(base.views)} views</span>
                <span>by {base.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Left: Image + Description */}
            <div className="lg:col-span-2 space-y-6">
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-100">
                <Image src={base.image} alt={base.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority unoptimized />
              </div>

              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-extrabold text-[#1a1a2e] mb-3">About This Layout</h2>
                <p className="text-[13px] sm:text-sm text-muted leading-relaxed">{base.description}</p>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-green-50/50 border border-green-100 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-green-800 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    Strengths
                  </h3>
                  <ul className="space-y-2">
                    {base.strengths.map((s, i) => (
                      <li key={i} className="text-[12px] sm:text-[13px] text-green-700 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 sm:p-5">
                  <h3 className="text-sm font-extrabold text-red-800 mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    Weaknesses
                  </h3>
                  <ul className="space-y-2">
                    {base.weaknesses.map((w, i) => (
                      <li key={i} className="text-[12px] sm:text-[13px] text-red-700 leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 shrink-0" />
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Copy Link + Info */}
            <div className="space-y-4">
              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5 sticky top-4">
                <h3 className="text-sm font-extrabold text-[#1a1a2e] mb-3">Copy This Layout</h3>
                <BaseCopyButton copyLink={base.copyLink} />
                <div className="mt-4 pt-4 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Builder Hall</span>
                    <span className="font-bold text-[#1a1a2e]">{bhInfo?.label}</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Type</span>
                    <span className="font-bold text-[#1a1a2e]">{typeInfo?.label}</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Views</span>
                    <span className="font-bold text-[#1a1a2e]">{formatViews(base.views)}</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Rating</span>
                    <span className="font-bold text-[#1a1a2e]">{base.rating}/5 ({base.ratingCount})</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Author</span>
                    <span className="font-bold text-[#1a1a2e]">{base.author}</span>
                  </div>
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="text-muted">Updated</span>
                    <span className="font-bold text-[#1a1a2e]">{base.date}</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex flex-wrap gap-1.5">
                    {base.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 text-[10px] font-medium text-muted bg-gray-50 rounded-full border border-gray-100">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Browse more */}
              <div className="bg-white border border-gray-100 rounded-xl sm:rounded-2xl p-4 sm:p-5">
                <h3 className="text-sm font-extrabold text-[#1a1a2e] mb-3">Browse More</h3>
                <div className="space-y-2">
                  <Link href={`/clash-of-clans/bases/bh/${base.bhLevel}`} className="flex items-center gap-2 text-[12px] font-semibold text-muted hover:text-primary transition-colors">
                    <Image src={bhImage} alt={bhInfo?.label || ""} width={20} height={20} className="object-contain" />
                    All {bhInfo?.label} Bases ({totalBases})
                  </Link>
                  <Link href="/clash-of-clans/bases" className="flex items-center gap-2 text-[12px] font-semibold text-muted hover:text-primary transition-colors">
                    All Base Layouts
                  </Link>
                  <Link href="/clash-of-clans/guides" className="flex items-center gap-2 text-[12px] font-semibold text-muted hover:text-primary transition-colors">
                    CoC Guides
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Adjacent bases navigation */}
      <section className="border-t border-gray-100">
        <div className="container-custom py-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link href={`/clash-of-clans/bases/base/${prev.slug}`} className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all max-w-[45%]">
                <svg className="w-4 h-4 text-muted group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] text-muted block">Previous</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e] truncate block">{prev.title}</span>
                </div>
              </Link>
            ) : <div />}
            <Link href={`/clash-of-clans/bases/bh/${base.bhLevel}`} className="text-[10px] sm:text-xs font-semibold text-muted hover:text-primary transition-colors shrink-0">
              All {bhInfo?.label} Bases
            </Link>
            {next ? (
              <Link href={`/clash-of-clans/bases/base/${next.slug}`} className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all text-right max-w-[45%]">
                <div className="min-w-0">
                  <span className="text-[9px] sm:text-[10px] text-muted block">Next</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e] truncate block">{next.title}</span>
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-primary transition-colors shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Related BH bases */}
      {relatedBases.length > 0 && (
        <section className="py-8 sm:py-12 bg-[#fafafa] border-t border-gray-100">
          <div className="container-custom">
            <h2 className="text-base sm:text-lg font-extrabold text-[#1a1a2e] mb-4 sm:mb-6">Related Builder Base Layouts</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {relatedBases.map((rb) => {
                const rbInfo = BH_LEVELS.find((b) => b.level === rb.bhLevel);
                return (
                  <Link key={rb.id} href={`/clash-of-clans/bases/base/${rb.slug}`} className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all">
                    <div className="relative aspect-[16/10] bg-gray-100">
                      <Image src={rb.image} alt={rb.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 50vw, 25vw" loading="lazy" unoptimized />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 text-[10px] font-extrabold text-white rounded-md shadow-lg" style={{ backgroundColor: rbInfo?.color || "#666" }}>
                          {rbInfo?.label}
                        </span>
                      </div>
                    </div>
                    <div className="p-3">
                      <h3 className="text-[12px] sm:text-[13px] font-bold text-[#1a1a2e] line-clamp-2 group-hover:text-primary transition-colors">{rb.title}</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default function BaseDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  // Check if it's a Builder Base
  const bhBase = getBuilderBaseBySlug(params.slug);
  if (bhBase) return <BHBaseDetailPage base={bhBase} />;

  const base = getBaseBySlug(params.slug);
  if (!base) notFound();

  const thInfo = TH_LEVELS.find((t) => t.level === base.thLevel);
  const typeInfo = BASE_TYPES.find((t) => t.type === base.type);
  const relatedBases = getRelatedBases(base.slug, 4);
  const thImage = images.townHalls[base.thLevel];
  const totalBases = getBaseCountByTH(base.thLevel);
  const { prev, next } = getAdjacentBases(base.slug);

  // JSON-LD: Article + BreadcrumbList + FAQPage
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${base.title} with Copy Link`,
    description: base.description,
    image: base.image,
    datePublished: base.date,
    dateModified: base.date,
    author: {
      "@type": "Organization",
      name: "Game365Hub",
      url: "https://game365hub.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Game365Hub",
      url: "https://game365hub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://game365hub.com/clash-of-clans/bases/base/${base.slug}`,
    },
    keywords: base.tags.join(", "),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: base.rating,
      ratingCount: base.ratingCount,
      bestRating: 5,
      worstRating: 1,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
      { "@type": "ListItem", position: 3, name: "Base Layouts", item: "https://game365hub.com/clash-of-clans/bases" },
      { "@type": "ListItem", position: 4, name: `${thInfo?.label} Bases`, item: `https://game365hub.com/clash-of-clans/bases/th/${base.thLevel}` },
      { "@type": "ListItem", position: 5, name: base.title, item: `https://game365hub.com/clash-of-clans/bases/base/${base.slug}` },
    ],
  };

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to Copy ${base.title}`,
    description: `Step-by-step guide to import this ${thInfo?.label} ${typeInfo?.label} base layout into Clash of Clans.`,
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Copy the base link",
        text: "Click the 'Copy Base Link' button on this page to copy the layout link to your clipboard.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Open Clash of Clans",
        text: "Open the Clash of Clans app on your device.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Import the layout",
        text: `Open the base link in your device browser. The game will prompt you to import the ${thInfo?.label} layout. You must be ${thInfo?.label} to use this base.`,
      },
    ],
  };

  // FAQs are generated after type-specific content is defined below
  // Placeholder — actual faqJsonLd is created after typeStrategyGuides

  // ========== TYPE-SPECIFIC UNIQUE CONTENT ==========
  // Each base type generates completely different strategy text, FAQs, and tips
  const typeStrategyGuides: Record<string, { title: string; paragraphs: string[] }> = {
    war: {
      title: `${thInfo?.label} War Base Strategy Guide`,
      paragraphs: [
        `War bases at ${thInfo?.label} need to prioritize anti-3-star design above everything else. In Clan Wars, defenders only need to prevent the perfect attack — even a high-percentage 2-star is a successful defense. This ${base.title} uses compartmentalized defense placement to force attackers into difficult pathing decisions.`,
        `Key defensive buildings like Inferno Towers, Eagle Artillery, and Scattershots should never be reachable by a single Hero dive or Siege Machine path. This layout separates high-value defenses across multiple compartments, requiring attackers to commit spells in different areas rather than stacking them for maximum value.`,
        `Trap placement is critical in war bases. Spring Traps should cover Hog Rider and Root Rider pathing corridors, while Seeking Air Mines need to protect against LavaLoon entry angles. Giant Bombs paired with small bombs create kill zones that eliminate support troops like Wizards and Bowlers before they reach the core.`,
        `When using this war base, consider adjusting trap positions after each war day. Experienced clans scout and plan attacks based on trap predictions, so rotating trap locations between wars keeps your base unpredictable. The compartment structure of this layout gives you multiple viable trap positions without weakening the overall design.`,
      ],
    },
    farming: {
      title: `${thInfo?.label} Farming Base Resource Protection Guide`,
      paragraphs: [
        `Farming bases serve a fundamentally different purpose than war bases — the goal is protecting your resources, not your Town Hall. At ${thInfo?.label}, players often need to protect millions of Gold, Elixir, and Dark Elixir while upgrades are in progress. This ${base.title} positions storages deep within defensive rings to maximize resource protection.`,
        `The most effective farming strategy at ${thInfo?.label} involves placing your Town Hall outside the walls. This gives attackers an easy 1-star and a shield for you, while your resources remain protected behind multiple defense layers. Most trophy-focused attackers will take the Town Hall and leave without pushing deeper for your storages.`,
        `Resource collector placement matters more than many players realize. Collectors accumulate significant loot when left uncollected — spreading them around the base perimeter means attackers can only reach collectors on one side without committing a full army. This layout distributes collectors evenly so no single attack angle gives away all your passive income.`,
        `Dark Elixir is usually the most valuable resource at ${thInfo?.label} since hero upgrades and strong troops require massive amounts. This base centralizes the Dark Elixir storage behind the strongest defense concentration, making it the hardest resource to reach. Even a 2-star attack often fails to reach the DE storage.`,
      ],
    },
    trophy: {
      title: `${thInfo?.label} Trophy Pushing Strategy & Base Guide`,
      paragraphs: [
        `Trophy pushing at ${thInfo?.label} requires a base that can consistently defend against the meta attack strategies in your trophy range. Above 5500 trophies, attackers become highly skilled and bring optimized armies — your base needs to force mistakes rather than rely on brute defensive strength. This ${base.title} creates multiple decision points that trip up even experienced Legend League players.`,
        `The key to a good trophy base is Town Hall protection. Unlike farming bases, your Town Hall must be centered and surrounded by your strongest defenses. Losing the Town Hall means losing at least one star, and at high trophy ranges, every star matters. This layout positions the Town Hall behind overlapping splash damage zones and single-target Inferno Towers.`,
        `Defense placement in trophy bases should account for Queen Charge pathing. The Archer Queen with Healers is the most common opening at ${thInfo?.label}, and if your base allows an easy Queen Charge into the core, skilled attackers will consistently 3-star you. This layout uses air-targeting defenses to snipe Healers and forces the Queen into dead zones with limited value.`,
        `Trophy defense is also about psychology — if an attacker searches your base and sees a strong layout, they may skip you entirely. A well-designed base with visible anti-meta features (spread Infernos, protected Eagle) discourages attacks before they even start, helping you hold trophies passively during off-hours.`,
      ],
    },
    cwl: {
      title: `${thInfo?.label} CWL Competitive Base Strategy`,
      paragraphs: [
        `Clan War League demands a different mindset than regular wars. In CWL, every star across all 7 war days counts toward promotion, and you face the same opponents repeatedly. This ${base.title} is designed for the competitive CWL environment where attackers have time to scout and plan, requiring a layout that remains strong even when the opponent knows your trap positions.`,
        `CWL bases should prioritize anti-2-star over anti-3-star when facing higher Town Hall opponents. In mismatches, preventing even 2 stars from a stronger attacker is more valuable than the rare 3-star defense. This layout keeps the Town Hall deeply protected with maximum defense overlap, making it extremely difficult for even a TH${(base.thLevel as number) + 1} to secure the Town Hall.`,
        `Unlike regular wars, CWL doesn't allow base changes between attacks on the same day. Choose your CWL base carefully at the start of the season and stick with it. This layout has been tested across multiple CWL seasons and performs consistently because its defensive strength doesn't rely on surprise trap placements — the compartment structure itself is the primary defense.`,
        `Communication with your clan is essential for CWL success. Share this base layout with your clanmates so they can practice attacking similar designs. Understanding common anti-3-star layouts from the defender's perspective helps your clan develop better attack strategies for your own CWL offenses.`,
      ],
    },
    hybrid: {
      title: `${thInfo?.label} Hybrid Base — Balanced Defense Guide`,
      paragraphs: [
        `Hybrid bases are the most versatile layout type at ${thInfo?.label}, designed to protect both your trophies and your resources simultaneously. While specialized war or farming bases may outperform hybrids in their specific area, a good hybrid base eliminates the need to constantly switch layouts. This ${base.title} balances Town Hall protection with resource security.`,
        `The core philosophy of a hybrid base is compromise — the Town Hall is semi-centered rather than fully centered (trophy) or outside (farming). Storages are distributed around the base rather than clustered near the core. This means attackers can't optimize for either objective — trophy pushers can't easily snipe the TH, and farmers can't loot all storages from one direction.`,
        `Building a successful hybrid at ${thInfo?.label} requires understanding which resources you need most during your current upgrade phase. If you're focused on hero upgrades, bias your layout slightly toward DE protection. If you're upgrading buildings, shift the defense priority toward Gold and Elixir storages. This layout allows easy modification of storage positions without breaking the overall defense structure.`,
        `Hybrid bases work best in the mid-trophy ranges (Crystal to Champion League) where you encounter a mix of farming and trophy attacks. At very high trophies, a dedicated trophy base performs better, and at very low trophies, a dedicated farming base saves more resources. For most active players at ${thInfo?.label}, the hybrid approach offers the best day-to-day value.`,
      ],
    },
    "anti-3-star": {
      title: `${thInfo?.label} Anti 3 Star Defense Breakdown`,
      paragraphs: [
        `Anti 3-star bases are the gold standard for competitive Clash of Clans defense. The philosophy is simple — you accept that skilled attackers will get 2 stars, but you make the 3rd star nearly impossible. This ${base.title} uses spread defense placement and strategic dead zones to ensure troops run out of time or HP before clearing all buildings.`,
        `The most important element of anti 3-star design is building spread. By placing buildings with maximum spacing, you force attacking troops to walk farther between targets. This wastes precious attack time and separates troops from their support, making them vulnerable to point defenses. At ${thInfo?.label}, where attack armies are at their strongest, every second of wasted pathing matters.`,
        `Trash buildings (Barracks, Army Camps, Builder Huts) are defensive assets in anti 3-star layouts. Placing them in corners and edges forces attackers to either ignore them (losing the 3-star) or waste troops cleaning them up. This layout positions non-defensive buildings strategically to create cleanup nightmares — even a successful core dive still leaves 15-20% of the base standing.`,
        `Tesla farms and hidden trap clusters add an element of surprise that turns potential 3-stars into 2-stars. This layout includes designated spaces for grouping Teslas and Giant Bombs where ground troops naturally path after breaking through the first defense layer. Even when opponents scout your base, the exact trap positions within these zones remain unpredictable.`,
      ],
    },
    "anti-2-star": {
      title: `${thInfo?.label} Anti 2 Star — Town Hall Protection Strategy`,
      paragraphs: [
        `Anti 2-star bases take an extreme approach to defense — protecting the Town Hall at all costs. While most base designs accept a 2-star as inevitable, this ${base.title} makes even reaching the Town Hall a monumental challenge. The TH is buried in the deepest core with maximum defense overlap, requiring attackers to fight through multiple layers to even touch it.`,
        `This design philosophy is most effective in CWL and Legend League, where preventing stars is more valuable than protecting resources. At ${thInfo?.label}, the Town Hall has significant HP, and when surrounded by healing buildings and defensive weapons, it becomes nearly indestructible. Even Siege Barracks or Log Launcher paths struggle to create a viable route to the core.`,
        `The trade-off of anti 2-star bases is that outer buildings are less protected. Attackers will easily clear 50-70% of the base and secure a 1-star, but that's the intended outcome. By conceding the outside, you concentrate all defensive power around the Town Hall. For competitive play where preventing stars matters more than damage percentage, this trade-off is worth it.`,
        `Anti 2-star bases counter the common "Blimp" strategy where attackers send a Battle Blimp loaded with super troops directly to the Town Hall. This layout positions air defenses and Seeking Air Mines to intercept Blimps from all angles, while the TH compartment is designed so even if troops are dropped nearby, they path away from the Town Hall before reaching it.`,
      ],
    },
  };

  // Type-specific FAQs — completely different questions per type
  const typeFaqs: Record<string, { q: string; a: string }[]> = {
    war: [
      { q: `What attacks does this ${thInfo?.label} war base defend against?`, a: `This war base is designed to counter the most popular ${thInfo?.label} attack strategies including Root Rider Smash, LavaLoon, Queen Charge Hybrid, and Yeti Smash. The compartmentalized layout prevents troops from pathing efficiently through the base. Key strengths: ${base.strengths.join(", ")}.` },
      { q: `Should I use single or multi Inferno Towers with this war base?`, a: `The recommended Inferno Tower mode depends on the attacks you face most. Against Yeti Smash and Bat Spell attacks, multi-target Infernos perform better. Against Queen Charge and Root Rider compositions, single-target Infernos are more effective. This ${thInfo?.label} layout works well with a mix of both modes.` },
      { q: `How do I set my Clan Castle troops for this war base?`, a: `For ${thInfo?.label} war defense, the most effective CC troops are Super Minion + Head Hunter + Archers, or Ice Golem + Witch + Head Hunter. Avoid using troops that are easily predicted and spelled down. Place your CC in the designated range so it activates when attackers enter the core compartment.` },
      { q: `Can I modify this war base layout?`, a: `Yes — we recommend keeping the core structure and compartment walls intact but adjusting trap positions between wars. Move Spring Traps, Giant Bombs, and Seeking Air Mines to different viable locations within each compartment. This prevents opponents from predicting traps after scouting.` },
    ],
    farming: [
      { q: `How much loot can this ${thInfo?.label} farming base protect?`, a: `This farming base is designed to protect the maximum percentage of your stored loot. At ${thInfo?.label}, you can lose up to 20% of Gold/Elixir and 6% of Dark Elixir from storages per attack. By centralizing storages behind defense layers, most attackers only reach 1-2 storages, reducing average loot loss to 5-8% per raid.` },
      { q: `Should I put my Town Hall outside in this farming base?`, a: `Yes — this ${thInfo?.label} farming base places the Town Hall outside the main defense perimeter. This gives attackers an easy 1-star and you receive a shield. Most trophy pushers will take the TH and leave without spending troops to reach your storages deep inside the base.` },
      { q: `What trophy range works best for farming at ${thInfo?.label}?`, a: `The optimal farming range for ${thInfo?.label} is Crystal I to Master III (2400-2800 trophies). You find dead bases with full collectors, loot bonuses are decent, and opponents are less likely to use full armies. This farming base helps you stay in range by giving away trophies through the exposed Town Hall while protecting resources.` },
      { q: `How do I protect Dark Elixir with this base?`, a: `Dark Elixir is centralized in the deepest compartment surrounded by the strongest defenses. The DE storage has maximum protection — attackers need to break through 3+ wall layers and survive overlapping splash damage to reach it. Even Sneaky Goblin attacks struggle to reach the DE storage in this ${thInfo?.label} layout.` },
    ],
    trophy: [
      { q: `What trophy range can this ${thInfo?.label} trophy base hold?`, a: `This trophy base has been tested in Legend League (5000+ trophies) and consistently holds trophies against meta attacks. The centered Town Hall with overlapping defenses prevents most attackers from getting 2 stars. Players using this layout typically maintain ${base.thLevel >= 16 ? "5800-6200" : "5000-5500"} trophies.` },
      { q: `How does this base defend against Queen Charge?`, a: `Queen Charge is the most common opening at ${thInfo?.label}. This trophy base positions air-targeting defenses (Air Defenses, SAMs) to quickly eliminate Healers, while the Queen's pathing is directed toward low-value buildings away from the core. The base design ensures a Queen Charge cannot reach the Town Hall without extensive spell support.` },
      { q: `Is this trophy base good for Legend League?`, a: `Yes — Legend League at ${thInfo?.label} requires bases that can defend against 8 attacks per day from top players. This layout is designed for that environment. It doesn't rely on surprise trap placements (since opponents can scout) but instead uses structural defense through compartments and overlapping fire zones.` },
      { q: `How do I maximize defense wins with this base?`, a: `Defense wins in Legend League come from forcing time-fails and troop-wipes. This ${thInfo?.label} trophy base creates time pressure through spread buildings and forces attackers to fight through multiple kill zones. Keep your defenses and heroes maxed, request strong CC troops, and ensure your traps are placed in the designated positions.` },
    ],
    cwl: [
      { q: `Is this ${thInfo?.label} CWL base good against mismatches?`, a: `Yes — in CWL, you often face higher Town Hall attackers. This base is designed to make even mismatched attacks difficult by deeply protecting the Town Hall. A TH${(base.thLevel as number) + 1} attacker will struggle to 3-star this layout, and even securing 2 stars requires a strong attack with proper planning.` },
      { q: `Can I use this base for all 7 CWL war days?`, a: `Absolutely — this ${thInfo?.label} CWL base is designed for consistency across the full CWL season. Unlike bases that rely on surprise traps, this layout's strength comes from its structural design. The compartments and defense overlaps work regardless of whether opponents have scouted your base.` },
      { q: `How important is CC selection for CWL defense?`, a: `CC troops are crucial in CWL at ${thInfo?.label}. For this base, we recommend defensive CC compositions that counter the most common CWL attacks: Super Minion + Ice Golem or Witch + Head Hunter + Archers. Coordinate with your clan to ensure everyone has strong defensive CCs throughout the season.` },
      { q: `What's the difference between this CWL base and a regular war base?`, a: `Regular war bases optimize for surprise and one-time defense. CWL bases must perform across multiple attacks where opponents can scout. This ${thInfo?.label} CWL layout prioritizes structural strength — strong compartments, balanced defense distribution, and anti-mismatch design — over trap-dependent defense.` },
    ],
    hybrid: [
      { q: `Does this ${thInfo?.label} hybrid base protect both trophies and loot?`, a: `Yes — hybrid bases are designed to balance trophy defense and resource protection. The Town Hall is semi-centered (not fully outside like farming, not fully centered like trophy), and storages are distributed across multiple compartments. You won't lose many trophies or resources from a typical attack.` },
      { q: `When should I use a hybrid base vs a farming base?`, a: `Use this ${thInfo?.label} hybrid when you want to stay in your trophy range while protecting resources. Pure farming bases give away trophies by exposing the TH, which drops you to lower leagues. This hybrid maintains your trophy count while keeping storages protected — ideal for active players who attack frequently.` },
      { q: `Is this hybrid base competitive for war?`, a: `While dedicated war bases perform better in competitive wars, this ${thInfo?.label} hybrid base is suitable for regular Clan Wars in casual-to-mid clans. For CWL and serious war clans, we recommend switching to a dedicated war or CWL base. Use the "Browse More" section to find specialized war layouts.` },
      { q: `How should I arrange my storages in this hybrid?`, a: `Storages in this ${thInfo?.label} hybrid are intentionally distributed — Gold Storages, Elixir Storages, and the DE Storage are placed in separate compartments so no single attack path reaches all resources. If you're focused on a specific resource (like DE for hero upgrades), you can move that storage closer to the core.` },
    ],
    "anti-3-star": [
      { q: `How does this ${thInfo?.label} anti 3-star base prevent perfect attacks?`, a: `This anti 3-star base uses three key principles: maximum building spread to waste attack time, isolated trash buildings in corners for cleanup difficulty, and Tesla/trap clusters that wipe remaining troops after the core push. Even skilled attackers who take the Town Hall and 70% of the base run out of time or troops before clearing everything.` },
      { q: `What's the difference between anti 3-star and anti 2-star bases?`, a: `Anti 3-star bases accept that attackers will get 2 stars but make the 3rd star nearly impossible through building spread and cleanup difficulty. Anti 2-star bases center all defense around the Town Hall to prevent even 2 stars. For competitive wars at ${thInfo?.label}, anti 3-star is generally more effective since most attackers can reach a centered TH.` },
      { q: `Why are trash buildings placed in corners?`, a: `Builder Huts, Barracks, and Army Camps in the corners of this ${thInfo?.label} layout serve as "cleanup traps." After the main attack push through the core, attackers must send remaining troops to clear these scattered buildings. Each corner takes 10-15 seconds to reach and clear, eating into the 3-minute timer and preventing the 3-star.` },
      { q: `How do Tesla farms work in this base?`, a: `The Tesla farm in this ${thInfo?.label} anti 3-star base groups 3-4 Hidden Teslas together in a zone where ground troops naturally path after breaking through the first layer. The concentrated DPS from multiple Teslas shreds support troops (Wizards, Bowlers, Witches) that are separated from their tank, causing the attack to collapse.` },
    ],
    "anti-2-star": [
      { q: `Can attackers still get 1 star on this ${thInfo?.label} anti 2-star base?`, a: `Yes — anti 2-star bases intentionally sacrifice outer buildings. Attackers will typically get 50-60% destruction and 1 star easily, but reaching the deeply protected Town Hall for the 2nd star requires committing the entire army to a core push. The concentrated defense around the TH makes this extremely difficult.` },
      { q: `Is anti 2-star better than anti 3-star?`, a: `It depends on the context. Anti 2-star bases excel in CWL and Legend League where preventing stars matters most. In regular wars, anti 3-star designs are usually better because opponents can plan longer. This ${thInfo?.label} anti 2-star layout is ideal for competitive modes where star count determines rankings.` },
      { q: `How does this base stop Battle Blimp attacks?`, a: `The Battle Blimp is the biggest threat to anti 2-star bases since it flies directly to the Town Hall. This ${thInfo?.label} layout positions Air Defenses and Seeking Air Mines to intercept Blimps from every angle. Even if the Blimp reaches the core, the TH compartment is designed so dropped troops path away from the Town Hall.` },
      { q: `What CC troops work best with this anti 2-star base?`, a: `For this ${thInfo?.label} anti 2-star base, defensive CC troops should protect the Town Hall core. Ice Golem + Witch is excellent because the Ice Golem slows down attackers near the TH while the Witch spawns skeletons for extra DPS. Alternatively, Lava Hound in CC counters ground-heavy attacks by absorbing damage.` },
    ],
  };

  // TH-specific defense tips that vary by level
  const thDefenseTips: Record<number, string> = {
    18: `At TH18, the new Monolith and Spell Tower provide unique defensive capabilities. The Monolith's percentage-based damage is devastating against high-HP troops like Root Riders, while the Spell Tower can be set to Rage, Poison, or Invisibility mode depending on common attacks in your trophy range. Position these new defenses to cover key pathing corridors.`,
    17: `TH17 introduced the Merged Defense buildings which combine two defense types into one powerful structure. These merged defenses provide concentrated firepower in less space, allowing for tighter compartments. Place them where they cover the highest-traffic attack paths to maximize their dual-damage output.`,
    16: `TH16 brings the multi-Archer Tower and merged defenses that change base building strategy significantly. The Ricochet Cannon provides area denial that's particularly effective against grouped troops. Use these TH16-exclusive defenses to create kill zones where attackers must pass through overlapping fire.`,
    15: `TH15 features the Monolith and Spell Tower as game-changing defenses. The Monolith deals percentage-based damage, making it effective against any troop regardless of HP. Position it centrally where it can target tanks (Golems, Ice Golems, Root Riders) that enter the core. The Spell Tower's Rage mode boosts nearby defense DPS significantly.`,
    14: `At TH14, the Town Hall itself becomes a weapon with its Giga Inferno that activates when destroyed, dealing area damage and slowing nearby troops. This poison effect can devastate cleanup troops, making anti 3-star strategies even more effective. The Pet system also adds defensive options when your heroes are set to guard.`,
    13: `TH13 introduces the Scattershot and Royal Champion to defense. The Scattershot's bouncing projectiles are devastating against grouped troops, especially Bowlers and Witches. Position Scattershots where they cover the longest pathing corridors to maximize bounce damage against attacking troops.`,
    12: `TH12's Giga Tesla provides massive DPS when the Town Hall is damaged, creating a built-in last-stand defense. At TH12, the 3rd Inferno Tower and Siege Machine Workshop change attack dynamics. This base accounts for the wider variety of attack angles that Siege Machines create.`,
    11: `TH11 introduces the Eagle Artillery and Grand Warden, dramatically changing both offense and defense. The Eagle Artillery activates after a troop threshold, dealing devastating splash damage. This base positions the Eagle where it covers the largest area while being protected from Archer Queen walks and Siege Machine paths.`,
    10: `TH10 is where Inferno Towers first become available, and they're your strongest defensive weapons. Multi-target mode counters swarm attacks (Witches, Bats) while single-target mode melts tanks (Golems, Heroes). This base positions both Infernos where they cover different attack angles for maximum coverage.`,
    9: `TH9 is a critical upgrade with the Archer Queen and X-Bows. The X-Bow's range and DPS make it a cornerstone of any TH9 base design. This layout positions X-Bows where they cover the most ground while staying protected from Lightning Spell snipes — a common TH9 strategy.`,
    8: `TH8 is the gateway to competitive Clash of Clans with the introduction of the Barbarian King, Dark Spells, and PEKKA. Base design at TH8 should focus on centralizing Clan Castle and protecting against mass Dragon attacks — still the most dominant TH8 strategy. Air Defenses are your most critical defensive buildings.`,
    7: `TH7 is your first real base-building challenge with unlocked Air Defense, Dragon, and Barbarian King. At this level, mass Dragon attacks dominate, so Air Defense placement is critical. This base positions Air Defenses in a triangle pattern that forces Dragons to path through multiple kill zones.`,
  };

  const currentStrategyGuide = typeStrategyGuides[base.type] || typeStrategyGuides.war;
  const currentFaqs = typeFaqs[base.type] || typeFaqs.war;
  const currentThTip = thDefenseTips[base.thLevel] || thDefenseTips[17];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: currentFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // Type color map for pills
  const typeColors: Record<string, string> = {
    war: "bg-red-500/10 text-red-600 border-red-500/20",
    farming: "bg-amber-500/10 text-amber-600 border-amber-500/20",
    trophy: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    cwl: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    hybrid: "bg-cyan-500/10 text-cyan-600 border-cyan-500/20",
    "anti-3-star": "bg-orange-500/10 text-orange-600 border-orange-500/20",
    "anti-2-star": "bg-pink-500/10 text-pink-600 border-pink-500/20",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(articleJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(breadcrumbJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(howToJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(faqJsonLd)} />

      {/* ========== BREADCRUMB ========== */}
      <div className="border-b border-gray-100">
        <div className="container-custom py-3 sm:py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 sm:gap-2 text-[10px] sm:text-xs text-gray-400 overflow-x-auto">
            <Link href="/" className="hover:text-primary transition-colors shrink-0">Home</Link>
            <span className="text-gray-200">/</span>
            <Link href="/clash-of-clans" className="hover:text-primary transition-colors shrink-0">Clash of Clans</Link>
            <span className="text-gray-200">/</span>
            <Link href="/clash-of-clans/bases" className="hover:text-primary transition-colors shrink-0">Bases</Link>
            <span className="text-gray-200">/</span>
            <Link href={`/clash-of-clans/bases/th/${base.thLevel}`} className="hover:text-primary transition-colors shrink-0">
              {thInfo?.label}
            </Link>
            <span className="text-gray-200">/</span>
            <span className="text-[#1a1a2e] font-medium truncate">{base.title}</span>
          </nav>
        </div>
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <section className="py-5 sm:py-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">

            {/* Left — Base Image */}
            <div className="lg:col-span-2">
              {/* Title (mobile only — shown above image) */}
              <div className="lg:hidden mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 shrink-0">
                    <Image src={thImage} alt={thInfo?.label || ""} width={32} height={32} className="object-contain w-full h-full" loading="lazy" quality={60} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-2 py-0.5 text-[10px] font-bold text-white rounded"
                      style={{ backgroundColor: thInfo?.color }}
                    >
                      {thInfo?.label}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${typeColors[base.type] || "bg-gray-100 text-gray-600"}`}>
                      {typeInfo?.label}
                    </span>
                  </div>
                </div>
                <h1 className="text-lg font-extrabold text-[#1a1a2e] leading-tight">
                  {base.title}
                </h1>
                <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <strong>{base.rating}</strong> ({base.ratingCount})
                  </span>
                  <span>{formatViews(base.views)} views</span>
                  <span>{base.date}</span>
                </div>
              </div>

              <div className="relative aspect-square sm:aspect-[4/3] max-h-[600px] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={base.image}
                  alt={`${base.title} - ${thInfo?.label} ${typeInfo?.label} Base Layout with Copy Link`}
                  fill
                  className="object-contain"
                  priority
                  unoptimized
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YxZjVmOSIvPjwvc3ZnPg=="
                />
                {/* Badges — desktop only */}
                <div className="hidden lg:flex absolute top-4 left-4 items-center gap-2">
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
                <div className="hidden lg:flex absolute top-4 right-4 items-center gap-1.5 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-bold text-white">{base.rating}</span>
                  <span className="text-[10px] text-white/60">({base.ratingCount})</span>
                </div>
              </div>

              {/* Copy button — mobile (below image) */}
              <div className="lg:hidden mt-4">
                <BaseCopyButton copyLink={base.copyLink} />
                <p className="text-[9px] sm:text-[10px] text-gray-400 mt-1.5">
                  Opens in Clash of Clans app. You must be {thInfo?.label} to import this layout.
                </p>
              </div>

              {/* Prev / Next navigation */}
              {(prev || next) && (
                <div className="flex items-center justify-between gap-3 mt-4 sm:mt-5">
                  {prev ? (
                    <Link
                      href={`/clash-of-clans/bases/base/${prev.slug}`}
                      className="group flex items-center gap-2 min-w-0 flex-1"
                    >
                      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 group-hover:border-primary group-hover:text-primary text-gray-400 transition-colors shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </span>
                      <div className="min-w-0">
                        <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wider">Previous</span>
                        <p className="text-[11px] sm:text-xs font-bold text-[#1a1a2e] group-hover:text-primary transition-colors truncate">{prev.title}</p>
                      </div>
                    </Link>
                  ) : <div className="flex-1" />}

                  {next ? (
                    <Link
                      href={`/clash-of-clans/bases/base/${next.slug}`}
                      className="group flex items-center gap-2 min-w-0 flex-1 justify-end text-right"
                    >
                      <div className="min-w-0">
                        <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium uppercase tracking-wider">Next</span>
                        <p className="text-[11px] sm:text-xs font-bold text-[#1a1a2e] group-hover:text-primary transition-colors truncate">{next.title}</p>
                      </div>
                      <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-gray-200 group-hover:border-primary group-hover:text-primary text-gray-400 transition-colors shrink-0">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  ) : <div className="flex-1" />}
                </div>
              )}

              {/* How to Use — below image */}
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-[#fafafa] rounded-xl sm:rounded-2xl border border-gray-100">
                <h2 className="text-sm sm:text-base font-extrabold text-[#1a1a2e] mb-3 sm:mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  How to Copy This Base
                </h2>
                <ol className="space-y-2.5 sm:space-y-3">
                  {[
                    { step: "1", text: `Click the "Copy Base Link" button to copy the ${thInfo?.label} layout link to your clipboard.` },
                    { step: "2", text: "Open Clash of Clans on your device and go to your village." },
                    { step: "3", text: `Paste the link in your device browser — the game will prompt you to import the layout. You must be ${thInfo?.label} to use this base.` },
                  ].map((item) => (
                    <li key={item.step} className="flex items-start gap-3">
                      <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary/10 text-primary text-[11px] sm:text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {item.step}
                      </span>
                      <p className="text-[12px] sm:text-[13px] text-muted leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Right — Details sidebar */}
            <div className="lg:col-span-1">
              {/* Title — desktop only */}
              <div className="hidden lg:block">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-10 h-10 shrink-0">
                    <Image src={thImage} alt={thInfo?.label || ""} width={40} height={40} className="object-contain w-full h-full" loading="lazy" quality={60} />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span
                      className="px-2.5 py-1 text-[10px] font-bold text-white rounded-lg"
                      style={{ backgroundColor: thInfo?.color }}
                    >
                      {thInfo?.label}
                    </span>
                    <span className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border ${typeColors[base.type] || "bg-gray-100 text-gray-600"}`}>
                      {typeInfo?.label}
                    </span>
                  </div>
                </div>
                <h1 className="text-xl md:text-2xl font-extrabold text-[#1a1a2e] leading-tight mb-4">
                  {base.title}
                </h1>
              </div>

              {/* Stats row */}
              <div className="hidden lg:flex items-center gap-4 mb-5">
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="font-semibold">{formatViews(base.views)} views</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold">{base.rating}</span>
                  <span className="text-gray-400">({base.ratingCount})</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-500">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{base.date}</span>
                </div>
              </div>

              {/* Copy button — desktop */}
              <div className="hidden lg:block mb-6">
                <BaseCopyButton copyLink={base.copyLink} />
                <p className="text-[10px] text-gray-400 mt-2">
                  Opens in Clash of Clans app. You must be {thInfo?.label} to import.
                </p>
              </div>

              {/* Description */}
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xs sm:text-sm font-bold text-[#1a1a2e] mb-1.5 sm:mb-2">Description</h3>
                <p className="text-[12px] sm:text-sm text-muted leading-relaxed">{base.description}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                {base.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider rounded-full border border-gray-200 text-gray-500"
                  >
                    {tag.replace(/-/g, " ")}
                  </span>
                ))}
              </div>

              {/* Strengths */}
              {base.strengths.length > 0 && (
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1a1a2e] mb-1.5 sm:mb-2 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Strengths
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {base.strengths.map((s, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-muted">
                        <span className="text-green-500 mt-0.5 font-bold">+</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Weaknesses */}
              {base.weaknesses.length > 0 && (
                <div className="mb-4 sm:mb-5">
                  <h3 className="text-xs sm:text-sm font-bold text-[#1a1a2e] mb-1.5 sm:mb-2 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Weaknesses
                  </h3>
                  <ul className="space-y-1 sm:space-y-1.5">
                    {base.weaknesses.map((w, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-muted">
                        <span className="text-red-500 mt-0.5 font-bold">-</span>
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Meta info grid */}
              <div className="border-t border-gray-100 pt-4">
                <div className="grid grid-cols-2 gap-2.5 sm:gap-3 text-[11px] sm:text-xs">
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

              {/* Quick links */}
              <div className="border-t border-gray-100 pt-4 mt-4">
                <h3 className="text-xs font-bold text-[#1a1a2e] mb-2">Browse More</h3>
                <div className="flex flex-wrap gap-1.5">
                  <Link
                    href={`/clash-of-clans/bases/th/${base.thLevel}`}
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    All {thInfo?.label} Bases ({totalBases})
                  </Link>
                  <Link
                    href="/clash-of-clans/bases"
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    All CoC Bases
                  </Link>
                  <Link
                    href="/clash-of-clans"
                    className="px-2.5 py-1 text-[10px] font-semibold rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                  >
                    CoC Hub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-6 sm:py-10 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <h2 className="text-sm sm:text-base md:text-lg font-extrabold text-[#1a1a2e] mb-4 sm:mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2.5 sm:space-y-3">
            {currentFaqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-3 sm:p-4 text-[12px] sm:text-[13px] font-bold text-[#1a1a2e] select-none">
                  <span className="pr-3 leading-snug">{faq.q}</span>
                  <svg className="w-4 h-4 text-muted shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-3 pb-3 sm:px-4 sm:pb-4 -mt-1">
                  <p className="text-[11px] sm:text-[12px] text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== RELATED BASES ========== */}
      {relatedBases.length > 0 && (
        <section className="py-6 sm:py-10 border-t border-gray-100">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-5 sm:mb-8">
              <div>
                <span className="text-primary text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                  Similar Layouts
                </span>
                <h2 className="text-base sm:text-xl md:text-2xl font-extrabold mt-1 sm:mt-2 text-[#1a1a2e]">
                  Related {thInfo?.label} Bases
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
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {relatedBases.map((rb) => (
                <BaseCard key={rb.id} base={rb} />
              ))}
            </div>
            {/* Mobile link */}
            <div className="sm:hidden mt-4 text-center">
              <Link
                href={`/clash-of-clans/bases/th/${base.thLevel}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary"
              >
                View all {thInfo?.label} bases
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== STRATEGY GUIDE (TYPE-SPECIFIC) ========== */}
      <section className="py-6 sm:py-10 border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <article>
            <h2 className="text-sm sm:text-base font-extrabold text-[#1a1a2e] mb-3 sm:mb-4">
              {currentStrategyGuide.title}
            </h2>
            <div className="text-[11px] sm:text-[13px] text-muted leading-relaxed space-y-3 sm:space-y-4">
              {currentStrategyGuide.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* TH-specific defense tip */}
            <div className="mt-5 sm:mt-6 p-4 sm:p-5 bg-[#fafafa] rounded-xl border border-gray-100">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a2e] mb-2 flex items-center gap-2">
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                {thInfo?.label} Defense Tip
              </h3>
              <p className="text-[11px] sm:text-[12px] text-muted leading-relaxed">
                {currentThTip}
              </p>
            </div>

            {/* Base-specific summary */}
            <div className="mt-5 sm:mt-6">
              <h3 className="text-xs sm:text-sm font-bold text-[#1a1a2e] mb-2">
                About This {base.title}
              </h3>
              <div className="text-[11px] sm:text-[13px] text-muted leading-relaxed space-y-2 sm:space-y-3">
                <p>
                  This <strong>{base.title}</strong> is rated <strong>{base.rating}/5</strong> by {base.ratingCount} players
                  with <strong>{formatViews(base.views)} views</strong>. Its main strengths
                  are {base.strengths.map((s, i) => <span key={i}><strong>{s.toLowerCase()}</strong>{i < base.strengths.length - 1 ? ", " : ""}</span>)}.
                  {base.weaknesses.length > 0 && <> However, keep in mind that this layout has some trade-offs: {base.weaknesses.join(", ")}.</>}
                </p>
                <p>
                  Browse our full collection of <strong>{totalBases} {thInfo?.label} base layouts</strong> including
                  war, farming, trophy, and CWL bases — all with <strong>free copy links</strong> and updated for the 2026 meta.
                </p>
              </div>
            </div>
          </article>

          {/* Internal link cluster */}
          <div className="mt-5 sm:mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-xs font-bold text-[#1a1a2e] mb-2">Related Guides</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {base.thLevel >= 15 && base.thLevel <= 18 && (
                <Link
                  href={`/clash-of-clans/guides/best-th${base.thLevel}-attack-strategies-2026`}
                  className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {thInfo?.label} Attack Strategies
                </Link>
              )}
              <Link href="/clash-of-clans/guides/best-army-compositions-every-town-hall-level" className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                Army Compositions
              </Link>
              <Link href="/clash-of-clans/guides/best-defensive-cc-troops-for-war" className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                Defensive CC Troops
              </Link>
              <Link href="/clash-of-clans/guides" className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                All Guides
              </Link>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-100">
            <h3 className="text-xs font-bold text-[#1a1a2e] mb-2">Browse Other Town Hall Levels</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {TH_LEVELS.filter((t) => t.level !== base.thLevel).map((th) => (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="text-[9px] sm:text-[10px] font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {th.label} Bases
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full blur-[100px]" style={{ backgroundColor: `${thInfo?.color}12` }} />
        </div>
        <div className="relative container-custom py-8 sm:py-12 text-center">
          <h2
            className="text-base sm:text-lg md:text-xl font-normal text-white tracking-wider mb-2 sm:mb-3"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            MORE {thInfo?.label} BASES
          </h2>
          <p className="text-white/40 text-[11px] sm:text-sm max-w-md mx-auto mb-5 sm:mb-6">
            Browse our full collection of {thInfo?.label} war, farming, trophy, and CWL base layouts — all with free copy links.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3">
            <Link
              href={`/clash-of-clans/bases/th/${base.thLevel}`}
              className="btn-fill-dark rounded-full px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              All {thInfo?.label} Bases
            </Link>
            <Link
              href="/clash-of-clans/bases"
              className="btn-fill-dark rounded-full px-5 sm:px-7 py-2 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Browse All Bases
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
