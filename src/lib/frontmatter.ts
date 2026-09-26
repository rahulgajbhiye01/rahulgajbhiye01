import matter from "gray-matter";

export type Frontmatter = Record<string, unknown>;

export type ParsedMdx = {
  frontmatter: Frontmatter;
  content: string;
};

export function booleanValue(
  frontmatter: Frontmatter,
  key: string,
  fallback = false,
) {
  const value = frontmatter[key];
  return typeof value === "boolean" ? value : fallback;
}

export function optionalString(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];

  if (value instanceof Date && !Number.isNaN(value.getTime())) {
    return value.toISOString().slice(0, 10);
  }

  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }

  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }

  return undefined;
}

export function stringArray(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];

  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item.trim() : String(item)))
      .filter(Boolean);
  }

  if (typeof value === "string" && value.trim()) {
    return [value.trim()];
  }

  return [];
}

export function parseMdx(source: string): ParsedMdx {
  const { data, content } = matter(source);
  return {
    frontmatter: data as Frontmatter,
    content,
  };
}
