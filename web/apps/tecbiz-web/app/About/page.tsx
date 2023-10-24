import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4 text-blue-900">WE LIVE AND BREATHE</h1>
        <p className="text-gray-600">
          Perfectus operates at the cutting edge of Web 3.0 innovation. With our team of 25+ experienced engineers, we develop bespoke Web 3.0 solutions for enterprises of all sizes, making use of the latest developments in the space to create products and assets that stand out.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-blue-900 shadow-lg rounded-full transition-transform hover:scale-105 transform-gpu">
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

      <div className="mt-8">
      </div>
    </div>
  );
};

export default AboutPage;
