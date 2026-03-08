import Link from "next/link";
import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";

export const metadata = createMetadata({
  title: `Blog - ${SITE_NAME}`,
  description: `Read the latest guides, strategies, and tips for mobile games. Expert content for Clash of Clans, Brawl Stars, Clash Royale, Free Fire and more.`,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <div className="container-custom py-12">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog</h1>
        <p className="text-muted">
          Latest guides, strategies, and tips for your favorite mobile games.
        </p>
      </div>

      {blogPosts.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-muted text-lg">No articles yet. Check back soon!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                    {post.gameName}
                  </span>
                  <span className="text-xs text-muted">{post.readTime}</span>
                </div>
                <h2 className="font-bold text-light group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-muted mt-2 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
