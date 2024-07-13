import type { Metadata, Viewport } from "next";
import "../styles/globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { siteConfig } from "@/configs/site";

import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";
import { Toaster } from "@/components/ui/toaster";

import { getSocialsData } from "@/lib/db/db-helper";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "cyan" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://${process.env.VERCEL_URL}"),
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description: siteConfig.description,
  keywords: [],
  authors: siteConfig.authors,
  creator: "Rahul Gajbhiye",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      // {
      //   url: siteConfig.ogImage,
      //   width: 1200,
      //   height: 630,
      //   alt: siteConfig.name,
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter.href.split("/").pop(),
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialData = await getSocialsData();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="flex min-h-screen bg-background text-foreground antialiased">
          {children}
        </main>
        <Footer socialData={socialData} />
        <Toaster />
      </body>
    </html>
  );
}
