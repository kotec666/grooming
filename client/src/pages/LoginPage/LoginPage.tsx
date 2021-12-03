import React, {useState} from 'react'
import s from './LoginPage.module.css'
import {userAPI} from "../../servicesAPI/UserService"
import {ILoginUserReq} from "../../models/IUser"
import { useHistory } from 'react-router-dom'
import {TOYS_ROUTE} from "../../utils/consts"
import {useForm} from "react-hook-form"


const LoginPage = () => {

    const [loginError, setLoginError] = useState('')

    const history = useHistory()
    const [loginUser, {}] = userAPI.useLoginUserMutation()

    const {register: registerLogin, formState: { errors: errorsLogin }, handleSubmit: handleSubmitLogin} = useForm<ILoginUserReq>()

    const signIn = handleSubmitLogin( async ({login, password}) => {
        try {
            setLoginError('')
            await loginUser({login, password} as ILoginUserReq).unwrap()
            history.push(TOYS_ROUTE)
        } catch (e) {
            setLoginError(e.data.message)
        }
    })


    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <form onSubmit={signIn}>
                    <span>{loginError}</span>
                    <input
                        type="text"
                        placeholder="Логин..."
                        {...registerLogin("login", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 символа'
                            },
                            maxLength: {
                                value: 40,
                                message: 'Максимум 40 символов'
                            }
                        })}
                    />
                    {
                        errorsLogin?.login &&
                        <div style={{color:'red'}}>
                            {errorsLogin?.login.message}
                        </div>
                    }
                    <input
                        type="password"
                        placeholder="Пароль..."
                        {...registerLogin("password", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 4,
                                message: 'Минимум 4 символа'
                            },
                            maxLength: {
                                value: 40,
                                message: 'Максимум 40 символов'
                            }
                        })}
                    />
                    {
                        errorsLogin?.password &&
                        <div style={{color:'red'}}>
                            {errorsLogin?.password.message}
                        </div>
                    }
                    <div className={s.btn__wrapper}>
                        <button type="submit">Войти</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage