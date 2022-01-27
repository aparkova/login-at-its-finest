import React from 'react'
import styles from './components/LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <div>
            <label className={styles.label} htmlFor="name">Name</label>
            <input className={styles.input} type="text" id="name"/>
        </div>
        <div>
            <label className={styles.label} htmlFor="password">Password</label>
            <input className={styles.input} type="password" id="password"/>
        </div>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm