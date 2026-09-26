import Link from "next/link";

import { formatDisplayDate } from "@/lib/format";

type EntryRowProps = {
  href: string;
  title: string;
  description?: string;
  date?: string;
  type?: string;
  readingTime?: string;
};

export function EntryRow({
  href,
  title,
  description,
  date,
  type,
  readingTime,
}: EntryRowProps) {
  const meta = [formatDisplayDate(date), type, readingTime]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="group grid gap-2 border-t border-border py-6 first:border-t-0 first:pt-0 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-8">
        <h3 className="font-serif text-xl tracking-tight text-foreground sm:text-[1.35rem]">
          <Link
            href={href}
            className="link-underline transition-[opacity,color] duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
          >
            {title}
          </Link>
        </h3>
        {description ? (
          <p className="mt-2 max-w-[42rem] text-[0.98rem] leading-7 text-muted">
            {description}
          </p>
        ) : null}
      </div>
      {meta ? (
        <p className="font-mono text-[0.7rem] tracking-[0.04em] text-muted lg:col-span-4 lg:pt-1.5 lg:text-right">
          {meta}
        </p>
      ) : null}
    </article>
  );
}
