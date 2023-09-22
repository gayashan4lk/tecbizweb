import react from "react"
import './App.css';


export default function() {

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var textArea = document.getElementById("textArea");
    
    function getText() {
                var text = textArea.value;
    
                ctx.clearRect(0, 0, canvas.width, canvas.height);
    
                ctx.font = "10px Arial";
                ctx.fillStyle = "black";
                ctx.fillText(text, 10, 50);
    }

    return (
        <div>
                <div className="container">
        <div className="left-side">
            <textarea id="textArea"></textarea>
        </div>
        <div className="right-side">
            <canvas id="myCanvas" className="canvasS"></canvas>
        </div>
    </div>
    <p className="buttonR"> <button className="button" onclick="getText()">Generate</button></p>
        </div>
    )
} 