import { cache } from "react";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { optionalString, parseMdx } from "@/lib/frontmatter";

export type CurrentlyItem = {
  label: string;
  text: string;
};

export type CollaborateLink = {
  label: string;
  href: string;
};

export type SiteCopy = {
  tagline: string;
  support?: string;
  kicker: string;
  collaborate?: CollaborateLink;
  currently: CurrentlyItem[];
};

export type AboutCopy = {
  title: string;
  description?: string;
  content: string;
};

const contentDirectory = path.join(process.cwd(), "content");

function collaborateLink(value: unknown): CollaborateLink | undefined {
  if (!value || typeof value !== "object") return undefined;

  const record = value as Record<string, unknown>;
  const label = typeof record.label === "string" ? record.label.trim() : "";
  const href = typeof record.href === "string" ? record.href.trim() : "";

  return label && href ? { label, href } : undefined;
}

function currentlyItems(value: unknown): CurrentlyItem[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((item) => {
    if (!item || typeof item !== "object") return [];

    const record = item as Record<string, unknown>;
    const label =
      typeof record.label === "string" ? record.label.trim() : "";
    const text = typeof record.text === "string" ? record.text.trim() : "";

    return label && text ? [{ label, text }] : [];
  });
}

export const getSite = cache(async (): Promise<SiteCopy> => {
  const source = await readFile(
    path.join(contentDirectory, "_site.mdx"),
    "utf8",
  );
  const { frontmatter } = parseMdx(source);

  return {
    tagline:
      optionalString(frontmatter, "tagline") ??
      "I build software and write down how I do it.",
    support: optionalString(frontmatter, "support"),
    kicker: optionalString(frontmatter, "kicker") ?? "A living archive",
    collaborate: collaborateLink(frontmatter.collaborate),
    currently: currentlyItems(frontmatter.currently),
  };
});

export const getAbout = cache(async (): Promise<AboutCopy> => {
  const source = await readFile(
    path.join(contentDirectory, "_about.mdx"),
    "utf8",
  );
  const { frontmatter, content } = parseMdx(source);

  return {
    title: optionalString(frontmatter, "title") ?? "About",
    description: optionalString(frontmatter, "description"),
    content,
  };
});
