import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-row">
      <h1>
        Blog not found, please return{" "}
        <Link href="/admin" className="text-red-200">
          admin.
        </Link>
      </h1>
    </div>
  );
}
