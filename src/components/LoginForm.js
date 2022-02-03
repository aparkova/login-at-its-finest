import React from 'react'
import styles from './LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <input className={styles.input} type="text" name="text"/>
        <label className={styles.label} htmlFor="text">Name</label>
        <input className={styles.input} type="password" name="password"/>
        <label className={styles.label} htmlFor="password">Password</label>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm