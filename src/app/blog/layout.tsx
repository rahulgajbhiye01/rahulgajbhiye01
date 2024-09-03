import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Rahul Gajbhiye",
  },
};

export default function BlogsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-custom w-full flex-col items-center py-10">
      {children}
    </section>
  );
}
