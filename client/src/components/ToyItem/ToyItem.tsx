import React from 'react'
import s from './../../pages/ToysPage/ToysPage.module.css'

const ToyItem = () => {
    return (
            <div className={s.toy__wrapper}>
                <h3>Канат</h3>
                <div className={s.img__wrapper}>
                    <img
                        src="https://sun9-8.userapi.com/impg/U0gD7bP80D14_1Gr6vdXn5mw7spgtRwlKd1B7w/125MsCSlZBc.jpg?size=1200x1200&quality=96&sign=b3a6103aea76cc922d0ae5ec9aaff3c8&type=album"
                        alt="toy_photo"
                    />
                </div>
                <h4>350 руб.</h4>
                <button>В корзину</button>
            </div>
    )
}

export default ToyItem