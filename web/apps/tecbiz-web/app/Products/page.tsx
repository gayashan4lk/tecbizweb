"use client"
import React from 'react';
import Welcome from './Products3.json';
import Lottie from 'lottie-react';

const ProductsPage: React.FC = () => {
  return (
    <section className="bg-black bg-cover bg-center min-h-screen items-center justify-center text-center text-white relative">
       <div className="w-full h-screen top-10 left-0 z-0 flex items-center justify-center">
        <Lottie
          animationData={Welcome}
          loop={true}
          autoplay={true}
          style={{ maxWidth: '100%', height: '75%' }}
        />
      </div>
      <div className="h-full justify-center text-center">
        <div className="text-blue-100 hover:text-white transition duration-700 transform hover:scale-90">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-700">
            Discover Our Extraordinary Products
          </h1>
          <p className="text-lg md:text-lg lg:px-8 mb-8 text-white hover:text-blue-900 transition duration-700">
            Dive into the world of innovation and wonder with our exceptional product offerings. We've carefully crafted each product to redefine your experience and surpass your expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-blue-100 hover:text-blue-400 transition duration-700 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Text Polish</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              More Details
            </a>
          </div>

          <div className="text-blue-100 hover:text-blue-400 transition duration-700 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Product 2</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover.bg-blue-600 transition duration-200">
              More Details
            </a>
          </div>

          <div className="text-blue-100 hover:text-blue-400 transition duration-700 transform hover:scale-90">
            <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Product 3</h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
            </p>
            <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              More Details
            </a>
          </div>
        </div>
      </div>

     
    </section>
  );
};

export default ProductsPage;
