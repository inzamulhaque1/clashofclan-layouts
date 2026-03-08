import { Metadata } from "next";
import Link from "next/link";
import THSelector from "@/components/bases/THSelector";
import BaseListingClient from "@/components/bases/BaseListingClient";
import { TH_LEVELS, getBasesByTH } from "@/lib/bases";
import type { THLevel } from "@/lib/bases";
import { createMetadata } from "@/lib/seo";

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

  if (!thInfo) {
    return createMetadata({
      title: "Base Layouts - Game365Hub",
      description: "Browse Clash of Clans base layouts for every Town Hall level.",
      path: "/bases",
    });
  }

  return createMetadata({
    title: `Best ${thInfo.label} Base Layouts (2026) - War, Farming, Trophy | Game365Hub`,
    description: `Browse the best ${thInfo.label} base layouts for Clash of Clans. War bases, farming bases, trophy bases, and CWL bases with direct copy links. Updated for 2026.`,
    path: `/bases/th-${level}`,
    tags: [
      `${thInfo.label} base`,
      "Clash of Clans",
      "war base",
      "farming base",
      "trophy base",
      "copy link",
      "2026",
    ],
  });
}

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
        <Link href="/" className="text-primary mt-4 inline-block">
          Go back home
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="pt-8 pb-6 border-b border-gray-100">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-400 mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/#th-selector" className="hover:text-primary transition-colors">
              Bases
            </Link>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-[#1a1a2e] font-medium">{thInfo.label}</span>
          </nav>

          {/* Title */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-extrabold text-lg"
              style={{ backgroundColor: thInfo.color }}
            >
              {thInfo.level}
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e]">
                {thInfo.label} Base Layouts
              </h1>
              <p className="text-muted text-sm mt-1">
                {bases.length} {bases.length === 1 ? "layout" : "layouts"} available &middot; Updated March 2026
              </p>
            </div>
          </div>

          {/* TH level switcher */}
          <THSelector compact activeLevel={level} />
        </div>
      </section>

      {/* Base listing */}
      <section className="py-8">
        <div className="container-custom">
          <BaseListingClient bases={bases} />
        </div>
      </section>

      {/* SEO content */}
      <section className="py-12 bg-[#fafafa]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-xl font-extrabold text-[#1a1a2e] mb-4">
              About {thInfo.label} Base Layouts
            </h2>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Finding the right base layout is crucial for success in Clash of Clans. Whether you are looking
              for a war base to defend against 3-star attacks, a farming base to protect your resources, or a
              trophy base to push to Legend League, we have you covered.
            </p>
            <p className="text-sm text-muted leading-relaxed mb-3">
              All {thInfo.label} bases on this page have been tested against current meta attack strategies
              including Root Rider, LavaLoon, Yeti Smash, and Electro Dragon compositions. Each base
              comes with a direct copy link that you can use to import the layout into your game instantly.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              We update our base collection regularly to stay ahead of balance changes and new attack
              strategies. Bookmark this page and check back often for the latest {thInfo.label} base layouts.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
