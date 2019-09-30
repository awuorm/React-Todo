// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           todos: this.props.initialToDo,

        }
    }
    render(
        ) {
            
        return(
            <div>
                {this.state.todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
            </div>
        )
    }
}

export default TodoList;

