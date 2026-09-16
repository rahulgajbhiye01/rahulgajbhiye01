# Development

## Prerequisites

- Node.js (repo VS Code settings mention v24 via nvm; any current LTS that Next 16 supports should work)
- pnpm **11.22.0** (`packageManager` field in `package.json`)

There is no database, Docker Compose, or required `.env`.

## Installation

```bash
pnpm install
```

## Environment variables

None required for local dev.

`.env*` is gitignored. Do not commit secrets. If env vars appear later, document them here as placeholders only.

## Local development

```bash
pnpm dev
```

Default Next.js URL: `http://localhost:3000`.

## Useful commands (these actually exist)

| Command | Script |
| --- | --- |
| `pnpm dev` | `next dev` |
| `pnpm build` | `next build` |
| `pnpm start` | `next start` |
| `pnpm lint` | `eslint .` |

There is no `test`, `format`, or `typecheck` script. `pnpm build` is the compile gate.

## Content conventions

- Add files under `content/<folder>/<slug>.mdx`.
- Skip files/folders prefixed with `_`.
- Planned folders: `projects`, `articles`, `cheatsheets`, `poetry`, `gear`.
- See `content/_template.mdx` (still uses legacy `kind: blog` and `collection: technical` until Phase 1.1 updates it).
- MDX components actually wired in `src/components/mdx-content.tsx`: `Callout`, `CodeBlock`, `Details`, `Metric`. Template examples for LinkCard, Terminal, FileTree, ApiEndpoint, Checklist, Figure will fail until implemented.

## Project conventions

- TypeScript strict, path alias `@/*` → `src/*`
- App Router under `src/app`
- Prefer Server Components; `"use client"` only when needed (archive search)
- Styling: Tailwind utility classes + CSS variables in `src/app/globals.css`

## Build

```bash
pnpm build
```

## Lint

```bash
pnpm lint
```

ESLint: `eslint.config.mjs` uses `eslint-config-next/core-web-vitals`. A legacy `.eslintrc.json` also exists.

## Tests

None. See `docs/TESTING.md`.

## Database / migrations / seed

Not applicable.

## Deployment

UNKNOWN. No CI workflows in repo. `.vercel` is gitignored. Production domain referenced in code: `https://rahulgajbhiye.com`.

## Debugging

- Content identity bugs: start at `getContentIdentity` in `src/lib/content.ts`.
- MDX compile errors: `src/components/mdx-content.tsx` + the specific file under `content/`.
- 404s: many routes are linked but have no `page.tsx` (see `docs/TROUBLESHOOTING.md`).
