import React,{useContext, useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList';
import './Home.css'
import { statusContext } from '../../context';
function Home() {
    const{status}=useContext(statusContext)
const[todosList,setTodosList]=useState([]);
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");

const deleteTodo=(idx)=>{
  todosList.splice(idx,1);
  setTodosList([...todosList])
}
const AddTodo=async()=>{
  const res=await fetch('http://localhost:8000/createTodo',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
    body:JSON.stringify({
      title,
      description:desc,
      status,

    })
  })
  const data=await res.json();
}
const getTodos=async()=>{
  const res=await fetch('http://localhost:8000/mytodos',{
    headers:{
      "Content-Type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
    }
  });
  const data=await res.json();
  setTodosList(data);
}
useEffect(()=>{
getTodos();
},[todosList])
  return (
    <div className='Home'>  
    <h1>Hello, {JSON.parse(localStorage.getItem("user")).userName}</h1>

    <div className='todos_input'>
    <div className='Title'>
    <p>Title</p>
    <input type="text" name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}
  } placeholder='Enter the title...'/>
    </div>
    <div className='Description'>
    <p>Description</p>
    <input type="text" name='description' value={desc} onChange={(e)=>{setDesc(e.target.value);
  }} placeholder='Enter the description...'/>
    </div>
    <button onClick={()=>{
  AddTodo();
  setTitle('');
  setDesc('');
    }}>Add Todo</button>
    </div>
      <div className="todo_lists">
 {todosList.map((todo,idx)=>
  (
 
  <TodoList todo={todo} key={idx}/>

  ))}
      </div>
    </div>
  )
}

export default Home