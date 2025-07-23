"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FiShare2 } from "react-icons/fi";

import Link from "next/link";
import { SOCIAL_LINKS } from "./data";

const SocialPopup = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="gap-2 rounded-full hover:text-foreground"
        >
          <FiShare2 className="text-lg" />
          Let&apos;s Connect
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 bg-card text-foreground rounded-xl border p-4 shadow-xl backdrop-blur-md">
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            {SOCIAL_LINKS.map((link, index) => {
              const Icon = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-muted transition"
                >
                  <span className="text-xl">
                    <Icon />
                  </span>
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="rounded-md border p-3 text-sm shadow shadow-primary flex flex-col gap-1">
            <span className="text-muted-foreground">or Drop a Mail 👇</span>
            <span className="font-medium text-foreground break-all">
              rahulgajbhiye201@gmail.com
            </span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SocialPopup;
