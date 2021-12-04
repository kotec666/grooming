import React, {useState} from 'react'
import s from "./AdminPage.module.css"
import Modal from "../../components/Modal/Modal"
import {serviceAPI} from "../../servicesAPI/TypeService"
import {toyAPI} from "../../servicesAPI/ToysService"
import {useForm} from "react-hook-form"


type Type = {
    name: string
}

type Service = {
    name: string
    description: string
    price: number
    typeId: number
}

type Toy = {
    name: string
    price: number
    img: FileList
}


const AdminPage = () => {
    const pageSize = 1000
    const page = 1
    const { data: services } = serviceAPI.useFetchAllServicesQuery({limit: pageSize, page})

    const [isTypeOpened, setIsTypeOpened] = useState(false)
    const [isServiceOpened, setIsServiceOpened] = useState(false)
    const [isProductOpened, setIsProductOpened] = useState(false)

    const [createType] = serviceAPI.useCreateTypeMutation()
    const [createService] = serviceAPI.useCreateServiceMutation()
    const [createToy] = toyAPI.useCreateToyMutation()

    const {register: registerType, formState: { errors: errorsType }, handleSubmit: handleSubmitType} = useForm<Type>()
    const {register: registerService, formState: { errors: errorsService }, handleSubmit: handleSubmitService} = useForm<Service>()
    const {register: registerToy, formState: { errors: errorsToy }, handleSubmit: handleSubmitToy} = useForm<Toy>()


    const addTypeHandler =  handleSubmitType( async (data) => {
        try {
            await createType(data)
            setIsTypeOpened(false)
        } catch (e) {
           console.log('произошла ошибка при создании типа')
        }
    })

    const addServiceHandler = handleSubmitService( async (data) => {
        try {
           await createService(data)
           setIsServiceOpened(false)
        } catch (e) {
           console.log('произошла ошибка при создании услуги')
        }

    })

    const addToyHandler = handleSubmitToy( async (data) => {
        try {
            const toyData = new FormData()
            toyData.append('name', data.name)
            toyData.append('price', `${data.price}`)
            toyData.append('img', data.img[0])
            await createToy(toyData)
            setIsProductOpened(false)
        } catch (e) {
            console.log('произошла ошибка при создании товара')
        }
    })

    return (
        <div className={s.admin__page__wrapper}>
            <div className={s.admin__data__wrapper}>
                <button onClick={() => setIsTypeOpened(true)} className={s.openModalBtn}>Добавить новый тип услуги</button>
                <button onClick={() => setIsServiceOpened(true)} className={s.openModalBtn}>Добавить новую услугу</button>
                <button onClick={() => setIsProductOpened(true)} className={s.openModalBtn}>Добавить новый товар</button>

                <Modal isOpened={isTypeOpened} setIsOpened={setIsTypeOpened} title={'Добавление типа услуги'}>
                    <form onSubmit={addTypeHandler}>
                        <input
                         type="text"
                         placeholder="Имя (для кого предназначена)"
                         {...registerType("name", {
                             required: "Поле обязательно для заполнения",
                             minLength: {
                                 value: 6,
                                 message: 'Минимум 6 символов'
                             },
                             maxLength: {
                                 value: 40,
                                 message: 'Максимум 40 символов'
                             }
                         })}
                        />
                        {
                            errorsType?.name &&
                            <div style={{color:'red'}}>
                                {errorsType?.name.message}
                            </div>
                        }
                        <button type="submit" className={s.applyBtn}>Добавить</button>
                    </form>
                </Modal>

                <Modal isOpened={isServiceOpened} setIsOpened={setIsServiceOpened} title={'Добавление услуги'}>
                    <form onSubmit={addServiceHandler}>
                        <input
                            type="text"
                            placeholder="Название предоставляемой услуги"
                            {...registerService("name", {
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 6,
                                    message: 'Минимум 6 символов'
                                },
                                maxLength: {
                                    value: 40,
                                    message: 'Максимум 40 символов'
                                }
                            })}
                        />
                        {
                            errorsService?.name &&
                            <div style={{color:'red'}}>
                                {errorsService?.name.message}
                            </div>
                        }
                     <textarea
                            placeholder="Описание производимых работ по услуге"
                            {...registerService("description", {
                                required: "Поле обязательно для заполнения",
                                minLength: {
                                    value: 6,
                                    message: 'Минимум 6 символов'
                                },
                                maxLength: {
                                    value: 400,
                                    message: 'Максимум 400 символов'
                                }
                            })}
                     />
                        {
                            errorsService?.description &&
                            <div style={{color:'red'}}>
                                {errorsService?.description.message}
                            </div>
                        }
                     <input
                         type="number"
                         placeholder="Цена за услугу"
                         {...registerService("price", {
                             required: "Поле обязательно для заполнения",
                             minLength: {
                                 value: 2,
                                 message: 'Минимум 2 символа'
                             },
                             maxLength: {
                                 value: 20,
                                 message: 'Максимум 20 символов'
                             }
                         })}
                     />
                        {
                            errorsService?.price &&
                            <div style={{color:'red'}}>
                                {errorsService?.price.message}
                            </div>
                        }
                     <select
                         {...registerService("typeId", {
                             required: "Поле обязательно для заполнения",
                         })}
                      >
                         {
                             errorsService?.typeId &&
                             <div style={{color:'red'}}>
                                 {errorsService?.typeId.message}
                             </div>
                         }
                          {
                               services && services.rows.map(service => {
                                 return <option key={service.id} value={service.id}>{service.name}</option>
                              })
                         }
                      </select>
                        <button type="submit" className={s.applyBtn}>Добавить</button>
                    </form>
                </Modal>

                <Modal isOpened={isProductOpened} setIsOpened={setIsProductOpened} title={'Добавление товара (игрушки)'}>
                <form onSubmit={addToyHandler}>
                    <input
                        type="text"
                        placeholder={'Название игрушки'}
                        {...registerToy("name", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 6,
                                message: 'Минимум 6 символов'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Максимум 30 символов'
                            }
                        })}
                    />
                    {
                        errorsToy?.name &&
                        <div style={{color:'red'}}>
                            {errorsToy?.name.message}
                        </div>
                    }
                    <input
                        type="number"
                        placeholder={'Цена игрушки'}
                        {...registerToy("price", {
                            required: "Поле обязательно для заполнения",
                            minLength: {
                                value: 2,
                                message: 'Минимум 2 символа'
                            },
                            maxLength: {
                                value: 20,
                                message: 'Максимум 20 символов'
                            }
                        })}
                    />
                    {
                        errorsToy?.price &&
                        <div style={{color:'red'}}>
                            {errorsToy?.price.message}
                        </div>
                    }
                    <label className={s.choosePhotoBtn} htmlFor={'img'}>Выберите фото игрушки</label>
                    <input
                        hidden
                        type="file"
                        id={'img'}
                        {...registerToy("img", {
                            required: "Поле изображения обязательно для заполнения"
                        })}
                    />
                    {
                        errorsToy?.img &&
                        <div style={{color:'red'}}>
                            {errorsToy?.img.message}
                        </div>
                    }
                    <button type="submit" className={s.applyBtn}>Добавить</button>
                </form>
                </Modal>
            </div>
        </div>
    )
}

export default AdminPage