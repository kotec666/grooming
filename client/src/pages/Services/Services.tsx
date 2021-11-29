import React, {useEffect, useState} from 'react'
import s from './Services.module.css'
import TypeItem from "../../components/TypeItem"
import {serviceAPI} from "../../servicesAPI/TypeService"


// import {useAppDispatch, useAppSelector,} from "../../hooks/redux"
// import {fetchServices} from "../../store/reducers/ActionCreators"


const Services = () => {
    const [limit] = useState(3)
    const {data: services, isLoading, isError} = serviceAPI.useFetchAllServicesQuery(limit)


    // const [createType, {}] = serviceAPI.useCreateTypeMutation()
    // const [deleteType, {}] = serviceAPI.useDeleteTypeMutation()


    // const handleCreate = async () => {
    //          const name = prompt()
    //          await createType({name} as IType)
    //      }
    //
    // const handleRemove = (type: IType) => {
    //         deleteType(type)
    //      }

  //  const {services, isLoading, error} = useAppSelector(state => state.servicesReducer)

    useEffect(() => {

        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className={s.content__wrapper}>
                <div className={s.services__wrapper}>
                    <div className={s.service__wrapper}>
                        {
                            isLoading && isLoading ? <h1>Загрузка.....</h1>
                            :  services && services.rows.map(service => {
                                return <TypeItem key={service.id} id={service.id} name={service.name} servicesData={service.servicesData}  />
                            })
                        }
                        { isError && <h1>Произошла ошибка при загрузке</h1> }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services