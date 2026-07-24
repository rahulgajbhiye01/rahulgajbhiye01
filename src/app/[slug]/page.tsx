import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { ExternalLinkBadge } from "@/components/external-link-badge";
import { MdxContent } from "@/components/mdx-content";
import { TagList } from "@/components/tag-list";
import { getContentItem, getContentItems } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getContentItems()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getContentItem(slug);
  return item ? { title: item.title, description: item.description } : {};
}

export default async function ContentPage({ params }: Props) {
  const { slug } = await params;
  const item = await getContentItem(slug);
  if (!item) notFound();

  return (
    <main className="flex flex-col py-10 sm:py-14 lg:py-16">
      <Link
        href="/archive"
        className="inline-flex items-center text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <span aria-hidden="true" className="mr-2">
          ←
        </span>
        Back to Archive
      </Link>
      <article className="mt-8 flex flex-col">
        <p className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.24em] text-accent sm:text-xs">
          {item.category}
        </p>

        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold tracking-[-0.02em] text-foreground sm:text-5xl lg:text-[3.35rem]">
          {item.title}
        </h1>

        <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-muted sm:text-[1rem] sm:leading-8">
          {item.description}
        </p>

        <div className="mt-8 flex flex-col gap-4 border-t border-border/70 pt-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
            {item.links.map((link) => (
              <ExternalLinkBadge
                key={link.href}
                href={link.href}
                label={link.label}
              />
            ))}

            <TagList tags={item.tags} label={`${item.title} topics`} />
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-muted sm:text-xs">
            <time dateTime={item.date}>{item.date}</time>
            <span className="text-border/80">•</span>
            <span>{item.readingTime}</span>
          </div>
        </div>

        <MdxContent source={item.content} />
      </article>
    </main>
  );
}
