import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1>
        Blog not found, Please return <Link href="/">Home</Link>
      </h1>
    </div>
  );
}
