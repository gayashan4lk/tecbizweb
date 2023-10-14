import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const Team: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Dedicated Development Team</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-2">
              Thilan
            </h2>

            <p className="text-xl md:text-1xl mb-4">
               extensive knowledge of emerging technologies keeps us on the cutting edge. His ability to adapt to new tools and frameworks allows us to tackle diverse projects with confidence.
            </p>

            <div className="flex justify-center">
              <a href="https://www.facebook.com/thilan" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/thilan" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/thilan" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com/thilan" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-2">
              Narada
            </h2>

            <p className="text-xl md:text-1xl mb-4">
              Narada's dedication to efficient project management ensures that our initiatives are delivered on time and within budget.
            </p>

            <div className="flex justify-center">
              <a href="https://www.facebook.com/narada" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/narada" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/narada" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com/narada" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-2">
              Chathura
            </h2>

            <p className="text-xl md:text-1xl mb-4">
              Chathura's attention to detail and commitment to quality ensure that our solutions are not only functional but also user-friendly and reliable. He is dedicated to crafting seamless user experiences.
            </p>

            <div className="flex justify-center">
              <a href="https://www.facebook.com/chathura" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.linkedin.com/in/chathura" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://twitter.com/chathura" className="text-blue-500 hover:text-blue-700 mr-4">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://github.com/chathura" className="text-blue-500 hover:text-blue-700">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md text-center">
            <h2 className="text-3xl md:text-3xl font-bold mb-2">
              Mithuna
            </h2>

            <p className="text-xl md:text-1xl mb-4">
              Mithuna is a key member of our development team, with a passion for coding and a knack for solving complex technical challenges. Her expertise is an invaluable asset to our projects.
            </p>

            <div className="flex justify-center">
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

export default Team;
