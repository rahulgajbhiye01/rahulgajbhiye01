import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { ContentEntry } from "@/components/content-entry";
import {
  getContentItem,
  getContentItemBySection,
  getContentItems,
  type ContentSection,
} from "@/lib/content";
import { pageMetadata, publicImage } from "@/lib/seo";

type EntryPageProps = {
  params: Promise<{ section: string; slug: string }>;
};

const sections = new Set<ContentSection>([
  "projects",
  "writing",
  "cheatsheets",
]);
const legacySections = new Set(["article", "articles", "work"]);

async function resolveEntry(section: string, slug: string) {
  if (sections.has(section as ContentSection)) {
    return {
      item: await getContentItemBySection(section as ContentSection, slug),
      isLegacy: false,
    };
  }

  if (legacySections.has(section)) {
    return { item: await getContentItem(slug), isLegacy: true };
  }

  return { item: undefined, isLegacy: false };
}

export async function generateStaticParams() {
  const items = await getContentItems();
  return items.map((item) => ({ section: item.section, slug: item.slug }));
}

export async function generateMetadata({
  params,
}: EntryPageProps): Promise<Metadata> {
  const { section, slug } = await params;
  const { item, isLegacy } = await resolveEntry(section, slug);
  if (!item) notFound();
  if (isLegacy) permanentRedirect(item.route);

  return pageMetadata({
    title: item.title,
    description: item.description,
    pathname: item.route,
    type: item.kind === "article" ? "article" : "website",
    image: await publicImage(item),
    generatedImage: true,
  });
}

export default async function EntryPage({ params }: EntryPageProps) {
  const { section, slug } = await params;
  const { item, isLegacy } = await resolveEntry(section, slug);
  if (!item) notFound();
  if (isLegacy) permanentRedirect(item.route);

  const items = await getContentItems();
  return <ContentEntry item={item} items={items} image={await publicImage(item)} />;
}
