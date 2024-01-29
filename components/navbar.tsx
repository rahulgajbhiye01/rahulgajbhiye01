"use client";

import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Progress } from "@/components/ui/progress";

const Navbar = () => {
  return (
    <header className="fixed bottom-0 w-full bg-background lg:static lg:col-start-1 lg:col-end-13">
      <nav className="flex flex-col">
        <div className="flex items-center justify-center py-1 md:justify-between 2xl:py-2">
          <span className="hidden font-semibold lg:block lg:text-xl xl:text-2xl 2xl:text-3xl">
            Rahul Gajbhiye
          </span>
          <ul className="flex flex-row items-center justify-center gap-8 lg:flex-row-reverse lg:justify-start xl:text-base 2xl:text-xl">
            <li>
              <ModeToggle />
            </li>
            <li>
              <Link href="/" legacyBehavior passHref>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior passHref>
                About
              </Link>
            </li>
            <li>
              <Link href="/work" legacyBehavior passHref>
                Work
              </Link>
            </li>

            <li>
              <Link href="/blog" legacyBehavior passHref>
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <Progress value={100} className="bg-background" />
      </nav>
    </header>
  );
};

export default Navbar;
