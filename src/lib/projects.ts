import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import { optionalString, parseMdx, requiredString, stringArray } from "@/lib/frontmatter";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  architectureUrl?: string;
};

const projectsDirectory = path.join(process.cwd(), "content", "projects");

async function readProject(fileName: string): Promise<Project> {
  const source = await readFile(path.join(projectsDirectory, fileName), "utf8");
  const { frontmatter } = parseMdx(source, `content/projects/${fileName}`);

  return {
    slug: fileName.replace(/\.mdx$/, ""),
    title: requiredString(frontmatter, "title", `content/projects/${fileName}`),
    summary: requiredString(frontmatter, "summary", `content/projects/${fileName}`),
    tags: stringArray(frontmatter, "tags"),
    githubUrl: requiredString(frontmatter, "githubUrl", `content/projects/${fileName}`),
    demoUrl: optionalString(frontmatter, "demoUrl"),
    architectureUrl: optionalString(frontmatter, "architectureUrl"),
  };
}

export async function getProjects(): Promise<Project[]> {
  try {
    const files = await readdir(projectsDirectory);
    const projects = await Promise.all(files.filter((file) => file.endsWith(".mdx")).map(readProject));

    return projects.sort((first, second) => first.title.localeCompare(second.title));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
}
