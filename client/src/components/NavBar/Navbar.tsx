import React from 'react'
import s from './Navbar.module.css'
import paw from './../../utils/images/paw.png'
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={s.wrapper}>
            <Link to='/' className={s.logo__wrapper}>
                <img src={paw} alt="paw"/>
            </Link>
                <NavLink to="/services"  activeClassName={s.link__active}>Услуги</NavLink>
                <NavLink to="/toys" activeClassName={s.link__active}>Игрушки</NavLink>
                <NavLink to="/cart" activeClassName={s.link__active}>Корзина</NavLink>
                <NavLink to="/profile" activeClassName={s.link__active}>Профиль</NavLink>
                <NavLink to="/admin" activeClassName={s.link__active}>Админ</NavLink>
                <NavLink to="/login" activeClassName={s.link__active}>Вход</NavLink>
                <NavLink to="/registration" activeClassName={s.link__active}>Регистрация</NavLink>
        </div>
    )
}

export default Navbar