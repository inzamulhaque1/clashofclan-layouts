import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import BaseCard from "@/components/bases/BaseCard";
import { images } from "@/lib/images";
import {
  getFeaturedBases,
  getLatestBases,
  baseLayouts,
  TH_LEVELS,
  BH_LEVELS,
  getBaseCountByTH,
} from "@/lib/bases";

export const metadata = createMetadata({
  title: "Best Clash of Clans Base Layouts (2026) - War, Farming, Trophy | Game365Hub",
  description: `Browse ${baseLayouts.length}+ best Clash of Clans base layouts for TH7 to TH18. War bases, farming bases, trophy bases & CWL bases with direct copy links. Updated for 2026.`,
  path: "/clash-of-clans/bases",
  tags: ["Clash of Clans bases", "CoC base layouts", "war base", "farming base", "trophy base", "copy link", "2026"],
});

const featuredBases = getFeaturedBases();
const latestBases = getLatestBases(6);

export default function BasesIndexPage() {
  const warCount = baseLayouts.filter((b) => b.type === "war").length;
  const farmCount = baseLayouts.filter((b) => b.type === "farming").length;
  const trophyCount = baseLayouts.filter((b) => b.type === "trophy").length;

  return (
    <>
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

        <div className="relative container-custom pt-8 pb-12 md:pt-10 md:pb-16">
          <nav className="flex items-center gap-2 text-[11px] text-white/25 mb-8">
            <Link href="/" className="hover:text-white/50 transition-colors">Home</Link>
            <span className="text-white/15">/</span>
            <Link href="/clash-of-clans" className="hover:text-white/50 transition-colors">Clash of Clans</Link>
            <span className="text-white/15">/</span>
            <span className="text-white/50">Base Layouts</span>
          </nav>

          <div className="flex items-start gap-5 mb-8">
            <div className="hidden sm:flex w-14 h-14 rounded-xl overflow-hidden ring-2 ring-white/10 shrink-0 mt-1">
              <Image
                src={images.games.coc.logo}
                alt="Clash of Clans"
                width={56}
                height={56}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h1
                className="text-2xl md:text-4xl font-normal text-white tracking-wider leading-tight"
                style={{ fontFamily: "'Michroma', sans-serif" }}
              >
                BASE LAYOUTS
              </h1>
              <p className="text-white/35 text-sm mt-2 max-w-md">
                {baseLayouts.length} pro layouts with free copy links. Select your level to get started.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-full bg-red-500/15 text-red-400 border border-red-500/10">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {warCount} War
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/10">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {farmCount} Farming
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/10">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              {trophyCount} Trophy
            </span>
            <span className="px-3 py-1.5 text-[11px] font-bold rounded-full bg-white/5 text-white/30 border border-white/5">
              TH7 – TH18
            </span>
          </div>
        </div>
      </section>

      {/* ========== HOME VILLAGE — TH SELECTOR ========== */}
      <section className="relative -mt-1">
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-[#0a0a0f] to-transparent z-10 pointer-events-none" />

        <div className="container-custom py-12">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-extrabold text-[#1a1a2e]">Home Village</h2>
                <p className="text-[11px] text-muted">Town Hall 7 – 18</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-muted bg-gray-100 px-3 py-1.5 rounded-full">
              {TH_LEVELS.length} levels
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {TH_LEVELS.map((th) => {
              const count = getBaseCountByTH(th.level);
              const thImage = images.townHalls[th.level];

              return (
                <Link
                  key={th.level}
                  href={`/clash-of-clans/bases/th/${th.level}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: th.color }}
                  />
                  <div className="relative w-16 h-16 mx-auto mb-3">
                    <Image
                      src={thImage}
                      alt={th.label}
                      width={64}
                      height={64}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: th.color }}
                    >
                      {th.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-sm text-[#1a1a2e]">
                    {th.label}
                  </h3>
                  <p className="text-center text-[10px] mt-1" style={{ color: count > 0 ? th.color : "#999" }}>
                    {count > 0 ? `${count} ${count === 1 ? "layout" : "layouts"}` : "Coming soon"}
                  </p>
                  <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
      <section className="py-12 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-extrabold text-[#1a1a2e]">Builder Base</h2>
                <p className="text-[11px] text-muted">Builder Hall 2 – 10</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
              {BH_LEVELS.length} levels
            </span>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
            {BH_LEVELS.map((bh) => {
              const bhImage = images.builderHalls[bh.level];

              return (
                <Link
                  key={bh.level}
                  href={`/clash-of-clans/bases/bh/${bh.level}`}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-4 hover:border-gray-200 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="absolute top-0 left-4 right-4 h-[3px] rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ backgroundColor: bh.color }}
                  />
                  <div className="relative w-14 h-14 mx-auto mb-3">
                    <Image
                      src={bhImage}
                      alt={bh.label}
                      width={56}
                      height={56}
                      className="object-contain w-full h-full drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
                    />
                    <span
                      className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-extrabold text-white shadow-md ring-2 ring-white"
                      style={{ backgroundColor: bh.color }}
                    >
                      {bh.level}
                    </span>
                  </div>
                  <h3 className="text-center font-bold text-xs text-[#1a1a2e]">
                    {bh.label}
                  </h3>
                  <p className="text-center text-[10px] mt-1 text-gray-400">
                    Coming soon
                  </p>
                  <div className="flex justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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

      {/* ========== FEATURED BASES ========== */}
      {featuredBases.length > 0 && (
        <section className="py-12 border-t border-gray-100">
          <div className="container-custom">
            <div className="flex items-end justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary text-[11px] font-bold uppercase tracking-[0.2em]">Editor&apos;s Choice</span>
                </div>
                <h2 className="text-xl md:text-2xl font-extrabold text-[#1a1a2e]">Featured Bases</h2>
              </div>
              <span className="text-xs text-muted hidden sm:block">{featuredBases.length} picks</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {featuredBases.map((base) => (
                <BaseCard key={base.id} base={base} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========== LATEST BASES ========== */}
      <section className="py-12 bg-[#fafafa] border-t border-gray-100">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-green-600 text-[11px] font-bold uppercase tracking-[0.2em]">Recently Added</span>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-[#1a1a2e]">Latest Bases</h2>
            </div>
            <span className="text-[11px] text-muted hidden sm:block">{latestBases.length} new</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestBases.map((base) => (
              <BaseCard key={base.id} base={base} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
