import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
    <div className='login'>
    <div className='loginform'>
      <h3><i class="fab fa-shopify"></i> Shopify</h3>
      <h4>Log in</h4>
      <p>Continue to shopify theme store</p>
      <label>Email</label><br/>
      <input type='text'/><br/>
      <button>Continue with Email</button>
      <p className='signin'>Signin with Passkey</p>
      <p className='center'>or</p>
      <div className='social-row'>
      <i class="fab fa-apple"></i>
      <i class="fab fa-facebook"></i>
      <i class="fab fa-google"></i>
      </div>
      <p className='marg'>New to Shopify <span>Get Started</span></p>
    </div>
    </div>
    </>
  )
}

export default Login