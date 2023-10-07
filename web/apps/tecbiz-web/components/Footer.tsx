
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold">TechBizSolution</h3>
            <p className="text-gray-400">Your tech solution provider.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact Us</a>
          </div>
        </div>
        <p className="text-center mt-8 text-gray-400">&copy; 2023 TechBizSolution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
