import React, {useState} from 'react'
import s from './../../pages/ToysPage/ToysPage.module.css'
import {useAppSelector} from "../../hooks/redux"
import {basketAPI} from "../../servicesAPI/BasketService"
import {IBasketToyReq} from "../../models/IBasketToy"
import {isItemAdded} from "../../hooks/useIsAddedCheck"
import {toyAPI} from "../../servicesAPI/ToysService"


interface IToyItemProps {
    id: number,
    name: string,
    img: string,
    price: number
    isBasket: boolean
}

const toyInfoInitialState = {
    id: 0,
    name: '',
    img: '',
    price: 0,
}

const ToyItem:React.FC<IToyItemProps> = ({id, name, img, price, isBasket}) => {


    const {user, isAuth} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)

    const [createBasketToy] = basketAPI.useCreateBasketToyMutation()
    const [deleteBasketToy] = basketAPI.useDeleteBasketToyMutation()
    const [deleteToy] = toyAPI.useDeleteToyMutation()
    const [changeInfoToy] = toyAPI.useChangeInfoToyMutation()

    const [isActive, setIsActive] = useState(0)
    const [toyInfo, setToyInfo] = useState(toyInfoInitialState)


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

    const deleteToyFromWebsiteHandler = async (toyId:number) => {
        await deleteToy(toyId).unwrap()
    }

    const handleChangeName =  (e:React.ChangeEvent<HTMLInputElement>, id:number, name:string, img:string) => {
        setToyInfo({...toyInfo, id: id, name: e.target.value, img: img, price: toyInfo.price})
    }

    const handleChangePrice =  (e:React.ChangeEvent<HTMLInputElement>, id:number, name:string, img:string) => {
        setToyInfo({...toyInfo, id: id, name: toyInfo.name, img: img, price: +e.target.value})
    }

    const handleSaveInfo =  async (e:React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            await changeInfoToy(toyInfo).unwrap()
            setIsActive(0)
        }
    }


    return (
            <div className={s.toy__wrapper}>
                {user.role === 'ADMIN' ?
                    isActive === id
                    ? <input type="text" value={toyInfo.name} onKeyDown={(e) => handleSaveInfo(e)} onChange={(e) => handleChangeName(e, id, name, img)} className={s.changeInfoInput}/>
                    : <h3 onDoubleClick={() => setIsActive(id)}>{name}</h3> : <h3>{name}</h3>
                }
                <div className={s.img__wrapper}>
                    <img
                        src={'http://localhost:5000/' + img}
                        alt="toy_photo"
                    />
                </div>
                {user.role === 'ADMIN' ?
                    isActive === id
                    ? <input type="text" value={toyInfo.price} onKeyDown={(e) => handleSaveInfo(e)} onChange={(e) => handleChangePrice(e, id, name, img)} className={s.changeInfoInput}/>
                    : <h4 onDoubleClick={() => setIsActive(id)}>{price} руб.</h4> : <h4>{price} руб.</h4>
                }
                {
                    isBasket ? null :
                    user.role === 'ADMIN' ?
                            <button className={s.basketButton} onClick={() => deleteToyFromWebsiteHandler(id)}>Удалить c сайта</button>
                            : null
                }
                {  isBasket ?
                      <button className={s.basketButton} onClick={() => deleteToyFromCartHandler(id)}>Удалить</button>
                      :
                      basket && isItemAdded(basket.toys, id)
                              ?
                              <button style={{backgroundColor: '#6bcb54'}}>Добавлено</button>
                              :
                               isAuth ?
                              <button className={s.toyPageButton} onClick={() => addToyToCartHandler(id)}>В корзину</button>
                                  : null
                }
            </div>
    )
}

export default ToyItem