"use client"
import React, { useState } from 'react';
import TPComponent from '../convert/TPComponent';

function App() {
  const [showInsertOptions, setShowInsertOptions] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]); // Store images here

  const toggleInsertOptions = () => {
    setShowInsertOptions(!showInsertOptions);
  };

  const moveToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const moveToPreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div>
      <div>
        <TPComponent />
      </div>
      <div className='bg-gray-800 h-35'>
        <button className="bg-gray-800 text-white text-base mr-4" onClick={toggleInsertOptions}>Insert</button>
        <button className="bg-gray-800 text-white text-base">Edit</button>
      </div>
      {showInsertOptions && (
        <div className="bg-gray-800 w-28">
          <div>
            <button className='bg-gray-800 text-white text-sm'>Word Document</button>
          </div>
          <div>
            <button className='bg-gray-800 text-white text-sm'>PDF</button>
          </div>
          <div>
            <button className='Cbutbg-gray-800 text-white text-sm'>Text</button>
          </div>
        </div>
      )}
      <div className="Ucontainer">
        <canvas id="imageCanvas" className='canvasS'>
          { }
        </canvas>
        <p className="buttonR ">
          <button className="cursor-pointer transition duration-300 ease-in-out text-center bg-blue-500 text-white text-lg px-5 py-2 rounded-full" onClick={moveToPreviousImage}>
            Previous
          </button >
          <button className="cursor-pointer transition duration-300 ease-in-out text-center bg-blue-500 text-white text-lg px-5 py-2 rounded-full" onClick={moveToNextImage}>
            Next
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;

