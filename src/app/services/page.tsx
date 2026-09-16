import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Work with Rahul Gajbhiye on software, systems, and getting product into production.",
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col py-10 sm:py-14">
      <Link
        href="/"
        className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        ← Back to home
      </Link>

      <h1 className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.18em] text-accent">
        Services
      </h1>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
        I work with people who need software that ships and stays up. This page
        is the ask — not a rate card. Offers will get more specific as they
        settle; until then, contact me and we can see if there is a fit.
      </p>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Who this is for
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          Founders and teams who care about product thinking, engineering craft,
          and the operational details that keep work running. Not a staffing
          agency pipeline.
        </p>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          How I can help
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-muted">
          <li>Build and ship product with you, not around you.</li>
          <li>Harden the systems around the product so delivery stays boring.</li>
          <li>Write and teach the practice so the team can keep going without me.</li>
        </ul>
      </section>

      <section className="mt-10 max-w-2xl">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">
          Start a conversation
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          LinkedIn is the most reliable place to reach me today.{" "}
          <Link
            href="https://www.linkedin.com/in/rahulgajbhiye01"
            className="text-foreground underline-offset-4 hover:text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Message me there
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
