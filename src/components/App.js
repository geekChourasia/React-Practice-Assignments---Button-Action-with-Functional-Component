import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
    const[isClicked,setToClicked]=useState('false');

    const paraRender= ()=>{
      setToClicked(true);
    }
  return (
    <div id="main">
      <button id="click" onClick={paraRender}>Click Me</button>,
      {isClicked ? <p id = 'para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>:null},
    </div>
  );
}


export default App;
