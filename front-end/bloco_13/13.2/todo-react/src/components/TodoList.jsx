import React from "react";
import Todo from "./Todo";
import "./TodoList.css";

function TodoList(props) {
  const {list, removeTodo} = props
  console.log(list)
  function renderList() {
    return list.map((element) => {
      return (
        // <li className="list" key={element.id}>
        //   <div>
        //     {element.input}
        //   </div>
        //   <div>
        //     <button 
        //       className="btn btn-warning"
        //     >
        //       <i className="fa fa-pencil"></i>
        //     </button>
        //     <button 
        //       className="btn btn-danger ml-2"
        //       onClick={() => removeTodo(element.id)}
        //     >
        //       <i className="fa fa-trash"></i>
        //     </button>
        //   </div>
        // </li>
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
