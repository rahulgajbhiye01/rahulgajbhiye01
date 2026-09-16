import type { Metadata } from "next";

import { KindListPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Articles and cheatsheets on systems, software delivery, and practical engineering.",
};

export default function WritingPage() {
  return (
    <KindListPage
      kinds={["article", "cheatsheet"]}
      title="Writing"
      description="Long-form notes and practical references. Articles and cheatsheets live here; permalinks stay on their own paths."
      emptyMessage="No writing published yet."
    />
  );
}
