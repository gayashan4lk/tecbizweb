"use client"
import React from 'react';
import Welcome from './products2.json';
import Lottie from 'lottie-react';

const AboutPage: React.FC = () => {
  return (
 <section className="bg-black  min-h-screen items-center justify-center text-center text-white relative p-8 ">
    <div className="w-full h-screen  sm:h-3/4 md:h-3/4 lg:h-full xl:h-full  left-0 z-0 flex items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center mt-10 sm:mb-1">
    
     <Lottie
       animationData={Welcome}
       loop={true}
       autoplay={true}
       style={{ maxWidth: '100%', height: '90%' }}
     />
   </div>
   <div className="h-full justify-center text-center">
   <div className="text-blue-100 hover:text-white transition duration-700 transform hover:scale-90">

   <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 ml-2 text-blue-100 hover:text-blue-400 transition duration-700">
      WE LIVE AND BREATHE</h1>
      <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-4 ml-2 text-blue-300 hover:text-blue-400 transition duration-700">
              Perfectus operates at the cutting edge of Web 3.0 innovation. With our team of 25+ experienced engineers, we develop bespoke Web 3.0 solutions for enterprises of all sizes, making use of the latest developments in the space to create products and assets that stand out.
            </h2>
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
          
          <div className="mt-1"></div>
        </div>
        </section>
    
    
  );
};

export default AboutPage;
