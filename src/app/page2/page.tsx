'use client'
import React from 'react';

const Navigation = () => {
  const [color, setColor] = React.useState('red');

  const handleSubmitBlue = (e) => {
    e.preventDefault();
    setColor('blue');
  };

  const handleSubmitGreen = (e) => {
    e.preventDefault();
    setColor('green');
  };

  const handleSubmitPurple = (e) => {
    e.preventDefault();
    setColor('purple');
  };

  const handleSubmitRed = (e) => {
    e.preventDefault();
    setColor('red');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="p-4 flex gap-28 border-b border-black">
        <a href="/" className="text-black text-xl">☆</a>
        <a href="/" className="text-black">Home</a>
        <a href="/page2" className="text-black">Page 2</a>
      </div>
      {/* Rectangle at the top */}
      <div className={`h-40 ${color === 'blue' ? 'bg-blue-600' : 
                            color === 'green' ? 'bg-green-600' : 
                            color === 'purple' ? 'bg-purple-600' : 
                            'bg-red-600'} w-80 flex justify-center items-center mx-auto`}>
        <span className="text-white">Color: {color}</span>
      </div>
      {/* 2x2 Grid of Buttons */}
      <div className="grid grid-cols-2 gap-4 p-8">
        <form onSubmit={handleSubmitBlue}>
          <button 
            type="submit"
            className="w-full border border-blue-600 bg-blue-600 text-white p-4 transition-all duration-300 hover:bg-blue-700 hover:border-blue-700"
          >
            Blue Rectangle
          </button>
        </form>
        <form onSubmit={handleSubmitGreen}>
          <button 
            type="submit"
            className="w-full border border-green-600 bg-green-600 text-white p-4 transition-all duration-300 hover:bg-green-700 hover:border-green-700"
          >
            Green Rectangle
          </button>
        </form>
        <form onSubmit={handleSubmitPurple}>
          <button 
            type="submit"
            className="w-full border border-purple-600 bg-purple-600 text-white p-4 transition-all duration-300 hover:bg-purple-700 hover:border-purple-700"
          >
            Purple Rectangle
          </button>
        </form>
        <form onSubmit={handleSubmitRed}>
          <button 
            type="submit"
            className="w-full border border-red-600 bg-red-600 text-white p-4 transition-all duration-300 hover:bg-red-700 hover:border-red-700"
          >
            Red Rectangle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navigation;