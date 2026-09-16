# Current Progress

## Last Updated

2026-09-16

## Current Phase

Phase 1 — Personal brand IA. Pre-implementation git snapshot; application code still on the old IA.

## Current Status

The Next.js MDX site runs. Public IA is inconsistent: header links `/projects` and `/articles` (empty dirs → 404), footer links many unbuilt routes, collections `/technical|/personal|/favorites` exist but are not the approved brand. Product decisions for the brand sitemap are recorded in PRD/DECISIONS. **No application IA code has been implemented yet.**

## Completed

- Working App Router site (home, archive, about stub, MDX detail via `[kind]/[slug]` and duplicate kind routes)
- Content loader + custom frontmatter parser
- Archive search/filter
- SEO files (sitemap, robots, OG/Twitter, manifest, icon)
- Agent documentation system (`AGENTS.md`, `docs/*`)

## In Progress

- None in application code.

## Next Task

**Phase 1.1 — Content identity** in `src/lib/content.ts` (see `docs/HANDOFF.md` for the exact steps).

Do not start by creating pages that still depend on collection-based `getContentItems`.

## Blocked

- Honest Services/About copy and real project/gear items need Rahul’s words. Engineering can ship structured pages with empty states; do not invent prices or fake products.
- Deployment host UNKNOWN.

## Recent Changes

- Replaced placeholder `AGENTS.md`.
- Added full `docs/` agent operating system capturing the brand IA plan from planning (not yet coded).
- `docs/PROGRESS.md` previously contained a paste of the plan; that content now lives in PRD + IMPLEMENTATION_PLAN.

## Tests

No automated tests. Validation = `pnpm lint`, `pnpm build`, and manual route checks.

## Known Issues

- Header `/projects`, `/articles` 404.
- Footer `/cheatsheets`, `/poetry`, `/side-quests`, `/timeless`, `/mind`, `/body` 404 (`/cheatsheets` dir empty).
- `src/app/services/page.tsx` is empty (may fail or render nothing depending on Next).
- `kindRoutes.article` is `"article"` (singular); plan requires `/articles`.
- `article/[slug]` looks up `"blog"`; files live in `content/articles` without `kind` frontmatter.
- Almost no published MDX has full frontmatter; titles fall back to slugs; missing dates become `1970-01-01`.
- Project MDX files are empty; `selected: true` items likely none.
- Home “Services” section is a heading only.
- Duplicate nearly identical detail pages.
- Template documents MDX components that are not registered.
- `gray-matter` and `json-ld.tsx` unused.
- Dual ESLint configs.

## Important Context

- Brand goal: source of truth for a years-long personal brand (apps, writing, services, affiliate gear). Not a resume.
- Approved header: Projects, Writing, Services, About.
- Gear is `/gear`, not in the header.
- Writing hub combines articles + cheatsheets; permalinks stay kind-based and plural.
- Poetry is footer + archive only.
- Rejected: collection-based primary nav; Cheatsheets as a header peer of Projects; Gear in the header.

## Files Recently Changed

- `AGENTS.md`
- `docs/README.md`
- `docs/PRD.md`
- `docs/ARCHITECTURE.md`
- `docs/IMPLEMENTATION_PLAN.md`
- `docs/PROGRESS.md`
- `docs/DECISIONS.md`
- `docs/DEVELOPMENT.md`
- `docs/TESTING.md`
- `docs/TROUBLESHOOTING.md`
- `docs/HANDOFF.md`
- `README.md`

## Recommended Next Action

Implement `src/lib/content.ts` identity mapping as specified in `docs/HANDOFF.md`, then proceed to hubs and route deletion.
