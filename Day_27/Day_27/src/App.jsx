import { useState } from "react";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [isAli, setIsAli] = useState(true);

  return (
    <>
      <div>
        {isAli ? (
          <Counter name="Ali" key="Ali" />
        ) : (
          <Counter name="Ahmed" key="Ahmed" />
        )}
        <br></br>
        <button onClick={() => setIsAli((A) => !A)}>Swap</button>
      </div>
    </>
  );
}

export default App;

