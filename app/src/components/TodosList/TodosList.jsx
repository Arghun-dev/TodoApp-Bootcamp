import Todo from "../Todo";
import "./TodosList.css";

const TodosList = ({ todos, handleCompleted, handleEdit }) => {
  if (!todos.length) return <div style={{ marginTop: 50 }}>List is Empty!</div>;

  return (
    <div className="todosListRoot">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleCompleted={handleCompleted}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodosList;
