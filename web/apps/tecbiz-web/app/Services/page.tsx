"use client"
import React from 'react';
import Welcome from './Service.json';
import Lottie from 'lottie-react';

const ServicesPage = () => {
  return (
 <section className="bg-black  min-h-screen items-center justify-center text-center text-white relative p-8">
    <div className="w-full h-screen top-10 left-0 z-0 flex items-center justify-center">
     <Lottie
       animationData={Welcome}
       loop={true}
       autoplay={true}
       style={{ maxWidth: '100%', height: '75%' }}
     />
   </div>
    
   <div className="h-full justify-center text-center">
  <div className="text-blue-300 hover:text-blue-100 transition duration-600 transform hover:scale-105 mb-8"> {/* Add mb-8 for bottom margin */}
    <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold mb-4 text-blue-800 hover-text-blue-200 transition duration-700">
      BESPOKE WEB 2.0 DEVELOPMENT
    </h2>
    <p className="text-xl md-text-xl font-semibold text-center mb-8">
      Our team of developers creates Web 2.0 products designed to meet specific business requirements. Leveraging our hands-on experience in the latest technologies like PostgreSQL, MongoDB, Angular, Node.js, React, React Native, and Python, we simplify complex business workflows with adaptive web and mobile apps.
    </p>
    <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover-bg-blue-600 transition duration-200">
      Contact Us
    </a>
  </div>
  <div className="text-blue-300 hover:text-blue-100 transition duration-600 transform hover:scale-105 mb-8"> {/* Add mb-8 for bottom margin */}
    <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold mb-4 text-blue-800 hover-text-blue-200 transition duration-700">
    AI CHATBOT DEVELOPMENT    </h2>
    <p className="text-xl md-text-xl font-semibold text-center mb-8">
    We specialize in creating AI-powered chatbots for businesses. Our chatbots are designed to enhance customer interactions and streamline customer support. We leverage cutting-edge AI technologies to provide intelligent and efficient solutions for your business needs.
    </p>
    <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover-bg-blue-600 transition duration-200">
      Contact Us
    </a>
  </div>
  <div className="text-blue-300 hover:text-blue-100 transition duration-600 transform hover:scale-105 mb-8"> {/* Add mb-8 for bottom margin */}
    <h2 className="text-3xl md:text-3xl lg:text-5xl font-semibold mb-4 text-blue-800 hover-text-blue-200 transition duration-700">
    PYTHON-BASED APPLICATION DEVELOPMENT
   </h2>
    <p className="text-xl md-text-xl font-semibold text-center mb-8">
    Our Python-based application development team excels in building robust and scalable applications. With Python's versatility, we create web applications, data analysis tools, automation scripts, and more. Let us harness the power of Python for your project.
    </p>
    <a href="#" className="bg-blue-200 text-black font-bold py-2 px-4 rounded hover-bg-blue-600 transition duration-200">
      Contact Us
    </a>
  </div>
</div>
</section>

  );
};

export default ServicesPage;
