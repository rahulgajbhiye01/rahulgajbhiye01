"use server";

import { Metadata } from "next";
import { readTitle, readBlog } from "@/lib/server/actions/blog";
import BlogReader from "@/components/pages/blog-reader";
import { notFound } from "next/navigation";

interface Props {
  params: { blog: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogId = params.blog;
  const fetchTitle = await readTitle(blogId);
  return {
    title: fetchTitle,
  };
}

export default async function BlogPage({ params }: Props) {
  const blogId = params.blog;
  const fetchBlog = await readBlog(blogId);

  if (fetchBlog?.status === 404) {
    notFound();
  }

  if (fetchBlog?.rawBlogData) {
    const { rawBlogData } = fetchBlog;
    return (
      <div className="prose flex flex-col items-start">
        <BlogReader rawBlogData={rawBlogData} />
      </div>
    );
  }
}
