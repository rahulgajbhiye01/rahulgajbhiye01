import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  booleanValue,
  optionalString,
  parseMdx,
  requiredString,
  stringArray,
} from "@/lib/frontmatter";
import type { Frontmatter } from "@/lib/frontmatter";

export type ContentLink = {
  href: string;
  label: string;
};

export type ContentCollection = "technical" | "personal" | "favorites";
export type ContentKind =
  | "project"
  | "cheatsheet"
  | "blog"
  | "article"
  | "lab"
  | "poetry"
  | "story"
  | "quote"
  | "tanka"
  | "writing";

export type ContentItem = {
  slug: string;
  id: string;
  collection: ContentCollection;
  kind: ContentKind;
  section: string;
  route: string;
  title: string;
  description?: string;
  category?: string;
  tags: string[];
  date: string;
  readingTime: string;
  links: ContentLink[];
  selected: boolean;
  author?: string;
  source?: string;
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

function getLinks(frontmatter: Frontmatter) {
  const linkFields = [
    ["githubUrl", "GitHub"],
    ["liveUrl", "Live site"],
  ] as const;

  return linkFields.flatMap(([key, label]) => {
    const href = optionalString(frontmatter, key);
    return href ? [{ href, label }] : [];
  });
}

const kindRoutes: Record<ContentKind, string> = {
  project: "projects",
  cheatsheet: "cheatsheets",
  blog: "blog",
  article: "article",
  lab: "lab",
  poetry: "poetry",
  story: "stories",
  quote: "quotes",
  tanka: "tanka",
  writing: "writings",
};

function getContentIdentity(
  relativeFilePath: string,
  frontmatter: Record<string, string | string[] | boolean>,
) {
  const segments = relativeFilePath.split("/");
  const groupedCollections = ["technical", "personal", "favorites"];
  const isGrouped = groupedCollections.includes(segments[0]);
  const legacyKind = isGrouped ? segments[1] : segments[0];
  const kind = (optionalString(frontmatter, "kind") ?? legacyKind) as ContentKind;
  const collection = (optionalString(frontmatter, "collection") ??
    (isGrouped ? segments[0] : kind === "poetry" || kind === "story"
      ? "personal"
      : kind === "quote" || kind === "tanka" || kind === "writing"
        ? "favorites"
        : "technical")) as ContentCollection;
  return { collection, kind };
}

async function getContentFiles(dir = contentDirectory): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });

  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        if (entry.name.startsWith("_")) return [];
        return getContentFiles(fullPath);
      }

      if (
        entry.isFile() &&
        !entry.name.startsWith("_") &&
        /\.(md|mdx)$/i.test(entry.name)
      ) {
        return [
          path.relative(contentDirectory, fullPath).split(path.sep).join("/"),
        ];
      }

      return [];
    }),
  );

  return files.flat();
}

async function readContent(relativeFilePath: string): Promise<ContentItem> {
  const absolutePath = path.join(contentDirectory, relativeFilePath);
  const source = await readFile(absolutePath, "utf8");
  const filePath = `content/${relativeFilePath}`;
  const { frontmatter, content } = parseMdx(source, filePath);
  const slug = path.basename(relativeFilePath, path.extname(relativeFilePath));
  const { collection, kind } = getContentIdentity(relativeFilePath, frontmatter);
  const section = kind;

  return {
    slug,
    id: `${kind}/${slug}`,
    collection,
    kind,
    section,
    route: `/${kindRoutes[kind] ?? kind}/${slug}`,
    title: optionalString(frontmatter, "title") ?? slug,
    description: optionalString(frontmatter, "description"),
    category: optionalString(frontmatter, "category") ?? kind,
    tags: stringArray(frontmatter, "tags"),
    date: optionalString(frontmatter, "date") ?? "1970-01-01",
    readingTime: getReadingTime(content),
    links: getLinks(frontmatter),
    selected: booleanValue(frontmatter, "selected"),
    author: optionalString(frontmatter, "author"),
    source: optionalString(frontmatter, "source"),
    content,
  };
}

export async function getContentItems(
  section?: string,
): Promise<ContentItem[]> {
  const files = await getContentFiles();
  const contentItems = await Promise.all(files.map(readContent));

  return contentItems
    .filter((item) => !section || item.section === section || item.collection === section)
    .sort(
      (first, second) =>
        second.date.localeCompare(first.date) ||
        first.title.localeCompare(second.title),
    );
}

export async function getContentItem(slug: string, section?: string) {
  const contentItems = await getContentItems();
  return contentItems.find(
    (item) => item.slug === slug && (!section || item.section === section || item.collection === section),
  );
}

export async function getSelectedContentItems() {
  return (await getContentItems()).filter((item) => item.selected);
}
