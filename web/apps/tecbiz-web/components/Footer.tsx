import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faTelegram,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-4 mb-4 ml-4 mr-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4"> {/* Use gap-4 for consistent gap */}
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold mt-4 ml-4">TecBizSolution</h4>
          <p className="text-gray-400 mt-4 ml-4"> {/* Add top and left margin */}
            "At Tec Biz Solutions, our mission is to establish a private limited company that excels in delivering IT solutions while actively participating as a registered Upwork agency. We are dedicated to leveraging our expertise to drive innovation and provide exceptional services, bridging the gap between AI and industries, and fostering growth opportunities for businesses and professionals alike."
          </p>
        </div>
        <div className="text-center md:text-left mt-4 md:mt-0 ml-4"> {/* Add left margin */}
          <h4 className="text-xl font-bold mt-4 ml-4">Address</h4>
          <p className="text-gray-400 mt-4 ml-4"> {/* Add top and left margin */}
            SRI LANKA<br />
            47/1, Jawatte Road,<br />
            Colombo 05,<br />
            Sri Lanka
          </p>
        </div>
        <div className="text-center md:text-left ml-4"> {/* Add left margin */}
          <h4 className="text-xl font-bold mt-4 ml-4" >Social Links</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 inline" /> Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 inline" /> Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 inline" /> LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTelegram} className="w-6 h-6 inline" /> Telegram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 inline" /> Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 inline" /> YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-bold mt-8 text-gray-200"> &copy; 2023 TechBizSolution. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
