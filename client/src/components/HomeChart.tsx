import React from 'react'
import { Line } from "react-chartjs-2"

const rand = () => Math.floor(Math.random() * 255)


const data = {
    labels: ['Январь', 'Февраль', 'Март', 'Арель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
        {
            label: 'Выполненные услуги',
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(),],
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)'
        },
    ]
}

const HomeChart = () => {
    return (
        <div className="App">
            <Line data={data} />
        </div>
    )
}

export default HomeChart