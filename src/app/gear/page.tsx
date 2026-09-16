import type { Metadata } from "next";
import Link from "next/link";

import { ContentCard } from "@/components/content-card";
import { getContentItems } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gear",
  description: "Tools and kit I actually use. Some links are affiliate links.",
};

export default async function GearPage() {
  const items = await getContentItems("gear");

  return (
    <main className="flex flex-col py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← Back to home
      </Link>
      <div className="mb-8 mt-6 max-w-4xl">
        <h1 className="font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
          Gear
        </h1>
        <p className="mt-3 text-sm leading-7 text-muted">
          Tools I use in my own work. Some links are affiliate links. I may
          earn a commission if you buy through them, at no extra cost to you.
        </p>
      </div>
      <div className="max-w-4xl">
        {items.map((item) => (
          <ContentCard key={item.id} href={item.route} {...item} />
        ))}
      </div>
      {items.length === 0 ? (
        <p className="py-12 text-sm text-muted">
          No gear listed yet. This page will stay here so recommendations have a
          clear home and a disclosure.
        </p>
      ) : null}
    </main>
  );
}
