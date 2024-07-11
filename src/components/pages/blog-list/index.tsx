"use client";

import Link from "next/link";
import { useTimeAgo } from "next-timeago";
import { FaPlus } from "react-icons/fa6";
import { IBlog } from "@/types";
import { useRouter } from 'next/navigation';

interface allBlogs {
  base: string;
  allBlogs: Array<IBlog>;
}

const BlogList = (props: allBlogs) => {
  const router = useRouter();
  router.refresh();
  const allBlogs = props.allBlogs;
  const base = props.base;
  const { TimeAgo } = useTimeAgo();
  return (
    <div className="grid w-11/12 grid-flow-row items-center gap-8 md:w-6/12">
      {base === "dashboard" ? (
        <Link
          href={"/dashboard/blogs/new-blog"}
          className="m-14 flex items-center justify-center"
        >
          <div className="flex flex-row gap-4">
            <FaPlus className="size-10" />
            <div className="text-4xl">New Blog</div>
          </div>
        </Link>
      ) : null}

      {allBlogs.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/${base}${base === "dashboard" ? "/blogs" : ""}/${item.indexedTitle}`}
          >
            <div className="flex flex-col gap-4 p-4 md:flex-row md:gap-8">
              <div className="aspect-video max-w-full overflow-clip">
                <img
                  src={item.imageUrl ?? ""}
                  alt={item.title ?? ""}
                  height={384}
                  width={384}
                />
              </div>

              <div className="flex w-11/12 flex-col gap-2">
                <div className="flex flex-row items-center gap-2 text-base font-medium">
                  <span className="font-medium">
                    <TimeAgo date={item.publishedOn ?? "2001-01-20"} />
                  </span>
                  <span>/</span>
                  <span>{item.keywords}</span>
                </div>

                <div className="text-2xl font-bold text-black hover:underline md:text-4xl">
                  {item.title}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BlogList;
