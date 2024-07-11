import { readBlog } from "@/lib/server/actions/blog";
import BlogEditor from "@/components/pages/blog-editor";

export default async function BlogPage({
  params,
}: {
  params: { blog: string };
}) {
  const blogId = params.blog;
  const fetchBlog = await readBlog(blogId);

  if (fetchBlog) {
    const { rawBlogData } = fetchBlog;
    if (rawBlogData)
      return <BlogEditor blogId={blogId} rawBlogData={rawBlogData} />;
  }
}
