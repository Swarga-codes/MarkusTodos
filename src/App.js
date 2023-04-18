import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';


function App() {

const[todosList,setTodosList]=useState([]);
const[title,setTitle]=useState("");
const[desc,setDesc]=useState("");
const addTodo=(t,d)=>{

  setTodosList([...todosList,{title:t,desc:d}])

}
  return (
    <div className="App">
    <h1>Let's build Todo app!</h1>
    <div className='todos_input'>
    <div className='Title'>
    <p>Title</p>
    <input type="text" name='title' value={title} onChange={(e)=>{setTitle(e.target.value)}
  }/>
    </div>
    <div className='Description'>
    <p>Description</p>
    <input type="text" name='description' value={desc} onChange={(e)=>{setDesc(e.target.value);
  }}/>
    </div>
    <button onClick={()=>addTodo(title,desc)}>Add Todo</button>
    </div>
      <div className="todo_lists">
 {todosList.map(todo=>
  (
  <TodoList todo={todo}/>
  ))}
      </div>
    </div>
  );
}

export default App;
