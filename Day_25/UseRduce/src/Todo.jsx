import React from "react";
import { Actions } from "./App";

function Todo({ todo, dispatch }) {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>
        {todo.name}
      </span>

      <button
        onClick={() =>
          dispatch({ type: Actions.TOGGLE_TODO, payload: { id: todo.id } })
        }
      >
        Toggle
      </button>

      <button
        onClick={() =>
          dispatch({ type: Actions.DELETE_TODO, payload: { id: todo.id } })
        }
      >
        Delete
      </button>
    </div>
  );
}

export default Todo;
r