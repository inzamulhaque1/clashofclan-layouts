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
  });
}

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article className="container-custom py-12">
      <div className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted mb-6">
          <Link href="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary">
            Blog
          </Link>
          <span>/</span>
          <span className="text-light truncate">{post.title}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
              {post.gameName}
            </span>
            <span className="text-xs text-muted">{post.readTime}</span>
            <span className="text-xs text-muted">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {post.title}
          </h1>
          <p className="text-muted mt-3 text-lg">{post.description}</p>
        </div>

        {/* Featured Image */}
        <div className="relative h-56 md:h-72 rounded-2xl overflow-hidden mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none prose-headings:text-light prose-p:text-muted prose-li:text-muted prose-strong:text-light prose-a:text-primary">
          {post.content.split("\n").map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("## "))
              return (
                <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
                  {trimmed.slice(3)}
                </h2>
              );
            if (trimmed.startsWith("### "))
              return (
                <h3 key={i} className="text-xl font-bold mt-8 mb-3">
                  {trimmed.slice(4)}
                </h3>
              );
            if (trimmed.startsWith("**") && trimmed.endsWith("**"))
              return (
                <p key={i} className="font-bold text-light mt-4 mb-2">
                  {trimmed.slice(2, -2)}
                </p>
              );
            if (trimmed.startsWith("- "))
              return (
                <li key={i} className="text-muted ml-4">
                  {trimmed.slice(2)}
                </li>
              );
            if (/^\d+\./.test(trimmed))
              return (
                <li key={i} className="text-muted ml-4 list-decimal">
                  {trimmed.replace(/^\d+\.\s*/, "")}
                </li>
              );
            if (trimmed.startsWith("|"))
              return (
                <p key={i} className="text-sm text-muted font-mono">
                  {trimmed}
                </p>
              );

            return (
              <p key={i} className="text-muted leading-relaxed mb-3">
                {trimmed}
              </p>
            );
          })}
        </div>

        {/* Back to blog */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/blog"
            className="text-primary font-semibold text-sm hover:underline"
          >
            &larr; Back to all articles
          </Link>
        </div>
      </div>
    </article>
  );
}
