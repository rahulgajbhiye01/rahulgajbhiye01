# Product Requirements

Status labels: **CONFIRMED** (decided), **PLANNED** (approved, not built), **PROPOSED** (idea), **UNKNOWN**.

## Product overview

**CONFIRMED.** rahulgajbhiye.com is Rahul Gajbhiye’s personal brand site: the canonical home for writing, apps/projects, services (“work with me”), and a secondary gear/affiliate kit. Visitors should be able to trust this domain as the permalink for public work.

## Problem

**CONFIRMED.** Without an owned site, writing and product narrative live on platforms Rahul does not control. The current codebase is a working MDX site, but nav, content folders, and routes do not describe one brand. Header, footer, and collection pages tell different stories and several links 404.

## Target users

**CONFIRMED.**

- People evaluating Rahul’s apps/products.
- People who might buy skilled work (consulting / building), not HR screening a resume.
- Readers of technical articles and cheatsheets.
- People who want tool recommendations (affiliate gear).
- Personal readers of poetry (secondary; not the commercial pitch).

## Goals

**CONFIRMED.**

- This domain is the source of truth. Syndicate to LinkedIn, Dev.to, YouTube, newsletters with a link back. Never let another platform own the permalink.
- Promote apps (Projects).
- Build trust via Writing (articles + cheatsheets).
- Sell skills via an evergreen Services page.
- Earn from gear/affiliate without looking like a storefront (Gear off-header).
- A brand that can last years: evergreen URLs, small header, compounding notes over news.

## Non-goals

**CONFIRMED.**

- Job hunting / resume-first positioning.
- Payments or checkout for services (this pass).
- A database CMS, auth, or admin UI.
- Rewriting existing article bodies.
- Filling empty project MDX files as part of the IA pass.
- Implementing every MDX component shown in `content/_template.mdx`.
- Automated cross-posting.
- Header items for Technical / Personal / Favorites, Cheatsheets-as-peer-of-Projects, or Gear.

## Core features

### Confirmed (exists in code today)

- Home with bio snippet, social links, “Selected Projects” from `selected: true` frontmatter.
- MDX/Markdown from `content/`, rendered with `next-mdx-remote`, GFM, Shiki.
- Archive with client-side search and category chips.
- Collection pages at `/technical`, `/personal`, `/favorites` (legacy IA; to be removed).
- Detail rendering via `/[kind]/[slug]` plus duplicate kind-specific routes.
- SEO: root metadata, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx`, `twitter-image.tsx`, `manifest.ts`, `icon.tsx`.
- MDX components actually registered: Callout, CodeBlock, Details, Metric.

### Planned (approved, not built)

- Header: **Projects · Writing · Services · About**.
- `/writing` hub listing articles + cheatsheets (filter by kind).
- Permalinks: `/projects/{slug}`, `/articles/{slug}`, `/cheatsheets/{slug}`, `/poetry/{slug}`, `/gear/{slug}`.
- **No** index pages at `/articles` or `/cheatsheets` (avoids competing with `/writing`).
- `/projects` list (skip empty files).
- `/services` structured “work with me” page (not a blog post).
- `/about` long-lived bio (not an empty heading).
- `/gear` list + affiliate disclosure; optional detail pages; not in the header.
- `/poetry` list for footer only.
- Single detail route `[kind]/[slug]`; delete `/project`, `/article`, `/cheatsheet`, `/lab`.
- Delete `/technical`, `/personal`, `/favorites`.
- Footer only live links: Projects, Writing, Services, Gear, Poetry, Archive, About.
- Folder → kind mapping; `blog` treated as `article`; `article` URLs plural `/articles/...`.
- Skip empty MDX files; infer title from first `#` heading; do not display `1970-01-01` when date is missing.
- Light voice change: stop “DevOps engineer / Writer” as the primary chrome (job-seeking tone).

### Proposed

- `syndicatedTo` frontmatter for tracking where a piece was cross-posted.
- JSON-LD on article pages (`src/components/json-ld.tsx` exists, unused).
- Remaining template MDX components: LinkCard, Terminal, FileTree, ApiEndpoint, Checklist, Figure.
- `/side-quests`, `/timeless`, `/mind`, `/body` (footer currently links them; **do not build** until there is content and a product decision).

### Unknown

- Exact Services offers (1–3 offerings, pricing, CTA destination). Copy must be written; do not invent fake clients or prices.
- Exact About bio copy.
- Which apps are real enough to feature (project MDX files are currently empty).
- Hosting/deployment provider in this repo (no CI; `.vercel` gitignored). **UNKNOWN** whether production is Vercel.
- Newsletter or email capture. **UNKNOWN** / not in scope.

## User flows

**PLANNED.**

1. Land on `/` → understand who Rahul is → featured projects and/or latest writing → optional Services CTA → quiet Gear link.
2. Writing: `/writing` → open `/articles/{slug}` or `/cheatsheets/{slug}`.
3. Projects: `/projects` → `/projects/{slug}` → live/GitHub links.
4. Hire: header Services → `/services` → contact CTA (**UNKNOWN** exact contact method; site already uses public socials).
5. Gear: home/footer `/gear` → affiliate link with disclosure.
6. Personal: footer Poetry or Archive.

**CONFIRMED today (broken vs plan):** header Projects and Articles 404 (empty dirs). Footer Cheatsheets/Poetry/Side quests/Timeless/Mind/Body 404.

## Functional requirements

**PLANNED** unless noted.

- Content files in `content/<kind-plural>/slug.mdx` drive lists and permalinks.
- Frontmatter: `kind`, `title`, `date`, `description`, `tags`; projects also `liveUrl`, `githubUrl`, `selected`; gear also `affiliateUrl` (or `liveUrl`).
- Canonical URL is always `https://rahulgajbhiye.com{route}`.
- Archive remains a searchable dump of remaining published items including poetry.
- Sitemap lists index URLs plus every content `route`.

## Non-functional requirements

**CONFIRMED / inferred from implementation.**

- Static-friendly App Router pages; content read from filesystem at build/request time.
- Accessible-enough UI: focus rings, `aria-label`s on some controls (existing).
- Dark editorial theme; Tailwind 4 `@theme` tokens.
- TypeScript strict mode.

## Constraints

- File-based content only.
- Do not change permalink shape once the new IA ships (`/articles/slug` not `/posts/2026/slug`).
- No new major dependencies for the IA pass.

## Success criteria

**PLANNED.**

- Header has four items and none 404.
- `/writing` shows articles and cheatsheets; clicks hit plural permalinks.
- `/services` and `/about` are readable pages, not empty headings.
- `/gear` renders with disclosure even if the list is empty.
- Old collection URLs and singular `/article/` routes are gone.
- Footer has no dead links.
- Empty project files do not appear as blank cards.

## Future ideas

**PROPOSED.** Syndication automation, payments, newsletter, extra life sections (mind/body), unused MDX widgets, JSON-LD wiring.
