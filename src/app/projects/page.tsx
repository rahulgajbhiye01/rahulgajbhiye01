import type { Metadata } from "next";

import { KindListPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Projects",
  description: "Apps and products by Rahul Gajbhiye.",
};

export default function ProjectsPage() {
  return (
    <KindListPage
      kinds="project"
      title="Projects"
      description="Software I am building and shipping. Writeups appear here when a project is ready to share."
      emptyMessage="No project writeups yet. Check back as apps go public."
    />
  );
}
