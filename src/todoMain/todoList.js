import PropTypes from "prop-types";
import { TodoItem } from "./TodoItem";
import s from "../todoMain/todoMain.module.css";

function TodoList({ todos, onToggle }) {
  return (
    <ul className={s.list}>
      {todos.map((todo, index) => (
        <TodoItem key={todo.id} todo={todo} index={index} onChange={onToggle} />
      ))}
    </ul>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;
