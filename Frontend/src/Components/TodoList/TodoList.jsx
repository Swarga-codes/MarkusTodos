import React, {useState, useEffect} from 'react'
import './TodoList.css'
import Checkbox from '@mui/material/Checkbox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modals from './Modals'
function TodoList({todo,getTodos}) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
   const deleteTodo=async(id)=>{
    const res=await fetch(`https://markus-todos-backend.vercel.app/deletetodos/${id}`,
    {
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
      }
    });
    const data=await res.json();
    console.log(data)
    toast.success(data.message,{theme:"colored"})
    
   }
   const updateStatus=async()=>{
    const res=await fetch('https://markus-todos-backend.vercel.app/updatestatus',{
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
    toast.success(data.message,{theme:"colored"})
   }
 useEffect(()=>{
getTodos();
 },[todo.status])
  return (
    <div className='todos'>
    <div className="todos_check">
    {!todo.status?
    <Checkbox {...label} value={todo.status || ''} onClick={()=>{
     updateStatus();
    }}/>
    :
    <Checkbox {...label} value={todo.status || ''} onClick={()=>{
      updateStatus();
     }} defaultChecked/>
    }
    </div>
    <div className="todos_details">
    <div style={{display:'inline-block',width:'fit-content'}}>
    <h2>{todo.title}</h2>
    </div>
    <p>{todo.description}</p>
    {!todo.status?
    <p className='pending'>Status: <b>Pending</b></p>
  :
<p className='complete'>Status: <b>Completed</b></p>
  }
  <button className='edit' onClick={()=>handleClickOpen()}>Edit</button>
    <button onClick={()=>deleteTodo(todo._id)} className='Delete'>Delete</button>
    </div>
    <Modals handleClose={handleClose} open={open} todo={todo}/>
    </div>
  )
}

export default TodoList