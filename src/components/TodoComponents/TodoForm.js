import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: {
        task: "",
        id: "",
        completed: ""
      }
    };
  }
  render() {
    console.log(" values from form", this.state.todo);
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <label>Task</label>
          <input
          type="text"
            name="task"
            // value={this.state.todo.task}
             onChange={this.props.onChange}
          ></input>
          <button disabled={!this.props.formInput} >Add Todo</button>
          <button onClick={this.props.onClear}>Clear Completed</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
