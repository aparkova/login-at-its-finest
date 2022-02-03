import React from 'react'
import styles from './LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <label className={styles.label} htmlFor="text">Name</label>
        <input className={styles.input} type="text" id="text"/>
        <label className={styles.label} htmlFor="password">Password</label>
        <input className={styles.input} type="password" id="password"/>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm