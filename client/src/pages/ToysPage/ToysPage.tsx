import React from 'react'
import s from './ToysPage.module.css'
import ToyItem from "../../components/ToyItem/ToyItem"
import ToyPagination from "../../components/ToyPagination/ToyPagination";

const ToysPage = () => {
    return (
        <>
        <div className={s.toys__wrapper}>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
            <ToyItem/>
        </div>
            <div className={s.pagination__wrapper}>
                <ToyPagination />
            </div>
        </>
    )
}

export default ToysPage