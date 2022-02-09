import React from 'react'
import styles from './LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <label className={styles.label} for="text">Name</label>
        <input className={styles.input} type="text" name="text"/>
        <label className={styles.label} for="password">Password</label>
        <input className={styles.input} type="password" name="password"/>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm