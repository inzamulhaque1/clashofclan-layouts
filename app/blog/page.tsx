import { createMetadata } from "@/lib/seo";
import { SITE_NAME } from "@/lib/constants";
import { blogPosts } from "@/lib/blog";
import BlogPageClient from "./BlogPageClient";

export const metadata = createMetadata({
  title: `Blog - ${SITE_NAME}`,
  description: `Read the latest guides, strategies, and tips for mobile games. Expert content for Clash of Clans, Brawl Stars, Clash Royale, Free Fire and more.`,
  path: "/blog",
});

export default function BlogPage() {
  return <BlogPageClient posts={blogPosts} />;
}
