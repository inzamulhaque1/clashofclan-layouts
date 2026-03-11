import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BaseListingClient from "@/components/bases/BaseListingClient";
import { TH_LEVELS, getBasesByTH, getBaseCountByTH, BASE_TYPES, baseLayouts } from "@/lib/bases";
import type { THLevel } from "@/lib/bases";
import { images } from "@/lib/images";
import { createMetadata, createJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return TH_LEVELS.map((th) => ({ level: String(th.level) }));
}

export function generateMetadata({
  params,
}: {
  params: { level: string };
}): Metadata {
  const level = parseInt(params.level) as THLevel;
  const thInfo = TH_LEVELS.find((t) => t.level === level);
  const bases = getBasesByTH(level);

  if (!thInfo) {
    return createMetadata({
      title: "Base Layouts - Game365Hub",
      description: "Browse Clash of Clans base layouts for every Town Hall level.",
      path: "/clash-of-clans/bases",
    });
  }

  const warCount = bases.filter((b) => b.type === "war").length;
  const farmCount = bases.filter((b) => b.type === "farming").length;

  return createMetadata({
    title: `Best ${thInfo.label} Base Layouts 2026 | War, Farming, Trophy Bases with Copy Link`,
    description: `${bases.length}+ best ${thInfo.label} base layouts for Clash of Clans in 2026. ${warCount > 0 ? `${warCount} war bases, ` : ""}${farmCount > 0 ? `${farmCount} farming bases, ` : ""}trophy & CWL bases with free copy links. Anti Root Rider, anti 3-star ${thInfo.label} layouts updated for the latest meta.`,
    path: `/clash-of-clans/bases/th/${level}`,
    tags: [
      `${thInfo.label} base layout`,
      `best ${thInfo.label} base`,
      `${thInfo.label} war base 2026`,
      `${thInfo.label} farming base`,
      `${thInfo.label} trophy base`,
      `${thInfo.label} base copy link`,
      `clash of clans ${thInfo.label}`,
      `coc ${thInfo.label} base`,
      `anti root rider ${thInfo.label}`,
      `anti 3 star ${thInfo.label}`,
      `${thInfo.label} cwl base`,
      `best ${thInfo.label} base layout 2026`,
    ],
  });
}

// TH-specific descriptions for SEO
const thDescriptions: Record<number, { intro: string; meta: string; tip: string }> = {
  18: {
    intro: "TH18 is the newest Town Hall level in Clash of Clans, bringing powerful new defenses and strategies. Finding a solid TH18 base is critical as attackers experiment with new troop combinations.",
    meta: "The TH18 meta is still evolving, but anti Root Rider and anti LavaLoon bases are performing well. Focus on spread defenses and strategic trap placements to counter the strongest attacks.",
    tip: "At TH18, use the new defensive buildings to create unpredictable base layouts. Asymmetric designs work best to confuse attack planning.",
  },
  17: {
    intro: "TH17 bases need to counter Root Rider, LavaLoon, and Yeti Smash — the three dominant attack strategies at this level. A well-designed TH17 base can consistently hold against Legend League attackers.",
    meta: "Root Rider is the biggest threat at TH17. Anti Root Rider bases use spread defenses, spring traps in key pathing areas, and tornado traps to pull Root Riders away from the core.",
    tip: "For CWL, prioritize anti 3-star bases that force opponents into 2-star attacks. Protecting your Town Hall is more important than defending resources in competitive wars.",
  },
  16: {
    intro: "TH16 is where competitive Clash of Clans truly begins. With the Merge Defense and powerful heroes, TH16 war bases must account for sophisticated attack strategies used by top players.",
    meta: "Electro Titan and Root Rider compositions dominate TH16 attacks. Your base needs ring-style layouts with well-placed Spring Traps and Seeking Air Mines to defend effectively.",
    tip: "Place your Merge Defense where it covers the most critical compartments. A well-positioned Merge Defense can shut down entire attack strategies.",
  },
  15: {
    intro: "TH15 introduced the Monolith and Spell Tower, adding new defensive layers. The best TH15 bases leverage these buildings to create challenging defensive setups.",
    meta: "Yeti Smash and Electro Dragon spam are the most common TH15 attacks. Spread your buildings to prevent E-Drag chains and use multi-target Infernos against Yeti pushes.",
    tip: "Position your Monolith to cover the Town Hall area. Its massive damage output makes it a game-changer against tank-heavy compositions.",
  },
  14: {
    intro: "TH14 features the Poison Tower and Pet system. Strategic placement of these new features alongside classic defenses creates some of the most interesting base designs in CoC.",
    meta: "Hybrid and Electro Dragon attacks are popular at TH14. Anti E-Drag spacing and strong ground defense are key to successful base building.",
    tip: "Your Pets add an extra layer of defense on defense. Account for the Unicorn heal and L.A.S.S.I. pathing when designing your base.",
  },
  13: {
    intro: "TH13 brought the Scattershot and Royal Champion to Clash of Clans. These powerful additions make TH13 base building both challenging and rewarding.",
    meta: "Yeti-Witch and LavaLoon are the go-to strategies at TH13. Island-style Inferno placement with Bomb Tower coverage works well against ground pushes.",
    tip: "Place Scattershots to cover key pathing areas. Their long range and splash damage can devastate grouped troops.",
  },
  12: {
    intro: "TH12 is where the Giga Tesla adds an explosive element to base defense. With the Workshop siege machines, TH12 bases need to account for Blimp and Stone Slammer entry points.",
    meta: "E-Drag spam is rampant at TH12. Maximum spacing between buildings prevents chain lightning from getting value. Keep Air Defenses spread and protected.",
    tip: "Don't forget about siege machine pathing. Place your Town Hall where a Blimp can't easily deliver troops to your core.",
  },
  11: {
    intro: "TH11 introduces the Eagle Artillery and Grand Warden, changing the defensive dynamic significantly. A well-placed Eagle Artillery can single-handedly ruin attack strategies.",
    meta: "Witch Slap, LavaLoon, and Electro Dragon attacks are the main threats. Multi-target Infernos and Bomb Towers are your best friends against skeleton hordes.",
    tip: "Your Eagle Artillery placement is the most important decision. Central placement is standard, but off-center can surprise attackers.",
  },
  10: {
    intro: "TH10 adds Inferno Towers to your arsenal, making it a significant defensive upgrade. The best TH10 bases use Infernos strategically to cover critical defense zones.",
    meta: "Hog Riders and Miners are dominant at TH10. Giant Bomb placements and asymmetric layouts are key to defending against these ground strategies.",
    tip: "Decide between single and multi-target Infernos based on the most common attacks you face. Multi for ground spam, single for tank-heavy comps.",
  },
  9: {
    intro: "TH9 is a classic Town Hall level loved by many Clashers. With the Archer Queen and X-Bows, TH9 bases can put up a strong fight against common attack strategies.",
    meta: "LavaLoon is the most popular TH9 attack. Centralize your Air Defenses and place Seeking Air Mines on likely Lava Hound entry paths.",
    tip: "At TH9, your base design matters more than ever since defensive buildings are limited. Make every wall and trap count.",
  },
  8: {
    intro: "TH8 is where war base design starts to matter in Clan Wars. With Dragons as the dominant strategy, anti-Dragon bases with centralized Air Defenses are essential.",
    meta: "Mass Dragon and GoWiPe are the primary threats at TH8. Keep your Air Defenses deep inside your base and spread buildings to reduce Dragon value.",
    tip: "Use your Barbarian King effectively as a defensive anchor. Position him near the core for maximum impact.",
  },
  7: {
    intro: "TH7 is the introduction to serious base building in Clash of Clans. While options are limited, smart placement of your few defenses can make a big difference.",
    meta: "Dragon attacks are nearly impossible to defend at TH7 due to limited Air Defenses. Focus on anti-ground designs for farming and use your best war base for Clan Wars.",
    tip: "Centralize your single Air Defense and place Storages around it as a buffer. This gives you the best chance against Dragon attacks.",
  },
};

export default function THBasesPage({
  params,
}: {
  params: { level: string };
}) {
  const level = parseInt(params.level) as THLevel;
  const thInfo = TH_LEVELS.find((t) => t.level === level);
  const bases = getBasesByTH(level);

  if (!thInfo) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">Town Hall level not found</h1>
        <Link href="/clash-of-clans/bases" className="text-primary mt-4 inline-block">
          Browse all bases
        </Link>
      </div>
    );
  }

  const thImage = images.townHalls[level];
  const warCount = bases.filter((b) => b.type === "war").length;
  const farmCount = bases.filter((b) => b.type === "farming").length;
  const trophyCount = bases.filter((b) => b.type === "trophy").length;
  const cwlCount = bases.filter((b) => b.type === "cwl").length;
  const desc = thDescriptions[level] || thDescriptions[13];

  // Adjacent TH levels for navigation
  const currentIdx = TH_LEVELS.findIndex((t) => t.level === level);
  const prevTH = currentIdx < TH_LEVELS.length - 1 ? TH_LEVELS[currentIdx + 1] : null;
  const nextTH = currentIdx > 0 ? TH_LEVELS[currentIdx - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best ${thInfo.label} Base Layouts 2026`,
    description: `${bases.length}+ best ${thInfo.label} base layouts for Clash of Clans. War, farming, trophy, and CWL bases with copy links.`,
    url: `https://game365hub.com/clash-of-clans/bases/th/${level}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Game365Hub",
      url: "https://game365hub.com",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
        { "@type": "ListItem", position: 2, name: "Clash of Clans", item: "https://game365hub.com/clash-of-clans" },
        { "@type": "ListItem", position: 3, name: "Base Layouts", item: "https://game365hub.com/clash-of-clans/bases" },
        { "@type": "ListItem", position: 4, name: `${thInfo.label} Bases`, item: `https://game365hub.com/clash-of-clans/bases/th/${level}` },
      ],
    },
    ...(bases.length > 0 && {
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: bases.length,
        itemListElement: bases.map((base, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: base.title,
          url: `https://game365hub.com/clash-of-clans/bases/base/${base.slug}`,
          description: base.description,
        })),
      },
    }),
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the best ${thInfo.label} base layout in 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${desc.meta} Browse our collection of ${bases.length}+ ${thInfo.label} bases to find the perfect layout for war, farming, or trophy pushing.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I copy a ${thInfo.label} base layout?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Click the 'Copy Base Link' button on any ${thInfo.label} layout page. Open Clash of Clans, go to your base editor, and the game will prompt you to load the layout. You must be ${thInfo.label} to use these base links.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the best ${thInfo.label} war base?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The best ${thInfo.label} war base depends on the attacks you face most. ${desc.meta} Check our featured war bases above for top-rated designs.`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(jsonLd)} />
      <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(faqJsonLd)} />

      {/* ========== HERO ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{ backgroundColor: `${thInfo.color}15` }}
          />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-primary/5 rounded-full blur-[100px]" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative container-custom pt-6 pb-8 sm:pt-8 sm:pb-10 md:pt-10 md:pb-14">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] text-white/25 mb-5 sm:mb-8">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans" className="hover:text-white/50 transition-colors">Clash of Clans</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans/bases" className="hover:text-white/50 transition-colors">Bases</Link>
            <span className="text-white/15">/</span>
            <span className="text-white/50">{thInfo.label}</span>
          </nav>

          {/* Title row */}
          <div className="flex items-center gap-3 sm:gap-5 mb-5 sm:mb-6">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
              <Image
                src={thImage}
                alt={`${thInfo.label} Base Layouts`}
                width={80}
                height={80}
                className="object-contain w-full h-full drop-shadow-xl"
              />
              <span
                className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-extrabold text-white shadow-lg ring-2 ring-[#0a0a0f]"
                style={{ backgroundColor: thInfo.color }}
              >
                {level}
              </span>
            </div>
            <div>
              <h1
                className="text-xl sm:text-2xl md:text-4xl font-normal text-white tracking-wider leading-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}
              >
                {thInfo.label} BASE LAYOUTS
              </h1>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg leading-relaxed">
                {bases.length > 0
                  ? `${bases.length} pro ${thInfo.label} layouts with free copy links. War, farming, trophy & CWL bases — updated for 2026.`
                  : `${thInfo.label} base layouts coming soon. We're adding new designs every week.`}
              </p>
            </div>
          </div>

          {/* Stats pills */}
          {bases.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              {warCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-red-500/15 text-red-400 border border-red-500/10">
                  {warCount} War
                </span>
              )}
              {farmCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/10">
                  {farmCount} Farming
                </span>
              )}
              {trophyCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/10">
                  {trophyCount} Trophy
                </span>
              )}
              {cwlCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/10">
                  {cwlCount} CWL
                </span>
              )}
              <span className="hidden sm:inline-flex px-3 py-1.5 text-[11px] font-bold rounded-full bg-white/5 text-white/30 border border-white/5">
                Free Copy Links
              </span>
            </div>
          )}

          {/* TH level switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {TH_LEVELS.map((th) => {
              const isActive = th.level === level;
              const count = getBaseCountByTH(th.level);
              return (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className={`relative flex items-center gap-1.5 sm:gap-2 min-w-fit px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border transition-all duration-200 shrink-0 ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0">
                    <Image
                      src={images.townHalls[th.level]}
                      alt={th.label}
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[10px] sm:text-[11px] font-bold whitespace-nowrap ${isActive ? "text-white" : "text-white/50"}`}>
                      {th.label}
                    </span>
                    {count > 0 && (
                      <span className={`text-[8px] sm:text-[9px] whitespace-nowrap ${isActive ? "text-white/50" : "text-white/25"}`}>
                        {count} bases
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] rounded-full" style={{ backgroundColor: thInfo.color }} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BASE LISTING ========== */}
      <section className="py-6 sm:py-8">
        <div className="container-custom">
          <BaseListingClient bases={bases} />
        </div>
      </section>

      {/* ========== TH NAV (Previous / Next) ========== */}
      <section className="border-t border-gray-100">
        <div className="container-custom py-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            {prevTH ? (
              <Link
                href={`/clash-of-clans/bases/th/${prevTH.level}`}
                className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <Image src={images.townHalls[prevTH.level]} alt={prevTH.label} width={32} height={32} className="object-contain w-full h-full" />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-muted block">Previous</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e]">{prevTH.label} Bases</span>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/clash-of-clans/bases"
              className="text-[10px] sm:text-xs font-semibold text-muted hover:text-primary transition-colors"
            >
              All Bases
            </Link>

            {nextTH ? (
              <Link
                href={`/clash-of-clans/bases/th/${nextTH.level}`}
                className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all text-right"
              >
                <div>
                  <span className="text-[9px] sm:text-[10px] text-muted block">Next</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e]">{nextTH.label} Bases</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <Image src={images.townHalls[nextTH.level]} alt={nextTH.label} width={32} height={32} className="object-contain w-full h-full" />
                </div>
                <svg className="w-4 h-4 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* ========== FAQ ========== */}
      <section className="py-8 sm:py-12 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <h2 className="text-base sm:text-lg md:text-xl font-extrabold text-[#1a1a2e] mb-5 sm:mb-6">
            {thInfo.label} Base Layout FAQ
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: `What is the best ${thInfo.label} base layout in 2026?`,
                a: `${desc.meta} Browse our collection of ${bases.length}+ ${thInfo.label} bases above to find the best layout for your playstyle.`,
              },
              {
                q: `How do I use a ${thInfo.label} base copy link?`,
                a: `Click the "Copy Base Link" button on any ${thInfo.label} layout page. Open Clash of Clans, go to your base editor, and the game will automatically prompt you to load the layout. You must have a ${thInfo.label} to import these bases.`,
              },
              {
                q: `What is the best ${thInfo.label} war base?`,
                a: `${desc.meta} For Clan War League, prioritize anti 3-star designs that force opponents into 2-star attacks. Check our featured war bases for top-rated ${thInfo.label} designs.`,
              },
              {
                q: `Should I use a farming or trophy base at ${thInfo.label}?`,
                a: `It depends on your goals. Farming bases protect resources (especially Dark Elixir) with centralized storages and an outside Town Hall for easy shields. Trophy bases protect your Town Hall with overlapping defenses to maintain your trophy count. Use farming bases while upgrading and trophy bases when pushing leagues.`,
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

      {/* ========== SEO CONTENT ========== */}
      <section className="py-8 sm:py-12 border-t border-gray-100">
        <div className="container-custom max-w-3xl">
          <article>
            <h2 className="text-base sm:text-lg font-extrabold text-[#1a1a2e] mb-3 sm:mb-4">
              Best {thInfo.label} Base Layouts with Copy Link (2026)
            </h2>
            <div className="text-[12px] sm:text-[13px] text-muted leading-relaxed space-y-3">
              <p>{desc.intro}</p>
              <p>{desc.meta}</p>
              <p><strong>Pro tip:</strong> {desc.tip}</p>
              <p>
                All <strong>{thInfo.label} base layouts</strong> on Game365Hub come with free copy links so you can import them directly into Clash of Clans. Each base includes strengths, weaknesses, and strategy notes to help you understand the defensive design.
              </p>
            </div>
          </article>

          {/* Browse other TH levels */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Browse Other Town Hall Levels</h3>
            <div className="flex flex-wrap gap-2">
              {TH_LEVELS.filter((t) => t.level !== level).map((th) => (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {th.label} Bases
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Related</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/clash-of-clans/bases" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                All CoC Bases
              </Link>
              <Link href="/clash-of-clans" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                CoC Hub
              </Link>
              <Link href="/blog" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                Strategy Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px]" style={{ backgroundColor: `${thInfo.color}12` }} />
        </div>
        <div className="relative container-custom py-10 sm:py-14 text-center">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-wider mb-3 sm:mb-4"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            MORE {thInfo.label} BASES COMING
          </h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8">
            We add new {thInfo.label} layouts every week. Bookmark this page or browse all Town Hall levels.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/clash-of-clans/bases"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              Browse All Bases
            </Link>
            <Link
              href="/clash-of-clans"
              className="btn-fill-dark rounded-full px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-bold tracking-wide w-full sm:w-auto text-center"
            >
              CoC Hub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
