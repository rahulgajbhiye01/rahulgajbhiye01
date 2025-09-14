import React from "react";

const NotFound = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-gray-900">Post Not Found</h1>
      <p className="text-gray-600 mb-8">
        The blog post you're looking for doesn't exist or has been moved.
      </p>
      <a
        href="/blog"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Blog
      </a>
    </div>
  );
};

export default NotFound;
