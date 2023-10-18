import React from "react";
import './App.css';

function TPComponent() {
  return (
    <nav>
    <ul className="navbar">
      <li className="upload"><a href="/upload">Upload</a></li>
      <li className="generate"><a href="/convert">Generator</a></li>
      <li className="download"><a href="/download">Download</a></li>
    </ul>
  </nav>
  );
}

export default TPComponent;
