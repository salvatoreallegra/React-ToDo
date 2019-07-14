import React, { Component } from 'react'
import Todos from './Todos'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render () {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
