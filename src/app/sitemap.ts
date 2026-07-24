import type { MetadataRoute } from "next";

import { getContentItems } from "@/lib/content";

const baseUrl = "https://rahulgajbhiye.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getContentItems();

  const postEntries = posts.map((post) => ({
    url: `${baseUrl}/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/archive`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...postEntries,
  ];
}
