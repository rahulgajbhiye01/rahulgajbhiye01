import type { Metadata } from "next";

import { MdxContent } from "@/components/mdx-content";
import { PageHeader } from "@/components/page-header";
import { ReadingColumn } from "@/components/reading-column";
import { getAbout } from "@/lib/site";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, profileJsonLd } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAbout();

  return pageMetadata({
    title: about.title,
    description: about.description ?? "About Rahul Gajbhiye, software builder and writer.",
    pathname: "/about",
  });
}

export default async function AboutPage() {
  const about = await getAbout();

  return (
    <main className="enter flex flex-col">
      <JsonLd data={profileJsonLd()} />
      <PageHeader title={about.title} />
      <ReadingColumn className="mt-8">
        <MdxContent source={about.content} pageTitle={about.title} />
      </ReadingColumn>
    </main>
  );
}
