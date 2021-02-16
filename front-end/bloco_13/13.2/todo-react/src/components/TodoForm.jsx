import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";
import "./TodoForm.css";

function TodoForm() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  // console.log(list)

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  // ===================== adiciona novo Todo a lista ===================== //

  function handleClick() {
    const obj = {
      input,
      id: Math.floor(Math.random() * 1000),
    };
    const newTodos = [...list, obj];
    setList(newTodos);
    setInput("");
  }

  // ===================== remove tarefa ===================== //

  function removeTodo(id) {
    const removeItem = [...list].filter((todo) => todo.id !== id);
    setList(removeItem);
  }

  return (
    <div className="todo-div">
      <h1>Quais os planos para hoje?</h1>
      <span className='input-button'>
        <input
          type="text"
          value={input}
          placeholder="New Task..."
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
        <button
          className="todo-button"
          onClick={handleClick}
          disabled={!input && true}
        >
          <i className="fa fa-list"></i>
        </button>
      </span>
      <div className="todo-list">
        <TodoList list={list} removeTodo={removeTodo} />
      </div>
    </div>
  );
}

export default TodoForm;
