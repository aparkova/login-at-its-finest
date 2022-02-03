import React from 'react'
import styles from './LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <label className={styles.label} for="text">Name
            <input className={styles.input} type="text" name="text"/>     
        </label>
        <label className={styles.label} for="password">Password
            <input className={styles.input} type="password" name="password"/>
        </label>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm