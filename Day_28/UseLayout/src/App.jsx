import { useState, useLayoutEffect } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) setValue(5 + Math.random() * 50);
  }, [value]);

  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(0)}>check</button>
    </>
  );
}

export default App;




