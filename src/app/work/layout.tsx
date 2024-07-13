import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

export default function WorkPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-custom w-full flex-col items-center pt-10">
      {children}
    </section>
  );
}
