"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "@/lib/blog";

const POSTS_PER_PAGE = 6;

export default function BlogPageClient({ posts }: { posts: BlogPost[] }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach((p) => {
      if (p.category) cats.add(p.category);
      cats.add(p.gameName);
    });
    return ["All", ...Array.from(cats)];
  }, [posts]);

  // Filter posts
  const filtered = useMemo(() => {
    let result = posts;
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.gameName.toLowerCase().includes(q)
      );
    }
    if (activeCategory !== "All") {
      result = result.filter(
        (p) => p.category === activeCategory || p.gameName === activeCategory
      );
    }
    return result;
  }, [posts, search, activeCategory]);

  // Pagination
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Reset page on filter change
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (val: string) => {
    setSearch(val);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-1 bg-primary rounded-full" />
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Game365Hub Blog
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-3">
            Gaming Guides & Articles
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Expert guides, top lists, strategies, and tips for the best mobile
            games in 2026. Updated weekly with fresh content.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {search && (
                <button
                  onClick={() => handleSearchChange("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Articles Grid */}
          <div className="flex-1 min-w-0">
            {/* Results Count */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-gray-500">
                {filtered.length === posts.length
                  ? `${posts.length} articles`
                  : `${filtered.length} of ${posts.length} articles`}
              </p>
              {(search || activeCategory !== "All") && (
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                    setCurrentPage(1);
                  }}
                  className="text-sm text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Clear filters
                </button>
              )}
            </div>

            {paginated.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <p className="text-gray-500 text-lg font-medium">No articles found</p>
                <p className="text-gray-400 text-sm mt-1">
                  Try a different search term or category
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {paginated.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center gap-2">
                        <span className="text-xs font-semibold px-2.5 py-1 bg-white/90 backdrop-blur-sm text-primary rounded-full">
                          {post.gameName}
                        </span>
                        {post.category && (
                          <span className="text-xs font-medium px-2 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full">
                            {post.category}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="p-5">
                      <h2 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-gray-500 line-clamp-2 mb-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <span className="text-primary font-semibold inline-flex items-center gap-1">
                          Read
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-10">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-lg text-sm font-semibold transition-all ${
                        page === currentPage
                          ? "bg-primary text-white shadow-md shadow-primary/30"
                          : "border border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg text-sm font-medium border border-gray-200 hover:border-primary hover:text-primary disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                </button>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <aside className="lg:w-[300px] shrink-0 space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                Categories
              </h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                  const count =
                    cat === "All"
                      ? posts.length
                      : posts.filter(
                          (p) => p.category === cat || p.gameName === cat
                        ).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => handleCategoryChange(cat)}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                        activeCategory === cat
                          ? "bg-primary text-white shadow-sm shadow-primary/30"
                          : "bg-gray-100 text-gray-600 hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {cat}{" "}
                      <span
                        className={`${
                          activeCategory === cat
                            ? "text-white/70"
                            : "text-gray-400"
                        }`}
                      >
                        ({count})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Popular Articles
              </h3>
              <div className="space-y-3">
                {posts.slice(0, 5).map((post, idx) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex gap-3 items-start"
                  >
                    <span className="shrink-0 w-7 h-7 rounded-lg bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {post.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Cloud */}
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mobile Games",
                  "Android",
                  "iOS",
                  "Free to Play",
                  "Strategy",
                  "Racing",
                  "Horror",
                  "Multiplayer",
                  "Offline",
                  "2026",
                  "Top Lists",
                  "Best Of",
                ].map((tag) => (
                  <span
                    key={tag}
                    onClick={() => handleSearchChange(tag.toLowerCase())}
                    className="px-2.5 py-1 bg-gray-50 border border-gray-200 rounded-lg text-xs text-gray-500 hover:border-primary hover:text-primary hover:bg-primary/5 cursor-pointer transition-all"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-5 text-white">
              <h3 className="font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-gray-400 mb-4">
                Get the latest gaming guides and tips delivered to your inbox.
              </p>
              <div className="space-y-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
