import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { cocGuides, getGuide, getAllGuideSlugs } from "@/lib/guides";

export function generateStaticParams() {
  return getAllGuideSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return createMetadata({
    title: guide.title,
    description: guide.description,
    path: `/clash-of-clans/guides/${guide.slug}`,
    image: guide.image,
    type: "article",
    publishedTime: guide.date,
    tags: ["Clash of Clans", guide.category, "CoC guide", "mobile gaming", "2026"].filter(Boolean),
  });
}

/* ── Sidebar ── */
function Sidebar({ currentSlug }: { currentSlug: string }) {
  const otherGuides = cocGuides.filter((g) => g.slug !== currentSlug).slice(0, 5);

  return (
    <aside className="space-y-8">
      {/* Other Guides */}
      <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
        <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-4 flex items-center gap-2">
          <span className="w-1 h-5 bg-primary rounded-full" />
          More CoC Guides
        </h3>
        {otherGuides.length === 0 ? (
          <p className="text-sm text-muted">More guides coming soon!</p>
        ) : (
          <div className="space-y-4">
            {otherGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/clash-of-clans/guides/${g.slug}`}
                className="group flex gap-3 items-start"
              >
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={g.image}
                    alt={g.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-[#1a1a2e] leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {g.title}
                  </h4>
                  <span className="text-xs text-muted mt-1 block">
                    {g.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Base Layouts CTA */}
      <div className="bg-amber-50 border border-amber-100 rounded-2xl p-5">
        <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-2">
          Need a Base Layout?
        </h3>
        <p className="text-xs text-muted mb-3">
          Browse 118+ tested CoC base layouts with free copy links for TH7-TH18.
        </p>
        <Link
          href="/clash-of-clans/bases"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-900 transition-colors"
        >
          Browse Bases
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
      </div>

      {/* Share Card */}
      <ShareCard slug={currentSlug} />
    </aside>
  );
}

/* ── Share Card ── */
function ShareCard({ slug }: { slug: string }) {
  const guide = getGuide(slug);
  const url = encodeURIComponent(`https://game365hub.com/clash-of-clans/guides/${slug}`);
  const text = encodeURIComponent(guide?.title || "");

  return (
    <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 rounded-2xl p-5">
      <h3 className="font-bold text-[15px] text-[#1a1a2e] mb-2">
        Enjoy this guide?
      </h3>
      <p className="text-xs text-muted mb-3">
        Share it with your clan and fellow Clashers!
      </p>
      <div className="flex gap-2">
        <a href={`https://x.com/intent/tweet?url=${url}&text=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X (Twitter)" className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616v.062a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417A9.868 9.868 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
        </a>
        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
        </a>
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-muted hover:text-primary hover:shadow-sm transition-all">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"/></svg>
        </a>
      </div>
    </div>
  );
}

/* ── Table Renderer ── */
function renderTable(lines: string[]) {
  if (lines.length < 2) return null;
  const parseRow = (row: string) =>
    row.split("|").filter((c) => c.trim()).map((c) => c.trim());

  const headers = parseRow(lines[0]);
  const rows = lines.slice(2).map(parseRow);

  // Compact card style for small 2-column army/spell tables (≤8 rows)
  const isCompact = headers.length === 2 && rows.length <= 8;

  if (isCompact) {
    return (
      <div className="my-5 rounded-xl border border-gray-200 overflow-hidden bg-white shadow-sm">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a2e]">
          <span className="text-[12px] font-bold text-white tracking-wide">{headers[0]}</span>
          <span className="ml-auto text-[12px] font-bold text-white/70">{headers[1]}</span>
        </div>
        <div className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <div key={i} className="flex items-center justify-between px-4 py-2.5 hover:bg-amber-50/40 transition-colors">
              <span className="text-[13px] font-medium text-[#1a1a2e]">{row[0]}</span>
              <span className="text-[13px] font-bold text-primary bg-primary/8 px-2.5 py-0.5 rounded-full min-w-[40px] text-center">{row[1]}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Full table style for larger/multi-column tables
  return (
    <div className="overflow-x-auto my-7 rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-[#1a1a2e]">
            {headers.map((h, i) => (
              <th key={i} className="text-left font-semibold text-white px-4 py-3.5 text-[13px]">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50/70"} hover:bg-amber-50/50 transition-colors`}>
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-[#444] border-b border-gray-100 text-[13px]">
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

/* ── Inline bold & link renderer ── */
function renderInlineText(text: string) {
  // Handle markdown links: [text](url)
  const parts = text.split(/(\[([^\]]+)\]\(([^)]+)\)|\*\*[^*]+\*\*)/g);
  if (parts.length === 1) return text;

  const elements: React.ReactNode[] = [];
  let idx = 0;

  // Use a regex to find all markdown links and bold text
  const regex = /(\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*)/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before this match
    if (match.index > lastIndex) {
      elements.push(<span key={idx++}>{text.slice(lastIndex, match.index)}</span>);
    }

    if (match[2] && match[3]) {
      // Markdown link
      elements.push(
        <Link key={idx++} href={match[3]} className="text-primary hover:underline font-medium">
          {match[2]}
        </Link>
      );
    } else if (match[4]) {
      // Bold text
      elements.push(
        <strong key={idx++} className="text-[#1a1a2e] font-semibold">{match[4]}</strong>
      );
    }

    lastIndex = match.index + match[0].length;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    elements.push(<span key={idx++}>{text.slice(lastIndex)}</span>);
  }

  return elements.length > 0 ? elements : text;
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
      const imgUrl = imgMatch[2];
      const imgAlt = imgMatch[1];
      // Detect if it's a small icon/troop PNG vs a wide banner/screenshot
      const isIcon = imgUrl.includes("/troop/") || imgUrl.includes("/hero/") || imgUrl.includes("/other/town-hall");

      if (isIcon) {
        // Compact icon card — centered troop/hero image
        elements.push(
          <figure key={i} className="my-6 flex justify-center">
            <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#252540] rounded-2xl p-5 shadow-md inline-flex flex-col items-center">
              <Image
                src={imgUrl}
                alt={imgAlt}
                width={120}
                height={120}
                className="w-[120px] h-[120px] object-contain drop-shadow-lg"
                unoptimized
              />
              {imgAlt && (
                <span className="text-[11px] text-white/60 mt-3 font-medium text-center">{imgAlt}</span>
              )}
            </div>
          </figure>
        );
      } else {
        // Full-width image for banners/screenshots
        elements.push(
          <figure key={i} className="my-8">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-md bg-gray-100">
              <Image
                src={imgUrl}
                alt={imgAlt}
                width={800}
                height={450}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
                unoptimized
              />
            </div>
            {imgAlt && (
              <figcaption className="text-[11px] text-center text-muted mt-2.5">
                {imgAlt}
              </figcaption>
            )}
          </figure>
        );
      }
      i++; continue;
    }

    // H2
    if (trimmed.startsWith("## ")) {
      const heading = trimmed.slice(3);
      const id = heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      // Detect TH-level headings (e.g. "TH7 — Best Armies")
      const thMatch = heading.match(/^TH(\d+)/);

      if (thMatch) {
        elements.push(
          <h2 key={i} id={id} className="mt-14 mb-5 pb-3 border-b-2 border-amber-500/20 scroll-mt-20 flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-500 text-white text-sm font-extrabold shadow-md shrink-0">
              TH{thMatch[1]}
            </span>
            <span className="text-[22px] sm:text-2xl font-extrabold text-[#1a1a2e]">{heading}</span>
          </h2>
        );
      } else {
        elements.push(
          <h2 key={i} id={id} className="text-[22px] sm:text-2xl font-extrabold text-[#1a1a2e] mt-14 mb-5 pb-3 border-b-2 border-primary/15 scroll-mt-20">
            {heading}
          </h2>
        );
      }
      i++; continue;
    }

    // H3
    if (trimmed.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-lg sm:text-xl font-bold text-[#1a1a2e] mt-10 mb-4 flex items-center gap-2.5">
          <span className="w-1 h-6 rounded-full bg-primary flex-shrink-0" />
          {trimmed.slice(4)}
        </h3>
      );
      i++; continue;
    }

    // Bold-only line (sub-heading style)
    if (trimmed.startsWith("**") && trimmed.endsWith("**")) {
      const boldText = trimmed.slice(2, -2);
      // Detect callout-style lines (CC:, How to use:, etc.)
      if (boldText.startsWith("CC:") || boldText.startsWith("How to use:")) {
        const [label, ...rest] = boldText.split(":");
        elements.push(
          <div key={i} className="my-4 flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 bg-amber-200/60 px-2 py-0.5 rounded-md shrink-0 mt-0.5">{label}</span>
            <span className="text-[13px] text-[#444] leading-relaxed">{rest.join(":").trim()}</span>
          </div>
        );
      } else {
        elements.push(
          <p key={i} className="font-bold text-[#1a1a2e] mt-6 mb-2.5 text-[15px] sm:text-base">
            {boldText}
          </p>
        );
      }
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
        <ul key={`ul-${items[0].key}`} className="my-5 space-y-2.5 pl-1">
          {items.map((item) => (
            <li key={item.key} className="flex items-start gap-3 text-[15px] text-[#444] leading-[1.8]">
              <span className="w-2 h-2 rounded-full bg-primary/50 flex-shrink-0 mt-[9px]" />
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
        <ol key={`ol-${items[0].key}`} className="my-5 space-y-3 pl-1">
          {items.map((item) => (
            <li key={item.key} className="flex items-start gap-3 text-[15px] text-[#444] leading-[1.8]">
              <span className="w-7 h-7 rounded-full bg-primary/10 text-primary text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
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
      <p key={i} className="text-[15px] sm:text-base text-[#444] leading-[1.85] mb-5">
        {renderInlineText(trimmed)}
      </p>
    );
    i++;
  }

  return <>{elements}</>;
}

/* ── Main Page ── */
export default function GuideDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();

  const wordCount = guide.content.split(/\s+/).length;
  const siteUrl = "https://game365hub.com";
  const guideUrl = `${siteUrl}/clash-of-clans/guides/${guide.slug}`;

  // Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    image: guide.image,
    datePublished: guide.date,
    dateModified: guide.date,
    wordCount,
    url: guideUrl,
    mainEntityOfPage: { "@type": "WebPage", "@id": guideUrl },
    author: { "@type": "Organization", name: "Game365Hub", url: siteUrl },
    publisher: {
      "@type": "Organization",
      name: "Game365Hub",
      url: siteUrl,
      logo: { "@type": "ImageObject", url: `${siteUrl}/logo.png` },
    },
    articleSection: "Clash of Clans",
    keywords: ["Clash of Clans", guide.category, "CoC guide", "mobile gaming", "2026"].filter(Boolean).join(", "),
  };

  // Breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Clash of Clans", item: `${siteUrl}/clash-of-clans` },
      { "@type": "ListItem", position: 3, name: "Guides", item: `${siteUrl}/clash-of-clans/guides` },
      { "@type": "ListItem", position: 4, name: guide.title, item: guideUrl },
    ],
  };

  // FAQ schema for SEO (extract Q&A pairs from FAQ section)
  const faqPairs: { q: string; a: string }[] = [];
  const contentLines = guide.content.split("\n");
  let inFaq = false;
  for (let fi = 0; fi < contentLines.length; fi++) {
    const line = contentLines[fi].trim();
    if (line === "## Frequently Asked Questions") inFaq = true;
    if (inFaq && line.startsWith("**") && line.endsWith("**")) {
      const question = line.slice(2, -2);
      // Collect answer lines until next bold or section
      const answerLines: string[] = [];
      for (let aj = fi + 1; aj < contentLines.length; aj++) {
        const aLine = contentLines[aj].trim();
        if (!aLine) continue;
        if (aLine.startsWith("**") || aLine.startsWith("##") || aLine === "---") break;
        answerLines.push(aLine);
      }
      if (answerLines.length > 0) {
        faqPairs.push({ q: question, a: answerLines.join(" ") });
      }
    }
  }

  const faqSchema = faqPairs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqPairs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  } : null;

  // Extract H2 headings for Table of Contents
  const h2Headings = guide.content.match(/^## .+$/gm)?.map((h) => {
    const title = h.slice(3);
    const id = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    return { title, id };
  }) || [];

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      <div className="bg-gray-50/50 min-h-screen">
        {/* Back button bar */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-4">
          <div className="flex items-center gap-2 text-[12px] text-muted">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-300">/</span>
            <Link href="/clash-of-clans" className="hover:text-primary transition-colors">Clash of Clans</Link>
            <span className="text-gray-300">/</span>
            <Link href="/clash-of-clans/guides" className="hover:text-primary transition-colors">Guides</Link>
            <span className="text-gray-300">/</span>
            <span className="text-[#1a1a2e] font-medium truncate max-w-[200px]">{guide.title.split("—")[0].trim()}</span>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main Content */}
            <article className="flex-1 min-w-0">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Featured Image */}
                {(() => {
                  const isBanner = guide.image.match(/\.(jpg|jpeg|webp)(\?|$)/i);
                  return isBanner ? (
                    <div className="relative w-full h-[280px] sm:h-[350px]">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, 1000px"
                        unoptimized
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>
                  ) : (
                    <div className="relative w-full bg-[#1a1a2e] flex items-center justify-center min-h-[200px] max-h-[350px]">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        width={600}
                        height={400}
                        className="h-auto max-h-[350px] w-auto object-contain p-6"
                        priority
                        sizes="(max-width: 768px) 100vw, 600px"
                        unoptimized
                      />
                    </div>
                  );
                })()}

                {/* Header */}
                <div className="px-5 md:px-8 pt-6">
                  <div className="flex flex-wrap items-center gap-2.5 mb-4">
                    <span className="text-[11px] font-bold px-3 py-1.5 bg-primary/10 text-primary rounded-full uppercase tracking-wide">
                      Clash of Clans
                    </span>
                    <span className="text-[11px] font-semibold px-3 py-1.5 bg-amber-50 text-amber-700 rounded-full border border-amber-100">
                      {guide.category} Guide
                    </span>
                    <span className="text-[11px] text-muted flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      {guide.readTime}
                    </span>
                    <span className="text-[11px] text-muted">
                      {wordCount.toLocaleString()} words
                    </span>
                    <time dateTime={guide.date} className="text-[11px] text-muted flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                      {new Date(guide.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                    </time>
                  </div>

                  <h1 className="text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#1a1a2e] leading-[1.2] mb-4">
                    {guide.title}
                  </h1>

                  <p className="text-[#555] text-[15px] sm:text-base leading-relaxed mb-6 pb-6 border-b border-gray-100">
                    {guide.description}
                  </p>
                </div>

                {/* Table of Contents */}
                {h2Headings.length > 2 && (
                  <div className="mx-5 md:mx-8 mb-6 bg-gray-50 rounded-xl border border-gray-100 p-5">
                    <h2 className="text-sm font-bold text-[#1a1a2e] mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                      Table of Contents
                    </h2>
                    <nav>
                      <ol className="space-y-1.5">
                        {h2Headings.map((heading, idx) => (
                          <li key={idx}>
                            <a
                              href={`#${heading.id}`}
                              className="flex items-center gap-2.5 text-[13px] text-[#555] hover:text-primary transition-colors py-1"
                            >
                              <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center flex-shrink-0">
                                {idx + 1}
                              </span>
                              {heading.title}
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>
                )}

                {/* Article Body */}
                <div className="px-5 md:px-8 pb-12 pt-2">
                  <ArticleContent content={guide.content} />
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <div className="w-full lg:w-[320px] flex-shrink-0">
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
