import React, { createContext} from 'react'
import { useRef } from 'react';
import './TodoList.css'
import { statusContext } from '../../context';
function TodoList({todo}) {
   const checkbox=useRef();
   const{setStatus}=createContext(statusContext)
  return (
    <div className='todos'>
    <input type="checkbox" ref={checkbox} onClick={()=>setStatus(checkbox.current.checked)}/>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    <button>Delete</button>
    </div>
  )
}

export default TodoList