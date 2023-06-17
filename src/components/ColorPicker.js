import React from 'react';
import '../styles/ColorPicker.css';

function ColorPicker() {
  
    const arr = ["blue", "grey", "green", "red", "yellow", "skyblue"];
    function onclick(){
            document.getElementById("colorList").innerHTML = arr.map((color,index)=>{
                return `<button style='background-color:${color}; ' class='btn text-light'>${color}</button>`;
        })
    }

    function handleClick(){
        document.getElementById("colorPicker").className = "btn btn-primary";
        document.getElementById("colorPicker").className = "btn btn-light";
        document.getElementById("colorPicker").className = "btn btn-success";
        document.getElementById("colorPicker").className = "btn btn-danger";
        document.getElementById("colorPicker").className = "btn btn-warning";
        document.getElementById("colorPicker").className = "btn btn-primary";
        document.getElementById("colorList").innerHTML = "";
    }

    return (
    <div className='colorpicker'>
        <h2 className='my-20'>Color Picking Component</h2>
        <button className='btn btn-dark' onClick={onclick} id="colorPicker">Pick a Color</button>
        <div id='colorList' className='mx-auto mt-5' onClick={handleClick}></div>
    </div>
  )
}

export default ColorPicker