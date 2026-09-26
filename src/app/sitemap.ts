import type { MetadataRoute } from "next";

import { getContentItems } from "@/lib/content";

import { siteUrl } from "@/lib/seo";

const baseUrl = siteUrl;

const indexPaths = [
  { path: "/", priority: 1 },
  { path: "/archive", priority: 0.8 },
  { path: "/about", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/writing", priority: 0.8 },
  { path: "/cheatsheets", priority: 0.8 },
] as const;

function validDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const items = await getContentItems();

  const entries = items.map((item) => {
    const lastModified = validDate(item.updated);
    return {
      url: `${baseUrl}${item.route}`,
      ...(lastModified ? { lastModified } : {}),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [
    ...indexPaths.map(({ path, priority }) => ({
      url: path === "/" ? baseUrl : `${baseUrl}${path}`,
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...entries,
  ];
}
