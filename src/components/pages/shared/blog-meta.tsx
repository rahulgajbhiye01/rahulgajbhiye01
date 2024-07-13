import React from "react";
import { IBlog } from "@/types";
import Image from "next/image";
import blogImage from "@/assets/default-blog-image.svg";
import { dateFormat } from "@/lib/utils";
import { cn } from "@/lib/utils";

type Props = {
  blogMeta: IBlog;
  variant: String;
};

const BlogMeta = ({ blogMeta, variant }: Props) => {
  let titleCSS = "";
  let childCSS = "";
  let imageCSS = "";

  if (variant === "BlogReader") {
    titleCSS = "md:text-6xl font-bold";
    childCSS = "flex-col";
    imageCSS = "h-min";
  } else {
    titleCSS = "md:text-3xl font-medium";
    childCSS = "flex-col-reverse";
    imageCSS = "md:h-72";
  }

  return (
    <div className="flex">
      <div className={cn("flex size-full flex-col " + childCSS)}>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-1 text-gray-600 md:ml-0.5">
            <span className="font-medium">{blogMeta.category}</span>
            <span className="text-gray-300">•</span>
            <span className="font-normal">
              {dateFormat(`${blogMeta.publishedOn}`)}
            </span>
          </div>
          <div className={cn("relative text-3xl " + titleCSS)}>
            {blogMeta.title}
          </div>
        </div>
        <div className={cn("aspect-video " + imageCSS)}>
          {blogMeta.imageUrl === "blank" ? (
            <Image
              src={blogImage}
              alt={blogMeta.title ?? "rahul gajbhiye blog's"}
              className="m-0 h-full"
            />
          ) : (
            <img
              src={blogMeta.imageUrl ?? ""}
              alt={blogMeta.title ?? "rahul gajbhiye blog's"}
              className="m-0 h-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogMeta;
