import { ArchiveList, type ArchiveEntry } from "@/components/archive-list";
import { PageHeader } from "@/components/page-header";
import { entryTypeLabel, getContentItems } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Archive",
  description: "Notes, cheatsheets, and projects by Rahul Gajbhiye.",
  pathname: "/archive",
});

export default async function ArchivePage() {
  const items = await getContentItems();
  const entries: ArchiveEntry[] = items.map((item) => ({
    id: item.id,
    href: item.route,
    section: item.section,
    title: item.title,
    description: item.description,
    date: item.date,
    type: entryTypeLabel(item),
    readingTime: item.readingTime,
  }));

  return (
    <main className="enter flex flex-col">
      <PageHeader
        title="Archive"
        description="Notes, cheatsheets, and projects."
      />
      <div className="mt-10">
        <ArchiveList entries={entries} />
      </div>
    </main>
  );
}
