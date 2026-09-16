export type FrontmatterValue = boolean | string | string[];
export type Frontmatter = Record<string, FrontmatterValue>;

export type ParsedMdx = {
  frontmatter: Frontmatter;
  content: string;
};

export function parseInlineList(value: string) {
  const content = value.trim().replace(/^\[|\]$/g, "");
  return content
    .split(/,\s*/)
    .map((item) => unquote(item))
    .filter(Boolean);
}

export function booleanValue(
  frontmatter: Frontmatter,
  key: string,
  fallback = false,
) {
  const value = frontmatter[key];
  return typeof value === "boolean" ? value : fallback;
}

export function requiredString(frontmatter: Frontmatter, key: string, filePath: string) {
  const value = frontmatter[key];
  if (typeof value !== "string" || !value) {
    throw new Error(`Missing \"${key}\" in ${filePath}.`);
  }
  return value;
}

export function optionalString(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];
  return typeof value === "string" && value ? value : undefined;
}

export function stringArray(frontmatter: Frontmatter, key: string) {
  const value = frontmatter[key];
  return Array.isArray(value) ? value : parseInlineList(String(value ?? ""));
}

export function parseMdx(source: string, filePath: string): ParsedMdx {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)/);
  if (!match) return { frontmatter: {}, content: source };

  const frontmatter: Frontmatter = {};
  const lines = match[1].split(/\r?\n/);

  for (let index = 0; index < lines.length; index += 1) {
    const field = lines[index].match(/^([\w-]+):\s*(.*)$/);
    if (!field) continue;

    const [, key, rawValue] = field;
    if (rawValue) {
      frontmatter[key] = parseValue(rawValue);
      continue;
    }

    const values: string[] = [];
    while (lines[index + 1]?.match(/^\s+-\s+.+$/)) {
      index += 1;
      values.push(unquote(lines[index].replace(/^\s+-\s+/, "")));
    }
    frontmatter[key] = values;
  }

  return { frontmatter, content: source.slice(match[0].length) };
}

function unquote(value: string) {
  return value.trim().replace(/^['"]|['"]$/g, "");
}

function parseValue(value: string): string | string[] | boolean {
  const normalized = value.trim();
  if (normalized.startsWith("[")) return parseInlineList(normalized);
  if (normalized === "true") return true;
  if (normalized === "false") return false;
  return unquote(normalized);
}
