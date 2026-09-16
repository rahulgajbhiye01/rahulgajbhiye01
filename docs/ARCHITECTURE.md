# Architecture

Documents what exists today and what is explicitly planned. Inferred items are marked.

## System overview

Single Next.js 16 App Router application. There is no separate backend, database, queue, or auth.

```mermaid
flowchart LR
  files[content MDX]
  lib[src/lib/content.ts]
  pages[src/app pages]
  mdx[MdxContent next-mdx-remote]
  files --> lib
  lib --> pages
  pages --> mdx
```

Canonical public origin (hardcoded in layout/sitemap/robots): `https://rahulgajbhiye.com`.

## Repository structure

```text
content/                 MDX source (articles, projects, cheatsheets, poetry, side-quests)
src/app/                 App Router pages, SEO files, globals.css
src/components/          Header, footer, cards, archive, MDX components
src/lib/content.ts       Filesystem CMS
src/lib/frontmatter.ts   Custom YAML-ish parser
src/types/               Ambient types (remark-gfm)
docs/                    Agent/product documentation
AGENTS.md                Agent operating instructions
```

Empty App Router directories (no `page.tsx`): `src/app/articles`, `src/app/projects`, `src/app/cheatsheets`. Header/footer still link some of these → 404.

## Application architecture

### Frontend

- React 19 Server Components by default.
- Client component: `src/components/archive-list.tsx` (search/filter).
- Styling: Tailwind CSS 4 via `@import "tailwindcss"` in `src/app/globals.css`. `tailwind.config.ts` is leftover from v3 (inferred unused for the live theme).
- Layout: `src/app/layout.tsx` wraps all routes with `SiteHeader` and `SiteFooter`.
- Home: `src/app/page.tsx` — SubHeader (bio + socials), empty Services heading, selected content cards.

### Backend / APIs / services / database / auth / queues

**None.** No Route Handlers under `src/app/api`. No PostgreSQL despite an old AGENTS.md placeholder (removed).

### Storage

- Content: git-tracked MDX under `content/`.
- Files starting with `_` are skipped (`_template.mdx`).
- Public static assets: **UNKNOWN** / none observed beyond generated icon/OG routes.

### External integrations

- Social profile URLs in `src/components/sub-header.tsx` (GitHub, LinkedIn, YouTube, X, Instagram).
- Optional outbound `githubUrl` / `liveUrl` from frontmatter.
- Planned: affiliate URLs on gear items.

### Infrastructure / deployment

- Scripts: `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`.
- No GitHub Actions in repo.
- `.vercel` gitignored. Host **UNKNOWN**.

## Data flow

## Data flow

### Read content (current)

```text
User requests a page
 ↓
Server Component calls getContentItems / getContentItem / getSelectedContentItems
 ↓
Recursive readdir of content/
 ↓
Skip empty files and `_` prefixes
 ↓
parseMdx (frontmatter + body)
 ↓
Folder or frontmatter kind → ContentKind → /{plural}/{slug}
 ↓
Render list (ContentCard / KindListPage) or MDXRemote body
```

## Key design decisions

See `docs/DECISIONS.md`. Short version:

- File-based MDX over a CMS (inferred from implementation).
- Custom frontmatter parser instead of using `gray-matter` (dependency still listed).
- Brand IA: four header jobs; Writing hub; Gear off-header; poetry off commercial nav.
- Services and About as app pages, not MDX streams, so offers/bio can change without breaking article URLs.

## Dependencies (important)

| Package | Why |
| --- | --- |
| `next` 16.3.4 | App Router, metadata, sitemap/robots |
| `react` / `react-dom` 19 | UI |
| `next-mdx-remote` | RSC MDX compile |
| `remark-gfm` | Tables, task lists |
| `rehype-pretty-code` + `shiki` | Code highlighting |
| `react-icons` | Social and search icons |
| `gray-matter` | Listed; **unused** in source |
| `tailwindcss` 4 + `@tailwindcss/postcss` | Styling |
| `@tailwindcss/typography` | Imported in CSS; MDX mostly uses custom element maps |

## Security

- No auth, no user input writes.
- Archive search is client-side over props already sent to the browser (no secret content).
- External links in badges should keep `rel` where used (`sub-header` uses `noopener noreferrer`).
- Affiliate disclosure is on `/gear` and gear detail pages. Affiliate badges use `rel="sponsored noopener noreferrer"`.
- Do not commit `.env*` files.

## Scalability

- Full-directory reads per listing are acceptable for tens/hundreds of MDX files.
- If content grows large, consider caching (`React.cache`) or a build-time index. **Not required now.**
