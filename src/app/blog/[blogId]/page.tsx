import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Loading from "@/components/ui/loading";

import BlogReader from "@/components/shared/blog-reader";
import { IBlog } from "@/constants/types";

interface Params {
  params: { blogId: string };
}

type Blog = {
  blogId: string;
};

// Generate static page for all the blogs
export async function generateStaticParams() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`,
    );
    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const blogs: Blog[] = await response.json();

    return blogs.map(({ blogId }) => ({ blogId }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return []; // Return an empty array to avoid build failure
  }
}

// Dynamic metadata
export async function generateMetadata({ params }: Params): Promise<Metadata> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.blogId}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blog metadata");
    }

    const blog: IBlog = await response.json();

    return {
      title: blog.title,
      openGraph: {
        images: [{ url: blog.imageUrl }],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Blog not found",
    };
  }
}

export default async function BlogPage({ params }: Params) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/blog/${params.blogId}`,
    );

    if (response.status === 200) {
      const blogData = await response.json();
      return (
        <Suspense fallback={<Loading />}>
          <div className="prose flex flex-col items-start">
            <BlogReader blogData={blogData} />
          </div>
        </Suspense>
      );
    } else {
      notFound();
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
    notFound();
  }
}
