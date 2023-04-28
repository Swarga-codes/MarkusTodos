import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='Login'>
    <form action="">
    <h1>Login</h1>
    <div className="login_email">
    
    <input type="email" required placeholder='Enter your email'/>
    </div>
    <div className="login_password">
    <input type="password" required placeholder='Enter your password'/>
    </div>
  <button type='submit'>Login</button>
  <p className='no_account'>Don't have an account?<Link to='/signup'>Sign Up</Link></p>
  </form>  
  </div>
  )
}

export default Login