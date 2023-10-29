import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center py-32 sm:py-16 md:py-32 lg:py-64 xl:py-96 text-center text-white">
      <div className="container mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-700">
          Empowering Individuals & Achieve Excellence Through Professional Opportunities And AI Innovation.
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 text-blue-200 hover:text-blue-300 transition duration-700">
          Your Solution for Tech Needs
        </h2>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl px-4 sm:px-6 md:px-8 lg:px-10 mb-8 text-white hover:text-blue-900 transition duration-700">
          We provide innovative tech solutions for your business.
        </p>
        <button className="bg-blue-300 hover:bg-blue-900 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 lg:py-5 rounded-full text-lg xl:text-xl transition duration-700 hover:text-white hover:shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
