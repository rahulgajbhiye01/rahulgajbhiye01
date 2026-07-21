import Link from "next/link";

import { Navigation } from "@/components/navigation";

export function SiteHeader() {
  return (
    <header className="flex flex-col gap-5 border-b border-border py-5 sm:h-20 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:py-0">
      <Link
        href="/"
        className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="DevOps Engineer home"
      >
        devops.engineer
      </Link>
      <Navigation />
    </header>
  );
}
