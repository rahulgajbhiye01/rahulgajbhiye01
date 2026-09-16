# Agent Handoff

## Project

rahulgajbhiye.com — Next.js personal brand site (MDX in `content/`). Canonical home for writing, apps, services, and (planned) gear. Not a job-resume site.

## Current Phase

Phase 1 — Personal brand IA.

Documentation is in place. **Application code still implements the old, inconsistent IA.**

## Current State

Working site:

- Home, archive, about heading, empty services file
- MDX rendering, selected-item home section, collection pages, duplicate detail routes
- Header: Projects, Articles, About (Projects/Articles 404)
- Footer: many 404s
- `src/lib/content.ts` still uses collections + folder-name-as-kind + singular `/article` + `1970-01-01` dates

Approved but **not coded** sitemap: header Projects / Writing / Services / About; `/writing` hub; `/gear` off-header; poetry in footer + archive.

## What Has Been Completed

- Next.js 16 app, Tailwind 4, MDX pipeline, archive, SEO files
- Product decisions for brand IA (see `docs/DECISIONS.md`)
- Full agent docs in `docs/` and `AGENTS.md`

## What Is Currently In Progress

Pre-implementation snapshot. Next session (or the same agent after this commit) implements Phase 1 starting at content identity.

## Exact Next Task

Implement **content identity** in [`src/lib/content.ts`](../src/lib/content.ts) (Phase 1.1). Do this before adding new pages that would still call collection-based APIs.

Concrete behavior to implement:

1. Map first folder segment (or frontmatter `kind`) to a small kind union: `project`, `article`, `cheatsheet`, `poetry`, `gear`. Map `blog` → `article`. Map folder `articles` → `article` (today the kind becomes the string `"articles"`, which is not in the union).
2. Map kind → URL segment: `project→projects`, `article→articles` (plural — **fix** current `"article"`), `cheatsheet→cheatsheets`, `poetry→poetry`, `gear→gear`.
3. Stop using `collection` for routing. You may leave the field optional/unused or remove it from types if you update all call sites in the same change.
4. `getContentItems` should filter by kind. Support fetching multiple kinds (needed next for `/writing`: `article` + `cheatsheet`).
5. Skip empty files (whitespace-only).
6. Title: frontmatter `title`, else first markdown `# ` heading, else slug.
7. Date: optional; do not default to `1970-01-01` for display (empty/undefined is fine).
8. Update [`content/_template.mdx`](../content/_template.mdx) to `kind: article` without requiring `collection`.
9. Do **not** yet delete routes or rewrite the header unless you are continuing into 1.2–1.5 in the same session — but identity must be correct first or new pages will wire the wrong URLs.

After 1.1, continue in order: **1.2 Writing hub and indexes** → **1.3 Services/About/home** → **1.4 delete duplicate routes** → **1.5 nav/footer/sitemap** → Phase 1 verify checklist.

## Why This Is The Next Task

Every list and permalink depends on `getContentIdentity` and `kindRoutes`. Building `/writing` first on the old mapper would keep singular `/article` URLs and folder kind `"articles"`.

## Important Files

- `src/lib/content.ts` — **start here**
- `src/lib/frontmatter.ts` — parser; prefer not to replace
- `src/components/collection-page.tsx` — generalize after 1.1
- `src/app/[kind]/[slug]/page.tsx` — keep as the only detail page
- `src/app/project|article|cheatsheet|lab/` — delete in 1.4
- `src/app/technical|personal|favorites/` — delete in 1.4
- `src/components/site-header.tsx` / `site-footer.tsx`
- `src/app/page.tsx`, `about/page.tsx`, `services/page.tsx`
- `src/app/sitemap.ts`
- `content/**` — do not rewrite article bodies in Phase 1

## Important Architecture Context

- No DB, no API, no auth.
- `getContentItem` currently loads all content then finds one — OK at this scale.
- Duplicate detail pages are copies; `[kind]/[slug]` is the intended survivor.
- Registered MDX components: Callout, CodeBlock, Details, Metric only.
- Tailwind tokens live in `src/app/globals.css`, not necessarily `tailwind.config.ts`.

## Constraints

- Minimal diffs; no new CMS; no payments; no Gear in the header.
- Do not invent service prices, fake apps, or fake gear.
- Do not implement mind/body/timeless/side-quests.
- Do not add `/articles` or `/cheatsheets` **index** pages.
- Preserve permalink stability: `/articles/slug` not dated URLs.
- No secrets in docs.
- After the work: update `docs/PROGRESS.md`, `docs/IMPLEMENTATION_PLAN.md`, `docs/HANDOFF.md`.

## Known Issues

See `docs/PROGRESS.md` and `docs/TROUBLESHOOTING.md`. Highest impact: 404 nav, identity/URL mismatch, empty services page, empty project files, epoch dates.

## Tests / Validation

No test suite. Run `pnpm lint` and `pnpm build`. Manually hit new routes. Phase 1 verify list is in `docs/IMPLEMENTATION_PLAN.md`.

## Decisions Made Recently

- Brand not resume
- Canonical URLs on this domain
- Header: Projects, Writing, Services, About
- Gear off-header; cheatsheets under Writing
- Poetry off commercial nav
- Services/About as `page.tsx`
- Skip empty files; no fake 1970 dates

## Things NOT To Do

- Do not restart the whole site or add a CMS.
- Do not follow stale AGENTS placeholders (PostgreSQL is **not** in this project).
- Do not blindly implement every component in `_template.mdx`.
- Do not keep Technical/Personal/Favorites as the primary nav.
- Do not put years in URLs.
- Do not claim tests passed.

## Potential Risks

- `[kind]` catching `writing` or `services` if you generate params from arbitrary folder names — restrict allowed segments.
- Next.js conflict between `src/app/projects/page.tsx` (index) and `[kind]/[slug]` for `kind=projects` — this is OK (index vs nested slug). Do not add `src/app/projects/[slug]` in addition to `[kind]/[slug]`.
- Breaking existing `/technical` inbound links when deleting those pages (accepted for Phase 1; no redirects specified — **UNKNOWN** if any public traffic exists; redirects are optional, not required).

## Suggested First Actions

1. Read `src/lib/content.ts` and `src/lib/frontmatter.ts` in full.
2. Implement folder→kind→route mapping, empty-file skip, title/date fallbacks, multi-kind fetch.
3. Grep for `ContentCollection`, `getContentItems(`, and `"blog"` and update call sites so the app still typechecks.
4. `pnpm lint` && `pnpm build`.
5. Then implement hubs, commercial pages, route deletion, nav/footer/sitemap.

## Handoff Notes

Planning happened in a Cursor conversation that the next agent will not see. All product intent should be in `docs/PRD.md` and `docs/DECISIONS.md`.

**Git:** A commit titled as a pre-Phase-1 snapshot captures the WIP site plus agent docs **before** IA implementation. The following commit should be the Phase 1 code.
