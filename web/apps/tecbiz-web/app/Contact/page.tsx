import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactPage: React.FC = () => {
  return (
    <div className="p-4 bg-black text-white flex justify-end">
      <div className="w-1/2"> 
        <h1 className="text-3xl font-semibold mb-8 text-blue-900" style={{ letterSpacing: '10px' }}>GET IN UPDATE</h1>
        
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faPhone}     
    className="w-6 h-6 mr-2 text-blue-900 transform hover:scale-150 transition-transform"
/>
          <p>+9471-441-1600</p>
        </div>

        <div className="mb-4 flex items-center">
          <FontAwesomeIcon icon={faEnvelope} 
    className="w-6 h-6 mr-2 text-blue-900 transform hover:scale-150 transition-transform"/>

          <p>hello@tecbizsolutions.com</p>
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="name">
            Your Name
          </label>
          <input
            className="bg-black border border-gray-400 p-2 w-full rounded-lg"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
            Your Email
          </label>
          <input
            className="bg-black border border-gray-400 p-2 w-full rounded-lg"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="message">
            Your Message
          </label>
          <textarea
            className="bg-black border border-gray-400 p-2 w-full rounded-lg"
            id="message"
            name="message"
            rows={4}
            placeholder="Enter your message"
          ></textarea>
        </div>

        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700" type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
