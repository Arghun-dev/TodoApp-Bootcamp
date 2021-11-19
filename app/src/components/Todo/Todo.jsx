import { useState } from "react";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import "./Todo.css";

const Todo = ({ todo, handleCompleted, handleEdit }) => {
  const [selectedTodoToEdit, setSelectedTodoToEdit] = useState(null);
  const [inputValue, setInputValue] = useState(todo.text);

  const renderDeleteAndEditIcons = () => {
    if (selectedTodoToEdit === todo.id) return null;

    return (
      <>
        <EditOutlined
          style={{
            marginRight: 8,
            fontSize: 20,
            color: "blue",
            cursor: "pointer",
          }}
          onClick={() => setSelectedTodoToEdit(todo.id)}
        />
        {!todo.completed ? (
          <DeleteOutlined
            style={{
              color: "red",
              fontSize: 20,
              cursor: "pointer",
            }}
            onClick={() => handleCompleted(todo)}
          />
        ) : (
          <PlusCircleOutlined
            style={{ color: "green", fontSize: 20, cursor: "pointer" }}
            onClick={() => handleCompleted(todo)}
          />
        )}
      </>
    );
  };

  return (
    <div className="todoRoot">
      <span
        className="text"
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {selectedTodoToEdit === todo.id ? (
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        ) : (
          todo.text
        )}
      </span>
      <span>
        {selectedTodoToEdit === todo.id ? (
          <Button
            type="primary"
            style={{ borderRadius: 4, marginRight: 8 }}
            onClick={() => {
              handleEdit(todo, inputValue);
              setSelectedTodoToEdit(null);
            }}
          >
            Save
          </Button>
        ) : null}
        {renderDeleteAndEditIcons()}
      </span>
    </div>
  );
};

export default Todo;
