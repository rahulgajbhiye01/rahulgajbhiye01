import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blogs",
    template: "%s | Blogs",
  },
};

export default function BlogsPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-custom w-full flex-col items-center">
      {children}
    </section>
  );
}
