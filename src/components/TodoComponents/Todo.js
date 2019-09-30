import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
        }
    }
    render() {
        console.log(this.state.todo)
        return(<>
            <div >{this.state.todo.task}</div>
        </>)
    }
}

export default Todo;