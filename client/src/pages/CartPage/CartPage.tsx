import React from 'react'
import s from './CartPage.module.css'
import ServiceItem from "../../components/ServiceItem/ServiceItem"
import ToyItem from "../../components/ToyItem/ToyItem"
import PaymentItem from "../../components/PaymentItem/PaymentItem"

const CartPage = () => {


    return (
        <div className={s.cart__wrapper}>
           <div className={s.content__wrapper}>
            <span>Выбранные услуги</span>
            <div className={s.services__wrapper}>
                <ServiceItem />
            </div>

               <div className={s.services__payment__wrapper}>
                   <PaymentItem />
               </div>

               <span>Выбранные товары</span>
               <div className={s.toys__wrapper}>
                   <ToyItem />
               </div>
               <div className={s.services__payment__wrapper}>
                   <PaymentItem />
               </div>
           </div>
        </div>
    )
}

export default CartPage