import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { optionalString, parseMdx, requiredString, stringArray } from "@/lib/frontmatter";

export type Post = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  date?: string;
  readingTime: string;
};

const postsDirectory = path.join(process.cwd(), "content", "posts");
const wordsPerMinute = 200;

function getReadingTime(content: string) {
  const words = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]+>/g, " ")
    .match(/[\p{L}\p{N}]+(?:['-][\p{L}\p{N}]+)*/gu);
  const minutes = Math.max(1, Math.ceil((words?.length ?? 0) / wordsPerMinute));

  return `${minutes} min read`;
}

async function readPost(fileName: string): Promise<Post> {
  const source = await readFile(path.join(postsDirectory, fileName), "utf8");
  const filePath = `content/posts/${fileName}`;
  const { frontmatter, content } = parseMdx(source, filePath);

  return {
    slug: fileName.replace(/\.mdx$/, ""),
    title: requiredString(frontmatter, "title", filePath),
    description: requiredString(frontmatter, "description", filePath),
    tags: stringArray(frontmatter, "tags"),
    date: optionalString(frontmatter, "date"),
    readingTime: getReadingTime(content),
  };
}

export async function getPosts(): Promise<Post[]> {
  try {
    const files = await readdir(postsDirectory);
    const posts = await Promise.all(files.filter((file) => file.endsWith(".mdx")).map(readPost));

    return posts.sort((first, second) => (second.date ?? "").localeCompare(first.date ?? "") || first.title.localeCompare(second.title));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
