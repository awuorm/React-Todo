import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  style = {
    textDecoration: this.props.todo.completed ?"line-through":"unset"
  };
  render() {
    console.log("props from todolist", this.props.todo.completed);
    return (
      <>
        <div
          style={this.style}
          onClick={() => this.props.onClick(this.props.todo.id)}
        >
          Task: {this.props.todo.task}
        </div>
      </>
    );
  }
}

export default Todo;
