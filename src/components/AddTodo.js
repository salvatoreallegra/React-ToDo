import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddToDo extends Component {
  state = {
    title: ''
  }

  onChange = e => {
    this.setState({ title: e.target.value })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.title)
    this.setState({ title: '' })
  }
  render () {
    return (
      <form style={{ display: 'flex' }} onSubmit={this.onSubmit}>
        <input
          type='text'
          name='title'
          placeholder='Add to do....'
          style={{ flex: '10', padding: '5px' }}
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='submit'
          className='btn'
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

AddToDo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddToDo
