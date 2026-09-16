import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Technical",
  description: "Projects, blog posts, and practical engineering references.",
};

export default function TechnicalPage() {
  return (
    <CollectionPage
      collection="technical"
      title="Technical"
      description="Projects, blog posts, and practical engineering references."
    />
  );
}
