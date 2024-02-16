"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const { toast } = useToast();
  return (
    <header className="sticky top-0 z-50 flex w-full rounded-2xl bg-inherit">
      <NavigationMenu className="flex h-14 max-w-full flex-grow justify-start gap-10 md:justify-center">
        <p className="absolute left-10 hidden font-semibold md:block md:text-2xl xl:text-3xl">
          Rahul Gajbiye
        </p>
        <NavigationMenuList className="lg:text-md mx-2 flex w-full flex-row justify-between text-base xl:text-base 2xl:text-lg">
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base xl:text-base 2xl:text-lg">Home</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/projects" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base xl:text-base 2xl:text-lg">
                  Projects
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="text-base xl:text-base 2xl:text-lg">Blog</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
        <Button className="absolute right-4 xl:hidden">
          <Link href="mailto:rahulgajbhiye201@gmail.com">Email Me</Link>
        </Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText("rahulgajbhiye201@gmail.com");
            toast({
              description: "Email copied to clipboard.",
            });
          }}
          className="absolute right-10 hidden xl:block"
        >
          Email Me
        </Button>
      </NavigationMenu>
    </header>
  );
};

export default Navbar;
