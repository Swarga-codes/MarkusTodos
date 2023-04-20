import React from 'react'

function TodoList({todo,deleteTodo,index}) {
   
  return (
    <div className='todos'>
    <h2>{todo.title}</h2>
    <p>{todo.desc}</p>
    <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default TodoList