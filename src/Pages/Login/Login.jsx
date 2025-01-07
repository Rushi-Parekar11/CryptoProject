import React from 'react'
import "../Login/Login.css"
import Signup from '../Signup/Signup'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <>
        <div className="loginmain">
        <div className="login-container">
      <form className="login-form">
        <h2 className='loginH2'>Login</h2>
        <hr />
        <div className="form-group">
          <label htmlFor="email" className='loginlabel'>Email</label>
          <input type="email" id="email" placeholder="Enter your email" className='logininput' required />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='loginlabel' >Password</label>
          <input type="password" id="password" placeholder="Enter your password" className='logininput' required />
        </div>
        <button type="submit" className="login-button">Login</button>
        <p className="signup-link">
          Don't have an account? <Link to={'/signup'}>Sign up</Link> 
        </p>
      </form>
    </div>
        </div>
    </>
  )
}

export default Login
