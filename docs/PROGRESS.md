# Current Progress

## Last Updated

2026-09-16

## Current Phase

Phase 2 — Content completeness (copy and real project/gear items). Phase 1 IA is in code.

## Current Status

Brand sitemap is implemented: header Projects / Writing / Services / About; `/writing` hub; `/gear` with disclosure; poetry in footer; one `[kind]/[slug]` detail route. Empty project files are skipped. Next work is real content, not routing.

## Completed

- Phase 0 foundation
- Phase 1 personal brand IA (identity, hubs, commercial pages, single detail route, nav/footer/sitemap)
- Agent documentation system

## In Progress

- None in application code.

## Next Task

Phase 2: add frontmatter and real project/gear/services copy when Rahul provides it. Optional: Phase 4 tests/CI.

## Blocked

- Honest Services/About depth, project writeups, and gear items need Rahul’s words.
- Deployment host UNKNOWN.

## Recent Changes

- Snapshot commit before IA (`3b44f48`).
- Phase 1 implementation: `src/lib/content.ts` kind mapping, hubs, deleted collection/duplicate routes, header/footer/sitemap.

## Tests

No automated tests. Validation = `pnpm lint`, `pnpm build`, and manual route checks.

## Known Issues

- Most articles still lack frontmatter (titles now come from first H1 when present).
- Project MDX files remain empty (correctly unpublished).
- `gray-matter` and `json-ld.tsx` still unused.
- Dual ESLint configs; leftover `tailwind.config.ts`.
- Template still documents MDX components that are not registered.

## Important Context

- Do not put Gear in the header.
- Do not restore Technical/Personal/Favorites.
- Do not invent prices or fake products.

## Files Recently Changed

- `src/lib/content.ts`
- `src/app/writing`, `projects`, `gear`, `poetry`, `services`, `about`, `page.tsx`, `[kind]/[slug]`
- `src/components/site-header.tsx`, `site-footer.tsx`, `collection-page.tsx`, `content-card.tsx`
- Deleted `src/app/article`, `project`, `cheatsheet`, `lab`, `technical`, `personal`, `favorites`

## Recommended Next Action

Fill real content (Phase 2) or add tests for folder→kind mapping (Phase 4).
