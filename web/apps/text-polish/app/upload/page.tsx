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
      <div className='choose'>
        <button className="Cbutton insert" onClick={toggleInsertOptions}>Insert</button>
        <button className="Cbutton edit">Edit</button>
      </div>
      {showInsertOptions && (
        <div className="list">
          <div>
            <button className='Cbutton'>Word Document</button>
          </div>
          <div>
            <button className='Cbutton'>PDF</button>
          </div>
          <div>
            <button className='Cbutton'>Text</button>
          </div>
        </div>
      )}
      <div className="Ucontainer">
        <canvas id="imageCanvas" className='canvasS'>
          { }
        </canvas>
        <p className="buttonR ">
          <button className="nextbtn" onClick={moveToPreviousImage}>
            Previous
          </button >
          <button className="nextbtn" onClick={moveToNextImage}>
            Next
          </button>
        </p>
      </div>
    </div>
  );
}

export default App;

