import React from 'react'
import { Link } from 'react-router-dom'
import "../Signup/Signup.css"


function Signup() {
  return (
    <div>
      <div className="auth-main">
        <div className="auth-container">
      <form className="auth-form">
        <h2 className='auth-title'>Signup</h2>
        <hr />
        <div className="auth-group">
          <label htmlFor="user-email" className='auth-label'>Email</label>
          <input type="email" id="user-email" placeholder="Enter your email" className='auth-input' required />
        </div>
        <div className="auth-group">
          <label htmlFor="user-email" className='auth-label'>Email</label>
          <input type="email" id="user-email" placeholder="Enter your email" className='auth-input' required />
        </div>
        <div className="auth-group">
          <label htmlFor="user-password" className='auth-label'>Password</label>
          <input type="password" id="user-password" placeholder="Enter your password" className='auth-input' required />
        </div>
        <button type="submit" className="auth-button">Sign up</button>
        <p className="auth-link">
          Already have an account ? <Link to={'/login'}>Login</Link>
        </p>
      </form>
    </div>
        </div>
    </div>
  )
}

export default Signup
