import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';


const Founders: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">TecBIZ FOUNDERS</h2>
           

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
              <u className="font-bold">Chandima Ranaweera</u>
            </h2>

            <h1 className="text-xl md:text-1xl font-semibold text-center mb-8">
              As The Visionary Leader At The Helm Of TecBiz Solutions, Chandima Rings A Wealth Of Experience And An Unparalleled Ability To Identify Opportunities. His Leadership Has Been The Driving Force Behind Our Company, Guiding Us Towards Our Goals And Inspiring Our Team To Reach New Heights.
            </h1>
            <div className="flex justify-center mt-8">
              <a href="https://www.facebook.com/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com/mithuna" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-3xl md:text-3xl font-semibold text-center mb-8">
              <u className="font-bold">Nadeera Kodithuwakku</u>
            </h2>

            <h1 className="text-xl md:text-1xl font-semibold text-center mb-8">
              Nadeera's Innovative Mindset And Dedication To Staying Ahead Of Industry Trends Have Been Pivotal In Shaping TecBiz Solutions Into A Forward-Thinking And Agile IT Company. Her Commitment To Continuous Improvement Keeps Us At The Forefront Of Technological Advancements.
            </h1>
            <div className="flex justify-center mt-8">
              <a href="https://www.facebook.com/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/mithuna" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com/mithuna" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
