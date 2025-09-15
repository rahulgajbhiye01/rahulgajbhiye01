import { getAllPosts } from "@/components/mdx/lib/mdx";
import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="bg-background min-h-screen pt-20">
      <div className="mx-auto max-w-5xl px-6 py-16">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold">
            Blog Posts
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts, tutorials, and insights on development and technology
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <article className="border-border/50 bg-card/50 h-full overflow-hidden rounded-xl border transition-all duration-300 hover:border-green-400/30 hover:bg-green-500/5 hover:shadow-lg hover:shadow-green-500/10">
                {/* Cover Image */}
                {post.coverImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  {post.tags && post.tags.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-2">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-green-400/30 bg-green-500/10 px-2 py-1 font-mono text-xs text-green-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h2 className="text-foreground mb-3 text-xl font-semibold transition-colors group-hover:text-green-400">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="text-muted-foreground flex items-center justify-between text-xs">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      {post.readingTime && (
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readingTime} min</span>
                        </div>
                      )}
                    </div>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-muted-foreground text-lg">
              No blog posts found. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
