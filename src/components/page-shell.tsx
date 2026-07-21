import type { ReactNode } from "react";

type PageShellProps = {
  children?: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return <main className="py-20 sm:py-28">{children}</main>;
}
