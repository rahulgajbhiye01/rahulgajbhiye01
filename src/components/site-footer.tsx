import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-8 border-t border-border pt-6 sm:mt-16 sm:pt-10">
      <div className="w-full flex flex-col items-start gap-2 sm:flex-row sm:justify-evenly">
        <ul>
          <span className="text-lg font-semibold">Building</span>
          <li>
            <Link href="/projects" className="text-muted hover:text-foreground">
              Projects
            </Link>
          </li>
        </ul>

        <ul>
          <span className="text-lg font-semibold">Writing</span>
          <li>
            <Link href="/articles" className="text-muted hover:text-foreground">
              Articles
            </Link>
          </li>
          <li>
            <Link
              href="/cheatsheets"
              className="text-muted hover:text-foreground"
            >
              Cheatsheets
            </Link>
          </li>
          <li>
            <Link href="/poetry" className="text-muted hover:text-foreground">
              Poetry
            </Link>
          </li>
        </ul>

        <ul>
          <span className="text-lg font-semibold">Exploring</span>
          <li>
            <Link
              href="/side-quests"
              className="text-muted hover:text-foreground"
            >
              Side Quests
            </Link>
          </li>
          <li>
            <Link href="/timeless" className="text-muted hover:text-foreground">
              Timeless
            </Link>
          </li>
        </ul>

        <ul>
          <span className="text-lg font-semibold">Improving</span>
          <li>
            <Link href="/mind" className="text-muted hover:text-foreground">
              Mind
            </Link>
          </li>
          <li>
            <Link href="/body" className="text-muted hover:text-foreground">
              Body
            </Link>
          </li>
        </ul>
      </div>

      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} Rahul Gajbhiye. All rights reserved.
      </p>
    </footer>
  );
}
