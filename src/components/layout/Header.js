import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>ToDoList</h1>
      <BrowserRouter basename='/React-ToDo' />
      <Link to='/'>Home</Link> |<Link to='/about'> About</Link>
    </header>
  )
}

const headerStyle = {
  background: 'darkgrey',
  padding: '10px',
  color: 'white',
  textAlign: 'center'
}

export default Header
