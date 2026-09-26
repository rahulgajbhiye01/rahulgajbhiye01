import { readFile } from "node:fs/promises";
import path from "node:path";

import fg from "fast-glob";
import readingTime from "reading-time";

import {
  booleanValue,
  optionalString,
  parseMdx,
  stringArray,
} from "@/lib/frontmatter";
import type { Frontmatter } from "@/lib/frontmatter";
import { firstHeading } from "@/lib/headings";

export type ContentLink = {
  href: string;
  label: string;
};

export type ContentKind = "project" | "article";
export type ContentSection = "projects" | "writing" | "cheatsheets";

export type ContentItem = {
  slug: string;
  id: string;
  kind: ContentKind;
  section: ContentSection;
  route: string;
  title: string;
  description: string;
  category?: string;
  tags: string[];
  date?: string;
  updated?: string;
  image?: string;
  readingTime: string;
  links: ContentLink[];
  selected: boolean;
  status?: string;
  author?: string;
  source?: string;
  content: string;
};

const contentDirectory = path.join(process.cwd(), "content");

const reservedSlugs = new Set([
  "about",
  "archive",
  "article",
  "articles",
  "projects",
  "work",
  "writing",
  "cheatsheets",
]);

const folderToKind: Record<string, ContentKind> = {
  projects: "project",
  project: "project",
  work: "project",
  notes: "article",
  articles: "article",
  article: "article",
  blog: "article",
  cheatsheets: "article",
  cheatsheet: "article",
};

function normalizeKind(value: string | undefined): ContentKind | undefined {
  if (!value) return undefined;
  return folderToKind[value];
}

function getReadingTime(content: string) {
  return readingTime(content).text;
}

function titleFromSlug(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function descriptionFromContent(content: string) {
  const paragraph = content
    .split(/\r?\n\s*\r?\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith("#") && !block.startsWith("```"));

  if (!paragraph) return undefined;

  const text = paragraph
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[*_`>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return undefined;
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}…` : text;
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

async function getContentFiles(): Promise<string[]> {
  return fg(["**/*.md", "**/*.mdx"], {
    cwd: contentDirectory,
    ignore: ["**/_*", "**/_*/**"],
    onlyFiles: true,
  });
}

async function readContent(
  relativeFilePath: string,
): Promise<ContentItem | undefined> {
  const absolutePath = path.join(contentDirectory, relativeFilePath);
  const source = await readFile(absolutePath, "utf8");

  if (!source.trim()) return undefined;

  const { frontmatter, content } = parseMdx(source);
  const declaredKind = optionalString(frontmatter, "kind");

  if (booleanValue(frontmatter, "draft")) return undefined;

  const kind = getContentKind(relativeFilePath, frontmatter);
  if (!kind) {
    console.warn(
      `[content] skipped ${relativeFilePath}: set kind: article or kind: project to publish, or draft: true to keep it off the site.`,
    );
    return undefined;
  }

  const slug = path.basename(relativeFilePath, path.extname(relativeFilePath));

  if (reservedSlugs.has(slug)) {
    console.warn(
      `[content] skipped ${relativeFilePath}: "${slug}" is reserved for site routes.`,
    );
    return undefined;
  }

  const declaredTitle = optionalString(frontmatter, "title") ?? firstHeading(content);
  const title = declaredTitle ?? titleFromSlug(slug);
  const description =
    optionalString(frontmatter, "description") ?? descriptionFromContent(content);

  if (!declaredTitle) {
    console.warn(`[seo] ${relativeFilePath}: add a descriptive title to the frontmatter.`);
  }
  if (!optionalString(frontmatter, "description")) {
    console.warn(`[seo] ${relativeFilePath}: add a custom search description; using an excerpt until then.`);
  }
  const folder = relativeFilePath.split("/")[0];
  const isCheatsheet =
    declaredKind === "cheatsheet" ||
    folder === "cheatsheet" ||
    folder === "cheatsheets" ||
    optionalString(frontmatter, "category")?.toLowerCase() === "cheatsheet" ||
    /cheat[-_]?sheet/i.test(slug);
  const section: ContentSection =
    kind === "project" ? "projects" : isCheatsheet ? "cheatsheets" : "writing";

  return {
    slug,
    id: `${kind}/${slug}`,
    kind,
    section,
    route: `/${section}/${slug}`,
    title,
    description: description ?? `${title} by Rahul Gajbhiye.`,
    category:
      optionalString(frontmatter, "category") ??
      (isCheatsheet ? "Cheatsheet" : kind),
    tags: stringArray(frontmatter, "tags"),
    date: optionalString(frontmatter, "date"),
    updated: optionalString(frontmatter, "updated"),
    image: optionalString(frontmatter, "image"),
    readingTime: getReadingTime(content),
    links: getLinks(frontmatter),
    selected: booleanValue(frontmatter, "selected"),
    status: optionalString(frontmatter, "status"),
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

  const slugs = new Set<string>();
  for (const item of contentItems) {
    if (slugs.has(item.slug)) {
      throw new Error(
        `[content] duplicate published slug "${item.slug}"; each entry needs a unique slug for legacy URL redirects.`,
      );
    }
    slugs.add(item.slug);
  }

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

export async function getContentItemBySection(
  section: ContentSection,
  slug: string,
) {
  const items = await getContentItems();
  return items.find((item) => item.section === section && item.slug === slug);
}

export async function getSelectedContentItems() {
  return (await getContentItems()).filter((item) => item.selected);
}

export function getAdjacentItems(items: ContentItem[], slug: string) {
  const index = items.findIndex((item) => item.slug === slug);
  if (index < 0) {
    return { previous: undefined, next: undefined };
  }

  return {
    previous: items[index + 1],
    next: items[index - 1],
  };
}

export function entryTypeLabel(
  item: Pick<ContentItem, "kind" | "category" | "slug" | "title">,
) {
  if (item.kind === "project") return "Project";

  const category = item.category?.trim();
  if (category && category.toLowerCase() !== "article" && category.toLowerCase() !== item.kind) {
    return category;
  }

  const haystack = `${item.slug} ${item.title}`.toLowerCase();
  if (haystack.includes("cheatsheet") || haystack.includes("cheat-sheet")) {
    return "Cheatsheet";
  }

  return "Note";
}
