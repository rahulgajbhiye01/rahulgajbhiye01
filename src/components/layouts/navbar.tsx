"use client";

import Link from "next/link";
import LogoUI from "../ui/customs/logo";
import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constants/nav";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <LogoUI TextClassName="mb-1 text-base" LogoClassName="w-10 h-10" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base transition hover:text-primary"
            >
              {label}
            </Link>
          ))}
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
        <div className="sm:hidden animate-slide-down absolute left-0 right-0 top-full z-40 flex flex-col gap-4 bg-background/90 px-6 py-6 backdrop-blur-md">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-medium text-primary transition hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
