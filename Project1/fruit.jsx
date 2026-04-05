import React, { useState } from "react";

export default function Fruit() {
  const [mango, setMango] = useState(0);
  const [banana, setBanana] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100">
      <div className="bg-white p-6 rounded-xl shadow-xl text-center">
        <h2 className="text-lg font-semibold mb-4">
          Bob ate <span className="text-yellow-500">{mango}</span> mangoes &{" "}
          <span className="text-yellow-500">{banana}</span> bananas
        </h2>

        <div className="flex gap-4 justify-center mb-4">
          <button onClick={() => setMango(mango + 1)} className="bg-yellow-400 px-3 py-1 rounded">
            Eat Mango
          </button>
          <button onClick={() => setBanana(banana + 1)} className="bg-green-400 px-3 py-1 rounded">
            Eat Banana
          </button>
        </div>

        <button onClick={() => {setMango(0); setBanana(0);}} className="bg-red-400 px-3 py-1 rounded">
          Reset
        </button>
      </div>
    </div>
  );
}