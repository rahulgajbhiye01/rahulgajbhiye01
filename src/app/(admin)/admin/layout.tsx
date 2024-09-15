import type { Metadata } from "next";
import { AuthProvider } from "@/lib/contexts/authContext";
import BreadcrumbBar from "@/components/ui/custom/BreadcrumbBar";
import Navbar from "@/components/layouts/navbar";
export const metadata: Metadata = {
  title: {
    default: "Admin",
    template: "Admin | Rahul Gajbhiye",
  },
};

export default function DashboardPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Navbar />
      <section className="flex min-h-custom w-full flex-col items-center">
        <BreadcrumbBar />
        <div className="flex w-11/12 flex-col gap-8 md:w-7/12">{children}</div>
      </section>
    </AuthProvider>
  );
}
