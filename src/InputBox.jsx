import DisplayToDos from "./DisplayToDos";

import classes from "./InputBox.module.css";

export default () => {
  return (
    <>
      <form>
        <input placeholder="> Enter To-Do" />
      </form>
      <DisplayToDos />
    </>
  );
};
