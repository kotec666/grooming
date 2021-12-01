import React, {useState} from 'react'
import s from './Services.module.css'
import TypeItem from "../../components/TypeItem"
import {serviceAPI} from "../../servicesAPI/TypeService"
import {toyAPI} from "../../servicesAPI/ToysService";




const Services = () => {
    const pageSize = 2

    const [page, setPage] = useState(1)
    const { data: services, isLoading, isError } = serviceAPI.useFetchAllServicesQuery({limit: pageSize, page})

    let servicesCount = 1
    if (services) {
        servicesCount = services.count
    }

    const totalCount = servicesCount

    const calculatePagesCount = (pageSize:number, totalCount:number) => {
        return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize)
    }

    const pagesCount = calculatePagesCount(pageSize, totalCount)


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
                        <div style={{display:'flex'}}>
                            <button
                                onClick={() => setPage(page - 1)}
                                disabled={page === 1}
                            >
                                ←
                            </button>
                            <h3>
                                {page}/{pagesCount - 1}
                            </h3>
                            <button
                                onClick={() => setPage(page + 1)}
                                disabled={page === pagesCount - 1}
                            >
                                →
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services


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