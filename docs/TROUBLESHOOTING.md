## `pnpm lint` fails on TypeScript 7

**Symptoms:** `typescript-eslint does not support TS 7.0`.

**Cause:** `package.json` has `typescript` 7.0.2; `eslint-config-next` pulls typescript-eslint 8.x which does not support TS 7.

**Solution:** Pre-existing. Do not treat as a Phase 1 regression. `pnpm build` is the typecheck gate. Fixing this is Phase 4.

**Verification:** Confirmed independent of the IA change.

---

## Header or footer links 404

**Symptoms:** `/projects`, `/articles`, `/cheatsheets`, `/poetry`, `/side-quests`, `/timeless`, `/mind`, `/body` return 404.

**Cause:** `SiteHeader` / `SiteFooter` point at routes with no `page.tsx`. `src/app/projects`, `articles`, and `cheatsheets` are empty directories.

**Solution:** Phase 1 implements the approved sitemap and removes dead links. Do not add stub pages for mind/body/timeless/side-quests unless product decides they exist.

**Verification:** Click every header and footer link after the IA pass.

---

## Article detail not found or wrong URL

**Symptoms:** File in `content/articles/foo.mdx` does not appear at `/article/foo` or `/articles/foo`.

**Cause:** Identity uses the folder name `articles` as `kind` when frontmatter `kind` is missing. `kindRoutes.article` is `"article"` (singular) only if kind is actually `article`. `src/app/article/[slug]/page.tsx` queries `getContentItems("blog")`.

**Solution:** Phase 1.1 mapping: folder `articles` → kind `article` → route `/articles/{slug}`. Delete the `article/` tree in favor of `[kind]/[slug]`.

**Verification:** Open a real article permalink after the mapping change.

---

## Archive shows slug titles and date 1970-01-01

**Symptoms:** Cards titled `solo-builder-workflow` dated 1970.

**Cause:** Most content files have no frontmatter. `readContent` falls back to filename and `"1970-01-01"`.

**Solution (planned):** Title from first `#` heading; hide missing dates. Longer-term: add real frontmatter (Phase 2).

**Verification:** Archive list after 1.1.

---

## Home “Selected Projects” is empty

**Symptoms:** No cards under Selected Projects.

**Cause:** `getSelectedContentItems` filters `selected: true`. Project files are empty and lack frontmatter.

**Solution:** Empty state on home; do not fake `selected`. Fill real project MDX in Phase 2.

**Verification:** Home still renders; no blank cards from empty files once skip-empty is implemented.

---

## MDX component not defined

**Symptoms:** Build or render error referencing `LinkCard`, `Terminal`, `FileTree`, `ApiEndpoint`, `Checklist`, or `Figure`.

**Cause:** `content/_template.mdx` documents them; `mdx-content.tsx` only registers Callout, CodeBlock, Details, Metric.

**Solution:** Do not copy those template examples into published posts until the components exist. Implementing them is Phase 3 / out of scope for Phase 1.

**Verification:** `pnpm build` with current published content.

---

## Services page is blank

**Symptoms:** `/services` is empty.

**Cause:** `src/app/services/page.tsx` is an empty file.

**Solution:** Phase 1.3 structured page.

**Verification:** Readable sections + CTA.

---

## Dual Tailwind / ESLint config confusion

**Symptoms:** Changing `tailwind.config.ts` does not change colors.

**Cause:** Tailwind 4 theme lives in `src/app/globals.css` (`@theme inline`). Both `.eslintrc.json` and `eslint.config.mjs` exist.

**Solution:** Edit `globals.css` for design tokens. Prefer `eslint.config.mjs` (Next 16). Cleanup is Phase 4.

**Verification:** Color change in CSS variables appears in the UI.

---

## `gray-matter` imported mentally but not in code

**Symptoms:** Agent tries to `import gray-matter`.

**Cause:** It is in `package.json` but unused; parsing is `src/lib/frontmatter.ts`.

**Solution:** Use the existing parser unless it cannot represent a required field.

**Verification:** Grep `gray-matter` in `src/` (should be empty).
