import React from 'react'
import s from "./ProfilePage.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks/redux"
import { clearUser } from '../../store/reducers/UserSlice'
import {orderAPI} from "../../servicesAPI/OrderService"



const ProfilePage = () => {

    const dispatch = useAppDispatch()

    const {user} = useAppSelector(state => state.userReducer)
    const {data: order} = orderAPI.useFetchAllOrderByIdQuery(user.id)

    const handleLogoutUser = async () => {
        localStorage.removeItem('token')
        dispatch(clearUser())
    }

    return (
        <div className={s.profile__wrapper}>
            <div className={s.user__data__wrapper}>
                <h1>Ваши данные</h1>
                <h2>{user.login}</h2>
                <h2>{user.email}</h2>
                <h2>{user.phone}</h2>
                <button onClick={handleLogoutUser}>Выйти из аккаунта</button>
            </div>
            <h3>Ваши заказы</h3>
            <div className={s.user__orders_wrapper}>
                    <h3>Услуги</h3>
                    {order && order.services ? order.services.map(service => {
                        return (
                            <div className={s.user__order__wrapper} key={service.id}>
                                <div className={s.user__column}>
                                    <h4>Название</h4>
                                    {service.name}
                                </div>
                                <div className={s.user__column}>
                                    <h4>Описание</h4>
                                    {service.description}
                                </div>
                                <div className={s.user__column}>
                                    <h4>Стоимость</h4>
                                    {service.price} руб.
                                </div>
                            </div>
                        )
                    }) : <h4>Вы еще не заказывали услуги</h4>
                    }

                    <h3>Товары</h3>
                    {order && order.toys ? order.toys.map(toy => {
                        return (
                            <div className={s.user__order__wrapper} key={toy.id}>
                                <div className={s.user__column}>
                                    <h4>Название</h4>
                                    {toy.name}
                                </div>
                                <div className={s.user__column}>
                                    <h4>Изображение</h4>
                                    <div className={s.img__wrapper}>
                                        <img src={'http://localhost:5000/' + toy.img} alt="toy"/>
                                    </div>
                                </div>
                                <div className={s.user__column}>
                                    <h4>Стоимость</h4>
                                    {toy.price} руб.
                                </div>
                            </div>
                        )
                    }) : <h4>Вы еще не заказывали товары</h4>
                    }

            </div>
        </div>
    )
}

export default ProfilePage