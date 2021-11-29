import React from 'react'
import s from "./ProfilePage.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/redux"
import { clearUser } from '../../store/reducers/UserSlice'



const ProfilePage = () => {

    const dispatch = useAppDispatch()

    const {user} = useAppSelector(state => state.userReducer)

    const handleLogoutUser = async () => {
        localStorage.removeItem('token')
        dispatch(clearUser())
    }

    return (
        <div className={s.profile__wrapper}>
            <div className={s.user__data__wrapper}>
                <h1>Ваши данные</h1>
                <h2>{user.login}</h2>
                <h2>{user.email}</h2>
                <h2>{user.phone}</h2>
                <button onClick={handleLogoutUser}>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default ProfilePage