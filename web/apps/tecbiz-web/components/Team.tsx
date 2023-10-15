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

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-black">
s      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl text-blue-200 font-bold text-center mb-8">Dedicated Development Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
        <div className="flex justify-center mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>


        <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
              <u className="font-bold text-blue-300">Thilan</u>
            </h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
               Thilan extensive knowledge of emerging technologies keeps us on the cutting edge. His ability to adapt to new tools and frameworks allows us to tackle diverse projects with confidence.
            </p>
            <div className="flex justify-center">

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

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
          <div className="flex justify-center mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>
              <u className="font-bold text-blue-300">Narada</u>
            </h2>

            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Narada's dedication to efficient project management ensures that our initiatives are delivered on time and within budget. Her expertise is an invaluable asset to our projects.
            </p>

            <div className="flex justify-center">
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

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
          <div className="flex justify-center mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>
              <u className="font-bold text-blue-300">Chathura</u>
            </h2>
            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Chathura's attention to detail and commitment to quality ensure that our solutions are not only functional but also user-friendly and reliable. He is dedicated to crafting 
            </p>

            <div className="flex justify-center">
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

          <div className="p-6 bg-black rounded-lg shadow-md text-blue-100 hover:bg-gray-400 hover:text-white transition duration-700 transform hover:scale-90">
          <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
          <div className="flex justify-center mb-4">
                <Image src={placeholderImage} alt="Dummy Person" className="w-32 h-32 rounded-full object-cover" />
              </div>
              <u className="font-bold text-blue-300">Mithuna</u>
            </h2>

            <p className="text-xl md:text-1xl font-semibold text-center mb-8">
              Mithuna is a key member of our development team, with a passion for coding and a knack for solving complex technical challenges. Her expertise is an invaluable asset to our projects.
            </p>

            <div className="flex justify-center">
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
    </section>
  );
};

export default Team;
