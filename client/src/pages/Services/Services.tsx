import React, {useEffect, useState} from 'react'
import s from './Services.module.css'
import TypeItem from "../../components/TypeItem"
import {serviceAPI} from "../../servicesAPI/TypeService"
import {IType} from "../../models/IServices"


// import {useAppDispatch, useAppSelector,} from "../../hooks/redux"
// import {fetchServices} from "../../store/reducers/ActionCreators"


const Services = () => {
    const [limit, setLimit] = useState(3)
    const {data: services, isLoading, isError} = serviceAPI.useFetchAllServicesQuery(limit)


    const [createType, {}] = serviceAPI.useCreateTypeMutation()
    const [deleteType, {}] = serviceAPI.useDeleteTypeMutation()


    const handleCreate = async () => {
             const name = prompt()
             await createType({name} as IType)
         }

    const handleRemove = (type: IType) => {
            deleteType(type)
         }

    // const handleCreate = async () => {
    //     const title = prompt()
    //     await createPost({title, body: title} as IPost)
    // }
    //
    // const handleRemove = (post: IPost) => {
    //     deletePost(post)
    // }
    //
    // const handleUpdate = (post: IPost) => {
    //     updatePost(post)
    // }

  // const dispatch = useAppDispatch()
  //  const {services, isLoading, error} = useAppSelector(state => state.servicesReducer)

    useEffect(() => {
      //  dispatch(fetchServices())
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