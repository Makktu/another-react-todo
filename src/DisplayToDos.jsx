import classes from "./DisplayToDos.module.css";

const DisplayToDos = (props) => {
  return (
    <div className={classes.todoDisplayBox}>
      <ul>
        {props.todoList.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className={classes.listBtn}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayToDos;
