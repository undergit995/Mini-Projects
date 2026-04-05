import { useState } from 'react'


export default function Todo() {
  const [data, setData] = useState([
    "React JS",
    "React Library","React Framework",
    "Learn Hooks","Learn State"
  ]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-xl shadow-xl w-80">
        <h1 className="text-lg font-semibold mb-4 text-center">Todos</h1>

        {data.map((item, i) => (
          <div key={i} className="flex justify-between mb-2">
            <p>{item}</p>
            <button onClick={() => setData(data.filter((_, ind) => ind !== i))} className="text-red-500">
              ✕
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}