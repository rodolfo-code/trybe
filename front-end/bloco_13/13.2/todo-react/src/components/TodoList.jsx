import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(props) {
  const { list, removeTodo } = props
  function renderList() {
    return list.map((element) => {
      return (
        <Todo 
          key={element.id}
          removeTodo={() => removeTodo(element.id)}
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
