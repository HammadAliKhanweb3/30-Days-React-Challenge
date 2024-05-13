import React, { useCallback, useState } from "react";

function Counter({ name }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{name}</div>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      {count}
      <button onClick={() => setCount((c) => c + 1)}>+</button>
    </div>
  );
}

export default Counter;


