import { getBlogsData } from "@/lib/db/db-helper";
import BlogList from "@/components/pages/blog-list";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function DashboardPage() {
  const allBlogs = await getBlogsData();
  return (
    <>
      <Link
        href={"/dashboard/blogs/new-blog"}
        className="m-14 flex items-center justify-center"
      >
        <div className="flex flex-row gap-4">
          <FaPlus className="size-10" />
          <div className="text-4xl">New Blog</div>
        </div>
      </Link>
      <BlogList allBlogs={allBlogs} base="dashboard" />
    </>
  );
}
