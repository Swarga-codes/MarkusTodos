import React, { useState } from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
    const[message,setMessage]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const navigator=useNavigate();
    const fetchLogin=async(e)=>{
        e.preventDefault();
        const res=await fetch('http://localhost:8000/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data=await res.json()
        if(data.error){
            setMessage(data.error)
        }
        else{
            navigator('/');
            localStorage.setItem("jwt",data.token)
            localStorage.setItem("users",data.users)
        }
        
    }
  return (
    <div className='Login'>
    <form onSubmit={fetchLogin}>
    <h1>Login</h1>
    <p className='error_message'>{message}</p>
    <div className="login_email">
    
    <input type="email" required placeholder='Enter your email' value={email} onChange={e=>setEmail(e.target.value)}/>
    </div>
    <div className="login_password">
    <input type="password" required placeholder='Enter your password' value={password} onChange={e=>setPassword(e.target.value)}/>
    </div>
  <button type='submit'>Login</button>
  <p className='no_account'>Don't have an account?<Link to='/signup'>Sign Up</Link></p>
  </form>  
  </div>
  )
}

export default Login