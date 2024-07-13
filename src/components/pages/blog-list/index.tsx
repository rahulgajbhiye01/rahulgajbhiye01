import Link from "next/link";
import { IBlog } from "@/types";
import BlogMeta from "@/components/pages/shared/blog-meta";

interface allBlogs {
  base: string;
  allBlogs: Array<IBlog>;
}

const BlogList = ({ allBlogs, base }: allBlogs) => {
  return (
    <div className="grid w-11/12 grid-flow-row gap-8 md:w-7/12 md:grid-cols-2">
      {/* All Blog */}
      {allBlogs.toReversed().map((item) => {
        return (
          <Link
            key={item.id}
            href={`/${base}${base === "dashboard" ? "/blog" : ""}/${item.indexedTitle}`}
          >
            <BlogMeta blogMeta={item} variant="BlogList" />
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
