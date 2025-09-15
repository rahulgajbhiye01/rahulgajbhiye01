import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 text-center">
      <h1 className="mb-4 text-4xl font-bold text-gray-900">Post Not Found</h1>
      <p className="mb-8 text-gray-600">
        The blog post you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>
      <Link
        href="/blog"
        className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
      >
        Back to Blog
      </Link>
    </div>
  );
};

export default NotFound;
