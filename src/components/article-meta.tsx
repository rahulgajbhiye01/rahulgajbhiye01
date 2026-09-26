import { formatDisplayDate } from "@/lib/format";

type ArticleMetaProps = {
  date?: string;
  readingTime?: string;
  type?: string;
  tags?: readonly string[];
};

export function ArticleMeta({
  date,
  readingTime,
  type,
  tags = [],
}: ArticleMetaProps) {
  const meta = [formatDisplayDate(date), readingTime, type]
    .filter(Boolean)
    .join(" · ");

  if (!meta && tags.length === 0) {
    return null;
  }

  return (
    <div className="mt-4 space-y-3">
      {meta ? (
        <p className="font-mono text-[0.7rem] tracking-[0.04em] text-muted">
          {meta}
        </p>
      ) : null}
      {tags.length > 0 ? (
        <ul className="flex flex-wrap gap-x-3 gap-y-2" aria-label="Tags">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-sm border border-border px-2 py-1 font-mono text-[0.7rem] text-muted"
            >
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
