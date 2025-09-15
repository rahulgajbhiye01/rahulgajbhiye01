import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Post } from "@/types/post";

// Type for raw frontmatter data from gray-matter
interface RawFrontmatter {
  slug?: string;
  title?: string;
  date?: string;
  excerpt?: string;
  author?: string;
  tags?: string[] | string;
  enableComments?: boolean;
  showTableOfContents?: boolean;
  published?: boolean;
  coverImage?: string;
  readingTime?: number;
  [key: string]: unknown;
}

const postsDirectory = path.join(process.cwd(), "_posts");
const POST_EXTENSIONS = [".md", ".mdx"] as const;

// Simple in-memory cache to avoid disk reads during a single build/runtime
const postCache = new Map<string, Post>();

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function normalizeTags(tags: unknown): string[] | undefined {
  if (!tags) return undefined;
  if (Array.isArray(tags)) {
    return tags
      .map((t) => String(t).trim())
      .filter(Boolean)
      .map((t) => t.replace(/^#/g, ""));
  }
  if (typeof tags === "string") {
    return tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean)
      .map((t) => t.replace(/^#/g, ""));
  }
  return undefined;
}

function toIsoDateOrFallback(dateInput: unknown): string {
  if (!dateInput) return new Date(0).toISOString();
  const d = new Date(String(dateInput));
  return isNaN(d.getTime()) ? new Date(0).toISOString() : d.toISOString();
}

function deriveExcerpt(content: string, existing?: unknown): string {
  if (typeof existing === "string" && existing.trim().length > 0)
    return existing;
  // Take first non-empty paragraph or first 200 chars
  const paragraphs = content.split(/\n\s*\n/).map((p) => p.trim());
  const first = paragraphs.find((p) => p.length > 0) ?? content.trim();
  const excerpt = first.replace(/\s+/g, " ");
  return excerpt.length > 200 ? `${excerpt.slice(0, 197)}...` : excerpt;
}

function stripExtension(filename: string): string {
  const ext = path.extname(filename);
  return POST_EXTENSIONS.includes(ext as (typeof POST_EXTENSIONS)[number])
    ? filename.slice(0, -ext.length)
    : filename;
}

function generateSlugFromFilename(filename: string): string {
  const base = stripExtension(filename);
  return base
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, ""); // Remove leading/trailing hyphens
}

function resolvePostPathBySlug(slug: string): string | null {
  // Accept slugs with or without extension
  const base = stripExtension(slug);
  for (const ext of POST_EXTENSIONS) {
    const full = path.join(postsDirectory, `${base}${ext}`);
    if (fs.existsSync(full)) return full;
  }
  return null;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const baseSlug = stripExtension(slug);

  if (postCache.has(baseSlug)) {
    return postCache.get(baseSlug)!;
  }

  // First try to find by exact slug match
  let fullPath = resolvePostPathBySlug(baseSlug);

  // If not found, try to find by custom slug in frontmatter
  if (!fullPath) {
    const allFiles = fs.readdirSync(postsDirectory);
    for (const filename of allFiles) {
      if (
        POST_EXTENSIONS.includes(
          path.extname(filename) as (typeof POST_EXTENSIONS)[number],
        )
      ) {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, "utf8");
        const { data } = matter(fileContents);

        // Check if this file has a custom slug that matches
        const customSlug = (data as RawFrontmatter).slug;
        if (customSlug && customSlug === baseSlug) {
          fullPath = filePath;
          break;
        }

        // Check if the generated slug from filename matches
        const generatedSlug = generateSlugFromFilename(filename);
        if (generatedSlug === baseSlug) {
          fullPath = filePath;
          break;
        }
      }
    }
  }

  if (!fullPath) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const readingTime = calculateReadingTime(content);

  // Use custom slug if provided, otherwise generate from filename
  const finalSlug =
    (data as RawFrontmatter).slug ||
    generateSlugFromFilename(path.basename(fullPath));

  const rawData = data as RawFrontmatter;
  const normalized: Post = {
    slug: finalSlug,
    title: String(rawData.title ?? finalSlug),
    date: toIsoDateOrFallback(rawData.date),
    excerpt: deriveExcerpt(content, rawData.excerpt),
    author: rawData.author ? String(rawData.author) : undefined,
    tags: normalizeTags(rawData.tags),
    enableComments: rawData.enableComments ?? undefined,
    showTableOfContents: rawData.showTableOfContents ?? undefined,
    published: rawData.published ?? true,
    coverImage: rawData.coverImage ?? undefined,
    readingTime,
    content,
  };

  postCache.set(finalSlug, normalized);
  return normalized;
}

export function getAllPostSlugs() {
  const filenames = fs.readdirSync(postsDirectory);
  const slugs: { params: { slug: string } }[] = [];

  for (const filename of filenames) {
    if (
      POST_EXTENSIONS.includes(
        path.extname(filename) as (typeof POST_EXTENSIONS)[number],
      )
    ) {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      // Use custom slug if provided, otherwise generate from filename
      const slug =
        (data as RawFrontmatter).slug || generateSlugFromFilename(filename);

      slugs.push({
        params: {
          slug: slug,
        },
      });
    }
  }

  return slugs;
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(
    slugs.map((s) => getPostBySlug(s.params.slug)),
  );
  return posts
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
