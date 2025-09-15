"use client";

import { useState, useEffect } from "react";

interface TweetProps {
  id: string;
  hideThread?: boolean;
}

export function Tweet({ id }: TweetProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // In a real implementation, you'd load the Twitter widget script
    // For this example, we'll just simulate loading
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="my-6 animate-pulse rounded-lg border border-gray-200 bg-gray-50 p-6">
        <div className="mb-3 flex items-center space-x-3">
          <div className="h-12 w-12 rounded-full bg-gray-300"></div>
          <div className="space-y-2">
            <div className="h-4 w-24 rounded bg-gray-300"></div>
            <div className="h-3 w-16 rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-3/4 rounded bg-gray-300"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 font-bold text-white">
          T
        </div>
        <div>
          <div className="font-semibold">Twitter User</div>
          <div className="text-sm text-gray-500">@twitteruser</div>
        </div>
      </div>
      <p className="mb-3 text-gray-800">
        This is a placeholder for tweet content. In a real implementation, you
        would load the actual tweet data.
      </p>
      <div className="text-sm text-gray-500">
        <a
          href={`https://twitter.com/twitter/status/${id}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          View on Twitter →
        </a>
      </div>
    </div>
  );
}
