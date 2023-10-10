import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl md:text-4xl font-semibold">TechBizSolution</h1> {/* Increased font size */}
        <nav className="hidden md:flex space-x-6">
          <a href="/Home" className="text-white hover:text-blue-500 transition duration-300 text-lg">Home</a> {/* Increased font size */}
          <div className="group relative">
            <span className="text-white hover:text-blue-500 transition duration-300 text-lg">Services</span> {/* Increased font size */}
            <ul className="absolute hidden text-white bg-gray-900 space-y-2 py-2 rounded-lg group-hover:block">
              <li>
                <a href="/services/A" className="hover:text-blue-500 text-lg">A</a> {/* Increased font size */}
              </li>
              <li>
                <a href="/services/B" className="hover:text-blue-500 text-lg">B</a> {/* Increased font size */}
              </li>
              <li>
                <a href="/services/C" className="hover:text-blue-500 text-lg">C</a> {/* Increased font size */}
              </li>
              {/* Add more */}
            </ul>
          </div>
          <div className="group relative">
            <span className="text-white hover:text-blue-500 transition duration-300 text-lg">Products</span> {/* Increased font size */}
            <ul className="absolute hidden text-white bg-gray-900 space-y-2 py-2 rounded-lg group-hover:block">
              <li>
                <a href="/products/A" className="hover:text-blue-500 text-lg">A</a> {/* Increased font size */}
              </li>
              <li>
                <a href="/products/B" className="hover:text-blue-500 text-lg">B</a> {/* Increased font size */}
              </li>
              <li>
                <a href="/products/C" className="hover:text-blue-500 text-lg">C</a> {/* Increased font size */}
              </li>
              {/* Add more products*/}
            </ul>
          </div>
          <a href="/About" className="text-white hover:text-blue-500 transition duration-300 text-lg">About</a> {/* Increased font size */}
          <a href="/Contact" className="text-white hover:text-blue-500 transition duration-300 text-lg">Contact</a> {/* Increased font size */}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} className="w-8 h-8" /> {/* Adjusted icon size */}
          </a>
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" /> {/* Adjusted icon size */}
          </a>
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" /> {/* Adjusted icon size */}
          </a>
          {/* Add Telegram icon */}
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faTelegram} className="w-8 h-8" /> {/* Adjusted icon size */}
          </a>
          {/* Add LinkedIn icon */}
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" /> {/* Adjusted icon size */}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;