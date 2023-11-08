import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="  sm:justify-center md:justify-center lg:justify-center xl:justify-center ml-2  bg-black bg-hero-pattern bg-cover bg-center text-center">
      <div className="container mx-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 ml-2 text-blue-100 hover:text-blue-400 transition duration-700">
          Tech Visionaries Unite
        </h1>
        <div className="text-center mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl  mb-4 ml-2 text-white hover:text-blue-900 transition duration-700">
            Founded by tech visionaries, we unite experts, fostering innovation and collaboration, pushing tech boundaries to create groundbreaking solutions.
          </h2>
          <div className="relative inline-block">
            <span className="text-sm bg-blue-900 text-white px-2 py-1 rounded-full absolute bottom-0 left-0 transform scale-0 transition-transform duration-300 group-hover:scale-100 group-hover:translate-x-2 group-hover:-translate-y-2">
              Hover me
            </span>
            <a href="#" className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
