import React from 'react'
import s from "./AdminPage.module.css"

const AdminPage = () => {
    return (
        <div className={s.admin__page__wrapper}>
            <div className={s.admin__data__wrapper}>
                <button>Добавить новый тип услуги</button>
                <button>Добавить новую услугу</button>
                <button>Добавить новый товар</button>
            </div>
        </div>
    )
}

export default AdminPage