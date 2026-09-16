import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import { getSelectedContentItems } from "@/lib/content";
import SubHeader from "@/components/sub-header";

export default async function HomePage() {
  const selectedItems = await getSelectedContentItems();

  return (
    <main className="flex flex-col">
      <SubHeader />

      <section aria-labelledby="hero" className="scroll-mt-8">
        <h1
          id="services"
          className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
        >
          Services
        </h1>
      </section>

      <section aria-labelledby="hero" className="scroll-mt-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h1
            id="hero"
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            Selected Projects
          </h1>
          <Link
            href="/archive"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            View all <span aria-hidden="true">→</span>
          </Link>
        </div>
        {selectedItems.map((item) => (
          <ContentCard key={item.slug} href={item.route} {...item} compact />
        ))}
      </section>

      <div className="h-px bg-border" aria-hidden="true" />
    </main>
  );
}
