import React, { Component } from 'react'
import Todos from './Todos'
import PropTypes from 'prop-types'

class AddToDo extends Component {
  render () {
    return (
      <form style={{ display: 'flex' }}>
        <input
          type='text'
          name='title'
          placeholder='Add to do....'
          style={{ flex: '10', padding: '5px' }}
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

export default AddToDo
