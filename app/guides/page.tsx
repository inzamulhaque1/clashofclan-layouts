import Link from "next/link";
import type { Metadata } from "next";
import { createMetadata, createJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { guideArticles } from "@/lib/guide-articles";

export const metadata: Metadata = createMetadata({
  title: "Guides — Redemption Codes Explained",
  description:
    "Long-form guides on how game redemption codes work, why they expire, how to find them faster, and how to troubleshoot when they don't.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ])
        )}
      />

      <section className="bg-[#0a0a0f] text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="relative container-custom text-center">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">
            Guides
          </span>
          <h1
            className="text-3xl md:text-4xl font-normal mt-2 tracking-wide"
            style={{ fontFamily: "'Michroma', sans-serif" }}
          >
            Codes, Explained
          </h1>
          <p className="text-white/50 text-sm mt-3 max-w-xl mx-auto">
            Deep dives on how redemption codes actually work, why publishers
            issue them, and how to never miss one again.
          </p>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {guideArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/guides/${article.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:-translate-y-0.5 transition-all"
            >
              <div className="flex items-center gap-2 text-[11px] text-muted mb-2">
                <span>{article.publishedDate}</span>
                <span>•</span>
                <span>{article.readMinutes} min read</span>
              </div>
              <h2 className="text-lg font-extrabold text-light leading-tight mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-muted leading-relaxed">
                {article.excerpt}
              </p>
              <p className="text-xs font-semibold text-primary mt-4 inline-flex items-center gap-1">
                Read guide
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-lg font-extrabold text-light mb-2">
            Looking for a specific topic?
          </h3>
          <p className="text-sm text-muted max-w-md mx-auto">
            Have a code-related question that's not covered here? Email us at{" "}
            <a
              href="mailto:inzamul.dev@gmail.com"
              className="text-primary font-semibold hover:underline"
            >
              inzamul.dev@gmail.com
            </a>{" "}
            and we'll write it up.
          </p>
        </div>
      </section>
    </div>
  );
}
