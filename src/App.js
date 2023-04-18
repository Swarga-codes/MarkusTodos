import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

function App() {
const[todosList,setTodosList]=useState([]);
const[todos,setTodos]=useState({title:"",description:"",isDone:false});
  return (
    <div className="App">
    <h1>Let's build Todo app!</h1>
    <TodoInput/>
      <div className="todo_lists">
   
      </div>
    </div>
  );
}

export default App;
