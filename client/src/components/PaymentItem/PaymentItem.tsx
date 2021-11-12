import React from 'react'
import s from "../../pages/CartPage/CartPage.module.css"

const PaymentItem = () => {
    return (
        <div className={s.service__payment__wrapper}>
            <h4>Услуг в корзине: 1</h4>
            <h4>На общую сумму: 3550 руб.</h4>
            <button>Оплатить</button>
        </div>
    )
}

export default PaymentItem