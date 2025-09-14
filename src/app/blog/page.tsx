import { getAllPosts } from "@/components/mdx/lib/mdx";
import Link from "next/link";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="w-full min-h-screen flex justify-center pt-24">
      <div className="w-9/12">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <p className="text-xl font-semibold text-foreground hover:underline">
                  {post.title || post.slug}
                </p>
              </Link>
              <p className="text-sm text-gray-500">{post.date.toString()}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
