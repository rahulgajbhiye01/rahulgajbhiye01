import type { Metadata } from "next";

// @ts-ignore
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulgajbhiye.com"),
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description:
    "Rahul Gajbhiye writes about systems, software delivery, DevOps, and practical product thinking.",
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
      "DevOps engineer and writer sharing systems thinking, practical engineering notes, and product insights.",
    url: "https://rahulgajbhiye.com",
    siteName: "Rahul Gajbhiye",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Gajbhiye",
    description:
      "DevOps engineer and writer sharing systems thinking, practical engineering notes, and product insights.",
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
          {children}
        </div>
      </body>
    </html>
  );
}
