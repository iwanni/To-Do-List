import React, { Component } from "react";
import Todos from "./components/todos";
import AddTodos from "./components/addTodos";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Beli susu", hover: false },
      { id: 2, content: "Tidur", hover: false }
    ]
  };
  handleDelete = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos });
  };
  handleAdd = todo => {
    todo.id = this.state.todos.length + 1;
    let todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  handleMouseOver = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index].hover = true;

    this.setState({ todos });
    console.log(this.state.todos);
  };
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <Todos
          todos={this.state.todos}
          onDelete={this.handleDelete}
          onMouseOver={this.handleMouseOver}
        />
        <AddTodos onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
