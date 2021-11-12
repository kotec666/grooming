import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2'

const rand = () => Math.floor(Math.random() * 255)

const genData = () => ({
    labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    datasets: [
        {
            type: 'line',
            label: 'Выполненные услуги',
            borderColor: `rgb(${rand()}, ${rand()}, ${rand()})`,
            borderWidth: 2,
            fill: false,
            data: [rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand(), rand()],
        }
    ],
})

const options = {
    options: {
        animations: {
            radius: {
                duration: 400,
                easing: 'linear',
                loop: (context) => context.active
            }
        },
        hoverRadius: 12,
        hoverBackgroundColor: 'yellow',
        interaction: {
            mode: 'nearest',
            intersect: false,
            axis: 'x'
        },
        plugins: {
            tooltip: {
                enabled: false
            }
        }
    },
}

const data = genData()

const HomeChart = () => {
    const [clickedElement, setClickedElement] = useState('')
    // const [clickedDataset, setClickedDataset] = useState('')
    // const [clickedElements, setClickedElements] = useState('')

    const getDatasetAtEvent = dataset => {
        if (!dataset.length) return

 //     const datasetIndex = dataset[0].datasetIndex
 //       setClickedDataset(data.datasets[datasetIndex].label)
    }

    const getElementAtEvent = element => {
        if (!element.length) return

        const { datasetIndex, index } = element[0];
        setClickedElement(
            `${data.labels[index]} - ${data.datasets[datasetIndex].data[index]}`
        )
    }

    const getElementsAtEvent = elements => {
        if (!elements.length) return

  //      setClickedElements(elements.length)
    }

    return (
        <>
            <Bar
                data={data}
                options={options}
                getDatasetAtEvent={getDatasetAtEvent}
                getElementAtEvent={getElementAtEvent}
                getElementsAtEvent={getElementsAtEvent}
            />
            <div className='text-center'>
                <p>{clickedElement}</p>
                {/*{<p>{clickedDataset}</p>*/}
                {/*    <p>{clickedElements}</p>}*/}
            </div>
        </>
    )
}

export default HomeChart