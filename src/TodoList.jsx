import React from 'react'

function TodoList({todo}) {
  return (
    <div className='todos'>
    <h2>{todo}</h2>
    </div>
  )
}

export default TodoList