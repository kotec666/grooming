import React, {useState} from 'react'
import s from "./AdminPage.module.css"
import Modal from "../../components/Modal/Modal"
import {serviceAPI} from "../../servicesAPI/TypeService"
import {toyAPI} from "../../servicesAPI/ToysService"



const initialTypeState = {
    name: ''
}


const initialServiceState = {
    name: '',
    description: '',
    price: 1,
    typeId: 1,
}

const file: File = {} as File

const initialToyState = {
    name: '',
    price: 0,
    img: file
}


const AdminPage = () => {
    const pageSize = 1000
    const page = 1
    const { data: services } = serviceAPI.useFetchAllServicesQuery({limit: pageSize, page})

    const [isTypeOpened, setIsTypeOpened] = useState(false)
    const [isServiceOpened, setIsServiceOpened] = useState(false)
    const [isProductOpened, setIsProductOpened] = useState(false)

    const [typeState, setTypeState] = useState(initialTypeState) // добавление типа услуги
    const [serviceState, setServiceState] = useState(initialServiceState) // добавление услуги
    const [toyState, setToyState] = useState(initialToyState) // добавление товара

    const [createType] = serviceAPI.useCreateTypeMutation()
    const [createService] = serviceAPI.useCreateServiceMutation()
    const [createToy] = toyAPI.useCreateToyMutation()

    const addTypeHandler = async () => {
        try {
            await createType(typeState)
            setIsTypeOpened(false)
        } catch (e) {
           console. log('произошла ошибка при создании типа')
        }
    }

    const addServiceHandler = async () => {
        try {
           await createService(serviceState)
           setIsServiceOpened(false)
        } catch (e) {
           console. log('произошла ошибка при создании услуги')
        }

    }

    const addToyHandler = async () => {
        try {
            const toyData = new FormData()
            toyData.append('name', toyState.name)
            toyData.append('price', `${toyState.price}`)
            toyData.append('img', toyState.img)
            await createToy(toyData)
            setIsProductOpened(false)
        } catch (e) {
            console.log('произошла ошибка при создании товара')
        }
    }

    return (
        <div className={s.admin__page__wrapper}>
            <div className={s.admin__data__wrapper}>
                <button onClick={() => setIsTypeOpened(true)} className={s.openModalBtn}>Добавить новый тип услуги</button>
                <button onClick={() => setIsServiceOpened(true)} className={s.openModalBtn}>Добавить новую услугу</button>
                <button onClick={() => setIsProductOpened(true)} className={s.openModalBtn}>Добавить новый товар</button>

                <Modal isOpened={isTypeOpened} setIsOpened={setIsTypeOpened} title={'Добавление типа услуги'}>
                    <input
                        type="text"
                        placeholder="Имя (для кого предназначена)"
                        value={typeState.name}
                        onChange={e => {
                            setTypeState({ ...typeState, name: e.target.value })
                        }}
                    />
                    <button onClick={addTypeHandler} className={s.applyBtn}>Добавить</button>
                </Modal>

                <Modal isOpened={isServiceOpened} setIsOpened={setIsServiceOpened} title={'Добавление услуги'}>
                    <input
                        type="text"
                        placeholder="Название предоставляемой услуги"
                        value={serviceState.name}
                        onChange={e => {
                        setServiceState({ ...serviceState, name: e.target.value })
                        }}
                    />
                    <textarea
                        placeholder="Описание производимых работ по услуге"
                        value={serviceState.description}
                        onChange={e => {
                            setServiceState({ ...serviceState, description: e.target.value })
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Цена за услугу"
                        value={serviceState.price}
                        onChange={e => {
                            setServiceState({ ...serviceState, price: +e.target.value })
                        }}
                        min={1} max={999999}
                    />
                    <select
                        value={serviceState.typeId}
                        onChange={e => {
                            setServiceState({ ...serviceState, typeId: +e.target.value })
                        }}
                    >
                        {
                             services && services.rows.map(service => {
                                return <option key={service.id} value={service.id}>{service.name}</option>
                            })
                        }
                    </select>
                    <button onClick={addServiceHandler} className={s.applyBtn}>Добавить</button>
                </Modal>

                <Modal isOpened={isProductOpened} setIsOpened={setIsProductOpened} title={'Добавление товара (игрушки)'}>
                    <input
                        type="text"
                        placeholder={'Название игрушки'}
                        value={toyState.name}
                        onChange={e => {
                            setToyState({ ...toyState, name: e.target.value })
                        }}
                    />
                    <input
                        type="number"
                        placeholder={'Цена игрушки'}
                        value={toyState.price}
                        onChange={e => {
                            setToyState({ ...toyState, price: +e.target.value })
                        }}
                    />
                    <label className={s.choosePhotoBtn} htmlFor={'photo'}>Выберите фото игрушки</label>
                    <input
                        hidden
                        type="file"
                        id={'photo'}
                        onChange={e => {
                            if (e.target.files) {
                                setToyState({ ...toyState, img: e?.target?.files[0] })
                            }
                        }}

                    />
                    <button onClick={addToyHandler} className={s.applyBtn}>Добавить</button>
                </Modal>
            </div>
        </div>
    )
}

export default AdminPage