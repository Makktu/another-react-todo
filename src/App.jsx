import React, { useState, useEffect } from "react";

import InputBox from "./InputBox";
import DisplayToDos from "./DisplayToDos";

import classes from "./App.module.css";

export default () => {
  const todoList = [
    { id: 0, todo: "Take out the trash", done: false },
    { id: 1, todo: "Watch that Chris Fox video", done: false },
    { id: 2, todo: "Rethink everything", done: false },
  ];
  return (
    <>
      <div className={classes.app}>
        <h1>React2Do</h1>
        <InputBox />
        <DisplayToDos todoList={todoList} />
      </div>
    </>
  );
};
