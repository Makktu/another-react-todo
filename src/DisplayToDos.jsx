import classes from "./DisplayToDos.module.css";

export default (props) => {
  return (
    <>
      <div className={classes.todoDisplayBox}>{props.todos}</div>
    </>
  );
};
