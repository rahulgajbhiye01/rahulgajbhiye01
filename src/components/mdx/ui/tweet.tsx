"use client";

import { useState, useEffect } from "react";

interface TweetProps {
  id: string;
  hideThread?: boolean;
}

export function Tweet({ id, hideThread = false }: TweetProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // In a real implementation, you'd load the Twitter widget script
    // For this example, we'll just simulate loading
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!loaded) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 my-6 bg-gray-50 animate-pulse">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="space-y-2">
            <div className="w-24 h-4 bg-gray-300 rounded"></div>
            <div className="w-16 h-3 bg-gray-300 rounded"></div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 my-6 bg-white shadow-sm">
      <div className="flex items-center space-x-3 mb-3">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          T
        </div>
        <div>
          <div className="font-semibold">Twitter User</div>
          <div className="text-sm text-gray-500">@twitteruser</div>
        </div>
      </div>
      <p className="text-gray-800 mb-3">
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
