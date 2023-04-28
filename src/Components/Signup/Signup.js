import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <div className='Signup'>
    <form action="">
    <h1>Sign Up</h1>
    <div className="signup_email">
    <input type="email" required placeholder='Enter your email'/>
    </div>
    <div className="signup_username">
    <input type="username" required placeholder='Enter your username'/>
    </div>
    <div className="signup_password">
    <input type="password" required placeholder='Enter your password'/>
    </div>
  <button type='submit'>Sign Up</button>
  <p className='existing_account'>Already have an account?<Link to='/login'>Login</Link></p>
  </form>  
  </div>
  )
}

export default Login