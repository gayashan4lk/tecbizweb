import React from 'react';
import Welcome from './World.json';
import Lottie from 'lottie-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center text-white relative mt-10">

      <div className="w-full h-1/2 sm:h-3/4 md:h-3/4 lg:h-full xl:h-full flex items-center justify-center absolute left-0 z-0  sm:justify-center md:justify-center lg:justify-center xl:justify-center"> 
        <Lottie
          animationData={Welcome}
          loop={true}
          autoplay={true}
          style={{ maxWidth: '100%', height: '90%' }}
        />
      </div>

      <div className="container mx-auto  relative z-10 sm:justify-center md:justify-center lg:justify-center xl:justify-center">
        <h1 className="text-xl sm:text-md md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 ml-2 text-blue-100 hover:text-blue-400 transition duration-700">
          Empowering Individuals & Achieve Excellence Through Professional Opportunities And AI Innovation.
        </h1>
        <h2 className="text-xl sm:text-md md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 ml-2 text-blue-300 hover:text-blue-400 transition duration-700">
          Your Solution for Tech Needs
        </h2>
        <p className="text-base sm:text-sm md:text-xl lg:text-2xl xl:text-3xl px-4 sm:px-6 md:px-8 lg:px-10 mb-4 ml-2 text-white hover:text-blue-900 transition duration-700">
          We provide innovative tech solutions for your business.
        </p>
        <a href="#" className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
