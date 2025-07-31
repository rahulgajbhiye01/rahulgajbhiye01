import { getPost, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

// Markdown Related
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-neutral dark:prose-invert mx-auto px-4 py-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold">{post.meta.title}</h1>
        <span className="text-sm text-secondary">{post.meta.date}</span>
        <span className="text-sm text-secondary">{post.meta.category}</span>
        <span className="text-sm text-secondary">{post.meta.keywords}</span>
        <span className="text-sm text-secondary">{post.meta.author}</span>
      </div>

      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;
