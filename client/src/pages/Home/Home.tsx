import React from 'react'
import s from './Home.module.css'
import dog from './../../utils/images/dog.png'
import paw from './../../utils/images/paw.png'
import HomeChart from "../../components/HomeChart"
import { Link } from 'react-router-dom'
import {SERVICES_ROUTE} from "../../utils/consts"

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.items__wrapper}>
                <img src={dog} className={s.dog} alt="dog"/>
                <img src={paw} className={s.paw__one} alt="paw"/>
                <img src={paw} className={s.paw__two} alt="paw"/>

                <div className={s.text__wrapper}>
                    <h3>Бережный груминг для собак и кошек</h3>
                    <h4>
                        В просторном и светлом кабинете груминга вашему питомцу окажут
                        все необходимые процедуры по уходу за шерстью, когтями, ушами.
                        Мы используем только профессиональное оборудование и безопасную
                        для здоровья животных гипоаллергенную косметику:
                        Artero, Chris Christensen, Iv San Bernard, Goop
                        и другие качественные марки.
                    </h4>
                    <Link to={SERVICES_ROUTE}>Перейти к услугам</Link>
                </div>
            </div>
            <div className={s.content__wrapper}>
                <img src={paw} className={s.paw__three} alt="paw"/>
                <h3>Количество выполненных услуг</h3>
                <div className={s.chart__wrapper}>
                    <HomeChart/>
                </div>
            </div>
        </div>
    )
}

export default Home