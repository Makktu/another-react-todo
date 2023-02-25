import classes from "./DisplayToDos.module.css";

export default ({ todoList }) => {
  console.log(todoList[0].todo);

  return (
    <>
      <div className={classes.todoDisplayBox}>
        <ul>
          {" "}
          {todoList.map((todo) => {
            <li key={todo.id}>{todo.todo}</li>;
          })}{" "}
        </ul>
      </div>
    </>
  );
};
