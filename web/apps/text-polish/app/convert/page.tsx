"use client"
import React, { useEffect } from "react"; 
import './App.css';
import TPComponent from "./TPComponent";


export default function CanvasTextGenerator() {
 
  function getText() { 
  var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");
  const  textArea = document.getElementById("textArea") as HTMLTextAreaElement;

 
  
    if (ctx && textArea) {
    var text = textArea.value;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

 
      ctx.font = "10px Arial";
      ctx.fillStyle = "black";
      ctx.fillText(text, 10, 10);
    }
  }

return (
    <div>
      <TPComponent/>
        <div>
          <h1 className="text-center text-white text-5xl">TEXT GENERATOR</h1>
        </div>
      <div className="flex justify-center">
        <div className="left-side">
          <textarea id="textArea" className="textarea"></textarea>  
        </div>
        <div className="right-side">
          <canvas id="myCanvas" className="canvasS"></canvas> 
        </div>
      </div>
      <p className="text-center">
        <button className="text-center bg-blue-500 text-white text-lg px-6 py-3 rounded-3xl" onClick={getText}>Generate</button>
      </p>
    </div>
  );
}

