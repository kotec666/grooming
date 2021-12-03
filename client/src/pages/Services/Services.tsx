import React, {useState} from 'react'
import s from './Services.module.css'
import TypeItem from "../../components/TypeItem"
import {serviceAPI} from "../../servicesAPI/TypeService"
import {calculatePagesCount} from "../../hooks/usePagination"




const Services = () => {
    const pageSize = 2

    const [page, setPage] = useState(1)
    const { data: services, isLoading, isError } = serviceAPI.useFetchAllServicesQuery({limit: pageSize, page})

    let servicesCount = 1
    if (services) {
        servicesCount = services.count
    }
    const totalCount = servicesCount
    const pagesCount = calculatePagesCount(pageSize, totalCount)


    const pages = []
    if(pagesCount) {
        for(let i = 0; i < pagesCount - 1; i++)
            pages.push(i)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as Element
        const newPage = Number(target.innerHTML)
        if(newPage)
            setPage(newPage)
    }

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
                        <div style={{display:'flex', marginTop: '3rem'}}>
                            <button disabled={page === 1} onClick={() => setPage(1)} className={`${s.pButton} ${s.firstBtn}`} >Первая</button>
                                <button disabled={page === 1} onClick={() => setPage(page - 1)}  className={s.pButton}>Предыдущая</button>
                                    {pages.map(elem => <button style={{backgroundColor: `${elem === page-1 ? '#00A2FA' : ''}`}} key={elem} onClick={handleClick} className={s.pButton}>{elem+1}</button>)}
                                <button disabled={page === pagesCount - 1} onClick={() => setPage(page + 1)} className={s.pButton} >Следующая</button>
                            <button disabled={page === pagesCount - 1} onClick={() => setPage(pagesCount - 1)} className={`${s.pButton} ${s.lastBtn}`}>Последняя</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services