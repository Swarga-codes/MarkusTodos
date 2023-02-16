import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

function App() {
  const[todos,setTodos]=useState(['Play Call of Duty','Complete Assignments','Go to gym']);
  const[input,setInput]=useState('');
  const addTodos = (e)=>{
    setTodos([...todos,input]);
    setInput('');
  }
  return (
    <div className="App">
      <h1>Let's build Todos App!</h1>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
      <button onClick={addTodos}> Add Todos!</button>
      <div className="todo_lists">
      {todos.map((todo,idx)=>(
        
      <TodoList todo={todo} key={idx}/>
        
      ))
      }
      </div>
    </div>
  );
}

export default App;
