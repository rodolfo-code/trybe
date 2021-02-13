import React from "react";
import "./TodoList.css";

function TodoList(props) {
  const {list, removeTodo} = props

  function renderList() {
    return list.map((element) => {
      return (
        <li className="list" key={element.id}>
          <div>
            {element.input}
          </div>
          <div>
            <button 
              className="btn btn-warning"
            >
              <i className="fa fa-pencil"></i>
            </button>
            <button 
              className="btn btn-danger ml-2"
              onClick={() => removeTodo(element.id)}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </li>
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
