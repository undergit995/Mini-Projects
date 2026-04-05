
import React, { useState } from "react";

export default function Theme() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <div
        className={`min-h-screen flex items-center justify-center transition 
        ${dark ? "bg-gray-900" : "bg-yellow-100"}`}
      >
        <div
          className={`p-6 rounded-lg shadow-md text-center transition
          ${dark ? "bg-gray-800 text-white" : "bg-yellow-300 text-black"}`}
        >
          <h1 className="text-xl font-semibold">
            {dark ? "Dark Mode " : "Light Mode "}
          </h1>

          <button
            onClick={() => setDark(!dark)}
            className={`mt-4 px-4 py-2 rounded transition
            ${
              dark
                ? "bg-yellow-400 text-black"
                : "bg-black text-yellow-300"
            }`}
          >
            {dark ? "Switch to Light" : "Switch to Dark"}
          </button>
        </div>
      </div>
    </div>
  );
}