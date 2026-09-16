import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Personal",
  description: "Poetry, stories, and other personal writing.",
};

export default function PersonalPage() {
  return (
    <CollectionPage
      collection="personal"
      title="Personal"
      description="Poetry, stories, and other personal writing."
    />
  );
}
