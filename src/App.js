import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './Components/Login/Login';

function App() {

  return (
  
 
    <div className="App">
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    </Routes>
    </div>

  
  );
}

export default App;
