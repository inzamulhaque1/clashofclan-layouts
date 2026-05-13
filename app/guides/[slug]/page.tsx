import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  guideArticles,
  getGuideBySlug,
  getAllGuideSlugs,
} from "@/lib/guide-articles";
import {
  createMetadata,
  createJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";

export async function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = getGuideBySlug(params.slug);
  if (!article) return {};
  return createMetadata({
    title: article.title,
    description: article.description,
    path: `/guides/${article.slug}`,
    type: "article",
    publishedTime: article.publishedDate,
    modifiedTime: article.updatedDate,
  });
}

export const dynamic = "force-static";

export default function GuidePage({ params }: { params: { slug: string } }) {
  const article = getGuideBySlug(params.slug);
  if (!article) notFound();

  const related = article.related
    .map((s) => guideArticles.find((g) => g.slug === s))
    .filter((g): g is NonNullable<typeof g> => g != null);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.publishedDate,
    dateModified: article.updatedDate,
    author: {
      "@type": "Organization",
      name: "Game365Hub",
      url: "https://game365hub.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Game365Hub",
      url: "https://game365hub.com",
      logo: {
        "@type": "ImageObject",
        url: "https://game365hub.com/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://game365hub.com/guides/${article.slug}`,
    },
  };

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: article.title, path: `/guides/${article.slug}` },
          ])
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={createJsonLd(articleJsonLd)}
      />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container-custom py-3">
          <nav className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-light">
              Home
            </Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-light">
              Guides
            </Link>
            <span>/</span>
            <span className="text-light font-semibold truncate max-w-xs">
              {article.title}
            </span>
          </nav>
        </div>
      </div>

      <article className="container-custom py-10">
        <div className="max-w-3xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-2 text-xs text-muted mb-3">
              <span>{article.publishedDate}</span>
              <span>•</span>
              <span>{article.readMinutes} min read</span>
              <span>•</span>
              <Link href="/guides" className="hover:text-light">
                Guides
              </Link>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-light leading-tight">
              {article.title}
            </h1>
            <p className="text-muted text-base mt-4 leading-relaxed">
              {article.description}
            </p>
          </header>

          <div className="space-y-10">
            {article.sections.map((section, i) => (
              <section key={i}>
                <h2 className="text-xl md:text-2xl font-extrabold text-light mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-4 text-sm md:text-base text-muted leading-relaxed">
                  {section.paragraphs.map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {related.length > 0 && (
            <section className="mt-16 pt-8 border-t border-gray-200">
              <h2 className="text-lg font-extrabold text-light mb-4">
                Related guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/guides/${r.slug}`}
                    className="block bg-white border border-gray-200 rounded-2xl p-4 hover:border-gray-300 transition-colors"
                  >
                    <p className="text-[11px] text-muted mb-1">
                      {r.readMinutes} min read
                    </p>
                    <p className="text-sm font-bold text-light leading-tight">
                      {r.title}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-sm text-muted leading-relaxed">
              See the latest codes for every game we cover on the{" "}
              <Link href="/codes" className="text-primary font-semibold hover:underline">
                all codes page
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
