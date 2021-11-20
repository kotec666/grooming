import React from 'react'
import s from './../../pages/ToysPage/ToysPage.module.css'



interface IToyItemProps {
    id: number,
    name: string,
    img: string,
    price: number
}

const ToyItem:React.FC<IToyItemProps> = ({id, name, img, price}) => {


    const basketId = 1

    const addToyToCartHandler = (toyId:number, basketId:number) => {
        console.log(toyId, basketId)
    }

    return (
            <div className={s.toy__wrapper}>
                <h3>{name} id: {id}</h3>
                <div className={s.img__wrapper}>
                    <img
                        src={'http://localhost:5000/' + img}
                        alt="toy_photo"
                    />
                </div>
                <h4>{price} руб.</h4>
                <button onClick={() => addToyToCartHandler(id, basketId)}>В корзину</button>
            </div>
    )
}

export default ToyItem