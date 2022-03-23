import { useState } from "react";

function useInputValue(defaultValue = "") {
  const [value, setValue] = useState(defaultValue);
  return {
    bind: {
      value,
      onChange: (event) => setValue(event.target.value),
    },
    clear: () => setValue(""),
    value: () => value,
  };
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue("");
  function submitHandler(event) {
    event.preventDefault();

    if (input.value().trim()) {
      onCreate(input.value());
      input.clear();
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <input {...input.bind} />
      <button type="submit">Add tudu</button>
    </form>
  );
};
export default AddTodo;
