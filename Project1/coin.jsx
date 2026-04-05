import React, { useState } from "react";

export default function Coin() {
  const [result, setResult] = useState(null);

  const tossCoin = () => {
    const outcome = Math.random() < 0.5 ? "Heads 🪙" : "Tails 🪙";
    setResult(outcome);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-center w-80">
        <h2 className="text-xl font-bold mb-4">Coin Toss</h2>
        <div className="text-5xl mb-4">{result}</div>
        <button
          onClick={tossCoin}
          className="px-4 py-2 bg-blue-400 hover:bg-blue-500 text-white rounded-lg shadow-md"
        >
          Toss Coin
        </button>
        {result && (
          <button
            onClick={() => setResult(null)}
            className="mt-4 px-3 py-1 bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-md"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}