
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
    <header className="bg-black py-0.5 fixed top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div
              style={{ width: '80px', height: '80px' }}
              className="group hover:scale-110 transform transition-transform duration-700 cursor-pointer"
            >
              <Image src={logo} alt="Logo" width={80} height={80} />
            </div>
          </Link>

          <a
            href="/"
            className="hover:text-blue-900 transition duration-700 cursor-pointer text-blue-200 hidden md:flex text-3xl md-text-4xl lg-text-5xl font-semibold ml-2 mb-4 md-mb-0"
          >
            Tecbiz Solutions
          </a>
        </div>

        <a
          href="/"
          className="hover:text-blue-900 transition duration-700 cursor-pointer text-blue-200 text-3xl sm-text-4xl md:hidden lg:hidden xl:hidden font-semibold ml-2 mb-4 md-mb-0"
        >
          Tecbiz Solutions
        </a>

        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-blue-200 hover:text-blue-900 transition duration-700">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </div>

        <nav className={`space-x-6 text-blue-200 text-lg  md:flex ${menuOpen ? 'block' : 'hidden'}`}>
          <Link href="/" passHref>
            <span onClick={closeMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/Services" passHref>
            <span onClick={closeMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Services
            </span>
          </Link>
          <Link href="/Products" passHref>
            <span onClick={closeMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Products
            </span>
          </Link>
          <Link href="/About" passHref>
            <span onClick={closeMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              About
            </span>
          </Link>
          <Link href="/Contact" passHref>
            <span onClick={closeMenu} className="hover:text-blue-900 transition duration-700 cursor-pointer">
              Contact
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
