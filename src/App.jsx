import React, { useState } from 'react';
import Cash from '../Project1/cash';
import CounterApp from '../Project1/counter';
import Todo from '../Project1/Todo';
import Theme from '../Project1/Theme';
import Speed from '../Project1/Speed';
import Search from '../Project1/search';
import Random from '../Project1/Random';
import Profile from '../Project1/profile';
import Letters from '../Project1/letters';
import Fruit from '../Project1/fruit';
import Even from '../Project1/even';
import Feedback from '../Project1/emoji-feedback/src/Component/Feedback/Feedback';
import Coin from '../Project1/coin';

const files = [{
  id: "Coin Toss",
  name: <Coin/>,
  content: "This is the detailed content for File 1."
}, {
  id: "Counter",
  name: <CounterApp/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Cash Withdrawal",
  name: <Cash/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Feedback",
  name: <Feedback/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Even and Odd",
  name: <Even/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Fruit Eat",
  name: <Fruit/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Letters Count",
  name: <Letters/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Profile",
  name: <Profile/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Random Number",
  name: <Random/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Search Bar",
  name: <Search/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Speedometer",
  name: <Speed/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Theme Switcher",
  name: <Theme/>,
  content: "This is the detailed content for File 2."
}, {
  id: "Simple Todo",
  name: <Todo/>,
  content: "This is the detailed content for File 2."
}];

export default function App() {
  const [activeFileId, setActiveFileId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mb-6 rounded-xl bg-gradient-to-r from-blue-100 to-purple-50 p-4 shadow-sm border border-gray-200">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4 px-2">
          Select a File 
        </h2>
        
        <div className="flex flex-wrap gap-2">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setActiveFileId(file.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 
                ${activeFileId === file.id 
                  ? 'bg-blue-600 text-white shadow-md scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {file.id}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-white p-10 shadow-xl border border-gray-100 min-h-[400px] flex flex-col justify-center items-center text-center">
        {activeFileId ? (
          <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="w- font-bold text-gray-800 mb-2">
              {files.find(f => f.id === activeFileId).name}
            </div>
          </div>
        ) : (
          <div className="text-gray-400">
            <svg xmlns="http://w3.org" className="h-12 w-12 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
            <p className="italic">Click a file name above to view its contents</p>
          </div>
        )}
      </div>
    </div>
  );
}