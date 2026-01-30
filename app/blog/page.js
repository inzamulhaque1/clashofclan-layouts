'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { getAllArticles, getAllCategories } from '@/data/blog-index';

function BlogCard({ article }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
      style={{ border: '1px solid var(--border)' }}
    >
      <div className="relative h-48 sm:h-52 overflow-hidden">
        {!imageError ? (
          <img
            src={article.image}
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold"
          style={{ background: article.categoryColor, color: '#000' }}
        >
          {article.category}
        </span>
        <span className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-medium bg-black/50 text-white">
          {article.readTime}
        </span>
      </div>
      <div className="p-5" style={{ background: 'var(--surface-100)' }}>
        <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
          {article.title}
        </h3>
        <p className="text-sm mb-4 line-clamp-2" style={{ color: 'var(--text-muted)' }}>
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs" style={{ color: 'var(--text-muted)' }}>
            {new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </span>
          <span className="flex items-center gap-1 text-xs font-semibold" style={{ color: '#8B5CF6' }}>
            Read Article
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedCard({ article }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{ border: '1px solid var(--border)' }}
    >
      <div className="grid md:grid-cols-2">
        <div className="relative h-64 md:h-full min-h-[250px] overflow-hidden">
          {!imageError ? (
            <img
              src={article.image}
              alt={article.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-700" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:hidden" />
        </div>
        <div className="p-6 md:p-8 flex flex-col justify-center" style={{ background: 'var(--surface-100)' }}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: article.categoryColor, color: '#000' }}
            >
              {article.category}
            </span>
            <span className="text-xs font-medium px-2 py-1 rounded" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
              Featured
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-purple-500 transition-colors" style={{ color: 'var(--text-primary)' }}>
            {article.title}
          </h2>
          <p className="mb-4 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3 text-sm" style={{ color: 'var(--text-muted)' }}>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
            <span className="flex items-center gap-1 font-semibold" style={{ color: '#8B5CF6' }}>
              Read
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function CategoryDropdown({ categories, selected, onSelect, totalCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedCat = selected === 'All'
    ? { name: 'All Categories', color: '#8B5CF6', count: totalCount }
    : categories.find(c => c.name === selected);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
        style={{
          background: 'var(--surface-100)',
          border: '1px solid var(--border)',
          color: 'var(--text-primary)'
        }}
      >
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ background: selectedCat?.color || '#8B5CF6' }}
        />
        <span>{selectedCat?.name || 'All Categories'}</span>
        <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: 'var(--surface-200)', color: 'var(--text-muted)' }}>
          {selectedCat?.count || totalCount}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-56 rounded-xl overflow-hidden shadow-xl z-50"
          style={{
            background: 'var(--surface-100)',
            border: '1px solid var(--border)'
          }}
        >
          <div className="py-1 max-h-64 overflow-y-auto">
            <button
              onClick={() => { onSelect('All'); setIsOpen(false); }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors hover:bg-purple-500/10`}
              style={{
                background: selected === 'All' ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                color: 'var(--text-primary)'
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#8B5CF6' }} />
              <span className="flex-1">All Categories</span>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{totalCount}</span>
              {selected === 'All' && (
                <svg className="w-4 h-4" style={{ color: '#8B5CF6' }} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => { onSelect(cat.name); setIsOpen(false); }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors hover:bg-purple-500/10"
                style={{
                  background: selected === cat.name ? 'rgba(139, 92, 246, 0.1)' : 'transparent',
                  color: 'var(--text-primary)'
                }}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: cat.color }} />
                <span className="flex-1">{cat.name}</span>
                <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{cat.count}</span>
                {selected === cat.name && (
                  <svg className="w-4 h-4" style={{ color: '#8B5CF6' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BlogPage() {
  const allArticles = getAllArticles();
  const categories = getAllCategories();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredArticle = allArticles[0];
  const filteredArticles = selectedCategory === 'All'
    ? allArticles.slice(1)
    : allArticles.filter(a => a.category === selectedCategory);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
      {/* Hero */}
      <section className="pt-10 sm:pt-14 pb-8" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2" />
              </svg>
              {allArticles.length} Expert Articles
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Gaming <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Level up your gameplay with expert strategies, comprehensive guides, and the latest gaming trends.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl" style={{ background: 'var(--surface-100)', border: '1px solid var(--border)' }}>
            <div className="flex items-center gap-3">
              <CategoryDropdown
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
                totalCount={allArticles.length}
              />
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors hover:bg-red-500/10"
                  style={{ color: '#EF4444' }}
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Clear
                </button>
              )}
            </div>

            {/* Quick Category Pills - Desktop Only */}
            <div className="hidden md:flex items-center gap-2 overflow-x-auto">
              {categories.slice(0, 4).map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap"
                  style={{
                    background: selectedCategory === cat.name ? cat.color : 'var(--surface-200)',
                    color: selectedCategory === cat.name ? '#000' : 'var(--text-muted)'
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: selectedCategory === cat.name ? '#000' : cat.color }} />
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {selectedCategory === 'All' && (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
          <FeaturedCard article={featuredArticle} />
        </section>
      )}

      {/* Articles Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold" style={{ color: 'var(--text-primary)' }}>
              {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
            </h2>
            <span className="px-2.5 py-1 rounded-lg text-xs font-semibold" style={{ background: 'var(--surface-100)', color: 'var(--text-muted)' }}>
              {filteredArticles.length}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            Latest first
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-5 rounded-2xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(99, 102, 241, 0.1))' }}>
              <svg className="w-10 h-10" style={{ color: '#8B5CF6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>No articles yet</h3>
            <p className="mb-4" style={{ color: 'var(--text-muted)' }}>We're working on amazing content for this category!</p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-5 py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ background: '#8B5CF6', color: '#fff' }}
            >
              Browse All Articles
            </button>
          </div>
        )}
      </section>

      {/* Newsletter CTA */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div
          className="relative p-8 sm:p-12 rounded-3xl overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)'
          }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-white">
              Level Up Your Gaming
            </h3>
            <p className="mb-8 max-w-lg mx-auto text-white/80">
              Explore our comprehensive guides and strategies. New content added regularly!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/clash-of-clans"
                className="px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105"
                style={{ background: '#fff', color: '#8B5CF6' }}
              >
                Explore Games
              </Link>
              <Link
                href="/clash-of-clans/guides"
                className="px-6 py-3 rounded-xl font-semibold transition-colors"
                style={{ background: 'rgba(255, 255, 255, 0.2)', color: '#fff' }}
              >
                Strategy Guides
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-10" style={{ background: 'var(--surface-50)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-2 mb-5">
            <svg className="w-5 h-5" style={{ color: '#8B5CF6' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            <h3 className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>
              Popular Topics
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'Clash of Clans', color: '#F59E0B' },
              { name: 'Free Fire', color: '#EF4444' },
              { name: 'PUBG Mobile', color: '#F97316' },
              { name: 'Brawl Stars', color: '#10B981' },
              { name: 'Genshin Impact', color: '#3B82F6' },
              { name: 'Best Games 2025', color: '#8B5CF6' }
            ].map((topic) => (
              <span
                key={topic.name}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm cursor-default transition-all hover:scale-105"
                style={{ background: 'var(--surface-100)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: topic.color }} />
                {topic.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
