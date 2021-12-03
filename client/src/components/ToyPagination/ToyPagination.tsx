import React, {Dispatch, SetStateAction} from 'react'
import s from './ToyPagination.module.css'



interface IToyPaginationProps {
    pagesCount: number
    page: number
    setPage: Dispatch<SetStateAction<number>>
}

const ToyPagination:React.FC<IToyPaginationProps> = ({pagesCount, page, setPage }) => {


    const pages = []
    if(pagesCount) {
        for(let i = 0; i < pagesCount; i++)
            pages.push(i)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as Element
        const newPage = Number(target.innerHTML)
        if(newPage)
            setPage(newPage)
    }

    return (
        <div style={{display:'flex'}}>
            <button disabled={page === 1} onClick={() => setPage(1)} className={`${s.pButton} ${s.firstBtn}`}>Первая</button>
                <button disabled={page === 1} onClick={() => setPage(page - 1)} className={s.pButton}>Предыдущая</button>
                    {pages.map(elem => <button style={{backgroundColor: `${elem === page-1 ? '#00A2FA' : ''}`}} key={elem} onClick={handleClick} className={s.pButton}>{elem+1}</button>)}
                <button disabled={page === pagesCount} onClick={() => setPage(page + 1)} className={s.pButton}>Следующая</button>
            <button disabled={page === pagesCount} onClick={() => setPage(pagesCount)} className={`${s.pButton} ${s.lastBtn}`}>Последняя</button>
        </div>
    )
}

export default ToyPagination