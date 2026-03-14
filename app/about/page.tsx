import { createMetadata, createJsonLd } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";

export const metadata = createMetadata({
  title: `About - ${SITE_NAME}`,
  description: `Learn about ${SITE_NAME}, your ultimate mobile gaming resource hub with expert guides, strategies, and tier lists for top mobile games.`,
  path: "/about",
});

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${SITE_NAME}`,
  url: "https://game365hub.com/about",
  mainEntity: {
    "@type": "Organization",
    name: SITE_NAME,
    url: "https://game365hub.com",
    logo: "https://game365hub.com/logo.png",
    description: "Your ultimate mobile gaming resource hub with expert guides, strategies, and tier lists for top mobile games.",
    email: "inzamul.dev@gmail.com",
    foundingDate: "2026",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://game365hub.com" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://game365hub.com/about" },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={createJsonLd(aboutJsonLd)} />
    <div className="container-custom py-10">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          About <span className="text-primary">{SITE_NAME}</span>
        </h1>
        <p className="text-muted text-sm mb-10">
          Your go-to mobile gaming resource hub since 2026
        </p>

        {/* Intro */}
        <div className="bg-[#1B1C3C] text-white rounded-2xl p-6 mb-10">
          <p className="text-sm text-gray-300 leading-relaxed">
            {SITE_NAME} is a free mobile gaming resource hub built for players
            who want to get better. We provide expert-written guides, winning
            strategies, and regularly updated tier lists for Clash of Clans,
            Brawl Stars, Clash Royale, Free Fire, and more games coming soon.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-light mb-3 flex items-center gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white text-sm font-bold flex items-center justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </span>
            Our Mission
          </h2>
          <p className="text-muted text-sm leading-relaxed pl-11">
            We believe every player deserves access to high-quality gaming
            resources — for free. Our mission is to help mobile gamers of all
            skill levels improve their gameplay, understand game mechanics
            deeply, and get the most out of their gaming experience. Whether
            you are a beginner learning the basics or a competitive player
            pushing top ranks, we have content for you.
          </p>
        </section>

        {/* What We Offer */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-light mb-4">What We Offer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-bold text-light text-sm mb-1">In-Depth Guides</h3>
              <p className="text-muted text-xs leading-relaxed">
                Comprehensive walkthroughs and strategy guides written by
                experienced players. No filler — just actionable advice.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="font-bold text-light text-sm mb-1">Updated Tier Lists</h3>
              <p className="text-muted text-xs leading-relaxed">
                Stay ahead of the meta with tier lists updated after every
                balance change and major game update.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-light text-sm mb-1">Proven Strategies</h3>
              <p className="text-muted text-xs leading-relaxed">
                Battle-tested strategies from top players to help you climb
                ranks, win more matches, and progress faster.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-light text-sm mb-1">Multi-Game Coverage</h3>
              <p className="text-muted text-xs leading-relaxed">
                One hub for all your favorite mobile games. Clash of Clans,
                Brawl Stars, Clash Royale, Free Fire, and more coming soon.
              </p>
            </div>
          </div>
        </section>

        {/* Games We Cover */}
        <section className="mb-10">
          <h2 className="text-xl font-bold text-light mb-4">Games We Cover</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Clash of Clans",
              "Brawl Stars",
              "Clash Royale",
              "Free Fire",
              "PUBG Mobile (Coming Soon)",
            ].map((game) => (
              <span
                key={game}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-light font-medium"
              >
                {game}
              </span>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: "5+", label: "Games" },
              { value: "50+", label: "Guides" },
              { value: "Daily", label: "Updates" },
              { value: "100%", label: "Free" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="text-center py-5 border border-gray-200 rounded-xl"
              >
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <h2 className="text-sm font-bold text-amber-800 mb-2">Disclaimer</h2>
            <p className="text-sm text-amber-700 leading-relaxed">
              {SITE_NAME} is an independent fan-made resource site. We are not
              affiliated with, endorsed by, or connected to Supercell, Garena,
              Krafton, or any other game developer or publisher. All game names,
              logos, characters, and images are trademarks of their respective
              owners.
            </p>
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
