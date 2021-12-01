import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"

import {IServicesData} from "../../models/IServices"
import {IToy} from "../../models/IToys"


interface IPaymentItemProps {
    items: IServicesData[] | IToy[]
    isServices: boolean
}

const PaymentItem:React.FC<IPaymentItemProps> = ({items, isServices}) => {



    // @ts-ignore
     const totalPrice = items.reduce((sum:number, item:  IServicesData | IToy) =>  sum + item.price , 0)



    return (
        <div className={s.service__payment__wrapper}>
            <h4>{isServices ? 'Услуг' : 'Товаров'} в корзине: {items.length}</h4>
            <h4>На общую сумму: {totalPrice} руб.</h4>
            <button>Оплатить</button>
        </div>
    )
}

export default PaymentItem