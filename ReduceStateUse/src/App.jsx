import { useState } from "react";
import "./App.css";
import React from "react";

function App() {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(0); unncessary use of useState

  let multipliedValue = value * 5;

  const multiplybyFive = () => {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiplybyFive}>Multiply by 5</button>
      <h1>Multiplied Value : {multipliedValue}</h1>
    </>
  );
}

export default App;

