import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
export const metadata: Metadata = {
  title: "Rahul Gajbhiye",
  description: "Portfolio Website of Rahul Gajbhiye",
  icons: "/monster.svg",
};
import { Toaster } from "@/components/ui/toaster";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="dark">
        <main className="flex h-screen flex-col overflow-x-hidden overflow-y-scroll px-2 scrollbar-track-primary scrollbar-thumb-background dark:bg-primary md:scrollbar-thin xl:snap-y xl:snap-mandatory">
          <div className="dark:bg-background dark:text-foreground">
            <Navbar />
            {children}
          </div>
          <Toaster />
        </main>
      </body>
    </html>
  );
}
