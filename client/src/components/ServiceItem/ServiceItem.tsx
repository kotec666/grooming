import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"


interface IServiceItemProps {
    id: number,
    name: string,
    price: number
}



const ServiceItem:React.FC<IServiceItemProps> = ({id, name, price}) => {
    return (
        <div className={s.service__wrapper}>
            <h1>{name} id: {id}</h1>
            <h2>{price} руб.</h2>
            <button>Удалить</button>
        </div>
    )
}

export default ServiceItem