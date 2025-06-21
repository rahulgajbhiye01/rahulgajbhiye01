import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/blogs");

export type BlogMeta = {
  title: string;
  date: string;
  description?: string;
  author?: string;
  category?: string[];
  keywords?: string;
};

export type BlogPost = {
  slug: string;
  content: string;
  meta: BlogMeta;
};

function parsePost(fileName: string): BlogPost {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const meta: BlogMeta = {
    title: data.title,
    date: data.date || new Date().toISOString(),
    description: data.description,
    author: data.author,
    category: data.category,
    keywords: data.keywords,
  };

  return { slug, meta, content };
}

export function getAllPosts(): BlogPost[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".md"))
    .map(parsePost)
    .sort((a, b) => Date.parse(b.meta.date) - Date.parse(a.meta.date));
}

export function getPost(slug: string): BlogPost {
  const filePath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post with slug "${slug}" not found.`);
  }

  return parsePost(`${slug}.md`);
}
