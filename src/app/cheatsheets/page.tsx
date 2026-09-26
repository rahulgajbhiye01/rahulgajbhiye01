import type { Metadata } from "next";

import { ContentCollection } from "@/components/content-collection";
import { entryTypeLabel, getContentItems } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Cheatsheets",
  description: "Quick references for developer tools and workflows by Rahul Gajbhiye.",
  pathname: "/cheatsheets",
});

export default async function CheatsheetsPage() {
  const allArticles = await getContentItems("article");
  const items = allArticles.filter((item) => entryTypeLabel(item) === "Cheatsheet");

  return (
    <ContentCollection
      title="Cheatsheets"
      description="Quick references for developer tools and workflows."
      items={items}
    />
  );
}
