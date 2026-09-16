# Agent Instructions

## Project Context

This repository is **rahulgajbhiye.com**: Rahul Gajbhiye’s personal brand site.

It is a Next.js App Router site that publishes MDX from `content/` (projects, articles, cheatsheets, poetry) plus a few first-class app pages (home, about, services, archive).

**Problem it solves:** Own canonical URLs for writing, apps, services, and gear so the brand is not trapped on LinkedIn, Dev.to, or Medium.

**Who it is for:** Visitors who might use Rahul’s apps, hire him for skilled work, read technical writing, or buy tools he recommends. It is **not** a job-application resume site.

**Current product state:** A working dark-theme site with MDX rendering, archive search, SEO files (sitemap, robots, OG images), and incomplete information architecture. Nav, folders, and routes disagree. The approved brand sitemap is documented and **not yet implemented**.

**Major technical constraints:**

- No database, auth, CMS, or backend API. Content is files on disk.
- Next.js 16, React 19, TypeScript, Tailwind CSS 4, pnpm.
- Custom YAML frontmatter parser in `src/lib/frontmatter.ts` (`gray-matter` is a unused dependency).
- Canonical domain: `https://rahulgajbhiye.com`.
- Keep the public header small: Projects, Writing, Services, About (planned; code still differs).

## Source of Truth

The repository is the source of truth, not any chat transcript.

```text
PRD                → docs/PRD.md
Architecture       → docs/ARCHITECTURE.md
Implementation     → docs/IMPLEMENTATION_PLAN.md
Current state      → docs/PROGRESS.md
Decisions          → docs/DECISIONS.md
Development        → docs/DEVELOPMENT.md
Testing            → docs/TESTING.md
Troubleshooting    → docs/TROUBLESHOOTING.md
Handoff            → docs/HANDOFF.md
```

## Agent Startup Protocol

Every new agent MUST:

1. Read `AGENTS.md`.
2. Read `docs/PROGRESS.md`.
3. Read `docs/IMPLEMENTATION_PLAN.md`.
4. Read `docs/ARCHITECTURE.md`.
5. Read `docs/DECISIONS.md`.
6. Read relevant additional documentation (`docs/HANDOFF.md` first when continuing work).
7. Inspect the actual code before making assumptions.
8. Compare documentation against reality.
9. Identify the current task.
10. Continue from the current state rather than restarting completed work.

## Important Rule

Treat the repository as the source of truth, NOT the previous agent's conversation.

If documentation conflicts with code:

```text
1. Inspect the code.
2. Determine which is actually correct.
3. Update the documentation.
4. Do not blindly follow stale documentation.
```

## Before Coding

```text
Current state
↓
Current objective
↓
Relevant architecture
↓
Existing implementation
↓
Required changes
↓
Tests required
↓
Implementation
```

Do not immediately start coding without understanding the current state.

## Minimal Changes

- Prefer modifying existing code over rewriting it.
- Avoid unnecessary dependencies.
- Avoid unnecessary architectural changes.
- Avoid changing public URLs without justification (permalinks should stay stable).
- Avoid unrelated refactoring.
- Preserve working functionality (MDX render, archive, SEO metadata).
- Follow existing project conventions (App Router, `@/` imports, Tailwind tokens in `globals.css`).

## Production Quality

Code should be maintainable, secure, testable, type-safe, and production-ready. Do not implement temporary hacks unless documented in `docs/DECISIONS.md`.

## Secrets

NEVER write API keys, passwords, tokens, private keys, credentials, or production secrets into documentation or source.

Use placeholders such as:

```text
DATABASE_URL=<environment variable>
API_KEY=<environment variable>
```

This project currently has no required secrets. `.env*` is gitignored.

## Validation

After making changes, run the appropriate:

- `pnpm build` (this is the compile/typecheck gate)
- Browser or curl checks for routes you add or change

`pnpm lint` currently fails on TypeScript 7 vs typescript-eslint. See `docs/TESTING.md`.

There is **no test suite**. Do not claim tests passed.

## Documentation Maintenance

Every meaningful implementation task MUST update:

```text
docs/PROGRESS.md
docs/IMPLEMENTATION_PLAN.md
```

If a significant architectural decision is made: `docs/DECISIONS.md`.

If development instructions change: `docs/DEVELOPMENT.md`.

If troubleshooting knowledge is discovered: `docs/TROUBLESHOOTING.md`.

## Handoff Requirement

Before finishing a meaningful task, leave the repository in a state where another agent can continue without this conversation.

Update:

```text
docs/HANDOFF.md
docs/PROGRESS.md
```

## Rules (project-specific)

- Do not rewrite working architecture without reason.
- Prefer existing dependencies.
- Site-as-source-of-truth: publish in `content/` (or first-class app pages) first; other platforms syndicate out.
- Do not put years in URLs.
- Do not add Gear to the header.
- Do not restore Technical / Personal / Favorites as the primary IA.
- Do not invent application features (payments, CMS, auth) unless the PRD marks them planned.
