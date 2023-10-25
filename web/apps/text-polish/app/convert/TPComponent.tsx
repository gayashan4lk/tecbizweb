import React from "react";
import './App.css';

function TPComponent() {
  return (
    <nav>
    <ul className="flex bg-gray-800 justify-evenly items-center p-0 px-5 h-16 border-2 border-gray-600">
      <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl"><a className="no-underline text-white" href="/upload">Upload</a></li>
      <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl"><a className="no-underline text-white" href="/convert">Generator</a></li>
      <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl"><a className="no-underline text-white" href="/download">Download</a></li>
    </ul>
  </nav>
  );
}

export default TPComponent;
