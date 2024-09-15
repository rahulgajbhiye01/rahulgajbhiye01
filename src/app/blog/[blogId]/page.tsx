import { Suspense } from "react";
import { notFound } from "next/navigation";

import Loading from "@/components/ui/custom/Loading";
import BlogReader from "@/components/ui/custom/BlogReader";
import { getBlog } from "@/lib/actions/blog";

interface Params {
  params: { blogId: string };
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
