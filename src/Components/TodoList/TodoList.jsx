import React, { useState } from 'react'
import { useRef } from 'react';
import './TodoList.css'
function TodoList({todo,deleteTodo,index}) {
   const checkbox=useRef();
   const[isCompleted,setIsCompleted]=useState(false)
  return (
    <div className='todos'>
    <input type="checkbox" ref={checkbox} onClick={()=>setIsCompleted(checkbox.current.checked)}/>
    <h2>{todo.title}</h2>
    <p>{todo.desc}</p>
    <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default TodoList