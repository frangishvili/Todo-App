import React from "react";
import { GrClose } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";

const SingleTodo = ({ todos, todo, setTodos }) => {
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = () => {
    let updatedTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
      <div key={todo.id}>{todo.text}</div>
      <div className="icons">
        <GrCheckboxSelected
          className="complete-icon"
          onClick={() => completeTodo(todo.id)}
        />
        <GrClose onClick={() => removeTodo(todo.id)} className="delete-icon" />
      </div>
    </div>
  );
};

export default SingleTodo;
