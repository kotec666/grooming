import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"

import {IServicesData} from "../../models/IServices"
import {IToy} from "../../models/IToys"
import {basketAPI} from "../../servicesAPI/BasketService"
import {IBasketServiceReq} from "../../models/IBasketService"
import {useAppSelector} from "../../hooks/redux"
import {IBasketToyReq} from "../../models/IBasketToy"
import {orderAPI} from "../../servicesAPI/OrderService"
import {IOrderServiceReq} from "../../models/IOrderService"
import {IOrderToyReq} from "../../models/IOrderToy"


interface IPaymentItemProps {
    items: IServicesData[] | IToy[]
    isServices: boolean
}

const PaymentItem:React.FC<IPaymentItemProps> = ({items, isServices}) => {


    const [deleteBasketService] = basketAPI.useDeleteBasketServiceMutation()
    const [deleteBasketToy] = basketAPI.useDeleteBasketToyMutation()
    const [createOrderService] = orderAPI.useCreateOrderServiceMutation()
    const [createOrderToy] = orderAPI.useCreateOrderToyMutation()

    const {user} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)
    const {data: order} = orderAPI.useFetchAllOrderByIdQuery(user.id)
    // toyId: number
    // orderId: number

    let price = []
    for (let i in items) {
        if (items.hasOwnProperty(i)) {
            price.push(items[i].price)
        }
    }

    const totalPrice = price.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue
    }, 0)

    const handleOrder = async () => {
        if (isServices) {
            // оплачиваем услуги
            if (basket && order) {
                const orderId = order.id
                const basketId = basket.id
                for (let i in items) {
                    if (items.hasOwnProperty(i)) {
                        let serviceId = items[i].id
                        await createOrderService({serviceId, orderId} as IOrderServiceReq).unwrap()
                        await deleteBasketService({serviceId, basketId} as IBasketServiceReq).unwrap()
                    }
                }
            }
        } else {
            // оплачиваем товары
            if (basket && order) {
                const basketId = basket.id
                const orderId = order.id
                for (let i in items) {
                    if (items.hasOwnProperty(i)) {
                        let toyId = items[i].id
                        await createOrderToy({toyId, orderId} as IOrderToyReq).unwrap()
                        await deleteBasketToy({toyId, basketId} as IBasketToyReq).unwrap()
                    }
                }
            }
        }
    }

    return (
        <div className={s.service__payment__wrapper}>
            <h4>{isServices ? 'Услуг' : 'Товаров'} в корзине: {items.length}</h4>
            <h4>На общую сумму: {totalPrice} руб.</h4>
            <button onClick={handleOrder}>Оплатить</button>
        </div>
    )
}

export default PaymentItem