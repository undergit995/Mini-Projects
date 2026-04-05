import { useState } from 'react'

function Random() {const [number, setNumber] = useState(null);
  const [history, setHistory] = useState([]);
  const [animating, setAnimating] = useState(false);

  const generate = () => {
    setAnimating(true);
    setTimeout(() => {
      const n = Math.floor(Math.random() * 100) + 1;
      setNumber(n);
      setHistory(prev => [n, ...prev].slice(0, 5));
      setAnimating(false);
    }, 300);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50">
      <div className="bg-white rounded-3xl shadow-lg p-10 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-1">Random Number</h1>
        <p className="text-gray-400 text-sm mb-8">Range: 1 – 100</p>

        <div className="flex items-center justify-center mb-8">
          <div className="w-36 h-36 rounded-full border-4 border-purple-200 flex items-center justify-center bg-purple-50">
            <span className={`text-5xl font-bold text-purple-600 transition-all duration-300 `}>
              {number ?? "?"}
            </span>
          </div>
        </div>

        <button
          onClick={generate}
          className="w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-2xl transition text-base tracking-wide mb-6"
        >
          Generate
        </button>

      </div>
    </div>
  );
}

export default Random
