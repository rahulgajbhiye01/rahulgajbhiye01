import { access, readFile } from "node:fs/promises";
import path from "node:path";

import fg from "fast-glob";
import matter from "gray-matter";

const root = process.cwd();
const contentRoot = path.join(root, "content");
const files = await fg(["**/*.md", "**/*.mdx"], {
  cwd: contentRoot,
  ignore: ["**/_*", "**/_*/**"],
  onlyFiles: true,
});

const slugs = new Map();
const issues = [];

for (const relativePath of files.sort()) {
  const source = await readFile(path.join(contentRoot, relativePath), "utf8");
  const slug = path.basename(relativePath, path.extname(relativePath));
  const { data, content } = matter(source);
  const location = `content/${relativePath}`;

  if (!source.trim()) {
    issues.push({ level: "INFO", location, message: "empty file is unpublished" });
    continue;
  }
  if (data.draft === true) continue;

  const previous = slugs.get(slug);
  if (previous) {
    issues.push({
      level: "ERROR",
      location,
      message: `duplicate flat URL slug also used by ${previous}`,
    });
  } else {
    slugs.set(slug, location);
  }

  if (!String(data.title ?? "").trim()) {
    issues.push({ level: "WARN", location, message: "add a descriptive title" });
  } else if (String(data.title).trim().length < 12) {
    issues.push({
      level: "WARN",
      location,
      message: "review the short title and add topic context if it is too broad",
    });
  }
  if (!String(data.description ?? "").trim()) {
    issues.push({
      level: "WARN",
      location,
      message: "add a custom search and sharing description",
    });
  } else if (String(data.description).length > 200) {
    issues.push({
      level: "WARN",
      location,
      message: "description is over 200 characters; consider shortening it",
    });
  }
  if (!content.trim()) {
    issues.push({ level: "WARN", location, message: "body is empty; keep unpublished until written" });
  }

  const publishedDate = data.date instanceof Date ? data.date : new Date(data.date);
  if (data.date && Number.isNaN(publishedDate.getTime())) {
    issues.push({ level: "ERROR", location, message: "date must be a valid publication date" });
  }
  if (data.updated) {
    const updatedDate = data.updated instanceof Date ? data.updated : new Date(data.updated);
    if (Number.isNaN(updatedDate.getTime())) {
      issues.push({ level: "ERROR", location, message: "updated must be a valid date" });
    } else if (!Number.isNaN(publishedDate.getTime()) && updatedDate < publishedDate) {
      issues.push({ level: "WARN", location, message: "updated date is earlier than the publication date" });
    }
  }

  if (data.image) {
    const publicRoot = path.resolve(root, "public");
    const imagePath = path.resolve(publicRoot, String(data.image).replace(/^\//, ""));
    if (
      !String(data.image).startsWith("/") ||
      String(data.image).startsWith("//") ||
      !imagePath.startsWith(`${publicRoot}${path.sep}`)
    ) {
      issues.push({ level: "ERROR", location, message: "image must use a local public/ path" });
    } else {
      try {
        await access(imagePath);
      } catch {
        issues.push({ level: "WARN", location, message: `image does not exist: ${data.image}` });
      }
    }
  }
}

for (const issue of issues) {
  console.log(`${issue.level} ${issue.location}: ${issue.message}`);
}

const errorCount = issues.filter((issue) => issue.level === "ERROR").length;
const warningCount = issues.filter((issue) => issue.level === "WARN").length;
const infoCount = issues.filter((issue) => issue.level === "INFO").length;
console.log(
  `SEO content audit: ${files.length} files, ${warningCount} warning(s), ${errorCount} error(s), ${infoCount} empty file(s).`,
);

if (errorCount) process.exitCode = 1;
