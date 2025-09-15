"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { socialLinks } from "@/constants/socials";
import Logo from "./ui/logo";
import { Code2, Heart } from "lucide-react";

const Footer = () => {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-background border-border/50 border-t" id="me">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="h-5 w-5 text-green-400" />
              <h2 className="text-foreground font-mono text-xl font-semibold">
                About Me
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I&apos;m Rahul, a full-stack developer from India who loves
              building tools that make life easier for developers. When I&apos;m
              not coding, I&apos;m in the gym, experimenting with fitness, or
              creating content about self-improvement and tech.
            </p>

            <div className="flex flex-wrap gap-2">
              {["life", "inspire", "fitness", "tech", "code"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-green-400/30 bg-green-500/10 px-3 py-1 font-mono text-xs text-green-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-green-400" />
              <h2 className="text-foreground font-mono text-xl font-semibold">
                Let&apos;s Connect
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              I believe in learning in public, building fast, and sharing
              everything along the way. Let&apos;s connect and turn your ideas
              into reality.
            </p>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group border-border/30 bg-card/50 rounded-lg border p-3 transition-all duration-300 hover:border-green-400/40 hover:bg-green-500/10"
                  >
                    <Icon className="text-muted-foreground h-5 w-5 transition-colors group-hover:text-green-400" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-border/30 mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <Logo className="h-8 w-8" />
              <span className="text-muted-foreground font-mono text-sm">
                {year && `© ${year} Rahul Gajbhiye`}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/privacy-policy"
                className="text-muted-foreground font-mono text-sm transition-colors hover:text-green-400"
              >
                Privacy Policy
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link
                href="/cookie-policy"
                className="text-muted-foreground font-mono text-sm transition-colors hover:text-green-400"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
