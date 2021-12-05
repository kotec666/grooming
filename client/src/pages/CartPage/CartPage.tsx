import React from 'react'
import s from './CartPage.module.css'
import ServiceItem from "../../components/ServiceItem/ServiceItem"
import ToyItem from "../../components/ToyItem/ToyItem"
import PaymentItem from "../../components/PaymentItem/PaymentItem"

import {basketAPI} from "../../servicesAPI/BasketService"
import {useAppSelector} from "../../hooks/redux"

const CartPage = () => {

    const {user} = useAppSelector(state => state.userReducer)
    const {data: basket, isLoading, error} = basketAPI.useFetchAllBasketByIdQuery(user.id)

    return (
        <div className={s.cart__wrapper}>
           <div className={s.content__wrapper}>
               {
                   basket && basket.services.length === 0 ? <span>В вашей корзине нет услуг</span> :
                   <>
                   <span>Выбранные услуги</span>
                   <div className={s.services__wrapper}>
                   {
                       isLoading && isLoading ? <h1>Загрузка.....</h1>
                           :
                           basket && basket.services.map(service => {
                               return <ServiceItem key={service.id} id={service.id} name={service.name} price={service.price} />
                           })
                   }
                   { error && <h1>Произошла ошибка при загрузке</h1> }
                   </div>

                   <div className={s.services__payment__wrapper}>
                   {basket && <PaymentItem isServices={true} items={basket.services} />}
                   </div>
                   </>
               }
               {
                   basket && basket.toys.length === 0 ? <span>В вашей корзине нет товаров</span> :
                       <>
                           <span>Выбранные товары</span>
                           <div className={s.toys__wrapper}>
                               {
                                   basket && basket.toys.map(toy => {
                                       return <ToyItem key={toy.id} isBasket={true} id={toy.id} name={toy.name} img={toy.img} price={toy.price} />
                                   })
                               }
                           </div>
                           <div className={s.services__payment__wrapper}>
                               {basket && <PaymentItem isServices={false} items={basket.toys} />}
                           </div>
                       </>
               }
           </div>
        </div>
    )
}

export default CartPage