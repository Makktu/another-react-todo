import React, { useState } from "react";

import classes from "./DisplayToDos.module.css";

const DisplayToDos = (props) => {
  const [doneTask, setDoneTask] = useState();

  const doneHandler = (buttonId) => {
    setDoneTask(buttonId);
  };

  return (
    <div className={classes.todoDisplayBox}>
      <ul>
        {props.todoList.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button
              className={classes.listBtn}
              id={todo.id}
              onClick={() => doneHandler(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayToDos;
