import { getArticleBySlug, getAllSlugs } from '@/data/blog-index';

// Generate static params for all articles
export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article Not Found | Game365Hub',
      description: 'The requested article could not be found.',
    };
  }

  const baseUrl = 'https://game365hub.com';

  return {
    title: `${article.title} | Game365Hub`,
    description: article.metaDescription || article.excerpt,
    keywords: article.tags?.join(', '),
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.metaDescription || article.excerpt,
      url: `${baseUrl}/blog/${article.slug}`,
      siteName: 'Game365Hub',
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: 'en_US',
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.metaDescription || article.excerpt,
      images: [article.image],
    },
    alternates: {
      canonical: `${baseUrl}/blog/${article.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate JSON-LD structured data
function generateStructuredData(article) {
  const baseUrl = 'https://game365hub.com';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${baseUrl}/blog/${article.slug}#article`,
        headline: article.title,
        description: article.metaDescription || article.excerpt,
        image: article.image,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          '@type': 'Organization',
          name: article.author,
          url: baseUrl,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Game365Hub',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${baseUrl}/blog/${article.slug}`,
        },
        keywords: article.tags?.join(', '),
        articleSection: article.category,
        wordCount: article.readTime?.replace(/\D/g, '') * 200 || 2000,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: baseUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: `${baseUrl}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: article.title,
            item: `${baseUrl}/blog/${article.slug}`,
          },
        ],
      },
      // FAQ Schema if article has FAQ
      ...(article.content?.faq?.items ? [{
        '@type': 'FAQPage',
        mainEntity: article.content.faq.items.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }] : []),
    ],
  };
}

export default function BlogArticleLayout({ children, params }) {
  const article = getArticleBySlug(params.slug);

  return (
    <>
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData(article)),
          }}
        />
      )}
      {children}
    </>
  );
}
