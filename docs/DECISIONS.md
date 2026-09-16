# Decisions

Only decisions that were stated or are evident in the repo. Inferences are labeled.

---

# Decision: Personal brand, not a job site

Date: 2026-09-15  
Status: Accepted  

Context: The site currently presents “DevOps engineer / Writer” and could be read as a portfolio-for-hire. The owner’s goal is a years-long personal brand: promote apps, sell skills, affiliate gear, technical writing. Not job hunting.

Decision: Product copy and IA optimize for brand, products, writing, and services. Do not design the header or About as a resume.

Why: Owned audience and canonical URLs compound; resume sites go stale after a hire.

Alternatives considered: Resume/portfolio-first IA.

Consequences: Chrome voice should shift away from job titles. Services is a first-class header item. Recruiting-oriented sections are non-goals.

---

# Decision: This domain is the canonical source of truth

Date: 2026-09-15  
Status: Accepted  

Context: Writing could live primarily on Dev.to, Medium, or LinkedIn.

Decision: Publish full pieces on rahulgajbhiye.com first. Other platforms get excerpts plus a link back. Canonical is always `https://rahulgajbhiye.com{route}`.

Why: Platform lock-in destroys a long-lived brand.

Alternatives considered: Medium/Dev.to as canonical with the site as an index.

Consequences: MDX (or first-class pages) in this repo is the permalink. Syndication automation is future work.

---

# Decision: Four-job header (Projects, Writing, Services, About)

Date: 2026-09-15  
Status: Accepted (not implemented in UI)

Context: Code currently has competing IAs: header Projects/Articles/About; footer with cheatsheets/poetry/side-quests/timeless/mind/body; collection routes technical/personal/favorites; many kinds in `ContentKind`.

Decision:

- Header: Projects · Writing · Services · About.
- Cheatsheets live under Writing, not as a header peer.
- Gear exists at `/gear`, linked from home/footer/writing, **not** the header.
- Poetry: Archive + footer `/poetry` only.
- Drop Technical/Personal/Favorites as the primary taxonomy.

Why: A small header is stable for years. Gear in the header looks like a storefront. Collections are librarian labels, not a brand.

Alternatives considered (rejected):

- Collection-based header (Technical / Personal / Favorites / About).
- Kind-based header with Projects / Articles / Cheatsheets / About.
- Gear in the header.
- Keep Services out of the header (Gear in header instead).

Consequences: Implement `/writing` hub; do not add `/articles` or `/cheatsheets` index pages; delete collection routes.

---

# Decision: Kind-based permalinks, Writing as a hub only

Date: 2026-09-15  
Status: Accepted (not implemented)

Context: Need stable SEO URLs while grouping articles and cheatsheets for humans.

Decision: Indexes: `/writing`, `/projects`, `/gear`, `/poetry`. Permalinks: `/articles/{slug}`, `/cheatsheets/{slug}`, `/projects/{slug}`, `/poetry/{slug}`, `/gear/{slug}`. One dynamic route `[kind]/[slug]`. Fix `article` URL segment to plural `articles`. Treat frontmatter `blog` as `article`.

Why: Changing slugs later is costly. A hub avoids two competing writing lists.

Alternatives considered: `/posts/...`; nested `/technical/articles/...`; keeping singular `/article`.

Consequences: Delete duplicate `src/app/article`, `project`, `cheatsheet`, `lab` trees.

---

# Decision: Services and About are app pages, not MDX streams

Date: 2026-09-15  
Status: Accepted (pages are stubs today)

Context: Offers and bio change more often than essay permalinks.

Decision: `/services` and `/about` are structured `page.tsx` layouts, not a folder of posts. Do not invent prices or testimonials.

Why: Evergreen commercial pages should be editable without creating historical posts.

Alternatives considered: `content/services/*.mdx`.

Consequences: Copy may ship as honest placeholders until Rahul provides offers/bio.

---

# Decision: File-based MDX CMS, no database

Date: unknown  
Status: Accepted (evident in implementation)

Context: Need to publish writing without a CMS.

Decision: `content/**/*.mdx` read via `fs` in `src/lib/content.ts`.

Why: Unknown / inferred from implementation. Fits a solo site.

Alternatives considered: Unknown (headless CMS, MDX in `app/` routes).

Consequences: No preview auth, no draft workflow beyond `_` prefixed files and git.

---

# Decision: Custom frontmatter parser

Date: unknown  
Status: Accepted in code; `gray-matter` still a dependency but unused

Context: MDX files may include YAML frontmatter.

Decision: `src/lib/frontmatter.ts` parses a simple `key: value` / list subset.

Reason: Unknown / inferred from implementation.

Consequences: Complex YAML may not parse. Do not add another parser in Phase 1 unless the existing one blocks required fields.

---

# Decision: Skip empty content files and avoid fake 1970 dates

Date: 2026-09-15  
Status: Accepted (not implemented)

Context: Project files and a side-quest file are empty. Missing dates currently become `1970-01-01`.

Decision: Do not publish empty files. Infer titles from first H1. Omit or hide missing dates rather than showing 1970.

Why: Empty cards and epoch dates look broken on a brand site.

---

# Decision: Do not build mind/body/timeless/side-quests in Phase 1

Date: 2026-09-15  
Status: Accepted

Context: Footer already links these; they 404.

Decision: Remove dead footer links until there is content and an explicit product decision.

Why: Scope control. Brand header must stay small.

---

# Decision: No payments in the current phase

Date: 2026-09-15  
Status: Accepted

Context: Services should sell skills.

Decision: Services page is positioning + CTA only. No checkout.

Why: Explicit non-goal.

---

# Decision: Tailwind 4 CSS-first theme

Date: unknown  
Status: Inferred from `globals.css` `@import "tailwindcss"` and `@theme inline`

`tailwind.config.ts` still exists. Treat `globals.css` as the live design tokens unless proven otherwise.
