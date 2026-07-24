"use client";

import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";

import { ContentCard } from "@/components/content-card";
import type { ContentItem } from "@/lib/content";

type ContentSummary = Omit<ContentItem, "content">;

type ArchiveListProps = {
  items: ContentSummary[];
};

export function ArchiveList({ items }: ArchiveListProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    ...Array.from(new Set(items.map((item) => item.category))).sort(),
  ];

  const filteredItems = useMemo(() => {
    const searchQuery = query.trim().toLowerCase();

    return items.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;
      const searchable = [
        item.title,
        item.description,
        item.category,
        ...item.tags,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory && (!searchQuery || searchable.includes(searchQuery))
      );
    });
  }, [category, items, query]);

  return (
    <div>
      <div className="border-y border-border py-5">
        <div className="rounded-md border border-border/70 bg-background/70 px-4 py-3 shadow-sm backdrop-blur-sm transition-all duration-200 focus-within:border-accent focus-within:bg-background focus-within:shadow-md">
          <div className="flex items-center gap-3">
            <FiSearch className="h-4 w-4 shrink-0 text-muted" />
            <label className="sr-only" htmlFor="archive-search">
              Search the archive
            </label>
            <input
              id="archive-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search notes, projects, and cheatsheets"
              className="w-full bg-transparent text-sm text-foreground outline-none transition-colors placeholder:text-muted/80"
            />
          </div>
        </div>
        <div
          className="mt-4 flex flex-wrap gap-2"
          aria-label="Filter by category"
        >
          {categories.map((itemCategory) => {
            const isActive = category === itemCategory;

            return (
              <button
                key={itemCategory}
                type="button"
                onClick={() => setCategory(itemCategory)}
                aria-pressed={isActive}
                className={`rounded-md border px-2 py-1 font-mono text-xs transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                  isActive
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted hover:border-muted hover:text-foreground"
                }`}
              >
                {itemCategory}
              </button>
            );
          })}
        </div>
      </div>

      <p className="pt-5 font-mono text-xs text-muted" aria-live="polite">
        {filteredItems.length}{" "}
        {filteredItems.length === 1 ? "entry" : "entries"}
      </p>
      <div className="mt-3 max-w-4xl">
        {filteredItems.map((item) => (
          <ContentCard key={item.slug} href={`/${item.slug}`} {...item} />
        ))}
      </div>
      {filteredItems.length === 0 ? (
        <p className="py-12 text-sm text-muted">
          No entries match that search.
        </p>
      ) : null}
    </div>
  );
}
