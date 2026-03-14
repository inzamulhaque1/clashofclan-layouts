import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BHBaseListingClient from "@/components/bases/BHBaseListingClient";
import { BH_LEVELS, getBuilderBasesByBH, getBuilderBaseCountByBH } from "@/lib/bases";
import type { BHLevel } from "@/lib/bases";
import { images } from "@/lib/images";
import { createMetadata, createJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return BH_LEVELS.map((bh) => ({ level: String(bh.level) }));
}

export function generateMetadata({
  params,
}: {
  params: { level: string };
}): Metadata {
  const level = parseInt(params.level) as BHLevel;
  const bhInfo = BH_LEVELS.find((b) => b.level === level);
  const bases = getBuilderBasesByBH(level);

  if (!bhInfo) {
    return createMetadata({
      title: "Builder Base Layouts - Game365Hub",
      description: "Browse Clash of Clans Builder Base layouts for every Builder Hall level.",
      path: "/clash-of-clans/bases",
    });
  }

  return createMetadata({
    title: `Best ${bhInfo.label} Builder Base Layouts 2026 | Versus, Trophy & War Bases with Copy Link`,
    description: `${bases.length}+ best ${bhInfo.label} Builder Base layouts for Clash of Clans in 2026. Versus battle, trophy push, and war bases with free copy links. Updated for the latest Builder Base meta.`,
    path: `/clash-of-clans/bases/bh/${level}`,
    tags: [
      `${bhInfo.label} base layout`,
      `best ${bhInfo.label} base`,
      `${bhInfo.label} versus base 2026`,
      `builder base layout`,
      `${bhInfo.label} trophy base`,
      `builder hall ${level} base copy link`,
      `clash of clans builder base`,
      `coc ${bhInfo.label} base`,
    ],
  });
}

// BH-specific descriptions for SEO
const bhDescriptions: Record<number, { intro: string; meta: string; tip: string }> = {
  10: {
    intro: "BH10 is the maximum Builder Hall level in Clash of Clans, featuring the Electrofire Wizard defense and Battle Copter hero ability. At this level, every building is maxed and layout strategy is the key differentiator between winning and losing.",
    meta: "The BH10 meta revolves around Cannon Cart spam and Hog Glider combos. Anti Cannon Cart layouts with well-placed Mega Tesla and Lava Launcher are essential for consistent defensive wins.",
    tip: "Utilize the Battle Copter ability strategically — its bombing run can turn a 1-star into a 2-star. Design your base to force attackers into using their ability early.",
  },
  9: {
    intro: "BH9 introduces the Lava Launcher and X-Bow, two game-changing defenses that significantly increase your defensive capabilities. The Lava Launcher's persistent damage zone is devastating against ground troops.",
    meta: "Hog Glider and Electrofire Wizard attacks are common at BH9. Place your Lava Launcher where it covers the most likely attack path, and keep X-Bows on ground mode for maximum DPS.",
    tip: "The Lava Launcher's lava puddle persists for several seconds — place it near pathing chokepoints to maximize its damage over time effect.",
  },
  8: {
    intro: "BH8 is a crucial level where you unlock the O.T.T.O Hut — completing its requirements gives you the 6th Builder for your Home Village. The Mega Tesla at level 2 becomes a fearsome defensive anchor.",
    meta: "Cannon Cart is the dominant troop at BH8 thanks to its long range and shield mechanic. Anti Cannon Cart bases with spring traps on common pathing lanes and centralized Mega Tesla perform best.",
    tip: "Focus on completing O.T.T.O Hut requirements: max Cannon Cart, max Mega Tesla, max Battle Machine, and Gear Up 3 buildings. A good base helps you climb trophies faster for more loot.",
  },
  7: {
    intro: "BH7 unlocks the Giant Cannon and Drop Ship troop, adding a new dimension to both offense and defense. The Giant Cannon's massive damage can one-shot groups of ground troops.",
    meta: "Drop Ship + Beta Minion air attacks are very popular at BH7. Keep your air defenses spread and use the Firecrackers and Air Bombs to create overlapping coverage zones.",
    tip: "Place your Giant Cannon at an angle where it can cover the Builder Hall but still reach approaching troops. Its slow fire rate means positioning is everything.",
  },
  6: {
    intro: "BH6 brings the Roaster, one of the most impactful Builder Base defenses. Its area damage roasts groups of troops and Bats from Night Witch, making it a must-protect building.",
    meta: "Night Witch spam dominates BH6 attacks. A centralized Roaster with good coverage is your best defense. Guard Post troops provide excellent distraction value when placed in choke points.",
    tip: "The Roaster has a blind spot at very close range. Surround it with walls and place point defenses nearby to cover that vulnerability.",
  },
  5: {
    intro: "BH5 is a milestone level — you unlock the Battle Machine, your first Builder Base hero. The Multi Mortar adds serious splash damage potential to your defenses.",
    meta: "Baby Dragon and Bomber combrades are common at BH5. The Multi Mortar's burst fire devastates grouped ground troops. Keep it protected behind walls with Air Bomb coverage overhead.",
    tip: "Your Battle Machine is both your best offensive and defensive tool. Level it up as a priority — its Electric Hammer ability can destroy key defenses.",
  },
  4: {
    intro: "BH4 unlocks the Mega Tesla, a powerful hidden defense that pops up to zap nearby troops. Combined with Push Traps, your base can surprise and overwhelm attackers.",
    meta: "Boxer Giant tanking with Sneaky Archers is the most common BH4 strategy. Place your Mega Tesla where attackers are most likely to funnel, and use Push Traps to separate tanks from damage dealers.",
    tip: "The Mega Tesla is hidden until triggered — place it in an unexpected location to catch attackers off guard. Don't put it right next to your Builder Hall.",
  },
  3: {
    intro: "BH3 is where Builder Base strategy begins to take shape. With the Crusher as your primary defense, base layout becomes crucial for stopping Raged Barbarian and Sneaky Archer spam.",
    meta: "Raged Barbarians are the biggest threat at BH3. Centralize your Crusher and surround it with buildings that slow troop pathing. Corner buildings can be used to waste attacker time.",
    tip: "Place your Crusher where it covers the most ground while being protected by your Archer Tower and Double Cannon. The goal is to force troops into the Crusher's range.",
  },
  2: {
    intro: "BH2 is the starting level for Builder Base. While layout options are limited, smart placement of your few defenses can still make a difference in early versus battles.",
    meta: "At BH2, most attacks use Raged Barbarians. Keep your defenses centralized and your Builder Hall protected behind walls for the best results.",
    tip: "Upgrade to BH3 as quickly as possible to unlock the Crusher and additional defenses.",
  },
};

export default function BHBasesPage({
  params,
}: {
  params: { level: string };
}) {
  const level = parseInt(params.level) as BHLevel;
  const bhInfo = BH_LEVELS.find((b) => b.level === level);

  if (!bhInfo) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-2xl font-bold">Builder Hall level not found</h1>
        <Link href="/clash-of-clans/bases" className="text-primary mt-4 inline-block">
          Browse all bases
        </Link>
      </div>
    );
  }

  const bases = getBuilderBasesByBH(level);
  const bhImage = images.builderHalls[level];
  const versusCount = bases.filter((b) => b.type === "versus").length;
  const trophyCount = bases.filter((b) => b.type === "trophy").length;
  const warCount = bases.filter((b) => b.type === "war").length;
  const desc = bhDescriptions[level] || bhDescriptions[3];

  // Adjacent BH levels for navigation
  const currentIdx = BH_LEVELS.findIndex((b) => b.level === level);
  const prevBH = currentIdx < BH_LEVELS.length - 1 ? BH_LEVELS[currentIdx + 1] : null;
  const nextBH = currentIdx > 0 ? BH_LEVELS[currentIdx - 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Best ${bhInfo.label} Builder Base Layouts 2026`,
    description: `${bases.length}+ best ${bhInfo.label} Builder Base layouts for Clash of Clans. Versus, trophy, and war bases with copy links.`,
    url: `https://game365hub.com/clash-of-clans/bases/bh/${level}`,
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
        { "@type": "ListItem", position: 4, name: `${bhInfo.label} Bases`, item: `https://game365hub.com/clash-of-clans/bases/bh/${level}` },
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
        name: `What is the best ${bhInfo.label} Builder Base layout in 2026?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${desc.meta} Browse our collection of ${bases.length}+ ${bhInfo.label} Builder Base layouts to find the perfect layout for versus battles and trophy pushing.`,
        },
      },
      {
        "@type": "Question",
        name: `How do I copy a ${bhInfo.label} Builder Base layout?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Click the 'Copy Base Link' button on any ${bhInfo.label} layout page. Open Clash of Clans, go to your Builder Base editor, and the game will prompt you to load the layout. You must have a Builder Hall ${level} to use these base links.`,
        },
      },
      {
        "@type": "Question",
        name: `What is the best ${bhInfo.label} versus battle base?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `The best ${bhInfo.label} versus battle base depends on the attacks you face most. ${desc.meta} Check our top-rated versus bases above for the best defensive designs.`,
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
            style={{ backgroundColor: `${bhInfo.color}15` }}
          />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-emerald-500/5 rounded-full blur-[100px]" />
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
            <span className="text-white/50">{bhInfo.label}</span>
          </nav>

          {/* Title row */}
          <div className="flex items-center gap-3 sm:gap-5 mb-5 sm:mb-6">
            <div className="relative w-14 h-14 sm:w-20 sm:h-20 shrink-0">
              <Image
                src={bhImage}
                alt={`${bhInfo.label} Builder Base Layouts`}
                width={80}
                height={80}
                className="object-contain w-full h-full drop-shadow-xl"
                priority
                quality={75}
              />
              <span
                className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-extrabold text-white shadow-lg ring-2 ring-[#0a0a0f]"
                style={{ backgroundColor: bhInfo.color }}
              >
                {level}
              </span>
            </div>
            <div>
              <h1
                className="text-xl sm:text-2xl md:text-4xl font-normal text-white tracking-wider leading-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}
              >
                {bhInfo.label} BUILDER BASE LAYOUTS
              </h1>
              <p className="text-white/40 text-xs sm:text-sm mt-1.5 sm:mt-2 max-w-lg leading-relaxed">
                {bases.length > 0
                  ? `${bases.length} pro ${bhInfo.label} Builder Base layouts with free copy links. Versus, trophy & war bases — updated for 2026.`
                  : `${bhInfo.label} Builder Base layouts coming soon. We're adding new designs every week.`}
              </p>
            </div>
          </div>

          {/* Stats pills */}
          {bases.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              {versusCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/10">
                  {versusCount} Versus
                </span>
              )}
              {trophyCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/10">
                  {trophyCount} Trophy
                </span>
              )}
              {warCount > 0 && (
                <span className="inline-flex items-center gap-1 px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold rounded-full bg-red-500/15 text-red-400 border border-red-500/10">
                  {warCount} War
                </span>
              )}
              <span className="hidden sm:inline-flex px-3 py-1.5 text-[11px] font-bold rounded-full bg-white/5 text-white/30 border border-white/5">
                Free Copy Links
              </span>
            </div>
          )}

          {/* BH level switcher */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {BH_LEVELS.map((bh) => {
              const isActive = bh.level === level;
              const count = getBuilderBaseCountByBH(bh.level);
              return (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className={`relative flex items-center gap-1.5 sm:gap-2 min-w-fit px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl border transition-all duration-200 shrink-0 ${
                    isActive
                      ? "border-white/20 bg-white/10"
                      : "border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10"
                  }`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 shrink-0">
                    <Image
                      src={images.builderHalls[bh.level]}
                      alt={bh.label}
                      width={28}
                      height={28}
                      className="object-contain w-full h-full"
                      loading="lazy"
                      quality={60}
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[10px] sm:text-[11px] font-bold whitespace-nowrap ${isActive ? "text-white" : "text-white/50"}`}>
                      {bh.label}
                    </span>
                    {count > 0 && (
                      <span className={`text-[8px] sm:text-[9px] whitespace-nowrap ${isActive ? "text-white/50" : "text-white/25"}`}>
                        {count} bases
                      </span>
                    )}
                  </div>
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-[2px] rounded-full" style={{ backgroundColor: bhInfo.color }} />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== BASE LISTING ========== */}
      {bases.length > 0 ? (
        <section className="py-6 sm:py-8">
          <div className="container-custom">
            <BHBaseListingClient bases={bases} />
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container-custom text-center">
            <div className="w-24 h-24 mx-auto mb-6">
              <Image
                src={bhImage}
                alt={bhInfo.label}
                width={96}
                height={96}
                className="object-contain w-full h-full drop-shadow-lg"
              />
            </div>
            <h2 className="text-xl font-extrabold text-[#1a1a2e] mb-2">
              {bhInfo.label} Layouts Coming Soon
            </h2>
            <p className="text-muted text-sm max-w-md mx-auto mb-8">
              We&apos;re working on adding the best Builder Hall {level} base layouts.
              Check back soon or browse our other Builder Base levels.
            </p>
            <Link
              href="/clash-of-clans/bases"
              className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Browse All Bases
            </Link>
          </div>
        </section>
      )}

      {/* ========== BH NAV (Previous / Next) ========== */}
      <section className="border-t border-gray-100">
        <div className="container-custom py-6 sm:py-8">
          <div className="flex items-center justify-between gap-4">
            {prevBH ? (
              <Link
                href={`/clash-of-clans/bases/bh/${prevBH.level}`}
                className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
              >
                <svg className="w-4 h-4 text-muted group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <Image src={images.builderHalls[prevBH.level]} alt={prevBH.label} width={32} height={32} className="object-contain w-full h-full" loading="lazy" quality={60} />
                </div>
                <div>
                  <span className="text-[9px] sm:text-[10px] text-muted block">Previous</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e]">{prevBH.label} Bases</span>
                </div>
              </Link>
            ) : <div />}

            <Link
              href="/clash-of-clans/bases"
              className="text-[10px] sm:text-xs font-semibold text-muted hover:text-primary transition-colors"
            >
              All Bases
            </Link>

            {nextBH ? (
              <Link
                href={`/clash-of-clans/bases/bh/${nextBH.level}`}
                className="group flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all text-right"
              >
                <div>
                  <span className="text-[9px] sm:text-[10px] text-muted block">Next</span>
                  <span className="text-xs sm:text-sm font-bold text-[#1a1a2e]">{nextBH.label} Bases</span>
                </div>
                <div className="w-7 h-7 sm:w-8 sm:h-8 shrink-0">
                  <Image src={images.builderHalls[nextBH.level]} alt={nextBH.label} width={32} height={32} className="object-contain w-full h-full" loading="lazy" quality={60} />
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
            {bhInfo.label} Builder Base Layout FAQ
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: `What is the best ${bhInfo.label} Builder Base layout in 2026?`,
                a: `${desc.meta} Browse our collection of ${bases.length}+ ${bhInfo.label} Builder Base layouts above to find the best layout for your playstyle.`,
              },
              {
                q: `How do I use a ${bhInfo.label} base copy link?`,
                a: `Click the "Copy Base Link" button on any ${bhInfo.label} layout page. Open Clash of Clans, switch to your Builder Base, go to the base editor, and the game will automatically prompt you to load the layout. You must have a Builder Hall ${level} to import these bases.`,
              },
              {
                q: `What is the best ${bhInfo.label} versus battle base?`,
                a: `${desc.meta} For versus battles, prioritize bases that defend against the most common attack strategies at your trophy range. Check our top-rated versus bases for ${bhInfo.label} above.`,
              },
              {
                q: `Should I rush my Builder Hall?`,
                a: `Yes, rushing your Builder Hall is generally recommended in Builder Base. Unlike the Home Village, there's no loot penalty for having a higher Builder Hall, and you unlock stronger defenses and troops faster. The main goal for most players is reaching BH9 to complete O.T.T.O Hut requirements for the 6th Builder.`,
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
              Best {bhInfo.label} Builder Base Layouts with Copy Link (2026)
            </h2>
            <div className="text-[12px] sm:text-[13px] text-muted leading-relaxed space-y-3">
              <p>{desc.intro}</p>
              <p>{desc.meta}</p>
              <p><strong>Pro tip:</strong> {desc.tip}</p>
              <p>
                All <strong>{bhInfo.label} Builder Base layouts</strong> on Game365Hub come with free copy links so you can import them directly into Clash of Clans. Each base includes strengths, weaknesses, and strategy notes.
              </p>
            </div>
          </article>

          {/* Browse other BH levels */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Browse Other Builder Hall Levels</h3>
            <div className="flex flex-wrap gap-2">
              {BH_LEVELS.filter((b) => b.level !== level).map((bh) => (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors"
                >
                  {bh.label} Bases
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100">
            <h3 className="text-sm font-bold text-[#1a1a2e] mb-3">Related Links</h3>
            <div className="flex flex-wrap gap-2">
              <Link href="/clash-of-clans/bases" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                All Base Layouts
              </Link>
              <Link href="/clash-of-clans/guides" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                CoC Guides
              </Link>
              <Link href="/clash-of-clans" className="text-[10px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-muted hover:text-primary hover:border-primary/30 transition-colors">
                CoC Hub
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-[#0a0a0f] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-[100px]" style={{ backgroundColor: `${bhInfo.color}12` }} />
        </div>
        <div className="relative container-custom py-10 sm:py-14 text-center">
          <h2
            className="text-lg sm:text-xl md:text-2xl font-normal text-white tracking-wider mb-3 sm:mb-4"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            MORE {bhInfo.label} BASES COMING
          </h2>
          <p className="text-white/40 text-xs sm:text-sm max-w-md mx-auto mb-6 sm:mb-8">
            We add new {bhInfo.label} Builder Base layouts every week. Bookmark this page or browse all Builder Hall levels.
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
