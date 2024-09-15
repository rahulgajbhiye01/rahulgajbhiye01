"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const HomeNavbar = () => {
  const { toast } = useToast();
  return (
    <header className="absolute top-2 flex flex-row justify-center">
      <NavigationMenu className="h-14 max-w-full items-center justify-between lg:h-24">
        <NavigationMenuList className="flex gap-2 rounded-md bg-foreground px-3 py-1.5 text-background md:px-4 lg:gap-6">
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className="hover-line text-sm font-medium md:text-base">
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <a
              href="https://merch.rahulgajbhiye.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover-line text-sm font-medium md:text-base"
            >
              Merch
            </a>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Button
              onClick={() => {
                navigator.clipboard.writeText("rahulgajbhiye201@gmail.com");
                toast({
                  description: "Email copied to clipboard.",
                });
              }}
              className="rounded-full text-sm font-medium drop-shadow-md md:text-base"
            >
              Get in touch
            </Button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

export default HomeNavbar;
