import React from 'react'
import styles from './components/LoginForm.module.css'

function LoginForm(){
    return(
    <form className={styles.form}>
        <label className={styles.label}>Name
            <input className={styles.input} type="text"/>     
        </label>
        <label className={styles.label}>Password
            <input className={styles.input} type="password"/>
        </label>
        <input className={styles.submit} type="submit" value="Submit"/>
    </form>
    )
}

export default LoginForm