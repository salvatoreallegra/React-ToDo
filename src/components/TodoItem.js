import React, { Component } from 'react'
import Todos from './Todos'

class TodoItem extends Component {
  render () {
    return (
      <div>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}

export default TodoItem
