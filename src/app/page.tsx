import Link from "next/link";

import { PageShell } from "@/components/page-shell";

export default function HomePage() {
  return (
    <PageShell>
      <section className="flex min-h-[60vh] items-center justify-center py-12 text-center sm:min-h-[68vh]" aria-labelledby="home-title">
        <div className="max-w-2xl">
          <p className="mb-5 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
            DevOps Engineer
          </p>
          <h1 id="home-title" className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Building calm, reliable systems.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-base leading-7 text-muted sm:text-lg">
            I design and operate infrastructure that helps teams ship with confidence.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <Link
              href="/projects"
              className="border-b border-accent pb-1 text-sm font-medium text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              View projects
            </Link>
            <Link
              href="/writing"
              className="border-b border-transparent pb-1 text-sm font-medium text-muted transition-colors hover:border-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
            >
              Read writing
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
