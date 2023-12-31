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

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
<header className="bg-black  py-0.5 fixed top-0 left-0 right-0 z-10 p-2 ">
  

      <div className="container mx-auto flex  justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div
              style={{ width: '80px', height: '80px' }}
              className="group hover:scale-110  transform transition-transform duration-600 cursor-pointer"
              >
              <Image src={logo} alt="Logo" width={80} height={80} />
            </div>
          </Link>

          <a
  href="/"
  className="hover:text-blue-900 transition duration-600 cursor-pointer text-blue-200 text-center md:flex text-3xl md-text-4xl lg-text-5xl font-semibold ml-2 mb-4 md-mb-0"
>
  Tecbiz Solutions
</a>
        </div>

       
        

<div className="block md:hidden">
  <button
    onClick={toggleMenu}
    className="text-blue-300 bg-transparent hover:bg-blue-200 hover:text-blue-900  transition duration-600 rounded-full p-2 focus:outline-none"
  >
    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6 md:w-8 md:h-8" />
  </button>
</div>



<nav className="space-x-4 text-blue-200 text-lg hidden md:flex">
          <Link href="/">
          <span onClick={toggleMenu} className="hover:text-blue-800 transition duration-600 cursor-pointer">
          Home
            </span>
            </Link>
            <Link href="/Services">
            <span onClick={toggleMenu} className="hover:text-blue-800 transition duration-600 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/Products">
            <span onClick={toggleMenu} className="hover:text-blue-800 transition duration-600 cursor-pointer">
              Products
            </span>
          </Link>
          <Link href="/About">
            <span onClick={toggleMenu} className="hover:text-blue-800 transition duration-600 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/Contact">
            <span onClick={toggleMenu} className="hover:text-blue-800 transition duration-600 cursor-pointer">
              Contact
            </span>
          </Link>
          
        </nav>
      
        <div className="hidden mt-2 md:mt-0 space-x-4 md:flex">
          <a href="https://twitter.com/tecbizSolutions" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61552408965303" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.instagram.com/tecbizsolutions/" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.linkedin.com/in/tecbiz-solutions-9901b5298" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.youtube.com/channel/UCH5lzLZnctq1D85zRmK2Rzw" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#2s" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        
        
        
      </div>
      {menuOpen && (
  <div className="md:hidden  items-center">
    <nav className={`flex flex-col  items-center space-y-2 text-blue-200 text-lg mt-0 ${menuOpen ? 'md:ml-8 transition-all duration-300 ease-in-out transform translate-x-0' : 'hidden -translate-x-full'} md:flex`}>
            <Link href="/" passHref>
              <span onClick={closeMenu} className="w-full rounded-lg hover:bg-blue-200 hover:text-blue-900 transition duration-600 cursor-pointer">Home</span>
            </Link>
            <Link href="/Services" passHref>
              <span  onClick={closeMenu} className="w-full rounded-lg hover:bg-blue-200 hover:text-blue-900 transition duration-600 cursor-pointer">Services</span>
            </Link>
            <Link href="/Products" passHref>
              <span  onClick={closeMenu} className="w-full rounded-lg hover:bg-blue-200 hover:text-blue-900 transition duration-600 cursor-pointer">Products</span>
            </Link>
            <Link href="/About" passHref>
              <span  onClick={closeMenu}className="w-full rounded-lg hover:bg-blue-200 hover:text-blue-900 transition duration-600 cursor-pointer">About</span>
            </Link>
            <Link href="/Contact" passHref>
              <span  onClick={closeMenu} className="w-full rounded-lg hover:bg-blue-200 hover:text-blue-900 transition duration-600 cursor-pointer">Contact</span>
            </Link>
            <div className="flex mt-4 md:mt-0 space-x-4">
          <a href="https://twitter.com/tecbizSolutions" onClick={closeMenu} className="text-blue-200  hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://web.facebook.com/profile.php?id=61552408965303" onClick={closeMenu} className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.instagram.com/tecbizsolutions/"  onClick={closeMenu}className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.linkedin.com/in/tecbiz-solutions-9901b5298"   onClick={closeMenu}className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="https://www.youtube.com/channel/UCH5lzLZnctq1D85zRmK2Rzw" onClick={closeMenu}  className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a href="#2s" className="text-blue-200 hover:text-blue-900 transition duration-600">
            <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
