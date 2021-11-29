import React, {useState} from 'react'
import s from './../LoginPage/LoginPage.module.css'
import {userAPI} from "../../servicesAPI/UserService"
import {ILoginUserReq, IRegistrationUserReq} from "../../models/IUser"
import {useHistory} from "react-router-dom"
import {TOYS_ROUTE} from "../../utils/consts"

const RegistrationPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [regError, setRegError] = useState('')

    const history = useHistory()
    const [registrationUser, {}] = userAPI.useRegistrationUserMutation()
    const [loginUser, {}] = userAPI.useLoginUserMutation()

    const handleRegistrationUser = async () => {
        try {
            setRegError('')
            const role = 'USER'
            await registrationUser({login, password, email, phone, role} as IRegistrationUserReq)
            await loginUser({login, password} as ILoginUserReq).unwrap()
            history.push(TOYS_ROUTE)
        } catch (e) {
            setRegError(e.data.message)
        }
    }

    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <span>{regError}</span>
                <input type="text" placeholder="Логин..." value={login} onChange={event => setLogin(event.target.value)}/>
                <input type="password" placeholder="Пароль..." value={password} onChange={event => setPassword(event.target.value)}/>
                <input type="email" placeholder="Email..." value={email} onChange={event => setEmail(event.target.value)}/>
                <input type="phone" placeholder="Номер телефона..." value={phone} onChange={event => setPhone(event.target.value)}/>
                <div className={s.btn__wrapper}>
                    <button onClick={handleRegistrationUser}>Регистрация</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage