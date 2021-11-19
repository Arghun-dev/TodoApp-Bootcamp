import { useState } from "react";
import AddTodo from "../AddTodo";
import TodosList from "../TodosList";
import "./Content.css";

const Content = () => {
  const [todos, setTodos] = useState([]);

  const handleCompleted = (selectedTodo) => {
    const updatedTodos = todos.map((item) =>
      item.id === selectedTodo.id
        ? { ...selectedTodo, completed: !selectedTodo.completed }
        : item
    );

    setTodos(updatedTodos);
  };

  const handleEdit = (selectedTodo, inputValue) => {
    const updatedTodos = todos.map((item) =>
      item.id === selectedTodo.id ? { ...selectedTodo, text: inputValue } : item
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="content">
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodosList
        todos={todos}
        handleCompleted={handleCompleted}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Content;
