import React from 'react'
import s from './../LoginPage/LoginPage.module.css'

const RegistrationPage = () => {
    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <input type="text" placeholder="Логин..."/>
                <input type="password" placeholder="Пароль..."/>
                <input type="email" placeholder="Email..."/>
                <input type="phone" placeholder="Номер телефона..."/>
                <div className={s.btn__wrapper}>
                    <button>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage