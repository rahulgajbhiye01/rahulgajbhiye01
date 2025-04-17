import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-row justify-center gap-1">
      Blog not found, please return
      <Link href="/admin" className="text-red-200">
        admin
      </Link>
    </div>
  );
}
