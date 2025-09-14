export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen mt-24 flex flex-col justify-center">
      {children}
    </div>
  );
}
