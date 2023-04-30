import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Signup'
import { useContext } from 'react';
import { statusContext } from './context';
function App() {
const[status,setStatus]=useState(false);
const navigator=useNavigate()
const[token,setToken]=useState('');
useEffect(()=>{
  const tokenVal=localStorage.getItem("jwt")
  if(!tokenVal){
    navigator('/login')
  }
  else{
    setToken(tokenVal)
  }

},[token])
  return (
 <statusContext.Provider value={{status,setStatus}}>
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </div>
    </statusContext.Provider>
  
  );
}

export default App;
