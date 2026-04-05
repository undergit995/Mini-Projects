import React, { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const [res, setRes] = useState(false);

  const changeFunc = (e) => {
    setSearch(e.target.value);
    setRes(true);
  };

  const Data = [
    { name: "React" },
    { name: "Javascript" },
    { name: "Node" },
    { name: "Next" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "MERN" },
  ];

  const [store] = useState(Data);

  const getStore = store.filter((data) =>
    data.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-[0_10px_25px_rgba(0,0,0,0.2)] w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Google Search</h2>
        <input
          type="text"
          value={search}
          onChange={changeFunc}
          onFocus={() => setRes(true)}
          onBlur={() => setTimeout(() => setRes(false), 150)} 
          className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search names..."
        />
        <div className="mt-2">
          {res &&
            getStore.map((value, index) => (
              <p
                key={index}
                className="p-2 rounded hover:bg-gray-100 cursor-pointer transition"
              >
                {value.name}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
}