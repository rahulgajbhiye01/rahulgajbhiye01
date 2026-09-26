import type { Heading } from "mdast";
import { toString } from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import { visit } from "unist-util-visit";

export type ArticleHeading = {
  id: string;
  text: string;
  level: 2 | 3;
};

export function normalizeHeading(value: string) {
  return value.replace(/\s+/g, " ").trim().toLowerCase();
}

export function firstHeading(source: string) {
  const tree = remark().use(remarkGfm).parse(source);
  let title: string | undefined;

  visit(tree, "heading", (node: Heading) => {
    if (title || node.depth !== 1) return;
    const text = toString(node).trim();
    if (text) title = text;
  });

  return title;
}

export function extractHeadings(
  source: string,
  pageTitle?: string,
): ArticleHeading[] {
  const tree = remark().use(remarkGfm).parse(source);
  const slugger = new GithubSlugger();
  const headings: ArticleHeading[] = [];
  let skippedMatchingTitle = false;

  visit(tree, "heading", (node: Heading) => {
    if (node.depth > 3) return;

    const text = toString(node).trim();
    if (!text) return;

    const id = slugger.slug(text) || "section";

    if (
      pageTitle &&
      !skippedMatchingTitle &&
      node.depth === 1 &&
      normalizeHeading(text) === normalizeHeading(pageTitle)
    ) {
      skippedMatchingTitle = true;
      return;
    }

    if (node.depth === 1) {
      headings.push({ id, text, level: 2 });
      return;
    }

    headings.push({
      id,
      text,
      level: node.depth === 2 ? 2 : 3,
    });
  });

  return headings;
}
