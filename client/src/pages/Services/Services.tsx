import React from 'react'
import s from './Services.module.css'

const Services = () => {
    return (
        <div>
            <div className={s.content__wrapper}>
                <div className={s.services__wrapper}>
                    <div className={s.service__wrapper}>
                        <h3>Груминг для небольших длинношерстных собак</h3>
                        <div className={s.types__services__wrapper}>
                            <div className={s.types__service__wrapper}>
                                <div className={s.service__name__wrapper}>
                                    <h3>1-Груминг "Полный комплекс"</h3>
                                </div>
                                <div className={s.service__desc__wrapper}>
                                    <h4>Мытье, сушка, модельная или гигиеническая стрижка,
                                        подрезание когтей и гигиена ушей.
                                    </h4>
                                    <div className={s.service__price__wrapper}>
                                        <h4>
                                            Стоимость: 3200 руб.
                                        </h4>
                                        <button>Заказать услугу</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div className={s.service__wrapper}>
                        <h3>Груминг для небольших длинношерстных собак</h3>
                        <div className={s.types__services__wrapper}>
                            <div className={s.types__service__wrapper}>
                                <div className={s.service__name__wrapper}>
                                    <h3>1-Груминг "Полный комплекс"</h3>
                                </div>
                                <div className={s.service__desc__wrapper}>
                                    <h4>
                                        Мытье, сушка, подрезание когтей, гигиена ушей.
                                        Для собак с ниспадающей шерстью, как у йорков,
                                        в гигиенический комплекс входит выбривание кончиков ушей,
                                        «открытые» глазки, выбривание гениталий, шерсти между подушечек лап
                                        и окантовка лап по уровню пола.
                                    </h4>
                                    <div className={s.service__price__wrapper}>
                                        <h4>
                                            Стоимость: 3200 руб.
                                        </h4>
                                        <button>Заказать услугу</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Services