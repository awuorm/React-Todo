import React from "react";


class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
        }
    }

    style = {
        textDecoration: this.props.todo.completed ?"line-through" : "unset",
        color: "red",
      };
    render() {
        console.log("props from todolist",this.props.todo.completed)
        return(<>
            <div style={this.style} onClick={() => this.props.onClick(this.state.todo.id)} >Task: {this.state.todo.task}
            </div>
            
            
        </>)
    }
}

export default Todo;