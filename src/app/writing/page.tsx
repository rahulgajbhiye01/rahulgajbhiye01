import type { Metadata } from "next";

import { ContentCollection } from "@/components/content-collection";
import { entryTypeLabel, getContentItems } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Writing",
  description: "Notes and practical guides by Rahul Gajbhiye on software, infrastructure, and engineering work.",
  pathname: "/writing",
});

export default async function WritingPage() {
  const allArticles = await getContentItems("article");
  const items = allArticles.filter((item) => entryTypeLabel(item) !== "Cheatsheet");

  return (
    <ContentCollection
      title="Writing"
      description="Notes and practical guides on software, infrastructure, and engineering work."
      items={items}
    />
  );
}
