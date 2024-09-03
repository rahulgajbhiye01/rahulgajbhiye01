import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

// Plugins Import
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

// Components Import
import { components } from "@/components/pages/admin/blog/components";
import Loading from "@/components/ui/loading";
import { dateFormat } from "@/lib/utils";
import blogImage from "@/constants/assets/default-blog-image.svg";
import { IBlog } from "@/constants/types";

interface Props {
  blogData: IBlog;
}

const BlogReader = ({ blogData }: Props) => {
  return (
    <div className="flex w-screen flex-col gap-4 px-4 md:w-full">
      <div className="flex">
        <div className="flex size-full flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-1 text-gray-600 md:ml-0.5">
              <span className="font-medium">{blogData.category}</span>
              <span className="text-gray-300">•</span>
              <span className="font-normal">
                {dateFormat(`${blogData.createdAt}`)}
              </span>
            </div>
            <div className="relative text-3xl font-bold md:text-6xl">
              {blogData.title}
            </div>
          </div>
          <div className="aspect-video h-min">
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
        </div>
      </div>
      <article className="markdown">
        <MDXRemote
          source={blogData.article}
          components={components}
          options={{
            // made available to the arguments of any custom MDX component
            scope: {},
            // MDX's available options, see the MDX docs for more info.
            // https://mdxjs.com/packages/mdx/#compilefile-options
            mdxOptions: {
              remarkPlugins: [
                remarkGfm,
                remarkDirective,
                remarkDirectiveRehype,
                remarkToc,
              ],
              rehypePlugins: [
                rehypePrettyCode,
                rehypeAutolinkHeadings,
                rehypeSlug,
              ],
              format: "mdx",
            },
            // Indicates whether or not to parse the frontmatter from the MDX source
            parseFrontmatter: true,
          }}
        />
      </article>
    </div>
  );
};

export default BlogReader;
