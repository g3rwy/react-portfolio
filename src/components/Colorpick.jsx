import { useState, useRef, useEffect } from 'react'
import './Colorpick.css'


function getElementBackground(element){
    let el = document.querySelector(element)
    let styles = window.getComputedStyle(el);
    
    let rgb = styles.getPropertyValue("background-color");

    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.substring(4).split(")")[0].split(sep);

    let r = (+rgb[0]).toString(16).padStart(2,"0"),
        g = (+rgb[1]).toString(16).padStart(2,"0"),
        b = (+rgb[2]).toString(16).padStart(2,"0");
    return "#" + r + g + b
} 

export default function Calculator(){
    const [, updateState] = useState();
    const [button_color, setButtonColor] = useState("#0172ad")
    const [background_color, setBackgroundColor] = useState("#13171f")
    const [font_color, setFontColor] = useState("#e0e3e7")
    const [gradient_color1, setGradient1] = useState("#47A417")
    const [gradient_color2, setGradient2] = useState("#E48500")

    function changeColor(e,element,property){
        (document.querySelectorAll(element)).forEach(element => {
            element.style[property] = e.target.value
        });
        switch(element){
            case "button":
                setButtonColor(e.target.value)
                break;
            case ":root":
                setBackgroundColor(e.target.value)
                break;
            case "*":
                if(property == "color")
                    setFontColor(e.target.value)
        }
    }

    function colorDefault(element,property,color){
        (document.querySelectorAll(element)).forEach(element => {
            element.style[property] = color
        });
        switch(element){
            case "button":
                setButtonColor(color)
                break;
            case ":root":
                setBackgroundColor(color)
                break;
            case "*":
                if(property == "color")
                    setFontColor(color)
        }
    }

    function changeGradient(e,side){
        let gradient = document.querySelector("#gradient_div")
        if(side == "left"){
            setGradient1(e.target.value)
            gradient.style.backgroundImage = `linear-gradient(to right,${e.target.value},${gradient_color2})`
        }
        else{
            setGradient2(e.target.value)
            gradient.style.backgroundImage = `linear-gradient(to right,${gradient_color1},${e.target.value})`
        }
    }
    
    function Reset() {
        setButtonColor("#0172ad");
        colorDefault("button","background-color","#0172ad")
        colorDefault(":root","background-color","#13171f")
        colorDefault("*","color","#e0e3e7")
        document.querySelector("#gradient_div").style.backgroundImage = "linear-gradient(to right,#47A417,#E48500)";
        setGradient1("#47A417")
        setGradient2("#E48500")
    }

    return (<>
            <button id="hidden-btn" hidden>Some button</button>
            <div id="colorpick">
                <h2>Change color of elements</h2>
                <div className='element_css'>
                    <span>Buttons:</span>
                    <input value={button_color} type="color" onChange={(e) => {changeColor(e,"button","background-color")}}></input>
                </div>
                <div className='element_css'>
                    <span>Background:</span>
                    <input value={background_color} type="color" onChange={(e) => {changeColor(e,":root","background-color")}}></input>
                </div>
                <div className='element_css'>
                    <span>Text:</span>
                    <input value={font_color} type="color" onChange={(e) => {changeColor(e,"*","color")}}></input>
                </div>
                <div className='element_css'>
                    <span>Gradient:</span>
                    <input value={gradient_color1} type="color" onChange={(e) => {changeGradient(e,"left")}}></input>
                    <input value={gradient_color2} type="color" onChange={(e) => {changeGradient(e,"right")}}></input>
                </div>
                <div id="gradient_div"></div>
                <button onClick={Reset}>RESET</button>
            </div>
            </>)
}