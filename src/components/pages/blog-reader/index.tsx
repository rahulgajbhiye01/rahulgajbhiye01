import { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import FcBlogMetadata from "@/components/pages/blog-reader/metadata";
import { components } from "../shared/components";
import Loading from "@/components/ui/loading";

interface Props {
  mdxSource: {
    frontMatter: {
      [key: string]: any;
    };
    content: string;
  };
}

const BlogReader = ({ mdxSource }: Props) => {
  return (
    <Suspense fallback={<Loading />}>
      <div className="flex w-screen flex-col gap-4 px-4 md:w-full">
        <FcBlogMetadata frontMatter={mdxSource.frontMatter} />
        <article className="markdown">
          <MDXRemote
            source={mdxSource.content}
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
              parseFrontmatter: false,
            }}
          />
        </article>
      </div>
    </Suspense>
  );
};

export default BlogReader;
