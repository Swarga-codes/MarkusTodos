import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/Signup'
function App() {

  return (
  
 
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup' element={<SignUp/>}/>
    </Routes>
    </div>

  
  );
}

export default App;
