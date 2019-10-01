// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render(
        ) {
            console.log("props from app",this.props)
        return(
            <div>
                {this.props.initialToDo.map((todo) => <Todo onClick={this.props.onClick} key={todo.id} todo={todo}/>)}
            </div>
        )
    }
}

export default TodoList;

