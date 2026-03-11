import Link from "next/link";
import Image from "next/image";
import { createMetadata, createJsonLd } from "@/lib/seo";
import BaseCard from "@/components/bases/BaseCard";
import { images } from "@/lib/images";
import {
  getFeaturedBases,
  getLatestBases,
  baseLayouts,
  TH_LEVELS,
  BH_LEVELS,
  BASE_TYPES,
  getBaseCountByTH,
  getBasesByType,
} from "@/lib/bases";

export const metadata = createMetadata({
  title: "Best Clash of Clans Base Layouts 2026 | War, Farming, Trophy Bases with Copy Link",
  description: `Browse ${baseLayouts.length}+ best Clash of Clans base layouts for TH7 to TH18 in 2026. Download war bases, farming bases, trophy bases, CWL bases & hybrid bases with direct copy links. Anti Root Rider, anti 3-star layouts updated for the latest CoC meta.`,
  path: "/clash-of-clans/bases",
  tags: [
    "clash of clans base layouts",
    "coc base layouts 2026",
    "best coc war base",
    "clash of clans farming base",
    "coc trophy base",
    "th17 base layout",
    "th16 war base",
    "th15 base layout",
    "clash of clans base copy link",
    "anti root rider base",
    "anti 3 star base coc",
    "cwl base layouts",
    "coc base link",
    "best base clash of clans",
    "clash of clans base design",
    "town hall base layouts",
  ],
});

const featuredBases = getFeaturedBases();
const latestBases = getLatestBases(6);

// JSON-LD structured data for SEO
const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Best Clash of Clans Base Layouts 2026",
  description: `Browse ${baseLayouts.length}+ best Clash of Clans base layouts for TH7 to TH18. War, farming, trophy, CWL bases with copy links.`,
  url: "https://game365hub.com/clash-of-clans/bases",
  isPartOf: {
    "@type": "WebSite",
    name: "Game365Hub",
    url: "https://game365hub.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: baseLayouts.length,
    itemListElement: baseLayouts.slice(0, 10).map((base, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: base.title,
      url: `https://game365hub.com/clash-of-clans/bases/base/${base.slug}`,
      description: base.description,
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
      { "@type": "ListItem", position: 3, name: "Base Layouts", item: "https://game365hub.com/clash-of-clans/bases" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best Clash of Clans base layout in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The best CoC base layout depends on your Town Hall level and purpose. For TH17 and TH16, anti Root Rider war bases are the most effective in the current meta. For farming, layouts with centralized Dark Elixir storage and outside Town Hall work best.",
      },
    },
    {
      "@type": "Question",
      name: "How do I copy a base layout in Clash of Clans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Click the 'Copy Base Link' button on any layout page. This copies a special link to your clipboard. Open Clash of Clans, go to your base editor, and the game will prompt you to load the layout. Make sure you have the same Town Hall level as the base.",
      },
    },
    {
      "@type": "Question",
      name: "What base type should I use for Clan War League (CWL)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For CWL, use anti 3-star bases that force opponents into 2-star attacks. These bases feature spread defenses, asymmetric layouts, and strategic trap placements designed to confuse attack planning in competitive wars.",
      },
    },
    {
      "@type": "Question",
      name: "Are these base layouts updated for the latest CoC update?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, all base layouts on Game365Hub are updated for the March 2026 meta. We regularly test and update layouts based on balance changes, new troop levels, and evolving attack strategies.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between war base and farming base?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "War bases are designed to prevent 3-star attacks by spreading defenses and using strategic trap placements. Farming bases prioritize protecting resources (especially Dark Elixir) by centralizing storages and placing the Town Hall outside for easy shields.",
      },
    },
  ],
};

export default function BasesIndexPage() {
  const warCount = baseLayouts.filter((b) => b.type === "war").length;
  const farmCount = baseLayouts.filter((b) => b.type === "farming").length;
  const trophyCount = baseLayouts.filter((b) => b.type === "trophy").length;
  const cwlCount = baseLayouts.filter((b) => b.type === "cwl").length;
  const hybridCount = baseLayouts.filter((b) => b.type === "hybrid").length;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(collectionJsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(faqJsonLd)} />

      {/* ========== HERO HEADER ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/6 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative container-custom pt-6 pb-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-white/25 mb-5 sm:mb-8">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans" className="hover:text-white/50 transition-colors">Clash of Clans</Link>
            <span className="text-white/15">/</span>
            <span className="text-white/50">Base Layouts</span>
          </nav>

          <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
            <div className="hidden sm:flex w-14 h-14 rounded-xl overflow-hidden ring-2 ring-white/10 shrink-0 mt-1">
              <Image
                src={images.games.coc.logo}
                alt="Clash of Clans Logo"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1
                className="text-lg sm:text-2xl md:text-4xl font-normal text-white tracking-wider leading-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}
              >
                COC BASE LAYOUTS
                <span className="hidden sm:inline"> — CLASH OF CLANS</span>
              </h1>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg leading-relaxed">
                {baseLayouts.length}+ pro base layouts with free copy links for TH7 to TH18. War, farming, trophy &amp; CWL bases — updated for 2026.
              </p>
            </div>
          </div>

          {/* Stats pills */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-red-500/15 text-red-400 border border-red-500/10">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z" /></svg>
              {warCount} War
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/10">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd" /></svg>
              {farmCount} Farm
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/10">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" /></svg>
              {trophyCount} Trophy
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/10">
              {cwlCount} CWL
            </span>
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-teal-500/15 text-teal-400 border border-teal-500/10">
              {hybridCount} Hybrid
            </span>
            <span className="hidden sm:inline-flex px-3 py-1.5 text-[11px] font-bold rounded-full bg-white/5 text-white/30 border border-white/5">
              TH7 – TH18 &bull; Free Copy Links
            </span>
          </div>
        </div>
      </section>

      {/* ========== HOME VILLAGE — TH SELECTOR ========== */}
      <section className="relative -mt-1">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="container-custom py-8 sm:py-12">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1a1a2e]">Home Village</h2>
                <p className="text-[10px] sm:text-[11px] text-muted">Town Hall 7 – 18</p>
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-muted bg-gray-100 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
              {TH_LEVELS.length} levels
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {TH_LEVELS.map((th) => {
              const count = getBaseCountByTH(th.level);
              const thImage = images.townHalls[th.level];

              return (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-2.5 sm:p-4 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-3 right-3 sm:left-4 sm:right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: th.color }}
                  />
                  <div className="relative w-11 h-11 sm:w-16 sm:h-16 mx-auto mb-1.5 sm:mb-3">
                    <Image
                      src={thImage}
                      alt={`Town Hall ${th.level} Base Layouts`}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: th.color }}
                    >
                      {th.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-xs sm:text-sm text-[#1a1a2e]">
                    {th.label}
                  </h3>
                  <p className="text-center text-[9px] sm:text-[10px] mt-0.5 sm:mt-1" style={{ color: count > 0 ? th.color : "#999" }}>
                    {count > 0 ? `${count} ${count === 1 ? "base" : "bases"}` : "Soon"}
                  </p>
                  <div className="hidden sm:flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" style={{ color: th.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BUILDER BASE — BH SELECTOR ========== */}
      <section className="py-8 sm:py-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-5 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1a1a2e]">Builder Base</h2>
                <p className="text-[10px] sm:text-[11px] text-muted">Builder Hall 2 – 10</p>
              </div>
            </div>
            <span className="text-[10px] sm:text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-emerald-100">
              {BH_LEVELS.length} levels
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 sm:gap-3">
            {BH_LEVELS.map((bh) => {
              const bhImage = images.builderHalls[bh.level];

              return (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className="group relative bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-2.5 sm:p-4 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-3 right-3 sm:left-4 sm:right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: bh.color }}
                  />
                  <div className="relative w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-1.5 sm:mb-3">
                    <Image
                      src={bhImage}
                      alt={`Builder Hall ${bh.level} Base Layouts`}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-0.5 -right-0.5 sm:-bottom-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center text-[8px] sm:text-[9px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: bh.color }}
                    >
                      {bh.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-[10px] sm:text-xs text-[#1a1a2e]">
                    {bh.label}
                  </h3>
                  <p className="text-center text-[9px] sm:text-[10px] mt-0.5 sm:mt-1 text-gray-400">
                    Soon
                  </p>
                  <div className="hidden sm:flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" style={{ color: bh.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BASE TYPE GUIDE ========== */}
      <section className="py-8 sm:py-12 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 sm:gap-3 mb-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1a1a2e]">CoC Base Types Explained</h2>
          </div>
          <p className="text-xs sm:text-sm text-muted mb-5 sm:mb-8 max-w-2xl">
            Not sure which base type to use? Here&apos;s a quick guide to help you choose the right layout for your playstyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {BASE_TYPES.slice(0, 6).map((bt) => {
              const count = getBasesByType(bt.type).length;
              const typeColorMap: Record<string, string> = {
                war: "#EF4444",
                farming: "#F59E0B",
                trophy: "#8B5CF6",
                cwl: "#3B82F6",
                hybrid: "#14B8A6",
                "anti-3-star": "#F97316",
                "anti-2-star": "#F43F5E",
              };
              return (
                <article key={bt.type} className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-4 sm:p-5 hover:shadow-lg hover:border-gray-200 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: typeColorMap[bt.type] || "#666" }}
                    />
                    <h3 className="font-bold text-sm text-[#1a1a2e]">{bt.label} Base</h3>
                    {count > 0 && (
                      <span className="ml-auto text-[10px] font-semibold text-muted bg-gray-100 px-2 py-0.5 rounded-full">
                        {count} {count === 1 ? "layout" : "layouts"}
                      </span>
                    )}
                  </div>
                  <p className="text-[12px] text-muted leading-relaxed">
                    {bt.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== FEATURED BASES ========== */}
      {featuredBases.length > 0 && (
        <section className="py-8 sm:py-12 bg-[#fafafa] border-t border-gray-100">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-5 sm:mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">Editor&apos;s Choice</span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a2e]">Best CoC Bases — Editor&apos;s Picks</h2>
                <p className="text-xs sm:text-sm text-muted mt-1 hidden sm:block">Hand-picked top-performing base designs tested in Legend League and competitive CWL.</p>
              </div>
              <span className="text-xs text-muted hidden sm:block">{featuredBases.length} picks</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
              {featuredBases.map((base) => (
                <BaseCard key={base.id} base={base} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== LATEST BASES ========== */}
      <section className="py-8 sm:py-12 border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-5 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-green-600 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">Recently Added</span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a2e]">New CoC Bases (March 2026)</h2>
              <p className="text-xs sm:text-sm text-muted mt-1 hidden sm:block">Latest base layouts added this month — optimized for the current CoC meta.</p>
            </div>
            <span className="text-[11px] text-muted hidden sm:block">{latestBases.length} new</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {latestBases.map((base) => (
              <BaseCard key={base.id} base={base} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION (SEO Rich Snippets) ========== */}
      <section className="py-8 sm:py-12 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-[#1a1a2e] mb-1.5 sm:mb-2">
              FAQ — CoC Base Layouts
            </h2>
            <p className="text-xs sm:text-sm text-muted">
              Common questions about Clash of Clans base layouts, copy links, and strategy.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "What is the best Clash of Clans base layout in 2026?",
                a: "The best CoC base layout depends on your Town Hall level and purpose. For TH17 and TH16, anti Root Rider war bases are the most effective in the current meta. For farming, layouts with centralized Dark Elixir storage and outside Town Hall work best. Browse our collection above to find the perfect base for your level.",
              },
              {
                q: "How do I copy a base layout in Clash of Clans?",
                a: "Click the 'Copy Base Link' button on any layout page. This copies a special link to your clipboard. Open Clash of Clans, go to your base editor, and the game will prompt you to load the layout. Make sure you have the same Town Hall level as the base you're copying.",
              },
              {
                q: "What base type should I use for Clan War League (CWL)?",
                a: "For CWL, use anti 3-star bases that force opponents into 2-star attacks. These bases feature spread defenses, asymmetric layouts, and strategic trap placements. In competitive CWL, preventing 3-stars is more valuable than protecting resources.",
              },
              {
                q: "Are these base layouts updated for the latest CoC update?",
                a: "Yes, all base layouts on Game365Hub are regularly updated to match the current meta. We test layouts against the most popular attack strategies including Root Rider, LavaLoon, Yeti Smash, and Electro Dragon spam.",
              },
              {
                q: "What is the difference between a war base and farming base?",
                a: "War bases are designed to prevent 3-star attacks with spread defenses, anti-funnel walls, and strategic traps. Farming bases prioritize protecting resources — especially Dark Elixir — by centralizing storages and placing the Town Hall outside for easy shield farming.",
              },
              {
                q: "Which Town Hall level has the most base layouts?",
                a: "TH16 and TH17 currently have the most base layouts as they represent the competitive endgame. However, we have layouts for every Town Hall level from TH7 to TH18, and we're constantly adding more.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-gray-200 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer p-3.5 sm:p-5 text-[13px] sm:text-sm font-bold text-[#1a1a2e] select-none">
                  <span className="pr-3 sm:pr-4 leading-snug">{faq.q}</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-muted shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-3.5 pb-3.5 sm:px-5 sm:pb-5 -mt-1">
                  <p className="text-[12px] sm:text-[13px] text-muted leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SEO CONTENT BLOCK ========== */}
      <section className="py-8 sm:py-12 border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <article className="prose prose-sm max-w-none">
            <h2 className="text-base sm:text-lg font-extrabold text-[#1a1a2e] mb-3 sm:mb-4">
              Best Clash of Clans Base Layouts with Copy Link (2026)
            </h2>
            <div className="text-[12px] sm:text-[13px] text-muted leading-relaxed space-y-3">
              <p>
                Finding the right <strong>Clash of Clans base layout</strong> is essential for protecting your resources, winning wars, and pushing trophies. At Game365Hub, we curate the best <strong>CoC base designs</strong> for every Town Hall level from TH7 to TH18, complete with free copy links so you can import them directly into your game.
              </p>
              <p>
                Our collection includes <strong>war bases</strong> designed to prevent 3-star attacks in Clan Wars, <strong>farming bases</strong> that protect your Dark Elixir and Gold storages, <strong>trophy bases</strong> for pushing to Legend League, and <strong>CWL bases</strong> optimized for competitive Clan War League play. Every layout is tested against the current 2026 meta, including popular strategies like Root Rider, LavaLoon, Yeti Smash, and Electro Dragon spam.
              </p>
              <p>
                Whether you&apos;re a new TH9 player looking for your first war base or a maxed TH17 pushing in Legend League, our <strong>base layouts with copy links</strong> make it easy to find and use the perfect design. Each base page includes detailed strengths, weaknesses, and strategy notes to help you understand how the layout works defensively.
              </p>
            </div>
          </article>

          {/* Internal links for SEO */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Browse Base Layouts by Town Hall Level</h3>
            <div className="flex flex-wrap gap-2">
              {TH_LEVELS.map((th) => (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {th.label} Base Layouts
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Related Guides</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/clash-of-clans" className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                Clash of Clans Hub
              </Link>
              <Link href="/blog" className="text-[11px] font-semibold px-3 py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                CoC Strategy Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/8 rounded-full blur-[120px]" />
        </div>
        <div className="relative container-custom py-10 sm:py-16 text-center">
          <h2
            className="text-lg sm:text-xl md:text-3xl font-normal text-white tracking-wider mb-3 sm:mb-4"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            CAN&apos;T FIND YOUR BASE?
          </h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8">
            We add new base layouts every week. Browse by Town Hall level for the latest designs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/clash-of-clans"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Back to CoC Hub
            </Link>
            <Link
              href="/blog"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Read Strategy Guides
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
