import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Uuid from "uuid";


class App extends React.Component {
  state = {
    initialToDo: [],
    formInput: "",
  };

  addTodo = event => {
    event.preventDefault();
    this.todo = {
      task: this.state.formInput,
      id: Uuid(),
      completed: false,
    }
    this.setState({
      initialToDo:[
        ...this.state.initialToDo, this.todo]
    });

  };
  
  onValueChange = event => {
    this.setState({
      formInput: event.target.value,
    });
  };

  onClear = event => {
    event.preventDefault();
    this.setState ({
      initialToDo: this.state.initialToDo.filter((todo) => !todo.completed)
    })
   

    
  }
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    
    console.log("Updated To do",this.updatedTodo );
    console.log("Initial to do",this.state.initialToDo );
    return (
      <div>
        <TodoList initialToDo={this.state.initialToDo} />
        <TodoForm
          onChange={this.onValueChange}
          onSubmit={this.addTodo}
          onClear={this.onClear}
          initialToDo={this.state.initialToDo}
          formInput = {this.state.formInput}
        />
      </div>
    );
  }
}

export default App;
