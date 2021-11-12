import React from 'react'
import s from './Home.module.css'
import dog from './../../utils/images/dog.png'
import paw from './../../utils/images/paw.png'
import HomeChart from "../../components/HomeChart"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.items__wrapper}>
                <img src={dog} className={s.dog} alt="dog"></img>
                <img src={paw} className={s.paw__one} alt="paw"></img>
                <img src={paw} className={s.paw__two} alt="paw"></img>

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
                    <Link to={'/services'}>Перейти к услугам</Link>
                </div>
            </div>
            <div className={s.content__wrapper}>
                <img src={paw} className={s.paw__three} alt="paw"></img>
                <h3>Количество выполненных услуг</h3>
                <div className={s.chart__wrapper}>
                    <HomeChart/>
                </div>
            </div>
        </div>
    )
}

export default Home