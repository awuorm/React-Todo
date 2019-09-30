import React from "react";

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.todo,
        }
    }
    render() {
        
        return(<>
            <div >{this.state.todo.task}</div>
        </>)
    }
}

export default Todo;