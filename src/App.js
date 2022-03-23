import React, { useState, useEffect } from "react";
import TodoList from "./todoMain/todoList";
import Context from "./Context";
import { Modal } from "./Modal/Modal";
// import { AddTodo } from "./AddTodo";

const AddTodo = React.lazy(() => import("./todoMain/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const url = "https://jsonplaceholder.typicode.com/todos/?_limit=5";
      const response = await fetch(url);
      const dataTodos = await response.json();
      setTodos(dataTodos);
    }
    getTodos();
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1>Todo list</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading...</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>
        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : (
          <p>No todos!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
