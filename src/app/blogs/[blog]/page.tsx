"use server";

import { Metadata } from "next";
import { readTitle, readBlog } from "@/lib/server/actions/blog";
import BlogReader from "@/components/pages/blog-reader";
import { notFound } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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

  if (fetchBlog?.blogData) {
    const { rawBlogData, blogData } = fetchBlog;
    return (
      <div className="prose flex flex-col items-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/blogs">blogs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{rawBlogData[0].indexedTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <BlogReader mdxSource={blogData} />
      </div>
    );
  }
}
