import { useState } from 'react'
import './App.css'
import oges from './assets/oges.jpeg';
function App() {
  const [username, setuser] = useState("")
  const [password, setpass] = useState("")
  const [msg, setMsg] = useState("")

  const statusClass = msg.includes('Successful')
    ? 'success'
    : msg.includes('enter') || msg.includes('failed')
      ? 'error'
      : ''

  function valid(e) {
    e.preventDefault()
    if (username === "") {
      setMsg("Please enter your username")
    } else if (password === "") {
      setMsg("Please enter your password")
    } else if (username === "Avis" && password === "1234") {
      setMsg("Login Successful")
    } else {
      setMsg("Login failed")
    }
  }

  return (
    <div className="page">
      <div className="login-card">
        <div className="brand-panel">
          <div className="brand-icon"><img src={oges} style={{width:"50px"}}></img></div>
          <h1>Welcome Back</h1>
          <p>Sign in to continue to your account.</p>
        </div>

        <form className="login-form" onSubmit={valid}>
          <h2>User Authentication</h2>
          <p className={`status-message ${statusClass}`}>
            {msg || 'Enter your credentials to proceed.'}
          </p>

          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setuser(e.target.value)}
          />

          <label >Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setpass(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default App
