import React from 'react'
import s from './../pages/Services/Services.module.css'
import {IServicesData} from "../models/IServices"
import {useAppSelector} from "../hooks/redux"
import {basketAPI} from "../servicesAPI/BasketService"
import {IBasketServiceReq} from "../models/IBasketService"


interface ITypeItemProps {
    id: number,
    name: string,
    servicesData: IServicesData[]
}


const TypeItem:React.FC<ITypeItemProps> = ({id, name, servicesData}) => {


    const {user} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)
    const [createBasketService, {}] = basketAPI.useCreateBasketServiceMutation()

    const addServiceToCartHandler = async (serviceId:number) => {
        if (basket) {
            const basketId = basket.id
            await createBasketService({serviceId, basketId} as IBasketServiceReq).unwrap()
        }
    }


    const isItemAdded = (id:number) => {
        if (basket) {
            return basket.services.some((obj) => Number(obj.id) === Number(id))
        }
    }


    return (
        <>
            <div className={s.service__wrapper}>
                <h3>{name} id:{id}</h3>
                <div className={s.types__services__wrapper}>
                    <div className={s.types__service__wrapper}>
                        {
                            servicesData && servicesData.map(serviceData => {
                                return (
                                    <div key={serviceData.id}>
                                        <div className={s.service__name__wrapper}>
                                            <h3>{serviceData.name} serviceId: {serviceData.id} TypeId: {serviceData.typeId}</h3>
                                        </div>
                                        <div className={s.service__desc__wrapper}>
                                            <h4>
                                                {
                                                    serviceData.description
                                                }
                                            </h4>
                                            <div className={s.service__price__wrapper}>
                                                <h4>
                                                    Стоимость: {serviceData.price} руб.
                                                </h4>
                                                {
                                                    isItemAdded(serviceData.id) ?
                                                        <button style={{backgroundColor: '#6bcb54'}}>Добавлено</button>
                                                        :
                                                        <button onClick={() => addServiceToCartHandler(serviceData.id)} className={s.servicePageButton}>Заказать услугу</button>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TypeItem