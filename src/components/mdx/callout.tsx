import type { ReactNode } from "react";

type CalloutProps = {
  children: ReactNode;
  type?: "note" | "tip" | "warning" | "danger";
};

const calloutLabels = {
  note: "Note",
  tip: "Tip",
  warning: "Watch out",
  danger: "Important",
} as const;

export function Callout({ children, type = "note" }: CalloutProps) {
  const tone =
    type === "danger"
      ? "border-rose-400/40 bg-rose-400/10 text-rose-100"
      : type === "warning"
        ? "border-amber-400/40 bg-amber-400/10 text-amber-100"
        : "border-accent/40 bg-accent/10 text-foreground";

  return (
    <aside
      className={`my-6 rounded-r-md border-l-2 px-4 py-3 text-sm leading-6 ${tone}`}
    >
      <p className="mb-1 font-mono text-xs font-medium uppercase tracking-[0.14em]">
        {calloutLabels[type]}
      </p>
      <div>{children}</div>
    </aside>
  );
}
