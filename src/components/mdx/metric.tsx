import type { ReactNode } from "react";

type MetricProps = {
  label: string;
  value: string;
  detail?: string;
};

export function Metric({ detail, label, value }: MetricProps) {
  return (
    <div className="not-prose my-6 border-l-2 border-accent pl-4">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
        {value}
      </p>
      {detail ? <p className="mt-1 text-sm text-muted">{detail}</p> : null}
    </div>
  );
}
