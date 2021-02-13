import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

function TodoForm() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  // console.log(list)

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
  })

  // ===================== adiciona novo Todo a lista ===================== //

  function handleClick() {
    const obj = {
      input,
      id: Math.floor(Math.random() * 1000),
    }
    const newTodos = [...list, obj];
    setList(newTodos);
    setInput('');
  }

  // ===================== remove tarefa ===================== //

  function removeTodo(id) {
    const removeItem = [...list].filter(todo => todo.id !== id);
    setList(removeItem);
  }
  
  return (
    <div className='todo-div'>
      <input 
        type="text" 
        value={input}
        placeholder='New Task...'
        className='todo-input'
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button 
        onClick={handleClick}
        disabled={!input && true}
      >
        Add Task
      </button>
      <div className="todo-list">
        <TodoList 
          list={list}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default TodoForm;
