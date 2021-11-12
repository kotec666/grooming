import React from 'react'
import s from './LoginPage.module.css'

const LoginPage = () => {
    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <input type="text" placeholder="Логин..."/>
                <input type="password" placeholder="Пароль..."/>
                <div className={s.btn__wrapper}>
                    <button>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage