import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="max-w-3xl mx-auto py-10 min-h-[100vh] mt-24">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <p className="text-xl font-semibold text-foreground hover:underline">
                {post.meta.title}
              </p>
            </Link>
            <p className="text-sm text-gray-500">{post.meta.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
