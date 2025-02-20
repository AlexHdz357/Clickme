import React from 'react';

const Navigation = () => {
  return (
    <div className="min-h-screen bg-white text-black">
         <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page2" className="text-black">Page 2</a>
      </div>
      {/* Rectangle at the top */}
      <div className="h-40 bg-red-600 w-80 flex justify-center items-center mx-auto">
    
      </div>

      {/* 2x2 Grid of Buttons */}
      <div className="grid grid-cols-2 gap-4 p-8">
        <button className="border border-black p-4 transition-all duration-300 hover:bg-black hover:text-white">
          Botón 1
        </button>
        <button className="border border-black p-4 transition-all duration-300 hover:bg-black hover:text-white">
          Botón 2
        </button>
        <button className="border border-black p-4 transition-all duration-300 hover:bg-black hover:text-white">
          Botón 3
        </button>
        <button className="border border-black p-4 transition-all duration-300 hover:bg-black hover:text-white">
          Botón 4
        </button>
      </div>
    </div>
  );
};

export default Navigation;