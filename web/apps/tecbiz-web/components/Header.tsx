import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faTelegram,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-black py-4 md:py-6 lg:py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-blue-200 text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-0">
          Tecbiz Solutions
        </h1>
        <nav className="md:flex space-x-6 text-blue-200 text-lg">
          <Link href="/">
            <span className="hover:text-blue-900 transition duration-300 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/Services">
            <span className="hover:text-blue-900 transition duration-300 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/Products">
            <span className="hover:text-blue-900 transition duration-300 cursor-pointer">
              Products
            </span>
          </Link>
          
          
          <Link href="/About">
            <span className="hover:text-blue-900 transition duration-300 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/Contact">
            <span className="hover:text-blue-900 transition duration-300 cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>

        <div className="flex mt-4 md:mt-0 space-x-4">
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faTelegram} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#" className="text-blue-200 hover:text-blue-900 transition duration-300">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
