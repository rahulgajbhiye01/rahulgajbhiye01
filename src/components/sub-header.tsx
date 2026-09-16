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

export default function SubHeader() {
  return (
    <div className="flex flex-col items-start gap-4 pb-8 pt-2 sm:pb-10 sm:pt-2">
      <p className="max-w-xl text-sm leading-7 text-muted">
        I build software, teach the craft around it, and publish from this
        site first. Apps, writing, and how to work with me all live here.
      </p>

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
    </div>
  );
}
