import React, {useState} from 'react'
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

const serviceInfoInitialState = {
    id: 0,
    name: '',
    description: '',
    price: 0,
}


const TypeItem:React.FC<ITypeItemProps> = ({id, name, servicesData}) => {


    const {user, isAuth} = useAppSelector(state => state.userReducer)
    const {data: basket} = basketAPI.useFetchAllBasketByIdQuery(user.id)

    const [createBasketService] = basketAPI.useCreateBasketServiceMutation()
    const [deleteType] = serviceAPI.useDeleteTypeMutation()
    const [deleteService] = serviceAPI.useDeleteServiceMutation()
    const [changeInfoService] = serviceAPI.useChangeInfoServiceMutation()
    const [changeInfoType] = serviceAPI.useChangeInfoTypeMutation()

    const [isActive, setIsActive] = useState(0)
    const [serviceInfo, setServiceInfo] = useState(serviceInfoInitialState)

    const [isActiveType, setIsActiveType] = useState(0)
    const [typeInfo, setTypeInfo] = useState({id: 0, name: ''})

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


    const handleChangeTypeName =  (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
        setTypeInfo({...typeInfo, id: id, name: e.target.value})
    }

    const handleChangeName =  (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
        setServiceInfo({...serviceInfo, id: id, name: e.target.value, description: serviceInfo.description, price: serviceInfo.price})
    }

    const handleChangePrice =  (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
        setServiceInfo({...serviceInfo, id: id, name: serviceInfo.name, description: serviceInfo.description, price: +e.target.value})
    }

    const handleChangeDescription =  (e:React.ChangeEvent<HTMLInputElement>, id:number) => {
        setServiceInfo({...serviceInfo, id: id, name: serviceInfo.name, description: e.target.value, price: serviceInfo.price})
    }

    const handleSaveInfo =  async (e:React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            await changeInfoService(serviceInfo).unwrap()
            setIsActive(0)
        }
    }

    const handleSaveTypeInfo =  async (e:React.KeyboardEvent) => {
        if (e.keyCode === 13) {
            await changeInfoType(typeInfo).unwrap()
            setIsActiveType(0)
        }
    }

    return (
        <>
            <div className={s.service__wrapper}>
                <div className={s.type__name__wrapper}>
                    {user.role === 'ADMIN' ?
                        isActiveType === id
                            ?
                        <>
                            <input type="text" value={typeInfo.name} onKeyDown={(e) => handleSaveTypeInfo(e)} onChange={(e) => handleChangeTypeName(e, id)} className={s.changeInfoInput}/>
                            <button onClick={() => setIsActiveType(0)} className={s.cancellation}>отмена редактирования</button>
                        </>
                            : <h3 onDoubleClick={() => setIsActiveType(id)}>{name}</h3> : <h3>{name}</h3>
                    }
                    {
                        user.role === 'ADMIN' ?
                            <span className={s.close} onClick={() => deleteTypeFromWebsiteHandler(id)}>&times;</span>
                            : null
                    }
                </div>
                <div className={s.types__services__wrapper}>
                    <div className={s.types__service__wrapper}>
                        {
                            servicesData && servicesData.map(serviceData => {
                                return (
                                    <div key={serviceData.id}>
                                        <div className={s.service__name__wrapper}>
                                        {user.role === 'ADMIN' ?
                                            isActive === serviceData.id
                                                ?
                                                <>
                                                    <input type="text" value={serviceInfo.name} onKeyDown={(e) => handleSaveInfo(e)} onChange={(e) => handleChangeName(e, serviceData.id)} className={s.changeInfoInput}/>
                                                    <button onClick={() => setIsActive(0)} className={s.cancellation}>отмена редактирования</button>
                                                </>
                                                : <h3 onDoubleClick={() => setIsActive(serviceData.id)}>{serviceData.name}</h3> : <h3>{serviceData.name}</h3>
                                        }
                                        </div>
                                        <div className={s.service__desc__wrapper}>
                                            {user.role === 'ADMIN' ?
                                                isActive === serviceData.id
                                                    ? <input type="text" value={serviceInfo.description} onKeyDown={(e) => handleSaveInfo(e)} onChange={(e) => handleChangeDescription(e, serviceData.id)} className={s.changeInfoInput}/>
                                                    : <h4 onDoubleClick={() => setIsActive(serviceData.id)}>{serviceData.description}</h4> : <h4>{serviceData.description} руб.</h4>
                                            }
                                            <div className={s.service__price__wrapper}>
                                                {user.role === 'ADMIN' ?
                                                    isActive === serviceData.id
                                                        ? <input type="text" value={serviceInfo.price} onKeyDown={(e) => handleSaveInfo(e)} onChange={(e) => handleChangePrice(e, serviceData.id)} className={s.changeInfoInput}/>
                                                        : <h4 onDoubleClick={() => setIsActive(serviceData.id)}>{serviceData.price} руб.</h4> : <h4>{serviceData.price} руб.</h4>
                                                }
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