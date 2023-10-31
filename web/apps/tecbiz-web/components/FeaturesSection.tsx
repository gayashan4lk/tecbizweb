import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black bg-hero-pattern bg-cover bg-center text-center text-black">
      <div className="container mx-auto">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-blue-100 hover:transform hover:scale-105 transition-transform duration-500">
          Tech Visionaries Unite
        </h2>
        <div className="text-center mb-8">
          <h3 className="text-base md:text-lg lg:px-8 font-medium text-white hover:text-blue-900 transition duration-300">
            Founded by tech visionaries, we unite experts, fostering innovation and collaboration, pushing tech boundaries to create groundbreaking solutions.
          </h3>
          <div className="relative inline-block">
            <span className="text-sm bg-blue-900 text-white px-2 py-1 rounded-full absolute bottom-0 left-0 transform scale-0 transition-transform duration-300 group-hover:scale-100 group-hover:translate-x-2 group-hover:-translate-y-2">
              Hover me
            </span>
            <button className="group cursor-pointer bg-blue-300 hover:bg-blue-900 text-white px-4 py-2 rounded-full text-sm hover:shadow-md transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
