import React, { createContext} from 'react'
import { useRef } from 'react';
import './TodoList.css'
import { statusContext } from '../../context';
function TodoList({todo}) {
   const checkbox=useRef();
   const{setStatus}=createContext(statusContext)
   const deleteTodo=async(id)=>{
    const res=await fetch(`http://localhost:8000/deletetodos/${id}`,
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    });
    const data=await res.json();
    console.log(data)
    
   }
  return (
    <div className='todos'>
    <input type="checkbox" ref={checkbox} onClick={()=>setStatus(checkbox.current.checked)}/>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
    </div>
  )
}

export default TodoList