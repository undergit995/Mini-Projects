import React, { useState } from "react";

export default function Even() {
  const [even, setEven] = useState(0);
  const [odd, setOdd] = useState(1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white p-6 rounded-xl shadow-xl flex gap-6">

        <div className="text-center">
          <h2>Even: {even}</h2>
          <button onClick={() => setEven(even + 2)} className="bg-blue-200 px-2 m-1 rounded">+</button>
          <button onClick={() => setEven(even - 2)} className="bg-red-800 px-2 m-1 rounded">-</button>
        </div>

        <div className="text-center">
          <h2>Odd: {odd}</h2>
          <button onClick={() => setOdd(odd + 2)} className="bg-blue-200 px-2 m-1 rounded">+</button>
          <button onClick={() => setOdd(odd - 2)} className="bg-red-800 px-2 m-1 rounded">-</button>
        </div>

      </div>
    </div>
  );
}