import React from 'react'
import s from './../pages/Services/Services.module.css'
import {IServicesData} from "../models/IServices"
import {useAppSelector} from "../hooks/redux"
import {basketAPI} from "../servicesAPI/BasketService"
import {IBasketServiceReq} from "../models/IBasketService"
import {isItemAdded} from "../hooks/useIsAddedCheck"
import {serviceAPI} from "../servicesAPI/TypeService"


interface ITypeItemProps {
    id: number,
    name: string,
    servicesData: IServicesData[]
}


const TypeItem:React.FC<ITypeItemProps> = ({id, name, servicesData}) => {


    const {user, isAuth} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)
    const [createBasketService] = basketAPI.useCreateBasketServiceMutation()
    const [deleteType] = serviceAPI.useDeleteTypeMutation()
    const [deleteService] = serviceAPI.useDeleteServiceMutation()

    const addServiceToCartHandler = async (serviceId:number) => {
        if (basket) {
            const basketId = basket.id
            await createBasketService({serviceId, basketId} as IBasketServiceReq).unwrap()
        }
    }

    const deleteTypeFromWebsiteHandler = async (typeId:number) => {
        await deleteType(typeId).unwrap()
    }

    const deleteServiceFromWebsiteHandler = async (serviceId:number) => {
        await deleteService(serviceId).unwrap()
    }



    return (
        <>
            <div className={s.service__wrapper}>
                <h3>
                    {name}
                    {
                        user.role === 'ADMIN' ?
                            <span className={s.close} onClick={() => deleteTypeFromWebsiteHandler(id)}>&times;</span>
                            : null
                    }
                </h3>
                <div className={s.types__services__wrapper}>
                    <div className={s.types__service__wrapper}>
                        {
                            servicesData && servicesData.map(serviceData => {
                                return (
                                    <div key={serviceData.id}>
                                        <div className={s.service__name__wrapper}>
                                            <h3>{serviceData.name}</h3>
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
                                                    user.role === 'ADMIN' ?
                                                        <button className={s.deleteButton} onClick={() => deleteServiceFromWebsiteHandler(serviceData.id)}>Удалить c сайта</button>
                                                        : null
                                                }
                                                {
                                                    basket && isItemAdded(basket.services, serviceData.id) ?
                                                        <button style={{backgroundColor: '#6bcb54'}}>Добавлено</button>
                                                        :
                                                        isAuth ?
                                                        <button onClick={() => addServiceToCartHandler(serviceData.id)} className={s.servicePageButton}>Заказать услугу</button>
                                                            : null
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