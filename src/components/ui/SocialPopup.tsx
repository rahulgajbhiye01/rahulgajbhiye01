"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { FiShare2 } from "react-icons/fi";
import {
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiDownload,
  FiInstagram,
} from "react-icons/fi";
import { FaXTwitter, FaThreads } from "react-icons/fa6";
import { RiPinterestLine } from "react-icons/ri";
import Link from "next/link";

const links = [
  {
    href: "https://github.com/rahulgajbhiye01",
    icon: <FiGithub />,
    name: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/rahulgajbhiye01",
    icon: <FiLinkedin />,
    name: "LinkedIn",
  },
  {
    href: "https://twitter.com/rahulgajbhiye01",
    icon: <FaXTwitter />,
    name: "Twitter",
  },
  {
    href: "https://www.threads.net/@rahulgajbhiye01",
    icon: <FaThreads />,
    name: "Threads",
  },
  {
    href: "https://www.youtube.com/@rahulgajbhiye01",
    icon: <FiYoutube />,
    name: "YouTube",
  },
  {
    href: "https://in.pinterest.com/rahulgajbhiye01",
    icon: <RiPinterestLine />,
    name: "Pinterest",
  },
  {
    href: "https://www.instagram.com/rahulgajbhiye01/",
    icon: <FiInstagram />,
    name: "Instagram",
  },
  {
    href: "https://drive.google.com/drive/folders/1T-q9VJ1BGdrIAGL_RvyIlxnKKfI0JzDb?usp=drive_link",
    icon: <FiDownload />,
    name: "Resume",
  },
];

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
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-muted transition"
              >
                <span className="text-xl">{link.icon}</span>
                {link.name}
              </Link>
            ))}
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
