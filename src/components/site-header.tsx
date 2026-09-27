import Link from "next/link";

import { SiteNav } from "@/components/site-nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:gap-6 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="shrink-0 font-serif text-base tracking-tight text-foreground transition-opacity duration-200 hover:opacity-70 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground sm:text-[1.15rem]"
        >
          Rahul Gajbhiye
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
