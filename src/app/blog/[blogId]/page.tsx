import { Suspense } from "react";
import { notFound } from "next/navigation";
import Loading from "@/components/ui/custom/Loading";
import BlogReader from "@/components/ui/custom/BlogReader";
import { getBlogs, getBlog } from "@/lib/actions/blog";

interface Params {
  params: { blogId: string };
}

// Generate static page for all the blogs
export async function generateStaticParams() {
  const blogsData = await getBlogs();
  if (blogsData.data) {
    return blogsData.data.map(({ blogId }) => ({ blogId }));
  } else {
    return [];
  }
}

export default async function BlogPage({ params: { blogId } }: Params) {
  const response = await getBlog(blogId);

  if (response.status === 200 && response.data) {
    return (
      <Suspense fallback={<Loading />}>
        <BlogReader blogData={response.data} />
      </Suspense>
    );
  } else {
    notFound();
  }
}
