import React, {useState} from 'react'
import s from './ToysPage.module.css'
import ToyItem from "../../components/ToyItem/ToyItem"
import ToyPagination from "../../components/ToyPagination/ToyPagination"
import {toyAPI} from "../../servicesAPI/ToysService"

const ToysPage = () => {

    const [limit] = useState(6)
    const {data: toys, isLoading, isError} = toyAPI.useFetchAllToysQuery(limit)

    return (
        <>
        <div className={s.toys__wrapper}>
            {
                isLoading && isLoading ? <h1>Загрузка.....</h1>
                    :
                toys && toys.rows.map(toy => {
                    return <ToyItem key={toy.id} id={toy.id} name={toy.name} img={toy.img} price={toy.price} />
                })
            }
            { isError && <h1>Произошла ошибка при загрузке</h1> }
        </div>
            <div className={s.pagination__wrapper}>
                <ToyPagination />
            </div>
        </>
    )
}

export default ToysPage