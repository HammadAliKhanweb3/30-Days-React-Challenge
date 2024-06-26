import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  const addValue = () => {
    if (count < 20) {
      count = count + 1;
      setCount(count);
    }
  };
  const removeValue = () => {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    }
  };

  return (
    <>
      <div id="container">
        <h1>Counter</h1>
        <h3>Counter value:{count}</h3>
        <button type="submit" onClick={addValue}>
          addValue
        </button>
        <br></br>
        <br></br>
        <button type="submit" onClick={removeValue}>
          removevalue
        </button>
      </div>
    </>
  );
}

export default App;
