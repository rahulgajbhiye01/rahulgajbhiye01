import type { Metadata } from "next";

import "./globals.css";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: {
    default: "DevOps Engineer",
    template: "%s | DevOps Engineer",
  },
  description: "Portfolio of a DevOps Engineer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto min-h-screen max-w-6xl px-6 sm:px-8">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
