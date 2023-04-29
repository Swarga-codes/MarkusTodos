import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Signup'
import { useContext } from 'react';
import { statusContext } from './context';
function App() {
const[status,setStatus]=useState(false);
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
