"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiDownload,
  FiInstagram,
} from "react-icons/fi";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { RiPinterestLine } from "react-icons/ri";

const links = [
  {
    href: "https://github.com/rahulgajbhiye01",
    icon: <FiGithub />,
  },
  {
    href: "https://www.linkedin.com/in/rahulgajbhiye01",
    icon: <FiLinkedin />,
  },
  {
    href: "https://twitter.com/rahulgajbhiye01",
    icon: <FaXTwitter />,
  },
  {
    href: "https://www.threads.net/@rahulgajbhiye01",
    icon: <FaThreads />,
  },
  {
    href: "https://www.youtube.com/@rahulgajbhiye01",
    icon: <FiYoutube />,
  },
  {
    href: "https://in.pinterest.com/rahulgajbhiye01",
    icon: <RiPinterestLine />,
  },
  {
    href: "https://www.instagram.com/rahulgajbhiye01/",
    icon: <FiInstagram />,
  },
  {
    href: "https://drive.google.com/drive/folders/1T-q9VJ1BGdrIAGL_RvyIlxnKKfI0JzDb?usp=drive_link",
    icon: <FiDownload />,
  },
];

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative z-10 mt-10 w-full border-t border-t-white/10 bg-background/60 px-4 py-10 text-center text-sm text-foreground backdrop-blur-sm sm:px-6 md:px-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="text-center text-lg font-medium tracking-wide">
          <div className="mb-1 text-base sm:text-lg">
            life ⚡ inspire 💡 fitness 🏋️‍♂️ tech 💻 code 🧠
          </div>
          <div className="text-sm font-light italic text-muted-foreground">
            &quot;Solo Leveling!&quot;
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-muted-foreground transition-all duration-300 hover:scale-125 hover:text-primary"
            >
              {link.icon}
            </Link>
          ))}
        </div>

        {year && (
          <div className="pt-4 text-xs text-muted-foreground">
            © {year} Rahul Gajbhiye. All rights reserved.
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
