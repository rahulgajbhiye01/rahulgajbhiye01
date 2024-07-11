import type { Metadata } from "next";
import { BlogProvider } from "@/contexts/blogContext";
import Navbar from "../../../components/pages/dashboard/navbar";
import { AuthProvider } from "@/contexts/authContext";
export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <BlogProvider>
        <section className="flex min-h-custom w-full flex-col items-center">
          <Navbar />
          {children}
        </section>
      </BlogProvider>
    </AuthProvider>
  );
}
