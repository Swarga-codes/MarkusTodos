import React from 'react'

function TodoList({todo}) {
   
  return (
    <div className='todos'>
    <h1>{todo.title}</h1>
    <p>{todo.desc}</p>
    </div>
  )
}

export default TodoList