import { getBlogsData } from "@/lib/db/db-helper";
import BlogList from "@/components/pages/blog-list";

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  const allBlogs = await getBlogsData();
  return <BlogList allBlogs={allBlogs} base="blogs" />;
}
