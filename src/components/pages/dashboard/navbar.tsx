"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex flex-col gap-4 text-center">
      <span className="text-lg font-medium">Dashboard</span>
      <div className="flex flex-row gap-4">
        <Link href={"/dashboard"} className="hover:underline">
          dashboard
        </Link>
        <span>/</span>
        <Link href={"/dashboard/blog"} className="hover:underline">
          blog
        </Link>
        <Link href={"/dashboard/work"} className="hover:underline">
          work
        </Link>
        <Link href={"/dashboard/skill"} className="hover:underline">
          skill
        </Link>
        <Link href={"/dashboard/social"} className="hover:underline">
          social
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
