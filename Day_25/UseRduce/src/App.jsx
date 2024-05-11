import { useReducer, useState } from "react";
import Todo from "./Todo";
import "./App.css";

export const Actions = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
};
function reducer(todos, action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case Actions.TOGGLE_TODO:
      return todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
    case Actions.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}
function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}
function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: Actions.ADD_TODO, payload: { name: name } });
    setName("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </>
  );
}
export default App;
