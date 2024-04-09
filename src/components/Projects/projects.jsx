import React from 'react'
import './projects.scss'
import { NavLink } from 'react-router-dom'
import CardButton from '../Cards/CardButton/cardButton'

function Projects() {

    return (
        <div className='projects'>
            <span>посмотрите проекты домов</span>
            <div className='masonry-container'>
                {data.map((item) => (
                    <div className='masonry' key={item.id}>
                        <div style={{ maxWidth: '450px', minHeight: '300px' }}>
                            <img src={item.img} alt="" />
                        </div>
                        <span>{item.title}</span>
                        <div>
                            <p>{item.square}</p>
                            <p>{item.price}</p>
                        </div>
                        <div className='buttons'>
                            <NavLink to={'/detail-page'}><CardButton text='ПОДРОБНЕЕ' /></NavLink>
                            <button><NavLink to={'/calculator'}>УЗНАТЬ СТОИМОСТЬ</NavLink></button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

const data = [
    {
        id: 1,
        img: 'https://static.tildacdn.com/tild3438-6264-4332-b061-383638623030/2.png',
        title: 'Моне (СК112/1)',
        square: '112 м2',
        price: '4 950 000 руб.'
    },
    {
        id: 2,
        img: 'https://static.tildacdn.com/tild3036-3037-4730-a436-306566373034/4.JPG',
        title: 'Малевич (СК127/1)',
        square: '127 м2',
        price: '6 100 000 руб.'
    },
    {
        id: 3,
        img: 'https://static.tildacdn.com/tild6535-6236-4637-a531-633035666638/-5364027936816086653.jpg',
        title: 'Пикассо (СК212/1)',
        square: '212 м2',
        price: '9 950 000 руб.'
    },
    {
        id: 4,
        img: 'https://static.tildacdn.com/tild3363-3063-4162-b838-376335303635/1.jpg',
        title: 'Дали (СК121/1)',
        square: '121 м2',
        price: '6 000 000 руб.'
    },
    {
        id: 5,
        img: 'https://static.tildacdn.com/tild3766-3364-4636-b832-616336663863/IMG-20230502-WA0003.jpg',
        title: 'БАРНХАУС (СК125/1)',
        square: '125 м2',
        price: '4 680 000 руб.'
    },
    {
        id: 6,
        img: 'https://static.tildacdn.com/tild3664-6237-4161-a334-316239613164/IMG-20230502-WA0001.jpg',
        title: 'Скандик (СК125/2)',
        square: '125 м2',
        price: '4 550 000 руб.'
    },
    {
        id: 7,
        img: 'https://static.tildacdn.com/tild3130-3237-4366-b264-333339623432/Screenshot_20220504-.JPG',
        title: 'белый дом (СК187/1)',
        square: '187 м2',
        price: '7 900 000 руб.'
    },
    {
        id: 8,
        img: 'https://static.tildacdn.com/tild3432-3039-4432-b266-636238346366/00142.JPG',
        title: 'Весенний (СК184/1)',
        square: '184 м2',
        price: '7 200 000 руб.'
    },
    {
        id: 9,
        img: 'https://static.tildacdn.com/tild3066-6363-4132-b835-396364333361/1.JPG',
        title: 'рига (СК280/1)',
        square: '280 м2',
        price: '14 800 000 руб.'
    }
]

export default Projects