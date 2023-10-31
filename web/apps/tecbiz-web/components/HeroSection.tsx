import React from 'react';
import Welcome from './Te.json';
import Lottie from 'lottie-react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-center text-white relative">
      <div className="w-full h-screen  items-center justify-center absolute top-7 left-0 z-0">
        <Lottie
          animationData={Welcome}
          loop={true}
          autoplay={true}
          style={{ maxWidth: '100%', height: '100%' }}
        />
      </div>

      <div className="container mx-auto  md:mt-20 lg:mt-10 sm:mt-24 relative z-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-700">
          Empowering Individuals & Achieve Excellence Through Professional Opportunities And AI Innovation.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 text-blue-200 hover:text-blue-300 transition duration-700">
          Your Solution for Tech Needs
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 sm:px-6 md:px-8 lg:px-10 mb-8 text-white hover:text-blue-900 transition duration-700">
          We provide innovative tech solutions for your business.
        </p>
        <button className="group cursor-pointer bg-blue-300 hover:bg-blue-900 text-white px-4 py-2 rounded-full text-sm hover:shadow-md transition duration-300">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
