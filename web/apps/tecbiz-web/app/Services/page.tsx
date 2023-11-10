"use client"
import React from 'react';
import Welcome from './Service.json';
import Lottie from 'lottie-react';

const ServicesPage = () => {
  return (
 <section className="bg-black  min-h-screen items-center justify-center text-center text-white relative p-8 ">
    <div className="w-full h-screen  sm:h-3/4 md:h-3/4 lg:h-full xl:h-full  left-0 z-0 flex items-center justify-center sm:justify-center md:justify-center lg:justify-center xl:justify-center mt-10 sm:mb-1">
    
     <Lottie
       animationData={Welcome}
       loop={true}
       autoplay={true}
       style={{ maxWidth: '100%', height: '90%' }}
     />
   </div>
    
   <div className="h-full justify-center text-center">
   <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-blue-300 hover:text-gray-900  transition duration-600 transform hover:scale-90">

    <h2 className="text-4xl md:text-3xl lg:text-5xl  font-bold mb-4 text-blue-900  transition duration-600">
      BESPOKE WEB 2.0 DEVELOPMENT
    </h2>
    <p className="text-2xl font-semibold text-center mb-4">
      Our team of developers creates Web 2.0 products designed to meet specific business requirements. Leveraging our hands-on experience in the latest technologies like PostgreSQL, MongoDB, Angular, Node.js, React, React Native, and Python, we simplify complex business workflows with adaptive web and mobile apps.
    </p>
    <button className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
      Contact Us
    </button>
  </div>
  <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-blue-300 hover:text-gray-900  transition duration-600 transform hover:scale-90">
  <h2 className="text-4xl md:text-3xl lg:text-5xl  font-bold mb-4 text-blue-900  transition duration-600">
    AI CHATBOT DEVELOPMENT    </h2>
    <p className="text-2xl font-semibold text-center mb-4">
    We specialize in creating AI-powered chatbots for businesses. Our chatbots are designed to enhance customer interactions and streamline customer support. We leverage cutting-edge AI technologies to provide intelligent and efficient solutions for your business needs.
    </p>
    <button className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
      Contact Us
    </button>
  </div>
  <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-blue-300 hover:text-gray-900  transition duration-600 transform hover:scale-90">
  <h2 className="text-4xl md:text-3xl lg:text-5xl  font-bold mb-4 text-blue-900  transition duration-600">
    PYTHON-BASED APPLICATION DEVELOPMENT
   </h2>
   <p className="text-2xl font-semibold text-center mb-4">
    Our Python-based application development team excels in building robust and scalable applications. With Python's versatility, we create web applications, data analysis tools, automation scripts, and more. Let us harness the power of Python for your project.
    </p>
    <button className="group cursor-pointer bg-blue-500 hover:bg-blue-800 text-black font-bold hover:text-gray-400 px-2 py-1 rounded-full text-sm hover:shadow-md transition duration-300">
      Contact Us
    </button>
  </div>
</div>
</section>

  );
};

export default ServicesPage;
