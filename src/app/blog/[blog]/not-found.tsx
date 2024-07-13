import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Blog Not Found</h1>
      <Button>
        <Link href="/"></Link>Return Home
      </Button>
    </div>
  );
}
