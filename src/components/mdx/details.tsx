import type { ReactNode } from "react";

type DetailsProps = {
  children: ReactNode;
  summary: string;
};

export function Details({ children, summary }: DetailsProps) {
  return (
    <details className="my-6 border-y border-border py-4 text-sm leading-6 text-muted">
      <summary className="cursor-pointer font-medium text-foreground marker:text-accent">
        {summary}
      </summary>
      <div className="pt-3">{children}</div>
    </details>
  );
}
