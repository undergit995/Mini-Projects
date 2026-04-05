import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-100">
      <div className="bg-white p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-center w-80">
        <h2 className="text-xl font-bold mb-4">Counter App</h2>
        <div className="text-5xl mb-4">{count}</div>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg shadow-md"
          >
            +
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-400 hover:bg-red-500 text-white rounded-lg shadow-md"
          >
            -
          </button>
        </div>
        <button
          onClick={() => setCount(0)}
          className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}