import { getPostBySlug, getAllPostSlugs } from "@/components/mdx/lib/mdx";
import { PostProvider } from "@/components/mdx/mdx-provider";
import { createMDXComponents } from "@/components/mdx/mdx-components";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const posts = getAllPostSlugs();
  return posts.map((post) => ({
    slug: post.params.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const { title, excerpt, date, author, tags } = await getPostBySlug(slug);

    return {
      title: title,
      description: excerpt,
      openGraph: {
        title: title,
        description: excerpt,
        type: "article",
        publishedTime: date,
        authors: author ? [author] : undefined,
        tags: tags,
      },
      twitter: {
        card: "summary_large_image",
        title: title,
        description: excerpt,
      },
    };
  } catch (error) {
    return {
      title: "Post Not Found",
      description: `The requested blog post could not be found. ${error}`,
    };
  }
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return notFound();
  }

  const components = createMDXComponents(post);

  return (
    <div className="bg-background min-h-screen pt-20">
      <article className="mx-auto max-w-4xl px-6 py-16">
        {/* Article Header */}
        <header className="mb-12 text-center">
          <h1 className="text-foreground mb-6 text-4xl leading-tight font-bold md:text-5xl">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="text-muted-foreground mb-6 flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>

            {post.readingTime && (
              <>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readingTime} min read</span>
                </div>
              </>
            )}

            {post.author && (
              <>
                <span className="text-muted-foreground">•</span>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>By {post.author}</span>
                </div>
              </>
            )}
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-green-400/30 bg-green-500/10 px-3 py-1 font-mono text-sm text-green-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg italic">
              {post.excerpt}
            </p>
          )}
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-12 overflow-hidden rounded-xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={800}
              height={400}
              className="h-96 w-full object-cover shadow-lg"
            />
          </div>
        )}

        {/* Article Content */}
        <section className="prose prose-lg prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-a:text-green-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-green-400 prose-blockquote:bg-green-500/5 prose-blockquote:text-foreground prose-code:text-green-300 prose-code:bg-green-500/10 prose-pre:bg-gray-900 prose-pre:text-gray-100 max-w-none">
          <PostProvider frontmatter={post} slug={post.slug}>
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [
                    rehypeSlug,
                    [rehypeAutolinkHeadings, { behavior: "append" }],
                    rehypeHighlight,
                  ],
                },
              }}
            />
          </PostProvider>
        </section>

        {/* Back to Blog Link */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-green-400/30 bg-green-500/10 px-6 py-3 font-mono text-sm font-semibold text-green-300 transition-all duration-300 hover:border-green-400/50 hover:bg-green-500/20"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </article>
    </div>
  );
}
