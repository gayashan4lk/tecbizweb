import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuButton: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <a
      href="#"
      className="text-blue-200 hover:text-blue-900 transition duration-300"
      onClick={toggleMenu}
    >
      <FontAwesomeIcon
        icon={isMenuOpen ? faTimes : faBars}
        className="w-6 h-6 md:w-8 md:h-8"
      />
    </a>
  );
};

export default MenuButton;
