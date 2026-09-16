import type { Metadata } from "next";

import { CollectionPage } from "@/components/collection-page";

export const metadata: Metadata = {
  title: "Favorites",
  description: "Quotes, tanka, and writings worth returning to.",
};

export default function FavoritesPage() {
  return (
    <CollectionPage
      collection="favorites"
      title="Favorites"
      description="Quotes, tanka, and writings worth returning to."
    />
  );
}
