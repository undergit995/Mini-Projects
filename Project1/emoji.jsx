import React, { useState } from "react";

export default function Feedback() {
  const [feed, setFeed] = useState(null);
  const emojis = ["😃", "😑", "😡"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] text-center w-80">
        {feed ? (
          <>
            <div className="text-6xl">{feed}</div>
            <p className="mt-4 text-lg font-semibold">Thank you!</p>
            <button
              onClick={() => setFeed(null)}
              className="mt-4 px-4 py-2 bg-yellow-400 hover:bg-yellow-500 rounded-lg shadow-md"
            >
              Go Back
            </button>
          </>
        ) : (
          <>
            <h2 className="text-xl font-bold mb-6">How was your experience?</h2>
            <div className="flex justify-center gap-6 text-4xl">
              {emojis.map((e, i) => (
                <button key={i} onClick={() => setFeed(e)} className="hover:scale-110 transform transition">
                  {e}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}