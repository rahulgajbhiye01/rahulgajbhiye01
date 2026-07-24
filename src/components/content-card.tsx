import Link from "next/link";

import { ExternalLinkBadge } from "@/components/external-link-badge";
import { TagList } from "@/components/tag-list";

type ContentLink = {
  href: string;
  label: string;
};

type ContentCardProps = {
  href: string;
  title: string;
  description: string;
  category: string;
  tags: readonly string[];
  date: string;
  readingTime: string;
  links?: readonly ContentLink[];
  compact?: boolean;
};

export function ContentCard({
  href,
  title,
  description,
  category,
  tags,
  date,
  readingTime,
  links = [],
  compact = false,
}: ContentCardProps) {
  return (
    <article
      className={`group border-t border-border transition-colors duration-200 hover:border-muted ${compact ? "py-5 sm:py-6" : "py-6 sm:py-7"} first:border-t-0 first:pt-0`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            <Link
              href={href}
              className="transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {title}
            </Link>
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
            {description}
          </p>
        </div>

        <p className="shrink-0 font-mono text-xs text-muted sm:pt-1">
          {date} · {readingTime}
        </p>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
        <span className="rounded-md border border-accent/50 px-2 py-1 font-mono text-xs text-accent">
          {category}
        </span>

        {links.map((link) => (
          <ExternalLinkBadge
            key={link.href}
            href={link.href}
            label={link.label}
          />
        ))}

        {!compact && tags.length > 0 ? (
          <TagList tags={tags} label={`${title} topics`} />
        ) : null}
      </div>
    </article>
  );
}
