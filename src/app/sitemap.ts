import type { MetadataRoute } from "next";

import { getContentItems } from "@/lib/content";

const baseUrl = "https://rahulgajbhiye.com";

const indexPaths = [
  "/",
  "/projects",
  "/writing",
  "/services",
  "/about",
  "/gear",
  "/poetry",
  "/archive",
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getContentItems();

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}${post.route}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...indexPaths.map((path, index) => ({
      url: path === "/" ? baseUrl : `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: index === 0 ? 1 : 0.8,
    })),
    ...postEntries,
  ];
}
