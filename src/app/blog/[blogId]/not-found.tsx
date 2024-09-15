import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex w-full flex-row justify-center gap-1">
      Blog not found, Please return
      <Link href="/" className="text-red-300">
        home
      </Link>
    </div>
  );
}
