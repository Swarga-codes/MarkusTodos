import React,{useEffect, useState} from 'react'
import TodoList from '../TodoList/TodoList';
import './Home.css'
function Home() {
    
const[todosList,setTodosList]=useState([]);
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");
const addTodo=(t,d)=>{
if(!t || !d){
  return alert('title or description cannot be empty');
}
  setTodosList([...todosList,{title:t,desc:d}]);
  setTitle('');
  setDesc('');
}
const deleteTodo=(idx)=>{
  todosList.splice(idx,1);
  setTodosList([...todosList])
}

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
    <button onClick={()=>addTodo(title,desc)}>Add Todo</button>
    </div>
      <div className="todo_lists">
 {todosList.map((todo,idx)=>
  (
 
  <TodoList todo={todo} key={idx} deleteTodo={deleteTodo} index={idx}/>

  ))}
      </div>
    </div>
  )
}

export default Home