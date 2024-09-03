import { notFound } from "next/navigation";
import BlogEditor from "@/components/pages/admin/blog";
import { IBlog } from "@/constants/types";

interface Params {
  params: { blogId: string };
}

const newBlogData = {
  author: "",
  blogId: "",
  category: "",
  imageUrl: "",
  keywords: "",
  title: "",
  article: `---
author: 'Rahul Gajbhiye'
category: 'blank'
keywords: 'blank'
title: 'blank'
imageUrl: 'blank'
---
New Blog`,
};

export default async function BlogPage({ params: { blogId } }: Params) {
  // New Blog
  if (blogId === "new-blog") {
    return <BlogEditor blogId={blogId} blogData={newBlogData} />;
  }
  // Else fetch blog data
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/blog/${blogId}`,
  );

  if (response.status === 200) {
    const blogData: IBlog = await response.json();
    return <BlogEditor blogId={blogId} blogData={blogData} />;
  }

  notFound();
}
