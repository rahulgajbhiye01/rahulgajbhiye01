import type { Metadata } from "next";

// @ts-ignore
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulgajbhiye.com"),
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description:
    "Rahul Gajbhiye builds software and writes about systems, delivery, and product craft.",
  keywords: [
    "Rahul Gajbhiye",
    "DevOps",
    "software engineering",
    "platform engineering",
    "technical writing",
    "systems thinking",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rahul Gajbhiye",
    description:
      "Software, systems, and writing by Rahul Gajbhiye. Apps, notes, and how to work together.",
    url: "https://rahulgajbhiye.com",
    siteName: "Rahul Gajbhiye",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Gajbhiye",
    description:
      "Software, systems, and writing by Rahul Gajbhiye. Apps, notes, and how to work together.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" id="top" data-scroll-behavior="smooth">
      <body>
        <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
