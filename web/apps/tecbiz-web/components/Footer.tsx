import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faTelegram,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-blue-100 py-8 text-md top-0 left-0 right-0 z-50 p-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center ">
          <h4 className="text-xl font-bold mt-4">TecBiz Solutions</h4>
          <p className="text-gray-400 mt-4">
            At Tec Biz Solutions, our mission is to establish a private limited company that excels in delivering IT solutions while actively participating as a registered Upwork agency. We are dedicated to leveraging our expertise to drive innovation and provide exceptional services, bridging the gap between AI and industries, and fostering growth opportunities for businesses and professionals alike.
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-bold mt-4">Address</h4>
          <p className="text-gray-400 mt-4">
          SRI LANKA <br/> TecBizSolutions <br/>No.22,<br /> Beliatta (82400),<br /> Sri Lanka
            
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-bold mt-4">Our Social Links</h4>
          <ul className="space-y-2 mt-4">
            <li>
              <a href="" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faFacebook} className="w-6 h-6 inline" /> Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/tecbizSolutions" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6 inline" /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/tecbiz-solutions-9901b5298" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 inline" /> LinkedIn
              </a>
            </li>
            
            <li>
              <a href="https://www.instagram.com/tecbizsolutions/" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 inline" /> Instagram
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCH5lzLZnctq1D85zRmK2Rzw" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 inline" /> YouTube
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-700">
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 inline" /> WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center font-bold text-gray-200 mt-8">
        &copy; 2023 TechBizSolution. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
