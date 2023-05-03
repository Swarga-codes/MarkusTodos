import React,{ useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList';
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigator=useNavigate();
const[todosList,setTodosList]=useState([]);
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");
const[search,setSearch]=useState("");
const[message,setMessage]=useState("")
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
      status:false,

    })
  })
  const data=await res.json();
  if(data.error){
    alert(data.error)
  }
  else{
    setMessage(data.message)
    setTimeout(()=>{
setMessage('')
    },5000)
  }
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
const logout=()=>{
  if(window.confirm('Do you really wish to logout?')){
    localStorage.clear();
    navigator('/login')
  }
}
useEffect(()=>{
getTodos();
},[todosList])
  return (
    <div className='Home'> 
    <div className="home_header">
    <div>
    <h1>Hello, {JSON.parse(localStorage.getItem("user"))?.userName}</h1>
    <p>{message}</p>
    </div>
    <div className="logout">
    <button onClick={()=>logout()}>Logout</button>
    </div>
    </div>
   
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
    }}>+ Add Todo</button>
    <br />
    <input className="search" type="text" placeholder='Search a todo' value={search} onChange={(e)=>setSearch(e.target.value)}/>
    </div>
      <div className="todo_lists">
 {todosList.filter((todo)=>todo.title.toLowerCase().includes(search)||todo.description.toLowerCase().includes(search)).map((todo,idx)=>
  (
 
  <TodoList todo={todo} key={idx} getTodos={getTodos}/>

  ))}
      </div>
    </div>
  )
}

export default Home