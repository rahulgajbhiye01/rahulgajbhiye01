import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const elsewhereItems = [
  {
    href: "https://www.github.com/rahulgajbhiye01",
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/rahulgajbhiye01",
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    href: "https://www.youtube.com/@rahulgajbhiye01",
    label: "YouTube",
    icon: <FaYoutube />,
  },
  {
    href: "https://www.x.com/rahulgajbhiye01",
    label: "X",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.instagram.com/rahulgajbhiye01",
    label: "Instagram",
    icon: <FaInstagram />,
  },
] as const;

export function SiteHeader() {
  return (
    <header className="enter flex flex-col gap-5 pb-8 pt-2 sm:pb-10 sm:pt-2">
      <Link
        href="/"
        className="text-2xl font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        Rahul Gajbhiye
      </Link>

      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-muted">
        <span className="font-bold">DevOps engineer</span>
        <span aria-hidden="true">/</span>
        <span>Writer</span>
      </div>
      <p className="max-w-2xl text-sm leading-7 text-muted">
        I build dependable software and the systems around it—bridging product
        thinking, engineering craft, and the practical details that keep work
        running well.
      </p>

      <nav aria-label="Elsewhere" className="w-full sm:w-auto">
        <ul className="flex min-w-max items-center gap-5 pb-1 sm:gap-4 sm:pb-0">
          {elsewhereItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-label={item.label}
                className="text-lg text-muted transition-colors duration-200 hover:-translate-y-0.5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
