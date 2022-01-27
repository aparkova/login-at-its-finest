import React from 'react'
import styles from './components/LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
            <label className={styles.label}>Name
              <input className={styles.input} type="text" name="name"></input>
            </label>
            <div></div>
            <label className={styles.label}>Password
              <input className={styles.input} type="password" name="password" ></input>
            </label>
            <div></div>
            <button className={styles.submit} type="submit">Submit</button>
          </form>
    )
}

export default LoginForm