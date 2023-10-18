import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


import placeholderImage from '../images/A.png';

const Founders: React.FC = () => {
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">TecBIZ FOUNDERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>

              <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
                <u className="font-bold text-blue-300">Nadeera Kodithuwakku</u>
              </h2>

              <h1 className="text-xl md:text-1xl font-semibold text-center mb-8">
                Nadeera Innovative Mindset And Dedication To Staying Ahead Of Industry Trends Have Been Pivotal In Shaping TecBiz Solutions Into A Forward-Thinking And Agile IT Company. Her Commitment To Continuous Improvement Keeps Us At The Forefront Of Technological Advancements.
              </h1>
              <div className="flex justify-center mt-8">
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://www.facebook.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://www.linkedin.com/in/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://twitter.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full">
                <a href="https://github.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              
              </div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>

              <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
                <u className="font-bold text-blue-300">Chandima Ranaweera</u>
              </h2>

              <h1 className="text-xl md:text-1xl font-semibold text-center mb-8">
                As The Visionary Leader At The Helm Of TecBiz Solutions, Chandima Rings A Wealth Of Experience And An Unparalleled Ability To Identify Opportunities. His Leadership Has Been The Driving Force Behind Our Company, Guiding Us Towards Our Goals And Inspiring Our Team To Reach New Heights.
              </h1>
              <div className="flex justify-center mt-8">
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://www.facebook.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://www.linkedin.com/in/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full mr-4">
                <a href="https://twitter.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
              </div>
              <div className="bg-black p-2 rounded-full">
                <a href="https://github.com/thilan" className="text-blue-300 hover:text-blue-900">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
