import type { Metadata } from "next";
import { Suspense } from "react";
import Loading from "@/components/ui/custom/Loading";
import Blog from "@/components/pages/blog";
import { getBlogs } from "@/lib/actions/blog";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Rahul Gajbhiye",
  },
};

export default async function BlogPage() {
  const response = await getBlogs();
  if (response.status === 200 && response.data) {
    return (
      <Suspense fallback={<Loading />}>
        <section className="flex min-h-custom flex-col items-center">
          <div className="flex w-11/12 flex-col gap-4 pt-10 md:w-7/12">
            <Blog blogsData={response.data} />{" "}
          </div>
        </section>
      </Suspense>
    );
  }
}
