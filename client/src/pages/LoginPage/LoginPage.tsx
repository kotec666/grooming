import React, {useState} from 'react'
import s from './LoginPage.module.css'
import {userAPI} from "../../servicesAPI/UserService"
import {ILoginUserReq} from "../../models/IUser"
import { useHistory } from 'react-router-dom'
import {TOYS_ROUTE} from "../../utils/consts";


const LoginPage = () => {

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const history = useHistory()
    const [loginUser, {}] = userAPI.useLoginUserMutation()
   // const {token, user} = useAppSelector(state => state.userReducer)

    const signIn = async () => {
        try {
            setLoginError('')
            await loginUser({login, password} as ILoginUserReq).unwrap()
            history.push(TOYS_ROUTE)
        } catch (e) {
            setLoginError(e.data.message)
        }
    }


    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <span>{loginError}</span>
                <input type="text" placeholder="Логин..." value={login} onChange={(event => setLogin(event.target.value))}/>
                <input type="password" placeholder="Пароль..." value={password} onChange={(event => setPassword(event.target.value))}/>
                <div className={s.btn__wrapper}>
                    <button onClick={signIn}>Войти</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage