import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BH_LEVELS } from "@/lib/bases";
import type { BHLevel } from "@/lib/bases";
import { images } from "@/lib/images";
import { createMetadata } from "@/lib/seo";

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

  if (!bhInfo) {
    return createMetadata({
      title: "Builder Base Layouts - Game365Hub",
      description: "Browse Clash of Clans Builder Base layouts for every Builder Hall level.",
      path: "/clash-of-clans/bases",
    });
  }

  return createMetadata({
    title: `Best ${bhInfo.label} Builder Base Layouts (2026) | Game365Hub`,
    description: `Browse the best ${bhInfo.label} Builder Base layouts for Clash of Clans. Tested layouts with copy links for Builder Hall ${level}. Updated for 2026.`,
    path: `/clash-of-clans/bases/bh/${level}`,
    tags: [
      `${bhInfo.label} base`,
      "Builder Base",
      "Clash of Clans",
      "builder hall layout",
      "2026",
    ],
  });
}

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

  const bhImage = images.builderHalls[level];

  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-6 border-b border-gray-100">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/clash-of-clans/bases" className="hover:text-primary transition-colors">Bases</Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1a1a2e] font-medium">{bhInfo.label}</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 shrink-0">
              <Image
                src={bhImage}
                alt={bhInfo.label}
                width={64}
                height={64}
                className="object-contain w-full h-full drop-shadow-md"
              />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e]">
                {bhInfo.label} Builder Base Layouts
              </h1>
              <p className="text-muted text-sm mt-1">
                Builder Hall {level} layouts &middot; Coming soon
              </p>
            </div>
          </div>

          {/* BH level switcher */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {BH_LEVELS.map((bh) => {
              const isActive = bh.level === level;
              const img = images.builderHalls[bh.level];

              return (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className={`group relative flex items-center gap-2 min-w-fit px-3 py-2 rounded-xl border transition-all duration-200 ${
                    isActive
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                  }`}
                >
                  <div className="w-8 h-8 shrink-0">
                    <Image
                      src={img}
                      alt={bh.label}
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
                    {bh.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coming soon content */}
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
            Check back soon or browse our Home Village bases in the meantime.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/clash-of-clans/bases"
              className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded-full hover:bg-primary/90 transition-colors"
            >
              Browse All Bases
            </Link>
            <Link
              href="/clash-of-clans"
              className="px-6 py-2.5 bg-gray-100 text-[#1a1a2e] text-sm font-bold rounded-full hover:bg-gray-200 transition-colors"
            >
              CoC Hub
            </Link>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section className="py-12 bg-[#fafafa]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-xl font-extrabold text-[#1a1a2e] mb-4">
              About {bhInfo.label} Builder Base Layouts
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              The Builder Base in Clash of Clans offers a unique 1v1 experience with different troops and defenses
              compared to the Home Village. At Builder Hall {level}, having the right base layout is crucial for
              climbing in Versus Trophies and earning more loot.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              Our {bhInfo.label} base layouts are tested against common attack strategies at this level.
              Each layout comes with a direct copy link so you can import it into your Builder Base instantly.
              We update our collection regularly to keep up with balance changes and new strategies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
