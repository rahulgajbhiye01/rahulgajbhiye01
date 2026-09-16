# Agent Handoff

## Project

rahulgajbhiye.com — Next.js personal brand site. Canonical home for writing, apps, services, and gear.

## Current Phase

Phase 2 — Content completeness. Phase 1 IA is implemented.

## Current State

Header: Projects, Writing, Services, About.

Routes that exist: `/`, `/projects`, `/writing`, `/services`, `/about`, `/gear`, `/poetry`, `/archive`, `/{kind}/{slug}` for `projects|articles|cheatsheets|poetry|gear`.

Empty project files and `content/side-quests` are skipped (unknown kind or empty). Gear list is an honest empty state with affiliate disclosure.

## What Has Been Completed

- Content identity in `src/lib/content.ts`
- Writing hub (articles + cheatsheets)
- Commercial pages without fake prices
- Duplicate detail and collection routes removed
- Footer only live links
- Pre-IA snapshot commit, then this implementation

## What Is Currently In Progress

Nothing. This handoff is after Phase 1.

## Exact Next Task

**Phase 2 content**, only with real material from Rahul:

1. Frontmatter (`title`, `date`, `description`, `tags`) on existing articles.
2. Real `content/projects/*.mdx` writeups (`liveUrl` / `githubUrl` / `selected` as appropriate).
3. First real `content/gear/` items (not `_template.mdx`) plus keep the disclosure.
4. Sharper Services offers and About bio if he provides copy.

If Rahul wants engineering next instead: **Phase 4** — tests for `parseMdx` and folder→kind mapping, then CI (`pnpm lint` + `pnpm build`).

## Why This Is The Next Task

Routing is consistent. The site still reads thin because projects are empty and articles lack metadata.

## Important Files

- `src/lib/content.ts` — identity (do not reintroduce collections)
- `src/app/[kind]/[slug]/page.tsx` — only detail route
- `src/components/collection-page.tsx` — `KindListPage`
- `content/articles|cheatsheets|poetry|projects|gear/`
- `docs/IMPLEMENTATION_PLAN.md` Phase 2

## Important Architecture Context

- `getContentItems(kinds?)` accepts one kind or an array.
- `kindRoutes.article` is `articles` (plural).
- `[kind]` static params are filtered by `allowedRouteKinds`.
- `_` prefixed MDX is skipped.

## Constraints

- No Gear in the header.
- No payments, CMS, or invented testimonials.
- Do not add `/articles` or `/cheatsheets` index pages.
- Update `docs/PROGRESS.md` and this file after the next meaningful task.

## Known Issues

See `docs/PROGRESS.md`. Unused `gray-matter` / JSON-LD; template MDX widgets not wired.

## Tests / Validation

No unit tests. After Phase 1: `pnpm lint` and `pnpm build` should be run in the implementing session. Re-run them if you touch the content loader.

## Decisions Made Recently

Unchanged: brand not resume; four-job header; Writing hub; Gear off-header.

## Things NOT To Do

- Do not restore `/technical`, `/personal`, `/favorites`, or singular `/article/[slug]`.
- Do not implement mind/body/timeless/side-quests.
- Do not claim a test suite exists.

## Potential Risks

- Adding `src/app/articles/page.tsx` would compete with `/writing`.
- A folder name that is not in `folderToKind` is silently skipped (side-quests today).

## Suggested First Actions

1. Confirm `pnpm build` still passes.
2. Ask Rahul for project/gear/services copy, or add mapping tests.
3. Do not start another IA migration.

## Handoff Notes

Git: snapshot commit *before* Phase 1, implementation commit *after*. Do not amend those commits unless the user asks.
