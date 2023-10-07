import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter, faFacebook, faInstagram, faTelegram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-semibold">TechBizSolution</h1>
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="text-white hover:text-blue-500 transition duration-300">Home</a>
          <div className="group relative">
            <span className="text-white hover:text-blue-500 transition duration-300">Services</span>

            <ul className="absolute hidden text-white bg-gray-900 space-y-2 py-2 rounded-lg group-hover:block">
              <li>
                <a href="/services/A" className="hover:text-blue-500">A</a>
              </li>
              <li>
                <a href="/services/B" className="hover:text-blue-500">B</a>
              </li>
              <li>
                <a href="/services/C" className="hover:text-blue-500">C</a>
              </li>
              {/* Add more */}
            </ul>
          </div>     <div className="group relative">
            <span className="text-white hover:text-blue-500 transition duration-300">Products</span>

            <ul className="absolute hidden text-white bg-gray-900 space-y-2 py-2 rounded-lg group-hover:block">
              <li>
                <a href="/products/A" className="hover:text-blue-500">A</a>
              </li>
              <li>
                <a href="/products/B" className="hover:text-blue-500">B</a>
              </li>
              <li>
                <a href="/products/C" className="hover:text-blue-500">C</a>
              </li>
              {/* Add more products*/}
            </ul>
          </div>
          <a href="/about" className="text-white hover:text-blue-500 transition duration-300">About</a>
          <a href="/contact" className="text-white hover:text-blue-500 transition duration-300">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          {/* Add Telegram icon */}
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          {/* Add LinkedIn icon */}
          <a href="#" className="text-white hover:text-blue-500 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
