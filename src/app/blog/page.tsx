import Blog from "@/components/pages/blog";

export default async function BlogPage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/blog`, {
    cache: "no-store", // Ensures the data is fresh on each request
  });
  const blogsData = await response.json();
  return <Blog blogsData={blogsData} />;
}
