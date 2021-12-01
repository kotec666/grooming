import React from 'react'
import s from './Navbar.module.css'
import paw from './../../utils/images/paw.png'
import {Link, NavLink} from "react-router-dom"
import {
    ADMIN_ROUTE,
    CART_ROUTE,
    LOGIN_ROUTE,
    PROFILE_ROUTE,
    REGISTRATION_ROUTE,
    SERVICES_ROUTE,
    TOYS_ROUTE
} from "../../utils/consts"
import {useAppSelector} from "../../hooks/redux"

const Navbar = () => {
    const {user, isAuth} = useAppSelector(state => state.userReducer)
    return (
        <div className={s.wrapper}>
            <Link to='/' className={s.logo__wrapper}>
                <img src={paw} alt="paw"/>
            </Link>
            <>
            {
                isAuth && isAuth
                    ?
                    <>
                        <NavLink to={SERVICES_ROUTE}  activeClassName={s.link__active}>Услуги</NavLink>
                        <NavLink to={TOYS_ROUTE} activeClassName={s.link__active}>Игрушки</NavLink>
                        <NavLink to={CART_ROUTE} activeClassName={s.link__active}>Корзина</NavLink>
                        <NavLink to={PROFILE_ROUTE} activeClassName={s.link__active}>Профиль</NavLink>
                        {
                            user.role === 'ADMIN' ?
                                <NavLink to={ADMIN_ROUTE} activeClassName={s.link__active}>Админ</NavLink> : null
                        }
                    </>
                    :
                    <>
                        <NavLink to={SERVICES_ROUTE}  activeClassName={s.link__active}>Услуги</NavLink>
                        <NavLink to={TOYS_ROUTE} activeClassName={s.link__active}>Игрушки</NavLink>
                        <NavLink to={LOGIN_ROUTE} activeClassName={s.link__active}>Вход</NavLink>
                        <NavLink to={REGISTRATION_ROUTE} activeClassName={s.link__active}>Регистрация</NavLink>
                    </>
            }
            </>
        </div>
    )
}

export default Navbar