import { useState } from "react";
import "./App.css";
import { useTransition } from "react";

function App() {
  const [isPending, startTransistion] = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const listSize = 20000;

  function handleChange(e) {
    setInput(e.target.value);
    startTransistion(() => {
      const l = [];
      for (let index = 0; index < listSize; index++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  }
  return (
    <>
      <input type="text" value={input} onChange={handleChange}></input>
      {isPending
        ? "loading"
        : list.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
    </>
  );
}

export default App;


