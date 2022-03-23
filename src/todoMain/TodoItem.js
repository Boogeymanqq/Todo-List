import { useContext } from "react";
import Context from "../Context";
import s from "../todoMain/todoMain.module.css";

export const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context);
  const classes = [];
  if (todo.completed) {
    classes.push("done");
  }
  return (
    <li className={s.item}>
      <span className={classes.join(" ")}>
        <input
          checked={todo.completed}
          type="checkbox"
          className={s.input}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>
      <button className="rm" onClick={() => removeTodo(todo.id)}>
        &times;
      </button>
    </li>
  );
};
