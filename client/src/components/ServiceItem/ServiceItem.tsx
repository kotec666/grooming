import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"

const ServiceItem = () => {
    return (
        <div className={s.service__wrapper}>
            <h1>1 - Груминг "Полный комплекс"</h1>
            <h2>3200 руб.</h2>
            <button>Удалить</button>
        </div>
    )
}

export default ServiceItem