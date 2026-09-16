# Implementation Plan

Checkbox legend: `[x]` completed · `[~]` in progress · `[ ]` not started.

Phase status: **COMPLETED** · **IN PROGRESS** · **NEXT** · **BLOCKED** · **FUTURE**

---

## Phase 0 — Foundation

Status: **COMPLETED** (site exists and builds as a content-driven Next.js app).

- [x] Next.js App Router + TypeScript + Tailwind 4 + pnpm
- [x] Filesystem MDX loader (`src/lib/content.ts`, `src/lib/frontmatter.ts`)
- [x] Shared list/detail UI pieces (cards, archive, MDX renderer)
- [x] Basic SEO (layout metadata, sitemap, robots, OG/Twitter images)
- [x] Content folders with some articles, cheatsheets, poetry

**Not part of “done”:** tests, CI, README, consistent IA.

---

## Phase 1 — Personal brand IA

Status: **COMPLETED** (2026-09-16)

Approved sitemap is live: header **Projects · Writing · Services · About**. Gear at `/gear` (not in header). Writing hub. Kind-based permalinks.

### 1.1 Content identity

Status: **COMPLETED**

- **Objective:** Map folders to kinds and plural URLs; skip empty files; drop collection routing; title/date fallbacks; add `gear` kind.
- **Dependencies:** None.
- **Relevant files:** `src/lib/content.ts`, `content/_template.mdx`
- **Notes:**
  - Folder → kind: `projects→project`, `articles→article`, `cheatsheets→cheatsheet`, `poetry→poetry`, `gear→gear`. Treat `blog` as `article`.
  - Kind → URL: `article→articles` (fix singular), `gear→gear`.
  - `getContentItems` should filter by **kind** (and support multiple kinds for `/writing`).
  - Infer title from first `#` heading if frontmatter title missing.
  - Do not surface `1970-01-01` when date is missing.
  - Skip empty MDX (current `content/projects/*` and `content/side-quests/chrome-extenstion.mdx`).
  - Template: `kind: article`; collection not required.
- **Validation:** Unit tests do not exist. After this change, listing helpers should classify existing `content/articles/*.mdx` as `article` with routes `/articles/{slug}`. Confirm with `pnpm lint` and a page that calls `getContentItems`.

### 1.2 Writing hub and kind indexes

Status: **COMPLETED**

- **Objective:** `/writing` lists articles + cheatsheets. `/projects`, `/gear`, `/poetry` list their kinds. No `/articles` or `/cheatsheets` index pages.
- **Relevant files:** `src/components/collection-page.tsx` (generalize to one-or-more kinds), `src/app/writing/page.tsx` (new), `src/app/projects/page.tsx`, `src/app/gear/page.tsx`, `src/app/poetry/page.tsx`
- **Notes:** Add `content/gear/` with template or empty-state only — no fake products.
- **Validation:** `/writing` shows both kinds; permalinks are `/articles/...` and `/cheatsheets/...`.

### 1.3 Commercial pages

Status: **COMPLETED**

- **Objective:** Real `/services` and `/about` (structured layout, not MDX). Home: Services CTA, featured projects, latest writing, quiet Gear link. Light chrome voice (not “DevOps engineer” as job pitch).
- **Relevant files:** `src/app/services/page.tsx` (currently empty), `src/app/about/page.tsx` (heading only), `src/app/page.tsx`, `src/components/sub-header.tsx`, `src/components/site-header.tsx`
- **Notes:** Do **not** invent prices, fake testimonials, or fake apps. Use honest empty states for projects if files are empty. Contact CTA can use existing public socials if no email is specified (**UNKNOWN** preferred contact).
- **Validation:** Pages are readable; not empty headings.

### 1.4 Single detail route

Status: **COMPLETED**

- **Objective:** Keep `src/app/[kind]/[slug]/page.tsx` only. Allow `projects`, `articles`, `cheatsheets`, `poetry`, `gear`.
- **Delete:** `src/app/project/`, `article/`, `cheatsheet/`, `lab/`, `technical/`, `personal/`, `favorites/`
- **Validation:** Old paths gone; new permalinks render MDX.

### 1.5 Nav, footer, sitemap

Status: **COMPLETED**

- **Objective:** Header four items. Footer: Projects, Writing, Services, Gear, Poetry, Archive, About. Drop `/side-quests`, `/timeless`, `/mind`, `/body`. Sitemap includes new indexes + item routes.
- **Relevant files:** `src/components/site-header.tsx`, `src/components/site-footer.tsx`, `src/app/sitemap.ts`
- **Validation:** No dead header/footer links. Browser-check the flows in the Verify list below.

### Phase 1 verify (all must pass before calling Phase 1 done)

- Header is four items and none 404.
- `/writing` shows articles and cheatsheets; clicks hit `/articles/{slug}` or `/cheatsheets/{slug}`.
- `/services` and `/about` are readable brand pages.
- `/gear` renders with disclosure even if the list is empty.
- `/technical` and `/article/` (singular) are gone.
- Footer has no dead links.
- Empty project files do not appear as blank cards.
- `pnpm lint` and `pnpm build` succeed.

**Out of scope for Phase 1:** rewriting article bodies, filling project MDX, unused MDX components, syndication automation, payments.

---

## Phase 2 — Content completeness

Status: **FUTURE** (blocked on real copy/assets from Rahul, not on engineering)

- [ ] Frontmatter on existing articles (titles, dates, descriptions, tags)
- [ ] Real project writeups in `content/projects/`
- [ ] Real gear items + affiliate disclosure copy
- [ ] Services offer copy (1–3 offers) and About bio
- [ ] Fix `chrome-extenstion.mdx` typo if side-quests are revived

---

## Phase 3 — SEO and syndication hygiene

Status: **FUTURE**

- [ ] Wire `ArticleJsonLd` on article/project pages
- [ ] Canonical/syndication notes (`syndicatedTo` optional)
- [ ] Remove unused `gray-matter` or actually use it
- [ ] Align MDX template with registered components (or implement the missing ones)

---

## Phase 4 — Engineering hygiene

Status: **FUTURE**

- [ ] Tests for frontmatter parsing and folder→kind mapping
- [ ] CI (lint + build)
- [ ] Root README for humans
- [ ] Single ESLint config (both `.eslintrc.json` and `eslint.config.mjs` exist)
- [ ] Drop unused `tailwind.config.ts` if confirmed dead

---

## Phase 5 — Later product

Status: **FUTURE** / **PROPOSED**

- [ ] Payments / checkout for services
- [ ] Newsletter
- [ ] Extra life sections (mind, body, timeless) only with a product decision
- [ ] Deployment docs once host is known
