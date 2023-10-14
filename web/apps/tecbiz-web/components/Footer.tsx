import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faTelegram, // Add Telegram icon
  faInstagram, // Add Instagram icon
  faYoutube, // Add YouTube icon
} from '@fortawesome/free-brands-svg-icons';
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="lg:text-left">
            <h4 className="text-xl font-semibold">TecBizSolution</h4>
            <p className="text-gray-400">
              "At Tec Biz Solutions, our mission is to establish a private limited company that excels in delivering IT solutions while actively participating as a registered Upwork agency. We are dedicated to leveraging our expertise to drive innovation and provide exceptional services, bridging the gap between AI and industries, and fostering growth opportunities for businesses and professionals alike."
            </p>
           
          </div>
            {/* Column 3 */}
            <div className="lg:text-left">
            <h4 className="text-xl font-semibold mt-4">Address</h4>
            <p className="text-gray-400">
              SRI LANKA<br />
              47/1, Jawatte Road,<br />
              Colombo 05,<br />
              Sri Lanka
            </p>
          </div>

          {/* Column 2 */}
          <div className="lg:text-left">
            <h4 className="text-xl font-semibold">Social Links</h4>
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
                <a href="#" className="text-gray-400 hover-text-white transition duration-300">
                  <FontAwesomeIcon icon={faTelegram} className="w-6 h-6 inline" /> Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover-text-white transition duration-300">
                  <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 inline" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover-text-white transition duration-300">
                  <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 inline" /> YouTube
                </a>
              </li>
            </ul>
          </div>

        
        </div>
        <p className="text-center mt-8 text-gray-400">&copy; 2023 TechBizSolution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
