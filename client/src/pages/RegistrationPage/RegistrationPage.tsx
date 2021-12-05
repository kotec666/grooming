import React, {useState} from 'react'
import s from './../LoginPage/LoginPage.module.css'
import {userAPI} from "../../servicesAPI/UserService"
import {ILoginUserReq, IRegistrationUserReq} from "../../models/IUser"
import {useHistory} from "react-router-dom"
import {TOYS_ROUTE} from "../../utils/consts"
import {useForm} from "react-hook-form"

const RegistrationPage = () => {

    const [regError, setRegError] = useState('')

    const history = useHistory()
    const [registrationUser] = userAPI.useRegistrationUserMutation()
    const [loginUser] = userAPI.useLoginUserMutation()

    const {register: registerRegistration, formState: { errors: errorsRegistration }, handleSubmit: handleSubmitRegistration} = useForm<IRegistrationUserReq>()

    const handleRegistrationUser = handleSubmitRegistration( async ({login, password, email, phone}) => {
        try {
            setRegError('')
            const role = 'USER'
            await registrationUser({login, password, email, phone, role} as IRegistrationUserReq)
            await loginUser({login, password} as ILoginUserReq).unwrap()
            history.push(TOYS_ROUTE)
        } catch (e) {
            setRegError(e.data.message)
        }
    })

    return (
        <div className={s.login__wrapper}>
            <div className={s.form__wrapper}>
                <form onSubmit={handleRegistrationUser}>
                    <span>{regError}</span>
                    <input
                        type="text"
                        placeholder="Логин..."
                        {...registerRegistration("login", {
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
                        errorsRegistration?.login &&
                        <div style={{color:'red'}}>
                            {errorsRegistration?.login.message}
                        </div>
                    }
                    <input
                        type="password"
                        placeholder="Пароль..."
                        {...registerRegistration("password", {
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
                        errorsRegistration?.password &&
                        <div style={{color:'red'}}>
                            {errorsRegistration?.password.message}
                        </div>
                    }
                    <input
                        type="text"
                        placeholder="Email..."
                        {...registerRegistration("email", {
                            required: "Поле обязательно для заполнения",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Введенное значение не соответствует формату email"
                            }
                        })}
                    />
                    {
                        errorsRegistration?.email &&
                        <div style={{color:'red'}}>
                            {errorsRegistration?.email.message}
                        </div>
                    }
                    <input
                        type="phone"
                        placeholder="Номер телефона..."
                        {...registerRegistration("phone", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 7,
                                message: 'Минимум 7 символов'
                            },
                            maxLength: {
                                value: 30,
                                message: 'Максимум 30 символов'
                            }
                        })}
                    />
                    {
                        errorsRegistration?.phone &&
                        <div style={{color:'red'}}>
                            {errorsRegistration?.phone.message}
                        </div>
                    }
                    <div className={s.btn__wrapper}>
                        <button type="submit">Регистрация</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegistrationPage