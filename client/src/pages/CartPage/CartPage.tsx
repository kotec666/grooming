import React, {useState} from 'react'
import s from './CartPage.module.css'
import ServiceItem from "../../components/ServiceItem/ServiceItem"
import ToyItem from "../../components/ToyItem/ToyItem"
import PaymentItem from "../../components/PaymentItem/PaymentItem"
import {basketAPI} from "../../servicesAPI/BasketService"

const CartPage = () => {

    const [userId, setUserId] = useState(3)
    const {data: basket, isLoading, isError} = basketAPI.useFetchAllBasketByIdQuery(userId)

    return (
        <div className={s.cart__wrapper}>
           <div className={s.content__wrapper}>
            <span>Выбранные услуги</span>
            <div className={s.services__wrapper}>
                {
                    isLoading && isLoading ? <h1>Загрузка.....</h1>
                        :
                    basket && basket.services.map(service => {
                        return <ServiceItem key={service.id} id={service.id} name={service.name} price={service.price} />
                    })
                }
                { isError && <h1>Произошла ошибка при загрузке</h1> }
            </div>

               <div className={s.services__payment__wrapper}>
                   <PaymentItem />
               </div>

               <span>Выбранные товары</span>
               <div className={s.toys__wrapper}>
                   {
                       basket && basket.toys.map(toy => {
                           return <ToyItem key={toy.id} id={toy.id} name={toy.name} img={toy.img} price={toy.price} />
                       })
                   }
               </div>
               <div className={s.services__payment__wrapper}>
                   <PaymentItem />
               </div>
           </div>
        </div>
    )
}

export default CartPage