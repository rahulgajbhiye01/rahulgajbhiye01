import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Blog",
    template: "%s | Blog",
  },
};

export default function BlogsPageLayout({
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
