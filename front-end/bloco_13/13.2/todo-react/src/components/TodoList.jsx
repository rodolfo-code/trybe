import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(props) {
  const { list, removeTodo } = props
  const [complete, setComplete] = useState(false)

  function isComplete() {
    setComplete(!complete)
  }
  
  function renderList() {
    return list.map((element) => {
      return (
        <Todo 
          key={element.id}
          removeTodo={() => removeTodo(element.id)}
          isComplete={isComplete}
        >
          {element.input}
        </Todo>
      );
    });
  }

  return (
    <ul className="ul-list">
      {renderList()}
    </ul>
  );
}

export default TodoList;
