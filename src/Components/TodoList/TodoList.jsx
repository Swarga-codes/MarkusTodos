import React, { useState} from 'react'
import { useRef } from 'react';
import './TodoList.css'

function TodoList({todo}) {
   const checkbox=useRef();
   const[status,setStatus]=useState(false);
  
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
   const updateStatus=async()=>{
    const res=await fetch('http://localhost:8000/updatestatus',{
      method:'PUT',
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      },
      body:JSON.stringify({
        status,
        idx:todo._id,
      })
    })
    const data=await res.json()
    console.log(data)
   }
 
  return (
    <div className='todos'>
    <input type="checkbox" ref={checkbox} onClick={()=>{setStatus(checkbox.current.checked)
     updateStatus();
    }}/>
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    {!status?
    <p>Status: Pending</p>
  :
<p>Status: Completed</p>
  }
    <button onClick={()=>deleteTodo(todo._id)}>Delete</button>
    </div>
  )
}

export default TodoList