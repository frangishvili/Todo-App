import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import SingleTodo from "./SingleTodo";

function TodoList() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    fillterHandler();
  }, [todos, status]);

  const fillterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const addTodo = () => {
    if (input !== "") {
      setTodos([
        {
          text: input,
          completed: false,
          id: Math.trunc(Math.random() * 20000),
        },
        ...todos,
      ]);
      setInput("");
    }
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm
        addTodo={addTodo}
        todos={todos}
        input={input}
        setInput={setInput}
        setTodos={setTodos}
        setStatus={setStatus}
      />
      {filteredTodos.map((todo) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
}

export default TodoList;
