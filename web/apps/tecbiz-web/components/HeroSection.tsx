
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-cover bg-center py-32 text-center text-white">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-5xl font-semibold mb-4">Your Solution for Tech Needs</h2>
      <p className="text-lg md:text-xl mb-8">We provide innovative tech solutions for your business.</p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg transition duration-300">
        Get Started
      </button>
    </div>
  </section>
  );
};

export default HeroSection;
