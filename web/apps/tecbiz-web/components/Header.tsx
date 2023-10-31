"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo2mithuna.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  


  return (
<header className="bg-black ssfixed top-0 left-0 right-0 z-50 p-4 r">

      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
        <Link href="/">
  <div
    style={{ width: '80px', height: '80px' }}
    className="group hover:scale-110  transform transition-transform duration-700 cursor-pointer"
  >
    <Image src={logo} alt="Logo" width={80} height={80} />
  </div>
</Link>

            <a href="/" className="hover:text-blue-900 transition duration-700 cursor-pointer text-blue-200  hidden md:flex  text-3xl md-text-4xl lg-text-5xl font-semibold ml-2 mb-4 md-mb-0  ">
          Tecbiz Solutions
          </a>
        </div>
        
        <a href="/" className="hover:text-blue-900 transition duration-700 cursor-pointer text-blue-200 text-3xl sm:text-4xl md:hidden lg:hidden xl:hidden font-semibold ml-2 mb-4 md:mb-0">
  Tecbiz Solutions
</a>




        <nav className="space-x-6 text-blue-200 text-lg hidden md:flex">
          <Link href="/">
          <span onClick={toggleMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
          Home
            </span>
            </Link>
            <Link href="/Services">
            <span onClick={toggleMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/Products">
            <span onClick={toggleMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Products
            </span>
          </Link>
          <Link href="/About">
            <span onClick={toggleMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/Contact">
            <span onClick={toggleMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>
        <div className="flex mt-4 md:mt-0 space-x-4">
          <a href="https://twitter.com/tecbizSolutions" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61552408965303" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.instagram.com/tecbizsolutions/" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.linkedin.com/in/tecbiz-solutions-9901b5298" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.youtube.com/channel/UCH5lzLZnctq1D85zRmK2Rzw" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#2s" className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-200 hover:text-blue-900 transition duration-700"
          >
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 text-blue-200 text-lg mt-4 items-center">
            <Link href="/">
              <span className="w-full rounded-lg hover:bg-blue-600 hover:text-black transition duration-700 cursor-pointer">Home</span>
            </Link>
            <Link href="/Services">
              <span className="w-full rounded-lg hover:bg-blue-600 hover:text-black transition duration-700 cursor-pointer">Services</span>
            </Link>
            <Link href="/Products">
              <span className="w-full rounded-lg hover:bg-blue-600 hover:text-black transition duration-700 cursor-pointer">Products</span>
            </Link>
            <Link href="/About">
              <span className="w-full rounded-lg hover:bg-blue-600 hover:text-black transition duration-700 cursor-pointer">About</span>
            </Link>
            <Link href="/Contact">
              <span className="w-full rounded-lg hover:bg-blue-600 hover:placeholder:text-black transition duration-700 cursor-pointer">Contact</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
