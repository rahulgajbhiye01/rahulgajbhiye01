import { EntryRow } from "@/components/entry-row";
import { PageHeader } from "@/components/page-header";
import { entryTypeLabel, type ContentItem } from "@/lib/content";

export function ContentCollection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: ContentItem[];
}) {
  return (
    <main className="enter flex flex-col">
      <PageHeader title={title} description={description} />
      <section aria-label={title} className="mt-10">
        {items.length ? (
          items.map((item) => (
            <EntryRow
              key={item.id}
              href={item.route}
              title={item.title}
              description={item.description}
              date={item.date}
              type={entryTypeLabel(item)}
              readingTime={item.readingTime}
            />
          ))
        ) : (
          <p className="border-t border-border pt-6 text-sm leading-7 text-muted">
            This collection is being prepared. Check the archive for published entries.
          </p>
        )}
      </section>
    </main>
  );
}
