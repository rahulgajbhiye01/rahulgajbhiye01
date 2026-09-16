import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Rahul Gajbhiye builds software and writes about systems, delivery, and product craft.",
};

export default function AboutPage() {
  return (
    <main className="flex flex-col py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
        About
      </h1>
      <div className="mt-6 max-w-2xl space-y-5 text-sm leading-7 text-muted">
        <p>
          I build dependable software and the systems around it. This site is
          the home for that work: apps, writing, and how to work with me. It is
          not a resume.
        </p>
        <p>
          I care about product thinking, engineering craft, and the practical
          details that keep delivery moving. Notes here are meant to stay useful
          for years, not only for a news cycle.
        </p>
        <p>
          Personal writing lives in{" "}
          <Link href="/poetry" className="text-foreground hover:text-accent">
            poetry
          </Link>{" "}
          and the{" "}
          <Link href="/archive" className="text-foreground hover:text-accent">
            archive
          </Link>
          . Tools I use will live on{" "}
          <Link href="/gear" className="text-foreground hover:text-accent">
            gear
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
