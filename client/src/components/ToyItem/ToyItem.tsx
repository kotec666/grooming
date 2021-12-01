import React from 'react'
import s from './../../pages/ToysPage/ToysPage.module.css'
import {useAppSelector} from "../../hooks/redux"
import {basketAPI} from "../../servicesAPI/BasketService"
import {IBasketToyReq} from "../../models/IBasketToy"


interface IToyItemProps {
    id: number,
    name: string,
    img: string,
    price: number
    isBasket: boolean
}

const ToyItem:React.FC<IToyItemProps> = ({id, name, img, price, isBasket}) => {


    const {user} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)
    const [createBasketToy, {}] = basketAPI.useCreateBasketToyMutation()
    const [deleteBasketToy, {}] = basketAPI.useDeleteBasketToyMutation()

    const addToyToCartHandler = async (toyId:number) => {
        if (basket) {
            const basketId = basket.id
            await createBasketToy({toyId, basketId} as IBasketToyReq).unwrap()
        }
    }

    const deleteToyFromCartHandler = async (toyId:number) => {
         if (basket) {
            const basketId = basket.id
            await deleteBasketToy({toyId, basketId} as IBasketToyReq).unwrap()
         }
    }

    const isItemAdded = (id:number) => {
        if (basket) {
            return basket.toys.some((obj) => Number(obj.id) === Number(id))
        }
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
                {
                  isBasket ?
                      <button className={s.basketButton} onClick={() => deleteToyFromCartHandler(id)}>Удалить</button>
                      :
                      isItemAdded(id) ?
                              <button style={{backgroundColor: '#6bcb54'}}>Добавлено</button>
                              :
                              <button className={s.toyPageButton} onClick={() => addToyToCartHandler(id)}>В корзину</button>

                }
            </div>
    )
}

export default ToyItem