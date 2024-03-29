import React, { useEffect, useState } from "react";
import TodoList from "../TodoList/TodoList";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Home() {
  const navigator = useNavigate();
  const [todosList, setTodosList] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const textFieldStyle = { width: "100%", marginTop: "0.8rem" };
  
  const AddTodo = async () => {
    const res = await fetch("/createTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        title,
        description: desc,
        status: false,
      }),
    });
    const data = await res.json();
    if (data.error) {
      toast.error(data.error,{theme:"colored"});
    } else {
      toast.success(data.message,{theme:"colored"}); 
    }
  };
  const getTodos = async () => {
    const res = await fetch("/mytodos", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    });
    const data = await res.json();
    setTodosList(data);
  };
  const logout = () => {
    if (window.confirm("Do you really wish to logout?")) {
      localStorage.clear();
      navigator("/login");
    }
  };
  const searchData = (item)=>{
    let data=item.filter(
      (todo) =>
        todo.title.toLowerCase().includes(search) ||
        todo.description.toLowerCase().includes(search)
    );
    if(!data){
    return <h1>Hello</h1>
    }
    return data;
  }
  useEffect(() => {
    getTodos();
  }, [todosList]);
  return (
    <div className="Home">
      <div className="home_header">
        <div>
          <h1>Hello, {JSON.parse(localStorage.getItem("user"))?.userName}</h1>
          <p>{message}</p>
        </div>
        <div className="logout">
          <button onClick={() => logout()}>Logout</button>
        </div>
      </div>

      <div className="todos_input">
        <div className="Title">
          <p>Title</p>
          <TextField
            id="outlined-basic"
            size="small"
            label="Title"
            variant="outlined"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Enter the title..."
            sx={textFieldStyle}
          />
        </div>
        <div className="Description">
          <p>Description</p>
          <TextField
            id="outlined-basic"
            size="small"
            label="Description"
            variant="outlined"
            type="text"
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            placeholder="Enter the description..."
            sx={textFieldStyle}
          />
        </div>
        <button
          onClick={() => {
            AddTodo();
            setTitle("");
            setDesc("");
          }}
        >
          + Add Todo
        </button>
        
        <br />
        <TextField
          id="outlined-basic"
          label="Search"
          size="small"
          variant="outlined"
          className="search"
          type="text"
          placeholder="Search a todo"
          sx={textFieldStyle}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
     
      <div className="todo_lists">
    
        {todosList.length > 0 ? (
          searchData(todosList)
            ?.map((todo, idx) => (
              <TodoList todo={todo} key={idx} getTodos={getTodos} />
            ))
        ) : (
          
        <p className="no_todos">No Todos Found!</p>
    
        )}
      </div>
        
      <ToastContainer />
    </div>
  );
}

export default Home;
