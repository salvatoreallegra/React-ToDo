import React, { Component } from 'react'
import './App.css'
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      { id: 1, title: 'Take out the trash', completed: false },
      { id: 2, title: 'Lift Weights', completed: false },
      { id: 3, title: 'Call DMV', completed: false }
    ]
  }

  // Mark or unmark a todo complete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }

  // Delete a todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  render () {
    console.log(this.state.todos)
    return (
      <div>
        <Todos
          todos={this.state.todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    )
  }
}

export default App
