import Link from "next/link";

import { ArticleMeta } from "@/components/article-meta";
import { ArticleToc } from "@/components/article-toc";
import { BackLink } from "@/components/collection-page";
import { ExternalLinkBadge } from "@/components/external-link-badge";
import { MdxContent } from "@/components/mdx-content";
import { JsonLd } from "@/components/json-ld";
import {
  entryTypeLabel,
  getAdjacentItems,
  type ContentItem,
} from "@/lib/content";
import { extractHeadings } from "@/lib/headings";
import { contentJsonLd } from "@/lib/seo";

export function ContentEntry({
  item,
  items,
  image,
}: {
  item: ContentItem;
  items: ContentItem[];
  image?: string;
}) {
  const { previous, next } = getAdjacentItems(items, item.slug);
  const headings = extractHeadings(item.content, item.title);
  const showOutline = headings.length >= 2;

  return (
    <main className="enter flex flex-col">
      <JsonLd data={contentJsonLd(item, image)} />
      <div
        className={
          showOutline
            ? "lg:grid lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-x-12"
            : undefined
        }
      >
        <div className="min-w-0">
          <BackLink href="/archive">Archive</BackLink>
          <h1 className="mt-8 font-serif text-[2.05rem] leading-[1.12] tracking-[-0.035em] text-foreground sm:text-[2.55rem]">
            {item.title}
          </h1>
          <ArticleMeta
            date={item.date}
            readingTime={item.readingTime}
            type={entryTypeLabel(item)}
            tags={item.tags}
          />
          <p className="mt-5 max-w-[40rem] font-serif text-[1.15rem] leading-8 text-muted">
            {item.description}
          </p>

          {item.links.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-4">
              {item.links.map((link) => (
                <ExternalLinkBadge
                  key={link.href}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          ) : null}
        </div>

        {showOutline ? (
          <div className="min-w-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <ArticleToc headings={headings} />
          </div>
        ) : null}

        <div className="mt-10 min-w-0">
          <MdxContent source={item.content} pageTitle={item.title} />

          {(previous || next) && (
            <nav
              aria-label="Adjacent entries"
              className="mt-16 grid gap-8 border-t border-border pt-8 lg:grid-cols-2"
            >
              {previous ? (
                <div>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                    Earlier
                  </p>
                  <Link
                    href={previous.route}
                    className="link-underline mt-2 inline-block max-w-full font-serif text-lg tracking-tight text-foreground"
                  >
                    {previous.title}
                  </Link>
                </div>
              ) : null}
              {next ? (
                <div className={previous ? "lg:text-right" : "lg:col-start-2 lg:text-right"}>
                  <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                    Later
                  </p>
                  <Link
                    href={next.route}
                    className="link-underline mt-2 inline-block max-w-full font-serif text-lg tracking-tight text-foreground"
                  >
                    {next.title}
                  </Link>
                </div>
              ) : null}
            </nav>
          )}
        </div>
      </div>
    </main>
  );
}
