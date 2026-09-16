import Link from "next/link";

const columns = [
  {
    heading: "Work",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
    ],
  },
  {
    heading: "Writing",
    links: [
      { href: "/writing", label: "Writing" },
      { href: "/poetry", label: "Poetry" },
      { href: "/archive", label: "Archive" },
    ],
  },
  {
    heading: "Site",
    links: [
      { href: "/about", label: "About" },
      { href: "/gear", label: "Gear" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-8 border-t border-border pt-6 sm:mt-16 sm:pt-10">
      <div className="flex w-full flex-col items-start gap-8 sm:flex-row sm:justify-evenly">
        {columns.map((column) => (
          <ul key={column.heading}>
            <span className="text-lg font-semibold">{column.heading}</span>
            {column.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>

      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} Rahul Gajbhiye. All rights reserved.
      </p>
    </footer>
  );
}
