import React from "react";
import './App.css';

function TPComponent() {
  return (
    <nav>
<ul className="flex bg-black justify-start items-center p-0 px-5 h-16">
  <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl mr-4">
    <a className="no-underline text-white text-lg" href="/upload">Upload</a>
  </li>
  <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl mr-4">
    <a className="no-underline text-white text-lg" href="/convert">Generator</a>
  </li>
  <li className="transform scale-100 hover:scale-105 cursor-pointer transition duration-300 ease-in-out text-center text-2xl">
    <a className="no-underline text-white text-lg" href="/download">Download</a>
  </li>
</ul>
  </nav>
  );
}

export default TPComponent;
