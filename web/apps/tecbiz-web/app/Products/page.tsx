import React from 'react';

const ProductsPage: React.FC = () => {
  return (
    <div className="bg-black py-16 text-white text-center">
      <h1 className="py-8 text-2xl md:text-4xl lg:text-6xl font-semibold mb-4 text-blue-100 hover:text-blue-400 transition duration-300">Discover Our Extraordinary Products</h1>
      <p className="text-lg md:text-lg lg:text-xl mb-8 text-white hover:text-blue-900 transition duration-300">
        Dive into the world of innovation and wonder with our exceptional product offerings. We've carefully crafted each product to redefine your experience and surpass your expectations.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-black hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8 ">Text Polish</h2>
          <p className="text-xl md:text-1xl font-semibold text-center mb-8">
            Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
          </p>
          <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            More Details
          </a>        </div>
       
        <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-black hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8 ">Product 2</h2>
          <p className="text-xl md:text-1xl font-semibold text-center mb-8">
            Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
          </p>
          <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            More Details
          </a>        </div>

        <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-black hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8 ">Product 3</h2>
          <p className="text-xl md:text-1xl font-semibold text-center mb-8">
            Elevate your written communication with Text Polish. This remarkable tool ensures that every word shines brilliantly, creating content that captivates and mesmerizes your audience.
          </p>
          <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            More Details
          </a>        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
