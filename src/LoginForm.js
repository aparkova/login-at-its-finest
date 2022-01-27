import './components/LoginForm.css'
import React from 'react'

function LoginForm(){
    return(
    <form className="form">
            <label className="label" htmlFor="name">Name
              <input className="input" type="text" name="name"></input>
            </label>
            <div></div>
            <label htmlFor="password">Password
              <input type="password" name="password" ></input>
            </label>
            <div></div>
            <button className="submit" type="submit">Submit</button>
          </form>
    )
}

export default LoginForm