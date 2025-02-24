'use client'
import React, { useState } from 'react';

const Navigation = () => {
  const [count, setCount] = useState(10);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page2" className="text-black">Page 2</a>
        <a href="/page3" className="text-black">Page 3</a>
      </div>
      
      <div className="flex flex-col min-h-[calc(100vh-73px)] items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
        
        <div className="flex flex-col gap-4 items-center">
          <button 
            onClick={incrementCount}
            className="mt-4 px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Click me
          </button>
          
          <button 
            onClick={decrementCount}
            className="px-4 py-2 border border-black transition-all duration-300 hover:bg-black hover:text-white"
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;