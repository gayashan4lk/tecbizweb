"use client"

import React from 'react';
import Welcome from './products2.json';
import Lottie from 'lottie-react';

const AboutPage: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center min-h-screen  items-center justify-center text-center text-white relative">

      <div className="bg-black pt-80 text-white text-center h-full w-full">
        <div className="w-full h-screen flex items-center justify-center absolute top-0 left-0 z-0">
          <Lottie
            animationData={Welcome}
            loop={true}
            autoplay={true}
            style={{ maxWidth: '100%', height: '75%%' }}
          />
        </div>
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white ">
      <div className="text-center py-16">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-700">WE LIVE AND BREATHE</h1>
        <p className="text-base md:text-lg lg:px-8 font-medium text-white hover:text-blue-900 transition duration-700">
          Perfectus operates at the cutting edge of Web 3.0 innovation. With our team of 25+ experienced engineers, we develop bespoke Web 3.0 solutions for enterprises of all sizes, making use of the latest developments in the space to create products and assets that stand out.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="py-8 bg-blue-900 shadow-lg rounded-full transition-transform hover:scale-105 transform-gpu">
          <h2 className="text-4xl font-bold text-center">+200</h2>
          <p className="text-2xl font-semibold text-center">Smart contracts Done</p>
        </div>

        <div className="p-4 bg-blue-900 shadow-lg rounded-full transition-transform hover:scale-105 transform-gpu">
          <h2 className="text-4xl font-bold text-center">+400</h2>
          <p className="text-2xl font-semibold text-center">+Smart contract Audits Done</p>
        </div>

        <div className="p-4 bg-blue-900 shadow-lg rounded-full transition-transform hover:scale-105 transform-gpu">
          <h2 className="text-4xl font-bold text-center">100</h2>
          <p className="text-2xl font-semibold text-center">+100 Dapps Done</p>
        </div>

        <div className="p-4 bg-blue-900 shadow-lg rounded-full transition-transform hover:scale-105 transform-gpu">
          <h2 className="text-4xl font-bold text-center">+10</h2>
          <p className="text-2xl font-semibold text-center">+10 NFT & GameFi Platforms Done</p>
        </div>
      </div>

      <div className="mt-1">
      </div>
    </div>
    </div>
    </section>
  );
};

export default AboutPage;
