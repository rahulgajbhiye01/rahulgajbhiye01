import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import SubHeader from "@/components/sub-header";
import {
  getContentItems,
  getSelectedContentItems,
} from "@/lib/content";

export default async function HomePage() {
  const [selectedProjects, writing] = await Promise.all([
    getSelectedContentItems(),
    getContentItems(["article", "cheatsheet"]),
  ]);
  const latestWriting = writing.slice(0, 4);

  return (
    <main className="flex flex-col">
      <SubHeader />

      <section aria-labelledby="services-heading" className="scroll-mt-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2
            id="services-heading"
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            Services
          </h2>
          <Link
            href="/services"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Work with me <span aria-hidden="true">→</span>
          </Link>
        </div>
        <p className="mb-10 max-w-2xl text-sm leading-7 text-muted">
          I help ship dependable software and the systems around it. If that is
          what you need, start on the services page.
        </p>
      </section>

      <section aria-labelledby="projects-heading" className="scroll-mt-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2
            id="projects-heading"
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        {selectedProjects.length > 0 ? (
          selectedProjects.map((item) => (
            <ContentCard key={item.slug} href={item.route} {...item} compact />
          ))
        ) : (
          <p className="mb-10 text-sm leading-7 text-muted">
            Project writeups will show up here when they are ready to share.
          </p>
        )}
      </section>

      <section aria-labelledby="writing-heading" className="scroll-mt-8">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <h2
            id="writing-heading"
            className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent"
          >
            Latest writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            All writing <span aria-hidden="true">→</span>
          </Link>
        </div>
        {latestWriting.map((item) => (
          <ContentCard key={item.id} href={item.route} {...item} compact />
        ))}
      </section>

      <p className="mt-10 text-sm text-muted">
        <Link
          href="/gear"
          className="transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        >
          Tools I use
        </Link>
      </p>

      <div className="mt-10 h-px bg-border" aria-hidden="true" />
    </main>
  );
}
