import React from 'react'
import s from './ToyPagination.module.css'

const ToyPagination = () => {
    return (
        <div className={s.toy__pagination__wrapper}>
           <button>
               ←
           </button>
            <button>
               →
           </button>
        </div>
    )
}

export default ToyPagination