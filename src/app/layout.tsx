import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

// Component & Config imports
import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
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
    <html lang="en">
      <body className={`${inter.className}`}>
        <Navbar />
        <main className="flex bg-background text-foreground antialiased">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
