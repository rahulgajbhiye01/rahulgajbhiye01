import type { Metadata } from "next";

import { ContentCollection } from "@/components/content-collection";
import { getContentItems } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Projects",
  description: "Software and experiments built by Rahul Gajbhiye.",
  pathname: "/projects",
});

export default async function ProjectsPage() {
  const items = await getContentItems("project");

  return (
    <ContentCollection
      title="Projects"
      description="Software and experiments built by Rahul Gajbhiye."
      items={items}
    />
  );
}
