import React, { useState, useEffect } from "react";

import InputBox from "./InputBox";

import classes from "./App.module.css";

export default () => {
  return (
    <>
      <div className={classes.app}>
        <h1>React2Do</h1>
        <InputBox />
      </div>
    </>
  );
};
