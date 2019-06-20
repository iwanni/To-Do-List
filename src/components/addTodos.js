import React, { Component } from "react";

class addTodos extends Component {
  state = {
    content: ""
  };
  handleChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">Tambah todo:</label>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
          />
        </form>
      </div>
    );
  }
}

export default addTodos;
