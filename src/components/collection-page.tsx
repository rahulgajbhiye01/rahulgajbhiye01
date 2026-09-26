import type { ReactNode } from "react";
import Link from "next/link";

export function BackLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground"
    >
      ← {children}
    </Link>
  );
}
