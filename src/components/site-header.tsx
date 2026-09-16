import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="enter flex flex-col gap-5 pb-4 pt-2 sm:pb-5 sm:pt-2">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col items-start gap-1 sm:gap-2">
          <h1>
            <Link
              href="/"
              className="text-4xl font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Rahul Gajbhiye
            </Link>
          </h1>
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
            <span className="font-bold">DevOps engineer</span>
            <span aria-hidden="true">/</span>
            <span>Writer</span>
          </div>
        </div>
        <nav aria-label="Elsewhere" className="w-full sm:w-auto">
          <ul className="flex min-w-max items-center gap-5 pb-1 sm:gap-4 sm:pb-0">
            <li>
              <Link
                href="/projects"
                className="text-muted hover:text-foreground"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/articles"
                className="text-muted hover:text-foreground"
              >
                Articles
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted hover:text-foreground">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
