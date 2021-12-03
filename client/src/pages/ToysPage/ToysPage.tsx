import React, {useState} from 'react'
import s from './ToysPage.module.css'
import ToyItem from "../../components/ToyItem/ToyItem"
import {toyAPI} from "../../servicesAPI/ToysService"
import ToyPagination from "../../components/ToyPagination/ToyPagination"
import {calculatePagesCount} from "../../hooks/usePagination"



const ToysPage = () => {

    const pageSize = 6 // limit query parameter for ToysService

    const [page, setPage] = useState(1)
    const { data: toys, isLoading, isError } = toyAPI.useFetchAllToysQuery({limit: pageSize, page})

    let toysCount = 1
    if (toys) {
        toysCount = toys.count
    }
    const totalCount = toysCount
    const pagesCount = calculatePagesCount(pageSize, totalCount)



    return (
        <>
        <div className={s.toys__wrapper}>
            {
                isLoading && isLoading ? <h1>Загрузка.....</h1>
                    :
                toys && toys.rows.map(toy => {
                    return <ToyItem key={toy.id} isBasket={false} id={toy.id} name={toy.name} img={toy.img} price={toy.price} />
                })
            }
            { isError && <h1>Произошла ошибка при загрузке</h1> }
        </div>
            <div className={s.pagination__wrapper}>
                <ToyPagination pagesCount={pagesCount} page={page} setPage={setPage} />
            </div>
        </>
    )
}

export default ToysPage