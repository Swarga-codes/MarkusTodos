import React from 'react'

function TodoList({todo}) {
   
  return (
    <div className='todos'>
    <h2>{todo.title}</h2>
    <p>{todo.desc}</p>
  
    </div>
  )
}

export default TodoList