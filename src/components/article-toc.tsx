"use client";

import { useEffect, useState } from "react";

import type { ArticleHeading } from "@/lib/headings";

type ArticleTocProps = {
  headings: ArticleHeading[];
  className?: string;
};

export function ArticleToc({ headings, className = "" }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.25, 0.5, 1],
      },
    );

    for (const heading of headings) {
      const node = document.getElementById(heading.id);
      if (node) observer.observe(node);
    }

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="On this page"
      className={`mt-8 lg:sticky lg:top-24 lg:mt-0 lg:max-h-[calc(100dvh-7rem)] lg:overflow-y-auto ${className}`.trim()}
    >
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
        On this page
      </p>
      <ol className="mt-3 space-y-2">
        {headings.map((heading) => {
          const current = heading.id === activeId;

          return (
            <li
              key={heading.id}
              className={heading.level === 3 ? "pl-4" : undefined}
            >
              <a
                href={`#${heading.id}`}
                className={`block text-[0.92rem] leading-6 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground ${
                  current
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
