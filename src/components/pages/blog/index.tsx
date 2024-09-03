import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { IBlog } from "@/constants/types";
import blogImage from "@/constants/assets/default-blog-image.svg";
import { dateFormat } from "@/lib/utils";

interface allBlogs {
  blogsData: IBlog[];
  base?: string;
}

const Blog = ({ blogsData, base }: allBlogs) => {
  return (
    <div className="flex w-11/12 flex-col items-center md:w-7/12">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {blogsData.map((blogData, index) => {
          let spanClass,
            divClass = "";

          if (index === 0 || index === 1) {
            spanClass = "md:col-span-1"; // Full row
            divClass = "flex-col";
          } else {
            spanClass = "md:col-span-2 rounded-md";
            divClass = "flex-row";
          } // Default one

          return (
            <Link
              key={blogData.id}
              className={cn(`border-2 border-solid p-4 ${spanClass}`)}
              href={`${base === "admin" ? "/admin/blog" : "/blog"}/${blogData.blogId}`}
            >
              <div className={cn(`flex gap-4 ${divClass}`)}>
                <div className={cn(`aspect-video min-h-full`)}>
                  {blogData.imageUrl === "blank" ? (
                    <Image
                      src={blogImage}
                      alt={blogData.title ?? "rahul gajbhiye blog's"}
                      className="m-0 h-full"
                    />
                  ) : (
                    <img
                      src={blogData.imageUrl ?? ""}
                      alt={blogData.title ?? "rahul gajbhiye blog's"}
                      className="m-0 h-full"
                    />
                  )}
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex flex-row gap-1 text-gray-600 md:ml-0.5">
                    <span className="font-medium">{blogData.category}</span>
                    <span className="text-gray-300">•</span>
                    <span className="font-normal">
                      {dateFormat(`${blogData.createdAt}`)}
                    </span>
                  </div>
                  <div className="relative text-3xl font-semibold text-gray-800 md:text-4xl">
                    {blogData.title}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
