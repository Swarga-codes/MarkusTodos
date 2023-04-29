import React, { createContext, useState } from 'react'
import { useRef } from 'react';
import './TodoList.css'
import { statusContext } from '../../context';
function TodoList({todo,deleteTodo,index}) {
   const checkbox=useRef();
   const{status,setStatus}=createContext(statusContext)
  return (
    <div className='todos'>
    <input type="checkbox" ref={checkbox} onClick={()=>setStatus(checkbox.current.checked)}/>
    <h2>{todo.title}</h2>
    <p>{todo.desc}</p>
    <button onClick={()=>deleteTodo(index)}>Delete</button>
    </div>
  )
}

export default TodoList