import React from 'react'
import Navbar from '../components/Navbar'

function Login() {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label for="username">Username: </label>
                    <input type="text" id="username" name="username" placeholder='username'/>
                </div>
                <br/>
                <div>
                    <label for="password">Password: </label>
                    <input type="password" id="password" name="password" placeholder='password'/>
                </div>
                <br/>
                <button type="submit">Login</button>
            </form>
        </main> 
    </div>
  )
}

export default Login
