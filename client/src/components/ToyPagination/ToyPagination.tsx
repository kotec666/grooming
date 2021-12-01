import React, {Dispatch, SetStateAction} from 'react'
import s from './ToyPagination.module.css'



interface IToyPaginationProps {
    pagesCount: number
    page: number
    setPage: Dispatch<SetStateAction<number>>
}

const ToyPagination:React.FC<IToyPaginationProps> = ({pagesCount, page, setPage }) => {



    return (
        <div className={s.toy__pagination__wrapper}>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
            >
                ←
            </button>
            <h3>
                {page}/{pagesCount}
            </h3>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === pagesCount}
            >
                →
            </button>
        </div>
    )
}

export default ToyPagination