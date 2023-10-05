"use client"
import React, { useEffect } from "react"; //new line for line 1
import './App.css';
import TPComponent from "./TPComponent";


export default function CanvasTextGenerator() {
  //useEffect(() => {  //new line
  function getText() { //new line 2nd round
  var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  const ctx = canvas?.getContext("2d");
  const  textArea = document.getElementById("textArea") as HTMLTextAreaElement;

 
  //function getText() {
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
          <h1 className="txtgen">TEXT GENERATOR</h1>
        </div>
      <div className="container">
        <div className="left-side">
          <textarea id="textArea" className="textarea"></textarea>  
        </div>
        <div className="right-side">
          <canvas id="myCanvas" className="canvasS"></canvas> 
        </div>
      </div>
      <p className="buttonR">
        <button className="button" onClick={getText}>Generate</button>
      </p>
    </div>
  );
}

