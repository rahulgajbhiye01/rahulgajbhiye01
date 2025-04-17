import Navbar from "@/components/layouts/navbar";
import Footer from "@/components/layouts/footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
