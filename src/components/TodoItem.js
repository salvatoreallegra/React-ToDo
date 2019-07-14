import React, { Component } from 'react'
import Todos from './Todos'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: 'lightgray',
      padding: '10px',
      borderBottom: '1px red dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render () {
    const { id, title } = this.props.todo
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type='checkbox'
            onChange={this.props.markComplete.bind(this, id)}
          />{' '}
          {title}
        </p>
      </div>
    )
  }
}
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
