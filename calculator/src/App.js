import React, { useState, useRef, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
  
  useEffect(() => {
    inputRef.current.focus()
  })

  function clickHandler(e){
    setResult(result + e.target.name)
  }

  function clear(){
    setResult("")
  }

  function backspace(){
    setResult(result.slice(0, -1))
  }

  function displayResult(){
    try{
      setResult(eval(result) + " "); //eval can return null, so adding it to a str
    }
    catch(error){
      setResult("Error");
    }
  }
  return (
    <div className="App">
      <input type ="text" value={result} ref={inputRef}></input>
    
      <div className="keypad">
        <button id="clear" onClick = {clear}>AC</button>
        <button id="backspace" onClick = {backspace}>C</button>
        <button name="+" onClick ={clickHandler}>+</button>
        <button name="7" onClick ={clickHandler}>7</button>
        <button name="8" onClick ={clickHandler}>8</button>
        <button name="9" onClick ={clickHandler}>9</button>
        <button name="-" onClick ={clickHandler}>-</button>
        <button name="4" onClick ={clickHandler}>4</button>
        <button name="5" onClick ={clickHandler}>5</button>
        <button name="6" onClick ={clickHandler}>6</button>
        <button name="*" onClick ={clickHandler}>*</button>
        <button name="1" onClick ={clickHandler}>1</button>
        <button name="2" onClick ={clickHandler}>2</button>
        <button name="3" onClick ={clickHandler}>3</button>
        <button name="/" onClick ={clickHandler}>/</button>
        <button name="0" onClick ={clickHandler}>0</button>
        <button name="." onClick ={clickHandler}>.</button>
        <button id="result" onClick ={displayResult}>=</button>
      </div>
    </div>
  );
}

export default App;
