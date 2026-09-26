import { access } from "node:fs/promises";
import path from "node:path";

import type { Metadata } from "next";

import type { ContentItem } from "@/lib/content";

export const siteUrl = "https://rahulgajbhiye.com";
export const personId = `${siteUrl}/about#rahul-gajbhiye`;

export const personJsonLd = {
  "@type": "Person",
  "@id": personId,
  name: "Rahul Gajbhiye",
  url: `${siteUrl}/about`,
  email: "hello@rahulgajbhiye.com",
  sameAs: [
    "https://github.com/rahulgajbhiye01",
    "https://x.com/rahulgajbhiye01",
    "https://www.instagram.com/rahulgajbhiye01",
    "https://www.linkedin.com/in/rahulgajbhiye01",
    "https://www.youtube.com/@rahulgajbhiye01",
  ],
};

export function canonicalUrl(pathname: string) {
  return new URL(pathname, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  pathname,
  type = "website",
  image,
  generatedImage = false,
}: {
  title: string;
  description: string;
  pathname: string;
  type?: "website" | "article";
  image?: string;
  generatedImage?: boolean;
}): Metadata {
  const url = canonicalUrl(pathname);
  const socialImage = image
    ? [image]
    : generatedImage
      ? undefined
      : ["/opengraph-image"];

  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      title,
      description,
      url,
      siteName: "Rahul Gajbhiye",
      locale: "en_US",
      type,
      ...(socialImage ? { images: socialImage } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(socialImage ? { images: socialImage } : {}),
    },
  };
}

export async function publicImage(item: ContentItem) {
  const image = item.image;
  if (!image?.startsWith("/") || image.startsWith("//")) return undefined;

  const publicDirectory = path.resolve(process.cwd(), "public");
  const imagePath = path.resolve(publicDirectory, image.slice(1));
  if (!imagePath.startsWith(`${publicDirectory}${path.sep}`)) return undefined;

  try {
    await access(imagePath);
    return image;
  } catch {
    return undefined;
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rahul Gajbhiye",
    url: siteUrl,
    description:
      "A living archive of what Rahul Gajbhiye builds, learns, thinks about, and documents.",
    author: personJsonLd,
  };
}

export function profileJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: canonicalUrl("/about"),
    name: "About Rahul Gajbhiye",
    mainEntity: personJsonLd,
  };
}

function validDate(value?: string) {
  if (!value) return undefined;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

export function contentJsonLd(item: ContentItem, image?: string) {
  const isArticle = item.kind === "article";
  const publishedDate = validDate(item.date);
  const modifiedDate = validDate(item.updated) ?? publishedDate;
  const published = publishedDate?.toISOString();
  const modified = modifiedDate?.toISOString();

  return {
    "@context": "https://schema.org",
    "@type": isArticle ? "BlogPosting" : "CreativeWork",
    headline: item.title,
    name: item.title,
    description: item.description,
    url: canonicalUrl(item.route),
    mainEntityOfPage: canonicalUrl(item.route),
    author: personJsonLd,
    ...(published
      ? { datePublished: published, dateCreated: published }
      : {}),
    ...(modified ? { dateModified: modified } : {}),
    ...(image ? { image: canonicalUrl(image) } : {}),
    ...(item.tags.length ? { keywords: item.tags.join(", ") } : {}),
  };
}
