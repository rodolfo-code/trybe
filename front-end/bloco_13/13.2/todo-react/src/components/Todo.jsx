import React from "react";
import "./Todo.css";

function Todo(props) {
  const { removeTodo } = props;
  return (
    <li className="list">
      <div>{props.children}</div>
      <div>
        <button className="btn btn-success ml-5">
          <i className="fa fa-check"></i>
        </button>
        <button className="btn btn-warning ml-2">
          <i className="fa fa-pencil"></i>
        </button>
        <button className="btn btn-danger ml-2" onClick={removeTodo}>
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;
