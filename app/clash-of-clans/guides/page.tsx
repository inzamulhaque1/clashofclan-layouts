import Link from "next/link";
import Image from "next/image";
import { createMetadata, createJsonLd } from "@/lib/seo";
import { cocGuides } from "@/lib/guides";
import { images } from "@/lib/images";

export const metadata = createMetadata({
  title: "Clash of Clans Guides 2026 — Strategy, Tips & Walkthroughs",
  description: `Browse ${cocGuides.length}+ in-depth Clash of Clans guides for 2026. Beginner tips, attack strategies, base building, hero upgrades, and more — written for every Town Hall level.`,
  path: "/clash-of-clans/guides",
  tags: [
    "clash of clans guides",
    "coc guide 2026",
    "clash of clans tips",
    "coc strategy guide",
    "clash of clans beginner guide",
    "coc attack strategies",
    "clash of clans walkthrough",
    "coc tips and tricks",
  ],
});

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Clash of Clans Guides 2026",
  description: `Browse ${cocGuides.length}+ in-depth Clash of Clans guides. Strategy tips, base building, attack guides for every TH level.`,
  url: "https://game365hub.com/clash-of-clans/guides",
  isPartOf: {
    "@type": "WebSite",
    name: "Game365Hub",
    url: "https://game365hub.com",
  },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: cocGuides.length,
    itemListElement: cocGuides.map((guide, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: guide.title,
      url: `https://game365hub.com/clash-of-clans/guides/${guide.slug}`,
      description: guide.description,
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
      { "@type": "ListItem", position: 3, name: "Guides", item: "https://game365hub.com/clash-of-clans/guides" },
    ],
  },
};

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(collectionJsonLd)} />

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
            <span className="text-white/50">Guides</span>
          </nav>

          <div className="flex items-start gap-3 sm:gap-5 mb-5 sm:mb-8">
            <div className="hidden sm:flex w-14 h-14 rounded-xl overflow-hidden ring-2 ring-white/10 shrink-0 mt-1">
              <Image
                src={images.games.coc.logo}
                alt="Clash of Clans Logo"
                width={56}
                height={56}
                className="object-cover w-full h-full"
                priority
                quality={75}
              />
            </div>
            <div>
              <h1
                className="text-lg sm:text-2xl md:text-4xl font-normal text-white tracking-wider leading-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}
              >
                COC GUIDES
                <span className="hidden sm:inline"> — CLASH OF CLANS</span>
              </h1>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg leading-relaxed">
                In-depth strategy guides, beginner tips, attack walkthroughs, and everything you need to dominate in Clash of Clans 2026.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/10">
              <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" /></svg>
              {cocGuides.length} {cocGuides.length === 1 ? "Guide" : "Guides"}
            </span>
            <span className="hidden sm:inline-flex px-3 py-1.5 text-[11px] font-bold rounded-full bg-white/5 text-white/30 border border-white/5">
              TH1 – TH18 &bull; All Skill Levels
            </span>
          </div>
        </div>
      </section>

      {/* ========== GUIDES GRID ========== */}
      <section className="py-8 sm:py-12">
        <div className="container-custom">
          {cocGuides.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted text-sm">Guides are coming soon. Check back shortly!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {cocGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/clash-of-clans/guides/${guide.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative w-full aspect-[2/1] overflow-hidden bg-[#1a1a2e]">
                    <Image
                      src={guide.image}
                      alt={guide.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500 p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider text-white/90 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h2 className="text-sm sm:text-[15px] font-bold text-[#1a1a2e] leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h2>
                    <p className="text-xs text-muted mt-2 leading-relaxed line-clamp-2">
                      {guide.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-gray-100">
                      <span className="text-[11px] text-muted flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {guide.readTime}
                      </span>
                      <time dateTime={guide.date} className="text-[11px] text-muted flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        {guide.date}
                      </time>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
            NEED A BASE LAYOUT?
          </h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8">
            Browse our collection of 400+ tested base layouts for every Town Hall and Builder Hall level with free copy links.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/clash-of-clans/bases"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Browse Base Layouts
            </Link>
            <Link
              href="/clash-of-clans"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Back to CoC Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
