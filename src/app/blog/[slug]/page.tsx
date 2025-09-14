import { getPostBySlug, getAllPostSlugs } from "@/components/mdx/lib/mdx";
import { PostProvider } from "@/components/mdx/mdx-provider";
import { createMDXComponents } from "@/components/mdx/mdx-components";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

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
      description: "The requested blog post could not be found.",
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

  const components = createMDXComponents(post as any);

  return (
    <article className="prose prose-lg max-w-4xl mx-auto px-4 py-8">
      {/* Article Header */}
      <div className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center justify-center space-x-6 text-gray-600 mb-6">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          {post.readingTime && (
            <>
              <span>•</span>
              <span>{post.readingTime} min read</span>
            </>
          )}

          {post.author && (
            <>
              <span>•</span>
              <span>By {post.author}</span>
            </>
          )}
        </div>

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {post.excerpt && (
          <p className="text-xl text-gray-600 italic max-w-2xl mx-auto">
            {post.excerpt}
          </p>
        )}
      </div>

      {/* Cover Image */}
      {post.coverImage && (
        <div className="mb-12">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      )}

      {/* Article Content */}
      <section className="prose prose-lg max-w-none">
        <PostProvider frontmatter={post as any} slug={post.slug}>
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
    </article>
  );
}
