"use client";

import { useState } from "react";

import { EntryRow } from "@/components/entry-row";
import type { ContentSection } from "@/lib/content";

type ArchiveCategory = "all" | ContentSection;

export type ArchiveEntry = {
  id: string;
  href: string;
  section: ContentSection;
  title: string;
  description?: string;
  date?: string;
  type?: string;
  readingTime?: string;
};

export function ArchiveList({ entries }: { entries: ArchiveEntry[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ArchiveCategory>("all");
  const needle = query.trim().toLowerCase();
  const visible = entries.filter((entry) => {
    const matchesCategory = category === "all" || entry.section === category;
    const matchesQuery =
      !needle ||
      [entry.title, entry.description, entry.type]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(needle);
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_14rem]">
        <label className="block">
          <span className="sr-only">Search the archive</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search"
            className="w-full border border-border bg-transparent px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted focus-visible:ring-1 focus-visible:ring-foreground"
          />
        </label>
        <label className="block">
          <span className="sr-only">Filter by category</span>
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value as ArchiveCategory)}
            className="w-full border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-1 focus-visible:ring-foreground"
          >
            <option value="all">All entries</option>
            <option value="projects">Projects</option>
            <option value="writing">Writing</option>
            <option value="cheatsheets">Cheatsheets</option>
          </select>
        </label>
      </div>
      {visible.length > 0 ? (
        <div className="mt-8">
          {visible.map((entry) => (
            <EntryRow
              key={entry.id}
              href={entry.href}
              title={entry.title}
              description={entry.description}
              date={entry.date}
              type={entry.type}
              readingTime={entry.readingTime}
            />
          ))}
        </div>
      ) : (
        <p className="mt-8 text-sm leading-7 text-muted">
          {category === "all"
            ? "No entries match your search."
            : `No entries match your search in ${category}.`}
        </p>
      )}
    </div>
  );
}
