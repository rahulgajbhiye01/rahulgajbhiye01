import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  optionalString,
  parseMdx,
  requiredString,
  stringArray,
} from "@/lib/frontmatter";

export type ContentLink = {
  href: string;
  label: string;
};

export type ContentItem = {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  date: string;
  readingTime: string;
  links: ContentLink[];
  selected: boolean;
  content: string;
};

const contentDirectory = path.join(process.cwd(), "content");
const wordsPerMinute = 200;

function getReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ")
    .match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*/gu);
  const minutes = Math.max(1, Math.ceil((words?.length ?? 0) / wordsPerMinute));

  return `${minutes} min read`;
}

function getLinks(frontmatter: Record<string, string | string[]>) {
  const linkFields = [
    ["githubUrl", "GitHub"],
    ["liveUrl", "Live site"],
  ] as const;

  return linkFields.flatMap(([key, label]) => {
    const href = optionalString(frontmatter, key);
    return href ? [{ href, label }] : [];
  });
}

async function readContent(fileName: string): Promise<ContentItem> {
  const source = await readFile(path.join(contentDirectory, fileName), "utf8");
  const filePath = `content/${fileName}`;
  const { frontmatter, content } = parseMdx(source, filePath);

  return {
    slug: fileName.replace(/\.(md|mdx)$/, ""),
    title: requiredString(frontmatter, "title", filePath),
    description: requiredString(frontmatter, "description", filePath),
    category: requiredString(frontmatter, "category", filePath),
    tags: stringArray(frontmatter, "tags"),
    date: requiredString(frontmatter, "date", filePath),
    readingTime: getReadingTime(content),
    links: getLinks(frontmatter),
    selected: optionalString(frontmatter, "selected") === "true",
    content,
  };
}

export async function getContentItems(): Promise<ContentItem[]> {
  const files = await readdir(contentDirectory);
  const contentItems = await Promise.all(
    files
      .filter(
        (file) =>
          !file.startsWith("_") && /\.(md|mdx)$/.test(file),
      )
      .map(readContent),
  );

  return contentItems.sort(
    (first, second) =>
      second.date.localeCompare(first.date) || first.title.localeCompare(second.title),
  );
}

export async function getContentItem(slug: string) {
  const contentItems = await getContentItems();
  return contentItems.find((item) => item.slug === slug);
}

export async function getSelectedContentItems() {
  return (await getContentItems()).filter((item) => item.selected);
}
