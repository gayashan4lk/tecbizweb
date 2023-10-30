import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-12  bg-black text-center text-white">
      <div className="container mx-auto">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 text-blue-100 hover:transform hover:scale-105 transition-transform duration-500">
          Tech Visionaries Unite
        </h2>
        <div className="text-center mb-8">
          <h3 className="text-base sm:text-lg md:text-xl lg:px-8 font-medium text-white hover:text-blue-900 transition duration-700">
            Founded by tech visionaries, we unite experts, fostering innovation and collaboration, pushing tech boundaries to create groundbreaking solutions.
          </h3>
          <div className="relative inline-block">
            <span className="text-sm bg-blue-900 text-white px-2 py-1 rounded-full absolute bottom-0 left-0 transform scale-0 transition-transform duration-700 group-hover:scale-100 group-hover:translate-x-2 group-hover:-translate-y-2">
              Hover me
            </span>
            <button className="group cursor-pointer bg-blue-300 hover:bg-blue-900 text-white px-4 py-2 rounded-full text-sm hover:shadow-md transition duration-700">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
