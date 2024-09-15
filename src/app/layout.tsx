import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Component & Config imports
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description:
    "Rahul Gajbhiye is a Full Stack Developer, developing solutions and contributing to open source communities",
  keywords: ["Designer", "Developer", "Entrepreneur"],
  authors: { name: "Rahul Gajbhiye", url: "https://rahulgajbhiye.com" },
  creator: "Rahul Gajbhiye",
  metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_BASE_URL}`),
  twitter: {
    card: "summary_large_image",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={`${inter.className}`}>
        {children}
        <Toaster />
        {/* <Analytics />
        <SpeedInsights /> */}
      </body>
    </html>
  );
}
