import React from "react";

const Todos = ({ todos, onDelete, onMouseOver }) => {
  const mouseOut = event => {
    const el = event.target;
    el.style.textDecoration = "none";
  };
  const mouseOver = event => {
    const el = event.target;
    el.style.textDecoration = "line-through";
    console.log(el);
  };

  const toDoList = todos.length ? (
    todos.map(todo => {
      return (
        <div
          onClick={() => {
            onDelete(todo.id);
          }}
          onMouseOver={() => {
            onMouseOver(todo);
          }}
          className="collection-item"
          key={todo.id}
        >
          <span>{todo.content}</span>
        </div>
      );
    })
  ) : (
    <p className="center">Tidak ada todo list lagi</p>
  );

  return <div className="todos collection">{toDoList}</div>;
};

export default Todos;
