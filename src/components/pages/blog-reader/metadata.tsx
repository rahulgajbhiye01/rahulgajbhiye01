"use client";

import { useTimeAgo } from "next-timeago";
interface IBlogHeading {
  frontMatter: {
    [key: string]: string;
  };
}

const FcBlogMetadata = (props: IBlogHeading) => {
  const { frontMatter } = props;
  const { TimeAgo } = useTimeAgo();
  return (
    <div className="flex w-full flex-col flex-wrap gap-8">
      <div className="text-4xl font-semibold text-black md:text-6xl">
        {frontMatter["title"]}
      </div>
      <div className="w-full text-center">
        <div className="mb-2 flex flex-row items-center gap-2 text-base font-medium">
          <TimeAgo date={frontMatter["publishedOn"]} />
          <span>/</span>
          <span className="text-base font-medium">
            {frontMatter["keywords"]}
          </span>
        </div>

        <div className="h-0.5 shadow-sm shadow-violet-600 drop-shadow"></div>
      </div>
    </div>
  );
};

export default FcBlogMetadata;
