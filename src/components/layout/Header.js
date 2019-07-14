import React from 'react'

function Header () {
  return (
    <header style={headerStyle}>
      <h1>ToDoList</h1>
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
