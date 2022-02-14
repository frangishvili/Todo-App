import React, { useEffect, useRef } from "react";

function TodoForm({ input, setInput, addTodo, setStatus }) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const changehandler = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addTodo();
  };
  const changefilterHandler = (event) => {
    setStatus(event.target.value);
  };

  return (
    <form onSubmit={submitHandler} className="todo-form">
      <div className="container">
        <>
          <input
            placeholder="New todo"
            value={input}
            onChange={changehandler}
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={submitHandler} className="todo-button">
            Add todo
          </button>
          <div className="todo-filter">
            <label>Filter by Status</label>
            <select onChange={changefilterHandler} className="select">
              <option value="all todos">All Todos</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </>
        )
      </div>
    </form>
  );
}

export default TodoForm;
