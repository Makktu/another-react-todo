import classes from "./DisplayToDos.module.css";

const DisplayToDos = (props) => {
  return (
    <>
      <div className={classes.todoDisplayBox}>
        {props.todoList.map((todo) => {
          <p key={todo.id}>{todo.todo}</p>;
        })}
      </div>
    </>
  );
};

export default DisplayToDos;
