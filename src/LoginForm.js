import React from 'react'
import styles from './components/LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <div>
        <label className={styles.label} htmlFor='name'>Name</label>
        <input className={styles.input} type="text" id="name"></input>
        </div>
        <div>
        <label className={styles.label} htmlFor=''>Password</label>
        <input className={styles.input} type="password" id="password" ></input>
        </div>
        <button className={styles.submit} type="submit">Submit</button>
    </form>
    )
}

export default LoginForm