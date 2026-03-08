import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { blogPosts, getBlogPost, getAllSlugs } from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    image: post.image,
    type: "article",
    publishedTime: post.date,
    tags: [post.gameName, post.category || "", "mobile gaming", "2026"].filter(Boolean),
  });
}

/* ── Sidebar ── */
function Sidebar({ currentSlug }: { currentSlug: string }) {
  const latestPosts = blogPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 5);

  const categories = Array.from(
    new Map(
      blogPosts.map((p) => [
        p.gameName,
        { name: p.gameName, count: blogPosts.filter((x) => x.gameName === p.gameName).length },
      ])
    ).values()
  );

  return (
    <aside className="space-y-8">
      {/* Latest Articles */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Latest Articles
        </h3>
        {latestPosts.length === 0 ? (
          <p className="text-sm text-muted">More articles coming soon!</p>
        ) : (
          <div className="space-y-4">
            {latestPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex gap-3 items-start"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#1a1a2e] leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <span className="text-xs text-muted mt-1 block">
                    {p.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Categories */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          Categories
        </h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <span className="text-sm text-[#1a1a2e] font-medium">
                {cat.name}
              </span>
              <span className="text-xs text-muted bg-gray-100 px-2 py-0.5 rounded-full min-w-[24px] text-center">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Share Card */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 rounded-2xl p-5">
        <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-2">
          Enjoy this article?
        </h3>
        <p className="text-xs text-muted mb-3">
          Share it with your friends and fellow gamers!
        </p>
        <div className="flex gap-2">
          <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
          </span>
          <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
          </span>
          <span className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all cursor-pointer">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/></svg>
          </span>
        </div>
      </div>
    </aside>
  );
}

/* ── Table Renderer ── */
function renderTable(lines: string[]) {
  if (lines.length < 2) return null;
  const parseRow = (row: string) =>
    row.split("|").filter((c) => c.trim()).map((c) => c.trim());

  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow);

  return (
    <div className="overflow-x-auto my-6 rounded-xl border border-gray-100">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-50">
            {headers.map((h, i) => (
              <th key={i} className="text-left font-semibold text-[#1a1a2e] px-4 py-3 border-b border-gray-100">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted border-b border-gray-50">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ── Inline bold renderer ── */
function renderInlineText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  if (parts.length === 1) return text;
  return parts.map((part, j) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={j} className="text-[#1a1a2e] font-semibold">{part.slice(2, -2)}</strong>
    ) : (
      <span key={j}>{part}</span>
    )
  );
}

/* ── Article Content ── */
function ArticleContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (!trimmed) { i++; continue; }

    // Separator
    if (trimmed === "---") {
      elements.push(
        <hr key={i} className="my-10 border-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      );
      i++; continue;
    }

    // Table block
    if (trimmed.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }
      elements.push(<div key={`table-${i}`}>{renderTable(tableLines)}</div>);
      continue;
    }

    // Markdown image
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      elements.push(
        <figure key={i} className="my-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-sm">
            <Image
              src={imgMatch[2]}
              alt={imgMatch[1]}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 700px"
            />
          </div>
          {imgMatch[1] && (
            <figcaption className="text-xs text-center text-muted mt-2 italic">
              {imgMatch[1]}
            </figcaption>
          )}
        </figure>
      );
      i++; continue;
    }

    // H2
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#1a1a2e] mt-12 mb-4 pb-2 border-b border-gray-100">
          {trimmed.slice(3)}
        </h2>
      );
      i++; continue;
    }

    // H3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-bold text-[#1a1a2e] mt-8 mb-3 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
          {trimmed.slice(4)}
        </h3>
      );
      i++; continue;
    }

    // Bold-only line
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      elements.push(
        <p key={i} className="font-bold text-[#1a1a2e] mt-5 mb-2 text-[15px]">
          {trimmed.slice(2, -2)}
        </p>
      );
      i++; continue;
    }

    // Unordered list block
    if (trimmed.startsWith("- ")) {
      const items: { key: number; text: string }[] = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push({ key: i, text: lines[i].trim().slice(2) });
        i++;
      }
      elements.push(
        <ul key={`ul-${items[0].key}`} className="my-4 space-y-2">
          {items.map((item) => (
            <li key={item.key} className="flex items-start gap-2.5 text-[15px] text-muted leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0 mt-2" />
              <span>{renderInlineText(item.text)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list block
    if (/^\d+\./.test(trimmed)) {
      const items: { key: number; text: string; num: number }[] = [];
      let num = 1;
      while (i < lines.length && /^\d+\./.test(lines[i].trim())) {
        items.push({ key: i, text: lines[i].trim().replace(/^\d+\.\s*/, ""), num: num++ });
        i++;
      }
      elements.push(
        <ol key={`ol-${items[0].key}`} className="my-4 space-y-2">
          {items.map((item) => (
            <li key={item.key} className="flex items-start gap-3 text-[15px] text-muted leading-relaxed">
              <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {item.num}
              </span>
              <span>{renderInlineText(item.text)}</span>
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={i} className="text-[15px] text-muted leading-[1.8] mb-4">
        {renderInlineText(trimmed)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

/* ── Main Page ── */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const wordCount = post.content.split(/\s+/).length;
  const siteUrl = "https://game365hub.com";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    url: articleUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": articleUrl },
    author: { "@type": "Organization", name: "Game365Hub", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Game365Hub",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    articleSection: post.gameName,
    keywords: [post.gameName, post.category, "mobile gaming", "offline games", "2026"].filter(Boolean).join(", "),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: articleUrl },
    ],
  };

  // ItemList schema for listicle articles
  const h3Matches = post.content.match(/^### \d+\.\s+.+$/gm);
  const itemListSchema = h3Matches && h3Matches.length > 3 ? {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: post.title,
    numberOfItems: h3Matches.length,
    itemListElement: h3Matches.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: h.replace(/^###\s+\d+\.\s+/, ""),
    })),
  } : null;

  return (
    <>
      {/* JSON-LD: Article */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {/* JSON-LD: Breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* JSON-LD: ItemList for listicles */}
      {itemListSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      )}

      <div className="bg-gray-50/50 min-h-screen">
        {/* Back button bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-primary transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            Back to Blog
          </Link>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Featured Image */}
                <div className="relative w-full aspect-[2.2/1] md:aspect-[2.4/1]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 1000px"
                  />
                </div>

                {/* Header */}
                <div className="px-5 md:px-8 pt-6">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {post.gameName}
                    </span>
                    {post.category && (
                      <span className="text-xs font-medium px-3 py-1 bg-gray-100 text-muted rounded-full">
                        {post.category}
                      </span>
                    )}
                    <span className="text-xs text-muted flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {post.readTime}
                    </span>
                    <time dateTime={post.date} className="text-xs text-muted flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {post.date}
                    </time>
                  </div>

                  <h1 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-[#1a1a2e] leading-tight mb-3">
                    {post.title}
                  </h1>

                  <p className="text-muted text-[15px] leading-relaxed mb-5 border-b border-gray-100 pb-5">
                    {post.description}
                  </p>
                </div>

                {/* Article Body */}
                <div className="px-5 md:px-8 pb-10 pt-2">
                  <ArticleContent content={post.content} />
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="w-full lg:w-[300px] flex-shrink-0">
              <div className="lg:sticky lg:top-20">
                <Sidebar currentSlug={params.slug} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
