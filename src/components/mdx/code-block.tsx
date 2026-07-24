import type { ReactNode } from "react";

type CodeBlockProps = {
  children: ReactNode;
  language?: string;
  title?: string;
};

export function CodeBlock({ children, language, title }: CodeBlockProps) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-md border border-border bg-zinc-950 shadow-sm">
      {title || language ? (
        <div className="flex items-center justify-between border-b border-border px-4 py-2 font-mono text-xs text-muted">
          <span>{title}</span>
          {language ? <span>{language}</span> : null}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm leading-6 text-zinc-200">
        <code>{children}</code>
      </pre>
    </div>
  );
}
