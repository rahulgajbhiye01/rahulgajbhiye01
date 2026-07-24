import type { Metadata } from "next";
import Link from "next/link";

import { ArchiveList } from "@/components/archive-list";
import { getContentItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Notes, insights, projects, and practical references by Rahul Gajbhiye.",
};

export default async function ArchivePage() {
  const contentItems = await getContentItems();

  return (
    <main className="flex flex-col py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← Back to home
      </Link>
      <div className="mb-8 mt-6 max-w-4xl">
        <h1 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Archive
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          A searchable archive of notes, experiments, and product thinking that
          shaped the work.
        </p>
      </div>
      <ArchiveList
        items={contentItems.map(({ content: _content, ...item }) => item)}
      />
    </main>
  );
}
