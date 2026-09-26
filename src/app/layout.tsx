import type { Metadata } from "next";
import { IBM_Plex_Mono, Newsreader, Source_Sans_3 } from "next/font/google";

// @ts-ignore
import "./globals.css";
import { BackToTop } from "@/components/back-to-top";
import { JsonLd } from "@/components/json-ld";
import { ReadingProgress } from "@/components/reading-progress";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { websiteJsonLd } from "@/lib/seo";

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rahulgajbhiye.com"),
  title: {
    default: "Rahul Gajbhiye",
    template: "%s | Rahul Gajbhiye",
  },
  description:
    "A living archive of what Rahul Gajbhiye builds, learns, thinks about, and documents.",
  openGraph: {
    title: "Rahul Gajbhiye",
    description:
      "A living archive of what Rahul Gajbhiye builds, learns, thinks about, and documents.",
    url: "https://rahulgajbhiye.com",
    siteName: "Rahul Gajbhiye",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Gajbhiye",
    description:
      "A living archive of what Rahul Gajbhiye builds, learns, thinks about, and documents.",
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
    <html
      lang="en"
      id="top"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${newsreader.variable} ${sourceSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <JsonLd data={websiteJsonLd()} />
        <SkipLink />
        <ReadingProgress />
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div
            id="content"
            className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pt-10 pb-20 sm:px-8 sm:pt-14 sm:pb-24 lg:px-12 lg:pt-16"
          >
            {children}
          </div>
        </div>
        <BackToTop />
      </body>
    </html>
  );
}
