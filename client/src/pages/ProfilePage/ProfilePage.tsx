import React from 'react'
import s from "./ProfilePage.module.css"

const ProfilePage = () => {
    return (
        <div className={s.profile__wrapper}>
            <div className={s.user__data__wrapper}>
                <h1>Ваши данные</h1>
                <h2>Алексей Котов</h2>
                <h2>user@mail.ru</h2>
                <h2>+79279014532</h2>
                <button>Выйти из аккаунта</button>
            </div>
        </div>
    )
}

export default ProfilePage