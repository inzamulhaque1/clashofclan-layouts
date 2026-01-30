// Blog Articles Master Index - Combines all articles

import { BLOG_ARTICLES } from './blog-articles';
import { BLOG_ARTICLES_PART2 } from './blog-articles-2';
import { BLOG_ARTICLES_PART3 } from './blog-articles-3';

// Combine all articles
export const ALL_ARTICLES = [
  ...BLOG_ARTICLES,
  ...BLOG_ARTICLES_PART2,
  ...BLOG_ARTICLES_PART3
];

// Get all articles sorted by date (newest first)
export function getAllArticles() {
  return ALL_ARTICLES.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Get article by slug
export function getArticleBySlug(slug) {
  return ALL_ARTICLES.find(article => article.slug === slug);
}

// Get related articles (same category or random)
export function getRelatedArticles(currentSlug, limit = 3) {
  const current = getArticleBySlug(currentSlug);
  if (!current) return ALL_ARTICLES.slice(0, limit);

  // First try same category
  const sameCategory = ALL_ARTICLES.filter(
    a => a.slug !== currentSlug && a.category === current.category
  );

  // Then add others if needed
  const others = ALL_ARTICLES.filter(
    a => a.slug !== currentSlug && a.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
}

// Get articles by category
export function getArticlesByCategory(category) {
  return ALL_ARTICLES.filter(a => a.category === category);
}

// Get all categories
export function getAllCategories() {
  const categories = [...new Set(ALL_ARTICLES.map(a => a.category))];
  return categories.map(cat => {
    const article = ALL_ARTICLES.find(a => a.category === cat);
    return {
      name: cat,
      color: article.categoryColor,
      count: ALL_ARTICLES.filter(a => a.category === cat).length
    };
  });
}

// Get all slugs for static generation
export function getAllSlugs() {
  return ALL_ARTICLES.map(a => a.slug);
}
