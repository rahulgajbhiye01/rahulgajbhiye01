import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-3 text-muted">
        The page you’re looking for doesn’t exist.
      </p>
      <Link className="mt-8 underline underline-offset-4" href="/">
        Return home
      </Link>
    </main>
  );
}
