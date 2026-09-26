"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/archive", label: "Archive" },
  { href: "/about", label: "About" },
] as const;

export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary">
      <ul className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 sm:gap-x-5">
        {nav.map((item) => {
          const current =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`group relative text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground ${
                  current
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {item.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-foreground transition-transform duration-300 ease-out ${
                    current ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
