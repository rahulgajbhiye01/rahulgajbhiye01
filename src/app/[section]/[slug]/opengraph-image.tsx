import { ImageResponse } from "next/og";

import { ContentSocialCard } from "@/components/content-social-card";
import { getContentItemBySection, type ContentSection } from "@/lib/content";

export const alt = "Entry preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ section: string; slug: string }>;
}) {
  const { section, slug } = await params;
  const item = await getContentItemBySection(section as ContentSection, slug);

  return new ImageResponse(
    <ContentSocialCard
      title={item?.title ?? "Rahul Gajbhiye"}
      description={item?.description ?? "Notes, projects, and things I am learning."}
    />,
    { ...size },
  );
}
