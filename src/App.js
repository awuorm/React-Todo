import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import Uuid from "uuid";

class App extends React.Component {
  state = {
    initialToDo: [],
    formInput: "",
    completeInput: null,
  };

  addTodo = event => {
    event.preventDefault();
    this.todo = {
      task: this.state.formInput,
      id: Uuid(),
      completed: false,
    };
    this.setState({
      initialToDo: [...this.state.initialToDo, this.todo]
    });
  };

  onValueChange = event => {
    this.setState({
      formInput: event.target.value
    });
  };

  onCompletionChange = id => {
    // if (event.target.value === "on") event.target.value = true;
    // event.target.value = false;
this.displayComplete = this.state.initialToDo;

    this.displayComplete.map(todo => {
      if (todo.id === id) {
        
        // this.setState( {initialToDo: [todo.completed: true]})
        // event.preventDefault();
    this.todo = {
      task: this.state.formInput,
      id: Uuid(),
      completed: true,
    };
    this.setState({
      initialToDo: [...this.state.initialToDo, this.todo]
    });
        console.log("Complete input",this.todo);
        return "hello";
      } 
    });
  };

  onClear = event => {
    event.preventDefault();
    this.setState({
      initialToDo: this.state.initialToDo.filter(todo => !todo.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log("Updated To do", this.updatedTodo);
    console.log("Complete input", this.state.initialToDo);
    return (
      <div>
        <TodoList onClick={this.onCompletionChange} initialToDo={this.state.initialToDo} />
        <TodoForm
          onChange={this.onValueChange}
          onSubmit={this.addTodo}
          onClear={this.onClear}
          initialToDo={this.state.initialToDo}
          formInput={this.state.formInput}
        />
      </div>
    );
  }
}

export default App;
