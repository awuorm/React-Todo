import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: this.props.initialToDo,
        }
    }
    render() {
        console.log(this.state.todos)
        return(
            <div>
                <form>
                    <input></input>
                    <button>Add Todo</button>
                    <button>Clear Completed</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;