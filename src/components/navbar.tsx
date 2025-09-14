"use client";

import Link from "next/link";
import Logo from "./ui/logo";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-background/70 fixed top-0 left-0 z-50 w-full border-b border-gray-800 backdrop-blur-md">
      <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between px-4 py-2 sm:w-9/12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo className="size-10 md:size-14" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          <Link
            href="/#stack-&-builds"
            className="hover:text-primary text-base transition"
          >
            Stack & Builds
          </Link>
          <Link href="/#xp" className="hover:text-primary text-base transition">
            Xp
          </Link>
          <Link href="/#me" className="hover:text-primary text-base transition">
            Me
          </Link>
          {/* <Link href="/blog" className="text-base transition hover:text-primary">Blogs</Link> */}
        </nav>

        {/* Mobile Toggle */}
        <Button
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <HiOutlineX className="text-3xl" />
          ) : (
            <HiOutlineMenu className="text-3xl" />
          )}
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="animate-slide-down bg-background/90 absolute top-full right-0 left-0 z-40 flex flex-col gap-4 px-6 py-6 backdrop-blur-md sm:hidden">
          <Link
            href="/#stack-&-builds"
            className="text-primary hover:text-primary text-lg font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Creations & Stack
          </Link>
          <Link
            href="/#xp"
            className="text-primary hover:text-primary text-lg font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Xp
          </Link>
          <Link
            href="/#me"
            className="text-primary hover:text-primary text-lg font-medium transition"
            onClick={() => setIsOpen(false)}
          >
            Me
          </Link>
          {/* <Link href="/blog" className="text-lg font-medium text-primary transition hover:text-primary" onClick={() => setIsOpen(false)}>
            Blogs
          </Link> */}
        </div>
      )}
    </header>
  );
};

export default Navbar;
