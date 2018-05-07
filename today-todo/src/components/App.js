import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      todo: ""
    };
  }

  handleRemoveTodo = todoId => {
    const todoList = this.state.todoList;
    const list = todoList.map(todo => {
      if (todoId === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(list);
    this.setState({ todoList: list });
  };

  handleTodoChange = event => {
    this.setState({ todo: event.target.value });
  };

  handleAddTodo = () => {
    const todoList = this.state.todoList;

    const todo = {
      id: this.state.todoList.length + this.state.todo,
      title: this.state.todo,
      completed: false
    };

    todoList.push(todo);
    this.setState({ todoList, todo: "" });
  };
  
  render() {
    return (
      <div className="top-div">
        <h2 className="app-title">Today, a To-Do App for Kids</h2>
        <input
          type="text"
          value={this.state.todo}
          placeholder="What I want to do today"
          onChange={this.handleTodoChange}
        />
        <button onClick={this.handleAddTodo}>Let's Go!</button>
        <TodoList
          removeTodo={this.handleRemoveTodo}
          todoList={this.state.todoList}
        />
      </div>  
    );
  }
}

export default App;

{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p> */}