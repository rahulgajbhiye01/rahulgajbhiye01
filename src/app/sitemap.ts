import { MetadataRoute } from "next";
import { IBlog } from "@/constants/types";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    cache: "no-store", // Ensures the data is fresh on each request
  });
  const blogsData: IBlog[] = await response.json();
  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/work`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    ...blogsData.map((blog) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${blog.blogId}`,
    })),
  ];
}
