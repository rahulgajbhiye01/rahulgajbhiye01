"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { HiOutlineMenu } from "react-icons/hi";
import Title from "@/components/ui/title";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const { toast } = useToast();
  return (
    <header className="sticky top-0 z-50 flex flex-row justify-center bg-background shadow-sm">
      <div className="w-11/12 lg:w-7/12">
        <NavigationMenu className="h-14 max-w-full items-center justify-between lg:h-24">
          <NavigationMenuList className="gap-6">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                <Title />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuList>
          <NavigationMenuList className="hidden gap-2 md:flex lg:gap-6">
            <NavigationMenuItem>
              <Link href="/work" legacyBehavior passHref>
                <NavigationMenuLink className="hoverline text-base font-medium">
                  Work
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className="hoverline text-base font-medium">
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText("rahulgajbhiye201@gmail.com");
                  toast({
                    description: "Email copied to clipboard.",
                  });
                }}
                className="rounded-full text-base font-medium"
              >
                Get in touch
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="flex items-center md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <HiOutlineMenu className="size-8" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="dark m-4 flex bg-background">
                <DropdownMenuItem>
                  <Link
                    href="/work"
                    className="hoverline text-base font-medium"
                  >
                    Work
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/blog"
                    className="hoverline text-base font-medium"
                  >
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="mailto:rahulgajbhiye201@gmail.com">
                    <Button className="rounded-full text-base font-medium">
                      Get in touch
                    </Button>
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Navbar;
