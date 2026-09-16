import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import {
  booleanValue,
  optionalString,
  parseMdx,
  stringArray,
} from "@/lib/frontmatter";
import type { Frontmatter } from "@/lib/frontmatter";

export type ContentLink = {
  href: string;
  label: string;
};

export type ContentKind =
  | "project"
  | "article"
  | "cheatsheet"
  | "poetry"
  | "gear";

export type ContentItem = {
  slug: string;
  id: string;
  kind: ContentKind;
  section: ContentKind;
  route: string;
  title: string;
  description?: string;
  category?: string;
  tags: string[];
  date?: string;
  readingTime: string;
  links: ContentLink[];
  selected: boolean;
  author?: string;
  source?: string;
  content: string;
};

const contentDirectory = path.join(process.cwd(), "content");
const wordsPerMinute = 200;

export const kindRoutes: Record<ContentKind, string> = {
  project: "projects",
  article: "articles",
  cheatsheet: "cheatsheets",
  poetry: "poetry",
  gear: "gear",
};

export const allowedRouteKinds = new Set(Object.values(kindRoutes));

const folderToKind: Record<string, ContentKind> = {
  projects: "project",
  project: "project",
  articles: "article",
  article: "article",
  blog: "article",
  cheatsheets: "cheatsheet",
  cheatsheet: "cheatsheet",
  poetry: "poetry",
  gear: "gear",
};

function normalizeKind(value: string | undefined): ContentKind | undefined {
  if (!value) return undefined;
  return folderToKind[value];
}

function getReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ")
    .match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*/gu);
  const minutes = Math.max(1, Math.ceil((words?.length ?? 0) / wordsPerMinute));

  return `${minutes} min read`;
}

function titleFromHeading(content: string) {
  const withoutCode = content.replace(/```[\s\S]*?```/g, "");
  const match = withoutCode.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim();
}

function getLinks(frontmatter: Frontmatter) {
  const linkFields = [
    ["githubUrl", "GitHub"],
    ["liveUrl", "Live site"],
    ["affiliateUrl", "Affiliate link"],
  ] as const;

  return linkFields.flatMap(([key, label]) => {
    const href = optionalString(frontmatter, key);
    return href ? [{ href, label }] : [];
  });
}

function getContentKind(
  relativeFilePath: string,
  frontmatter: Frontmatter,
): ContentKind | undefined {
  const folder = relativeFilePath.split("/")[0];
  return (
    normalizeKind(optionalString(frontmatter, "kind")) ??
    normalizeKind(folder)
  );
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

async function readContent(
  relativeFilePath: string,
): Promise<ContentItem | undefined> {
  const absolutePath = path.join(contentDirectory, relativeFilePath);
  const source = await readFile(absolutePath, "utf8");

  if (!source.trim()) return undefined;

  const filePath = `content/${relativeFilePath}`;
  const { frontmatter, content } = parseMdx(source, filePath);
  const kind = getContentKind(relativeFilePath, frontmatter);
  if (!kind) return undefined;

  const slug = path.basename(relativeFilePath, path.extname(relativeFilePath));
  const title =
    optionalString(frontmatter, "title") ??
    titleFromHeading(content) ??
    slug;

  return {
    slug,
    id: `${kind}/${slug}`,
    kind,
    section: kind,
    route: `/${kindRoutes[kind]}/${slug}`,
    title,
    description: optionalString(frontmatter, "description"),
    category: optionalString(frontmatter, "category") ?? kind,
    tags: stringArray(frontmatter, "tags"),
    date: optionalString(frontmatter, "date"),
    readingTime: getReadingTime(content),
    links: getLinks(frontmatter),
    selected: booleanValue(frontmatter, "selected"),
    author: optionalString(frontmatter, "author"),
    source: optionalString(frontmatter, "source"),
    content,
  };
}

function matchesKinds(
  item: ContentItem,
  kinds?: ContentKind | ContentKind[],
) {
  if (!kinds) return true;
  const requested = Array.isArray(kinds) ? kinds : [kinds];
  return requested.includes(item.kind);
}

export async function getContentItems(
  kinds?: ContentKind | ContentKind[],
): Promise<ContentItem[]> {
  const files = await getContentFiles();
  const contentItems = (await Promise.all(files.map(readContent))).filter(
    (item): item is ContentItem => Boolean(item),
  );

  return contentItems
    .filter((item) => matchesKinds(item, kinds))
    .sort((first, second) => {
      if (first.date && second.date) {
        return (
          second.date.localeCompare(first.date) ||
          first.title.localeCompare(second.title)
        );
      }
      if (first.date) return -1;
      if (second.date) return 1;
      return first.title.localeCompare(second.title);
    });
}

export async function getContentItem(slug: string, kind?: ContentKind) {
  const contentItems = await getContentItems(kind);
  return contentItems.find((item) => item.slug === slug);
}

export async function getSelectedContentItems() {
  return (await getContentItems("project")).filter((item) => item.selected);
}
