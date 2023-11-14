"use client"
import React from 'react';
import Welcome from './p.json';
import Lottie from 'lottie-react';

const ProductsPage: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center min-h-screen items-center justify-center text-center text-white relative">
       <div className="w-full h-screen left-0 z-0 flex items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center ">
        <Lottie
          animationData={Welcome}
          loop={true}
          autoplay={true}
          style={{ maxWidth: '75%', height: '75%' }}
        />
      </div>
      <div className="h-full justify-center text-center">
        <div className="text-blue-100 hover:text-white transition duration-600 transform hover:scale-90">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 ml-2 text-blue-100 hover:text-blue-400 transition duration-600">
            Discover Our Extraordinary Products
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-semibold mb-4 ml-2 text-blue-300 hover:text-blue-400 transition duration-600">
            Dive into the world of innovation and wonder with our exceptional product offerings. We've carefully crafted each product to redefine your experience and surpass your expectations.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-600 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Text Polish</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
              More Details
            </a>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-600 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Product 2</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
              More Details
            </a>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-600 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Product 3</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
              More Details
            </a>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default ProductsPage;
