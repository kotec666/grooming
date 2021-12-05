import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"
import {useAppSelector} from "../../hooks/redux"
import {basketAPI} from "../../servicesAPI/BasketService"
import {IBasketServiceReq} from "../../models/IBasketService"


interface IServiceItemProps {
    id: number,
    name: string,
    price: number
}



const ServiceItem:React.FC<IServiceItemProps> = ({id, name, price}) => {

    const {user} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)
    const [deleteBasketService] = basketAPI.useDeleteBasketServiceMutation()

    const deleteServiceFromCartHandler = async (serviceId:number) => {
        if (basket) {
            const basketId = basket.id
            await deleteBasketService({serviceId, basketId} as IBasketServiceReq).unwrap()
        }
    }



    return (
        <div className={s.service__wrapper}>
            <h1>{name}</h1>
            <h2>{price} руб.</h2>
            <button onClick={() => deleteServiceFromCartHandler(id)} className={s.basketButton}>Удалить</button>
        </div>
    )
}

export default ServiceItem