import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-black bg-cover bg-center py-32 md:py-16 lg:py-32 text-center text-black">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-300">
          Empowering Individuals & Achieve Excellence Through Professional Opportunities And AI Innovation.
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold mb-4 text-blue-200 hover:text-blue-300 transition duration-300">
          Your Solution for Tech Needs
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-8 text-white hover:text-blue-900 transition duration-300">
          We provide innovative tech solutions for your business.
        </p>
        <button className="bg-blue-300 hover:bg-blue-900 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full text-lg lg:text-xl transition duration-300 hover:text-white hover:shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
