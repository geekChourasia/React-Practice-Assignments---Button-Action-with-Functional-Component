import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
    const[isClicked,setClicked]=useState('false');

    function paraRender(){
      setClicked(true);
    }
  return (
    <div id="main">
      <button id="click" onClick={paraRender}>Click Me</button>
      <p id="para">{isClicked ?"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy":''}</p>
      // Do not alter the main div
    </div>
  );
}


export default App;
