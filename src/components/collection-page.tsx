import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import { getContentItems, type ContentKind } from "@/lib/content";

type KindListPageProps = {
  kinds: ContentKind | ContentKind[];
  title: string;
  description: string;
  emptyMessage?: string;
  backHref?: string;
  backLabel?: string;
};

export async function KindListPage({
  kinds,
  title,
  description,
  emptyMessage = "Nothing published here yet.",
  backHref = "/",
  backLabel = "← Back to home",
}: KindListPageProps) {
  const items = await getContentItems(kinds);

  return (
    <main className="flex flex-col py-10 sm:py-14">
      <Link
        href={backHref}
        className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {backLabel}
      </Link>
      <div className="mb-8 mt-6 max-w-4xl">
        <h1 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted">{description}</p>
      </div>
      <div className="max-w-4xl">
        {items.map((item) => (
          <ContentCard key={item.id} href={item.route} {...item} />
        ))}
      </div>
      {items.length === 0 ? (
        <p className="py-12 text-sm text-muted">{emptyMessage}</p>
      ) : null}
    </main>
  );
}
