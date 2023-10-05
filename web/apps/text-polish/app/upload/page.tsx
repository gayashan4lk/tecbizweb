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

  // Function to handle moving to the next image
  const moveToNextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Function to handle moving to the previous image
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
        <button className="Cbutton insert" onClick={toggleInsertOptions}>
          Insert
        </button>
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
        <button className="previous-button" onClick={moveToPreviousImage}>
          Previous
        </button>
        <canvas id="imageCanvas" className='canvasS'>
          {}
        </canvas>
        <button className="next-button" onClick={moveToNextImage}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;



