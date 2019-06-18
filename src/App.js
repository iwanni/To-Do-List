import React, { Component } from "react";
import Todos from "./components/todos";

class App extends Component {
  state = {
    todos: [{ id: 1, content: "Beli susu" }, { id: 2, content: "Tidur" }]
  };
  render() {
    return (
      <div>
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
