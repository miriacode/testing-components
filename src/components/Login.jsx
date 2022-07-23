import React from 'react'
import logo from './../logo.svg'

const Login = () => {
  return (
    <div>
        <input 
            type="text" 
            name="username" 
            id="username"
            // value={username} 
            // onChange={(e)=>setUsername(e.target.value)}
            data-testid="usernameInput"/>
        <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="password"
            // value={username} 
            // onChange={(e)=>setUsername(e.target.value)}
            />
        <button 
            disabled="disabled"
            >
            Login
        </button>
        <img aria-label="fancy-image" src={logo} alt="logo"/>
    </div>
  )
}

export default Login