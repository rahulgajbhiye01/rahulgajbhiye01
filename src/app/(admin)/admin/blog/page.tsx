import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import Blog from "@/components/pages/blog";

export default async function DashboardBlogPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog`,
    {
      cache: "no-store", // Ensures the data is fresh on each request
    },
  );
  const allBlogsMeta = await response.json();
  return (
    <>
      <Link
        href={`/admin/blog/new-blog`}
        className="m-14 flex items-center justify-center"
      >
        <div className="flex flex-row gap-4">
          <FaPlus className="size-10" />
          <div className="text-4xl">New Blog</div>
        </div>
      </Link>
      <Blog blogsData={allBlogsMeta} base="admin" />
    </>
  );
}
