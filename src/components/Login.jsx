import React from 'react'
import { useState } from 'react'
import logo from './../logo.svg'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [isButtonAble, setIsButtonAble] = useState(false)

  return (
    <div>
        <input 
            type="text" 
            name="username" 
            id="username"
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            placeholder="username"
            data-testid="usernameInput"/>
        <input 
            type="password" 
            name="password" 
            id="password"
            placeholder="password"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
            />
        <button 
            disabled={!username || !password}
            >
            Login
        </button>
        <img aria-label="fancy-image" src={logo} alt="logo"/>
    </div>
  )
}

export default Login