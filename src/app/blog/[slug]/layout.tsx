export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-[100vh] mt-24 flex flex-col items-center">
      {children}
    </div>
  );
}
