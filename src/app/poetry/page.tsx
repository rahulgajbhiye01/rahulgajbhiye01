import type { Metadata } from "next";

import { KindListPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Poetry",
  description: "Personal poems by Rahul Gajbhiye.",
};

export default function PoetryPage() {
  return (
    <KindListPage
      kinds="poetry"
      title="Poetry"
      description="Personal writing, kept off the main nav."
      emptyMessage="No poems published yet."
    />
  );
}
