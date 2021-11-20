import React from 'react'
import s from './../pages/Services/Services.module.css'
import {IServicesData} from "../models/IServices"


interface ITypeItemProps {
    id: number,
    name: string,
    servicesData: IServicesData[]
}


const TypeItem:React.FC<ITypeItemProps> = ({id, name, servicesData}) => {

    const basketId = 1

    const addServiceToCartHandler = (serviceId:number, basketId:number) => {
        console.log(serviceId, basketId)
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
                                                <button onClick={() => addServiceToCartHandler(serviceData.id, basketId)}>Заказать услугу</button>
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