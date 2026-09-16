# Testing

## Test framework

**None.** No `*.test.*` / `*.spec.*` files, no test runner in `package.json`, no Playwright/Cypress config.

## Test locations

N/A.

## Unit / integration / e2e

N/A. The highest-value future unit tests are:

- `parseMdx` in `src/lib/frontmatter.ts`
- Folder → kind → route mapping in `src/lib/content.ts` (empty file skip, `blog`→`article`, plural `articles` URLs, title-from-H1)

## Test commands

Do not invent `pnpm test`. It does not exist.

## Required validation before commits (practical)

Until a test suite exists, after behavior changes run:

1. `pnpm build` (this is the compile/typecheck gate)
2. Manual check of changed routes

`pnpm lint` currently fails because TypeScript 7.0.2 is unsupported by typescript-eslint (see `docs/TROUBLESHOOTING.md`). Do not treat that as a regression of a feature change.

For the Phase 1 IA work, the checklist in `docs/IMPLEMENTATION_PLAN.md` (Phase 1 verify) is mandatory.

## Known testing gaps

- No coverage of frontmatter edge cases (inline lists vs YAML lists).
- No guarantee that header/footer links resolve.
- No visual regression.
- Archive client filter is untested.
- `generateStaticParams` on duplicate detail routes is untested; `article` + `blog` mismatch is a known production bug.
