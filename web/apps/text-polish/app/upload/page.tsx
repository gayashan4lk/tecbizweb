"use client"
import React, { useState } from 'react';
import TPComponent from '../convert/TPComponent';
import HeaderComp from "../Components/HeaderComp";
import FooterComp from "../Components/FooterComp";

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
      <HeaderComp/><br/><br/><br/>
      <div>
        <TPComponent />
      </div>
      <div className="bg-black h-35">
        <button className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out bg-black text-white text-base mr-4" onClick={toggleInsertOptions}>
          Insert
        </button>
        <button className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out bg-black text-white text-base">Edit</button>
      </div>
      <div className={`h-24 transition-transform ease-in-out duration-500 transform ${showInsertOptions ? 'scale-y-100' : 'scale-y-0'}`}>
        <div className="bg-black w-28">
          <div>
            <button className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out bg-black text-white text-sm">Word Document</button>
          </div>
          <div>
            <button className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out bg-black text-white text-sm">PDF</button>
          </div>
          <div>
            <button className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out bg-black text-white text-sm">Text</button>
          </div>
        </div>
      </div>
      <div className="pl-40 pr-40 pt-70 grid grid-rows-1 grid-flow-col">
        <div className="flex items-center justify-end">
          <button
            className="transform scale-100 hover:scale-150 cursor-pointer transition duration-300 ease-in-out text-center bg-transparent hover:bg-transparent  text-white text-lg px-16 py-20 rounded-xl"
            onClick={moveToPreviousImage}
          >
            <p className='text-4xl'>〈</p>
          </button>
        </div>
        <div>
          <canvas id="imageCanvas" className="canvasR">{ }</canvas>
        </div>
        <div className="flex items-center justify-start">
          <button
            className="transform scale-100 hover:scale-150 cursor-pointer transition duration-300 ease-in-out text-center bg-transparent hover:bg-transparent text-white text-lg px-16 py-20 rounded-xl"
            onClick={moveToNextImage}
          >
            <p className='text-4xl'>〉</p>
          </button>
        </div>
      </div>
      <FooterComp/>
    </div>
  );
}

export default App;

