"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/constants/socials";
import LogoUI from "../ui/customs/logo";
const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center text-sm text-foreground flex flex-col justify-center">
      <div className="flex md:flex-row justify-center border-y border-t-white/10 bg-background/60 ">
        {/* Logo */}
        <div className="w-9/12 my-56 flex flex-col gap-24 md:flex-row justify-between">
          <div>
            <div className="flex flex-col mb-12 text-left">
              <LogoUI TextClassName="mb-2 text-2xl" LogoClassName="w-24 h-24" />
              {year && (
                <div className="pt-4 text-muted-foreground">
                  © {year} Rahul Gajbhiye. All rights reserved.
                </div>
              )}
            </div>

            <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-8">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-muted-foreground border rounded-full p-2 transition-all duration-300 hover:scale-125 hover:text-primary"
                  >
                    <Icon />
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="text-center text-lg font-medium tracking-wide">
            <div className="mb-1 text-base sm:text-lg">
              life ⚡ inspire 💡 fitness 🏋️‍♂️ tech 💻 code 🧠
            </div>
            <div className="text-sm font-light italic text-muted-foreground">
              &quot;Solo Leveling!&quot;
            </div>
          </div>
        </div>
      </div>

      <div className="my-12">
        <Link href="/privacy-policy" className="underline">
          Privacy Policy
        </Link>
        <span> / </span>
        <Link href="/cookie-policy" className="underline">
          Cookie Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
