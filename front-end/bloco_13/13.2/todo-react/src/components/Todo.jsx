import React from "react";


function Todo(props) {
  const { removeTodo } = props
  console.log(props)
  return (
    <li className="list">
      <div>{props.children}</div>
      <div>
        <button className="btn btn-warning">
          <i className="fa fa-pencil"></i>
        </button>
        <button
          className="btn btn-danger ml-2"
          onClick={removeTodo}
        >
          <i className="fa fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;
