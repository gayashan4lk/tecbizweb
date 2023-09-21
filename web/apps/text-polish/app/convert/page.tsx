import react from "react"
import './App.css';


export default function() {
    return (
        <div>
                <div class="container">
        <div class="left-side">
            <textarea id="textArea"></textarea>
        </div>
        <div class="right-side">
            <canvas id="myCanvas" class="canvasS"></canvas>
        </div>
    </div>
    <p class="buttonR"> <button class="button" onclick="getText()">Generate</button></p>
        </div>
    )
}