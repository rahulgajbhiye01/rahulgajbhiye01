import type { ReactNode } from "react";

type SectionHeadingProps = {
  id?: string;
  children: ReactNode;
};

export function SectionHeading({ id, children }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className="font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted"
    >
      {children}
    </h2>
  );
}
