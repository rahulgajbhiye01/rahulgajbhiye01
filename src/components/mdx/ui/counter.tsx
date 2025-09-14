"use client";

import { useState } from "react";

interface CounterProps {
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
}

export function Counter({
  initialValue = 0,
  step = 1,
  min = -Infinity,
  max = Infinity,
}: CounterProps) {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount((prev) => Math.min(prev + step, max));
  };

  const decrement = () => {
    setCount((prev) => Math.max(prev - step, min));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return (
    <div className="my-6 p-6 border border-gray-200 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4">{count}</div>
        <div className="flex justify-center space-x-3">
          <button
            onClick={decrement}
            disabled={count <= min}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            - {step}
          </button>
          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={increment}
            disabled={count >= max}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            + {step}
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          Range: {min === -Infinity ? "−∞" : min} to{" "}
          {max === Infinity ? "∞" : max}
        </p>
      </div>
    </div>
  );
}
