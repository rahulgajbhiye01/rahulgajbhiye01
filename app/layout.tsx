import type { Metadata } from "next";
import "./globals.css";

import Social from "@/components/social";
import Navbar from "@/components/navbar";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Rahul Gajbhiye",
  description: "Portfolio website of Rahul Gajbhiye",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-center">
            <div className="grid lg:w-11/12 lg:grid-cols-12">
              <Navbar />
              <Social />
              <section className="mb-20 grid p-4 lg:col-start-2 lg:col-end-13 lg:m-0 lg:grid-cols-12">
                {children}
              </section>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
