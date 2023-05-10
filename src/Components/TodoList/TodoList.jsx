import React, { useEffect} from 'react'
import './TodoList.css'
import Checkbox from '@mui/material/Checkbox';
function TodoList({todo,getTodos}) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
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
        status:!todo.status,
        idx:todo._id,
      })
    })
    const data=await res.json()
    console.log(data)
   }
 useEffect(()=>{
getTodos();
 },[todo.status])
  return (
    <div className='todos'>
    {!todo.status?
    <Checkbox {...label} value={todo.status || ''} onClick={()=>{
     updateStatus();
    }}/>
    :
    <Checkbox {...label} value={todo.status || ''} onClick={()=>{
      updateStatus();
     }} defaultChecked/>
    }
    <h2>{todo.title}</h2>
    <p>{todo.description}</p>
    {!todo.status?
    <p className='pending'>Status: <b>Pending</b></p>
  :
<p className='complete'>Status: <b>Completed</b></p>
  }
    <button onClick={()=>deleteTodo(todo._id)} className='Delete'>Delete</button>
    </div>
  )
}

export default TodoList