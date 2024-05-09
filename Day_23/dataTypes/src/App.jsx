import { useState } from "react";
import "./App.css";

function App() {
  console.log("Page renderd", Math.random());
  const [value, setValue] = useState(1);
  const [secondValue, setSecondValue] = useState({
    value: 0,
  });

  const Premitive = () => {
    setValue(1);
  };
  const noNPremivtive = () => {
    setSecondValue({
      value: 0,
    });
  };

  return (
    <>
      <div>
        <button onClick={Premitive}>Premitive</button>
        <br></br>
        <h1>Value:{value}</h1>
        <button onClick={noNPremivtive}>Non Premitive</button>
        <h1>Value:{secondValue.value}</h1>
      </div>
    </>
  );
}

export default App;



